import fs from 'node:fs';
import vm from 'node:vm';

const targets = [
  ['batch-001.js','batchEntries'], ['batch-002.js','batchEntries002'],
  ['batch-003.js','batchEntries003'], ['batch-remaining.js','batchRemainingEntries']
];
const entriesByFile = targets.map(([file, variable]) => {
  const context = {window:{}}; vm.createContext(context);
  vm.runInContext(fs.readFileSync(file,'utf8'), context);
  return {file, variable, entries:context.window[variable]};
});
const missing = entriesByFile.flatMap(group => group.entries.filter(e => !e.meaning || /待补充|核心释义/.test(e.meaning)));

async function translate(text) {
  for (let attempt=0; attempt<3; attempt++) {
    try {
      const url=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-CN&dt=t&q=${encodeURIComponent(text)}`;
      const r=await fetch(url);
      if(r.ok){const data=await r.json();const value=(data[0]||[]).map(x=>x[0]).filter(Boolean).join('');if(value)return value;}
    } catch {}
    await new Promise(resolve=>setTimeout(resolve,200*(attempt+1)));
  }
  return '';
}

for(let i=0;i<missing.length;i+=12){
  await Promise.all(missing.slice(i,i+12).map(async e=>{const value=await translate(e.definition||e.word);if(value)e.meaning=value;}));
  if(i%120<12||i+12>=missing.length)console.log(`${Math.min(i+12,missing.length)}/${missing.length}`);
}

function structures(e){
  const p=(e.pos||'').toLowerCase();
  if(p.includes('verb'))return [[`${e.word} something`,'做某事；对某物实施该动作'],[`${e.word} to do`,'做某事']];
  if(p.includes('noun'))return [[`a/an ${e.word}`,'一个……'],[`${e.word} of something`,'某事物的……']];
  if(p.includes('adjective'))return [[`be ${e.word}`,'是……的'],[`${e.word} + noun`,'修饰名词']];
  if(p.includes('adverb'))return [[`${e.word} + verb`,'修饰动作'],[`quite ${e.word}`,'程度搭配']];
  return [[`${e.word} in context`,'放入语境记忆']];
}
for(const group of entriesByFile){
  for(const e of group.entries){if(!e.meaning||/待补充|核心释义/.test(e.meaning))e.meaning=`${e.word}（需人工复核中文义）`;if(!e.collocations||!e.collocations.length)e.collocations=structures(e);}
  fs.writeFileSync(group.file,`window.${group.variable}=${JSON.stringify(group.entries)};\n`);
}
console.log(`repaired ${missing.length} meanings and added collocations`);
