/* =========================================================
   Aprann Kode — zouti pou leson yo / outils pour les leçons
   Pwogram nan: 1 leson pa jou, 5 jou pa semèn.
     Mwa 1    : HTML (2 semèn) + CSS (2 semèn)
     Mwa 2-3  : JavaScript (8 semèn)
     Mwa 4-8  : C# (20 semèn)
   Chak tèks gen 2 vèsyon: ht (Kreyòl) ak fr (Français).
   check(ctx) retounen true si defi a reyisi, sinon yon mesaj {ht, fr}.
   Lòt chan opsyonèl: tips (erè komen), recap (sa pou retni), extra (pou ale pi lwen).
   ========================================================= */

const T = (ht, fr) => ({ ht, fr });
const txt = el => (el ? el.textContent.trim() : '');
const words = s => s.split(/\s+/).filter(Boolean).length;
const LESSONS_PER_WEEK = 5;
const MODULES = [];

/* Règ pou tcheke: [tès, mesaj]. Tès la se yon RegExp (sou kòd la) oswa yon fonksyon(ctx). */
const R = (test, ht, fr) => [test, T(ht, fr)];
const need = (...rules) => ctx => {
  const src = ctx.clean != null ? ctx.clean : ctx.code;
  for (const [test, msg] of rules) {
    let ok;
    try { ok = typeof test === 'function' ? test(ctx) : test.test(src); } catch (e) { ok = false; }
    if (!ok) return msg;
  }
  return true;
};
const logsAre = arr => ctx => ctx.logs.map(l => l.trim()).join('\n') === arr.join('\n');
const logHas = s => ctx => ctx.logs.some(l => (s instanceof RegExp ? s.test(l) : l.trim() === String(s)));

/* Re-egzekite kòd JS la ak lòt valè pou yon varyab, epi tcheke rezilta a.
   Retounen null si tout ka yo bon, sinon {val, exp, got}. */
async function firstFailingCase(ctx, name, list, match) {
  const re = new RegExp('\\b' + name + '\\s*=\\s*[^;\\n]+');
  for (const [val, exp] of list) {
    const r = await ctx.rerun(ctx.code.replace(re, name + ' = ' + val));
    const got = r.logs.map(l => l.trim());
    const ok = match ? match(got, exp) : got.includes(String(exp));
    if (!ok || r.errors.length) return { val, exp, got: got.join(', ') || '—' };
  }
  return null;
}
const failMsg = (f, name) => T(
  `Ak <code>${name} = ${f.val}</code>, mwen te espere <code>${f.exp}</code> men mwen jwenn <code>${f.got}</code>.`,
  `Avec <code>${name} = ${f.val}</code>, j'attendais <code>${f.exp}</code> mais j'obtiens <code>${f.got}</code>.`
);

/* Ti zouti pou bati pwogram C# / petits outils pour construire des programmes C# */
function indent(s, n) {
  const p = ' '.repeat(n);
  return s.split('\n').map(l => (l ? p + l : l)).join('\n');
}
function csProg({ main = '// ✍️', inside = '', after = '', usings = [], asyncMain = false } = {}) {
  const u = ['System', ...usings].map(x => `using ${x};`).join('\n');
  return `${u}\n\nclass Program\n{\n    static ${asyncMain ? 'async Task' : 'void'} Main()\n    {\n${indent(main, 8)}\n    }${inside ? '\n\n' + indent(inside, 4) : ''}\n}\n${after ? '\n' + after + '\n' : ''}`;
}
const CS_STARTER = csProg();

/* Kò metòd Main nan (pou tcheke si yon bagay anndan oswa deyò Main) */
function csMainBody(src) {
  const m = src.match(/static\s+(?:async\s+)?[\w<>]+\s+Main\s*\([^)]*\)\s*\{/);
  if (!m) return '';
  let i = m.index + m[0].length, depth = 1;
  const start = i;
  for (; i < src.length && depth > 0; i++) {
    if (src[i] === '{') depth++;
    else if (src[i] === '}') depth--;
  }
  return src.slice(start, i - 1);
}
const inMain = re => c => re.test(csMainBody(c.clean));
const notInMain = re => c => re.test(c.clean) && !re.test(csMainBody(c.clean));
const count = (re, n) => c => (c.clean.match(new RegExp(re.source, 'g')) || []).length >= n;

/* Ajoute detay (tips, recap, extra) sou leson ki deja egziste */
function addDetails(map) {
  for (const m of MODULES) for (const l of m.lessons) if (map[l.id]) Object.assign(l, map[l.id]);
}
function findModule(id) { return MODULES.find(m => m.id === id); }
