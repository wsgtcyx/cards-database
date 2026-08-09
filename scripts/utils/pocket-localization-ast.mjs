import path from 'node:path'
import ts from 'typescript'

export const TARGET_LOCALES = Object.freeze(['fr', 'es', 'it', 'de', 'pt-br', 'zh-tw'])

export function parseTypeScript(source, filename) {
	const sourceFile = ts.createSourceFile(filename, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
	const diagnostics = sourceFile.parseDiagnostics ?? []
	if (diagnostics.length > 0) {
		const diagnostic = diagnostics[0]
		const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n')
		throw new Error(`${filename}: TypeScript parse error: ${message}`)
	}
	return sourceFile
}

export function unwrapExpression(node) {
	let current = node
	while (current && (
		ts.isParenthesizedExpression(current)
		|| ts.isAsExpression(current)
		|| ts.isTypeAssertionExpression(current)
		|| ts.isNonNullExpression(current)
		|| (ts.isSatisfiesExpression && ts.isSatisfiesExpression(current))
	)) current = current.expression
	return current
}

export function propertyName(property) {
	if (!property?.name) return undefined
	if (ts.isIdentifier(property.name) || ts.isStringLiteral(property.name) || ts.isNumericLiteral(property.name)) {
		return property.name.text
	}
	return undefined
}

export function findProperty(object, name) {
	if (!object || !ts.isObjectLiteralExpression(object)) return undefined
	return object.properties.find(property => propertyName(property) === name)
}

export function propertyInitializer(property) {
	if (!property || !ts.isPropertyAssignment(property)) return undefined
	return unwrapExpression(property.initializer)
}

export function objectProperty(object, name) {
	const initializer = propertyInitializer(findProperty(object, name))
	return initializer && ts.isObjectLiteralExpression(initializer) ? initializer : undefined
}

export function arrayProperty(object, name) {
	const initializer = propertyInitializer(findProperty(object, name))
	return initializer && ts.isArrayLiteralExpression(initializer) ? initializer : undefined
}

export function literalString(node) {
	const value = unwrapExpression(node)
	return value && (ts.isStringLiteral(value) || ts.isNoSubstitutionTemplateLiteral(value)) ? value.text : undefined
}

export function staticString(node, sourceFile, seen = new Set()) {
	const direct = literalString(node)
	if (direct !== undefined) return direct
	const value = unwrapExpression(node)
	if (!value || !sourceFile || !ts.isIdentifier(value) || seen.has(value.text)) return undefined
	seen.add(value.text)
	for (const statement of sourceFile.statements) {
		if (!ts.isVariableStatement(statement)) continue
		for (const declaration of statement.declarationList.declarations) {
			if (ts.isIdentifier(declaration.name) && declaration.name.text === value.text) {
				return staticString(declaration.initializer, sourceFile, seen)
			}
		}
	}
	return undefined
}

export function stringProperty(object, name) {
	return literalString(propertyInitializer(findProperty(object, name)))
}

export function findVariableObject(sourceFile, variableName) {
	let result
	function visit(node) {
		if (result) return
		if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && node.name.text === variableName) {
			const initializer = unwrapExpression(node.initializer)
			if (initializer && ts.isObjectLiteralExpression(initializer)) result = initializer
		}
		ts.forEachChild(node, visit)
	}
	visit(sourceFile)
	return result
}

export function parseFieldPath(value) {
	if (typeof value !== 'string' || value.length === 0) throw new Error('Field path must be a non-empty string')
	const segments = []
	let offset = 0
	const first = value.slice(offset).match(/^[A-Za-z_$][\w$]*/u)
	if (!first) throw new Error(`Invalid field path: ${value}`)
	segments.push({ type: 'property', value: first[0] })
	offset += first[0].length
	while (offset < value.length) {
		if (value[offset] === '.') {
			const match = value.slice(offset + 1).match(/^[A-Za-z_$][\w$]*/u)
			if (!match) throw new Error(`Invalid field path: ${value}`)
			segments.push({ type: 'property', value: match[0] })
			offset += match[0].length + 1
			continue
		}
		if (value[offset] === '[') {
			const indexMatch = value.slice(offset).match(/^\[(0|[1-9]\d*)\]/u)
			if (indexMatch) {
				segments.push({ type: 'index', value: Number(indexMatch[1]) })
				offset += indexMatch[0].length
				continue
			}
			const propertyMatch = value.slice(offset).match(/^\["(?:[^"\\]|\\.)*"\]/u)
			if (propertyMatch) {
				let property
				try {
					property = JSON.parse(propertyMatch[0].slice(1, -1))
				} catch {
					throw new Error(`Invalid field path: ${value}`)
				}
				if (typeof property !== 'string' || property.length === 0) throw new Error(`Invalid field path: ${value}`)
				segments.push({ type: 'property', value: property })
				offset += propertyMatch[0].length
				continue
			}
			throw new Error(`Invalid field path: ${value}`)
		}
		throw new Error(`Invalid field path: ${value}`)
	}
	return segments
}

export function resolveFieldPath(root, segments, displayPath) {
	let current = root
	for (const segment of segments) {
		if (segment.type === 'property') {
			if (!ts.isObjectLiteralExpression(current)) {
				throw new Error(`${displayPath}: ${segment.value} requires an object literal`)
			}
			const property = findProperty(current, segment.value)
			if (!property) throw new Error(`${displayPath}: property ${segment.value} does not exist`)
			current = propertyInitializer(property)
			if (!current) throw new Error(`${displayPath}: property ${segment.value} is not a value property`)
			continue
		}
		if (!ts.isArrayLiteralExpression(current)) {
			throw new Error(`${displayPath}: index ${segment.value} requires an array literal`)
		}
		current = unwrapExpression(current.elements[segment.value])
		if (!current) throw new Error(`${displayPath}: array index ${segment.value} does not exist`)
	}
	return current
}

export function relativePosix(root, target) {
	const relative = path.relative(root, target)
	if (!relative || relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative)) {
		throw new Error(`Path escapes repository root: ${target}`)
	}
	return relative.split(path.sep).join('/')
}

export function resolveInside(root, candidate, label = 'Path') {
	if (typeof candidate !== 'string' || candidate.length === 0 || path.isAbsolute(candidate)) {
		throw new Error(`${label} must be a non-empty repository-relative path`)
	}
	const target = path.resolve(root, candidate)
	const relative = path.relative(root, target)
	if (!relative || relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative)) {
		throw new Error(`${label} escapes repository root: ${candidate}`)
	}
	return target
}
