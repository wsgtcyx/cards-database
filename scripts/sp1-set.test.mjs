import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';
import {renderReviewedSet} from './import-reviewed-pocket-set.mjs';
const root=new URL('../meta/pocket-source-reviews/SP1/',import.meta.url),read=f=>JSON.parse(fs.readFileSync(new URL('SP1.'+f+'.json',root)));
test('SP1 identity, locale, rarity and single-pack import stay complete',()=>{
 const raw=read('reviewed-raw'),config=read('source-config'),audit=read('localization-audit'),provenance=read('provenance');
 assert.equal(Object.keys(raw).length,30);
 assert.equal(config.flavorFallbacks.length,3);
 for(const n of [28,29,30])assert.equal(raw[`SP1-${String(n).padStart(3,'0')}`].description['zh-tw'],raw[`SP1-${String(n).padStart(3,'0')}`].description.en);
 for(let n=1;n<=30;n++){
  const id=`SP1-${String(n).padStart(3,'0')}`,c=raw[id];assert(c,id);
  assert.equal(c.rarity,n<=27?'One Star':'Anomaly');
  for(const l of config.nameLocales)assert(c.name[l],`${id} ${l}`);
  for(const l of config.ruleLocales){assert(c.description[l]);for(const a of c.attacks){assert(a.name[l]);if(a.effect)assert(a.effect[l]);}}
 }
 assert.deepEqual(Object.values(provenance.identityCrosswalk).map(c=>c.gameId),['PK_20_024100_02','PK_20_024100_00','PK_20_024100_01']);
 const files=renderReviewedSet(config,raw,audit);assert.equal(Object.keys(files).length,31);
 for(const [f,text] of Object.entries(files)){assert.equal(fs.readFileSync(new URL('../data/Pokémon TCG Pocket/'+f,import.meta.url),'utf8'),text);if(f.includes('/'))assert(!text.includes('boosters:'));}
});
