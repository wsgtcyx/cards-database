import apicache from 'apicache'
import express, { type Request, type Response } from 'express'
import { Errors, sendError } from '../../libs/Errors'
import { checkLanguage } from '../../util'
import { getAllCards, getCardById, toBrief } from '../Components/Card'
import { findOneSerie } from '../Components/Serie'
import { findOneSet } from '../Components/Set'
import { CatalogSearchValidationError, getCardRelations, getCatalogSearchOptions, searchCatalogCards } from '../Components/CardSearch'

type CustomRequest = Request & { DO_NOT_CACHE?: boolean }
const server = express.Router()

server.use(apicache.middleware('1 day', (req: CustomRequest, res: Response) => !req.DO_NOT_CACHE
	&& !req.path.endsWith('/cards/search')
	&& res.statusCode < 400
	&& process.env.NODE_ENV === 'production'
	&& req.method === 'GET', {}))

server.get('/:lang/cards/search/options', (req, res) => {
	const { lang } = req.params
	if (!checkLanguage(lang)) return sendError(Errors.LANGUAGE_INVALID, res, { lang })
	if (Object.keys(req.query).length > 0) {
		return res.type('application/problem+json').status(400).json({
			type: 'https://tcgdex.dev/errors/catalog-search-invalid',
			title: 'Invalid card catalog search parameters', status: 400,
			detail: 'search options does not accept query parameters', endpoint: req.url, method: req.method,
		}).end()
	}
	res.json(getCatalogSearchOptions(lang))
})

server.get('/:lang/cards/search', (req: CustomRequest, res) => {
	const { lang } = req.params
	req.DO_NOT_CACHE = true
	if (!checkLanguage(lang)) return sendError(Errors.LANGUAGE_INVALID, res, { lang })
	try {
		res.json(searchCatalogCards(lang, req.query))
	} catch (error) {
		if (!(error instanceof CatalogSearchValidationError)) throw error
		res.type('application/problem+json').status(400).json({
			type: 'https://tcgdex.dev/errors/catalog-search-invalid',
			title: 'Invalid card catalog search parameters', status: 400,
			detail: error.details.join('; '), endpoint: req.url, method: req.method,
		}).end()
	}
})

server.get('/:lang/cards/:cardId/relations', (req, res) => {
	const { lang, cardId } = req.params
	if (!checkLanguage(lang)) return sendError(Errors.LANGUAGE_INVALID, res, { lang })
	const relations = getCardRelations(lang, cardId)
	if (!relations) return sendError(Errors.NOT_FOUND, res, { details: `Card ${cardId} not found` })
	res.json(relations)
})

server.get('/:lang/cards', async (req, res) => {
	const { lang } = req.params
	if (!checkLanguage(lang)) return sendError(Errors.LANGUAGE_INVALID, res, { lang })
	if (Object.keys(req.query).length > 0) return sendError(Errors.NOT_FOUND, res)
	res.json((await getAllCards(lang)).map(toBrief))
})

server.get('/:lang/cards/:id', async (req, res) => {
	const { lang, id } = req.params
	if (!checkLanguage(lang)) return sendError(Errors.LANGUAGE_INVALID, res, { lang })
	const card = await getCardById(lang, id.toLowerCase())
	if (!card) return sendError(Errors.NOT_FOUND, res)
	res.json(card)
})

server.get('/:lang/sets/:id', async (req, res) => {
	const { lang, id } = req.params
	if (!checkLanguage(lang)) return sendError(Errors.LANGUAGE_INVALID, res, { lang })
	const set = await findOneSet(lang, { id: id.toLowerCase() })
	if (!set) return sendError(Errors.NOT_FOUND, res)
	res.json(set)
})

server.get('/:lang/series/tcgp', async (req, res) => {
	const { lang } = req.params
	if (!checkLanguage(lang)) return sendError(Errors.LANGUAGE_INVALID, res, { lang })
	const serie = await findOneSerie(lang, { id: 'tcgp' })
	if (!serie) return sendError(Errors.NOT_FOUND, res)
	res.json(serie)
})

export default server
