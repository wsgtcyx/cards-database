import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';
import ts from 'typescript';
import {renderReviewedSet} from './import-reviewed-pocket-set.mjs';
const root=new URL('../meta/pocket-source-reviews/SP1/',import.meta.url),read=f=>JSON.parse(fs.readFileSync(new URL('SP1.'+f+'.json',root)));
function originalLocales(source) {
 const ast=ts.createSourceFile('card.ts',source,ts.ScriptTarget.Latest,true);
 const result=ts.transform(ast,[context=>{
  const visit=node=>ts.isPropertyAssignment(node)&&node.name&&['ja','ko','symbol'].includes(node.name.getText(ast).replace(/["']/g,''))
   ? undefined : ts.visitEachChild(node,visit,context);
  return node=>ts.visitNode(node,visit);
 }]);
 const text=ts.createPrinter().printFile(result.transformed[0]);result.dispose();return text;
}
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
 // The retained baseline predates full Japanese and Korean rules; neither may be imported today.
 assert.throws(()=>renderReviewedSet(config,raw,audit),/Japanese imports require ja in ruleLocales/);
 assert.throws(()=>renderReviewedSet({...config,nameLocales:config.nameLocales.filter(locale=>locale!=='ja')},raw,audit),/Korean imports require ko in ruleLocales/);
 const files=renderReviewedSet({...config,nameLocales:config.nameLocales.filter(locale=>!['ja','ko'].includes(locale))},raw,audit);assert.equal(Object.keys(files).length,31);
 for(const [f,text] of Object.entries(files)){assert.equal(originalLocales(fs.readFileSync(new URL('../data/Pokémon TCG Pocket/'+f,import.meta.url),'utf8')),originalLocales(text));if(f.includes('/'))assert(!text.includes('boosters:'));}
});
