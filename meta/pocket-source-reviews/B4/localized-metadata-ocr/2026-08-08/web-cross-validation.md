# B4 localized metadata web cross-validation

Date: 2026-08-08

## Exclusion rule

`pokemontcgpocket.app` is the downstream product being verified. It and any mirror,
cached copy, translated copy, or search snippet derived from it are excluded from
upstream evidence and provenance. Search tools did return this domain; those results
were discarded before evaluating source coverage.

## Discovery and extraction tools used

- AnySearch `batch_search`: five independent B4 queries covering German, Italian,
  Spanish, Brazilian Portuguese, and Traditional Chinese.
- Exa `web_search_exa` and `web_fetch_exa`: independent source discovery and batched
  extraction of official Pokédex pages.
- Firecrawl `search` and `scrape`: source discovery plus extraction of an independent
  B4 single-card page. Raw fetched pages were isolated under `/private/tmp` and are
  not committed.
- Native web search/open: exact-string checks and direct inspection of official and
  independent pages.
- Direct public APIs/pages: TCGdex series/set API, PokeAPI species endpoint, official
  Pokémon Pokédex pages, and PocketCards B4 card pages.

## Source capability findings

| Source | Current B4 coverage | Safe use | Not safe for |
| --- | --- | --- | --- |
| Official Pokémon Pokédex | Species flavor text in several locales | Exact flavor/description match after matching the English version text | Pocket-only attacks, Abilities, Trainer effects |
| Official Taiwan Pokédex | Traditional Chinese species flavor text; direct page extraction works | Exact `zh-tw` description verification | Pocket-only mechanics |
| PocketCards.net | B4 card IDs, English mechanics, card/set facts, English card image; localized UI routes | Independent English/card-identity cross-check | Localized mechanics or descriptions; the localized page still renders English card text |
| TCGdex API | Online `tcgp` series currently ends at B2a; all tested B4 locale set endpoints return 404 | Negative coverage evidence only | Any B4 field |
| PokeAPI | Historical multilingual Pokédex entries | A localized flavor only when its English entry exactly matches the B4 English card description | Picking a merely similar or newest species description |
| Pokezentrum / PokéWiki / official B4 announcements | Set name, release, count or overview | Set-level facts | Per-card localized metadata |
| flibustier / R4PH1 datasets | English mechanics and/or name translations depending on repository revision | Pinned-field cross-check within declared coverage | Claiming full B4 localized rules text without a pinned file that contains it |

## Confirmed examples

- B4-106 Beldum Italian description: the official Italian Pokédex text matches the
  complete PaddleOCR candidate; Apple Vision captured only the first clause.
- B4-106 Beldum Spanish description: official Spanish Pokédex text matches the exact
  Apple Vision + PaddleOCR candidate.
- B4-106 Beldum Traditional Chinese description: the official Taiwan Pokédex supplies
  the clean text corresponding to the card-image OCR, including characters that both
  OCR engines confused.
- B4-106 Beldum German and French card-image candidates remain candidates until their
  exact official or independent localized text is captured; a similar historical
  Pokédex entry is not enough.

## Publication gate

Search discovery, an OCR success, or a multilingual page route cannot independently
approve a field. A production value requires an auditable field-level decision, with
the exact source URL or pinned repository location and the localized card-image SHA-256.
Energy/type icons must be restored from the English structured field and checked
against the localized card image; OCR glyph guesses are never published literally.
