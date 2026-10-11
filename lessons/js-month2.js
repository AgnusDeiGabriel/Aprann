/* ======================= MWA 2 — JavaScript (semèn 5-8) ======================= */
MODULES.push({
  id: 'js',
  icon: '⚡',
  color: '#facc15',
  lang: 'js',
  file: 'script.js',
  name: T('Zile JavaScript', 'Île JavaScript'),
  desc: T('Bay paj ou yo lavi ak lojik', 'Donner vie et logique à tes pages'),
  duration: T('Mwa 2-3 · 8 semèn', 'Mois 2-3 · 8 semaines'),
  weeks: [
    T('Baz yo: varyab, tip, kalkil, tèks', 'Les bases : variables, types, calculs, textes'),
    T('Pran desizyon: kondisyon', 'Prendre des décisions : conditions'),
    T('Repete: bouk yo', 'Répéter : les boucles'),
    T('Fonksyon', 'Les fonctions'),
    T('Tablo (array)', 'Les tableaux (array)'),
    T('Objè ak done', 'Objets et données'),
    T('DOM: fè paj la reyaji', 'DOM : rendre la page interactive'),
    T('JS avanse ak pwojè final', 'JS avancé et projet final')
  ],
  lessons: [
    /* ---------- Semèn 5 ---------- */
{
      id: 'js-1',
      title: T('Premye mesaj ou', 'Ton premier message'),
      theory: T(
        `<p><b>JavaScript</b> (JS) se lang ki bay paj web yo <b>lavi</b>: li reyaji lè ou klike, li kalkile, li chanje paj la.</p>
         <p><code>console.log()</code> afiche yon mesaj nan <b>konsòl</b> la. Se meyè zanmi pwogramè a pou wè sa k ap pase!</p>
         <pre>console.log("Mwen renmen kode!");</pre>
         <p>Tèks yo (<b>string</b>) toujou ant gimè <code>"…"</code> oswa <code>'…'</code>. Chak enstriksyon fini ak <code>;</code></p>`,
        `<p><b>JavaScript</b> (JS) est le langage qui donne <b>vie</b> aux pages web : il réagit aux clics, calcule et modifie la page.</p>
         <p><code>console.log()</code> affiche un message dans la <b>console</b>. C'est le meilleur ami du programmeur pour voir ce qui se passe !</p>
         <pre>console.log("J'adore coder !");</pre>
         <p>Les textes (<b>strings</b>) sont toujours entre guillemets <code>"…"</code> ou <code>'…'</code>. Chaque instruction se termine par <code>;</code></p>`
      ),
      task: T('Afiche <b>"Bonjou!"</b> nan konsòl la ak <code>console.log</code>.', 'Affiche <b>"Bonjour !"</b> dans la console avec <code>console.log</code>.'),
      hint: T('<code>console.log("Bonjou!");</code>', '<code>console.log("Bonjour !");</code>'),
      starter: '// ✍️\n',
      solution: 'console.log("Bonjou!");\n',
      check: ({ logs }) => {
        if (!logs.length) return T('Konsòl la vid. Itilize <code>console.log(...)</code>.', 'La console est vide. Utilise <code>console.log(...)</code>.');
        if (!logs.some(l => /bonjou/i.test(l))) return T('Mesaj la dwe gen mo <b>Bonjou</b> ladan l.', 'Le message doit contenir le mot <b>Bonjour</b>.');
        return true;
      }
    },
{
      id: 'js-2',
      title: T('Varyab', 'Les variables'),
      theory: T(
        `<p>Yon <b>varyab</b> se yon bwat ki gen yon non, kote nou sere yon valè pou itilize l pita.</p>
         <pre>const vil = "Jakmèl";
let laj = 15;
laj = 16; // let ka chanje</pre>
         <ul><li><code>const</code> — valè a pa ka chanje.</li>
         <li><code>let</code> — valè a ka chanje.</li></ul>
         <p>Nou ka <b>kole</b> tèks ak <code>+</code>:</p>
         <pre>console.log("Mwen soti " + vil);</pre>`,
        `<p>Une <b>variable</b> est une boîte avec un nom, où l'on range une valeur pour l'utiliser plus tard.</p>
         <pre>const ville = "Jacmel";
let age = 15;
age = 16; // let peut changer</pre>
         <ul><li><code>const</code> — la valeur ne peut pas changer.</li>
         <li><code>let</code> — la valeur peut changer.</li></ul>
         <p>On peut <b>coller</b> des textes avec <code>+</code> :</p>
         <pre>console.log("Je viens de " + ville);</pre>`
      ),
      task: T('Kreye yon varyab <code>non</code> (ak <code>const</code>) ki gen non ou, epi afiche <code>"Bonjou " + non</code>.', 'Crée une variable <code>non</code> (avec <code>const</code>) contenant ton prénom, puis affiche <code>"Bonjour " + non</code>.'),
      hint: T('<code>const non = "Wideline";</code> epi <code>console.log("Bonjou " + non);</code>', '<code>const non = "Wideline";</code> puis <code>console.log("Bonjour " + non);</code>'),
      starter: '',
      solution: 'const non = "Wideline";\nconsole.log("Bonjou " + non);\n',
      check: ({ logs, code }) => {
        if (!/\b(const|let)\s+non\s*=/.test(code)) return T('Mwen pa wè varyab <code>non</code> la. Ekri <code>const non = "…";</code>', 'Je ne vois pas la variable <code>non</code>. Écris <code>const non = "…";</code>');
        if (!/\+\s*non\b/.test(code)) return T('Itilize <code>+ non</code> pou kole varyab la ak tèks la.', 'Utilise <code>+ non</code> pour coller la variable au texte.');
        if (!logs.some(l => /bonjou/i.test(l))) return T('Afiche mesaj la ak <code>console.log</code>.', 'Affiche le message avec <code>console.log</code>.');
        return true;
      }
    },
    {
      id: 'js-types',
      title: T('Tip done yo', 'Les types de données'),
      theory: T(
        `<p>Chak valè nan JavaScript gen yon <b>tip</b>. Twa tip debaz yo:</p>
         <pre>"Bonjou"   // string  — tèks (ant gimè)
42         // number  — nonm (antye oswa ak vigil: 3.14)
true       // boolean — vre (true) oswa fo (false)</pre>
         <p>Operatè <code>typeof</code> di w tip yon valè:</p>
         <pre>console.log(typeof "Ayiti");  // "string"
console.log(typeof 1804);     // "number"
console.log(typeof false);    // "boolean"</pre>
         <p>Gen 2 valè espesyal tou: <code>undefined</code> (pa gen valè ankò) ak <code>null</code> (vid espre).</p>`,
        `<p>Chaque valeur en JavaScript a un <b>type</b>. Les trois types de base :</p>
         <pre>"Bonjour"  // string  — texte (entre guillemets)
42         // number  — nombre (entier ou décimal : 3.14)
true       // boolean — vrai (true) ou faux (false)</pre>
         <p>L'opérateur <code>typeof</code> donne le type d'une valeur :</p>
         <pre>console.log(typeof "Haïti");  // "string"
console.log(typeof 1804);     // "number"
console.log(typeof false);    // "boolean"</pre>
         <p>Il existe aussi 2 valeurs spéciales : <code>undefined</code> (pas encore de valeur) et <code>null</code> (vide volontairement).</p>`
      ),
      task: T(
        'Afiche tip chak varyab (<code>non</code>, <code>popilasyon</code>, <code>seZile</code>) ak <code>typeof</code> — youn pa liy.',
        'Affiche le type de chaque variable (<code>non</code>, <code>popilasyon</code>, <code>seZile</code>) avec <code>typeof</code> — un par ligne.'
      ),
      hint: T('<code>console.log(typeof non);</code> — fè menm bagay pou de lòt yo.', '<code>console.log(typeof non);</code> — fais pareil pour les deux autres.'),
      starter: 'const non = "Ayiti";\nconst popilasyon = 11500000;\nconst seZile = true;\n\n',
      solution: 'const non = "Ayiti";\nconst popilasyon = 11500000;\nconst seZile = true;\n\nconsole.log(typeof non);\nconsole.log(typeof popilasyon);\nconsole.log(typeof seZile);\n',
      check: need(
        R(/typeof/, 'Itilize <code>typeof</code>.', 'Utilise <code>typeof</code>.'),
        R(logsAre(['string', 'number', 'boolean']), 'Konsòl la dwe montre: <code>string</code>, <code>number</code>, <code>boolean</code> (nan lòd sa a).', 'La console doit afficher : <code>string</code>, <code>number</code>, <code>boolean</code> (dans cet ordre).')
      ),
      extra: T(
        `<p>⚠️ <code>"5"</code> (string) ak <code>5</code> (number) pa menm bagay! Gade:</p>
         <pre>console.log("5" + 3);   // "53"  (kole tèks)
console.log(5 + 3);     // 8     (adisyon)
console.log(Number("5") + 3);  // 8 — konvèti tèks an nonm</pre>`,
        `<p>⚠️ <code>"5"</code> (string) et <code>5</code> (number) ne sont pas pareils ! Regarde :</p>
         <pre>console.log("5" + 3);   // "53"  (concaténation)
console.log(5 + 3);     // 8     (addition)
console.log(Number("5") + 3);  // 8 — convertit le texte en nombre</pre>`
      ),
      tips: T(
        `<li>Pa mete gimè otou nonm si w vle kalkile ak yo.</li><li><code>true</code> ak <code>false</code> ekri an miniskil, san gimè.</li>`,
        `<li>Pas de guillemets autour des nombres si tu veux calculer avec.</li><li><code>true</code> et <code>false</code> s'écrivent en minuscules, sans guillemets.</li>`
      ),
      recap: T(
        `<li><b>string</b>, <b>number</b>, <b>boolean</b>.</li><li><code>typeof</code> bay tip la.</li>`,
        `<li><b>string</b>, <b>number</b>, <b>boolean</b>.</li><li><code>typeof</code> donne le type.</li>`
      )
    },
{
      id: 'js-3',
      title: T('Kalkil', 'Les calculs'),
      theory: T(
        `<p>JavaScript konn fè matematik:</p>
         <pre>+  adisyon       5 + 2   → 7
-  soustraksyon   5 - 2   → 3
*  miltiplikasyon 5 * 2   → 10
/  divizyon       10 / 2  → 5
%  rès            7 % 2   → 1</pre>
         <p>Nou ka sere rezilta a nan yon varyab:</p>
         <pre>let a = 3;
let b = 4;
let somme = a + b;
console.log(somme); // 7</pre>`,
        `<p>JavaScript sait faire des maths :</p>
         <pre>+  addition        5 + 2   → 7
-  soustraction    5 - 2   → 3
*  multiplication  5 * 2   → 10
/  division        10 / 2  → 5
%  reste (modulo)  7 % 2   → 1</pre>
         <p>On peut ranger le résultat dans une variable :</p>
         <pre>let a = 3;
let b = 4;
let somme = a + b;
console.log(somme); // 7</pre>`
      ),
      task: T('Yon pen koute <b>250</b> goud. Ou achte <b>4</b>. Kreye varyab <code>total</code> = <code>pri * kantite</code> epi afiche l.', 'Un pain coûte <b>250</b> gourdes. Tu en achètes <b>4</b>. Crée la variable <code>total</code> = <code>pri * kantite</code> et affiche-la.'),
      hint: T('<code>let total = pri * kantite;</code> epi <code>console.log(total);</code>', '<code>let total = pri * kantite;</code> puis <code>console.log(total);</code>'),
      starter: 'let pri = 250;\nlet kantite = 4;\n\n',
      solution: 'let pri = 250;\nlet kantite = 4;\n\nlet total = pri * kantite;\nconsole.log(total);\n',
      check: ({ logs, code }) => {
        if (!/\b(let|const|var)\s+total\s*=/.test(code)) return T('Kreye varyab <code>total</code> la.', 'Crée la variable <code>total</code>.');
        if (!/pri\s*\*\s*kantite|kantite\s*\*\s*pri/.test(code)) return T('Kalkile <code>total</code> ak varyab yo: <code>pri * kantite</code>.', 'Calcule <code>total</code> avec les variables : <code>pri * kantite</code>.');
        if (!logs.some(l => l.includes('1000'))) return T('Afiche <code>total</code> ak <code>console.log</code> (li dwe bay 1000).', 'Affiche <code>total</code> avec <code>console.log</code> (cela doit donner 1000).');
        return true;
      }
    },
    {
      id: 'js-strings',
      title: T('Travay ak tèks', 'Travailler avec le texte'),
      theory: T(
        `<p>Avèk <b>backtick</b> (<code>\`</code>) ou ka mete varyab dirèkteman nan yon tèks ak <code>\${…}</code>. Sa rele <b>template literal</b>:</p>
         <pre>const non = "Jak";
const laj = 15;
console.log(\`\${non} gen \${laj} an\`);   // Jak gen 15 an</pre>
         <p>Kèk zouti pou tèks:</p>
         <pre>"ayiti".length          // 5
"ayiti".toUpperCase()   // "AYITI"
"AYITI".toLowerCase()   // "ayiti"
"  bonjou ".trim()      // "bonjou"
"ayiti".includes("ti")  // true</pre>
         <p>Sou klavye: backtick la souvan anlè <b>Tab</b>, oswa <b>AltGr + 7</b> sou klavye franse.</p>`,
        `<p>Avec les <b>backticks</b> (<code>\`</code>) tu peux insérer des variables directement dans un texte avec <code>\${…}</code>. C'est un <b>template literal</b> :</p>
         <pre>const nom = "Jacques";
const age = 15;
console.log(\`\${nom} a \${age} ans\`);   // Jacques a 15 ans</pre>
         <p>Quelques outils pour le texte :</p>
         <pre>"haiti".length          // 5
"haiti".toUpperCase()   // "HAITI"
"HAITI".toLowerCase()   // "haiti"
"  bonjour ".trim()     // "bonjour"
"haiti".includes("ti")  // true</pre>
         <p>Au clavier : le backtick est souvent au-dessus de <b>Tab</b>, ou <b>AltGr + 7</b> sur clavier AZERTY.</p>`
      ),
      task: T(
        'Ak yon template literal, afiche: <b>AYITI gen 5 lèt</b> — itilize <code>peyi.toUpperCase()</code> ak <code>peyi.length</code>.',
        'Avec un template literal, affiche : <b>AYITI a 5 lettres</b> — utilise <code>peyi.toUpperCase()</code> et <code>peyi.length</code>.'
      ),
      hint: T('<code>console.log(`${peyi.toUpperCase()} gen ${peyi.length} lèt`);</code>', '<code>console.log(`${peyi.toUpperCase()} a ${peyi.length} lettres`);</code>'),
      starter: 'const peyi = "ayiti";\n\n',
      solution: 'const peyi = "ayiti";\n\nconsole.log(`${peyi.toUpperCase()} gen ${peyi.length} lèt`);\n',
      check: need(
        R(/`[^`]*\$\{[^`]*`/, 'Itilize yon template literal ak backtick <code>`</code> ak <code>${…}</code>.', 'Utilise un template literal avec backtick <code>`</code> et <code>${…}</code>.'),
        R(/peyi\.toUpperCase\(\)/, 'Itilize <code>peyi.toUpperCase()</code>.', 'Utilise <code>peyi.toUpperCase()</code>.'),
        R(/peyi\.length/, 'Itilize <code>peyi.length</code>.', 'Utilise <code>peyi.length</code>.'),
        R(logHas(/AYITI\D+5/), 'Konsòl la dwe montre <b>AYITI … 5 …</b>', 'La console doit afficher <b>AYITI … 5 …</b>')
      ),
      tips: T(
        `<li><code>\${}</code> mache <b>sèlman</b> ak backtick, pa ak <code>"…"</code>.</li><li><code>length</code> pa gen parantèz; <code>toUpperCase()</code> genyen.</li>`,
        `<li><code>\${}</code> ne marche <b>qu'avec</b> les backticks, pas avec <code>"…"</code>.</li><li><code>length</code> n'a pas de parenthèses ; <code>toUpperCase()</code> en a.</li>`
      ),
      recap: T(
        `<li>Template literal: <code>\`… \${x} …\`</code></li><li><code>.length</code>, <code>.toUpperCase()</code>, <code>.trim()</code>, <code>.includes()</code></li>`,
        `<li>Template literal : <code>\`… \${x} …\`</code></li><li><code>.length</code>, <code>.toUpperCase()</code>, <code>.trim()</code>, <code>.includes()</code></li>`
      )
    },

    /* ---------- Semèn 6 ---------- */
    {
      id: 'js-compare',
      title: T('Konparezon ak boolean', 'Comparaisons et booléens'),
      theory: T(
        `<p>Yon <b>konparezon</b> toujou bay yon <b>boolean</b>: <code>true</code> oswa <code>false</code>.</p>
         <pre>10 &gt; 5      // true
3 &lt;= 2      // false
7 === 7     // true   (egal, menm tip)
7 !== 8     // true   (diferan)</pre>
         <p>⚠️ Toujou itilize <code>===</code> (3 siy egal), pa <code>==</code>:</p>
         <pre>5 == "5"    // true  😬 (li chanje tip la)
5 === "5"   // false ✅ (li konpare tip la tou)</pre>
         <p>Ou ka sere rezilta yon konparezon nan yon varyab:</p>
         <pre>const pase = note &gt;= 50;</pre>`,
        `<p>Une <b>comparaison</b> donne toujours un <b>booléen</b> : <code>true</code> ou <code>false</code>.</p>
         <pre>10 &gt; 5      // true
3 &lt;= 2      // false
7 === 7     // true   (égal, même type)
7 !== 8     // true   (différent)</pre>
         <p>⚠️ Utilise toujours <code>===</code> (3 signes égal), pas <code>==</code> :</p>
         <pre>5 == "5"    // true  😬 (convertit le type)
5 === "5"   // false ✅ (compare aussi le type)</pre>
         <p>On peut ranger le résultat d'une comparaison dans une variable :</p>
         <pre>const reussi = note &gt;= 50;</pre>`
      ),
      task: T(
        'Kreye <code>const granmoun = laj &gt;= 18;</code> epi afiche <code>granmoun</code>.',
        'Crée <code>const granmoun = laj &gt;= 18;</code> puis affiche <code>granmoun</code>.'
      ),
      hint: T('Pa bezwen <code>if</code> isit la — konparezon an deja bay <code>true</code> oswa <code>false</code>.', 'Pas besoin de <code>if</code> ici — la comparaison donne déjà <code>true</code> ou <code>false</code>.'),
      starter: 'const laj = 20;\n\n',
      solution: 'const laj = 20;\n\nconst granmoun = laj >= 18;\nconsole.log(granmoun);\n',
      check: async ctx => {
        if (!/\b(const|let)\s+granmoun\s*=/.test(ctx.code)) return T('Kreye varyab <code>granmoun</code>.', 'Crée la variable <code>granmoun</code>.');
        if (!/laj\s*>=\s*18/.test(ctx.code)) return T('Konpare ak <code>laj &gt;= 18</code>.', 'Compare avec <code>laj &gt;= 18</code>.');
        const f = await firstFailingCase(ctx, 'laj', [[20, 'true'], [12, 'false'], [18, 'true']]);
        return f ? failMsg(f, 'laj') : true;
      },
      tips: T(
        `<li><code>=</code> bay yon valè; <code>===</code> konpare. Pa melanje yo!</li><li><code>=&gt;</code> pa yon konparezon — se <code>&gt;=</code>.</li>`,
        `<li><code>=</code> affecte ; <code>===</code> compare. Ne les mélange pas !</li><li><code>=&gt;</code> n'est pas une comparaison — c'est <code>&gt;=</code>.</li>`
      ),
      recap: T(
        `<li><code>&gt; &lt; &gt;= &lt;= === !==</code></li><li>Rezilta = <code>true</code>/<code>false</code>.</li>`,
        `<li><code>&gt; &lt; &gt;= &lt;= === !==</code></li><li>Résultat = <code>true</code>/<code>false</code>.</li>`
      )
    },
{
      id: 'js-4',
      title: T('Kondisyon', 'Les conditions'),
      theory: T(
        `<p><code>if</code> / <code>else</code> pèmèt pwogram nan <b>pran desizyon</b>:</p>
         <pre>let lapli = true;
if (lapli) {
  console.log("Pran parapli w!");
} else {
  console.log("Bèl tan!");
}</pre>
         <p>Konparezon yo: <code>&gt;</code> pi gran, <code>&lt;</code> pi piti, <code>&gt;=</code> pi gran oswa egal, <code>===</code> egal, <code>!==</code> diferan.</p>`,
        `<p><code>if</code> / <code>else</code> permet au programme de <b>prendre des décisions</b> :</p>
         <pre>let pluie = true;
if (pluie) {
  console.log("Prends ton parapluie !");
} else {
  console.log("Il fait beau !");
}</pre>
         <p>Les comparaisons : <code>&gt;</code> plus grand, <code>&lt;</code> plus petit, <code>&gt;=</code> plus grand ou égal, <code>===</code> égal, <code>!==</code> différent.</p>`
      ),
      task: T('Si <code>note</code> pi gran oswa egal a <b>50</b>, afiche <b>"Pase"</b>; sinon afiche <b>"Echwe"</b>.', 'Si <code>note</code> est supérieure ou égale à <b>50</b>, affiche <b>"Réussi"</b> ; sinon affiche <b>"Échoué"</b>.'),
      hint: T('<code>if (note &gt;= 50) { … } else { … }</code>', '<code>if (note &gt;= 50) { … } else { … }</code>'),
      starter: 'let note = 75;\n\n',
      solution: 'let note = 75;\n\nif (note >= 50) {\n  console.log("Pase");\n} else {\n  console.log("Echwe");\n}\n',
      check: async ({ logs, code, rerun }) => {
        if (!/\bif\s*\(/.test(code)) return T('Itilize <code>if (…)</code>.', 'Utilise <code>if (…)</code>.');
        if (!/\belse\b/.test(code)) return T('Pa bliye <code>else</code> pou ka a kote li echwe.', 'N\'oublie pas le <code>else</code> pour le cas d\'échec.');
        if (!logs.some(l => /pase|r[ée]ussi/i.test(l))) return T('Avèk <code>note = 75</code>, pwogram nan dwe afiche "Pase".', 'Avec <code>note = 75</code>, le programme doit afficher "Réussi".');
        const r = await rerun(code.replace(/note\s*=\s*\d+/, 'note = 30'));
        if (!r.logs.some(l => /echwe|[ée]chou[ée]/i.test(l))) return T('Mwen eseye ak <code>note = 30</code> epi mwen pa wè "Echwe".', 'J\'ai essayé avec <code>note = 30</code> et je ne vois pas "Échoué".');
        return true;
      }
    },
    {
      id: 'js-elseif',
      title: T('Plizyè chemen: else if', 'Plusieurs chemins : else if'),
      theory: T(
        `<p>Lè gen <b>plis pase 2</b> posiblite, nou chèn kondisyon yo ak <code>else if</code>:</p>
         <pre>if (tanperati &gt;= 30) {
  console.log("Fè cho");
} else if (tanperati &gt;= 20) {
  console.log("Bon tan");
} else {
  console.log("Fè frèt");
}</pre>
         <p>JavaScript tcheke kondisyon yo <b>youn apre lòt, de anwo an ba</b>. Depi youn vre, li egzekite blòk li a epi li <b>sote tout rès la</b>. Se poutèt sa <b>lòd</b> kondisyon yo enpòtan!</p>`,
        `<p>Quand il y a <b>plus de 2</b> possibilités, on enchaîne les conditions avec <code>else if</code> :</p>
         <pre>if (temperature &gt;= 30) {
  console.log("Il fait chaud");
} else if (temperature &gt;= 20) {
  console.log("Il fait bon");
} else {
  console.log("Il fait froid");
}</pre>
         <p>JavaScript teste les conditions <b>une par une, de haut en bas</b>. Dès qu'une est vraie, il exécute son bloc et <b>saute tout le reste</b>. C'est pourquoi l'<b>ordre</b> des conditions compte !</p>`
      ),
      task: T(
        'Afiche mantyon an: <code>note &gt;= 90</code> → <b>"A"</b>, <code>&gt;= 75</code> → <b>"B"</b>, <code>&gt;= 50</code> → <b>"C"</b>, sinon <b>"D"</b>.',
        'Affiche la mention : <code>note &gt;= 90</code> → <b>"A"</b>, <code>&gt;= 75</code> → <b>"B"</b>, <code>&gt;= 50</code> → <b>"C"</b>, sinon <b>"D"</b>.'
      ),
      hint: T('Kòmanse ak kondisyon ki pi <b>sevè</b> a (<code>&gt;= 90</code>), answit <code>else if (note &gt;= 75)</code>…', 'Commence par la condition la plus <b>stricte</b> (<code>&gt;= 90</code>), puis <code>else if (note &gt;= 75)</code>…'),
      starter: 'let note = 85;\n\n',
      solution: 'let note = 85;\n\nif (note >= 90) {\n  console.log("A");\n} else if (note >= 75) {\n  console.log("B");\n} else if (note >= 50) {\n  console.log("C");\n} else {\n  console.log("D");\n}\n',
      check: async ctx => {
        if (!/else\s+if/.test(ctx.code)) return T('Itilize <code>else if</code>.', 'Utilise <code>else if</code>.');
        const f = await firstFailingCase(ctx, 'note', [[85, 'B'], [95, 'A'], [60, 'C'], [30, 'D'], [75, 'B'], [90, 'A']]);
        return f ? failMsg(f, 'note') : true;
      },
      tips: T(
        `<li>Si w mete <code>note &gt;= 50</code> an premye, yon 95 ap bay "C"! Lòd la enpòtan.</li><li>Se <code>else if</code> (2 mo), pa <code>elseif</code>.</li>`,
        `<li>Si tu mets <code>note &gt;= 50</code> en premier, un 95 donnera "C" ! L'ordre compte.</li><li>C'est <code>else if</code> (2 mots), pas <code>elseif</code>.</li>`
      ),
      recap: T(
        `<li><code>if</code> → <code>else if</code> → … → <code>else</code>.</li><li>Premye kondisyon ki vre a genyen.</li>`,
        `<li><code>if</code> → <code>else if</code> → … → <code>else</code>.</li><li>La première condition vraie gagne.</li>`
      )
    },
    {
      id: 'js-logic',
      title: T('Operatè lojik: && || !', 'Opérateurs logiques : && || !'),
      theory: T(
        `<p>Pou konbine plizyè kondisyon:</p>
         <pre>&amp;&amp;  E    — tou de dwe vre
||  OSWA — omwen youn dwe vre
!   PA   — chanje true an false (e vis vèsa)</pre>
         <pre>const laj = 16;
const avekParan = true;

if (laj &gt;= 18 || avekParan) {
  console.log("Ou ka antre");
}

if (!avekParan) {
  console.log("Pa gen paran");
}</pre>`,
        `<p>Pour combiner plusieurs conditions :</p>
         <pre>&amp;&amp;  ET  — les deux doivent être vraies
||  OU  — au moins une doit être vraie
!   NON — inverse true et false</pre>
         <pre>const age = 16;
const avecParent = true;

if (age &gt;= 18 || avecParent) {
  console.log("Tu peux entrer");
}

if (!avecParent) {
  console.log("Pas de parent");
}</pre>`
      ),
      task: T(
        'Si <code>laj &gt;= 18</code> <b>E</b> <code>genKat</code> vre, afiche <b>"Ou ka vote"</b>; sinon afiche <b>"Ou pa ka vote"</b>.',
        'Si <code>laj &gt;= 18</code> <b>ET</b> <code>genKat</code> est vrai, affiche <b>"Tu peux voter"</b> ; sinon <b>"Tu ne peux pas voter"</b>.'
      ),
      hint: T('<code>if (laj &gt;= 18 &amp;&amp; genKat) { … } else { … }</code>', '<code>if (laj &gt;= 18 &amp;&amp; genKat) { … } else { … }</code>'),
      starter: 'const laj = 20;\nconst genKat = true;\n\n',
      solution: 'const laj = 20;\nconst genKat = true;\n\nif (laj >= 18 && genKat) {\n  console.log("Ou ka vote");\n} else {\n  console.log("Ou pa ka vote");\n}\n',
      check: async ctx => {
        if (!/&&/.test(ctx.code)) return T('Itilize <code>&amp;&amp;</code>.', 'Utilise <code>&amp;&amp;</code>.');
        const yes = got => got.some(l => /ka vote|peux voter/i.test(l) && !/pa ka|ne peux/i.test(l));
        const no = got => got.some(l => /pa ka vote|ne peux pas/i.test(l));
        let f = await firstFailingCase(ctx, 'laj', [[20, 'Ou ka vote']], yes);
        if (!f) f = await firstFailingCase(ctx, 'laj', [[15, 'Ou pa ka vote']], no);
        if (f) return failMsg(f, 'laj');
        f = await firstFailingCase(ctx, 'genKat', [['false', 'Ou pa ka vote']], no);
        return f ? failMsg(f, 'genKat') : true;
      },
      tips: T(
        `<li>Se <b>2</b> siy: <code>&amp;&amp;</code> ak <code>||</code>.</li><li>Pa ekri <code>genKat === true</code> — <code>genKat</code> ase.</li>`,
        `<li>Ce sont <b>2</b> signes : <code>&amp;&amp;</code> et <code>||</code>.</li><li>Inutile d'écrire <code>genKat === true</code> — <code>genKat</code> suffit.</li>`
      ),
      recap: T(
        `<li><code>&amp;&amp;</code> = E, <code>||</code> = OSWA, <code>!</code> = PA.</li>`,
        `<li><code>&amp;&amp;</code> = ET, <code>||</code> = OU, <code>!</code> = NON.</li>`
      )
    },
    {
      id: 'js-switch',
      title: T('switch', 'switch'),
      theory: T(
        `<p>Lè w ap konpare <b>yon sèl</b> varyab ak anpil valè egzak, <code>switch</code> pi pwòp pase anpil <code>else if</code>:</p>
         <pre>switch (koulè) {
  case "wouj":
    console.log("Kanpe!");
    break;
  case "jòn":
    console.log("Atansyon");
    break;
  case "vèt":
    console.log("Ale");
    break;
  default:
    console.log("Koulè enkoni");
}</pre>
         <ul><li><code>case</code> — yon valè posib.</li>
         <li><code>break</code> — kite switch la (sinon li kontinye nan pwochen case la!).</li>
         <li><code>default</code> — si okenn case pa koresponn.</li></ul>`,
        `<p>Quand on compare <b>une seule</b> variable à beaucoup de valeurs exactes, <code>switch</code> est plus propre que plein de <code>else if</code> :</p>
         <pre>switch (couleur) {
  case "rouge":
    console.log("Stop !");
    break;
  case "orange":
    console.log("Attention");
    break;
  case "vert":
    console.log("Passe");
    break;
  default:
    console.log("Couleur inconnue");
}</pre>
         <ul><li><code>case</code> — une valeur possible.</li>
         <li><code>break</code> — sort du switch (sinon il continue dans le case suivant !).</li>
         <li><code>default</code> — si aucun case ne correspond.</li></ul>`
      ),
      task: T(
        'Ak yon <code>switch</code> sou <code>jou</code>, afiche non jou a: 1 → <b>Lendi</b>, 2 → Madi, 3 → Mèkredi, 4 → Jedi, 5 → Vandredi, 6 → Samdi, 7 → <b>Dimanch</b>. <code>default</code> → <b>"Jou envalid"</b>.',
        'Avec un <code>switch</code> sur <code>jou</code>, affiche le jour : 1 → <b>Lundi</b>, 2 → Mardi, 3 → Mercredi, 4 → Jeudi, 5 → Vendredi, 6 → Samedi, 7 → <b>Dimanche</b>. <code>default</code> → <b>"Jour invalide"</b>.'
      ),
      hint: T('<code>case 1: console.log("Lendi"); break;</code> — repete pou chak jou.', '<code>case 1: console.log("Lundi"); break;</code> — répète pour chaque jour.'),
      starter: 'const jou = 3;\n\n',
      solution: 'const jou = 3;\n\nswitch (jou) {\n  case 1: console.log("Lendi"); break;\n  case 2: console.log("Madi"); break;\n  case 3: console.log("Mèkredi"); break;\n  case 4: console.log("Jedi"); break;\n  case 5: console.log("Vandredi"); break;\n  case 6: console.log("Samdi"); break;\n  case 7: console.log("Dimanch"); break;\n  default: console.log("Jou envalid");\n}\n',
      check: async ctx => {
        if (!/switch\s*\(/.test(ctx.code)) return T('Itilize <code>switch</code>.', 'Utilise <code>switch</code>.');
        if (!/\bbreak\b/.test(ctx.code)) return T('Pa bliye <code>break</code> apre chak case.', 'N\'oublie pas <code>break</code> après chaque case.');
        if (!/\bdefault\s*:/.test(ctx.code)) return T('Ajoute yon <code>default:</code>.', 'Ajoute un <code>default:</code>.');
        const one = re => got => got.length === 1 && re.test(got[0]);
        const tests = [[3, /m[èe]kredi|mercredi/i, 'Mèkredi'], [1, /lendi|lundi/i, 'Lendi'], [5, /vandredi|vendredi/i, 'Vandredi'], [7, /dimanch/i, 'Dimanch'], [9, /envalid|invalide/i, 'Jou envalid']];
        for (const [v, re, label] of tests) {
          const f = await firstFailingCase(ctx, 'jou', [[v, label]], one(re));
          if (f) return T(`Ak <code>jou = ${v}</code>, mwen te espere <b>yon sèl</b> liy: <code>${label}</code>, men mwen jwenn <code>${f.got}</code>. (Ou bliye yon <code>break</code>?)`, `Avec <code>jou = ${v}</code>, j'attendais <b>une seule</b> ligne : <code>${label}</code>, mais j'obtiens <code>${f.got}</code>. (Un <code>break</code> oublié ?)`);
        }
        return true;
      },
      tips: T(
        `<li>San <code>break</code>, kòd la "tonbe" nan case anba a.</li><li><code>switch</code> konpare ak <code>===</code>: <code>case "3"</code> pa mache pou nonm <code>3</code>.</li>`,
        `<li>Sans <code>break</code>, le code « tombe » dans le case suivant.</li><li><code>switch</code> compare avec <code>===</code> : <code>case "3"</code> ne marche pas pour le nombre <code>3</code>.</li>`
      ),
      recap: T(
        `<li><code>switch</code> + <code>case</code> + <code>break</code> + <code>default</code>.</li><li>Bon pou valè egzak.</li>`,
        `<li><code>switch</code> + <code>case</code> + <code>break</code> + <code>default</code>.</li><li>Idéal pour des valeurs exactes.</li>`
      )
    },

    /* ---------- Semèn 7 ---------- */
{
      id: 'js-5',
      title: T('Bouk', 'Les boucles'),
      theory: T(
        `<p>Yon <b>bouk</b> repete kòd plizyè fwa. Bouk <code>for</code> la gen 3 pati:</p>
         <pre>for (let i = 0; i &lt; 3; i++) {
  console.log("Tour " + i);
}</pre>
         <ol><li><code>let i = 0</code> — kote nou kòmanse.</li>
         <li><code>i &lt; 3</code> — kondisyon pou kontinye.</li>
         <li><code>i++</code> — ajoute 1 apre chak tou.</li></ol>
         <p>Rezilta: Tour 0, Tour 1, Tour 2.</p>`,
        `<p>Une <b>boucle</b> répète du code plusieurs fois. La boucle <code>for</code> a 3 parties :</p>
         <pre>for (let i = 0; i &lt; 3; i++) {
  console.log("Tour " + i);
}</pre>
         <ol><li><code>let i = 0</code> — le point de départ.</li>
         <li><code>i &lt; 3</code> — la condition pour continuer.</li>
         <li><code>i++</code> — ajoute 1 après chaque tour.</li></ol>
         <p>Résultat : Tour 0, Tour 1, Tour 2.</p>`
      ),
      task: T('Itilize yon bouk <code>for</code> pou afiche nimewo <b>1</b> rive <b>5</b> (youn pa liy).', 'Utilise une boucle <code>for</code> pour afficher les nombres de <b>1</b> à <b>5</b> (un par ligne).'),
      hint: T('Kòmanse ak <code>i = 1</code> epi kontinye tank <code>i &lt;= 5</code>.', 'Commence à <code>i = 1</code> et continue tant que <code>i &lt;= 5</code>.'),
      starter: '',
      solution: 'for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}\n',
      check: ({ logs, code }) => {
        if (!/\bfor\s*\(/.test(code)) return T('Itilize yon bouk <code>for</code>.', 'Utilise une boucle <code>for</code>.');
        if (logs.map(l => l.trim()).join(',') !== '1,2,3,4,5') return T(`Konsòl la montre: <code>${logs.join(', ') || '—'}</code>. Li dwe montre 1, 2, 3, 4, 5.`, `La console affiche : <code>${logs.join(', ') || '—'}</code>. Elle doit afficher 1, 2, 3, 4, 5.`);
        return true;
      }
    },
    {
      id: 'js-while',
      title: T('Bouk while', 'La boucle while'),
      theory: T(
        `<p><code>while</code> repete yon blòk <b>tank</b> kondisyon an vre. Itilize l lè ou <b>pa konnen davans</b> konbyen fwa pou repete.</p>
         <pre>let batri = 100;
while (batri &gt; 0) {
  batri = batri - 30;
  console.log("Batri: " + batri);
}</pre>
         <p>⚠️ Si kondisyon an pa janm vin fo, bouk la pa janm fini (<b>bouk enfini</b>) epi paj la bloke. Toujou chanje varyab kondisyon an anndan bouk la!</p>
         <p>Raccourci itil: <code>x *= 2</code> = <code>x = x * 2</code>, <code>x += 5</code>, <code>x -= 1</code>, <code>x++</code> = <code>x = x + 1</code>.</p>`,
        `<p><code>while</code> répète un bloc <b>tant que</b> la condition est vraie. Utilise-la quand tu <b>ne sais pas d'avance</b> combien de fois répéter.</p>
         <pre>let batterie = 100;
while (batterie &gt; 0) {
  batterie = batterie - 30;
  console.log("Batterie : " + batterie);
}</pre>
         <p>⚠️ Si la condition ne devient jamais fausse, la boucle ne s'arrête jamais (<b>boucle infinie</b>) et la page se bloque. Modifie toujours la variable de la condition dans la boucle !</p>
         <p>Raccourcis utiles : <code>x *= 2</code> = <code>x = x * 2</code>, <code>x += 5</code>, <code>x -= 1</code>, <code>x++</code> = <code>x = x + 1</code>.</p>`
      ),
      task: T(
        'Lajan ou <b>double</b> chak ane. Ak <code>while</code>, kalkile konbyen ane li pran pou <code>lajan</code> rive omwen <b>1000</b>, epi afiche <code>ane</code>.',
        'Ton argent <b>double</b> chaque année. Avec <code>while</code>, calcule combien d\'années il faut pour que <code>lajan</code> atteigne au moins <b>1000</b>, puis affiche <code>ane</code>.'
      ),
      hint: T('<code>while (lajan &lt; 1000) { lajan *= 2; ane++; }</code> epi apre bouk la <code>console.log(ane);</code>', '<code>while (lajan &lt; 1000) { lajan *= 2; ane++; }</code> puis après la boucle <code>console.log(ane);</code>'),
      starter: 'let lajan = 100;\nlet ane = 0;\n\n',
      solution: 'let lajan = 100;\nlet ane = 0;\n\nwhile (lajan < 1000) {\n  lajan *= 2;\n  ane++;\n}\n\nconsole.log(ane);\n',
      check: async ctx => {
        if (!/while\s*\(/.test(ctx.code)) return T('Itilize yon bouk <code>while</code>.', 'Utilise une boucle <code>while</code>.');
        const f = await firstFailingCase(ctx, 'lajan', [[100, 4], [500, 1], [10, 7]], (got, exp) => got[got.length - 1] === String(exp));
        return f ? failMsg(f, 'lajan') : true;
      },
      tips: T(
        `<li>Si w bliye <code>lajan *= 2</code>, bouk la ap enfini.</li><li>Mete <code>console.log</code> <b>apre</b> bouk la pou w jwenn sèlman rezilta final la.</li>`,
        `<li>Si tu oublies <code>lajan *= 2</code>, la boucle sera infinie.</li><li>Mets le <code>console.log</code> <b>après</b> la boucle pour n'avoir que le résultat final.</li>`
      ),
      recap: T(
        `<li><code>while (kondisyon) { … }</code></li><li>Toujou fè kondisyon an chanje.</li>`,
        `<li><code>while (condition) { … }</code></li><li>Fais toujours évoluer la condition.</li>`
      )
    },
    {
      id: 'js-break',
      title: T('break ak continue', 'break et continue'),
      theory: T(
        `<p>2 mo kle pou kontwole yon bouk:</p>
         <ul><li><code>continue</code> — <b>sote</b> rès tou sa a, epi ale nan pwochen tou a.</li>
         <li><code>break</code> — <b>kanpe</b> bouk la nèt.</li></ul>
         <pre>for (let i = 1; i &lt;= 10; i++) {
  if (i === 4) continue;  // sote 4
  if (i === 7) break;     // kanpe a 7
  console.log(i);
}
// 1 2 3 5 6</pre>
         <p>Pou konnen si yon nonm se yon <b>miltip</b> 3, itilize rès divizyon an: <code>i % 3 === 0</code>.</p>`,
        `<p>2 mots-clés pour contrôler une boucle :</p>
         <ul><li><code>continue</code> — <b>saute</b> la fin de ce tour, et passe au suivant.</li>
         <li><code>break</code> — <b>arrête</b> complètement la boucle.</li></ul>
         <pre>for (let i = 1; i &lt;= 10; i++) {
  if (i === 4) continue;  // saute 4
  if (i === 7) break;     // s'arrête à 7
  console.log(i);
}
// 1 2 3 5 6</pre>
         <p>Pour savoir si un nombre est un <b>multiple</b> de 3, utilise le reste de la division : <code>i % 3 === 0</code>.</p>`
      ),
      task: T(
        'Afiche nimewo <b>1</b> rive <b>10</b>, men <b>sote</b> miltip 3 yo (3, 6, 9) ak <code>continue</code>.',
        'Affiche les nombres de <b>1</b> à <b>10</b>, mais <b>saute</b> les multiples de 3 (3, 6, 9) avec <code>continue</code>.'
      ),
      hint: T('Anndan bouk la: <code>if (i % 3 === 0) continue;</code>', 'Dans la boucle : <code>if (i % 3 === 0) continue;</code>'),
      starter: '',
      solution: 'for (let i = 1; i <= 10; i++) {\n  if (i % 3 === 0) continue;\n  console.log(i);\n}\n',
      check: need(
        R(/\bcontinue\b/, 'Itilize <code>continue</code>.', 'Utilise <code>continue</code>.'),
        R(logsAre(['1', '2', '4', '5', '7', '8', '10']), 'Konsòl la dwe montre: 1, 2, 4, 5, 7, 8, 10.', 'La console doit afficher : 1, 2, 4, 5, 7, 8, 10.')
      ),
      tips: T(
        `<li>Si <code>console.log</code> la <b>anvan</b> <code>continue</code>, nimewo a ap toujou parèt.</li><li><code>%</code> bay rès la: <code>9 % 3</code> = 0, <code>10 % 3</code> = 1.</li>`,
        `<li>Si le <code>console.log</code> est <b>avant</b> le <code>continue</code>, le nombre s'affichera quand même.</li><li><code>%</code> donne le reste : <code>9 % 3</code> = 0, <code>10 % 3</code> = 1.</li>`
      ),
      recap: T(
        `<li><code>continue</code> = sote tou a.</li><li><code>break</code> = kanpe bouk la.</li>`,
        `<li><code>continue</code> = sauter le tour.</li><li><code>break</code> = arrêter la boucle.</li>`
      )
    },
    {
      id: 'js-nested',
      title: T('Bouk anbrike', 'Boucles imbriquées'),
      theory: T(
        `<p>Yon bouk ka anndan yon lòt bouk. Pou <b>chak</b> tou bouk deyò a, bouk anndan an fè <b>tout</b> tou li yo:</p>
         <pre>for (let ranje = 1; ranje &lt;= 2; ranje++) {
  for (let kol = 1; kol &lt;= 3; kol++) {
    console.log(ranje + "-" + kol);
  }
}
// 1-1 1-2 1-3 2-1 2-2 2-3</pre>
         <p>Sa itil pou tablo 2 dimansyon, griy jwèt (echèk, damye), ak tab miltiplikasyon.</p>`,
        `<p>Une boucle peut être dans une autre boucle. Pour <b>chaque</b> tour de la boucle extérieure, la boucle intérieure fait <b>tous</b> ses tours :</p>
         <pre>for (let ligne = 1; ligne &lt;= 2; ligne++) {
  for (let col = 1; col &lt;= 3; col++) {
    console.log(ligne + "-" + col);
  }
}
// 1-1 1-2 1-3 2-1 2-2 2-3</pre>
         <p>Utile pour les tableaux à 2 dimensions, les grilles de jeu (échecs, dames) et les tables de multiplication.</p>`
      ),
      task: T(
        'Afiche tab miltiplikasyon 1 rive 3 ak 2 bouk anbrike, sou fòma <b>"2 x 3 = 6"</b> (9 liy total).',
        'Affiche les tables de multiplication de 1 à 3 avec 2 boucles imbriquées, au format <b>"2 x 3 = 6"</b> (9 lignes au total).'
      ),
      hint: T('<code>console.log(`${a} x ${b} = ${a * b}`);</code> anndan dezyèm bouk la.', '<code>console.log(`${a} x ${b} = ${a * b}`);</code> dans la seconde boucle.'),
      starter: '',
      solution: 'for (let a = 1; a <= 3; a++) {\n  for (let b = 1; b <= 3; b++) {\n    console.log(`${a} x ${b} = ${a * b}`);\n  }\n}\n',
      check: need(
        R(c => (c.code.match(/\bfor\s*\(/g) || []).length >= 2, 'Itilize <b>2</b> bouk <code>for</code>, youn anndan lòt.', 'Utilise <b>2</b> boucles <code>for</code>, l\'une dans l\'autre.'),
        R(c => c.logs.length === 9, 'Mwen ta dwe wè 9 liy egzakteman.', 'Je devrais voir exactement 9 lignes.'),
        R(logHas('1 x 1 = 1'), 'Premye liy lan dwe <code>1 x 1 = 1</code> (ak espas yo).', 'La première ligne doit être <code>1 x 1 = 1</code> (avec les espaces).'),
        R(logHas('2 x 3 = 6'), 'Mwen pa wè <code>2 x 3 = 6</code>.', 'Je ne vois pas <code>2 x 3 = 6</code>.'),
        R(logHas('3 x 3 = 9'), 'Mwen pa wè <code>3 x 3 = 9</code>.', 'Je ne vois pas <code>3 x 3 = 9</code>.')
      ),
      tips: T(
        `<li>Bay 2 bouk yo <b>non varyab diferan</b> (<code>a</code> ak <code>b</code>), sinon yo melanje.</li>`,
        `<li>Donne aux 2 boucles des <b>noms de variable différents</b> (<code>a</code> et <code>b</code>), sinon elles se mélangent.</li>`
      ),
      recap: T(
        `<li>Bouk anndan fè tout tou li pou chak tou bouk deyò.</li><li>Total tou = deyò × anndan.</li>`,
        `<li>La boucle intérieure fait tous ses tours à chaque tour extérieur.</li><li>Total = extérieur × intérieur.</li>`
      )
    },
    {
      id: 'js-math',
      title: T('Objè Math ak nonm o aza', 'L\'objet Math et le hasard'),
      theory: T(
        `<p>JavaScript gen yon bwat zouti matematik: <code>Math</code>.</p>
         <pre>Math.round(4.6)   // 5   (awondi)
Math.floor(4.9)   // 4   (desann)
Math.ceil(4.1)    // 5   (monte)
Math.max(3, 9, 2) // 9
Math.min(3, 9, 2) // 2
Math.sqrt(16)     // 4   (rasin kare)
Math.random()     // nonm o aza ant 0 ak 0.999…</pre>
         <p>Fòmil klasik pou yon nonm antye o aza ant <b>1</b> ak <b>N</b>:</p>
         <pre>Math.floor(Math.random() * N) + 1</pre>`,
        `<p>JavaScript a une boîte à outils mathématique : <code>Math</code>.</p>
         <pre>Math.round(4.6)   // 5   (arrondi)
Math.floor(4.9)   // 4   (vers le bas)
Math.ceil(4.1)    // 5   (vers le haut)
Math.max(3, 9, 2) // 9
Math.min(3, 9, 2) // 2
Math.sqrt(16)     // 4   (racine carrée)
Math.random()     // nombre au hasard entre 0 et 0,999…</pre>
         <p>Formule classique pour un entier au hasard entre <b>1</b> et <b>N</b> :</p>
         <pre>Math.floor(Math.random() * N) + 1</pre>`
      ),
      task: T(
        'Simile yon <b>zo</b> (dé) 🎲: ak yon bouk, afiche <b>10</b> nonm o aza ant <b>1</b> ak <b>6</b>.',
        'Simule un <b>dé</b> 🎲 : avec une boucle, affiche <b>10</b> nombres au hasard entre <b>1</b> et <b>6</b>.'
      ),
      hint: T('<code>Math.floor(Math.random() * 6) + 1</code>', '<code>Math.floor(Math.random() * 6) + 1</code>'),
      starter: '',
      solution: 'for (let i = 0; i < 10; i++) {\n  const zo = Math.floor(Math.random() * 6) + 1;\n  console.log(zo);\n}\n',
      check: need(
        R(/Math\.random\(\)/, 'Itilize <code>Math.random()</code>.', 'Utilise <code>Math.random()</code>.'),
        R(/Math\.(floor|ceil|round|trunc)\(/, 'Itilize <code>Math.floor()</code> pou jwenn yon nonm antye.', 'Utilise <code>Math.floor()</code> pour obtenir un entier.'),
        R(c => c.logs.length === 10, 'Mwen ta dwe wè 10 nonm.', 'Je devrais voir 10 nombres.'),
        R(c => c.logs.every(l => /^[1-6]$/.test(l.trim())), 'Chak nonm dwe yon antye ant 1 ak 6.', 'Chaque nombre doit être un entier entre 1 et 6.')
      ),
      tips: T(
        `<li><code>Math.random() * 6</code> bay 0 – 5.99: san <code>+ 1</code>, ou p ap janm jwenn 6.</li><li><code>Math</code> ekri ak <b>M majiskil</b>.</li>`,
        `<li><code>Math.random() * 6</code> donne 0 – 5,99 : sans <code>+ 1</code>, tu n'auras jamais 6.</li><li><code>Math</code> s'écrit avec un <b>M majuscule</b>.</li>`
      ),
      recap: T(
        `<li><code>Math.floor</code>, <code>round</code>, <code>ceil</code>, <code>max</code>, <code>min</code>.</li><li>Antye o aza: <code>Math.floor(Math.random() * N) + 1</code>.</li>`,
        `<li><code>Math.floor</code>, <code>round</code>, <code>ceil</code>, <code>max</code>, <code>min</code>.</li><li>Entier aléatoire : <code>Math.floor(Math.random() * N) + 1</code>.</li>`
      )
    },

    /* ---------- Semèn 8 ---------- */
{
      id: 'js-6',
      title: T('Fonksyon', 'Les fonctions'),
      theory: T(
        `<p>Yon <b>fonksyon</b> se yon blòk kòd ki gen yon non, ke nou ka itilize plizyè fwa.</p>
         <pre>function salye(moun) {
  return "Bonjou " + moun + "!";
}

console.log(salye("Mari")); // Bonjou Mari!</pre>
         <ul><li><code>moun</code> se yon <b>paramèt</b> (antre fonksyon an).</li>
         <li><code>return</code> voye rezilta a tounen.</li></ul>`,
        `<p>Une <b>fonction</b> est un bloc de code nommé, réutilisable plusieurs fois.</p>
         <pre>function saluer(personne) {
  return "Bonjour " + personne + " !";
}

console.log(saluer("Marie")); // Bonjour Marie !</pre>
         <ul><li><code>personne</code> est un <b>paramètre</b> (l'entrée de la fonction).</li>
         <li><code>return</code> renvoie le résultat.</li></ul>`
      ),
      task: T('Ekri yon fonksyon <code>double(n)</code> ki <code>return</code> nimewo a miltipliye pa 2.', 'Écris une fonction <code>double(n)</code> qui <code>return</code> le nombre multiplié par 2.'),
      hint: T('<code>function double(n) { return n * 2; }</code>', '<code>function double(n) { return n * 2; }</code>'),
      starter: '\n\nconsole.log(double(21));\n',
      solution: 'function double(n) {\n  return n * 2;\n}\n\nconsole.log(double(21));\n',
      check: ({ win }) => {
        if (typeof win.double !== 'function') return T('Mwen pa jwenn fonksyon <code>double</code>. Ekri <code>function double(n) { … }</code>.', 'Je ne trouve pas la fonction <code>double</code>. Écris <code>function double(n) { … }</code>.');
        const r = [win.double(4), win.double(10)];
        if (r[0] !== 8 || r[1] !== 20) return T(`<code>double(4)</code> bay <code>${r[0]}</code> men li dwe bay 8. Pa bliye <code>return</code>!`, `<code>double(4)</code> donne <code>${r[0]}</code> mais devrait donner 8. N'oublie pas <code>return</code> !`);
        return true;
      }
    },
    {
      id: 'js-params',
      title: T('Paramèt ak valè pa defo', 'Paramètres et valeurs par défaut'),
      theory: T(
        `<p>Yon fonksyon ka resevwa <b>plizyè paramèt</b>, separe ak vigil. Ou ka bay yon paramèt yon <b>valè pa defo</b> si moun nan pa bay li:</p>
         <pre>function pri(kantite, pinite = 25) {
  return kantite * pinite;
}

pri(4);       // 100  (pinite = 25 pa defo)
pri(4, 50);   // 200</pre>
         <p>Lè w <b>rele</b> fonksyon an, valè ou bay yo rele <b>agiman</b>.</p>`,
        `<p>Une fonction peut recevoir <b>plusieurs paramètres</b>, séparés par des virgules. On peut donner une <b>valeur par défaut</b> à un paramètre :</p>
         <pre>function prix(quantite, unitaire = 25) {
  return quantite * unitaire;
}

prix(4);       // 100  (unitaire = 25 par défaut)
prix(4, 50);   // 200</pre>
         <p>Quand on <b>appelle</b> la fonction, les valeurs passées s'appellent des <b>arguments</b>.</p>`
      ),
      task: T(
        'Ekri <code>function salye(non, lang = "ht")</code> ki retounen <b>"Bonjou Ana"</b> pa defo, oswa <b>"Bonjour Ana"</b> si <code>lang</code> se <code>"fr"</code>.',
        'Écris <code>function salye(non, lang = "ht")</code> qui renvoie <b>"Bonjou Ana"</b> par défaut, ou <b>"Bonjour Ana"</b> si <code>lang</code> vaut <code>"fr"</code>.'
      ),
      hint: T('<code>if (lang === "fr") return "Bonjour " + non;</code> epi <code>return "Bonjou " + non;</code>', '<code>if (lang === "fr") return "Bonjour " + non;</code> puis <code>return "Bonjou " + non;</code>'),
      starter: '\n\nconsole.log(salye("Ana"));\nconsole.log(salye("Ana", "fr"));\n',
      solution: 'function salye(non, lang = "ht") {\n  if (lang === "fr") {\n    return "Bonjour " + non;\n  }\n  return "Bonjou " + non;\n}\n\nconsole.log(salye("Ana"));\nconsole.log(salye("Ana", "fr"));\n',
      check: need(
        R(c => typeof c.win.salye === 'function', 'Mwen pa jwenn <code>function salye</code>.', 'Je ne trouve pas <code>function salye</code>.'),
        R(/lang\s*=\s*["']ht["']/, 'Bay <code>lang</code> valè pa defo <code>"ht"</code>.', 'Donne à <code>lang</code> la valeur par défaut <code>"ht"</code>.'),
        R(c => c.win.salye('Ana') === 'Bonjou Ana', '<code>salye("Ana")</code> dwe bay egzakteman <code>"Bonjou Ana"</code>.', '<code>salye("Ana")</code> doit renvoyer exactement <code>"Bonjou Ana"</code>.'),
        R(c => c.win.salye('Jak', 'fr') === 'Bonjour Jak', '<code>salye("Jak", "fr")</code> dwe bay <code>"Bonjour Jak"</code>.', '<code>salye("Jak", "fr")</code> doit renvoyer <code>"Bonjour Jak"</code>.')
      ),
      tips: T(
        `<li>Paramèt ki gen valè pa defo yo dwe vini <b>apre</b> lòt yo.</li><li>Atansyon ak espas la: <code>"Bonjou " + non</code>.</li>`,
        `<li>Les paramètres avec valeur par défaut viennent <b>après</b> les autres.</li><li>Attention à l'espace : <code>"Bonjou " + non</code>.</li>`
      ),
      recap: T(
        `<li>Paramèt = non nan definisyon; agiman = valè nan apèl la.</li><li><code>param = valè</code> pou yon valè pa defo.</li>`,
        `<li>Paramètre = nom dans la définition ; argument = valeur à l'appel.</li><li><code>param = valeur</code> pour une valeur par défaut.</li>`
      )
    },
    {
      id: 'js-arrow',
      title: T('Fonksyon flèch', 'Fonctions fléchées'),
      theory: T(
        `<p>Gen yon fason pi kout pou ekri yon fonksyon: <b>fonksyon flèch</b> (<code>=&gt;</code>).</p>
         <pre>// Fonksyon klasik
function triple(n) {
  return n * 3;
}

// Menm bagay an flèch
const triple = (n) =&gt; {
  return n * 3;
};

// Vèsyon kout: yon sèl ekspresyon = return otomatik
const triple = n =&gt; n * 3;</pre>
         <p>Si gen <b>0</b> oswa <b>plizyè</b> paramèt, parantèz yo obligatwa: <code>() =&gt; …</code>, <code>(a, b) =&gt; a + b</code>.</p>`,
        `<p>Il existe une façon plus courte d'écrire une fonction : la <b>fonction fléchée</b> (<code>=&gt;</code>).</p>
         <pre>// Fonction classique
function triple(n) {
  return n * 3;
}

// Même chose en fléchée
const triple = (n) =&gt; {
  return n * 3;
};

// Version courte : une seule expression = return automatique
const triple = n =&gt; n * 3;</pre>
         <p>Avec <b>0</b> ou <b>plusieurs</b> paramètres, les parenthèses sont obligatoires : <code>() =&gt; …</code>, <code>(a, b) =&gt; a + b</code>.</p>`
      ),
      task: T(
        'Kreye 2 fonksyon flèch: <code>kare</code> ki bay <code>n * n</code>, ak <code>som</code> ki bay <code>a + b</code>.',
        'Crée 2 fonctions fléchées : <code>kare</code> qui renvoie <code>n * n</code>, et <code>som</code> qui renvoie <code>a + b</code>.'
      ),
      hint: T('<code>const kare = n =&gt; n * n;</code> ak <code>const som = (a, b) =&gt; a + b;</code>', '<code>const kare = n =&gt; n * n;</code> et <code>const som = (a, b) =&gt; a + b;</code>'),
      starter: '\n\nconsole.log(kare(5));\nconsole.log(som(2, 3));\n',
      solution: 'const kare = n => n * n;\nconst som = (a, b) => a + b;\n\nconsole.log(kare(5));\nconsole.log(som(2, 3));\n',
      check: need(
        R(/=>/, 'Itilize yon fonksyon flèch <code>=&gt;</code>.', 'Utilise une fonction fléchée <code>=&gt;</code>.'),
        R(/\b(const|let)\s+kare\s*=/, 'Kreye <code>const kare = …</code>', 'Crée <code>const kare = …</code>'),
        R(c => c.win.eval('kare(4)') === 16 && c.win.eval('kare(-3)') === 9, '<code>kare(4)</code> dwe bay 16.', '<code>kare(4)</code> doit renvoyer 16.'),
        R(c => c.win.eval('som(2, 3)') === 5 && c.win.eval('som(10, -4)') === 6, '<code>som(2, 3)</code> dwe bay 5.', '<code>som(2, 3)</code> doit renvoyer 5.')
      ),
      tips: T(
        `<li>Si w mete <code>{ }</code>, ou dwe ekri <code>return</code>. San <code>{ }</code>, return lan otomatik.</li><li>Defini fonksyon flèch la <b>anvan</b> ou itilize l.</li>`,
        `<li>Avec <code>{ }</code>, il faut écrire <code>return</code>. Sans <code>{ }</code>, le return est automatique.</li><li>Définis la fonction fléchée <b>avant</b> de l'utiliser.</li>`
      ),
      recap: T(
        `<li><code>const f = (a, b) =&gt; a + b;</code></li><li>Kout ak pratik pou ti fonksyon.</li>`,
        `<li><code>const f = (a, b) =&gt; a + b;</code></li><li>Court et pratique pour les petites fonctions.</li>`
      )
    },
    {
      id: 'js-return',
      title: T('return ak desizyon', 'return et décisions'),
      theory: T(
        `<p><code>return</code> <b>fini</b> fonksyon an touswit. Nou ka itilize sa pou ekri desizyon pi senp (<b>retou bonè</b>):</p>
         <pre>function tarif(laj) {
  if (laj &lt; 5) return 0;      // gratis
  if (laj &lt; 12) return 50;    // timoun
  return 100;                 // granmoun
}

tarif(3);   // 0
tarif(8);   // 50
tarif(40);  // 100</pre>
         <p>Pa bezwen <code>else</code>: si premye <code>return</code> an egzekite, rès kòd la pa janm kouri.</p>`,
        `<p><code>return</code> <b>termine</b> la fonction immédiatement. On s'en sert pour écrire des décisions plus simples (<b>retour anticipé</b>) :</p>
         <pre>function tarif(age) {
  if (age &lt; 5) return 0;      // gratuit
  if (age &lt; 12) return 50;    // enfant
  return 100;                 // adulte
}

tarif(3);   // 0
tarif(8);   // 50
tarif(40);  // 100</pre>
         <p>Pas besoin de <code>else</code> : si le premier <code>return</code> s'exécute, le reste ne tourne jamais.</p>`
      ),
      task: T(
        'Ekri <code>function kategori(laj)</code> ki retounen <b>"timoun"</b> si laj &lt; 13, <b>"adolesan"</b> si laj &lt; 18, sinon <b>"granmoun"</b>.',
        'Écris <code>function kategori(laj)</code> qui renvoie <b>"enfant"</b> si laj &lt; 13, <b>"adolescent"</b> si laj &lt; 18, sinon <b>"adulte"</b>.'
      ),
      hint: T('<code>if (laj &lt; 13) return "timoun";</code> …', '<code>if (laj &lt; 13) return "enfant";</code> …'),
      starter: '\n\nconsole.log(kategori(8));\nconsole.log(kategori(15));\nconsole.log(kategori(30));\n',
      solution: 'function kategori(laj) {\n  if (laj < 13) return "timoun";\n  if (laj < 18) return "adolesan";\n  return "granmoun";\n}\n\nconsole.log(kategori(8));\nconsole.log(kategori(15));\nconsole.log(kategori(30));\n',
      check: need(
        R(c => typeof c.win.kategori === 'function', 'Mwen pa jwenn <code>function kategori</code>.', 'Je ne trouve pas <code>function kategori</code>.'),
        R(c => ['timoun', 'enfant'].includes(c.win.kategori(5)) && ['timoun', 'enfant'].includes(c.win.kategori(12)), '<code>kategori(5)</code> dwe bay "timoun".', '<code>kategori(5)</code> doit renvoyer "enfant".'),
        R(c => ['adolesan', 'adolescent'].includes(c.win.kategori(13)) && ['adolesan', 'adolescent'].includes(c.win.kategori(17)), '<code>kategori(15)</code> dwe bay "adolesan".', '<code>kategori(15)</code> doit renvoyer "adolescent".'),
        R(c => ['granmoun', 'adulte'].includes(c.win.kategori(18)) && ['granmoun', 'adulte'].includes(c.win.kategori(70)), '<code>kategori(30)</code> dwe bay "granmoun".', '<code>kategori(30)</code> doit renvoyer "adulte".')
      ),
      tips: T(
        `<li>Fonksyon ki pa gen <code>return</code> bay <code>undefined</code>.</li><li>Kòd ki ekri <b>apre</b> yon <code>return</code> (nan menm blòk la) pa janm egzekite.</li>`,
        `<li>Une fonction sans <code>return</code> renvoie <code>undefined</code>.</li><li>Le code écrit <b>après</b> un <code>return</code> (dans le même bloc) ne s'exécute jamais.</li>`
      ),
      recap: T(
        `<li><code>return</code> = voye valè a + kite fonksyon an.</li><li>Retou bonè = mwens <code>else</code>.</li>`,
        `<li><code>return</code> = renvoie la valeur + quitte la fonction.</li><li>Retour anticipé = moins de <code>else</code>.</li>`
      )
    },
    {
      id: 'js-scope',
      title: T('Pòte varyab yo (scope)', 'La portée des variables (scope)'),
      theory: T(
        `<p>Yon varyab egziste <b>sèlman</b> anndan blòk <code>{ }</code> kote li te kreye a. Sa rele <b>pòte</b> (scope).</p>
         <pre>let global = "mwen vizib toupatou";

function test() {
  let lokal = "mwen egziste sèlman isit";
  console.log(global);  // ✅
}

test();
console.log(lokal);     // ❌ ReferenceError</pre>
         <p>Chak fwa yon fonksyon kouri, varyab <b>lokal</b> li yo <b>rekòmanse a zewo</b>. Si w vle yon valè <b>sonje</b> ant apèl yo, li dwe deyò fonksyon an.</p>`,
        `<p>Une variable n'existe <b>que</b> dans le bloc <code>{ }</code> où elle a été créée. C'est la <b>portée</b> (scope).</p>
         <pre>let globale = "visible partout";

function test() {
  let locale = "n'existe qu'ici";
  console.log(globale);  // ✅
}

test();
console.log(locale);     // ❌ ReferenceError</pre>
         <p>À chaque appel d'une fonction, ses variables <b>locales</b> <b>repartent de zéro</b>. Pour qu'une valeur soit <b>mémorisée</b> entre les appels, elle doit être hors de la fonction.</p>`
      ),
      task: T(
        '🐞 Debogaj! Fonksyon <code>ajoute()</code> toujou bay 1. Korije l pou 3 apèl yo afiche <b>1, 2, 3</b>.',
        '🐞 Débogage ! La fonction <code>ajoute()</code> renvoie toujours 1. Corrige-la pour que les 3 appels affichent <b>1, 2, 3</b>.'
      ),
      hint: T('Deplase <code>let total = 0;</code> <b>deyò</b> (anlè) fonksyon an.', 'Déplace <code>let total = 0;</code> <b>en dehors</b> (au-dessus) de la fonction.'),
      starter: 'function ajoute() {\n  let total = 0;\n  total = total + 1;\n  return total;\n}\n\nconsole.log(ajoute());\nconsole.log(ajoute());\nconsole.log(ajoute());\n',
      solution: 'let total = 0;\n\nfunction ajoute() {\n  total = total + 1;\n  return total;\n}\n\nconsole.log(ajoute());\nconsole.log(ajoute());\nconsole.log(ajoute());\n',
      check: need(
        R(logsAre(['1', '2', '3']), 'Konsòl la dwe montre 1, 2, 3. Kote varyab <code>total</code> la kreye?', 'La console doit afficher 1, 2, 3. Où la variable <code>total</code> est-elle créée ?')
      ),
      tips: T(
        `<li>Evite twòp varyab global: yo fè kòd la difisil pou debogaj nan gwo pwojè.</li><li><code>let</code> ak <code>const</code> respekte blòk yo; ansyen <code>var</code> pa respekte yo — pa itilize <code>var</code>.</li>`,
        `<li>Évite trop de variables globales : elles compliquent le débogage dans les gros projets.</li><li><code>let</code> et <code>const</code> respectent les blocs ; l'ancien <code>var</code> non — n'utilise pas <code>var</code>.</li>`
      ),
      recap: T(
        `<li>Varyab la viv nan blòk <code>{ }</code> li.</li><li>Lokal = rekòmanse chak apèl.</li><li>🎉 Fen mwa 2!</li>`,
        `<li>La variable vit dans son bloc <code>{ }</code>.</li><li>Locale = repart à zéro à chaque appel.</li><li>🎉 Fin du mois 2 !</li>`
      )
    }
  ]
});

addDetails({
  'js-1': {
    extra: T(
      `<p>Nan yon vrè paj, nou mete JavaScript nan yon fichye apa, epi nou konekte l anba <code>&lt;body&gt;</code>:</p>
       <pre>&lt;script src="script.js"&gt;&lt;/script&gt;</pre>
       <p>Pou wè konsòl la nan navigatè w: peze <b>F12</b> (oswa klik dwat → <i>Inspecter</i>) epi chwazi onglè <b>Console</b>.</p>
       <p>Kòmantè an JS: <code>// yon liy</code> oswa <code>/* plizyè liy */</code>.</p>`,
      `<p>Dans une vraie page, on met le JavaScript dans un fichier séparé, relié en bas du <code>&lt;body&gt;</code> :</p>
       <pre>&lt;script src="script.js"&gt;&lt;/script&gt;</pre>
       <p>Pour voir la console dans ton navigateur : appuie sur <b>F12</b> (ou clic droit → <i>Inspecter</i>) puis l'onglet <b>Console</b>.</p>
       <p>Commentaires en JS : <code>// une ligne</code> ou <code>/* plusieurs lignes */</code>.</p>`
    ),
    tips: T(
      `<li>JS sansib a majiskil: <code>Console.log</code> ❌, <code>console.log</code> ✅.</li><li>Pa bliye fèmen gimè yo ak parantèz la.</li>`,
      `<li>JS est sensible à la casse : <code>Console.log</code> ❌, <code>console.log</code> ✅.</li><li>N'oublie pas de fermer les guillemets et la parenthèse.</li>`
    ),
    recap: T(`<li><code>console.log(…)</code> afiche nan konsòl la.</li><li>Tèks = ant gimè.</li>`, `<li><code>console.log(…)</code> affiche dans la console.</li><li>Texte = entre guillemets.</li>`)
  },
  'js-2': {
    extra: T(
      `<p>Règ pou non varyab:</p>
       <ul><li>Kòmanse ak yon lèt, <code>_</code> oswa <code>$</code> — pa ak yon chif.</li>
       <li>Pa gen espas: itilize <b>camelCase</b> → <code>nonKonple</code>, <code>pwiTotal</code>.</li>
       <li>Chwazi non ki gen sans: <code>pri</code> pi bon pase <code>x</code>.</li></ul>
       <p>Konsèy pwofesyonèl: itilize <code>const</code> pa defo, epi <code>let</code> sèlman si valè a dwe chanje.</p>`,
      `<p>Règles pour nommer les variables :</p>
       <ul><li>Commence par une lettre, <code>_</code> ou <code>$</code> — pas par un chiffre.</li>
       <li>Pas d'espace : utilise le <b>camelCase</b> → <code>nomComplet</code>, <code>prixTotal</code>.</li>
       <li>Choisis des noms parlants : <code>prix</code> est mieux que <code>x</code>.</li></ul>
       <p>Conseil pro : utilise <code>const</code> par défaut, et <code>let</code> seulement si la valeur doit changer.</p>`
    ),
    tips: T(
      `<li>Ou pa ka chanje yon <code>const</code>: <code>TypeError: Assignment to constant variable</code>.</li><li>Pa mete gimè otou non varyab la: <code>"non"</code> se yon tèks, <code>non</code> se varyab la.</li>`,
      `<li>On ne peut pas modifier une <code>const</code> : <code>TypeError: Assignment to constant variable</code>.</li><li>Pas de guillemets autour du nom : <code>"non"</code> est un texte, <code>non</code> est la variable.</li>`
    ),
    recap: T(`<li><code>const</code> = fiks, <code>let</code> = ka chanje.</li><li><code>+</code> kole tèks.</li>`, `<li><code>const</code> = fixe, <code>let</code> = modifiable.</li><li><code>+</code> colle des textes.</li>`)
  },
  'js-3': {
    tips: T(
      `<li>Priyorite: <code>*</code> ak <code>/</code> anvan <code>+</code> ak <code>-</code>. <code>2 + 3 * 4</code> = 14. Itilize parantèz: <code>(2 + 3) * 4</code> = 20.</li><li>Divizyon pa 0 bay <code>Infinity</code>.</li>`,
      `<li>Priorité : <code>*</code> et <code>/</code> avant <code>+</code> et <code>-</code>. <code>2 + 3 * 4</code> = 14. Utilise des parenthèses : <code>(2 + 3) * 4</code> = 20.</li><li>Diviser par 0 donne <code>Infinity</code>.</li>`
    ),
    recap: T(`<li><code>+ - * / %</code></li><li>Sere rezilta yo nan varyab.</li>`, `<li><code>+ - * / %</code></li><li>Range les résultats dans des variables.</li>`)
  },
  'js-4': {
    tips: T(
      `<li>Kondisyon an ant <b>parantèz</b>: <code>if (note &gt;= 50)</code>.</li><li>Pa mete <code>;</code> apre <code>if (…)</code> — sa kase l!</li>`,
      `<li>La condition est entre <b>parenthèses</b> : <code>if (note &gt;= 50)</code>.</li><li>Pas de <code>;</code> après <code>if (…)</code> — ça le casse !</li>`
    ),
    recap: T(`<li><code>if (…) { } else { }</code></li><li>Yon sèl nan 2 blòk yo egzekite.</li>`, `<li><code>if (…) { } else { }</code></li><li>Un seul des 2 blocs s'exécute.</li>`)
  },
  'js-5': {
    tips: T(
      `<li>Separe 3 pati yo ak <code>;</code> pa <code>,</code>.</li><li><code>i &lt; 5</code> rete a 4; <code>i &lt;= 5</code> rive 5.</li>`,
      `<li>Sépare les 3 parties par <code>;</code> et non <code>,</code>.</li><li><code>i &lt; 5</code> s'arrête à 4 ; <code>i &lt;= 5</code> va jusqu'à 5.</li>`
    ),
    recap: T(`<li><code>for (depa; kondisyon; etap)</code></li><li><code>i++</code> = ajoute 1.</li>`, `<li><code>for (départ; condition; pas)</code></li><li><code>i++</code> = ajoute 1.</li>`)
  },
  'js-6': {
    tips: T(
      `<li>Defini fonksyon an pa egzekite l — fò w <b>rele</b> l: <code>double(5)</code>.</li><li>San <code>return</code>, fonksyon an bay <code>undefined</code>.</li>`,
      `<li>Définir une fonction ne l'exécute pas — il faut l'<b>appeler</b> : <code>double(5)</code>.</li><li>Sans <code>return</code>, la fonction renvoie <code>undefined</code>.</li>`
    ),
    recap: T(`<li><code>function non(param) { return …; }</code></li><li>Ekri yon fwa, itilize plizyè fwa.</li>`, `<li><code>function nom(param) { return …; }</code></li><li>Écrire une fois, utiliser plusieurs fois.</li>`)
  }
});
