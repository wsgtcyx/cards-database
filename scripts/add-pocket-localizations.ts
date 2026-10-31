import fs from 'fs'
import path from 'path'
import ts from 'typescript'
import { glob } from 'glob'

type LangKey = 'fr' | 'es' | 'it' | 'de' | 'pt-br' | 'zh-tw' | 'ja' | 'ko'

const TARGET_LANGS: LangKey[] = ['fr', 'es', 'it', 'de', 'pt-br', 'zh-tw', 'ja', 'ko']
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

function getArg(name: string, fallback?: string): string | undefined {
	const index = process.argv.indexOf(`--${name}`)
	if (index >= 0) return process.argv[index + 1]
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

 const requested = getArg('locales')?.split(',')
 const mapped = new Set(Object.values(mapping).flatMap(entry => Object.keys(entry)))
 const targetLangs = requested ?? TARGET_LANGS.filter(locale => mapped.has(locale))
 if (!targetLangs.length || new Set(targetLangs).size !== targetLangs.length || targetLangs.some(locale => !TARGET_LANGS.includes(locale as LangKey))) throw new Error('Expected unique supported --locales or localized mapping entries')
 const planned: Array<{file: string, before: string, after: string}> = []
	glob(pattern, { absolute: true, cwd: process.cwd() }).then(files => {
		if (!files.length) throw new Error(`No card files matched: ${pattern}`)
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

      const present = new Set(node.properties.map(p => ts.isPropertyAssignment(p) ? getPropName(p.name) : null))
      if (targetLangs.every(locale => present.has(locale))) return node
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

						for (const lang of targetLangs) {
							if (existing.has(lang)) continue
							const translated = mapEntry[lang]
							if (!translated) {
								missingInThisFile.push({ path: '', en: enVal })
								continue
							}
							const nameNode = ts.factory.createStringLiteral(lang)
							const valueNode = ts.factory.createStringLiteral(translated)
							ts.setEmitFlags(valueNode, ts.EmitFlags.NoAsciiEscaping)
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
				planned.push({ file, before: sourceText, after: printed })
				stats.changed++
			}

			for (const miss of missingInThisFile) {
				stats.missingInMap.push({ file: path.relative(process.cwd(), file), path: miss.path, en: miss.en })
			}
		}

  if (stats.missingInMap.length) {
   console.error(`Incomplete localization mapping: ${stats.missingInMap.length} entries; no files written`)
   process.exitCode = 1
  } else if (write) {
   for (const item of planned) if (fs.readFileSync(item.file, 'utf8') !== item.before) throw new Error(`File changed during localization: ${item.file}`)
   const staged: Array<{file: string, temporary: string, before: string}> = []
   const written: typeof staged = []
   try {
    for (const item of planned) {
     const temporary = `${item.file}.pocket-localize-${process.pid}.tmp`
     const fd = fs.openSync(temporary, 'wx')
     staged.push({file: item.file, temporary, before: item.before})
     try { fs.writeFileSync(fd, item.after, 'utf8') } finally { fs.closeSync(fd) }
    }
    for (const item of staged) if (fs.readFileSync(item.file, 'utf8') !== item.before) throw new Error(`File changed during localization: ${item.file}`)
    for (const item of staged) { fs.renameSync(item.temporary, item.file); written.push(item) }
   } catch (error) {
    for (const item of written.reverse()) fs.writeFileSync(item.file, item.before, 'utf8')
    throw error
   } finally {
    for (const item of staged) fs.rmSync(item.temporary, {force: true})
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

