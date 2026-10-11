/* ======================= MWA 3 — JavaScript (semèn 9-12) ======================= */
findModule('js').lessons.push(
  /* ---------- Semèn 9: Tablo ---------- */
{
      id: 'js-9',
      title: T('Tablo (Array)', 'Les tableaux (Array)'),
      theory: T(
        `<p>Yon <b>tablo</b> (array) sere <b>plizyè valè</b> nan yon sèl varyab, ant <code>[ ]</code>:</p>
         <pre>const koulè = ["ble", "wouj"];

console.log(koulè[0]);      // "ble"  (endèks kòmanse a 0!)
console.log(koulè.length);  // 2

koulè.push("blan");         // ajoute nan fen
console.log(koulè);         // ["ble","wouj","blan"]</pre>`,
        `<p>Un <b>tableau</b> (array) range <b>plusieurs valeurs</b> dans une seule variable, entre <code>[ ]</code> :</p>
         <pre>const couleurs = ["bleu", "rouge"];

console.log(couleurs[0]);      // "bleu"  (l'indice commence à 0 !)
console.log(couleurs.length);  // 2

couleurs.push("blanc");        // ajoute à la fin
console.log(couleurs);         // ["bleu","rouge","blanc"]</pre>`
      ),
      task: T('Ajoute <b>"kowosòl"</b> nan tablo <code>fwi</code> a ak <code>push</code>, epi afiche <code>fwi.length</code> (li dwe bay 4).', 'Ajoute <b>"corossol"</b> au tableau <code>fwi</code> avec <code>push</code>, puis affiche <code>fwi.length</code> (cela doit donner 4).'),
      hint: T('<code>fwi.push("kowosòl");</code> epi <code>console.log(fwi.length);</code>', '<code>fwi.push("corossol");</code> puis <code>console.log(fwi.length);</code>'),
      starter: 'const fwi = ["mango", "zaboka", "kokoye"];\n\n',
      solution: 'const fwi = ["mango", "zaboka", "kokoye"];\n\nfwi.push("kowosòl");\nconsole.log(fwi.length);\n',
      check: ({ logs, code }) => {
        if (!/fwi\.push\s*\(/.test(code)) return T('Itilize <code>fwi.push(…)</code> pou ajoute fwi a.', 'Utilise <code>fwi.push(…)</code> pour ajouter le fruit.');
        if (!/fwi\.length/.test(code)) return T('Afiche <code>fwi.length</code>.', 'Affiche <code>fwi.length</code>.');
        if (!logs.some(l => l.trim() === '4')) return T('Konsòl la dwe montre <code>4</code>.', 'La console doit afficher <code>4</code>.');
        return true;
      }
    },
  {
    id: 'js-arrmethods',
    title: T('Zouti tablo yo', 'Les outils des tableaux'),
    theory: T(
      `<p>Tablo yo gen anpil <b>metòd</b> (fonksyon entegre):</p>
       <pre>const lis = ["diri", "pwa", "mayi"];

lis.includes("pwa")   // true  — èske li ladan l?
lis.indexOf("mayi")   // 2     — ki pozisyon? (-1 si pa la)
lis.pop()             // retire DÈNYE a  → "mayi"
lis.shift()           // retire PREMYE a → "diri"
lis.unshift("ze")     // ajoute nan KÒMANSMAN
lis.slice(0, 2)       // kopi yon moso (pa chanje orijinal la)
lis.join(", ")        // "ze, pwa" — tounen yon tèks</pre>`,
      `<p>Les tableaux ont beaucoup de <b>méthodes</b> (fonctions intégrées) :</p>
       <pre>const liste = ["riz", "pois", "maïs"];

liste.includes("pois")  // true  — est-il dedans ?
liste.indexOf("maïs")   // 2     — quelle position ? (-1 si absent)
liste.pop()             // retire le DERNIER  → "maïs"
liste.shift()           // retire le PREMIER  → "riz"
liste.unshift("œuf")    // ajoute au DÉBUT
liste.slice(0, 2)       // copie une partie (sans modifier l'original)
liste.join(", ")        // "œuf, pois" — devient un texte</pre>`
    ),
    task: T(
      'Afiche (youn pa liy): <b>1)</b> èske <code>lis</code> gen <code>"pwa"</code> (<code>includes</code>), <b>2)</b> pozisyon <code>"mayi"</code> (<code>indexOf</code>), <b>3)</b> retire dènye eleman an ak <code>pop()</code> epi afiche <code>lis.length</code>.',
      'Affiche (un par ligne) : <b>1)</b> si <code>lis</code> contient <code>"pwa"</code> (<code>includes</code>), <b>2)</b> la position de <code>"mayi"</code> (<code>indexOf</code>), <b>3)</b> retire le dernier élément avec <code>pop()</code> puis affiche <code>lis.length</code>.'
    ),
    hint: T('Rezilta a dwe: <code>true</code>, <code>2</code>, <code>3</code>.', 'Le résultat doit être : <code>true</code>, <code>2</code>, <code>3</code>.'),
    starter: 'const lis = ["diri", "pwa", "mayi", "bannann"];\n\n',
    solution: 'const lis = ["diri", "pwa", "mayi", "bannann"];\n\nconsole.log(lis.includes("pwa"));\nconsole.log(lis.indexOf("mayi"));\nlis.pop();\nconsole.log(lis.length);\n',
    check: need(
      R(/\.includes\(/, 'Itilize <code>includes</code>.', 'Utilise <code>includes</code>.'),
      R(/\.indexOf\(/, 'Itilize <code>indexOf</code>.', 'Utilise <code>indexOf</code>.'),
      R(/\.pop\(\)/, 'Itilize <code>pop()</code>.', 'Utilise <code>pop()</code>.'),
      R(logsAre(['true', '2', '3']), 'Konsòl la dwe montre: <code>true</code>, <code>2</code>, <code>3</code>.', 'La console doit afficher : <code>true</code>, <code>2</code>, <code>3</code>.')
    ),
    tips: T(
      `<li>Endèks yo kòmanse a <b>0</b>: "mayi" se 3yèm eleman an, men endèks li se 2.</li><li><code>pop</code> ak <code>shift</code> <b>chanje</b> tablo a; <code>slice</code> pa chanje l.</li>`,
      `<li>Les indices commencent à <b>0</b> : "mayi" est le 3e élément, mais son indice est 2.</li><li><code>pop</code> et <code>shift</code> <b>modifient</b> le tableau ; <code>slice</code> non.</li>`
    ),
    recap: T(
      `<li><code>push/pop</code> = fen, <code>unshift/shift</code> = kòmansman.</li><li><code>includes</code>, <code>indexOf</code>, <code>slice</code>, <code>join</code>.</li>`,
      `<li><code>push/pop</code> = fin, <code>unshift/shift</code> = début.</li><li><code>includes</code>, <code>indexOf</code>, <code>slice</code>, <code>join</code>.</li>`
    )
  },
{
      id: 'js-11',
      title: T('Pakouri yon tablo', 'Parcourir un tableau'),
      theory: T(
        `<p>Pou fè menm bagay ak <b>chak</b> eleman nan yon tablo, itilize <code>for…of</code>:</p>
         <pre>const pri = [100, 250, 75];
let total = 0;

for (const p of pri) {
  total = total + p;
}

console.log(total); // 425</pre>
         <p>Chak tou, <code>p</code> pran pwochen valè nan tablo a. Varyab <code>total</code> la se yon <b>akimilatè</b>.</p>`,
        `<p>Pour faire la même chose avec <b>chaque</b> élément d'un tableau, utilise <code>for…of</code> :</p>
         <pre>const prix = [100, 250, 75];
let total = 0;

for (const p of prix) {
  total = total + p;
}

console.log(total); // 425</pre>
         <p>À chaque tour, <code>p</code> prend la valeur suivante du tableau. La variable <code>total</code> est un <b>accumulateur</b>.</p>`
      ),
      task: T('Kalkile <b>sòm</b> tout nòt yo ak yon bouk, epi afiche l.', 'Calcule la <b>somme</b> de toutes les notes avec une boucle, puis affiche-la.'),
      hint: T('Kòmanse ak <code>let som = 0;</code> epi nan bouk la: <code>som = som + n;</code>', 'Commence par <code>let som = 0;</code> puis dans la boucle : <code>som = som + n;</code>'),
      starter: 'const notes = [80, 45, 90, 60];\n\n',
      solution: 'const notes = [80, 45, 90, 60];\n\nlet som = 0;\nfor (const n of notes) {\n  som = som + n;\n}\nconsole.log(som);\n',
      check: async ({ logs, code, rerun }) => {
        if (!/\bfor\s*\(|\.forEach\s*\(|\.reduce\s*\(/.test(code)) return T('Itilize yon bouk (<code>for…of</code>).', 'Utilise une boucle (<code>for…of</code>).');
        if (!logs.some(l => l.trim() === '275')) return T('Sòm nan dwe <code>275</code>.', 'La somme doit être <code>275</code>.');
        const r = await rerun(code.replace(/\[\s*80\s*,\s*45\s*,\s*90\s*,\s*60\s*\]/, '[1, 2, 3]'));
        if (!r.logs.some(l => l.trim() === '6')) return T('Kalkil la dwe mache pou <b>nenpòt</b> tablo — pa ekri 275 dirèkteman!', 'Le calcul doit marcher pour <b>n\'importe quel</b> tableau — n\'écris pas 275 directement !');
        return true;
      }
    },
  {
    id: 'js-map',
    title: T('Transfòme yon tablo: map', 'Transformer un tableau : map'),
    theory: T(
      `<p><code>map</code> kreye yon <b>nouvo</b> tablo kote chak eleman <b>transfòme</b> pa yon fonksyon:</p>
       <pre>const nonm = [1, 2, 3];
const doub = nonm.map(n =&gt; n * 2);
console.log(doub);   // [2, 4, 6]

const non = ["ana", "jak"];
const gwo = non.map(s =&gt; s.toUpperCase());
// ["ANA", "JAK"]</pre>
       <p>Tablo orijinal la <b>pa chanje</b>. Nouvo tablo a toujou gen <b>menm longè</b>.</p>`,
      `<p><code>map</code> crée un <b>nouveau</b> tableau où chaque élément est <b>transformé</b> par une fonction :</p>
       <pre>const nombres = [1, 2, 3];
const doubles = nombres.map(n =&gt; n * 2);
console.log(doubles);   // [2, 4, 6]

const noms = ["ana", "jacques"];
const grands = noms.map(s =&gt; s.toUpperCase());
// ["ANA", "JACQUES"]</pre>
       <p>Le tableau original <b>ne change pas</b>. Le nouveau a toujours la <b>même longueur</b>.</p>`
    ),
    task: T(
      'Konvèti pri yo soti an <b>goud</b> an <b>dola</b> (1 dola = 130 goud) ak <code>map</code>, epi afiche nouvo tablo a.',
      'Convertis les prix de <b>gourdes</b> en <b>dollars</b> (1 dollar = 130 gourdes) avec <code>map</code>, puis affiche le nouveau tableau.'
    ),
    hint: T('<code>const dola = goud.map(p =&gt; p / 130);</code>', '<code>const dola = goud.map(p =&gt; p / 130);</code>'),
    starter: 'const goud = [130, 260, 650];\n\n',
    solution: 'const goud = [130, 260, 650];\n\nconst dola = goud.map(p => p / 130);\nconsole.log(dola);\n',
    check: need(
      R(/\.map\(/, 'Itilize <code>.map(…)</code>.', 'Utilise <code>.map(…)</code>.'),
      R(logHas('[1,2,5]'), 'Konsòl la dwe montre <code>[1,2,5]</code>.', 'La console doit afficher <code>[1,2,5]</code>.')
    ),
    tips: T(
      `<li>Fonksyon ou bay <code>map</code> la dwe <b>retounen</b> nouvo valè a. Ak <code>{ }</code>, pa bliye <code>return</code>.</li><li>Sere rezilta <code>map</code> nan yon varyab — li pa modifye orijinal la.</li>`,
      `<li>La fonction donnée à <code>map</code> doit <b>renvoyer</b> la nouvelle valeur. Avec <code>{ }</code>, n'oublie pas <code>return</code>.</li><li>Range le résultat de <code>map</code> dans une variable — l'original n'est pas modifié.</li>`
    ),
    recap: T(`<li><code>tablo.map(x =&gt; …)</code> = nouvo tablo transfòme.</li>`, `<li><code>tableau.map(x =&gt; …)</code> = nouveau tableau transformé.</li>`)
  },
  {
    id: 'js-filter',
    title: T('Filtre yon tablo: filter', 'Filtrer un tableau : filter'),
    theory: T(
      `<p><code>filter</code> kenbe <b>sèlman</b> eleman ki fè fonksyon an retounen <code>true</code>:</p>
       <pre>const laj = [12, 25, 8, 40, 17];
const granmoun = laj.filter(a =&gt; a &gt;= 18);
console.log(granmoun);   // [25, 40]</pre>
       <p>Ou ka <b>chèn</b> metòd yo:</p>
       <pre>const rezilta = laj
  .filter(a =&gt; a &gt;= 18)
  .map(a =&gt; a + 1);    // [26, 41]</pre>`,
      `<p><code>filter</code> garde <b>seulement</b> les éléments pour lesquels la fonction renvoie <code>true</code> :</p>
       <pre>const ages = [12, 25, 8, 40, 17];
const adultes = ages.filter(a =&gt; a &gt;= 18);
console.log(adultes);   // [25, 40]</pre>
       <p>On peut <b>enchaîner</b> les méthodes :</p>
       <pre>const resultat = ages
  .filter(a =&gt; a &gt;= 18)
  .map(a =&gt; a + 1);    // [26, 41]</pre>`
    ),
    task: T('Ak <code>filter</code>, kenbe sèlman nòt ki <b>&gt;= 50</b> yo, epi afiche nouvo tablo a.', 'Avec <code>filter</code>, garde seulement les notes <b>&gt;= 50</b>, puis affiche le nouveau tableau.'),
    hint: T('<code>const pase = notes.filter(n =&gt; n &gt;= 50);</code>', '<code>const pase = notes.filter(n =&gt; n &gt;= 50);</code>'),
    starter: 'const notes = [80, 45, 90, 30, 60];\n\n',
    solution: 'const notes = [80, 45, 90, 30, 60];\n\nconst pase = notes.filter(n => n >= 50);\nconsole.log(pase);\n',
    check: need(
      R(/\.filter\(/, 'Itilize <code>.filter(…)</code>.', 'Utilise <code>.filter(…)</code>.'),
      R(logHas('[80,90,60]'), 'Konsòl la dwe montre <code>[80,90,60]</code>.', 'La console doit afficher <code>[80,90,60]</code>.')
    ),
    tips: T(`<li>Fonksyon <code>filter</code> la dwe bay yon <b>boolean</b>, pa yon nouvo valè.</li>`, `<li>La fonction de <code>filter</code> doit renvoyer un <b>booléen</b>, pas une nouvelle valeur.</li>`),
    recap: T(`<li><code>filter</code> = triye. <code>map</code> = transfòme.</li>`, `<li><code>filter</code> = trier. <code>map</code> = transformer.</li>`)
  },

  /* ---------- Semèn 10: Objè ---------- */
  {
    id: 'js-sort',
    title: T('Chèche ak klase: find, sort', 'Chercher et trier : find, sort'),
    theory: T(
      `<pre>const pri = [250, 75, 1000, 40];

pri.find(p =&gt; p &gt; 100)       // 250 — PREMYE ki koresponn
pri.some(p =&gt; p &gt; 500)       // true — omwen youn?
pri.every(p =&gt; p &gt; 10)       // true — tout?

pri.sort((a, b) =&gt; a - b);   // [40, 75, 250, 1000] — ogmante
pri.sort((a, b) =&gt; b - a);   // [1000, 250, 75, 40] — desann</pre>
       <p>⚠️ San fonksyon an, <code>sort()</code> klase tankou <b>tèks</b>: <code>[10, 9, 100].sort()</code> → <code>[10, 100, 9]</code> 😬. Pou nonm, toujou mete <code>(a, b) =&gt; a - b</code>.</p>`,
      `<pre>const prix = [250, 75, 1000, 40];

prix.find(p =&gt; p &gt; 100)       // 250 — le PREMIER qui correspond
prix.some(p =&gt; p &gt; 500)       // true — au moins un ?
prix.every(p =&gt; p &gt; 10)       // true — tous ?

prix.sort((a, b) =&gt; a - b);   // [40, 75, 250, 1000] — croissant
prix.sort((a, b) =&gt; b - a);   // [1000, 250, 75, 40] — décroissant</pre>
       <p>⚠️ Sans fonction, <code>sort()</code> trie comme du <b>texte</b> : <code>[10, 9, 100].sort()</code> → <code>[10, 100, 9]</code> 😬. Pour des nombres, mets toujours <code>(a, b) =&gt; a - b</code>.</p>`
    ),
    task: T(
      'Afiche <b>1)</b> premye nonm ki pi gran pase 100 ak <code>find</code>, epi <b>2)</b> tablo a klase an lòd <b>ogmante</b> ak <code>sort</code>.',
      'Affiche <b>1)</b> le premier nombre supérieur à 100 avec <code>find</code>, puis <b>2)</b> le tableau trié par ordre <b>croissant</b> avec <code>sort</code>.'
    ),
    hint: T('<code>console.log(nonm.find(n =&gt; n &gt; 100));</code> epi <code>nonm.sort((a, b) =&gt; a - b);</code>', '<code>console.log(nonm.find(n =&gt; n &gt; 100));</code> puis <code>nonm.sort((a, b) =&gt; a - b);</code>'),
    starter: 'const nonm = [45, 300, 9, 150, 72];\n\n',
    solution: 'const nonm = [45, 300, 9, 150, 72];\n\nconsole.log(nonm.find(n => n > 100));\nnonm.sort((a, b) => a - b);\nconsole.log(nonm);\n',
    check: need(
      R(/\.find\(/, 'Itilize <code>.find(…)</code>.', 'Utilise <code>.find(…)</code>.'),
      R(/\.sort\(\s*\(?\s*\w+\s*,\s*\w+\s*\)?\s*=>/, 'Bay <code>sort</code> yon fonksyon: <code>(a, b) =&gt; a - b</code>.', 'Donne une fonction à <code>sort</code> : <code>(a, b) =&gt; a - b</code>.'),
      R(logsAre(['300', '[9,45,72,150,300]']), 'Konsòl la dwe montre <code>300</code> epi <code>[9,45,72,150,300]</code>.', 'La console doit afficher <code>300</code> puis <code>[9,45,72,150,300]</code>.')
    ),
    tips: T(`<li><code>find</code> bay <code>undefined</code> si li pa jwenn anyen.</li><li><code>sort</code> <b>modifye</b> tablo orijinal la.</li>`, `<li><code>find</code> renvoie <code>undefined</code> s'il ne trouve rien.</li><li><code>sort</code> <b>modifie</b> le tableau original.</li>`),
    recap: T(`<li><code>find</code>, <code>some</code>, <code>every</code>, <code>sort((a,b)=&gt;a-b)</code>.</li>`, `<li><code>find</code>, <code>some</code>, <code>every</code>, <code>sort((a,b)=&gt;a-b)</code>.</li>`)
  },
{
      id: 'js-10',
      title: T('Objè', 'Les objets'),
      theory: T(
        `<p>Yon <b>objè</b> regwoupe enfòmasyon sou yon bagay, ak pè <b>kle: valè</b> ant <code>{ }</code>:</p>
         <pre>const machin = {
  mak: "Toyota",
  ane: 2020,
  koulè: "blan"
};

console.log(machin.mak);   // "Toyota"
machin.ane = 2021;          // chanje yon valè</pre>
         <p>Nou rive sou yon valè ak yon <b>pwen</b>: <code>objè.kle</code>.</p>`,
        `<p>Un <b>objet</b> regroupe des informations sur une chose, sous forme de paires <b>clé: valeur</b> entre <code>{ }</code> :</p>
         <pre>const voiture = {
  marque: "Toyota",
  annee: 2020,
  couleur: "blanc"
};

console.log(voiture.marque);  // "Toyota"
voiture.annee = 2021;          // modifier une valeur</pre>
         <p>On accède à une valeur avec un <b>point</b> : <code>objet.cle</code>.</p>`
      ),
      task: T('Kreye yon objè <code>elev</code> ak <code>non</code> ak <code>laj</code>, epi afiche <code>elev.non + " gen " + elev.laj + " an"</code>.', 'Crée un objet <code>elev</code> avec <code>non</code> et <code>laj</code>, puis affiche <code>elev.non + " a " + elev.laj + " ans"</code>.'),
      hint: T('<code>const elev = { non: "Ana", laj: 14 };</code>', '<code>const elev = { non: "Ana", laj: 14 };</code>'),
      starter: '',
      solution: 'const elev = {\n  non: "Ana",\n  laj: 14\n};\n\nconsole.log(elev.non + " gen " + elev.laj + " an");\n',
      check: ({ logs, code }) => {
        if (!/\b(const|let)\s+elev\s*=\s*\{/.test(code)) return T('Kreye objè a: <code>const elev = { … };</code>', 'Crée l\'objet : <code>const elev = { … };</code>');
        if (!/\bnon\s*:/.test(code) || !/\blaj\s*:/.test(code)) return T('Objè a bezwen kle <code>non:</code> ak <code>laj:</code>.', 'L\'objet a besoin des clés <code>non:</code> et <code>laj:</code>.');
        if (!/elev\.non/.test(code) || !/elev\.laj/.test(code)) return T('Itilize <code>elev.non</code> ak <code>elev.laj</code> nan mesaj la.', 'Utilise <code>elev.non</code> et <code>elev.laj</code> dans le message.');
        if (!logs.some(l => /\d/.test(l) && !/undefined/.test(l))) return T('Afiche mesaj la ak <code>console.log</code> (san <code>undefined</code>).', 'Affiche le message avec <code>console.log</code> (sans <code>undefined</code>).');
        return true;
      }
    },
  {
    id: 'js-objmethods',
    title: T('Metòd ak this', 'Méthodes et this'),
    theory: T(
      `<p>Yon objè ka gen <b>fonksyon</b> ladan l — yo rele yo <b>metòd</b>. Anndan yon metòd, <code>this</code> vle di "objè sa a menm":</p>
       <pre>const machin = {
  mak: "Toyota",
  vitès: 0,
  akselere(kantite) {
    this.vitès += kantite;
  },
  dekri() {
    return \`\${this.mak} ap kouri \${this.vitès} km/h\`;
  }
};

machin.akselere(50);
console.log(machin.dekri());  // Toyota ap kouri 50 km/h</pre>`,
      `<p>Un objet peut contenir des <b>fonctions</b> — on les appelle des <b>méthodes</b>. Dans une méthode, <code>this</code> veut dire « cet objet-ci » :</p>
       <pre>const voiture = {
  marque: "Toyota",
  vitesse: 0,
  accelerer(quantite) {
    this.vitesse += quantite;
  },
  decrire() {
    return \`\${this.marque} roule à \${this.vitesse} km/h\`;
  }
};

voiture.accelerer(50);
console.log(voiture.decrire());  // Toyota roule à 50 km/h</pre>`
    ),
    task: T(
      'Konplete metòd <code>depoze(montan)</code> ki ajoute <code>montan</code> nan <code>this.solde</code>. Answit depoze <b>500</b> epi <b>250</b>, epi afiche <code>kont.solde</code> (750).',
      'Complète la méthode <code>depoze(montan)</code> qui ajoute <code>montan</code> à <code>this.solde</code>. Ensuite dépose <b>500</b> puis <b>250</b>, et affiche <code>kont.solde</code> (750).'
    ),
    hint: T('Anndan metòd la: <code>this.solde += montan;</code>. Apre: <code>kont.depoze(500);</code>', 'Dans la méthode : <code>this.solde += montan;</code>. Ensuite : <code>kont.depoze(500);</code>'),
    starter: 'const kont = {\n  pwopriyete: "Ana",\n  solde: 0,\n  depoze(montan) {\n    // ✍️\n  }\n};\n\n',
    solution: 'const kont = {\n  pwopriyete: "Ana",\n  solde: 0,\n  depoze(montan) {\n    this.solde += montan;\n  }\n};\n\nkont.depoze(500);\nkont.depoze(250);\nconsole.log(kont.solde);\n',
    check: need(
      R(/this\.solde/, 'Itilize <code>this.solde</code> anndan metòd la.', 'Utilise <code>this.solde</code> dans la méthode.'),
      R(/kont\.depoze\(/, 'Rele metòd la: <code>kont.depoze(500);</code>', 'Appelle la méthode : <code>kont.depoze(500);</code>'),
      R(logHas('750'), 'Konsòl la dwe montre <code>750</code>.', 'La console doit afficher <code>750</code>.')
    ),
    tips: T(`<li>San <code>this.</code>, <code>solde</code> se yon varyab ki pa egziste.</li><li><code>this</code> pa mache jan w panse nan fonksyon flèch — itilize metòd nòmal nan objè.</li>`, `<li>Sans <code>this.</code>, <code>solde</code> est une variable qui n'existe pas.</li><li><code>this</code> ne fonctionne pas pareil dans une fonction fléchée — utilise des méthodes normales dans les objets.</li>`),
    recap: T(`<li>Metòd = fonksyon nan yon objè.</li><li><code>this</code> = objè a menm.</li>`, `<li>Méthode = fonction dans un objet.</li><li><code>this</code> = l'objet lui-même.</li>`)
  },
  {
    id: 'js-arrobj',
    title: T('Tablo objè', 'Tableaux d\'objets'),
    theory: T(
      `<p>Nan vrè aplikasyon, done yo souvan se yon <b>tablo objè</b> (lis itilizatè, pwodwi, elèv…):</p>
       <pre>const pwodwi = [
  { non: "Diri", pri: 250 },
  { non: "Lwil", pri: 600 },
  { non: "Sik",  pri: 150 }
];

const chè = pwodwi.filter(p =&gt; p.pri &gt; 200);
const non = chè.map(p =&gt; p.non);
console.log(non);   // ["Diri", "Lwil"]</pre>
       <p>Se fason sa a done soti nan yon <b>API</b> oswa yon <b>baz done</b> — n ap wè sa ak JSON.</p>`,
      `<p>Dans les vraies applications, les données sont souvent un <b>tableau d'objets</b> (utilisateurs, produits, élèves…) :</p>
       <pre>const produits = [
  { nom: "Riz",   prix: 250 },
  { nom: "Huile", prix: 600 },
  { nom: "Sucre", prix: 150 }
];

const chers = produits.filter(p =&gt; p.prix &gt; 200);
const noms = chers.map(p =&gt; p.nom);
console.log(noms);   // ["Riz", "Huile"]</pre>
       <p>C'est ainsi que les données arrivent d'une <b>API</b> ou d'une <b>base de données</b> — on le verra avec JSON.</p>`
    ),
    task: T(
      'Jwenn <b>non</b> elèv ki gen nòt <b>&gt;= 50</b> yo (ak <code>filter</code> epi <code>map</code>) epi afiche tablo non yo.',
      'Trouve les <b>noms</b> des élèves qui ont une note <b>&gt;= 50</b> (avec <code>filter</code> puis <code>map</code>) et affiche le tableau des noms.'
    ),
    hint: T('<code>elev.filter(e =&gt; e.not &gt;= 50).map(e =&gt; e.non)</code>', '<code>elev.filter(e =&gt; e.not &gt;= 50).map(e =&gt; e.non)</code>'),
    starter: 'const elev = [\n  { non: "Ana", not: 80 },\n  { non: "Jak", not: 40 },\n  { non: "Lise", not: 95 },\n  { non: "Paul", not: 49 }\n];\n\n',
    solution: 'const elev = [\n  { non: "Ana", not: 80 },\n  { non: "Jak", not: 40 },\n  { non: "Lise", not: 95 },\n  { non: "Paul", not: 49 }\n];\n\nconst pase = elev.filter(e => e.not >= 50).map(e => e.non);\nconsole.log(pase);\n',
    check: need(
      R(/\.filter\(/, 'Itilize <code>filter</code>.', 'Utilise <code>filter</code>.'),
      R(/\.map\(/, 'Itilize <code>map</code> pou jwenn non yo.', 'Utilise <code>map</code> pour obtenir les noms.'),
      R(logHas('["Ana","Lise"]'), 'Konsòl la dwe montre <code>["Ana","Lise"]</code>.', 'La console doit afficher <code>["Ana","Lise"]</code>.')
    ),
    tips: T(`<li>Nan fonksyon an, <code>e</code> se <b>yon</b> objè: itilize <code>e.not</code>, pa <code>elev.not</code>.</li>`, `<li>Dans la fonction, <code>e</code> est <b>un</b> objet : utilise <code>e.not</code>, pas <code>elev.not</code>.</li>`),
    recap: T(`<li>Tablo objè = fòm done ki pi komen.</li><li><code>filter</code> + <code>map</code> ansanm = pwisan.</li>`, `<li>Tableau d'objets = forme de données la plus courante.</li><li><code>filter</code> + <code>map</code> ensemble = puissant.</li>`)
  },
  {
    id: 'js-spread',
    title: T('Destriktirasyon ak spread (...)', 'Déstructuration et spread (...)'),
    theory: T(
      `<p><b>Destriktirasyon</b> — rale valè yo soti nan yon objè oswa tablo:</p>
       <pre>const moun = { non: "Ana", laj: 15, vil: "Okap" };
const { non, vil } = moun;
console.log(non);  // "Ana"

const [premye, dezyèm] = ["wouj", "ble", "vèt"];
console.log(dezyèm);  // "ble"</pre>
       <p><b>Spread</b> (<code>...</code>) — "louvri" yon tablo oswa objè:</p>
       <pre>const a = [1, 2];
const b = [3, 4];
const tout = [...a, ...b];          // [1, 2, 3, 4]

const kopi = { ...moun, laj: 16 };  // kopi ak yon chanjman</pre>`,
      `<p>La <b>déstructuration</b> — extraire des valeurs d'un objet ou d'un tableau :</p>
       <pre>const personne = { nom: "Ana", age: 15, ville: "Cap" };
const { nom, ville } = personne;
console.log(nom);  // "Ana"

const [premier, second] = ["rouge", "bleu", "vert"];
console.log(second);  // "bleu"</pre>
       <p>Le <b>spread</b> (<code>...</code>) — « déplie » un tableau ou un objet :</p>
       <pre>const a = [1, 2];
const b = [3, 4];
const tout = [...a, ...b];             // [1, 2, 3, 4]

const copie = { ...personne, age: 16 }; // copie avec une modification</pre>`
    ),
    task: T(
      '<b>1)</b> Ak destriktirasyon, rale <code>non</code> ak <code>laj</code> soti nan <code>moun</code> epi afiche <code>non</code>. <b>2)</b> Ak spread, mete <code>a</code> ak <code>b</code> ansanm nan <code>tout</code> epi afiche l.',
      '<b>1)</b> Par déstructuration, extrais <code>non</code> et <code>laj</code> de <code>moun</code> et affiche <code>non</code>. <b>2)</b> Avec le spread, fusionne <code>a</code> et <code>b</code> dans <code>tout</code> et affiche-le.'
    ),
    hint: T('<code>const { non, laj } = moun;</code> epi <code>const tout = [...a, ...b];</code>', '<code>const { non, laj } = moun;</code> puis <code>const tout = [...a, ...b];</code>'),
    starter: 'const moun = { non: "Ana", laj: 15 };\nconst a = [1, 2];\nconst b = [3, 4];\n\n',
    solution: 'const moun = { non: "Ana", laj: 15 };\nconst a = [1, 2];\nconst b = [3, 4];\n\nconst { non, laj } = moun;\nconsole.log(non);\n\nconst tout = [...a, ...b];\nconsole.log(tout);\n',
    check: need(
      R(/(const|let)\s*\{\s*[\w\s,]*\bnon\b[\w\s,]*\}\s*=\s*moun/, 'Itilize destriktirasyon: <code>const { non, laj } = moun;</code>', 'Utilise la déstructuration : <code>const { non, laj } = moun;</code>'),
      R(/\.\.\.a\b/, 'Itilize spread: <code>[...a, ...b]</code>', 'Utilise le spread : <code>[...a, ...b]</code>'),
      R(logsAre(['Ana', '[1,2,3,4]']), 'Konsòl la dwe montre <code>Ana</code> epi <code>[1,2,3,4]</code>.', 'La console doit afficher <code>Ana</code> puis <code>[1,2,3,4]</code>.')
    ),
    tips: T(`<li>Non yo dwe <b>egzak</b> menm ak kle objè a: <code>{ non }</code>, pa <code>{ nom }</code>.</li><li>Spread fè yon kopi <b>sifas</b>: objè anndan yo toujou pataje.</li>`, `<li>Les noms doivent être <b>exactement</b> ceux des clés : <code>{ non }</code>, pas <code>{ nom }</code>.</li><li>Le spread fait une copie <b>superficielle</b> : les objets imbriqués restent partagés.</li>`),
    recap: T(`<li><code>const { a, b } = obj;</code></li><li><code>[...t1, ...t2]</code>, <code>{ ...obj }</code></li>`, `<li><code>const { a, b } = obj;</code></li><li><code>[...t1, ...t2]</code>, <code>{ ...obj }</code></li>`)
  },

  /* ---------- Semèn 11: DOM ---------- */
{
      id: 'js-7',
      title: T('Chanje paj la (DOM)', 'Modifier la page (DOM)'),
      html: '<p id="mesaj">Tèks orijinal…</p>',
      theory: T(
        `<p><b>DOM</b> la se fason JavaScript wè paj HTML la. Nou ka <b>jwenn</b> yon eleman epi <b>chanje</b> l:</p>
         <pre>const tit = document.getElementById("tit");
tit.textContent = "Nouvo tit!";
tit.style.color = "purple";</pre>
         <p><code>getElementById</code> chèche eleman ki gen <code>id</code> sa a nan HTML la.</p>`,
        `<p>Le <b>DOM</b> est la façon dont JavaScript voit la page HTML. On peut <b>trouver</b> un élément puis le <b>modifier</b> :</p>
         <pre>const titre = document.getElementById("titre");
titre.textContent = "Nouveau titre !";
titre.style.color = "purple";</pre>
         <p><code>getElementById</code> cherche l'élément qui a cet <code>id</code> dans le HTML.</p>`
      ),
      task: T('Paj la gen <code>&lt;p id="mesaj"&gt;</code>. Chanje tèks li an <b>"Mwen aprann JavaScript!"</b>', 'La page contient <code>&lt;p id="mesaj"&gt;</code>. Change son texte en <b>"J\'apprends JavaScript !"</b>'),
      hint: T('<code>document.getElementById("mesaj").textContent = "…";</code>', '<code>document.getElementById("mesaj").textContent = "…";</code>'),
      starter: '',
      solution: 'const mesaj = document.getElementById("mesaj");\nmesaj.textContent = "Mwen aprann JavaScript!";\n',
      check: ({ doc }) => {
        const t = txt(doc.getElementById('mesaj'));
        if (!t || t === 'Tèks orijinal…') return T('Tèks paragraf la poko chanje.', 'Le texte du paragraphe n\'a pas encore changé.');
        if (!/javascript/i.test(t)) return T('Nouvo tèks la dwe gen mo <b>JavaScript</b>.', 'Le nouveau texte doit contenir le mot <b>JavaScript</b>.');
        return true;
      }
    },
  {
    id: 'js-style',
    title: T('Chanje style ak klas', 'Modifier styles et classes'),
    html: '<h2 id="tit">Bonjou Ayiti!</h2>\n<p>Klike, chanje, jwe 🎨</p>',
    baseCss: '.gwo{font-size:40px}.aktif{background:#fff3c4}',
    theory: T(
      `<p>JavaScript ka chanje <b>aparans</b> yon eleman 2 fason:</p>
       <pre>const tit = document.getElementById("tit");

// 1. Dirèkteman ak .style (non CSS an camelCase)
tit.style.color = "red";
tit.style.backgroundColor = "yellow";

// 2. Ak klas CSS (pi pwòp!)
tit.classList.add("gwo");
tit.classList.remove("gwo");
tit.classList.toggle("aktif");    // ajoute oswa retire
tit.classList.contains("aktif");  // true / false</pre>
       <p>Pwofesyonèl yo prefere <code>classList</code>: style la rete nan CSS, JS jis chanje klas yo.</p>`,
      `<p>JavaScript peut changer l'<b>apparence</b> d'un élément de 2 façons :</p>
       <pre>const titre = document.getElementById("tit");

// 1. Directement avec .style (nom CSS en camelCase)
titre.style.color = "red";
titre.style.backgroundColor = "yellow";

// 2. Avec des classes CSS (plus propre !)
titre.classList.add("gwo");
titre.classList.remove("gwo");
titre.classList.toggle("aktif");    // ajoute ou retire
titre.classList.contains("aktif");  // true / false</pre>
       <p>Les pros préfèrent <code>classList</code> : le style reste dans le CSS, le JS change juste les classes.</p>`
    ),
    task: T('Fè tit <code>#tit</code> la vin <b>wouj</b> ak <code>style.color</code>, epi ajoute klas <code>"gwo"</code> ak <code>classList.add</code>.', 'Rends le titre <code>#tit</code> <b>rouge</b> avec <code>style.color</code>, puis ajoute la classe <code>"gwo"</code> avec <code>classList.add</code>.'),
    hint: T('<code>tit.style.color = "red";</code> epi <code>tit.classList.add("gwo");</code>', '<code>tit.style.color = "red";</code> puis <code>tit.classList.add("gwo");</code>'),
    starter: 'const tit = document.getElementById("tit");\n\n',
    solution: 'const tit = document.getElementById("tit");\n\ntit.style.color = "red";\ntit.classList.add("gwo");\n',
    check: need(
      R(c => c.doc.getElementById('tit').style.color === 'red', 'Koulè tit la dwe <code>"red"</code>.', 'La couleur du titre doit être <code>"red"</code>.'),
      R(/classList\.add\(/, 'Itilize <code>classList.add(…)</code>.', 'Utilise <code>classList.add(…)</code>.'),
      R(c => c.doc.getElementById('tit').classList.contains('gwo'), 'Tit la dwe gen klas <code>gwo</code>.', 'Le titre doit avoir la classe <code>gwo</code>.')
    ),
    tips: T(`<li>Nan <code>classList.add("gwo")</code>, pa mete pwen: se <code>"gwo"</code>, pa <code>".gwo"</code>.</li><li><code>background-color</code> nan CSS vin <code>backgroundColor</code> nan JS.</li>`, `<li>Dans <code>classList.add("gwo")</code>, pas de point : c'est <code>"gwo"</code>, pas <code>".gwo"</code>.</li><li><code>background-color</code> en CSS devient <code>backgroundColor</code> en JS.</li>`),
    recap: T(`<li><code>el.style.x = …</code></li><li><code>classList.add/remove/toggle</code></li>`, `<li><code>el.style.x = …</code></li><li><code>classList.add/remove/toggle</code></li>`)
  },
{
      id: 'js-8',
      title: T('Evènman: klik!', 'Événements : clic !'),
      html: '<button id="bouton">Klike m! 👆</button>\n<p>Konte: <span id="konte">0</span></p>',
      theory: T(
        `<p>Yon <b>evènman</b> se yon bagay ki rive: yon klik, yon touch klavye… Nou ka <b>koute</b> l ak <code>addEventListener</code>:</p>
         <pre>let n = 0;
const btn = document.getElementById("bouton");

btn.addEventListener("click", function () {
  n = n + 1;
  console.log("Klik #" + n);
});</pre>
         <p>Fonksyon an egzekite <b>chak fwa</b> moun nan klike.</p>`,
        `<p>Un <b>événement</b> est quelque chose qui arrive : un clic, une touche du clavier… On peut l'<b>écouter</b> avec <code>addEventListener</code> :</p>
         <pre>let n = 0;
const btn = document.getElementById("bouton");

btn.addEventListener("click", function () {
  n = n + 1;
  console.log("Clic #" + n);
});</pre>
         <p>La fonction s'exécute <b>à chaque</b> clic.</p>`
      ),
      task: T('Chak fwa yo klike <code>#bouton</code>, ogmante konte a epi montre l nan <code>&lt;span id="konte"&gt;</code>.', 'À chaque clic sur <code>#bouton</code>, augmente le compteur et affiche-le dans <code>&lt;span id="konte"&gt;</code>.'),
      hint: T('Anndan fonksyon klik la: <code>n = n + 1;</code> epi <code>document.getElementById("konte").textContent = n;</code>', 'Dans la fonction du clic : <code>n = n + 1;</code> puis <code>document.getElementById("konte").textContent = n;</code>'),
      starter: 'let n = 0;\n\n',
      solution: 'let n = 0;\nconst btn = document.getElementById("bouton");\nconst konte = document.getElementById("konte");\n\nbtn.addEventListener("click", function () {\n  n = n + 1;\n  konte.textContent = n;\n});\n',
      check: async ({ doc, rerun, code }) => {
        // Teste sou yon kopi pou pa deranje rezilta itilizatè a
        const r = await rerun(code);
        const b = r.doc.getElementById('bouton');
        b.click(); b.click();
        const v = txt(r.doc.getElementById('konte'));
        if (v !== '2') return T(`Mwen klike 2 fwa epi konte a montre <code>${v}</code>. Li ta dwe montre 2.`, `J'ai cliqué 2 fois et le compteur affiche <code>${v}</code>. Il devrait afficher 2.`);
        return true;
      }
    },
  {
    id: 'js-create',
    title: T('Kreye eleman', 'Créer des éléments'),
    html: '<h3>Fwi mwen renmen</h3>\n<ul id="lis"></ul>',
    theory: T(
      `<p>JavaScript ka <b>kreye</b> nouvo eleman HTML epi mete yo nan paj la:</p>
       <pre>const lis = document.getElementById("lis");

const li = document.createElement("li");  // 1. kreye
li.textContent = "Mango";                  // 2. ranpli
lis.appendChild(li);                       // 3. mete nan paj la</pre>
       <p>Konbine sa ak yon bouk pou afiche tout yon tablo:</p>
       <pre>for (const f of fwi) {
  const li = document.createElement("li");
  li.textContent = f;
  lis.appendChild(li);
}</pre>
       <p>Pou retire yon eleman: <code>el.remove()</code>.</p>`,
      `<p>JavaScript peut <b>créer</b> de nouveaux éléments HTML et les ajouter à la page :</p>
       <pre>const liste = document.getElementById("lis");

const li = document.createElement("li");  // 1. créer
li.textContent = "Mangue";                 // 2. remplir
liste.appendChild(li);                     // 3. ajouter à la page</pre>
       <p>Combine ça avec une boucle pour afficher tout un tableau :</p>
       <pre>for (const f of fruits) {
  const li = document.createElement("li");
  li.textContent = f;
  liste.appendChild(li);
}</pre>
       <p>Pour supprimer un élément : <code>el.remove()</code>.</p>`
    ),
    task: T('Pou chak fwi nan tablo <code>fwi</code>, kreye yon <code>&lt;li&gt;</code> epi ajoute l nan <code>#lis</code>.', 'Pour chaque fruit du tableau <code>fwi</code>, crée un <code>&lt;li&gt;</code> et ajoute-le dans <code>#lis</code>.'),
    hint: T('Itilize <code>for (const f of fwi)</code> ak <code>createElement</code> + <code>appendChild</code>.', 'Utilise <code>for (const f of fwi)</code> avec <code>createElement</code> + <code>appendChild</code>.'),
    starter: 'const fwi = ["Mango", "Kenèp", "Kowosòl"];\nconst lis = document.getElementById("lis");\n\n',
    solution: 'const fwi = ["Mango", "Kenèp", "Kowosòl"];\nconst lis = document.getElementById("lis");\n\nfor (const f of fwi) {\n  const li = document.createElement("li");\n  li.textContent = f;\n  lis.appendChild(li);\n}\n',
    check: need(
      R(/createElement\(/, 'Itilize <code>document.createElement("li")</code>.', 'Utilise <code>document.createElement("li")</code>.'),
      R(c => c.doc.querySelectorAll('#lis > li').length === 3, 'Lis la dwe gen egzakteman 3 <code>li</code>.', 'La liste doit contenir exactement 3 <code>li</code>.'),
      R(c => [...c.doc.querySelectorAll('#lis > li')].map(txt).join('|') === 'Mango|Kenèp|Kowosòl', 'Tèks <code>li</code> yo dwe non fwi yo, nan lòd la.', 'Le texte des <code>li</code> doit être les noms des fruits, dans l\'ordre.')
    ),
    tips: T(`<li>Kreye yon <b>nouvo</b> <code>li</code> anndan bouk la chak fwa — sinon w ap deplase menm nan.</li><li><code>createElement("li")</code> — san <code>&lt; &gt;</code>.</li>`, `<li>Crée un <b>nouveau</b> <code>li</code> à chaque tour de boucle — sinon tu déplaces le même.</li><li><code>createElement("li")</code> — sans <code>&lt; &gt;</code>.</li>`),
    recap: T(`<li><code>createElement</code> → <code>textContent</code> → <code>appendChild</code>.</li>`, `<li><code>createElement</code> → <code>textContent</code> → <code>appendChild</code>.</li>`)
  },
{
      id: 'js-12',
      title: T('Mini-pwojè: salitasyon', 'Mini-projet : salutation'),
      html: '<input id="non" placeholder="Ekri non ou…">\n<button id="bouton">Salye m</button>\n<p id="repons"></p>',
      baseCss: 'input,button{font-size:16px;padding:8px 10px;border-radius:8px;border:1px solid #bbb}button{background:#6c7bff;color:#fff;border:0}#repons{font-size:22px;font-weight:700}',
      theory: T(
        `<p>Ann mete tout bagay ansanm! Pou li sa moun nan ekri nan yon <code>input</code>, nou itilize <code>.value</code>:</p>
         <pre>const chan = document.getElementById("non");
console.log(chan.value); // sa ki ekri ladan l</pre>
         <p>Konbine sa ak <code>addEventListener</code> ak <code>textContent</code> e ou gen yon vrè ti aplikasyon! 🎉</p>`,
        `<p>Mettons tout ensemble ! Pour lire ce que l'utilisateur a tapé dans un <code>input</code>, on utilise <code>.value</code> :</p>
         <pre>const champ = document.getElementById("non");
console.log(champ.value); // ce qui est écrit dedans</pre>
         <p>Combine ça avec <code>addEventListener</code> et <code>textContent</code> et tu as une vraie petite application ! 🎉</p>`
      ),
      task: T('Lè yo klike <code>#bouton</code>, li non ki nan <code>#non</code> epi ekri <b>"Bonjou [non]!"</b> nan <code>#repons</code>.', 'Au clic sur <code>#bouton</code>, lis le nom dans <code>#non</code> et écris <b>"Bonjour [nom] !"</b> dans <code>#repons</code>.'),
      hint: T('Anndan fonksyon klik la: <code>repons.textContent = "Bonjou " + chan.value + "!";</code>', 'Dans la fonction du clic : <code>repons.textContent = "Bonjour " + champ.value + " !";</code>'),
      starter: 'const chan = document.getElementById("non");\nconst bouton = document.getElementById("bouton");\nconst repons = document.getElementById("repons");\n\n',
      solution: 'const chan = document.getElementById("non");\nconst bouton = document.getElementById("bouton");\nconst repons = document.getElementById("repons");\n\nbouton.addEventListener("click", function () {\n  repons.textContent = "Bonjou " + chan.value + "!";\n});\n',
      check: async ({ code, rerun }) => {
        const r = await rerun(code);
        r.doc.getElementById('non').value = 'Zoé';
        r.doc.getElementById('bouton').click();
        const out = txt(r.doc.getElementById('repons'));
        if (!out) return T('Mwen ekri "Zoé" epi klike, men <code>#repons</code> rete vid.', 'J\'ai écrit "Zoé" et cliqué, mais <code>#repons</code> reste vide.');
        if (!out.includes('Zoé')) return T(`Mwen ekri "Zoé" epi mwen wè <code>${out}</code>. Itilize <code>.value</code>!`, `J'ai écrit "Zoé" et je vois <code>${out}</code>. Utilise <code>.value</code> !`);
        return true;
      }
    },

  /* ---------- Semèn 12: Avanse ---------- */
  {
    id: 'js-timer',
    title: T('Tan: setTimeout ak setInterval', 'Le temps : setTimeout et setInterval'),
    theory: T(
      `<p>Pou egzekite kòd <b>pita</b>:</p>
       <pre>setTimeout(() =&gt; {
  console.log("2 segonn pase!");
}, 2000);   // an milisegonn (1000 = 1 segonn)</pre>
       <p>Pou repete kòd <b>chak</b> X milisegonn:</p>
       <pre>let n = 0;
const id = setInterval(() =&gt; {
  n++;
  console.log(n);
  if (n === 3) clearInterval(id);  // kanpe
}, 1000);</pre>
       <p>⚠️ JavaScript <b>pa tann</b>: kòd ki anba <code>setTimeout</code> la egzekite <b>touswit</b>. Sa rele kòd <b>asenkwon</b>.</p>`,
      `<p>Pour exécuter du code <b>plus tard</b> :</p>
       <pre>setTimeout(() =&gt; {
  console.log("2 secondes écoulées !");
}, 2000);   // en millisecondes (1000 = 1 seconde)</pre>
       <p>Pour répéter du code <b>toutes les</b> X millisecondes :</p>
       <pre>let n = 0;
const id = setInterval(() =&gt; {
  n++;
  console.log(n);
  if (n === 3) clearInterval(id);  // arrêter
}, 1000);</pre>
       <p>⚠️ JavaScript <b>n'attend pas</b> : le code sous le <code>setTimeout</code> s'exécute <b>tout de suite</b>. C'est du code <b>asynchrone</b>.</p>`
    ),
    task: T(
      'Afiche <b>"Kòmanse"</b> touswit, epi ak <code>setTimeout</code>, afiche <b>"Tan fini!"</b> apre <b>500</b> milisegonn.',
      'Affiche <b>"Début"</b> tout de suite, puis avec <code>setTimeout</code>, affiche <b>"Temps écoulé !"</b> après <b>500</b> millisecondes.'
    ),
    hint: T('<code>setTimeout(() =&gt; { console.log("Tan fini!"); }, 500);</code>', '<code>setTimeout(() =&gt; { console.log("Temps écoulé !"); }, 500);</code>'),
    starter: '',
    solution: 'console.log("Kòmanse");\n\nsetTimeout(() => {\n  console.log("Tan fini!");\n}, 500);\n',
    check: async ctx => {
      if (!/setTimeout\s*\(/.test(ctx.code)) return T('Itilize <code>setTimeout</code>.', 'Utilise <code>setTimeout</code>.');
      if (ctx.logs.length !== 1) return T('Touswit, mwen ta dwe wè <b>yon sèl</b> mesaj ("Kòmanse").', 'Au départ, je devrais voir <b>un seul</b> message ("Début").');
      const later = await ctx.wait(800);
      if (later.length !== 2) return T('Apre 500 ms, yon dezyèm mesaj ("Tan fini!") ta dwe parèt.', 'Après 500 ms, un second message ("Temps écoulé !") devrait apparaître.');
      return true;
    },
    tips: T(`<li>Bay <code>setTimeout</code> yon <b>fonksyon</b>, pa rezilta yon fonksyon: <code>setTimeout(f, 500)</code>, pa <code>setTimeout(f(), 500)</code>.</li>`, `<li>Donne à <code>setTimeout</code> une <b>fonction</b>, pas son résultat : <code>setTimeout(f, 500)</code>, pas <code>setTimeout(f(), 500)</code>.</li>`),
    recap: T(`<li><code>setTimeout(f, ms)</code> = yon fwa, pita.</li><li><code>setInterval(f, ms)</code> = repete; <code>clearInterval</code> pou kanpe.</li>`, `<li><code>setTimeout(f, ms)</code> = une fois, plus tard.</li><li><code>setInterval(f, ms)</code> = répète ; <code>clearInterval</code> pour arrêter.</li>`)
  },
  {
    id: 'js-json',
    title: T('JSON', 'JSON'),
    theory: T(
      `<p><b>JSON</b> (JavaScript Object Notation) se fòma <b>tèks</b> tout sit ak aplikasyon itilize pou voye done. Li sanble ak objè JS, men kle yo <b>toujou</b> ant gimè doub:</p>
       <pre>{"non": "Ana", "laj": 15, "elev": true}</pre>
       <pre>// Objè → tèks JSON (pou voye / sove)
const tèks = JSON.stringify({ fwi: "mango" });
// '{"fwi":"mango"}'

// Tèks JSON → objè (pou itilize)
const obj = JSON.parse('{"non":"Ana","laj":15}');
console.log(obj.non);   // "Ana"</pre>`,
      `<p>Le <b>JSON</b> (JavaScript Object Notation) est le format <b>texte</b> que tous les sites et applis utilisent pour échanger des données. Il ressemble aux objets JS, mais les clés sont <b>toujours</b> entre guillemets doubles :</p>
       <pre>{"nom": "Ana", "age": 15, "eleve": true}</pre>
       <pre>// Objet → texte JSON (pour envoyer / sauvegarder)
const texte = JSON.stringify({ fruit: "mangue" });
// '{"fruit":"mangue"}'

// Texte JSON → objet (pour l'utiliser)
const obj = JSON.parse('{"nom":"Ana","age":15}');
console.log(obj.nom);   // "Ana"</pre>`
    ),
    task: T(
      '<b>1)</b> Ak <code>JSON.parse</code>, konvèti <code>done</code> an objè epi afiche <code>non</code> li. <b>2)</b> Ak <code>JSON.stringify</code>, afiche objè <code>{ fwi: "mango" }</code> an tèks.',
      '<b>1)</b> Avec <code>JSON.parse</code>, convertis <code>done</code> en objet et affiche son <code>non</code>. <b>2)</b> Avec <code>JSON.stringify</code>, affiche l\'objet <code>{ fwi: "mango" }</code> en texte.'
    ),
    hint: T('<code>const obj = JSON.parse(done); console.log(obj.non);</code>', '<code>const obj = JSON.parse(done); console.log(obj.non);</code>'),
    starter: "const done = '{\"non\":\"Ana\",\"laj\":15}';\n\n",
    solution: "const done = '{\"non\":\"Ana\",\"laj\":15}';\n\nconst obj = JSON.parse(done);\nconsole.log(obj.non);\n\nconsole.log(JSON.stringify({ fwi: \"mango\" }));\n",
    check: need(
      R(/JSON\.parse\(/, 'Itilize <code>JSON.parse</code>.', 'Utilise <code>JSON.parse</code>.'),
      R(/JSON\.stringify\(/, 'Itilize <code>JSON.stringify</code>.', 'Utilise <code>JSON.stringify</code>.'),
      R(logsAre(['Ana', '{"fwi":"mango"}']), 'Konsòl la dwe montre <code>Ana</code> epi <code>{"fwi":"mango"}</code>.', 'La console doit afficher <code>Ana</code> puis <code>{"fwi":"mango"}</code>.')
    ),
    tips: T(`<li>JSON pa aksepte gimè senp <code>'</code> ni vigil nan fen lis yo.</li><li><code>JSON.parse</code> sou yon tèks ki mal fòme bay yon <b>erè</b> — n ap wè kijan pou jere sa nan pwochen leson an.</li>`, `<li>Le JSON n'accepte ni guillemets simples <code>'</code> ni virgule finale.</li><li><code>JSON.parse</code> sur un texte mal formé lève une <b>erreur</b> — on verra comment la gérer à la leçon suivante.</li>`),
    recap: T(`<li><code>JSON.stringify</code>: objè → tèks.</li><li><code>JSON.parse</code>: tèks → objè.</li>`, `<li><code>JSON.stringify</code> : objet → texte.</li><li><code>JSON.parse</code> : texte → objet.</li>`)
  },
  {
    id: 'js-trycatch',
    title: T('Jere erè: try/catch', 'Gérer les erreurs : try/catch'),
    theory: T(
      `<p>Lè yon erè rive, pwogram nan <b>kanpe</b>. Avèk <code>try/catch</code>, nou ka <b>kenbe</b> erè a epi kontinye:</p>
       <pre>try {
  const obj = JSON.parse("pa json");   // ❌ erè
  console.log(obj);
} catch (erè) {
  console.log("Pwoblèm: " + erè.message);
} finally {
  console.log("Sa toujou egzekite");
}</pre>
       <p>Ou ka kreye pwòp erè pa w tou: <code>throw new Error("Montan pa valid");</code></p>`,
      `<p>Quand une erreur survient, le programme <b>s'arrête</b>. Avec <code>try/catch</code>, on peut <b>attraper</b> l'erreur et continuer :</p>
       <pre>try {
  const obj = JSON.parse("pas du json");   // ❌ erreur
  console.log(obj);
} catch (err) {
  console.log("Problème : " + err.message);
} finally {
  console.log("Toujours exécuté");
}</pre>
       <p>On peut aussi lever ses propres erreurs : <code>throw new Error("Montant invalide");</code></p>`
    ),
    task: T(
      'Kòd sa a kraze pwogram nan. Mete <code>JSON.parse</code> la anndan yon <code>try</code>, epi nan <code>catch</code> afiche <b>"Done pa bon"</b>. Pwogram nan dwe kontinye epi afiche <b>"Fini"</b>.',
      'Ce code fait planter le programme. Place le <code>JSON.parse</code> dans un <code>try</code>, et dans le <code>catch</code> affiche <b>"Données invalides"</b>. Le programme doit continuer et afficher <b>"Fini"</b>.'
    ),
    hint: T('<code>try { … } catch (e) { console.log("Done pa bon"); }</code>', '<code>try { … } catch (e) { console.log("Données invalides"); }</code>'),
    starter: 'const tèks = "{non: Ana}";  // JSON mal ekri\n\nconst obj = JSON.parse(tèks);\nconsole.log(obj.non);\n\nconsole.log("Fini");\n',
    solution: 'const tèks = "{non: Ana}";  // JSON mal ekri\n\ntry {\n  const obj = JSON.parse(tèks);\n  console.log(obj.non);\n} catch (e) {\n  console.log("Done pa bon");\n}\n\nconsole.log("Fini");\n',
    check: need(
      R(/\btry\s*\{/, 'Itilize <code>try { … }</code>.', 'Utilise <code>try { … }</code>.'),
      R(/\bcatch\b/, 'Ajoute yon <code>catch</code>.', 'Ajoute un <code>catch</code>.'),
      R(c => c.logs.length === 2 && /done pa bon|invalide/i.test(c.logs[0]), 'Premye mesaj la dwe soti nan <code>catch</code> ("Done pa bon").', 'Le premier message doit venir du <code>catch</code> ("Données invalides").'),
      R(c => c.logs[1] && c.logs[1].trim() === 'Fini', 'Pwogram nan dwe kontinye epi afiche "Fini".', 'Le programme doit continuer et afficher "Fini".')
    ),
    tips: T(`<li>Pa kache tout erè yo ak yon <code>catch</code> vid — omwen afiche yon mesaj.</li><li>Mete <b>sèlman</b> kòd ki ka echwe nan <code>try</code>.</li>`, `<li>Ne cache pas toutes les erreurs avec un <code>catch</code> vide — affiche au moins un message.</li><li>Mets <b>seulement</b> le code risqué dans le <code>try</code>.</li>`),
    recap: T(`<li><code>try</code> → eseye; <code>catch</code> → si erè; <code>finally</code> → toujou.</li><li><code>throw new Error(…)</code></li>`, `<li><code>try</code> → essayer ; <code>catch</code> → si erreur ; <code>finally</code> → toujours.</li><li><code>throw new Error(…)</code></li>`)
  },
  {
    id: 'js-async',
    title: T('Promise ak async/await', 'Promise et async/await'),
    theory: T(
      `<p>Yon <b>Promise</b> (pwomès) reprezante yon rezilta ki ap vini <b>pita</b> — egzanp: done k ap soti sou entènèt. <code>async</code>/<code>await</code> pèmèt nou ekri kòd asenkwon tankou si li te nòmal:</p>
       <pre>function tann(ms) {
  return new Promise(rezoud =&gt; setTimeout(rezoud, ms));
}

async function demare() {
  console.log("Ap chaje…");
  await tann(1000);         // tann 1 segonn
  console.log("Fini!");
}

demare();</pre>
       <p>Nan vrè lavi: <code>const rep = await fetch("https://api…");</code> pou chèche done sou yon sèvè.</p>`,
      `<p>Une <b>Promise</b> (promesse) représente un résultat qui arrivera <b>plus tard</b> — par exemple des données venant d'internet. <code>async</code>/<code>await</code> permet d'écrire du code asynchrone comme du code normal :</p>
       <pre>function attendre(ms) {
  return new Promise(resoudre =&gt; setTimeout(resoudre, ms));
}

async function demarrer() {
  console.log("Chargement…");
  await attendre(1000);      // attend 1 seconde
  console.log("Terminé !");
}

demarrer();</pre>
       <p>Dans la vraie vie : <code>const rep = await fetch("https://api…");</code> pour récupérer des données d'un serveur.</p>`
    ),
    task: T(
      'Ekri <code>async function demare()</code> ki afiche yon premye mesaj, <code>await tann(300)</code>, epi afiche yon dezyèm mesaj. Rele <code>demare()</code>.',
      'Écris <code>async function demare()</code> qui affiche un premier message, fait <code>await tann(300)</code>, puis affiche un second message. Appelle <code>demare()</code>.'
    ),
    hint: T('<code>async function demare() { console.log("A"); await tann(300); console.log("B"); }</code>', '<code>async function demare() { console.log("A"); await tann(300); console.log("B"); }</code>'),
    starter: 'function tann(ms) {\n  return new Promise(rezoud => setTimeout(rezoud, ms));\n}\n\n',
    solution: 'function tann(ms) {\n  return new Promise(rezoud => setTimeout(rezoud, ms));\n}\n\nasync function demare() {\n  console.log("Ap chaje…");\n  await tann(300);\n  console.log("Fini!");\n}\n\ndemare();\n',
    check: async ctx => {
      if (!/async\s+function\s+demare|const\s+demare\s*=\s*async/.test(ctx.code)) return T('Kreye <code>async function demare()</code>.', 'Crée <code>async function demare()</code>.');
      if (!/await\s+tann\(/.test(ctx.code)) return T('Itilize <code>await tann(300)</code>.', 'Utilise <code>await tann(300)</code>.');
      if (ctx.logs.length !== 1) return T('Touswit, se <b>sèlman</b> premye mesaj la ki dwe parèt. (Ou rele <code>demare()</code>?)', 'Au départ, <b>seul</b> le premier message doit apparaître. (As-tu appelé <code>demare()</code> ?)');
      const later = await ctx.wait(600);
      if (later.length !== 2) return T('Apre <code>await</code> la, dezyèm mesaj la ta dwe parèt.', 'Après le <code>await</code>, le second message devrait apparaître.');
      return true;
    },
    tips: T(`<li><code>await</code> mache <b>sèlman</b> anndan yon fonksyon <code>async</code>.</li><li>Pou erè ak <code>await</code>, itilize <code>try/catch</code>.</li>`, `<li><code>await</code> ne marche <b>que</b> dans une fonction <code>async</code>.</li><li>Pour les erreurs avec <code>await</code>, utilise <code>try/catch</code>.</li>`),
    recap: T(`<li>Promise = rezilta pita.</li><li><code>async</code> + <code>await</code> = tann san bloke.</li>`, `<li>Promise = résultat futur.</li><li><code>async</code> + <code>await</code> = attendre sans bloquer.</li>`)
  },
  {
    id: 'js-todo',
    title: T('🏆 Pwojè final: Lis travay', '🏆 Projet final : liste de tâches'),
    html: '<h3>📝 Lis travay mwen</h3>\n<input id="tach" placeholder="Nouvo travay…">\n<button id="ajoute">Ajoute</button>\n<ul id="lis"></ul>',
    baseCss: 'input,button{font-size:16px;padding:8px 10px;border-radius:8px;border:1px solid #bbb}button{background:#22c55e;color:#fff;border:0}li{padding:4px 0}',
    theory: T(
      `<p>Felisitasyon, ou rive nan dènye leson JavaScript la! 🎉 Ann mete <b>tout</b> sa w aprann ansanm pou fè yon vrè aplikasyon:</p>
       <ol><li><b>DOM</b>: jwenn <code>input</code>, <code>button</code> ak <code>ul</code> la.</li>
       <li><b>Evènman</b>: koute klik sou bouton an.</li>
       <li><b>Kondisyon</b>: pa ajoute yon travay vid (<code>.trim()</code>).</li>
       <li><b>Kreye eleman</b>: yon nouvo <code>li</code> ak tèks travay la.</li>
       <li><b>Netwaye</b>: vide <code>input</code> la apre (<code>input.value = ""</code>).</li></ol>`,
      `<p>Félicitations, tu es à la dernière leçon de JavaScript ! 🎉 Mettons <b>tout</b> ensemble pour créer une vraie application :</p>
       <ol><li><b>DOM</b> : récupère l'<code>input</code>, le <code>button</code> et la <code>ul</code>.</li>
       <li><b>Événement</b> : écoute le clic sur le bouton.</li>
       <li><b>Condition</b> : n'ajoute pas une tâche vide (<code>.trim()</code>).</li>
       <li><b>Créer un élément</b> : un nouveau <code>li</code> avec le texte de la tâche.</li>
       <li><b>Nettoyer</b> : vide l'<code>input</code> ensuite (<code>input.value = ""</code>).</li></ol>`
    ),
    task: T(
      'Lè yo klike <code>#ajoute</code>: si <code>#tach</code> pa vid, ajoute yon <code>li</code> ak tèks la nan <code>#lis</code>, epi vide <code>#tach</code>.',
      'Au clic sur <code>#ajoute</code> : si <code>#tach</code> n\'est pas vide, ajoute un <code>li</code> avec le texte dans <code>#lis</code>, puis vide <code>#tach</code>.'
    ),
    hint: T('Nan klik la: <code>const t = tach.value.trim(); if (t === "") return;</code> answit <code>createElement</code>…', 'Dans le clic : <code>const t = tach.value.trim(); if (t === "") return;</code> puis <code>createElement</code>…'),
    starter: 'const tach = document.getElementById("tach");\nconst bouton = document.getElementById("ajoute");\nconst lis = document.getElementById("lis");\n\n',
    solution: 'const tach = document.getElementById("tach");\nconst bouton = document.getElementById("ajoute");\nconst lis = document.getElementById("lis");\n\nbouton.addEventListener("click", () => {\n  const t = tach.value.trim();\n  if (t === "") return;\n\n  const li = document.createElement("li");\n  li.textContent = t;\n  lis.appendChild(li);\n  tach.value = "";\n});\n',
    check: async ({ code, rerun }) => {
      const r = await rerun(code);
      const d = r.doc, inp = d.getElementById('tach'), btn = d.getElementById('ajoute');
      inp.value = 'Etidye'; btn.click();
      inp.value = 'Manje'; btn.click();
      const items = [...d.querySelectorAll('#lis > li')].map(txt);
      if (items.join('|') !== 'Etidye|Manje') return T(`Mwen ajoute "Etidye" ak "Manje" epi lis la gen: <code>${items.join(', ') || '—'}</code>.`, `J'ai ajouté "Etidye" et "Manje" et la liste contient : <code>${items.join(', ') || '—'}</code>.`);
      if (inp.value !== '') return T('Apre yon ajou, <code>#tach</code> dwe vid.', 'Après un ajout, <code>#tach</code> doit être vide.');
      inp.value = '   '; btn.click();
      if (d.querySelectorAll('#lis > li').length !== 2) return T('Pa ajoute travay vid (oswa ki gen sèlman espas).', 'N\'ajoute pas de tâche vide (ou seulement des espaces).');
      return true;
    },
    extra: T(
      `<p>Pou ale pi lwen ak pwojè a:</p>
       <ul><li>Ajoute yon bouton ❌ sou chak <code>li</code> pou efase l (<code>li.remove()</code>).</li>
       <li>Klike sou yon travay pou bare l (<code>classList.toggle("fini")</code>).</li>
       <li>Sove lis la ak <code>localStorage.setItem("lis", JSON.stringify(travay))</code> pou l pa disparèt lè w rafrechi.</li></ul>`,
      `<p>Pour aller plus loin avec ce projet :</p>
       <ul><li>Ajoute un bouton ❌ sur chaque <code>li</code> pour le supprimer (<code>li.remove()</code>).</li>
       <li>Clique sur une tâche pour la barrer (<code>classList.toggle("fini")</code>).</li>
       <li>Sauvegarde la liste avec <code>localStorage.setItem("lis", JSON.stringify(taches))</code> pour qu'elle survive au rafraîchissement.</li></ul>`
    ),
    tips: T(`<li>Li <code>tach.value</code> <b>anndan</b> fonksyon klik la, pa deyò (sinon li toujou vid).</li>`, `<li>Lis <code>tach.value</code> <b>dans</b> la fonction du clic, pas en dehors (sinon il est toujours vide).</li>`),
    recap: T(`<li>DOM + evènman + kondisyon + createElement = aplikasyon!</li><li>🎉 Ou fini JavaScript! Pwochen: C#.</li>`, `<li>DOM + événements + conditions + createElement = application !</li><li>🎉 Tu as fini JavaScript ! Prochaine étape : C#.</li>`)
  }
);

addDetails({
  'js-7': {
    tips: T(`<li><code>getElementById("mesaj")</code> — san <code>#</code>. Ak <code>querySelector</code>, ou bezwen <code>#</code>: <code>querySelector("#mesaj")</code>.</li><li>Si eleman an pa egziste, ou jwenn <code>null</code> → <code>TypeError</code>.</li>`, `<li><code>getElementById("mesaj")</code> — sans <code>#</code>. Avec <code>querySelector</code>, il faut le <code>#</code> : <code>querySelector("#mesaj")</code>.</li><li>Si l'élément n'existe pas, on obtient <code>null</code> → <code>TypeError</code>.</li>`),
    recap: T(`<li><code>getElementById</code>, <code>querySelector</code>.</li><li><code>textContent</code> pou chanje tèks.</li>`, `<li><code>getElementById</code>, <code>querySelector</code>.</li><li><code>textContent</code> pour changer le texte.</li>`)
  },
  'js-8': {
    tips: T(`<li><code>"click"</code> an miniskil, ant gimè.</li><li>Pa ekri <code>addEventListener("click", konte())</code> — sa rele fonksyon an touswit.</li>`, `<li><code>"click"</code> en minuscules, entre guillemets.</li><li>N'écris pas <code>addEventListener("click", compter())</code> — ça appelle la fonction tout de suite.</li>`),
    recap: T(`<li><code>el.addEventListener("click", fonksyon)</code></li><li>Lòt evènman: <code>input</code>, <code>submit</code>, <code>keydown</code>.</li>`, `<li><code>el.addEventListener("click", fonction)</code></li><li>Autres événements : <code>input</code>, <code>submit</code>, <code>keydown</code>.</li>`)
  },
  'js-9': {
    tips: T(`<li>Dènye eleman an: <code>fwi[fwi.length - 1]</code>.</li><li>Yon tablo <code>const</code> ka toujou chanje kontni (push), men ou pa ka ranplase l nèt.</li>`, `<li>Dernier élément : <code>fwi[fwi.length - 1]</code>.</li><li>Un tableau <code>const</code> peut changer de contenu (push), mais pas être remplacé.</li>`),
    recap: T(`<li><code>[ ]</code>, endèks 0, <code>.length</code>, <code>.push()</code>.</li>`, `<li><code>[ ]</code>, indice 0, <code>.length</code>, <code>.push()</code>.</li>`)
  },
  'js-10': {
    tips: T(`<li>Separe pè kle/valè yo ak <b>vigil</b>.</li><li>Kle ki pa egziste bay <code>undefined</code>, pa yon erè.</li>`, `<li>Sépare les paires clé/valeur par des <b>virgules</b>.</li><li>Une clé inexistante donne <code>undefined</code>, pas une erreur.</li>`),
    recap: T(`<li><code>{ kle: valè }</code>, <code>obj.kle</code>.</li>`, `<li><code>{ cle: valeur }</code>, <code>obj.cle</code>.</li>`)
  },
  'js-11': {
    tips: T(`<li><code>for…of</code> bay <b>valè</b> yo; <code>for…in</code> bay <b>endèks/kle</b> yo — pa melanje yo.</li>`, `<li><code>for…of</code> donne les <b>valeurs</b> ; <code>for…in</code> donne les <b>indices/clés</b> — ne les mélange pas.</li>`),
    recap: T(`<li><code>for (const x of tablo)</code></li><li>Akimilatè: <code>let som = 0; som += x;</code></li>`, `<li><code>for (const x of tableau)</code></li><li>Accumulateur : <code>let som = 0; som += x;</code></li>`)
  },
  'js-12': {
    tips: T(`<li><code>.value</code> toujou bay yon <b>string</b> — menm si se yon nonm. Itilize <code>Number(…)</code> pou kalkile.</li>`, `<li><code>.value</code> renvoie toujours un <b>string</b> — même pour un nombre. Utilise <code>Number(…)</code> pour calculer.</li>`),
    recap: T(`<li><code>input.value</code> = sa moun nan ekri.</li><li>Evènman + DOM = entèaksyon.</li>`, `<li><code>input.value</code> = ce que l'utilisateur a tapé.</li><li>Événements + DOM = interaction.</li>`)
  }
});
