import fs from 'fs'
import path from 'path'
import ts from 'typescript'
import { glob } from 'glob'

type LangKey = 'fr' | 'es' | 'it' | 'de' | 'pt-br' | 'zh-tw'

const TARGET_LANGS: LangKey[] = ['fr', 'es', 'it', 'de', 'pt-br', 'zh-tw']
const DEFAULT_PATTERN = 'data/Pokémon TCG Pocket/Mega Rising/**/*.ts'
const DEFAULT_MAPPING = 'scripts/tmp/pocket-translations.json'

interface MappingEntry {
	en?: string
	[key: string]: string | undefined
}

interface Stats {
	files: number
	changed: number
	added: number
	skippedNoEn: number
	skippedNoMap: number
	missingInMap: Array<{ file: string, path: string, en?: string }>
}

function decodeUnicodeEscapes(text: string): string {
	return text.replace(/\\u([\dA-Fa-f]{4})/g, (_m, hex) => String.fromCharCode(parseInt(hex, 16)))
}

function getArg(name: string, fallback?: string): string | undefined {
	const arg = process.argv.find(a => a.startsWith(`--${name}=`))
	if (arg) return arg.split('=')[1]
	return fallback
}

function hasFlag(name: string): boolean {
	return process.argv.includes(`--${name}`) || process.argv.includes(`-${name}`)
}

function getPropName(name: ts.PropertyName): string | null {
	if (ts.isIdentifier(name) || ts.isStringLiteral(name) || ts.isNumericLiteral(name)) return name.text
	return null
}

function getStringValue(expr: ts.Expression): string | null {
	if (ts.isStringLiteral(expr) || ts.isNoSubstitutionTemplateLiteral(expr)) return expr.text
	return null
}

function isLangObject(node: ts.ObjectLiteralExpression): boolean {
	return node.properties.some(p => ts.isPropertyAssignment(p) && getPropName(p.name) === 'en')
}

function main() {
	const pattern = getArg('pattern', DEFAULT_PATTERN)!
	const mappingFile = getArg('mapping', DEFAULT_MAPPING)!
	const write = hasFlag('write')

	if (!fs.existsSync(mappingFile)) {
		console.error(`Mapping file not found: ${mappingFile}`)
		process.exit(1)
	}

	const mapping: Record<string, MappingEntry> = JSON.parse(fs.readFileSync(mappingFile, 'utf-8'))

	glob(pattern, { absolute: true, cwd: process.cwd() }).then(files => {
		const stats: Stats = {
			files: files.length,
			changed: 0,
			added: 0,
			skippedNoEn: 0,
			skippedNoMap: 0,
			missingInMap: []
		}

		const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed })

		for (const file of files) {
			const sourceText = fs.readFileSync(file, 'utf-8')
			const sourceFile = ts.createSourceFile(file, sourceText, ts.ScriptTarget.Latest, true)
			let fileChanged = false
			const missingInThisFile: Array<{ path: string, en?: string }> = []

			const transformer: ts.TransformerFactory<ts.SourceFile> = (context) => {
				const visit = (node: ts.Node): ts.VisitResult<ts.Node> => {
					if (ts.isObjectLiteralExpression(node) && isLangObject(node)) {
						const enProp = node.properties.find(p => ts.isPropertyAssignment(p) && getPropName(p.name) === 'en') as ts.PropertyAssignment | undefined
						const enVal = enProp ? getStringValue(enProp.initializer) : null
						if (!enVal) {
							stats.skippedNoEn++
							return node
						}

						const mapEntry = mapping[enVal]
						if (!mapEntry) {
							stats.skippedNoMap++
							missingInThisFile.push({ path: '', en: enVal })
							return node
						}

						const existing = new Set(
							node.properties
								.map(p => ts.isPropertyAssignment(p) ? getPropName(p.name) : null)
								.filter((n): n is string => !!n)
						)

						const newProps = [...node.properties]
						let addedHere = 0

						for (const lang of TARGET_LANGS) {
							if (existing.has(lang)) continue
							const translated = mapEntry[lang]
							if (!translated) {
								missingInThisFile.push({ path: '', en: enVal })
								continue
							}
							const nameNode = ts.factory.createStringLiteral(lang)
							const valueNode = ts.factory.createStringLiteral(translated)
							newProps.push(ts.factory.createPropertyAssignment(nameNode, valueNode))
							addedHere++
						}

						if (addedHere > 0) {
							stats.added += addedHere
							fileChanged = true
							return ts.factory.updateObjectLiteralExpression(node, newProps)
						}
						return node
					}
					return ts.visitEachChild(node, visit, context)
				}

				return (root: ts.SourceFile) => ts.visitNode(root, visit) as ts.SourceFile
			}

			const { transformed } = ts.transform(sourceFile, [transformer])
			const transformedFile = transformed[0] as ts.SourceFile

			if (fileChanged) {
				const printed = printer.printFile(transformedFile)
				const decoded = decodeUnicodeEscapes(printed)
				if (write) {
					fs.writeFileSync(file, decoded, 'utf-8')
				}
				stats.changed++
			}

			for (const miss of missingInThisFile) {
				stats.missingInMap.push({ file: path.relative(process.cwd(), file), path: miss.path, en: miss.en })
			}
		}

		console.log(`Files scanned: ${stats.files}`)
		console.log(`Files changed: ${stats.changed}`)
		console.log(`Props added: ${stats.added}`)
		console.log(`Skipped (no en or no map): ${stats.skippedNoEn + stats.skippedNoMap}`)
		if (stats.missingInMap.length > 0) {
			console.log(`Missing mapping entries: ${stats.missingInMap.length}`)
		}

		if (!write && stats.changed > 0) {
			console.log('Dry run: re-run with --write to apply changes.')
		}
	}).catch(err => {
		console.error(err)
		process.exit(1)
	})
}

main()

