import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import test from 'node:test'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dictionaryOnlyOverlay } from './sync-raenonx-b4.mjs'
const repo = fileURLToPath(new URL('../../../..', import.meta.url))
function fixture(t) {
 const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'korean-workflow-'))
 t.after(() => fs.rmSync(dir, { recursive: true, force: true }))
 const write = (name, value) => { const p = path.join(dir, name); fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, typeof value === 'string' ? value : JSON.stringify(value)); return p }
 const run = (script, args) => spawnSync(process.execPath, [path.join(repo, script), ...args], { cwd: repo, encoding: 'utf8' })
 return {dir, write, run}
}
const scripts = '.agents/skills/merge-pocket-card-sources/scripts/'
test('translation mapping retains Korean and Japanese and rejects missing per-card locales', t => {
 const {dir,write,run} = fixture(t)
 const canonical={setId:'T1',cards:[{id:'T1-001',effect:'Draw a card.'},{id:'T1-002',effect:'Draw 2 cards.'}]}
 const localizations={setId:'T1',cards:{'T1-001':{locales:{en:{effect:'Draw a card.'},ko:{effect:'덱에서 1장 뽑는다.'},ja:{effect:'1枚引く。'}}},'T1-002':{locales:{en:{effect:'Draw 2 cards.'},ko:{effect:'덱에서 2장 뽑는다.'},ja:{effect:'2枚引く。'}}}}}
 write('canonical.json',canonical);write('localizations.json',localizations)
 const args=['--canonical',dir+'/canonical.json','--localizations',dir+'/localizations.json','--output',dir+'/mapping.json']
 assert.equal(run(scripts+'build-translation-map.mjs',args).status,0)
 assert.deepEqual(JSON.parse(fs.readFileSync(dir+'/mapping.json'))['Draw a card.'],{en:'Draw a card.',ko:'덱에서 1장 뽑는다.',ja:'1枚引く。'})
 delete localizations.cards['T1-001'].locales.ko;write('localizations.json',localizations);fs.unlinkSync(dir+'/mapping.json')
 const missing=run(scripts+'build-translation-map.mjs',args)
 assert.notEqual(missing.status,0);assert.match(missing.stderr,/missing ko/);assert.equal(fs.existsSync(dir+'/mapping.json'),false)
})
test('canonical fields and array shapes drive Korean audit, including reviewed particle overrides', t => {
 const {dir,write,run}=fixture(t)
 const canonical={setId:'T1',cards:[{id:'T1-001',name:'Beldum',description:'An official flavor.',attacks:[{name:'Ram',effect:'Draw a card.'}],abilities:[]}]}
 const full={name:'메탕',description:'몸은 자석으로 되어 있다.',attacks:[{name:'부딪치기',effect:'덱에서 1장 뽑는다.'}],abilities:[]}
 write('canonical.json',canonical);write('config.json',{setId:'T1',ruleLocales:['ko']})
 const args=['--canonical',dir+'/canonical.json','--localizations',dir+'/localizations.json','--config',dir+'/config.json','--output',dir+'/audit.json']
 const check=value=>{write('localizations.json',{setId:'T1',cards:{'T1-001':{locales:{ko:value}}}});const result=run(scripts+'audit-pocket-localizations.mjs',args);return {result,audit:JSON.parse(fs.readFileSync(dir+'/audit.json'))}}
 assert.equal(check(full).result.status,0)
 assert.ok(check({name:'메탕'}).audit.findings.some(x=>x.kind==='missing-text'))
 const short=structuredClone(full);short.attacks=[];assert.ok(check(short).audit.findings.some(x=>x.kind==='localized-array-shape-mismatch'))
 const bad=structuredClone(full);bad.attacks[0].effect='「메탕」가 있다면 덱에서 1장 뽑는다.';assert.ok(check(bad).audit.findings.some(x=>x.kind==='korean-particle-mismatch'))
 const extra=structuredClone(full);extra.unexpected='TODO';assert.notEqual(check(extra).result.status,0)
})
test('Korean dictionary export normalizes real formatted ability names without stripping unknown markup', () => {
 const title='GUARD [C:Lsb ]가드[C:Rsb ]'
 const master={Card:{Name:{}},Attack:{Name:{},Description:{}},Ability:{Name:{76:'GUARD'},Description:{76:'Draw a card.'}},EnergyType:{}}
 const ko=structuredClone(master);ko.Ability.Name[76]=title;ko.Ability.Description[76]='덱에서 1장 뽑는다.'
 const output=dictionaryOnlyOverlay({cards:[{id:'T1-001',category:'Pokemon',abilities:[{name:'GUARD',effect:'Draw a card.'}]}]},{en:{Game:{Master:master}},ko:{Game:{Master:ko}}})
 assert.deepEqual(output['T1-001'].locales.ko.abilities,[{name:'GUARD [가드]',effect:'덱에서 1장 뽑는다.'}])
 ko.Ability.Description[76]='[Text:CardName id="0"]';assert.throws(()=>dictionaryOnlyOverlay({cards:[{id:'T1-001',category:'Pokemon',abilities:[{name:'GUARD',effect:'Draw a card.'}]}]},{en:{Game:{Master:master}},ko:{Game:{Master:ko}}}),/template binding/)
})
test('OCR merge preserves Korean and Japanese rule overlays', t => {
 const {dir,write,run}=fixture(t)
 const canonical={setId:'T1',cards:[{id:'T1-001',name:'Bulbasaur ex',category:'Pokemon',attacks:[],abilities:[]}]}
 write('canonical.json',canonical);write('source.json',[{card_number:1,card_name_lang_3:'이상해씨 ex',card_name_lang_1:'フシギダネex',card_name_lang_6:'Bisasam-ex',card_name_lang_8:'Bulbasaur-ex'}])
 write('overlay.json',{cards:{'T1-001':{locales:{en:{attacks:[],abilities:[]},ko:{attacks:[],abilities:[]},ja:{attacks:[],abilities:[]}}}}})
 for(const locale of ['en','de','it'])write(locale+'/001.json',{pages:[{prunedResult:{rec_texts:['Bulbasaur ex'],rec_boxes:[[10,10,80,30]],rec_scores:[1]}}]})
 const result=run(scripts+'build-ocr-localizations.mjs',['--canonical',dir+'/canonical.json','--english-ocr',dir+'/en','--localized-cards',dir+'/source.json','--base-overlay',dir+'/overlay.json','--locale','de:'+dir+'/de','--locale','it:'+dir+'/it','--output',dir+'/output.json'])
 assert.equal(result.status,0,result.stderr)
 const locales=JSON.parse(fs.readFileSync(dir+'/output.json')).cards['T1-001'].locales
 assert.equal(locales.ko.name,'이상해씨 ex');assert.equal(locales.ja.name,'フシギダネex');assert.deepEqual(Object.keys(locales).sort(),['de','en','it','ja','ko'])
})
test('new set importer source cannot inherit historical B4 names', t => {
 const {dir,write,run}=fixture(t)
 write('canonical.json',{setId:'T1',cards:[{id:'T1-001'}]});write('config.json',{setId:'T1',total:1,releaseDate:'2026-10-31',series:'T',skuId:'T1_1',setNames:Object.fromEntries(['en','fr','es','it','de','pt-br','zh-tw','ja'].map(locale=>[locale,'Reviewed Set']))})
 const result=run(scripts+'build-importer-source.mjs',['--canonical',dir+'/canonical.json','--template-root',dir+'/template','--species-names',dir+'/species.csv','--set-config',dir+'/config.json','--output',dir+'/output'])
 assert.notEqual(result.status,0);assert.match(result.stderr,/Missing setNames\.ko/);assert.equal(fs.existsSync(dir+'/output'),false)
 write('config.json',{setId:'../escaped',total:1});const escaped=run(scripts+'build-importer-source.mjs',['--canonical',dir+'/canonical.json','--template-root',dir+'/template','--species-names',dir+'/species.csv','--set-config',dir+'/config.json','--output',dir+'/output']);assert.notEqual(escaped.status,0);assert.match(escaped.stderr,/safe Pocket ID/)
})
test('Korean codemod preserves unrelated literal escapes and is repeatable', t => {
 const {dir,write}=fixture(t),before='const card = { name: { en: "Pikachu", fr: "Pikachu" }, unrelated: "\\\\u0041" }; export default card;'
 write('card.ts',before);write('map.json',{Pikachu:{en:'Pikachu',ko:'피카츄'}})
 const args=[path.join(repo,'scripts/add-pocket-localizations.ts'),'--pattern',dir+'/card.ts','--mapping',dir+'/map.json','--locales','ko']
 const dry=spawnSync('bun',args,{encoding:'utf8'});assert.equal(dry.status,0,dry.stderr);assert.equal(fs.readFileSync(dir+'/card.ts','utf8'),before)
 const applied=spawnSync('bun',[...args,'--write'],{encoding:'utf8'});assert.equal(applied.status,0,applied.stderr)
 const value=new Function(fs.readFileSync(dir+'/card.ts','utf8').replace('export default card;','return card;'))()
 assert.deepEqual(value,{name:{en:'Pikachu',fr:'Pikachu',ko:'피카츄'},unrelated:'\\u0041'})
 const repeat=spawnSync('bun',[...args,'--write'],{encoding:'utf8'});assert.equal(repeat.status,0);assert.match(repeat.stdout,/Files changed: 0/)
 const emptyArgs=[...args];emptyArgs[emptyArgs.indexOf('--pattern')+1]=dir+'/missing/*.ts'
 const empty=spawnSync('bun',[...emptyArgs,'--write'],{encoding:'utf8'});assert.notEqual(empty.status,0)
})
test('codemod refuses incomplete batches and leaves originals intact after partial temporary writes', t => {
 const {dir,write}=fixture(t),before='const card = { name: { en: "Pikachu" } }; export default card;'
 write('a.ts',before);write('b.ts',before.replace('Pikachu','Mew'));write('map.json',{Pikachu:{ko:'피카츄'}})
 const args=[path.join(repo,'scripts/add-pocket-localizations.ts'),'--pattern',dir+'/*.ts','--mapping',dir+'/map.json','--locales','ko','--write']
 assert.notEqual(spawnSync('bun',args,{encoding:'utf8'}).status,0);assert.equal(fs.readFileSync(dir+'/a.ts','utf8'),before)
 write('map.json',{Pikachu:{ko:'피카츄'},Mew:{ko:'뮤'}})
 write('fail.mjs',`import fs from 'node:fs';const original=fs.writeFileSync;fs.writeFileSync=function(file,value,...rest){if(typeof file==='number'&&String(value).includes('피카츄')){original.call(this,file,'partial',...rest);throw new Error('simulated partial temporary write');}return original.call(this,file,value,...rest)};`)
 const result=spawnSync('bun',['--preload',dir+'/fail.mjs',...args],{encoding:'utf8'});assert.notEqual(result.status,0);assert.match(result.stderr,/simulated partial temporary write/)
 assert.equal(fs.readFileSync(dir+'/a.ts','utf8'),before);assert.equal(fs.readFileSync(dir+'/b.ts','utf8'),before.replace('Pikachu','Mew'));assert.equal(fs.readdirSync(dir).some(f=>f.endsWith('.tmp')),false)
})
