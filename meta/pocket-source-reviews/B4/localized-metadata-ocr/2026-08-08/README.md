# B4 localized metadata OCR review

## Scope

- Source images include the audited German and Italian B4 images plus the owned-R2
  French, Spanish, Brazilian Portuguese, and Traditional Chinese images selected by
  the missing-field report.
- Every downloaded byte was checked against the recorded SHA-256 before OCR.
- Primary engine: macOS Apple Vision accurate text recognition.
- Secondary engine for German and Italian: Tesseract 5 with `deu+eng` or `ita+eng`.
- Independent engine: configured PaddleOCR Text Recognition API, invoked only through
  its official Skill caller. Persisted evidence removes provider-hosted image URLs and
  keeps text, confidence/blocks, coordinates, source image SHA-256, and errors.

## Result

- PaddleOCR image records: 735 (de 166, it 166, fr 74, es 76, pt-br 152,
  zh-tw 101); engine failures after bounded retries: 0.
- Missing localized metadata values examined: 913.
- Grouping repeated printings by English text, locale, and field yielded 686 review
  decisions. The reviewed `mapping.json` contains 233 localized values after official
  web confirmations, removal of a corrupt false-positive, and deterministic restoration
  of energy/type placeholders from the English structured fields.
- Applying that reviewed mapping added 363 missing properties across 140 B4 card files;
  550 localized properties remain unresolved and were not filled.
- Web cross-validation findings and source capability limits are recorded in
  `web-cross-validation.md`.

The candidate artifacts deliberately report `publicationReady: false`.
Cross-engine agreement is not a publication gate because both engines can misread
energy icons, damage values, line order, full-art text regions, or adjacent rule text.
The approved subset was published separately in commit `5a85e02004`; the raw OCR and
candidate artifacts remain non-publication-ready and must not be applied directly.

The PaddleOCR API itself was healthy. Its initial smoke-test failure was caused by
the restricted execution environment blocking DNS; later rate-limited/time-out rows
were retried one at a time and merged only after ID, locale, and source SHA-256 checks.

## Reproduction

Run a ten-card pilot first, then remove `--cards` for the full set:

```bash
node scripts/ocr-localized-card-images.mjs \
  --downloads meta/pocket-source-reviews/localized-images/2026-08-08-pokeos-b4-de-it/downloads.json \
  --output-dir <persistent-evidence-dir> \
  --work-dir <temporary-work-dir> \
  --locales de,it \
  --cards 001,011,018,035,055,109,145,150,203,233
```

To add PaddleOCR as a third engine for a bounded pilot, pass the official caller:

```bash
node scripts/ocr-localized-card-images.mjs \
  --downloads meta/pocket-source-reviews/localized-images/2026-08-08-pokeos-b4-de-it/downloads.json \
  --output-dir <persistent-evidence-dir> \
  --work-dir <temporary-work-dir> \
  --locales de,it \
  --cards 035,145,233 \
  --paddle-caller /absolute/path/to/paddleocr-text-recognition/scripts/ocr_caller.py
```

Build review candidates from a current missing-fields report:

```bash
npx tsx scripts/build-localized-ocr-candidates.ts \
  --missing=<missing-fields.json> \
  --evidence-dir=<persistent-apple-evidence-dir> \
  --paddle-evidence-dir=<persistent-paddle-evidence-dir> \
  --output=<persistent-evidence-dir>/candidates-<locales>.json
```

The candidate builder exits with status 2 by design. Candidate agreement is never an
automatic publication decision: inspect icon placeholders, punctuation, incomplete
lines, duplicate-print support, and independent web evidence before adding a value to
the reviewed mapping.
