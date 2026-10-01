#!/usr/bin/env node

// Build reviewed reprints from pinned game identities, existing card modules and independent validation.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import { renderLocalizedTemplate, indexNames, buildTranslatedValueMap } from './sync-raenonx-b4.mjs';
import { normalizeRaenonxName } from './normalize-raenonx-name.mjs';
function arg(name) {
  const i = process.argv.indexOf('--' + name);
  if (i < 0 || !process.argv[i + 1]) throw new Error('--' + name + ' is required');
  return path.resolve(process.argv[i + 1]);
}
const root = arg('input-root');
const read = f => {
  const bytes = fs.readFileSync(path.join(root, f));
  if (config.sourceHashes) {
    assert(config.sourceHashes[f], `Missing pinned input hash: ${f}`);
    assert.equal(hash(bytes), config.sourceHashes[f], `Pinned input changed: ${f}`);
  }
  return JSON.parse(bytes.toString('utf8'));
};
const hash = b => crypto.createHash('sha256').update(b).digest('hex');
const config = JSON.parse(fs.readFileSync(arg('set-config'), 'utf8')),
  set = config.setId,
  index = read(config.sourceFiles.index).sort((a, b) => a.number - b.number),
  master = read(config.sourceFiles.master),
  dg = new Map(read(config.sourceFiles.deckgym).flatMap(row => Object.values(row)).map(c => [c.id.replace(' ', '-'), c])),
  old = read('existing-cards.json'),
  review = read('reuse-review.json'),
  sourceFileHashes = read(config.sourceFiles.sourceFileHashes),
  pokeos = new Map(read(config.sourceFiles.pokeos).map(c => [Number(c.card_number), c]));
