import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';
import ts from 'typescript';
import { createHash } from 'node:crypto';

const root = new URL('../meta/pocket-source-reviews/P-C/', import.meta.url);
const read = name => JSON.parse(fs.readFileSync(new URL(name, root), 'utf8'));
const reviewed = read('P-C.reviewed-raw.json');
const audit = read('P-C.localization-audit.json');
const locales = ['en', 'fr', 'es', 'it', 'de', 'pt-br', 'zh-tw', 'ja', 'ko'];
function loadCard(number) {
 const file = new URL(`../data/Pokémon TCG Pocket/Promos-C/${number}.ts`, import.meta.url);
 const source = fs.readFileSync(file, 'utf8').replace(/^import .*;\s*$/gm, '');
 const compiled = ts.transpileModule(source, {compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText;
 const context = {exports:{}, Set:{id:'P-C'}};
 vm.runInNewContext(compiled, context);
 return JSON.parse(JSON.stringify(context.exports.default));
}

test('Promo C imports all reviewed native metadata without changing non-pack rewards', () => {
 assert.equal(audit.passed, true);
 assert.equal(audit.reviewedCardsSha256, createHash('sha256').update(JSON.stringify(reviewed)).digest('hex'));
 assert.equal(Object.keys(reviewed).length, 13);
 for (const [id, expected] of Object.entries(reviewed)) {
  const actual = loadCard(id.slice(-3));
  delete actual.set;
  for (const locale of locales) assert(actual.image[locale].includes(`/${locale}/tcgp/P-C/`), `${id}.${locale}`);
  delete actual.image;
  // The API uses the only booster by default; [] is an explicit non-pack reward.
  actual.boosters ??= ['vol1'];
  assert.deepEqual(actual, expected, id);
 }
 assert.deepEqual(Object.entries(reviewed).filter(([,c]) => c.boosters.includes('vol1')).map(([id])=>id), Array.from({length:8},(_,i)=>`P-C-${String(i+2).padStart(3,'0')}`));
});

test('Promo C native review covers all source images and binds the ordinary flavor donors', () => {
 const evidence = read('P-C.native-review.json');
 assert.equal(evidence.reviewedCardsSha256, audit.reviewedCardsSha256);
 assert.equal(evidence.records.length, 117);
 for (const [id, card] of Object.entries(reviewed)) for (const locale of locales) {
  const entries = evidence.records.filter(e => e.cardId === id && e.locale === locale);
  assert.equal(entries.length, 1);
  assert.match(entries[0].imageSha256, /^[0-9a-f]{64}$/);
  assert.equal(entries[0].chosen.name, card.name[locale]);
  if (card.description) assert.equal(entries[0].chosen.description, card.description[locale]);
 }
 const mechanics = read('P-C.mechanics-audit.json');
 assert.equal(mechanics.passed, true);
 assert.equal(mechanics.donorBindings.length, 4);
 assert.equal(evidence.records.filter(r => r.flavorDonor).length, 36);
 assert.equal(reviewed['P-C-003'].attacks[0].name.de, 'Psyschub');
 assert.match(reviewed['P-C-011'].attacks[0].effect.it, /Dolce Staffetta/);
 assert.match(reviewed['P-C-011'].attacks[0].effect.de, /Süße Staffel/);
});
