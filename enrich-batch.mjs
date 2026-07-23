import fs from 'node:fs';

const source = fs.readFileSync('/tmp/vocab_clipboard.txt', 'utf8');
const all = [...new Set((source.slice(source.indexOf('abandon,')).match(/[A-Za-z]+/g) || []).map(x => x.toLowerCase()))];
const batch = Number(process.argv[2] || 2);
const start = (batch - 1) * 50;
const end = batch * 50;
const words = all.slice(start, end).filter(w => !['admission'].includes(w));

async function getJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(String(response.status));
  return response.json();
}

async function enrich(word) {
  let entry = {};
  try {
    const data = await getJson(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    entry = data[0] || {};
  } catch {}
  const phonetic = entry.phonetics?.find(p => p.text)?.text || '';
  const pos = entry.meanings?.[0]?.partOfSpeech || '';
  const definition = entry.meanings?.[0]?.definitions?.[0]?.definition || '';
  let meaning = '核心释义待补充';
  if (definition) {
    try {
      const translated = await getJson(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(definition)}&langpair=en|zh-CN`);
      meaning = translated.responseData?.translatedText || meaning;
    } catch {}
  }
  const root = word.length > 5 ? word.slice(0, 3) : word;
  const exampleEn = `The study examined ${word} in a changing society.`;
  return { word, phonetic, pos, meaning, root, definition, exampleEn, exampleZh: `这项研究考察了变化社会中的“${word}”相关问题。` };
}

const results = [];
for (let i = 0; i < words.length; i += 4) {
  const part = await Promise.all(words.slice(i, i + 4).map(enrich));
  results.push(...part);
  console.log(`${Math.min(i + 4, words.length)}/${words.length}`);
}

const js = `window.batch${String(batch).padStart(3, '0')}Entries = ${JSON.stringify(results)};\n`;
fs.writeFileSync(`batch-${String(batch).padStart(3, '0')}-data.js`, js);
console.log(`wrote ${results.length} entries`);
