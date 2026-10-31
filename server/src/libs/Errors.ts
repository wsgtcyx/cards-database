import type { Response } from 'express'
import { languages } from '../util'
import type RFC7807 from './RFCs/RFC7807'

export enum Errors {
	LANGUAGE_INVALID = 'language-invalid',
	NOT_FOUND = 'not-found',

	GENERAL = 'general'
}

const titles: Record<Errors, string> = {
	[Errors.LANGUAGE_INVALID]: 'The chosen language is not available in the database',
	[Errors.NOT_FOUND]: 'The resource you are trying to reach does not exists',

	[Errors.GENERAL]: 'An unknown error occured, please contact a developper with this message'
}

const japaneseTitles: Record<Errors, string> = {
	[Errors.LANGUAGE_INVALID]: '指定された言語には対応していません',
	[Errors.NOT_FOUND]: '指定されたデータが見つかりません',
	[Errors.GENERAL]: 'エラーが発生しました。このメッセージを添えて開発者にお問い合わせください',
}

const status: Record<Errors, number> = {
	[Errors.LANGUAGE_INVALID]: 404,
	[Errors.NOT_FOUND]: 404,

	[Errors.GENERAL]: 500
}

const details: Partial<Record<Errors, (meta?: Record<string, unknown>) => string>> = {
	[Errors.LANGUAGE_INVALID]: (meta) => `You must use one of the following languages (${languages.join(', ')}) while you used "${meta?.lang}"`,
}

export function sendError(error: Errors, res: Response, metadata?: Record<string, unknown>) {
	let pathname = (res.req.originalUrl || res.req.url).split('?')[0]
	try { pathname = decodeURIComponent(pathname) } catch {}
	const japanese = res.req.params?.lang === 'ja' || /^\/v2\/ja(?:\/|$)/iu.test(pathname)
	const json: RFC7807 & Record<string, unknown> = {
		type: `https://tcgdex.dev/errors/${error}`,
		title: japanese ? japaneseTitles[error] : titles[error],
		status: status[error],
		endpoint: res.req.url,
		method: res.req.method,
		...metadata
	}

	const dt = details[error]
	if (dt) {
		json.details = japanese ? `対応言語は ${languages.join(', ')} です。指定された言語: ${metadata?.lang}` : dt(metadata)
	}

	res.status(json.status ?? 500).json(json).end()
}
