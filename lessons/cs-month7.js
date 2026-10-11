/* ======================= MWA 7 — C# Avanse (semèn 25-28) ======================= */
findModule('cs').lessons.push(
  /* ---------- Semèn 25: Jenerik ak tip modèn ---------- */
  {
    id: 'cs-genmethod',
    title: T('Metòd jenerik <T>', 'Méthodes génériques <T>'),
    theory: T(
      `<p>Ou deja itilize jenerik: <code>List&lt;int&gt;</code>, <code>List&lt;string&gt;</code>. Ou ka ekri pwòp metòd <b>jenerik</b> pa w — yon sèl metòd ki mache pou <b>nenpòt tip</b>:</p>
       <pre>static T Premye&lt;T&gt;(List&lt;T&gt; lis)
{
    return lis[0];
}

Premye(new List&lt;int&gt; { 5, 9 });          // 5
Premye(new List&lt;string&gt; { "a", "b" });   // "a"</pre>
       <p><code>T</code> se yon <b>paramèt tip</b> — yon kote pou tip la, ki ap ranplase lè w rele metòd la. Sa evite kopye menm kòd la pou chak tip.</p>`,
      `<p>Tu utilises déjà des génériques : <code>List&lt;int&gt;</code>, <code>List&lt;string&gt;</code>. Tu peux écrire tes propres méthodes <b>génériques</b> — une seule méthode pour <b>n'importe quel type</b> :</p>
       <pre>static T Premier&lt;T&gt;(List&lt;T&gt; liste)
{
    return liste[0];
}

Premier(new List&lt;int&gt; { 5, 9 });          // 5
Premier(new List&lt;string&gt; { "a", "b" });   // "a"</pre>
       <p><code>T</code> est un <b>paramètre de type</b> — un emplacement pour le type, remplacé à l'appel. Ça évite de copier le même code pour chaque type.</p>`
    ),
    task: T(
      'Ekri <code>static T Denye&lt;T&gt;(List&lt;T&gt; lis)</code> ki retounen <b>dènye</b> eleman an. Teste l ak yon <code>List&lt;int&gt;</code> ak yon <code>List&lt;string&gt;</code>.',
      'Écris <code>static T Denye&lt;T&gt;(List&lt;T&gt; lis)</code> qui renvoie le <b>dernier</b> élément. Teste-la avec une <code>List&lt;int&gt;</code> et une <code>List&lt;string&gt;</code>.'
    ),
    hint: T('<code>return lis[lis.Count - 1];</code>', '<code>return lis[lis.Count - 1];</code>'),
    starter: csProg({ usings: ['System.Collections.Generic'] }),
    solution: csProg({ usings: ['System.Collections.Generic'], main: 'Console.WriteLine(Denye(new List<int> { 3, 7, 9 }));\nConsole.WriteLine(Denye(new List<string> { "Okap", "Jakmèl" }));', inside: 'static T Denye<T>(List<T> lis)\n{\n    return lis[lis.Count - 1];\n}' }),
    output: '9\nJakmèl',
    check: need(
      R(/static\s+T\s+Denye\s*<\s*T\s*>\s*\(\s*List\s*<\s*T\s*>\s+lis\s*\)/, 'Siyati a: <code>static T Denye&lt;T&gt;(List&lt;T&gt; lis)</code>', 'Signature : <code>static T Denye&lt;T&gt;(List&lt;T&gt; lis)</code>'),
      R(/lis\s*\[\s*lis\.Count\s*-\s*1\s*\]|lis\s*\[\s*\^1\s*\]|lis\.Last\s*\(\s*\)/, 'Retounen <code>lis[lis.Count - 1]</code>.', 'Renvoie <code>lis[lis.Count - 1]</code>.'),
      R(inMain(/Denye\s*\(\s*new\s+List\s*<\s*int\s*>/), 'Teste ak yon <code>List&lt;int&gt;</code>.', 'Teste avec une <code>List&lt;int&gt;</code>.'),
      R(inMain(/Denye\s*\(\s*new\s+List\s*<\s*string\s*>/), 'Teste ak yon <code>List&lt;string&gt;</code>.', 'Teste avec une <code>List&lt;string&gt;</code>.')
    ),
    tips: T(`<li>Pa defo, ou pa ka fè <code>a + b</code> ak 2 <code>T</code>: C# pa konnen si T sipòte +. Itilize <b>kontrent</b> (<code>where T : …</code>) pou sa.</li>`, `<li>Par défaut, impossible de faire <code>a + b</code> avec 2 <code>T</code> : C# ne sait pas si T supporte +. On utilise des <b>contraintes</b> (<code>where T : …</code>).</li>`),
    recap: T(`<li><code>static T M&lt;T&gt;(T x)</code> = metòd jenerik.</li>`, `<li><code>static T M&lt;T&gt;(T x)</code> = méthode générique.</li>`)
  },
  {
    id: 'cs-genclass',
    title: T('Klas jenerik', 'Classes génériques'),
    theory: T(
      `<p>Yon <b>klas</b> ka jenerik tou. Egzanp: yon "bwat" ki ka kenbe nenpòt bagay:</p>
       <pre>class Bwat&lt;T&gt;
{
    public T Kontni { get; set; }

    public Bwat(T kontni) { Kontni = kontni; }

    public void Montre() =&gt; Console.WriteLine($"📦 {Kontni}");
}

var b1 = new Bwat&lt;int&gt;(42);
var b2 = new Bwat&lt;string&gt;("Kado");
b1.Montre();   // 📦 42</pre>
       <p>Kontrent yo limite T: <code>class Depo&lt;T&gt; where T : class</code> (T dwe yon klas), <code>where T : IComparable</code> (T dwe ka konpare)…</p>`,
      `<p>Une <b>classe</b> peut aussi être générique. Exemple : une « boîte » qui peut contenir n'importe quoi :</p>
       <pre>class Boite&lt;T&gt;
{
    public T Contenu { get; set; }

    public Boite(T contenu) { Contenu = contenu; }

    public void Montrer() =&gt; Console.WriteLine($"📦 {Contenu}");
}

var b1 = new Boite&lt;int&gt;(42);
var b2 = new Boite&lt;string&gt;("Cadeau");
b1.Montrer();   // 📦 42</pre>
       <p>Les contraintes limitent T : <code>class Depot&lt;T&gt; where T : class</code> (T doit être une classe), <code>where T : IComparable</code> (T doit être comparable)…</p>`
    ),
    task: T(
      'Kreye <code>class Pè&lt;T&gt;</code> ak 2 pwopriyete <code>T Premye</code> ak <code>T Dezyem</code>, yon konstriktè, ak metòd <code>Chanje()</code> ki echanje yo. Teste l ak <code>Pè&lt;string&gt;</code>.',
      'Crée <code>class Pè&lt;T&gt;</code> avec 2 propriétés <code>T Premye</code> et <code>T Dezyem</code>, un constructeur, et une méthode <code>Chanje()</code> qui les échange. Teste-la avec <code>Pè&lt;string&gt;</code>.'
    ),
    hint: T('Nan <code>Chanje()</code>: <code>T tmp = Premye; Premye = Dezyem; Dezyem = tmp;</code>', 'Dans <code>Chanje()</code> : <code>T tmp = Premye; Premye = Dezyem; Dezyem = tmp;</code>'),
    starter: csProg({ after: '// ✍️ class Pè<T>' }),
    solution: csProg({ main: 'var p = new Pè<string>("goch", "dwat");\np.Chanje();\nConsole.WriteLine($"{p.Premye} {p.Dezyem}");', after: 'class Pè<T>\n{\n    public T Premye { get; set; }\n    public T Dezyem { get; set; }\n\n    public Pè(T a, T b)\n    {\n        Premye = a;\n        Dezyem = b;\n    }\n\n    public void Chanje()\n    {\n        T tmp = Premye;\n        Premye = Dezyem;\n        Dezyem = tmp;\n    }\n}' }),
    output: ({ code }) => { const m = code.match(/new\s+Pè\s*<\s*string\s*>\s*\(\s*"([^"]*)"\s*,\s*"([^"]*)"/); return m ? `${m[2]} ${m[1]}` : ''; },
    check: need(
      R(/class\s+Pè\s*<\s*T\s*>/, 'Kreye <code>class Pè&lt;T&gt;</code>.', 'Crée <code>class Pè&lt;T&gt;</code>.'),
      R(/public\s+T\s+Premye\s*\{\s*get\s*;\s*set\s*;\s*\}/, 'Ajoute <code>public T Premye { get; set; }</code>.', 'Ajoute <code>public T Premye { get; set; }</code>.'),
      R(/public\s+T\s+Dezyem\s*\{\s*get\s*;\s*set\s*;\s*\}/, 'Ajoute <code>public T Dezyem { get; set; }</code>.', 'Ajoute <code>public T Dezyem { get; set; }</code>.'),
      R(/public\s+Pè\s*\(\s*T\s+\w+\s*,\s*T\s+\w+\s*\)/, 'Ajoute konstriktè <code>public Pè(T a, T b)</code>.', 'Ajoute le constructeur <code>public Pè(T a, T b)</code>.'),
      R(/void\s+Chanje\s*\(\s*\)\s*\{[^}]*T\s+\w+\s*=\s*Premye/, 'Nan <code>Chanje()</code>, sere <code>Premye</code> nan yon varyab tanporè <code>T tmp</code>.', 'Dans <code>Chanje()</code>, garde <code>Premye</code> dans une variable temporaire <code>T tmp</code>.'),
      R(inMain(/new\s+Pè\s*<\s*string\s*>/), 'Teste ak <code>new Pè&lt;string&gt;(…)</code>.', 'Teste avec <code>new Pè&lt;string&gt;(…)</code>.')
    ),
    tips: T(`<li>Konstriktè a rele <code>Pè</code>, <b>san</b> <code>&lt;T&gt;</code>.</li>`, `<li>Le constructeur s'appelle <code>Pè</code>, <b>sans</b> <code>&lt;T&gt;</code>.</li>`),
    recap: T(`<li><code>class K&lt;T&gt;</code> → <code>new K&lt;int&gt;()</code>.</li><li><code>where T : …</code> = kontrent.</li>`, `<li><code>class K&lt;T&gt;</code> → <code>new K&lt;int&gt;()</code>.</li><li><code>where T : …</code> = contrainte.</li>`)
  },
  {
    id: 'cs-nullable',
    title: T('null ak operatè ?. ??', 'null et opérateurs ?. ??'),
    theory: T(
      `<p><code>null</code> vle di "<b>pa gen valè</b>". Se kòz erè ki pi komen an: <code>NullReferenceException</code>. C# bay zouti pou pwoteje w:</p>
       <pre>int? nòt = null;          // int? = int ki ka null
string? non = null;

int n = nòt ?? 0;          // ?? = "si null, itilize 0"
int? longè = non?.Length;  // ?. = "si non pa null, pran Length"
Console.WriteLine(non?.ToUpper() ?? "(pa gen non)");

non ??= "Anonim";          // bay yon valè sèlman si li null</pre>
       <p>Toujou mande tèt ou: "<i>Èske varyab sa a ka null?</i>"</p>`,
      `<p><code>null</code> veut dire « <b>pas de valeur</b> ». C'est la cause d'erreur la plus fréquente : <code>NullReferenceException</code>. C# offre des outils pour s'en protéger :</p>
       <pre>int? note = null;          // int? = int qui peut être null
string? nom = null;

int n = note ?? 0;          // ?? = « si null, utilise 0 »
int? longueur = nom?.Length; // ?. = « si nom n'est pas null, prends Length »
Console.WriteLine(nom?.ToUpper() ?? "(pas de nom)");

nom ??= "Anonyme";          // affecte seulement si null</pre>
       <p>Demande-toi toujours : « <i>Cette variable peut-elle être null ?</i> »</p>`
    ),
    task: T(
      'Afiche <code>non?.Length ?? 0</code> (pou evite erè a), answit bay <code>non</code> valè <b>"Anonim"</b> ak <code>??=</code> epi afiche <code>non</code>.',
      'Affiche <code>non?.Length ?? 0</code> (pour éviter l\'erreur), puis donne à <code>non</code> la valeur <b>"Anonim"</b> avec <code>??=</code> et affiche <code>non</code>.'
    ),
    hint: T('<code>Console.WriteLine(non?.Length ?? 0);</code> epi <code>non ??= "Anonim";</code>', '<code>Console.WriteLine(non?.Length ?? 0);</code> puis <code>non ??= "Anonim";</code>'),
    starter: csProg({ main: 'string? non = null;\n\n// ✍️' }),
    solution: csProg({ main: 'string? non = null;\n\nConsole.WriteLine(non?.Length ?? 0);\nnon ??= "Anonim";\nConsole.WriteLine(non);' }),
    output: '0\nAnonim',
    check: need(
      R(/non\?\.Length\s*\?\?\s*0/, 'Ekri <code>non?.Length ?? 0</code>.', 'Écris <code>non?.Length ?? 0</code>.'),
      R(/non\s*\?\?=\s*"[^"]+"\s*;/, 'Ekri <code>non ??= "Anonim";</code>', 'Écris <code>non ??= "Anonim";</code>'),
      R(/Console\.WriteLine\s*\(\s*non\s*\)/, 'Afiche <code>non</code> alafen.', 'Affiche <code>non</code> à la fin.')
    ),
    tips: T(`<li><code>non.Length</code> sou yon <code>null</code> → kraze. <code>non?.Length</code> → bay <code>null</code> san kraze.</li>`, `<li><code>nom.Length</code> sur un <code>null</code> → plante. <code>nom?.Length</code> → renvoie <code>null</code> sans planter.</li>`),
    recap: T(`<li><code>T?</code> = ka null.</li><li><code>?.</code> aksè san risk, <code>??</code> valè pa defo, <code>??=</code>.</li>`, `<li><code>T?</code> = peut être null.</li><li><code>?.</code> accès sûr, <code>??</code> valeur par défaut, <code>??=</code>.</li>`)
  },
  {
    id: 'cs-tuple',
    title: T('Tuples', 'Tuples'),
    theory: T(
      `<p>Yon <b>tuple</b> gwoupe plizyè valè <b>san</b> kreye yon klas. Pafè pou retounen plizyè rezilta (pi pwòp pase <code>out</code>):</p>
       <pre>static (int min, int max) MinMax(int[] t)
{
    return (t.Min(), t.Max());
}

var r = MinMax(new[] { 4, 9, 1 });
Console.WriteLine(r.min);        // 1

var (mn, mx) = MinMax(new[] { 4, 9, 1 });  // DEKONSTRIKSYON
Console.WriteLine($"{mn} → {mx}");         // 1 → 9</pre>`,
      `<p>Un <b>tuple</b> regroupe plusieurs valeurs <b>sans</b> créer de classe. Parfait pour renvoyer plusieurs résultats (plus propre que <code>out</code>) :</p>
       <pre>static (int min, int max) MinMax(int[] t)
{
    return (t.Min(), t.Max());
}

var r = MinMax(new[] { 4, 9, 1 });
Console.WriteLine(r.min);        // 1

var (mn, mx) = MinMax(new[] { 4, 9, 1 });  // DÉCONSTRUCTION
Console.WriteLine($"{mn} → {mx}");         // 1 → 9</pre>`
    ),
    task: T(
      'Ekri <code>static (int som, double mwayen) Estatistik(int[] t)</code> ki retounen sòm ak mwayèn. Nan Main, dekonstwi rezilta a <code>var (s, m) = …</code> epi afiche tou de.',
      'Écris <code>static (int som, double mwayen) Estatistik(int[] t)</code> qui renvoie la somme et la moyenne. Dans Main, déconstruis le résultat <code>var (s, m) = …</code> et affiche les deux.'
    ),
    hint: T('Kalkile <code>som</code> ak yon bouk, answit <code>return (som, (double)som / t.Length);</code>', 'Calcule <code>som</code> avec une boucle, puis <code>return (som, (double)som / t.Length);</code>'),
    starter: CS_STARTER,
    solution: csProg({ main: 'var (s, m) = Estatistik(new[] { 10, 20, 30, 40 });\nConsole.WriteLine(s);\nConsole.WriteLine(m);', inside: 'static (int som, double mwayen) Estatistik(int[] t)\n{\n    int som = 0;\n    foreach (int x in t) som += x;\n    return (som, (double)som / t.Length);\n}' }),
    output: '100\n25',
    check: need(
      R(/static\s*\(\s*int\s+som\s*,\s*double\s+mwayen\s*\)\s*Estatistik\s*\(\s*int\s*\[\s*\]\s+t\s*\)/, 'Siyati a: <code>static (int som, double mwayen) Estatistik(int[] t)</code>', 'Signature : <code>static (int som, double mwayen) Estatistik(int[] t)</code>'),
      R(/return\s*\(\s*\w+\s*,[^;]+\)\s*;/, 'Retounen yon tuple: <code>return (som, …);</code>', 'Renvoie un tuple : <code>return (som, …);</code>'),
      R(/\(\s*double\s*\)/, 'Pa bliye <code>(double)</code> pou mwayèn nan.', 'N\'oublie pas <code>(double)</code> pour la moyenne.'),
      R(inMain(/var\s*\(\s*\w+\s*,\s*\w+\s*\)\s*=\s*Estatistik\s*\(/), 'Dekonstwi: <code>var (s, m) = Estatistik(…);</code>', 'Déconstruis : <code>var (s, m) = Estatistik(…);</code>')
    ),
    tips: T(`<li>Pou plis pase 3-4 valè, yon <code>record</code> pi klè pase yon tuple.</li>`, `<li>Au-delà de 3-4 valeurs, un <code>record</code> est plus clair qu'un tuple.</li>`),
    recap: T(`<li><code>(T1 a, T2 b)</code> = tuple.</li><li><code>var (x, y) = …</code> = dekonstriksyon.</li>`, `<li><code>(T1 a, T2 b)</code> = tuple.</li><li><code>var (x, y) = …</code> = déconstruction.</li>`)
  },
  {
    id: 'cs-switchexpr',
    title: T('Ekspresyon switch ak pattern', 'Expressions switch et patterns'),
    theory: T(
      `<p>C# modèn gen yon <b>ekspresyon switch</b> — pi kout, epi li <b>bay yon valè</b>:</p>
       <pre>string Mantyon(int nòt) =&gt; nòt switch
{
    &gt;= 90 =&gt; "Ekselan",
    &gt;= 75 =&gt; "Trè byen",
    &gt;= 50 =&gt; "Pase",
    _     =&gt; "Echwe"      // _ = tout lòt ka yo
};</pre>
       <p>Li mache ak tip tou (<b>pattern matching</b>):</p>
       <pre>string Dekri(object o) =&gt; o switch
{
    int n    =&gt; $"Nonm {n}",
    string s =&gt; $"Tèks '{s}'",
    null     =&gt; "Anyen",
    _        =&gt; "Lòt bagay"
};</pre>`,
      `<p>Le C# moderne a une <b>expression switch</b> — plus courte, et elle <b>produit une valeur</b> :</p>
       <pre>string Mention(int note) =&gt; note switch
{
    &gt;= 90 =&gt; "Excellent",
    &gt;= 75 =&gt; "Très bien",
    &gt;= 50 =&gt; "Admis",
    _     =&gt; "Échoué"      // _ = tous les autres cas
};</pre>
       <p>Elle marche aussi avec les types (<b>pattern matching</b>) :</p>
       <pre>string Decrire(object o) =&gt; o switch
{
    int n    =&gt; $"Nombre {n}",
    string s =&gt; $"Texte '{s}'",
    null     =&gt; "Rien",
    _        =&gt; "Autre chose"
};</pre>`
    ),
    task: T(
      'Kreye <code>string desk = n switch { … };</code> ki bay <b>"negatif"</b> si <code>&lt; 0</code>, <b>"zewo"</b> si <code>0</code>, sinon <b>"pozitif"</b>. Afiche <code>desk</code>.',
      'Crée <code>string desk = n switch { … };</code> qui donne <b>"négatif"</b> si <code>&lt; 0</code>, <b>"zéro"</b> si <code>0</code>, sinon <b>"positif"</b>. Affiche <code>desk</code>.'
    ),
    hint: T('<code>&lt; 0 =&gt; "negatif",</code> <code>0 =&gt; "zewo",</code> <code>_ =&gt; "pozitif"</code>', '<code>&lt; 0 =&gt; "négatif",</code> <code>0 =&gt; "zéro",</code> <code>_ =&gt; "positif"</code>'),
    starter: csProg({ main: 'int n = -7;\n\n// ✍️' }),
    solution: csProg({ main: 'int n = -7;\n\nstring desk = n switch\n{\n    < 0 => "negatif",\n    0 => "zewo",\n    _ => "pozitif"\n};\n\nConsole.WriteLine(desk);' }),
    output: ({ code }) => (code.match(/<\s*0\s*=>\s*"([^"]*)"/) || [])[1] || 'negatif',
    check: need(
      R(/string\s+desk\s*=\s*n\s+switch\s*\{/, 'Kòmanse ak <code>string desk = n switch {</code>', 'Commence par <code>string desk = n switch {</code>'),
      R(/<\s*0\s*=>\s*"[^"]+"\s*,/, 'Ka 1: <code>&lt; 0 =&gt; "negatif",</code>', 'Cas 1 : <code>&lt; 0 =&gt; "négatif",</code>'),
      R(/[\s{,]0\s*=>\s*"[^"]+"\s*,/, 'Ka 2: <code>0 =&gt; "zewo",</code>', 'Cas 2 : <code>0 =&gt; "zéro",</code>'),
      R(/_\s*=>\s*"[^"]+"/, 'Ka default: <code>_ =&gt; "pozitif"</code>', 'Cas par défaut : <code>_ =&gt; "positif"</code>'),
      R(/\}\s*;/, 'Fèmen ak <code>};</code> (ak pwen vigil).', 'Ferme avec <code>};</code> (avec point-virgule).')
    ),
    tips: T(`<li>Separe ka yo ak <b>vigil</b>; pa gen <code>case</code> ni <code>break</code>.</li><li>Fini ak <code>};</code></li><li>Lòd la enpòtan: premye ka ki koresponn lan genyen.</li>`, `<li>Sépare les cas par des <b>virgules</b> ; pas de <code>case</code> ni de <code>break</code>.</li><li>Termine par <code>};</code></li><li>L'ordre compte : le premier cas qui correspond gagne.</li>`),
    recap: T(`<li><code>x switch { pattern =&gt; valè, _ =&gt; … };</code></li>`, `<li><code>x switch { pattern =&gt; valeur, _ =&gt; … };</code></li>`)
  },

  /* ---------- Semèn 26: Delege, lambda, evènman ---------- */
  {
    id: 'cs-func',
    title: T('Func ak Action', 'Func et Action'),
    theory: T(
      `<p>Nan C#, ou ka mete yon <b>metòd</b> nan yon <b>varyab</b>! 2 tip pou sa:</p>
       <pre>// Func&lt;antre…, sòti&gt;: retounen yon valè
Func&lt;int, int&gt; kare = x =&gt; x * x;
Func&lt;int, int, int&gt; ajoute = (a, b) =&gt; a + b;
Console.WriteLine(kare(5));       // 25

// Action&lt;antre…&gt;: pa retounen anyen
Action&lt;string&gt; salye = non =&gt; Console.WriteLine($"Bonjou {non}");
salye("Ana");</pre>
       <p><code>x =&gt; x * x</code> se yon <b>lambda</b> — menm jan ak fonksyon flèch JavaScript! Dènye tip nan <code>Func</code> se toujou tip <b>retou</b> a.</p>`,
      `<p>En C#, on peut mettre une <b>méthode</b> dans une <b>variable</b> ! 2 types pour ça :</p>
       <pre>// Func&lt;entrées…, sortie&gt; : renvoie une valeur
Func&lt;int, int&gt; carre = x =&gt; x * x;
Func&lt;int, int, int&gt; ajoute = (a, b) =&gt; a + b;
Console.WriteLine(carre(5));       // 25

// Action&lt;entrées…&gt; : ne renvoie rien
Action&lt;string&gt; saluer = nom =&gt; Console.WriteLine($"Bonjour {nom}");
saluer("Ana");</pre>
       <p><code>x =&gt; x * x</code> est une <b>lambda</b> — comme les fonctions fléchées JavaScript ! Le dernier type de <code>Func</code> est toujours le type de <b>retour</b>.</p>`
    ),
    task: T(
      'Kreye <code>Func&lt;double, double&gt; avekTaks</code> ki ajoute 10% (<code>p * 1.10</code>), ak <code>Action&lt;string&gt; afiche</code> ki fè <code>Console.WriteLine</code>. Itilize yo ansanm pou afiche pri 100 ak taks.',
      'Crée <code>Func&lt;double, double&gt; avekTaks</code> qui ajoute 10 % (<code>p * 1.10</code>), et <code>Action&lt;string&gt; afiche</code> qui fait <code>Console.WriteLine</code>. Utilise-les ensemble pour afficher le prix 100 taxé.'
    ),
    hint: T('<code>afiche($"{avekTaks(100):F2}");</code>', '<code>afiche($"{avekTaks(100):F2}");</code>'),
    starter: CS_STARTER,
    solution: csProg({ main: 'Func<double, double> avekTaks = p => p * 1.10;\nAction<string> afiche = s => Console.WriteLine(s);\n\nafiche($"{avekTaks(100):F2}");' }),
    output: '110.00',
    check: need(
      R(/Func\s*<\s*double\s*,\s*double\s*>\s+avekTaks\s*=\s*\(?\s*\w+\s*\)?\s*=>/, 'Kreye <code>Func&lt;double, double&gt; avekTaks = p =&gt; …;</code>', 'Crée <code>Func&lt;double, double&gt; avekTaks = p =&gt; …;</code>'),
      R(/1\.1\b|1\.10\b|0\.1\b|0\.10\b/, 'Ajoute 10%: <code>p * 1.10</code>.', 'Ajoute 10 % : <code>p * 1.10</code>.'),
      R(/Action\s*<\s*string\s*>\s+afiche\s*=\s*\(?\s*\w+\s*\)?\s*=>\s*Console\.WriteLine/, 'Kreye <code>Action&lt;string&gt; afiche = s =&gt; Console.WriteLine(s);</code>', 'Crée <code>Action&lt;string&gt; afiche = s =&gt; Console.WriteLine(s);</code>'),
      R(/afiche\s*\([^;]*avekTaks\s*\(\s*100\s*\)/, 'Rele <code>afiche(…avekTaks(100)…)</code>.', 'Appelle <code>afiche(…avekTaks(100)…)</code>.')
    ),
    tips: T(`<li><code>Func&lt;int, string&gt;</code> = pran yon <code>int</code>, bay yon <code>string</code>.</li><li><code>Action</code> san paramèt = <code>() =&gt; …</code></li>`, `<li><code>Func&lt;int, string&gt;</code> = prend un <code>int</code>, renvoie un <code>string</code>.</li><li><code>Action</code> sans paramètre = <code>() =&gt; …</code></li>`),
    recap: T(`<li><code>Func&lt;…, R&gt;</code> retounen R; <code>Action&lt;…&gt;</code> pa retounen anyen.</li><li>Lambda: <code>x =&gt; …</code></li>`, `<li><code>Func&lt;…, R&gt;</code> renvoie R ; <code>Action&lt;…&gt;</code> ne renvoie rien.</li><li>Lambda : <code>x =&gt; …</code></li>`)
  },
  {
    id: 'cs-lambda',
    title: T('Lambda ak koleksyon', 'Lambdas et collections'),
    theory: T(
      `<p>Anpil metòd <code>List</code> pran yon lambda kòm paramèt:</p>
       <pre>var nonm = new List&lt;int&gt; { 5, 12, 8, 21, 3 };

var gwo = nonm.FindAll(n =&gt; n &gt; 7);       // [12, 8, 21]
int premye = nonm.Find(n =&gt; n &gt; 10);      // 12
bool genPè = nonm.Exists(n =&gt; n % 2 == 0); // True
nonm.RemoveAll(n =&gt; n &lt; 5);               // retire 3
nonm.ForEach(n =&gt; Console.WriteLine(n));  // afiche chak</pre>
       <p>Sa se <b>pwogramasyon fonksyonèl</b>: ou di <i>kisa</i> ou vle (kondisyon an), pa <i>kijan</i> pou pakouri lis la.</p>`,
      `<p>Beaucoup de méthodes de <code>List</code> prennent une lambda en paramètre :</p>
       <pre>var nombres = new List&lt;int&gt; { 5, 12, 8, 21, 3 };

var grands = nombres.FindAll(n =&gt; n &gt; 7);       // [12, 8, 21]
int premier = nombres.Find(n =&gt; n &gt; 10);        // 12
bool aPair = nombres.Exists(n =&gt; n % 2 == 0);   // True
nombres.RemoveAll(n =&gt; n &lt; 5);                  // retire 3
nombres.ForEach(n =&gt; Console.WriteLine(n));     // affiche chacun</pre>
       <p>C'est de la <b>programmation fonctionnelle</b> : on dit <i>ce qu'on</i> veut (la condition), pas <i>comment</i> parcourir la liste.</p>`
    ),
    task: T(
      'Ak <code>FindAll</code>, jwenn tout pri ki <b>&gt; 200</b>, epi afiche yo ak <code>ForEach</code>.',
      'Avec <code>FindAll</code>, trouve tous les prix <b>&gt; 200</b>, puis affiche-les avec <code>ForEach</code>.'
    ),
    hint: T('<code>var chè = pri.FindAll(p =&gt; p &gt; 200);</code> <code>chè.ForEach(p =&gt; Console.WriteLine(p));</code>', '<code>var chè = pri.FindAll(p =&gt; p &gt; 200);</code> <code>chè.ForEach(p =&gt; Console.WriteLine(p));</code>'),
    starter: csProg({ usings: ['System.Collections.Generic'], main: 'var pri = new List<int> { 150, 250, 75, 600, 300 };\n\n// ✍️' }),
    solution: csProg({ usings: ['System.Collections.Generic'], main: 'var pri = new List<int> { 150, 250, 75, 600, 300 };\n\nvar che = pri.FindAll(p => p > 200);\nche.ForEach(p => Console.WriteLine(p));' }),
    output: '250\n600\n300',
    check: need(
      R(/\.FindAll\s*\(\s*\(?\s*\w+\s*\)?\s*=>\s*\w+\s*>\s*200\s*\)/, 'Itilize <code>pri.FindAll(p =&gt; p &gt; 200)</code>.', 'Utilise <code>pri.FindAll(p =&gt; p &gt; 200)</code>.'),
      R(/\.ForEach\s*\(\s*\(?\s*\w+\s*\)?\s*=>\s*Console\.WriteLine/, 'Afiche ak <code>.ForEach(p =&gt; Console.WriteLine(p))</code>.', 'Affiche avec <code>.ForEach(p =&gt; Console.WriteLine(p))</code>.')
    ),
    tips: T(`<li><code>Find</code> retounen <code>default</code> (0 pou int, null pou objè) si li pa jwenn anyen.</li>`, `<li><code>Find</code> renvoie <code>default</code> (0 pour int, null pour objet) s'il ne trouve rien.</li>`),
    recap: T(`<li><code>FindAll</code>, <code>Find</code>, <code>Exists</code>, <code>RemoveAll</code>, <code>ForEach</code>.</li>`, `<li><code>FindAll</code>, <code>Find</code>, <code>Exists</code>, <code>RemoveAll</code>, <code>ForEach</code>.</li>`)
  },
  {
    id: 'cs-delegate',
    title: T('Delege (delegate)', 'Délégués (delegate)'),
    theory: T(
      `<p>Yon <code>delegate</code> se yon <b>tip</b> pou metòd — <code>Func</code> ak <code>Action</code> se delege ki deja fèt. Ou ka kreye pa w ak yon non ki gen sans:</p>
       <pre>delegate double Operasyon(double a, double b);

static double Aplike(double x, double y, Operasyon op)
{
    return op(x, y);
}

Aplike(6, 3, (a, b) =&gt; a + b);   // 9
Aplike(6, 3, (a, b) =&gt; a * b);   // 18</pre>
       <p>Ou <b>pase konpòtman</b> kòm paramèt! Metòd <code>Aplike</code> pa konnen ki operasyon l ap fè — se moun ki rele l la ki deside.</p>`,
      `<p>Un <code>delegate</code> est un <b>type</b> pour les méthodes — <code>Func</code> et <code>Action</code> sont des délégués prédéfinis. On peut créer le sien avec un nom parlant :</p>
       <pre>delegate double Operation(double a, double b);

static double Appliquer(double x, double y, Operation op)
{
    return op(x, y);
}

Appliquer(6, 3, (a, b) =&gt; a + b);   // 9
Appliquer(6, 3, (a, b) =&gt; a * b);   // 18</pre>
       <p>On <b>passe un comportement</b> en paramètre ! <code>Appliquer</code> ne sait pas quelle opération elle fait — c'est l'appelant qui décide.</p>`
    ),
    task: T(
      'Deklare <code>delegate double Operasyon(double a, double b);</code> (deyò Program). Ekri <code>static double Aplike(double x, double y, Operasyon op)</code>. Nan Main, afiche <code>Aplike(6, 3, …)</code> ak yon lambda adisyon ak yon lambda divizyon.',
      'Déclare <code>delegate double Operasyon(double a, double b);</code> (hors de Program). Écris <code>static double Aplike(double x, double y, Operasyon op)</code>. Dans Main, affiche <code>Aplike(6, 3, …)</code> avec une lambda d\'addition et une de division.'
    ),
    hint: T('<code>Console.WriteLine(Aplike(6, 3, (a, b) =&gt; a + b));</code>', '<code>Console.WriteLine(Aplike(6, 3, (a, b) =&gt; a + b));</code>'),
    starter: CS_STARTER,
    solution: csProg({ main: 'Console.WriteLine(Aplike(6, 3, (a, b) => a + b));\nConsole.WriteLine(Aplike(6, 3, (a, b) => a / b));', inside: 'static double Aplike(double x, double y, Operasyon op)\n{\n    return op(x, y);\n}', after: 'delegate double Operasyon(double a, double b);' }),
    output: '9\n2',
    check: need(
      R(/delegate\s+double\s+Operasyon\s*\(\s*double\s+\w+\s*,\s*double\s+\w+\s*\)\s*;/, 'Deklare <code>delegate double Operasyon(double a, double b);</code>', 'Déclare <code>delegate double Operasyon(double a, double b);</code>'),
      R(/static\s+double\s+Aplike\s*\(\s*double\s+(\w+)\s*,\s*double\s+(\w+)\s*,\s*Operasyon\s+(\w+)\s*\)/, 'Siyati a: <code>static double Aplike(double x, double y, Operasyon op)</code>', 'Signature : <code>static double Aplike(double x, double y, Operasyon op)</code>'),
      R(/return\s+op\s*\(\s*x\s*,\s*y\s*\)\s*;/, 'Nan <code>Aplike</code>: <code>return op(x, y);</code>', 'Dans <code>Aplike</code> : <code>return op(x, y);</code>'),
      R(inMain(/Aplike\s*\([^;]*=>\s*\w+\s*\+\s*\w+/), 'Teste ak yon lambda adisyon.', 'Teste avec une lambda d\'addition.'),
      R(inMain(/Aplike\s*\([^;]*=>\s*\w+\s*\/\s*\w+/), 'Teste ak yon lambda divizyon.', 'Teste avec une lambda de division.')
    ),
    tips: T(`<li>Lambda a dwe gen <b>menm siyati</b> ak delege a (2 <code>double</code> → <code>double</code>).</li>`, `<li>La lambda doit avoir la <b>même signature</b> que le délégué (2 <code>double</code> → <code>double</code>).</li>`),
    recap: T(`<li><code>delegate R Non(params);</code> = tip pou metòd.</li><li>Pase konpòtman kòm paramèt.</li>`, `<li><code>delegate R Nom(params);</code> = type de méthode.</li><li>Passer un comportement en paramètre.</li>`)
  },
  {
    id: 'cs-event',
    title: T('Evènman (event)', 'Événements (event)'),
    theory: T(
      `<p>Yon <b>evènman</b> pèmèt yon objè <b>avèti</b> lòt objè lè yon bagay rive — san l pa konnen kiyès yo ye. Se baz bouton nan aplikasyon, mesaj nan jwèt, elatriye.</p>
       <pre>class Revèy
{
    public event Action&lt;string&gt; Sonnen;    // evènman an

    public void Deklanche(string lè)
    {
        Sonnen?.Invoke($"⏰ Li {lè}!");     // avèti tout abonnen yo
    }
}

var r = new Revèy();
r.Sonnen += mesaj =&gt; Console.WriteLine(mesaj);   // abòne (+=)
r.Deklanche("6è");</pre>
       <p><code>?.Invoke</code> evite yon erè si pa gen pesonn ki abòne.</p>`,
      `<p>Un <b>événement</b> permet à un objet de <b>prévenir</b> d'autres objets quand quelque chose arrive — sans savoir qui ils sont. C'est la base des boutons dans les applis, des messages dans les jeux, etc.</p>
       <pre>class Reveil
{
    public event Action&lt;string&gt; Sonne;    // l'événement

    public void Declencher(string heure)
    {
        Sonne?.Invoke($"⏰ Il est {heure} !");  // prévient tous les abonnés
    }
}

var r = new Reveil();
r.Sonne += message =&gt; Console.WriteLine(message);   // s'abonner (+=)
r.Declencher("6h");</pre>
       <p><code>?.Invoke</code> évite une erreur si personne n'est abonné.</p>`
    ),
    task: T(
      'Nan <code>class Bouton</code>, ajoute <code>public event Action Klike;</code> ak metòd <code>Peze()</code> ki fè <code>Klike?.Invoke();</code>. Nan Main, abòne yon lambda ki afiche <b>"Bouton an peze!"</b>, epi rele <code>Peze()</code>.',
      'Dans <code>class Bouton</code>, ajoute <code>public event Action Klike;</code> et la méthode <code>Peze()</code> qui fait <code>Klike?.Invoke();</code>. Dans Main, abonne une lambda qui affiche <b>"Bouton pressé !"</b>, puis appelle <code>Peze()</code>.'
    ),
    hint: T('<code>b.Klike += () =&gt; Console.WriteLine("Bouton an peze!");</code>', '<code>b.Klike += () =&gt; Console.WriteLine("Bouton pressé !");</code>'),
    starter: csProg({ main: 'var b = new Bouton();\n\n// ✍️', after: 'class Bouton\n{\n    // ✍️\n}' }),
    solution: csProg({ main: 'var b = new Bouton();\n\nb.Klike += () => Console.WriteLine("Bouton an peze!");\nb.Peze();', after: 'class Bouton\n{\n    public event Action Klike;\n\n    public void Peze()\n    {\n        Klike?.Invoke();\n    }\n}' }),
    output: ({ code }) => (code.match(/Klike\s*\+=\s*\(\s*\)\s*=>\s*Console\.WriteLine\s*\(\s*"([^"]*)"/) || [])[1] || '',
    check: need(
      R(/public\s+event\s+Action\s+Klike\s*;/, 'Ajoute <code>public event Action Klike;</code>', 'Ajoute <code>public event Action Klike;</code>'),
      R(/void\s+Peze\s*\(\s*\)\s*\{[^}]*Klike\s*\?\.\s*Invoke\s*\(\s*\)/, 'Nan <code>Peze()</code>: <code>Klike?.Invoke();</code>', 'Dans <code>Peze()</code> : <code>Klike?.Invoke();</code>'),
      R(inMain(/\.Klike\s*\+=\s*\(\s*\)\s*=>/), 'Abòne: <code>b.Klike += () =&gt; …;</code>', 'Abonne-toi : <code>b.Klike += () =&gt; …;</code>'),
      R(inMain(/\.Peze\s*\(\s*\)\s*;/), 'Rele <code>b.Peze();</code>', 'Appelle <code>b.Peze();</code>')
    ),
    tips: T(`<li>Abòne ak <code>+=</code>, dezabòne ak <code>-=</code>.</li><li>Deyò klas la, ou pa ka fè <code>b.Klike()</code> dirèkteman — se pwoteksyon <code>event</code> la.</li>`, `<li>On s'abonne avec <code>+=</code>, on se désabonne avec <code>-=</code>.</li><li>Hors de la classe, impossible d'appeler <code>b.Klike()</code> directement — c'est la protection d'<code>event</code>.</li>`),
    recap: T(`<li><code>public event Action X;</code></li><li><code>X?.Invoke()</code>, <code>obj.X += …</code></li>`, `<li><code>public event Action X;</code></li><li><code>X?.Invoke()</code>, <code>obj.X += …</code></li>`)
  },
  {
    id: 'cs-extension',
    title: T('Metòd ekstansyon', 'Méthodes d\'extension'),
    theory: T(
      `<p>Yon <b>metòd ekstansyon</b> pèmèt ou <b>ajoute</b> yon metòd nan yon tip ki deja egziste (menm <code>string</code> oswa <code>int</code>!) san modifye l:</p>
       <pre>static class Zouti
{
    public static bool EstPè(this int n) =&gt; n % 2 == 0;

    public static string Majiskil1(this string s) =&gt;
        char.ToUpper(s[0]) + s.Substring(1);
}

Console.WriteLine(4.EstPè());              // True
Console.WriteLine("ayiti".Majiskil1());    // Ayiti</pre>
       <p>Règ: metòd la dwe <code>static</code>, nan yon klas <code>static</code>, epi premye paramèt la gen <code>this</code> devan l. Se konsa LINQ mache!</p>`,
      `<p>Une <b>méthode d'extension</b> permet d'<b>ajouter</b> une méthode à un type existant (même <code>string</code> ou <code>int</code> !) sans le modifier :</p>
       <pre>static class Outils
{
    public static bool EstPair(this int n) =&gt; n % 2 == 0;

    public static string Majuscule1(this string s) =&gt;
        char.ToUpper(s[0]) + s.Substring(1);
}

Console.WriteLine(4.EstPair());             // True
Console.WriteLine("haiti".Majuscule1());    // Haiti</pre>
       <p>Règles : la méthode est <code>static</code>, dans une classe <code>static</code>, et son premier paramètre a <code>this</code> devant. C'est comme ça que LINQ fonctionne !</p>`
    ),
    task: T(
      'Nan <code>static class Zouti</code>, ekri <code>public static string Repete(this string s, int fwa)</code> ki retounen <code>s</code> repete <code>fwa</code> fwa. Teste: <code>"Ha".Repete(3)</code> → <b>HaHaHa</b>.',
      'Dans <code>static class Zouti</code>, écris <code>public static string Repete(this string s, int fwa)</code> qui renvoie <code>s</code> répété <code>fwa</code> fois. Teste : <code>"Ha".Repete(3)</code> → <b>HaHaHa</b>.'
    ),
    hint: T('Ak yon bouk: <code>string r = ""; for (int i = 0; i &lt; fwa; i++) r += s; return r;</code>', 'Avec une boucle : <code>string r = ""; for (int i = 0; i &lt; fwa; i++) r += s; return r;</code>'),
    starter: csProg({ after: 'static class Zouti\n{\n    // ✍️\n}' }),
    solution: csProg({ main: 'Console.WriteLine("Ha".Repete(3));', after: 'static class Zouti\n{\n    public static string Repete(this string s, int fwa)\n    {\n        string r = "";\n        for (int i = 0; i < fwa; i++)\n        {\n            r += s;\n        }\n        return r;\n    }\n}' }),
    output: 'HaHaHa',
    check: need(
      R(/static\s+class\s+Zouti/, 'Klas la dwe <code>static class Zouti</code>.', 'La classe doit être <code>static class Zouti</code>.'),
      R(/public\s+static\s+string\s+Repete\s*\(\s*this\s+string\s+\w+\s*,\s*int\s+\w+\s*\)/, 'Siyati a: <code>public static string Repete(this string s, int fwa)</code>', 'Signature : <code>public static string Repete(this string s, int fwa)</code>'),
      R(/\bfor\s*\(|string\.Concat|Enumerable\.Repeat|new\s+StringBuilder/, 'Repete tèks la ak yon bouk.', 'Répète le texte avec une boucle.'),
      R(inMain(/"[^"]*"\.Repete\s*\(\s*\d+\s*\)/), 'Teste <code>"Ha".Repete(3)</code> nan Main.', 'Teste <code>"Ha".Repete(3)</code> dans Main.')
    ),
    tips: T(`<li>San <code>this</code> devan premye paramèt la, se yon metòd static nòmal.</li>`, `<li>Sans <code>this</code> devant le premier paramètre, c'est une méthode static normale.</li>`),
    recap: T(`<li><code>static class</code> + <code>static</code> metòd + <code>this T x</code>.</li>`, `<li><code>static class</code> + méthode <code>static</code> + <code>this T x</code>.</li>`)
  },

  /* ---------- Semèn 27: LINQ ---------- */
  {
    id: 'cs-linq-where',
    title: T('LINQ: Where', 'LINQ : Where'),
    theory: T(
      `<p><b>LINQ</b> (Language Integrated Query) se youn nan zouti ki pi pwisan nan C#: li pèmèt ou <b>poze kesyon</b> sou done yo, tankou yon baz done.</p>
       <pre>using System.Linq;

var notes = new List&lt;int&gt; { 85, 42, 90, 67, 30 };

var pase = notes.Where(n =&gt; n &gt;= 50).ToList();
// [85, 90, 67]</pre>
       <p><code>Where</code> = <code>filter</code> nan JavaScript. <code>.ToList()</code> konvèti rezilta a an <code>List</code>. LINQ mache sou <b>tout</b> koleksyon: tablo, List, Dictionary, rezilta baz done…</p>`,
      `<p><b>LINQ</b> (Language Integrated Query) est l'un des outils les plus puissants de C# : il permet d'<b>interroger</b> les données, comme une base de données.</p>
       <pre>using System.Linq;

var notes = new List&lt;int&gt; { 85, 42, 90, 67, 30 };

var admis = notes.Where(n =&gt; n &gt;= 50).ToList();
// [85, 90, 67]</pre>
       <p><code>Where</code> = le <code>filter</code> de JavaScript. <code>.ToList()</code> convertit le résultat en <code>List</code>. LINQ marche sur <b>toutes</b> les collections : tableaux, List, Dictionary, résultats de base de données…</p>`
    ),
    task: T(
      'Ak <code>Where</code>, jwenn tout vil ki gen plis pase <b>5 lèt</b>, epi afiche yo ak <code>string.Join(", ", …)</code>.',
      'Avec <code>Where</code>, trouve toutes les villes de plus de <b>5 lettres</b>, puis affiche-les avec <code>string.Join(", ", …)</code>.'
    ),
    hint: T('<code>var long = vil.Where(v =&gt; v.Length &gt; 5);</code>', '<code>var longues = vil.Where(v =&gt; v.Length &gt; 5);</code>'),
    starter: csProg({ usings: ['System.Collections.Generic', 'System.Linq'], main: 'var vil = new List<string> { "Okap", "Jakmèl", "Okay", "Gonayiv", "Jeremi" };\n\n// ✍️' }),
    solution: csProg({ usings: ['System.Collections.Generic', 'System.Linq'], main: 'var vil = new List<string> { "Okap", "Jakmèl", "Okay", "Gonayiv", "Jeremi" };\n\nvar gwoVil = vil.Where(v => v.Length > 5).ToList();\nConsole.WriteLine(string.Join(", ", gwoVil));' }),
    output: 'Jakmèl, Gonayiv, Jeremi',
    check: need(
      R(/using\s+System\.Linq\s*;/, 'erè CS1061: ajoute <code>using System.Linq;</code>', 'erreur CS1061 : ajoute <code>using System.Linq;</code>'),
      R(/\.Where\s*\(\s*\(?\s*(\w+)\s*\)?\s*=>\s*\1\.Length\s*>\s*5\s*\)/, 'Itilize <code>vil.Where(v =&gt; v.Length &gt; 5)</code>.', 'Utilise <code>vil.Where(v =&gt; v.Length &gt; 5)</code>.'),
      R(/string\.Join\s*\(\s*", "\s*,/, 'Afiche ak <code>string.Join(", ", …)</code>.', 'Affiche avec <code>string.Join(", ", …)</code>.')
    ),
    tips: T(`<li>San <code>using System.Linq;</code>, <code>Where</code> pa egziste.</li><li>LINQ <b>pa modifye</b> koleksyon orijinal la.</li>`, `<li>Sans <code>using System.Linq;</code>, <code>Where</code> n'existe pas.</li><li>LINQ <b>ne modifie pas</b> la collection d'origine.</li>`),
    recap: T(`<li><code>using System.Linq;</code></li><li><code>.Where(x =&gt; kond)</code> = filtre.</li>`, `<li><code>using System.Linq;</code></li><li><code>.Where(x =&gt; cond)</code> = filtrer.</li>`)
  },
  {
    id: 'cs-linq-select',
    title: T('LINQ: Select', 'LINQ : Select'),
    theory: T(
      `<p><code>Select</code> <b>transfòme</b> chak eleman (= <code>map</code> nan JavaScript):</p>
       <pre>var pri = new[] { 100, 250, 400 };
var avekTaks = pri.Select(p =&gt; p * 1.1);

var elev = new List&lt;Elev&gt; { … };
var non = elev.Select(e =&gt; e.Non);               // sèlman non yo
var rezime = elev.Select(e =&gt; $"{e.Non}: {e.Nòt}");</pre>
       <p>Ou ka <b>chèn</b> metòd LINQ yo — yo li tankou yon fraz:</p>
       <pre>var nonElevKiPase = elev
    .Where(e =&gt; e.Nòt &gt;= 50)
    .Select(e =&gt; e.Non)
    .ToList();</pre>`,
      `<p><code>Select</code> <b>transforme</b> chaque élément (= le <code>map</code> de JavaScript) :</p>
       <pre>var prix = new[] { 100, 250, 400 };
var taxes = prix.Select(p =&gt; p * 1.1);

var eleves = new List&lt;Eleve&gt; { … };
var noms = eleves.Select(e =&gt; e.Nom);               // seulement les noms
var resume = eleves.Select(e =&gt; $"{e.Nom} : {e.Note}");</pre>
       <p>On peut <b>enchaîner</b> les méthodes LINQ — ça se lit comme une phrase :</p>
       <pre>var nomsAdmis = eleves
    .Where(e =&gt; e.Note &gt;= 50)
    .Select(e =&gt; e.Nom)
    .ToList();</pre>`
    ),
    task: T(
      'Ak <code>Where</code> + <code>Select</code>, jwenn <b>non</b> elèv ki gen nòt <b>&gt;= 50</b>, epi afiche yo ak <code>string.Join(", ", …)</code>.',
      'Avec <code>Where</code> + <code>Select</code>, trouve les <b>noms</b> des élèves ayant <b>&gt;= 50</b>, puis affiche-les avec <code>string.Join(", ", …)</code>.'
    ),
    hint: T('<code>elev.Where(e =&gt; e.Not &gt;= 50).Select(e =&gt; e.Non)</code>', '<code>elev.Where(e =&gt; e.Not &gt;= 50).Select(e =&gt; e.Non)</code>'),
    starter: csProg({ usings: ['System.Collections.Generic', 'System.Linq'], main: 'var elev = new List<Elev>\n{\n    new Elev("Ana", 80),\n    new Elev("Jak", 40),\n    new Elev("Lise", 95)\n};\n\n// ✍️', after: 'record Elev(string Non, int Not);' }),
    solution: csProg({ usings: ['System.Collections.Generic', 'System.Linq'], main: 'var elev = new List<Elev>\n{\n    new Elev("Ana", 80),\n    new Elev("Jak", 40),\n    new Elev("Lise", 95)\n};\n\nvar pase = elev\n    .Where(e => e.Not >= 50)\n    .Select(e => e.Non);\n\nConsole.WriteLine(string.Join(", ", pase));', after: 'record Elev(string Non, int Not);' }),
    output: 'Ana, Lise',
    check: need(
      R(/\.Where\s*\(\s*\(?\s*(\w+)\s*\)?\s*=>\s*\1\.Not\s*>=\s*50\s*\)/, 'Filtre ak <code>.Where(e =&gt; e.Not &gt;= 50)</code>.', 'Filtre avec <code>.Where(e =&gt; e.Not &gt;= 50)</code>.'),
      R(/\.Select\s*\(\s*\(?\s*(\w+)\s*\)?\s*=>\s*\1\.Non\s*\)/, 'Pran non yo ak <code>.Select(e =&gt; e.Non)</code>.', 'Prends les noms avec <code>.Select(e =&gt; e.Non)</code>.'),
      R(/string\.Join\s*\(/, 'Afiche ak <code>string.Join(", ", …)</code>.', 'Affiche avec <code>string.Join(", ", …)</code>.')
    ),
    tips: T(`<li>Mete <code>Where</code> <b>anvan</b> <code>Select</code> pou w ka toujou aksede tout pwopriyete yo.</li>`, `<li>Mets <code>Where</code> <b>avant</b> <code>Select</code> pour avoir encore accès à toutes les propriétés.</li>`),
    recap: T(`<li><code>.Select(x =&gt; …)</code> = transfòme.</li><li>Chèn: <code>.Where().Select().ToList()</code></li>`, `<li><code>.Select(x =&gt; …)</code> = transformer.</li><li>Chaîner : <code>.Where().Select().ToList()</code></li>`)
  },
  {
    id: 'cs-linq-order',
    title: T('LINQ: OrderBy', 'LINQ : OrderBy'),
    theory: T(
      `<pre>var pwodwi = new List&lt;Pwodwi&gt; { … };

pwodwi.OrderBy(p =&gt; p.Pri)              // pi bon mache an premye
pwodwi.OrderByDescending(p =&gt; p.Pri)    // pi chè an premye
pwodwi.OrderBy(p =&gt; p.Kategori)
      .ThenBy(p =&gt; p.Non)               // klase 2yèm nivo

pwodwi.OrderByDescending(p =&gt; p.Pri).Take(3)  // TOP 3
pwodwi.Skip(10).Take(10)                       // paj 2 (pagination)</pre>
       <p><code>Take</code> ak <code>Skip</code> itil anpil pou afiche rezilta paj pa paj sou yon sit.</p>`,
      `<pre>var produits = new List&lt;Produit&gt; { … };

produits.OrderBy(p =&gt; p.Prix)              // le moins cher d'abord
produits.OrderByDescending(p =&gt; p.Prix)    // le plus cher d'abord
produits.OrderBy(p =&gt; p.Categorie)
        .ThenBy(p =&gt; p.Nom)                // tri de 2e niveau

produits.OrderByDescending(p =&gt; p.Prix).Take(3)  // TOP 3
produits.Skip(10).Take(10)                       // page 2 (pagination)</pre>
       <p><code>Take</code> et <code>Skip</code> sont très utiles pour afficher des résultats page par page sur un site.</p>`
    ),
    task: T(
      'Afiche <b>TOP 2</b> jwè ki gen plis pwen: klase ak <code>OrderByDescending</code>, pran 2 ak <code>Take</code>, epi afiche <code>$"{j.Non}: {j.Pwen}"</code> pou chak.',
      'Affiche le <b>TOP 2</b> des joueurs ayant le plus de points : trie avec <code>OrderByDescending</code>, prends-en 2 avec <code>Take</code>, puis affiche <code>$"{j.Non} : {j.Pwen}"</code> pour chacun.'
    ),
    hint: T('<code>foreach (var j in jwe.OrderByDescending(j =&gt; j.Pwen).Take(2))</code>', '<code>foreach (var j in jwe.OrderByDescending(j =&gt; j.Pwen).Take(2))</code>'),
    starter: csProg({ usings: ['System.Collections.Generic', 'System.Linq'], main: 'var jwe = new List<Jwe>\n{\n    new Jwe("Ana", 120),\n    new Jwe("Jak", 340),\n    new Jwe("Lise", 210)\n};\n\n// ✍️', after: 'record Jwe(string Non, int Pwen);' }),
    solution: csProg({ usings: ['System.Collections.Generic', 'System.Linq'], main: 'var jwe = new List<Jwe>\n{\n    new Jwe("Ana", 120),\n    new Jwe("Jak", 340),\n    new Jwe("Lise", 210)\n};\n\nforeach (var j in jwe.OrderByDescending(j => j.Pwen).Take(2))\n{\n    Console.WriteLine($"{j.Non}: {j.Pwen}");\n}', after: 'record Jwe(string Non, int Pwen);' }),
    output: 'Jak: 340\nLise: 210',
    check: need(
      R(/\.OrderByDescending\s*\(\s*\(?\s*(\w+)\s*\)?\s*=>\s*\1\.Pwen\s*\)/, 'Klase ak <code>.OrderByDescending(j =&gt; j.Pwen)</code>.', 'Trie avec <code>.OrderByDescending(j =&gt; j.Pwen)</code>.'),
      R(/\.Take\s*\(\s*2\s*\)/, 'Pran 2 ak <code>.Take(2)</code>.', 'Prends-en 2 avec <code>.Take(2)</code>.'),
      R(/foreach\s*\(/, 'Afiche chak jwè ak <code>foreach</code>.', 'Affiche chaque joueur avec <code>foreach</code>.')
    ),
    tips: T(`<li><code>OrderBy</code> pa modifye lis la (diferan de <code>List.Sort()</code>).</li>`, `<li><code>OrderBy</code> ne modifie pas la liste (contrairement à <code>List.Sort()</code>).</li>`),
    recap: T(`<li><code>OrderBy</code>, <code>OrderByDescending</code>, <code>ThenBy</code>, <code>Take</code>, <code>Skip</code>.</li>`, `<li><code>OrderBy</code>, <code>OrderByDescending</code>, <code>ThenBy</code>, <code>Take</code>, <code>Skip</code>.</li>`)
  },
  {
    id: 'cs-linq-agg',
    title: T('LINQ: Sum, Average, Max, Any…', 'LINQ : Sum, Average, Max, Any…'),
    theory: T(
      `<p>Metòd LINQ ki bay <b>yon sèl</b> rezilta:</p>
       <pre>var notes = new List&lt;int&gt; { 85, 42, 90, 67 };

notes.Count()                  // 4
notes.Count(n =&gt; n &gt;= 50)      // 3
notes.Sum()                    // 284
notes.Average()                // 71
notes.Max()  /  notes.Min()    // 90 / 42
notes.Any(n =&gt; n &lt; 50)         // True  — omwen youn?
notes.All(n =&gt; n &gt; 0)          // True  — tout?
notes.First(n =&gt; n &gt; 80)       // 85
notes.FirstOrDefault(n =&gt; n &gt; 100)  // 0 (pa jwenn → default)</pre>
       <p>Ak objè: <code>pwodwi.Sum(p =&gt; p.Pri)</code>, <code>elev.Average(e =&gt; e.Nòt)</code>.</p>`,
      `<p>Méthodes LINQ qui renvoient <b>un seul</b> résultat :</p>
       <pre>var notes = new List&lt;int&gt; { 85, 42, 90, 67 };

notes.Count()                  // 4
notes.Count(n =&gt; n &gt;= 50)      // 3
notes.Sum()                    // 284
notes.Average()                // 71
notes.Max()  /  notes.Min()    // 90 / 42
notes.Any(n =&gt; n &lt; 50)         // True  — au moins un ?
notes.All(n =&gt; n &gt; 0)          // True  — tous ?
notes.First(n =&gt; n &gt; 80)       // 85
notes.FirstOrDefault(n =&gt; n &gt; 100)  // 0 (introuvable → default)</pre>
       <p>Avec des objets : <code>produits.Sum(p =&gt; p.Prix)</code>, <code>eleves.Average(e =&gt; e.Note)</code>.</p>`
    ),
    task: T(
      'Ak LINQ, afiche: <b>1)</b> total pri yo (<code>Sum</code>), <b>2)</b> pri mwayen an ak <code>:F2</code> (<code>Average</code>), <b>3)</b> èske gen yon pwodwi ki koute plis pase 500 (<code>Any</code>).',
      'Avec LINQ, affiche : <b>1)</b> le total des prix (<code>Sum</code>), <b>2)</b> le prix moyen avec <code>:F2</code> (<code>Average</code>), <b>3)</b> s\'il existe un produit à plus de 500 (<code>Any</code>).'
    ),
    hint: T('<code>pwodwi.Sum(p =&gt; p.Pri)</code>, <code>pwodwi.Average(p =&gt; p.Pri)</code>, <code>pwodwi.Any(p =&gt; p.Pri &gt; 500)</code>', '<code>pwodwi.Sum(p =&gt; p.Pri)</code>, <code>pwodwi.Average(p =&gt; p.Pri)</code>, <code>pwodwi.Any(p =&gt; p.Pri &gt; 500)</code>'),
    starter: csProg({ usings: ['System.Collections.Generic', 'System.Linq'], main: 'var pwodwi = new List<Pwodwi>\n{\n    new Pwodwi("Diri", 250),\n    new Pwodwi("Lwil", 600),\n    new Pwodwi("Sik", 150)\n};\n\n// ✍️', after: 'record Pwodwi(string Non, double Pri);' }),
    solution: csProg({ usings: ['System.Collections.Generic', 'System.Linq'], main: 'var pwodwi = new List<Pwodwi>\n{\n    new Pwodwi("Diri", 250),\n    new Pwodwi("Lwil", 600),\n    new Pwodwi("Sik", 150)\n};\n\nConsole.WriteLine(pwodwi.Sum(p => p.Pri));\nConsole.WriteLine($"{pwodwi.Average(p => p.Pri):F2}");\nConsole.WriteLine(pwodwi.Any(p => p.Pri > 500));', after: 'record Pwodwi(string Non, double Pri);' }),
    output: '1000\n333.33\nTrue',
    check: need(
      R(/\.Sum\s*\(\s*\(?\s*(\w+)\s*\)?\s*=>\s*\1\.Pri\s*\)/, 'Itilize <code>pwodwi.Sum(p =&gt; p.Pri)</code>.', 'Utilise <code>pwodwi.Sum(p =&gt; p.Pri)</code>.'),
      R(/\.Average\s*\(\s*\(?\s*(\w+)\s*\)?\s*=>\s*\1\.Pri\s*\)/, 'Itilize <code>pwodwi.Average(p =&gt; p.Pri)</code>.', 'Utilise <code>pwodwi.Average(p =&gt; p.Pri)</code>.'),
      R(/:\s*F2\s*\}/, 'Fòmate mwayèn nan ak <code>:F2</code>.', 'Formate la moyenne avec <code>:F2</code>.'),
      R(/\.Any\s*\(\s*\(?\s*(\w+)\s*\)?\s*=>\s*\1\.Pri\s*>\s*500\s*\)/, 'Itilize <code>pwodwi.Any(p =&gt; p.Pri &gt; 500)</code>.', 'Utilise <code>pwodwi.Any(p =&gt; p.Pri &gt; 500)</code>.')
    ),
    tips: T(`<li><code>First</code> sou yon lis vid oswa san rezilta → eksepsyon. <code>FirstOrDefault</code> pa janm kraze.</li><li><code>Average</code> sou yon lis vid → eksepsyon.</li>`, `<li><code>First</code> sur une liste vide ou sans résultat → exception. <code>FirstOrDefault</code> ne plante jamais.</li><li><code>Average</code> sur une liste vide → exception.</li>`),
    recap: T(`<li><code>Count</code>, <code>Sum</code>, <code>Average</code>, <code>Max</code>, <code>Min</code>, <code>Any</code>, <code>All</code>, <code>First(OrDefault)</code>.</li>`, `<li><code>Count</code>, <code>Sum</code>, <code>Average</code>, <code>Max</code>, <code>Min</code>, <code>Any</code>, <code>All</code>, <code>First(OrDefault)</code>.</li>`)
  },
  {
    id: 'cs-linq-group',
    title: T('LINQ: GroupBy', 'LINQ : GroupBy'),
    theory: T(
      `<p><code>GroupBy</code> <b>gwoupe</b> eleman ki gen menm valè pou yon kle:</p>
       <pre>var vant = new List&lt;Vant&gt;
{
    new Vant("Okap", 500), new Vant("Okay", 300), new Vant("Okap", 200)
};

foreach (var g in vant.GroupBy(v =&gt; v.Vil))
{
    Console.WriteLine($"{g.Key}: {g.Sum(v =&gt; v.Montan)}");
}
// Okap: 700
// Okay: 300</pre>
       <p>Chak gwoup <code>g</code> gen yon <code>.Key</code> (valè ki pataje a) epi li se li menm yon lis eleman — ou ka itilize <code>Count()</code>, <code>Sum()</code>… sou li. Se menm jan ak <code>GROUP BY</code> nan SQL.</p>`,
      `<p><code>GroupBy</code> <b>regroupe</b> les éléments ayant la même valeur pour une clé :</p>
       <pre>var ventes = new List&lt;Vente&gt;
{
    new Vente("Cap", 500), new Vente("Cayes", 300), new Vente("Cap", 200)
};

foreach (var g in ventes.GroupBy(v =&gt; v.Ville))
{
    Console.WriteLine($"{g.Key} : {g.Sum(v =&gt; v.Montant)}");
}
// Cap : 700
// Cayes : 300</pre>
       <p>Chaque groupe <code>g</code> a une <code>.Key</code> (la valeur commune) et est lui-même une liste d'éléments — on peut utiliser <code>Count()</code>, <code>Sum()</code>… dessus. C'est comme <code>GROUP BY</code> en SQL.</p>`
    ),
    task: T(
      'Gwoupe elèv yo pa <code>Klas</code> ak <code>GroupBy</code>, epi pou chak gwoup afiche <code>$"{g.Key}: {g.Count()} elèv"</code>.',
      'Regroupe les élèves par <code>Klas</code> avec <code>GroupBy</code>, puis pour chaque groupe affiche <code>$"{g.Key} : {g.Count()} élèves"</code>.'
    ),
    hint: T('<code>foreach (var g in elev.GroupBy(e =&gt; e.Klas))</code>', '<code>foreach (var g in elev.GroupBy(e =&gt; e.Klas))</code>'),
    starter: csProg({ usings: ['System.Collections.Generic', 'System.Linq'], main: 'var elev = new List<Elev>\n{\n    new Elev("Ana", "NS1"),\n    new Elev("Jak", "NS2"),\n    new Elev("Lise", "NS1"),\n    new Elev("Paul", "NS1")\n};\n\n// ✍️', after: 'record Elev(string Non, string Klas);' }),
    solution: csProg({ usings: ['System.Collections.Generic', 'System.Linq'], main: 'var elev = new List<Elev>\n{\n    new Elev("Ana", "NS1"),\n    new Elev("Jak", "NS2"),\n    new Elev("Lise", "NS1"),\n    new Elev("Paul", "NS1")\n};\n\nforeach (var g in elev.GroupBy(e => e.Klas))\n{\n    Console.WriteLine($"{g.Key}: {g.Count()} elèv");\n}', after: 'record Elev(string Non, string Klas);' }),
    output: 'NS1: 3 elèv\nNS2: 1 elèv',
    check: need(
      R(/\.GroupBy\s*\(\s*\(?\s*(\w+)\s*\)?\s*=>\s*\1\.Klas\s*\)/, 'Gwoupe ak <code>.GroupBy(e =&gt; e.Klas)</code>.', 'Regroupe avec <code>.GroupBy(e =&gt; e.Klas)</code>.'),
      R(/foreach\s*\(\s*var\s+(\w+)\s+in/, 'Pakouri gwoup yo ak <code>foreach (var g in …)</code>.', 'Parcours les groupes avec <code>foreach (var g in …)</code>.'),
      R(/\{\s*\w+\.Key\s*\}/, 'Afiche <code>{g.Key}</code>.', 'Affiche <code>{g.Key}</code>.'),
      R(/\{\s*\w+\.Count\s*\(\s*\)\s*\}/, 'Afiche <code>{g.Count()}</code>.', 'Affiche <code>{g.Count()}</code>.')
    ),
    tips: T(`<li>Pou yon gwoup, se <code>Count()</code> ak parantèz (se yon metòd LINQ), pa <code>Count</code>.</li>`, `<li>Pour un groupe, c'est <code>Count()</code> avec parenthèses (méthode LINQ), pas <code>Count</code>.</li>`),
    recap: T(`<li><code>GroupBy(x =&gt; kle)</code> → gwoup ak <code>.Key</code>.</li>`, `<li><code>GroupBy(x =&gt; cle)</code> → groupes avec <code>.Key</code>.</li>`)
  },

  /* ---------- Semèn 28: Dat, fichye, JSON ---------- */
  {
    id: 'cs-datetime',
    title: T('DateTime ak TimeSpan', 'DateTime et TimeSpan'),
    theory: T(
      `<pre>DateTime kounye a = DateTime.Now;
DateTime jodi = DateTime.Today;               // san lè
DateTime endepandans = new DateTime(1804, 1, 1);

DateTime nanSemenn = jodi.AddDays(7);
Console.WriteLine(jodi.ToString("dd/MM/yyyy"));   // 10/10/2026
Console.WriteLine(jodi.DayOfWeek);                // Saturday

TimeSpan diferans = jodi - endepandans;
Console.WriteLine(diferans.Days);                 // kantite jou</pre>
       <p>Fòma komen: <code>dd</code> jou, <code>MM</code> mwa, <code>yyyy</code> ane, <code>HH:mm</code> lè. ⚠️ <code>mm</code> (miniskil) = minit, <code>MM</code> = mwa!</p>`,
      `<pre>DateTime maintenant = DateTime.Now;
DateTime aujourdhui = DateTime.Today;           // sans l'heure
DateTime independance = new DateTime(1804, 1, 1);

DateTime dansUneSemaine = aujourdhui.AddDays(7);
Console.WriteLine(aujourdhui.ToString("dd/MM/yyyy"));  // 10/10/2026
Console.WriteLine(aujourdhui.DayOfWeek);               // Saturday

TimeSpan difference = aujourdhui - independance;
Console.WriteLine(difference.Days);                    // nombre de jours</pre>
       <p>Formats courants : <code>dd</code> jour, <code>MM</code> mois, <code>yyyy</code> année, <code>HH:mm</code> heure. ⚠️ <code>mm</code> (minuscules) = minutes, <code>MM</code> = mois !</p>`
    ),
    task: T(
      'Kreye <code>DateTime fet = new DateTime(2026, 12, 25);</code> ak <code>DateTime jodi = new DateTime(2026, 10, 10);</code>. Kalkile <code>TimeSpan res = fet - jodi;</code> epi afiche <code>$"Nwèl nan {res.Days} jou"</code>.',
      'Crée <code>DateTime fet = new DateTime(2026, 12, 25);</code> et <code>DateTime jodi = new DateTime(2026, 10, 10);</code>. Calcule <code>TimeSpan res = fet - jodi;</code> puis affiche <code>$"Noël dans {res.Days} jours"</code>.'
    ),
    hint: T('<code>TimeSpan res = fet - jodi;</code> → <code>res.Days</code>', '<code>TimeSpan res = fet - jodi;</code> → <code>res.Days</code>'),
    starter: CS_STARTER,
    solution: csProg({ main: 'DateTime fet = new DateTime(2026, 12, 25);\nDateTime jodi = new DateTime(2026, 10, 10);\n\nTimeSpan res = fet - jodi;\nConsole.WriteLine($"Nwèl nan {res.Days} jou");' }),
    output: 'Nwèl nan 76 jou',
    check: need(
      R(/DateTime\s+fet\s*=\s*new\s+DateTime\s*\(\s*2026\s*,\s*12\s*,\s*25\s*\)\s*;/, 'Kreye <code>DateTime fet = new DateTime(2026, 12, 25);</code>', 'Crée <code>DateTime fet = new DateTime(2026, 12, 25);</code>'),
      R(/DateTime\s+jodi\s*=\s*new\s+DateTime\s*\(\s*2026\s*,\s*10\s*,\s*10\s*\)\s*;/, 'Kreye <code>DateTime jodi = new DateTime(2026, 10, 10);</code>', 'Crée <code>DateTime jodi = new DateTime(2026, 10, 10);</code>'),
      R(/(TimeSpan|var)\s+res\s*=\s*fet\s*-\s*jodi\s*;/, 'Kalkile <code>TimeSpan res = fet - jodi;</code>', 'Calcule <code>TimeSpan res = fet - jodi;</code>'),
      R(/\{\s*res\.Days\s*\}/, 'Afiche <code>{res.Days}</code>.', 'Affiche <code>{res.Days}</code>.')
    ),
    tips: T(`<li>Lòd paramèt yo: <code>new DateTime(ane, mwa, jou)</code>.</li><li><code>res.Days</code> (jou konplè) vs <code>res.TotalDays</code> (ak desimal).</li>`, `<li>Ordre des paramètres : <code>new DateTime(année, mois, jour)</code>.</li><li><code>res.Days</code> (jours entiers) vs <code>res.TotalDays</code> (avec décimales).</li>`),
    recap: T(`<li><code>DateTime.Now</code>, <code>AddDays</code>, <code>ToString("dd/MM/yyyy")</code>.</li><li><code>dat2 - dat1</code> = <code>TimeSpan</code>.</li>`, `<li><code>DateTime.Now</code>, <code>AddDays</code>, <code>ToString("dd/MM/yyyy")</code>.</li><li><code>date2 - date1</code> = <code>TimeSpan</code>.</li>`)
  },
  {
    id: 'cs-random',
    title: T('Random: jwèt devine', 'Random : jeu de devinette'),
    theory: T(
      `<pre>var rnd = new Random();
int zo = rnd.Next(1, 7);         // 1 → 6 (7 PA enkli!)
double d = rnd.NextDouble();     // 0.0 → 0.999…

string[] koulè = { "wouj", "ble", "vèt" };
string chwa = koulè[rnd.Next(koulè.Length)];   // eleman o aza</pre>
       <p>Kreye <b>yon sèl</b> <code>Random</code> epi reyitilize l — pa kreye yon nouvo nan chak tou bouk.</p>
       <p>Ann fè yon jwèt "devine nonm nan": òdinatè a chwazi, jwè a eseye, pwogram nan di "pi wo" oswa "pi ba".</p>`,
      `<pre>var rnd = new Random();
int de = rnd.Next(1, 7);         // 1 → 6 (7 NON inclus !)
double d = rnd.NextDouble();     // 0.0 → 0.999…

string[] couleurs = { "rouge", "bleu", "vert" };
string choix = couleurs[rnd.Next(couleurs.Length)];   // élément au hasard</pre>
       <p>Crée <b>un seul</b> <code>Random</code> et réutilise-le — n'en crée pas un nouveau à chaque tour de boucle.</p>
       <p>Faisons un jeu « devine le nombre » : l'ordinateur choisit, le joueur essaie, le programme dit « plus haut » ou « plus bas ».</p>`
    ),
    task: T(
      'Konplete jwèt la: <code>int sekre = rnd.Next(1, 101);</code>. Nan bouk <code>while</code> la, si <code>esè &lt; sekre</code> afiche <b>"Pi wo!"</b>, si <code>esè &gt; sekre</code> afiche <b>"Pi ba!"</b>, sinon afiche <b>"Bravo!"</b> epi <code>break</code>.',
      'Complète le jeu : <code>int sekre = rnd.Next(1, 101);</code>. Dans la boucle <code>while</code>, si <code>esè &lt; sekre</code> affiche <b>"Plus haut !"</b>, si <code>esè &gt; sekre</code> affiche <b>"Plus bas !"</b>, sinon <b>"Bravo !"</b> et <code>break</code>.'
    ),
    hint: T('<code>if (ese &lt; sekre) … else if (ese &gt; sekre) … else { …; break; }</code>', '<code>if (ese &lt; sekre) … else if (ese &gt; sekre) … else { …; break; }</code>'),
    starter: csProg({ main: 'var rnd = new Random();\n// ✍️ int sekre = …\n\nwhile (true)\n{\n    Console.Write("Devine (1-100): ");\n    int ese = int.Parse(Console.ReadLine());\n\n    // ✍️\n}' }),
    solution: csProg({ main: 'var rnd = new Random();\nint sekre = rnd.Next(1, 101);\n\nwhile (true)\n{\n    Console.Write("Devine (1-100): ");\n    int ese = int.Parse(Console.ReadLine());\n\n    if (ese < sekre)\n    {\n        Console.WriteLine("Pi wo!");\n    }\n    else if (ese > sekre)\n    {\n        Console.WriteLine("Pi ba!");\n    }\n    else\n    {\n        Console.WriteLine("Bravo!");\n        break;\n    }\n}' }),
    output: 'Devine (1-100): > 50\nPi wo!\nDevine (1-100): > 75\nPi ba!\nDevine (1-100): > 63\nBravo!',
    check: need(
      R(/int\s+sekre\s*=\s*rnd\.Next\s*\(\s*1\s*,\s*101\s*\)\s*;/, 'Chwazi nonm sekrè a: <code>int sekre = rnd.Next(1, 101);</code>', 'Choisis le nombre secret : <code>int sekre = rnd.Next(1, 101);</code>'),
      R(/if\s*\(\s*ese\s*<\s*sekre\s*\)|if\s*\(\s*sekre\s*>\s*ese\s*\)/, 'Tcheke <code>if (ese &lt; sekre)</code>.', 'Teste <code>if (ese &lt; sekre)</code>.'),
      R(/if\s*\(\s*ese\s*>\s*sekre\s*\)|if\s*\(\s*sekre\s*<\s*ese\s*\)/, 'Tcheke <code>else if (ese &gt; sekre)</code>.', 'Teste <code>else if (ese &gt; sekre)</code>.'),
      R(/\bbreak\s*;/, 'Lè jwè a jwenn li, <code>break;</code> pou kite bouk la.', 'Quand le joueur trouve, <code>break;</code> pour sortir de la boucle.')
    ),
    tips: T(`<li><code>rnd.Next(1, 100)</code> bay 1 → 99. Pou gen 100, ekri <code>Next(1, 101)</code>.</li><li><code>while (true)</code> + <code>break</code> = bouk ki fini depi w jwenn sa w ap chèche.</li>`, `<li><code>rnd.Next(1, 100)</code> donne 1 → 99. Pour inclure 100, écris <code>Next(1, 101)</code>.</li><li><code>while (true)</code> + <code>break</code> = boucle qui s'arrête dès qu'on trouve.</li>`),
    recap: T(`<li><code>new Random()</code>, <code>Next(min, max)</code> — max pa enkli.</li>`, `<li><code>new Random()</code>, <code>Next(min, max)</code> — max non inclus.</li>`)
  },
  {
    id: 'cs-file',
    title: T('Li ak ekri fichye', 'Lire et écrire des fichiers'),
    theory: T(
      `<p>Pou <b>sove</b> done apre pwogram nan fèmen, nou ekri yo nan yon <b>fichye</b>:</p>
       <pre>using System.IO;

File.WriteAllText("not.txt", "Bonjou!");          // kreye/ranplase
File.AppendAllText("not.txt", "\\nYon lòt liy");   // ajoute nan fen
string tout = File.ReadAllText("not.txt");          // li tout
string[] liy = File.ReadAllLines("not.txt");        // li liy pa liy

if (File.Exists("not.txt"))
    Console.WriteLine("Fichye a la!");</pre>
       <p>⚠️ Si fichye a pa egziste, <code>ReadAllText</code> bay <code>FileNotFoundException</code>. Toujou tcheke <code>File.Exists</code> oswa itilize <code>try/catch</code>.</p>`,
      `<p>Pour <b>sauvegarder</b> des données après la fermeture du programme, on les écrit dans un <b>fichier</b> :</p>
       <pre>using System.IO;

File.WriteAllText("notes.txt", "Bonjour !");          // crée/remplace
File.AppendAllText("notes.txt", "\\nUne autre ligne"); // ajoute à la fin
string tout = File.ReadAllText("notes.txt");           // lit tout
string[] lignes = File.ReadAllLines("notes.txt");      // lit ligne par ligne

if (File.Exists("notes.txt"))
    Console.WriteLine("Le fichier existe !");</pre>
       <p>⚠️ Si le fichier n'existe pas, <code>ReadAllText</code> lève <code>FileNotFoundException</code>. Vérifie toujours avec <code>File.Exists</code> ou utilise <code>try/catch</code>.</p>`
    ),
    task: T(
      'Ekri <b>3</b> non nan <code>"elev.txt"</code> ak <code>File.WriteAllLines</code>, answit li yo ak <code>File.ReadAllLines</code> epi afiche chak liy.',
      'Écris <b>3</b> noms dans <code>"elev.txt"</code> avec <code>File.WriteAllLines</code>, puis relis-les avec <code>File.ReadAllLines</code> et affiche chaque ligne.'
    ),
    hint: T('<code>File.WriteAllLines("elev.txt", new[] { "Ana", "Jak", "Lise" });</code>', '<code>File.WriteAllLines("elev.txt", new[] { "Ana", "Jak", "Lise" });</code>'),
    starter: csProg({ usings: ['System.IO'] }),
    solution: csProg({ usings: ['System.IO'], main: 'File.WriteAllLines("elev.txt", new[] { "Ana", "Jak", "Lise" });\n\nstring[] liy = File.ReadAllLines("elev.txt");\nforeach (string l in liy)\n{\n    Console.WriteLine(l);\n}' }),
    output: ({ code }) => ((code.match(/WriteAllLines\s*\([^{]*\{([^}]*)\}/) || [])[1] || '').match(/"([^"]*)"/g)?.map(s => s.slice(1, -1)).join('\n') || '',
    check: need(
      R(/using\s+System\.IO\s*;/, 'Ajoute <code>using System.IO;</code>', 'Ajoute <code>using System.IO;</code>'),
      R(/File\.WriteAllLines\s*\(\s*"elev\.txt"\s*,/, 'Ekri ak <code>File.WriteAllLines("elev.txt", …)</code>.', 'Écris avec <code>File.WriteAllLines("elev.txt", …)</code>.'),
      R(/File\.ReadAllLines\s*\(\s*"elev\.txt"\s*\)/, 'Li ak <code>File.ReadAllLines("elev.txt")</code>.', 'Lis avec <code>File.ReadAllLines("elev.txt")</code>.'),
      R(/foreach\s*\(/, 'Afiche chak liy ak <code>foreach</code>.', 'Affiche chaque ligne avec <code>foreach</code>.')
    ),
    tips: T(`<li>Chemen relatif (<code>"elev.txt"</code>) = nan dosye kote pwogram nan ap kouri a.</li><li><code>WriteAllText</code> <b>efase</b> ansyen kontni an!</li>`, `<li>Chemin relatif (<code>"elev.txt"</code>) = dans le dossier d'exécution du programme.</li><li><code>WriteAllText</code> <b>écrase</b> l'ancien contenu !</li>`),
    recap: T(`<li><code>File.WriteAllText/Lines</code>, <code>ReadAllText/Lines</code>, <code>AppendAllText</code>, <code>Exists</code>.</li>`, `<li><code>File.WriteAllText/Lines</code>, <code>ReadAllText/Lines</code>, <code>AppendAllText</code>, <code>Exists</code>.</li>`)
  },
  {
    id: 'cs-json',
    title: T('JSON ak System.Text.Json', 'JSON avec System.Text.Json'),
    theory: T(
      `<p>Menm JSON ou te wè nan JavaScript! Nan C#, <code>JsonSerializer</code> konvèti objè ↔ JSON:</p>
       <pre>using System.Text.Json;

var p = new Pwodwi { Non = "Diri", Pri = 250 };

// Objè → JSON (serialize)
string json = JsonSerializer.Serialize(p);
// {"Non":"Diri","Pri":250}

// JSON → objè (deserialize)
Pwodwi? p2 = JsonSerializer.Deserialize&lt;Pwodwi&gt;(json);
Console.WriteLine(p2?.Non);   // Diri</pre>
       <p>Konbine sa ak <code>File</code> pou <b>sove</b> ak <b>chaje</b> done aplikasyon w — tankou yon ti baz done.</p>`,
      `<p>Le même JSON qu'en JavaScript ! En C#, <code>JsonSerializer</code> convertit objet ↔ JSON :</p>
       <pre>using System.Text.Json;

var p = new Produit { Nom = "Riz", Prix = 250 };

// Objet → JSON (sérialiser)
string json = JsonSerializer.Serialize(p);
// {"Nom":"Riz","Prix":250}

// JSON → objet (désérialiser)
Produit? p2 = JsonSerializer.Deserialize&lt;Produit&gt;(json);
Console.WriteLine(p2?.Nom);   // Riz</pre>
       <p>Combine-le avec <code>File</code> pour <b>sauvegarder</b> et <b>charger</b> les données de ton appli — comme une petite base de données.</p>`
    ),
    task: T(
      'Serialize <code>p</code> an JSON ak <code>JsonSerializer.Serialize</code> epi afiche l. Answit deserialize l nan <code>p2</code> ak <code>Deserialize&lt;Pwodwi&gt;</code> epi afiche <code>p2.Non</code>.',
      'Sérialise <code>p</code> en JSON avec <code>JsonSerializer.Serialize</code> et affiche-le. Puis désérialise-le dans <code>p2</code> avec <code>Deserialize&lt;Pwodwi&gt;</code> et affiche <code>p2.Non</code>.'
    ),
    hint: T('<code>var p2 = JsonSerializer.Deserialize&lt;Pwodwi&gt;(json);</code>', '<code>var p2 = JsonSerializer.Deserialize&lt;Pwodwi&gt;(json);</code>'),
    starter: csProg({ usings: ['System.Text.Json'], main: 'var p = new Pwodwi { Non = "Diri", Pri = 250 };\n\n// ✍️', after: 'class Pwodwi\n{\n    public string Non { get; set; }\n    public double Pri { get; set; }\n}' }),
    solution: csProg({ usings: ['System.Text.Json'], main: 'var p = new Pwodwi { Non = "Diri", Pri = 250 };\n\nstring json = JsonSerializer.Serialize(p);\nConsole.WriteLine(json);\n\nvar p2 = JsonSerializer.Deserialize<Pwodwi>(json);\nConsole.WriteLine(p2.Non);', after: 'class Pwodwi\n{\n    public string Non { get; set; }\n    public double Pri { get; set; }\n}' }),
    output: '{"Non":"Diri","Pri":250}\nDiri',
    check: need(
      R(/using\s+System\.Text\.Json\s*;/, 'Ajoute <code>using System.Text.Json;</code>', 'Ajoute <code>using System.Text.Json;</code>'),
      R(/(string|var)\s+json\s*=\s*JsonSerializer\.Serialize\s*\(\s*p\s*\)\s*;/, 'Ekri <code>string json = JsonSerializer.Serialize(p);</code>', 'Écris <code>string json = JsonSerializer.Serialize(p);</code>'),
      R(/JsonSerializer\.Deserialize\s*<\s*Pwodwi\s*>\s*\(\s*json\s*\)/, 'Itilize <code>JsonSerializer.Deserialize&lt;Pwodwi&gt;(json)</code>.', 'Utilise <code>JsonSerializer.Deserialize&lt;Pwodwi&gt;(json)</code>.'),
      R(/Console\.WriteLine\s*\(\s*p2\??\.Non\s*\)/, 'Afiche <code>p2.Non</code>.', 'Affiche <code>p2.Non</code>.')
    ),
    tips: T(`<li>Pou JSON lizib, ajoute opsyon: <code>new JsonSerializerOptions { WriteIndented = true }</code>.</li><li>Sèlman pwopriyete <code>public</code> ak <code>get</code> yo serialize.</li>`, `<li>Pour un JSON lisible : <code>new JsonSerializerOptions { WriteIndented = true }</code>.</li><li>Seules les propriétés <code>public</code> avec <code>get</code> sont sérialisées.</li>`),
    recap: T(`<li><code>JsonSerializer.Serialize(obj)</code> / <code>Deserialize&lt;T&gt;(json)</code>.</li>`, `<li><code>JsonSerializer.Serialize(obj)</code> / <code>Deserialize&lt;T&gt;(json)</code>.</li>`)
  },
  {
    id: 'cs-using',
    title: T('using ak IDisposable', 'using et IDisposable'),
    theory: T(
      `<p>Kèk objè kenbe <b>resous</b> sistèm (fichye louvri, koneksyon rezo, baz done). Yo dwe <b>fèmen</b> apre — sinon fichye a ka rete bloke. Instriksyon <code>using</code> fè sa otomatikman:</p>
       <pre>using (var ekriven = new StreamWriter("jounal.txt"))
{
    ekriven.WriteLine("Liy 1");
    ekriven.WriteLine("Liy 2");
}   // ← fichye a FÈMEN otomatikman isit la, menm si gen erè

// Fòm kout (C# 8+): fèmen nan fen blòk ki genyen l lan
using var lektè = new StreamReader("jounal.txt");
Console.WriteLine(lektè.ReadLine());</pre>
       <p>Objè sa yo aplike entèfas <code>IDisposable</code> (metòd <code>Dispose()</code>). <code>using</code> = <code>try/finally</code> + <code>Dispose()</code>.</p>`,
      `<p>Certains objets tiennent des <b>ressources</b> système (fichier ouvert, connexion réseau, base de données). Il faut les <b>fermer</b> ensuite — sinon le fichier peut rester verrouillé. L'instruction <code>using</code> le fait automatiquement :</p>
       <pre>using (var ecrivain = new StreamWriter("journal.txt"))
{
    ecrivain.WriteLine("Ligne 1");
    ecrivain.WriteLine("Ligne 2");
}   // ← fichier FERMÉ automatiquement ici, même en cas d'erreur

// Forme courte (C# 8+) : fermé à la fin du bloc englobant
using var lecteur = new StreamReader("journal.txt");
Console.WriteLine(lecteur.ReadLine());</pre>
       <p>Ces objets implémentent l'interface <code>IDisposable</code> (méthode <code>Dispose()</code>). <code>using</code> = <code>try/finally</code> + <code>Dispose()</code>.</p>`
    ),
    task: T(
      'Ak <code>using (var w = new StreamWriter("jounal.txt"))</code>, ekri 2 liy nan fichye a ak <code>w.WriteLine</code>.',
      'Avec <code>using (var w = new StreamWriter("jounal.txt"))</code>, écris 2 lignes dans le fichier avec <code>w.WriteLine</code>.'
    ),
    hint: T('<code>using (var w = new StreamWriter("jounal.txt")) { w.WriteLine("…"); w.WriteLine("…"); }</code>', '<code>using (var w = new StreamWriter("jounal.txt")) { w.WriteLine("…"); w.WriteLine("…"); }</code>'),
    starter: csProg({ usings: ['System.IO'] }),
    solution: csProg({ usings: ['System.IO'], main: 'using (var w = new StreamWriter("jounal.txt"))\n{\n    w.WriteLine("Jou 1: m aprann C#");\n    w.WriteLine("Jou 2: m kontinye!");\n}\n\nConsole.WriteLine("Jounal la sove.");' }),
    output: 'Jounal la sove.',
    check: need(
      R(/using\s*\(\s*(var|StreamWriter)\s+(\w+)\s*=\s*new\s+StreamWriter\s*\(\s*"jounal\.txt"\s*\)\s*\)|using\s+(var|StreamWriter)\s+\w+\s*=\s*new\s+StreamWriter\s*\(\s*"jounal\.txt"\s*\)\s*;/, 'Ekri <code>using (var w = new StreamWriter("jounal.txt"))</code>.', 'Écris <code>using (var w = new StreamWriter("jounal.txt"))</code>.'),
      R(count(/\w+\.WriteLine\s*\(\s*"/, 2), 'Ekri 2 liy ak <code>w.WriteLine("…")</code>.', 'Écris 2 lignes avec <code>w.WriteLine("…")</code>.')
    ),
    tips: T(`<li>Pa konfonn <code>using</code> <b>direktiv</b> (<code>using System;</code>, anlè fichye a) ak <code>using</code> <b>instriksyon</b> (pou resous).</li>`, `<li>Ne confonds pas la <b>directive</b> <code>using</code> (<code>using System;</code>, en haut du fichier) et l'<b>instruction</b> <code>using</code> (pour les ressources).</li>`),
    recap: T(`<li><code>using (var r = …) { }</code> = fèmen otomatik.</li><li><code>IDisposable</code> / <code>Dispose()</code>.</li><li>🎉 Fen mwa 7!</li>`, `<li><code>using (var r = …) { }</code> = fermeture automatique.</li><li><code>IDisposable</code> / <code>Dispose()</code>.</li><li>🎉 Fin du mois 7 !</li>`)
  }
);