assert.equal(sourceFileHashes.setId, set, 'Frozen source hashes belong to another set');
const msgs = Object.fromEntries(Object.entries(config.dictionaryLocales).map(([api, loc]) => [api, read(config.sourceFiles.dictionaries.replace('{locale}', loc))]));
const entries = new Map(Object.values(master.cardEntryMap).flatMap(e => e.collectionNums.filter(c => c.expansion.id === set).map(c => [c.num, e])));
const maps = Object.fromEntries(Object.entries(msgs).map(([locale, m]) => [locale, {
  cardEnglishNames: indexNames(msgs.en.Game.Master.Card.Name),
  attackEnglishNames: indexNames(msgs.en.Game.Master.Attack.Name),
  abilityEnglishNames: indexNames(msgs.en.Game.Master.Ability.Name),
  energyEnglishNames: indexNames(msgs.en.Game.Master.EnergyType),
  targetMaster: m.Game.Master,
  translatedValues: buildTranslatedValueMap(msgs.en, m),
  messages: {
    en: msgs.en,
    target: m
  }
}]));
const rarity = {
  C: 'One Diamond',
  U: 'Two Diamond',
  R: 'Three Diamond',
  RR: 'Four Diamond',
  AR: 'One Star',
  SR: 'Two Star',
  SSR: 'Two Shiny',
  IM: 'Three Star',
  UR: 'Crown'
};
const normalize = s => String(s ?? '').normalize('NFKC').replace(/[’]/g, "'").replace(/[\[{]([A-Z])[\]}]/g, '{$1}').replace(/Pokemon/g, 'Pokémon').replace(/\s+/g, ' ').replace(/[−]/g, '-').replace(/[×]/g, 'x').replace(/([.!?])(?=\(?[A-Z])/g, '$1 ').trim();
function comparable(s) {
  s = normalize(s);
  for (const [n, k] of Object.entries({
    Grass: 'G',
    Fire: 'R',
    Water: 'W',
    Lightning: 'L',
    Psychic: 'P',
    Fighting: 'F',
    Darkness: 'D',
    Metal: 'M',
    Colorless: 'C'
  })) s = s.replace(new RegExp('\\b' + n + '(?=\\{' + k + '\\})', 'g'), '').replace(new RegExp('\\b' + n + '(?= (?:Energy|Pokémon))', 'g'), '{' + k + '}');
  s = s.replace(/\{N\}/g, 'Dragon');
  return config.reviewedEnglishRuleCorrections?.[s] ?? s;
}
function name(id, locale) {
  const n = normalizeRaenonxName(config.dictionaryLocales[locale], msgs[locale].Game.Master.Card.Name[id]);
  assert(n, `missing ${locale} name ${id}`);
  return n;
}
function expected(c, e) {
  if (e.cardType === 'trainer') return {
    category: 'Trainer',
    trainerType: c.trainer_card_type,
    effect: c.effect
  };
  return {
    category: 'Pokemon',
    hp: c.hp,
    stage: ['Basic', 'Stage1', 'Stage2'][c.stage],
    types: [c.energy_type],
    retreat: c.retreat_cost.length,
    weaknesses: c.weakness ? [{
      type: c.weakness,
      value: '+20'
    }] : [],
    ...(c.evolves_from ? {
      evolveFrom: c.evolves_from
    } : {}),
    attacks: c.attacks.map((a, i) => ({
      name: a.title,
      cost: a.energy_required,
      ...(e.play.attacks[i].damageMarking.value ? {
        damage: String(e.play.attacks[i].damageMarking.value) + (e.play.attacks[i].damageMarking.symbol ?? '')
      } : {}),
      ...(a.effect ? {
        effect: a.effect
      } : {})
    })),
    abilities: c.ability ? [{
      name: c.ability.title,
      effect: c.ability.effect
    }] : []
  };
}
const canonical = [],
  localizations = {
    schemaVersion: 1,
    setId: set,
    cards: {}
  },
  raw = {},
  provenance = [],
  conflicts = [];
assert.equal(index.length, config.total);
assert.equal(entries.size, config.total);
for (let i = 0; i < index.length; i++) {
  const x = index[i],
    n = i + 1,
    id = `${set}-${String(n).padStart(3, '0')}`,
    e = entries.get(n),
    d = dg.get(id),
    selection = review[i],
    src = old.find(c => c.id === selection.sourceId),
    c = structuredClone(src.card),
    p = expected(d, e),
    po = pokeos.get(n);
  const sourceFileSha256 = sourceFileHashes.files[src.file];
  assert(/^[a-f0-9]{64}$/.test(sourceFileSha256), `${id} missing frozen source file hash`);
  assert.equal(x.number, n);
  assert.equal(selection.id, id);
  assert.equal(x.set, set);
  assert.equal(e.cardId, x.image.match(/^c((?:PK|TR)_\d{2}_\d{6}_\d{2})_/)[1]);
  assert.equal(Number(e.cardId.split('_')[2]), src.entity.entityId);
  assert.equal(x.rarity, e.rarity);
  assert.equal(comparable(x.name), comparable(name(e.play.characterI18nId, 'en')));
  if (c.suffix === 'EX') delete c.description;
  const chosenArtist = e.illustratorI18nId.map(a => msgs.en.Game.Master.Card.Illustrator[a]);
  assert(chosenArtist.every(Boolean));
  c.illustrator = chosenArtist.join(' & ');
  if (po.artist && normalize(po.artist) !== normalize(c.illustrator)) {
    const decision = config.reviewedArtistConflicts?.[e.cardId];
    assert.equal(decision?.pokeos, po.artist, `${id} artist conflict`);
    assert.equal(decision?.chosen, c.illustrator);
    conflicts.push({
      id,
      kind: 'illustrator',
      candidates: {
        pokeos: po.artist,
        game: c.illustrator
      },
      decision
    });
  }
  c.name = Object.fromEntries(config.nameLocales.map(loc => [loc, msgs[loc] ? name(e.play.characterI18nId, loc) : po[`card_name_lang_${config.pokeosNameFields[loc]}`]]));
  assert(Object.values(c.name).every(Boolean));
  c.name.de = c.name.de?.replace(/-\s+/g, '-');
  c.rarity = rarity[x.rarity];
  c.image = Object.fromEntries(config.ruleLocales.map(loc => {
    const base = `${config.r2Origin}/${loc}/tcgp/${set}/${String(n).padStart(3, '0')}`;
    const selected = config.imageBaseOverrides?.[id]?.[loc] ?? base;
    assert(selected === base || (selected.startsWith(`${base}/hd-`) && /^hd-[a-f0-9]{12}$/.test(selected.slice(base.length + 1))), `${id}.${loc} invalid image override`);
    return [loc, selected];
  }));
  delete c.boosters;
  delete c.localId;
  delete c.id;
  for (const loc of config.ruleLocales) {
    const fix = value => {
      let text = (config.reviewedTextCorrections?.[loc]?.[value] ?? value).replace(/\bx(?=\d)/g, '×');
      for (const [from, to] of Object.entries(config.ruleTokenReplacements?.[loc] ?? {})) text = text.replace(new RegExp('\\b' + from + '(?=\\{[A-Z]\\})', 'g'), '').replace(new RegExp('\\b' + from + '\\b', 'g'), to);
      return text;
    };
    if (c.effect?.[loc]) c.effect[loc] = fix(c.effect[loc]);
    for (const group of ['attacks', 'abilities']) for (const item of c[group] ?? []) if (item.effect?.[loc]) item.effect[loc] = fix(item.effect[loc]);
  }
  const cc = {
    id,
    name: c.name.en,
    rarity: c.rarity,
    category: p.category,
    illustrator: c.illustrator,
    sourceImage: `https://s3.pokeos.com/pokeos-uploads/tcg/pocket/${config.sourceId}/src/${n}_en.png`,
    confidence: 'high'
  };
  const locals = Object.fromEntries(config.ruleLocales.map(loc => [loc, {
    name: c.name[loc],
    ...(c.description?.[loc] ? {
      description: c.description[loc]
    } : {})
  }]));
  if (e.cardType === 'pokemon') {
    for (const field of ['hp', 'stage', 'types', 'retreat', 'weaknesses']) {
      assert.deepEqual(c[field] ?? [], p[field], `${id} existing ${field}`);
      cc[field] = p[field];
    }
    assert.equal(e.play.hp, p.hp);
    assert.equal(e.play.evolution.stage - 1, d.stage);
    assert.deepEqual(e.play.types.map(t => t === 9 ? 'Dragon' : t === 10 ? 'Colorless' : msgs.en.Game.Master.EnergyType[String(t + 1)]), p.types);
    assert.equal(e.play.retreat, p.retreat);
    if (e.play.weakness) assert.deepEqual([{
      type: msgs.en.Game.Master.EnergyType[String(e.play.weakness.id + 1)],
      value: `+${e.play.weakness.bonus}`
    }], p.weaknesses);
    if (p.evolveFrom) {
      const enNames = Object.entries(msgs.en.Game.Master.Card.Name).filter(([, v]) => comparable(normalizeRaenonxName('en', v)) === comparable(p.evolveFrom));
      assert.equal(enNames.length, 1, `${id} evolution name binding`);
      const prevId = enNames[0][0];
      const prev = old.find(v => comparable(v.card.name.en) === comparable(p.evolveFrom));
      assert(prev, `${id} evolution localization source`);
      c.evolveFrom = Object.fromEntries(config.ruleLocales.map(loc => [loc, msgs[loc] ? name(prevId, loc) : prev.card.name[loc]]));
      cc.evolveFrom = c.evolveFrom.en;
      for (const loc of config.ruleLocales) locals[loc].evolveFrom = c.evolveFrom[loc];
      const prevNames = e.play.evolution.prev.filter(v => v.type === 'pokemon').map(v => name(master.pokemonMap[v.id].characterI18nId, 'en'));
      assert(prevNames.some(v => comparable(v) === comparable(p.evolveFrom)), `${id} Raenon evolution`);
    }
    if (c.description) cc.description = c.description.en;
    assert.equal(c.attacks?.length ?? 0, p.attacks.length);
    assert.equal(e.play.attacks.length, p.attacks.length);
    cc.attacks = [];
    for (let a = 0; a < p.attacks.length; a++) {
      const ca = c.attacks[a],
        pa = p.attacks[a],
        ra = e.play.attacks[a];
      assert.deepEqual([...(ca.cost ?? [])].sort(), [...pa.cost].sort());
      assert.deepEqual(Object.entries(ra.energy).flatMap(([k, v]) => Array(v).fill(msgs.en.Game.Master.EnergyType[k])).sort(), [...pa.cost].sort());
      assert.equal(comparable(ca.name.en), comparable(pa.name));
      assert.equal(comparable(ca.effect?.en), comparable(pa.effect), `${id} attack ${a} rules`);
      if (pa.damage !== undefined) ca.damage = /^\d+$/.test(pa.damage) ? Number(pa.damage) : pa.damage;else delete ca.damage;
      const canonAtk = {
        name: ca.name.en,
        cost: ca.cost ?? [],
        ...(ca.damage !== undefined ? {
          damage: ca.damage
        } : {}),
        ...(ca.effect?.en ? {
          effect: ca.effect.en
        } : {})
      };
      cc.attacks.push(canonAtk);
      for (const loc of config.ruleLocales) {
        const gm = msgs[loc]?.Game.Master;
        if (gm) {
          ca.name[loc] = gm.Attack.Name[ra.nameI18nId];
          if (ra.descriptionI18nId != null) ca.effect[loc] = renderLocalizedTemplate(msgs.en.Game.Master.Attack.Description[ra.descriptionI18nId], comparable(canonAtk.effect), gm.Attack.Description[ra.descriptionI18nId], config.dictionaryLocales[loc], `${id} attack ${a}`, maps[loc]);
        }
        locals[loc].attacks ??= [];
        locals[loc].attacks.push({
          name: ca.name[loc],
          ...(ca.effect?.[loc] ? {
            effect: ca.effect[loc]
          } : {})
        });
      }
      canonAtk.name = ca.name.en;
      if (ca.effect) canonAtk.effect = ca.effect.en;
    }
    assert.equal(c.abilities?.length ?? 0, p.abilities.length);
    assert.equal(e.play.abilities.length, p.abilities.length);
    cc.abilities = [];
    for (let a = 0; a < p.abilities.length; a++) {
      const ca = c.abilities[a],
        pa = p.abilities[a],
        ra = e.play.abilities[a];
      assert.equal(comparable(ca.name.en), comparable(pa.name));
      assert.equal(comparable(ca.effect.en), comparable(pa.effect), `${id} ability rules`);
      for (const loc of config.ruleLocales) {
        const gm = msgs[loc]?.Game.Master;
        if (gm) {
          ca.name[loc] = gm.Ability.Name[ra.nameI18nId];
          ca.effect[loc] = renderLocalizedTemplate(msgs.en.Game.Master.Ability.Description[ra.descriptionI18nId], comparable(ca.effect.en), gm.Ability.Description[ra.descriptionI18nId], config.dictionaryLocales[loc], `${id} ability ${a}`, maps[loc]);
        }
        locals[loc].abilities ??= [];
        locals[loc].abilities.push({
          name: ca.name[loc],
          effect: ca.effect[loc]
        });
      }
      cc.abilities.push({
        name: ca.name.en,
        effect: ca.effect.en
      });
    }
  } else {
    assert.equal(c.trainerType, p.trainerType);
    const sourceEffect = comparable(c.effect.en),
      expectedEffect = comparable(p.effect);
    assert(sourceEffect === expectedEffect || c.trainerType === 'Stadium' && sourceEffect.startsWith(expectedEffect), `${id} Trainer mechanic`);
    cc.trainerType = c.trainerType;
    for (const loc of config.ruleLocales) {
      const gm = msgs[loc]?.Game.Master;
      if (gm) c.effect[loc] = renderLocalizedTemplate(msgs.en.Game.Master.Trainer.Description[e.play.descriptionI18nId], comparable(p.effect).replace(/\bx(?=\d)/g, '×'), gm.Trainer.Description[e.play.descriptionI18nId], config.dictionaryLocales[loc], `${id} trainer`, maps[loc]);else if (config.effectOverrides?.[c.name.en]?.[loc]) c.effect[loc] = config.effectOverrides[c.name.en][loc];
      locals[loc].effect = c.effect[loc];
    }
    cc.effect = c.effect.en;
  }
  for (const loc of config.ruleLocales) {
    for (const f of ['description', 'evolveFrom', 'effect']) if (c[f]) assert(typeof c[f][loc] === 'string' && c[f][loc].trim(), `${id}.${f}.${loc}`);
    for (const f of ['attacks', 'abilities']) for (const item of c[f] ?? []) {
      assert(item.name[loc]);
      if (item.effect) assert(item.effect[loc]);
    }
  }
  if (Object.keys(selection.diff).length) conflicts.push({
    id,
    previousCardId: src.id,
    candidates: selection.diff,
    decision: 'Use exact game damage marking / evolution name; preserve mechanic-equivalent typography; Trainer effect uses game template without generic Stadium boilerplate.'
  });
  canonical.push(cc);
  raw[id] = c;
  localizations.cards[id] = {
    locales: locals
  };
  provenance.push({
    id,
    number: n,
    cardId: e.cardId,
    entityId: src.entity.entityId,
    mirrorType: e.mirrorType,
    rarity: x.rarity,
    artistIds: e.illustratorI18nId,
    sourceCardId: src.id,
    sourceFile: src.file,
    sourceFileSha256,
    nameSource: 'PokeOS de/it; RaenonX game dictionaries en/fr/es/pt-br/zh-tw/ja/ko',
    rulesSource: 'Verified existing entity reprint + DeckGym validation + RaenonX game master/templates',
    descriptionSource: src.file
  });
}
// Optional reviewed native flavor text remains separate from battle-rule sources.
const flavorIndex = process.argv.indexOf('--flavor-review');
assert(!config.flavorReviewSha256 || flavorIndex >= 0, 'Pinned flavor review requires --flavor-review');
if (flavorIndex >= 0) {
  const flavorBytes = fs.readFileSync(arg('flavor-review'));
  if (config.flavorReviewSha256) assert.equal(hash(flavorBytes), config.flavorReviewSha256, 'Reviewed flavor input changed');
  const flavorReview = JSON.parse(flavorBytes.toString('utf8'));
  assert.equal(flavorReview.setId, set);
  for (const record of flavorReview.records) {
    assert.equal(record.englishExactMatch, true);
    assert.equal(typeof record.chosen, 'string');
    assert(record.chosen.trim());
    assert(config.ruleLocales.includes(record.locale));
    assert(raw[record.cardId]?.description?.[record.locale]);
    assert.equal(raw[record.cardId].description[record.locale], record.previous);
    raw[record.cardId].description[record.locale] = record.chosen;
    localizations.cards[record.cardId].locales[record.locale].description = record.chosen;
  }
}
// Card-face review is independent of the exact-match PokeAPI flavor overlay.
// Only localized text can change here; English mechanics and identity stay pinned.
assert(!config.nativeReviewSha256 || process.argv.includes('--native-review'), 'Pinned native review requires --native-review');
if (process.argv.includes('--native-review')) {
  const bytes = fs.readFileSync(arg('native-review'));
  assert(config.nativeReviewSha256, 'Native review must have a pinned SHA-256');
  assert.equal(hash(bytes), config.nativeReviewSha256, 'Reviewed native input changed');
  const review = JSON.parse(bytes.toString('utf8'));
  assert.equal(review.setId, set);
  const selectedPaths = new Set();
  for (const record of review.records) {
    const keys = record.path;
    assert(Array.isArray(keys), 'Native review requires a field path');
    const locale = keys.at(-1);
    assert(config.ruleLocales.includes(locale) && locale !== 'en', 'Native review locale must be a localized rule locale');
    const plain = keys.length === 2 && ['description', 'evolveFrom', 'effect'].includes(keys[0]);
    const nested = keys.length === 4 && ['attacks', 'abilities'].includes(keys[0]) && Number.isInteger(keys[1]) && keys[1] >= 0 && ['name', 'effect'].includes(keys[2]);
    assert(plain || nested, 'Unsupported native text path');
    const identity = JSON.stringify([record.cardId, keys]);
    assert(!selectedPaths.has(identity), 'Duplicate native text path');
    selectedPaths.add(identity);
    assert(record.evidence?.reviewed === true && /^[a-f0-9]{64}$/.test(record.evidence.sourceImageSha256), 'Native review requires reviewed image evidence');
    const url = new URL(record.evidence.sourceUrl);
    assert(url.protocol === 'https:' && !url.search && !url.hash && !url.username && !url.password, 'Native source must be a public image URL');
    assert(typeof record.chosen === 'string' && record.chosen.trim(), 'Native text cannot be empty');
    const card = raw[record.cardId];
    assert(card, 'Unknown native-review card');
    const target = keys.slice(0, -1).reduce((value, key) => value?.[key], card);
    assert(target && typeof target[locale] === 'string', 'Native-review field missing');
    assert.equal(target[locale], record.previous, 'Native-review previous value mismatch');
    target[locale] = record.chosen;
    const localized = localizations.cards[record.cardId].locales[locale];
    if (plain) localized[keys[0]] = record.chosen;
    else localized[keys[0]][keys[1]][keys[2]] = record.chosen;
    const origin = provenance.find(value => value.id === record.cardId);
    origin.nativeCardFaceReview ??= [];
    origin.nativeCardFaceReview.push({ path: keys, sourceImageSha256: record.evidence.sourceImageSha256, sourceUrl: url.href });
  }
}
for (const card of Object.values(raw)) {
  for (const locale of config.fallbackRuleLocales ?? []) {
    assert(config.nameLocales.includes(locale));
    assert(!config.ruleLocales.includes(locale));
    for (const field of ['description', 'evolveFrom', 'effect']) {
      if (card[field]) card[field][locale] ??= card[field].en;
    }
    for (const field of ['attacks', 'abilities']) {
      for (const item of card[field] ?? []) {
        item.name[locale] ??= item.name.en;
        if (item.effect) item.effect[locale] ??= item.effect.en;
      }
    }
  }
}
const out = arg('output-root');
fs.mkdirSync(out, {
  recursive: true
});
function write(n, o) {
  fs.writeFileSync(path.join(out, n), JSON.stringify(o, null, 2) + '\n');
}
write(`${set}.canonical.json`, {
  schemaVersion: 1,
  setId: set,
  cards: canonical
});
write(`${set}.localizations.json`, localizations);
write(`${set}.raw.json`, raw);
write(`${set}.provenance.json`, {
  schemaVersion: 1,
  setId: set,
  cards: provenance
});
write(`${set}.review.json`, {
  schemaVersion: 1,
  setId: set,
  conflicts,
  unresolved: [],
  passed: true
});
write(`${set}.audit.json`, {
  schemaVersion: 1,
  setId: set,
  counts: {
    cards: canonical.length,
    mirrorCards: provenance.filter(v => v.mirrorType === 'normalMirror').length,
    nameLocales: config.nameLocales.length,
    ruleLocales: config.ruleLocales.length,
    missing: 0,
    unresolved: 0
  },
  passed: true
});
console.log('Validated', canonical.length, 'cards;', conflicts.length, 'reviewed source differences');
