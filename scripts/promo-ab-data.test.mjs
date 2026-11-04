import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';
import ts from 'typescript';
import { findVariableObject, arrayProperty, stringProperty, resolveFieldPath, parseFieldPath } from './utils/pocket-localization-ast.mjs';

const reviewRoot = new URL('../meta/pocket-source-reviews/promo-abc-2026-11-04/', import.meta.url);
const membership = JSON.parse(fs.readFileSync(new URL('ab-membership-review.json', reviewRoot)));
const raw = JSON.parse(fs.readFileSync(new URL('P-B-101-103.reviewed-raw.json', reviewRoot)));
const cardFile = id => new URL(`../data/Pokémon TCG Pocket/Promos-${id.split('-')[1]}/${id.split('-')[2]}.ts`, import.meta.url);

test('Promo A/B cards retain exact game pack membership, including non-pack rewards', () => {
 for (const [series, total] of [['A', 117], ['B', 103]]) {
  const files = fs.readdirSync(new URL(`../data/Pokémon TCG Pocket/Promos-${series}/`, import.meta.url)).filter(f => /^\d{3}\.ts$/.test(f)).sort();
  assert.deepEqual(files, Array.from({length:total}, (_, i) => `${String(i + 1).padStart(3, '0')}.ts`));
 }
 for (const row of membership.records) {
  const source = ts.createSourceFile(row.cardId, fs.readFileSync(cardFile(row.cardId), 'utf8'), ts.ScriptTarget.Latest, true);
  const card = findVariableObject(source, 'card');
  const boosters = arrayProperty(card, 'boosters');
  assert(boosters, `${row.cardId}: explicit pack membership required`);
  assert.deepEqual(boosters.elements.map(node => node.text), row.boosters, row.cardId);
 }
 assert.equal(membership.records.filter(row => row.cardId.startsWith('P-A-') && row.boosters.includes('vol9')).length, 7);
 assert.equal(membership.records.filter(row => row.cardId.startsWith('P-A-') && row.boosters.includes('vol11')).length, 5);
});

test('Promo corrections retain native numeric rules and source-specific rarity', () => {
 const read = id => findVariableObject(ts.createSourceFile(id, fs.readFileSync(cardFile(id), 'utf8'), ts.ScriptTarget.Latest, true), 'card');
 const localized = (id, field, locale) => stringProperty(resolveFieldPath(read(id), parseFieldPath(field), field), locale);
 const rarity = JSON.parse(fs.readFileSync(new URL('ab-rarity-illustrator.review.json', reviewRoot)));
 for (const row of rarity.corrections) {
  assert.equal(stringProperty(read(row.cardId), 'rarity'), row.expected, row.cardId);
 }
 for (const locale of ['en','fr','es','it','de','pt-br','zh-tw','ja','ko']) {
  assert.match(localized('P-B-085', 'attacks[0].effect', locale), /20/, locale);
  assert.doesNotMatch(localized('P-B-085', 'attacks[0].effect', locale), /30/, locale);
  assert.match(localized('P-B-086', 'abilities[0].effect', locale), /2/, locale);
 }
 assert.match(localized('P-B-006', 'attacks[0].effect', 'es'), /Si en todas sale cruz/);
 assert.match(localized('P-A-004', 'effect', 'en'), /3/);
 assert.match(localized('P-A-007', 'effect', 'en'), /2/);
 assert.equal(localized('P-B-040', 'evolveFrom', 'en'), 'Paldean Wooper');
 assert.equal(stringProperty(read('P-A-108'), 'illustrator'), 'Asako Ito');
});

test('New Promo B cards preserve reviewed nine-language text and actual rarity', () => {
 for (const [id, card] of Object.entries(raw)) {
  assert.deepEqual(card.boosters, []);
  assert.equal(card.rarity, id === 'P-B-103' ? 'Three Star' : 'Three Diamond');
  for (const locale of ['en','fr','es','it','de','pt-br','zh-tw','ja','ko']) {
   assert(card.name[locale]);
   assert(card.image[locale].includes(`/${locale}/tcgp/P-B/`));
   for (const attack of card.attacks) {
    assert(attack.name[locale]);
    if (attack.effect) assert(attack.effect[locale]);
   }
   if (card.description) assert(card.description[locale]);
  }
  const source = ts.createSourceFile(id, fs.readFileSync(cardFile(id), 'utf8'), ts.ScriptTarget.Latest, true);
  assert.equal(stringProperty(findVariableObject(source, 'card'), 'rarity'), card.rarity);
 }
 assert.equal(raw['P-B-103'].attacks[0].name['zh-tw'], '十萬伏特');
 assert.match(raw['P-B-102'].attacks[0].effect['zh-tw'], /隨機1個/);
});

test('Every Promo A/B flavor locale matches the completed native-card review', () => {
 const coverage = JSON.parse(fs.readFileSync(new URL('ab-flavor-final-coverage.json', reviewRoot)));
 assert.equal(coverage.passed, true);
 assert.equal(coverage.records.length, 179 * 9);
 const cards = new Map();
 const seen = new Set();
 for (const row of coverage.records) {
  const key = `${row.cardId}/${row.locale}`;
  assert(!seen.has(key), `duplicate flavor review: ${key}`);
  seen.add(key);
  if (!cards.has(row.cardId)) {
   cards.set(row.cardId, findVariableObject(ts.createSourceFile(row.cardId, fs.readFileSync(cardFile(row.cardId), 'utf8'), ts.ScriptTarget.Latest, true), 'card'));
  }
  const description = resolveFieldPath(cards.get(row.cardId), parseFieldPath('description'), 'description');
  assert.equal(stringProperty(description, row.locale), row.value, key);
  assert.match(row.sourceImageSha256, /^[a-f0-9]{64}$/);
 }
});
