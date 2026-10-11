/* ======================= MWA 5 — C# Metòd, tèks, koleksyon, erè (semèn 17-20) ======================= */
findModule('cs').lessons.push(
  /* ---------- Semèn 17: Metòd ---------- */
  {
    id: 'cs-voidm',
    title: T('Metòd void', 'Méthodes void'),
    theory: T(
      `<p>Yon <b>metòd</b> se yon blòk kòd ki gen yon non. Nou mete l nan klas la, <b>deyò</b> <code>Main</code>:</p>
       <pre>class Program
{
    static void Main()
    {
        Salye("Ana");     // apèl
        Salye("Jak");
    }

    static void Salye(string non)   // definisyon
    {
        Console.WriteLine($"Bonjou {non}!");
    }
}</pre>
       <ul><li><code>void</code> — metòd la pa retounen anyen, li jis <b>fè</b> yon bagay.</li>
       <li><code>string non</code> — yon <b>paramèt</b> ak tip li.</li>
       <li><code>static</code> — pou kounye a, mete l sou tout metòd nan <code>Program</code>.</li></ul>
       <p>Avantaj: ou ekri kòd la <b>yon fwa</b>, ou itilize l <b>anpil fwa</b> (prensip <b>DRY</b>: Don't Repeat Yourself).</p>`,
      `<p>Une <b>méthode</b> est un bloc de code nommé. On la place dans la classe, <b>en dehors</b> de <code>Main</code> :</p>
       <pre>class Program
{
    static void Main()
    {
        Saluer("Ana");     // appel
        Saluer("Jacques");
    }

    static void Saluer(string nom)   // définition
    {
        Console.WriteLine($"Bonjour {nom} !");
    }
}</pre>
       <ul><li><code>void</code> — la méthode ne renvoie rien, elle <b>fait</b> quelque chose.</li>
       <li><code>string nom</code> — un <b>paramètre</b> avec son type.</li>
       <li><code>static</code> — pour l'instant, mets-le sur toutes les méthodes de <code>Program</code>.</li></ul>
       <p>Avantage : on écrit le code <b>une fois</b>, on l'utilise <b>souvent</b> (principe <b>DRY</b> : Don't Repeat Yourself).</p>`
    ),
    task: T(
      'Ekri <code>static void Salye(string non)</code> ki afiche <code>$"Bonjou {non}!"</code>. Nan <code>Main</code>, rele l 2 fwa ak 2 non diferan.',
      'Écris <code>static void Salye(string non)</code> qui affiche <code>$"Bonjou {non}!"</code>. Dans <code>Main</code>, appelle-la 2 fois avec 2 noms différents.'
    ),
    hint: T('Metòd la ale <b>apre</b> akolad <code>}</code> ki fèmen <code>Main</code>.', 'La méthode va <b>après</b> l\'accolade <code>}</code> qui ferme <code>Main</code>.'),
    starter: CS_STARTER,
    solution: csProg({ main: 'Salye("Ana");\nSalye("Jak");', inside: 'static void Salye(string non)\n{\n    Console.WriteLine($"Bonjou {non}!");\n}' }),
    output: ({ code }) => [...code.matchAll(/Salye\s*\(\s*"([^"]*)"\s*\)/g)].map(m => `Bonjou ${m[1]}!`).join('\n'),
    check: need(
      R(/static\s+void\s+Salye\s*\(\s*string\s+(\w+)\s*\)/, 'Ekri siyati a: <code>static void Salye(string non)</code>', 'Écris la signature : <code>static void Salye(string non)</code>'),
      R(notInMain(/static\s+void\s+Salye/), 'Metòd la dwe <b>deyò</b> <code>Main</code>.', 'La méthode doit être <b>en dehors</b> de <code>Main</code>.'),
      R(/Console\.WriteLine\s*\(\s*\$"[^"]*\{\s*non\s*\}/, 'Nan metòd la, afiche <code>$"Bonjou {non}!"</code>.', 'Dans la méthode, affiche <code>$"Bonjou {non}!"</code>.'),
      R(c => (csMainBody(c.clean).match(/Salye\s*\(\s*"[^"]+"\s*\)\s*;/g) || []).length >= 2, 'Rele <code>Salye("…");</code> 2 fwa nan <code>Main</code>.', 'Appelle <code>Salye("…");</code> 2 fois dans <code>Main</code>.')
    ),
    tips: T(
      `<li>Pa defini yon metòd <b>anndan</b> yon lòt metòd (pou kounye a).</li><li>Non metòd yo an <b>PascalCase</b>: <code>Salye</code>, <code>KalkileTotal</code>.</li>`,
      `<li>Ne définis pas une méthode <b>dans</b> une autre méthode (pour l'instant).</li><li>Les noms de méthodes sont en <b>PascalCase</b> : <code>Salye</code>, <code>CalculerTotal</code>.</li>`
    ),
    recap: T(`<li><code>static void Non(tip param) { … }</code></li><li>Defini deyò Main, rele nan Main.</li>`, `<li><code>static void Nom(type param) { … }</code></li><li>Définie hors de Main, appelée dans Main.</li>`)
  },
{
      id: 'cs-5',
      title: T('Metòd ki retounen yon valè', 'Méthodes qui renvoient une valeur'),
      theory: T(
        `<p>Nan C#, fonksyon yo rele <b>metòd</b>. Nou dwe bay tip <b>retou</b> a ak tip chak <b>paramèt</b>:</p>
         <pre>static string Salye(string moun)
{
    return "Bonjou " + moun;
}</pre>
         <ul><li><code>static</code> — nou ka rele l san kreye objè (n ap wè sa apre).</li>
         <li><code>string</code> (avan non an) — tip valè li retounen.</li>
         <li><code>void</code> — vle di li pa retounen anyen (tankou <code>Main</code>).</li></ul>
         <p>Metòd la ekri <b>deyò</b> <code>Main</code>, men anndan <code>class Program</code>.</p>`,
        `<p>En C#, les fonctions s'appellent des <b>méthodes</b>. On doit indiquer le type de <b>retour</b> et le type de chaque <b>paramètre</b> :</p>
         <pre>static string Saluer(string personne)
{
    return "Bonjour " + personne;
}</pre>
         <ul><li><code>static</code> — on peut l'appeler sans créer d'objet (on verra ça après).</li>
         <li><code>string</code> (avant le nom) — le type de la valeur renvoyée.</li>
         <li><code>void</code> — signifie qu'elle ne renvoie rien (comme <code>Main</code>).</li></ul>
         <p>La méthode s'écrit <b>en dehors</b> de <code>Main</code>, mais dans <code>class Program</code>.</p>`
      ),
      task: T('Ekri metòd <code>static int Double(int n)</code> ki retounen <code>n * 2</code>, epi afiche <code>Double(21)</code> nan <code>Main</code>.', 'Écris la méthode <code>static int Double(int n)</code> qui renvoie <code>n * 2</code>, puis affiche <code>Double(21)</code> dans <code>Main</code>.'),
      hint: T('Mete metòd la anba <code>Main</code> (apre akolad <code>}</code> Main nan). Nan Main: <code>Console.WriteLine(Double(21));</code>', 'Place la méthode sous <code>Main</code> (après son accolade <code>}</code>). Dans Main : <code>Console.WriteLine(Double(21));</code>'),
      starter: CS_STARTER,
      solution: 'using System;\n\nclass Program\n{\n    static void Main()\n    {\n        Console.WriteLine(Double(21));\n    }\n\n    static int Double(int n)\n    {\n        return n * 2;\n    }\n}\n',
      output: () => '42',
      check: ({ clean }) => {
        if (!/static\s+int\s+Double\s*\(\s*int\s+(\w+)\s*\)/.test(clean)) return T('Mwen pa wè siyati a: <code>static int Double(int n)</code>', 'Je ne vois pas la signature : <code>static int Double(int n)</code>');
        if (!/return\s+\w+\s*\*\s*2\s*;|return\s+2\s*\*\s*\w+\s*;/.test(clean)) return T('Metòd la dwe <code>return n * 2;</code>', 'La méthode doit faire <code>return n * 2;</code>');
        if (!/Console\.WriteLine\s*\(\s*Double\s*\(\s*21\s*\)\s*\)\s*;/.test(clean)) return T('Nan <code>Main</code>, ekri <code>Console.WriteLine(Double(21));</code>', 'Dans <code>Main</code>, écris <code>Console.WriteLine(Double(21));</code>');
        // Metòd la pa dwe anndan Main
        const mainBody = (clean.match(/static\s+void\s+Main\s*\([^)]*\)\s*\{([\s\S]*)/) || [])[1] || '';
        let depth = 1, i = 0;
        for (; i < mainBody.length && depth > 0; i++) { if (mainBody[i] === '{') depth++; else if (mainBody[i] === '}') depth--; }
        if (/static\s+int\s+Double/.test(mainBody.slice(0, i))) return T('Metòd <code>Double</code> la dwe <b>deyò</b> <code>Main</code> (men anndan <code>class Program</code>).', 'La méthode <code>Double</code> doit être <b>en dehors</b> de <code>Main</code> (mais dans <code>class Program</code>).');
        return true;
      }
    },
  {
    id: 'cs-overload',
    title: T('Sichaj metòd (overloading)', 'Surcharge de méthodes (overloading)'),
    theory: T(
      `<p>Nan C#, plizyè metòd ka gen <b>menm non</b> si <b>paramèt</b> yo diferan (kantite oswa tip). Sa rele <b>overloading</b>:</p>
       <pre>static int Ajoute(int a, int b) =&gt; a + b;
static int Ajoute(int a, int b, int c) =&gt; a + b + c;
static double Ajoute(double a, double b) =&gt; a + b;

Ajoute(2, 3);        // 5     → premye a
Ajoute(1, 2, 3);     // 6     → dezyèm nan
Ajoute(2.5, 1.5);    // 4.0   → twazyèm nan</pre>
       <p>C# chwazi bon vèsyon an selon <b>agiman</b> ou bay yo. <code>Console.WriteLine</code> li menm gen plis pase 15 vèsyon!</p>
       <p><code>=&gt;</code> isit la se yon fason kout pou ekri yon metòd ki gen yon sèl <code>return</code>.</p>`,
      `<p>En C#, plusieurs méthodes peuvent avoir le <b>même nom</b> si leurs <b>paramètres</b> diffèrent (nombre ou type). C'est la <b>surcharge</b> :</p>
       <pre>static int Ajoute(int a, int b) =&gt; a + b;
static int Ajoute(int a, int b, int c) =&gt; a + b + c;
static double Ajoute(double a, double b) =&gt; a + b;

Ajoute(2, 3);        // 5     → la première
Ajoute(1, 2, 3);     // 6     → la deuxième
Ajoute(2.5, 1.5);    // 4.0   → la troisième</pre>
       <p>C# choisit la bonne version selon les <b>arguments</b>. <code>Console.WriteLine</code> elle-même a plus de 15 versions !</p>
       <p>Le <code>=&gt;</code> ici est une façon courte d'écrire une méthode qui n'a qu'un <code>return</code>.</p>`
    ),
    task: T(
      'Ekri 2 vèsyon <code>Ajoute</code>: youn ak <code>(int a, int b)</code> ki retounen <code>int</code>, youn ak <code>(double a, double b)</code> ki retounen <code>double</code>. Afiche <code>Ajoute(2, 3)</code> ak <code>Ajoute(2.5, 1.5)</code>.',
      'Écris 2 versions de <code>Ajoute</code> : une avec <code>(int a, int b)</code> qui renvoie <code>int</code>, une avec <code>(double a, double b)</code> qui renvoie <code>double</code>. Affiche <code>Ajoute(2, 3)</code> et <code>Ajoute(2.5, 1.5)</code>.'
    ),
    hint: T('<code>static int Ajoute(int a, int b) { return a + b; }</code> — answit menm bagay ak <code>double</code>.', '<code>static int Ajoute(int a, int b) { return a + b; }</code> — puis pareil avec <code>double</code>.'),
    starter: CS_STARTER,
    solution: csProg({ main: 'Console.WriteLine(Ajoute(2, 3));\nConsole.WriteLine(Ajoute(2.5, 1.5));', inside: 'static int Ajoute(int a, int b)\n{\n    return a + b;\n}\n\nstatic double Ajoute(double a, double b)\n{\n    return a + b;\n}' }),
    output: '5\n4',
    check: need(
      R(/static\s+int\s+Ajoute\s*\(\s*int\s+\w+\s*,\s*int\s+\w+\s*\)/, 'Ekri <code>static int Ajoute(int a, int b)</code>.', 'Écris <code>static int Ajoute(int a, int b)</code>.'),
      R(/static\s+double\s+Ajoute\s*\(\s*double\s+\w+\s*,\s*double\s+\w+\s*\)/, 'Ekri <code>static double Ajoute(double a, double b)</code>.', 'Écris <code>static double Ajoute(double a, double b)</code>.'),
      R(count(/return\s+\w+\s*\+\s*\w+|=>\s*\w+\s*\+\s*\w+/, 2), 'Chak vèsyon dwe retounen <code>a + b</code>.', 'Chaque version doit renvoyer <code>a + b</code>.'),
      R(inMain(/Ajoute\s*\(\s*2\s*,\s*3\s*\)/), 'Afiche <code>Ajoute(2, 3)</code> nan Main.', 'Affiche <code>Ajoute(2, 3)</code> dans Main.'),
      R(inMain(/Ajoute\s*\(\s*2\.5\s*,\s*1\.5\s*\)/), 'Afiche <code>Ajoute(2.5, 1.5)</code> nan Main.', 'Affiche <code>Ajoute(2.5, 1.5)</code> dans Main.')
    ),
    tips: T(`<li>Diferans sèlman nan tip <b>retou</b> pa ase: erè CS0111.</li>`, `<li>Une différence uniquement sur le type de <b>retour</b> ne suffit pas : erreur CS0111.</li>`),
    recap: T(`<li>Menm non + paramèt diferan = overloading.</li>`, `<li>Même nom + paramètres différents = surcharge.</li>`)
  },
  {
    id: 'cs-optional',
    title: T('Paramèt opsyonèl ak nonmen', 'Paramètres optionnels et nommés'),
    theory: T(
      `<pre>static void Kòmande(string plat, int kantite = 1, bool pike = false)
{
    Console.WriteLine($"{kantite} x {plat} (pike: {pike})");
}

Kòmande("Griyo");                       // 1 x Griyo (pike: False)
Kòmande("Lanbi", 2);                    // 2 x Lanbi (pike: False)
Kòmande("Diri", pike: true);            // agiman NONMEN
Kòmande(kantite: 3, plat: "Akra");      // nenpòt lòd</pre>
       <ul><li><b>Opsyonèl</b>: paramèt ki gen yon valè pa defo (<code>= 1</code>). Yo dwe vini <b>apre</b> paramèt obligatwa yo.</li>
       <li><b>Nonmen</b>: <code>non: valè</code> — kòd la pi klè, epi ou ka sote paramèt opsyonèl yo.</li></ul>`,
      `<pre>static void Commander(string plat, int quantite = 1, bool epice = false)
{
    Console.WriteLine($"{quantite} x {plat} (épicé : {epice})");
}

Commander("Griot");                       // 1 x Griot (épicé : False)
Commander("Lambi", 2);                    // 2 x Lambi (épicé : False)
Commander("Riz", epice: true);            // argument NOMMÉ
Commander(quantite: 3, plat: "Akra");     // n'importe quel ordre</pre>
       <ul><li><b>Optionnel</b> : un paramètre avec valeur par défaut (<code>= 1</code>). Il vient <b>après</b> les paramètres obligatoires.</li>
       <li><b>Nommé</b> : <code>nom: valeur</code> — code plus clair, et on peut sauter des optionnels.</li></ul>`
    ),
    task: T(
      'Ekri <code>static void Prezante(string non, int laj = 18)</code> ki afiche <code>$"{non}, {laj} an"</code>. Rele l: <code>Prezante("Ana");</code> epi ak agiman nonmen <code>Prezante(laj: 20, non: "Jak");</code>',
      'Écris <code>static void Prezante(string non, int laj = 18)</code> qui affiche <code>$"{non}, {laj} ans"</code>. Appelle-la : <code>Prezante("Ana");</code> puis avec des arguments nommés <code>Prezante(laj: 20, non: "Jak");</code>'
    ),
    hint: T('Valè pa defo a ekri nan siyati a: <code>int laj = 18</code>.', 'La valeur par défaut s\'écrit dans la signature : <code>int laj = 18</code>.'),
    starter: CS_STARTER,
    solution: csProg({ main: 'Prezante("Ana");\nPrezante(laj: 20, non: "Jak");', inside: 'static void Prezante(string non, int laj = 18)\n{\n    Console.WriteLine($"{non}, {laj} an");\n}' }),
    output: 'Ana, 18 an\nJak, 20 an',
    check: need(
      R(/static\s+void\s+Prezante\s*\(\s*string\s+non\s*,\s*int\s+laj\s*=\s*18\s*\)/, 'Siyati a: <code>static void Prezante(string non, int laj = 18)</code>', 'Signature : <code>static void Prezante(string non, int laj = 18)</code>'),
      R(inMain(/Prezante\s*\(\s*"[^"]+"\s*\)\s*;/), 'Rele <code>Prezante("Ana");</code> (san laj).', 'Appelle <code>Prezante("Ana");</code> (sans âge).'),
      R(inMain(/Prezante\s*\([^)]*\b(laj|non)\s*:/), 'Rele l ak agiman nonmen: <code>Prezante(laj: 20, non: "Jak");</code>', 'Appelle-la avec des arguments nommés : <code>Prezante(laj: 20, non: "Jak");</code>')
    ),
    tips: T(`<li>Agiman nonmen itilize <code>:</code> pa <code>=</code>: <code>laj: 20</code>.</li>`, `<li>Les arguments nommés utilisent <code>:</code> et non <code>=</code> : <code>laj: 20</code>.</li>`),
    recap: T(`<li><code>tip p = valè</code> = opsyonèl.</li><li><code>p: valè</code> = nonmen.</li>`, `<li><code>type p = valeur</code> = optionnel.</li><li><code>p: valeur</code> = nommé.</li>`)
  },
  {
    id: 'cs-refout',
    title: T('Paramèt out', 'Paramètres out'),
    theory: T(
      `<p>Yon metòd ka retounen <b>yon sèl</b> valè ak <code>return</code>. Pou bay <b>plizyè</b> rezilta, itilize paramèt <code>out</code>:</p>
       <pre>static void MinMax(int[] t, out int min, out int max)
{
    min = t.Min();      // metòd la DWE bay chak out yon valè
    max = t.Max();
}

MinMax(new[] { 4, 9, 1 }, out int a, out int b);
Console.WriteLine($"{a} → {b}");   // 1 → 9</pre>
       <p>Ou deja konnen yon metòd ak <code>out</code>: <code>int.TryParse("42", out int n)</code>! Gen <code>ref</code> tou: li pèmèt metòd la <b>modifye</b> yon varyab ki deja egziste.</p>`,
      `<p>Une méthode ne renvoie qu'<b>une seule</b> valeur avec <code>return</code>. Pour donner <b>plusieurs</b> résultats, on utilise des paramètres <code>out</code> :</p>
       <pre>static void MinMax(int[] t, out int min, out int max)
{
    min = t.Min();      // la méthode DOIT donner une valeur à chaque out
    max = t.Max();
}

MinMax(new[] { 4, 9, 1 }, out int a, out int b);
Console.WriteLine($"{a} → {b}");   // 1 → 9</pre>
       <p>Tu connais déjà une méthode avec <code>out</code> : <code>int.TryParse("42", out int n)</code> ! Il existe aussi <code>ref</code> : la méthode peut <b>modifier</b> une variable existante.</p>`
    ),
    task: T(
      'Ekri <code>static void Divize(int a, int b, out int kosyan, out int res)</code>. Nan Main: <code>Divize(17, 5, out int k, out int r);</code> epi afiche <code>$"{k} rès {r}"</code>.',
      'Écris <code>static void Divize(int a, int b, out int kosyan, out int res)</code>. Dans Main : <code>Divize(17, 5, out int k, out int r);</code> puis affiche <code>$"{k} reste {r}"</code>.'
    ),
    hint: T('Nan metòd la: <code>kosyan = a / b;</code> ak <code>res = a % b;</code>', 'Dans la méthode : <code>kosyan = a / b;</code> et <code>res = a % b;</code>'),
    starter: CS_STARTER,
    solution: csProg({ main: 'Divize(17, 5, out int k, out int r);\nConsole.WriteLine($"{k} rès {r}");', inside: 'static void Divize(int a, int b, out int kosyan, out int res)\n{\n    kosyan = a / b;\n    res = a % b;\n}' }),
    output: '3 rès 2',
    check: need(
      R(/static\s+void\s+Divize\s*\(\s*int\s+a\s*,\s*int\s+b\s*,\s*out\s+int\s+kosyan\s*,\s*out\s+int\s+res\s*\)/, 'Siyati a: <code>static void Divize(int a, int b, out int kosyan, out int res)</code>', 'Signature : <code>static void Divize(int a, int b, out int kosyan, out int res)</code>'),
      R(/kosyan\s*=\s*a\s*\/\s*b\s*;/, 'Bay <code>kosyan = a / b;</code>', 'Affecte <code>kosyan = a / b;</code>'),
      R(/res\s*=\s*a\s*%\s*b\s*;/, 'erè CS0177: paramèt out <code>res</code> dwe resevwa yon valè: <code>res = a % b;</code>', 'erreur CS0177 : le paramètre out <code>res</code> doit être affecté : <code>res = a % b;</code>'),
      R(inMain(/Divize\s*\(\s*17\s*,\s*5\s*,\s*out\s+(int|var)\s+\w+\s*,\s*out\s+(int|var)\s+\w+\s*\)/), 'Nan Main: <code>Divize(17, 5, out int k, out int r);</code>', 'Dans Main : <code>Divize(17, 5, out int k, out int r);</code>')
    ),
    tips: T(`<li>Mete <code>out</code> <b>ni</b> nan definisyon an <b>ni</b> nan apèl la.</li><li>Souvan, retounen yon <b>tuple</b> pi pwòp (n ap wè sa nan mwa 7).</li>`, `<li>Mets <code>out</code> <b>et</b> dans la définition <b>et</b> dans l'appel.</li><li>Souvent, renvoyer un <b>tuple</b> est plus propre (on le verra au mois 7).</li>`),
    recap: T(`<li><code>out</code> = rezilta siplemantè.</li><li><code>ref</code> = modifye yon varyab ki egziste.</li>`, `<li><code>out</code> = résultat supplémentaire.</li><li><code>ref</code> = modifier une variable existante.</li>`)
  },

  /* ---------- Semèn 18: Tèks ---------- */
  {
    id: 'cs-strbasic',
    title: T('Metòd string debaz', 'Méthodes string de base'),
    theory: T(
      `<pre>string s = "  Bonjou Ayiti  ";

s.Length          // 16  (pwopriyete, san parantèz)
s.Trim()          // "Bonjou Ayiti"  (retire espas bò yo)
s.ToUpper()       // "  BONJOU AYITI  "
s.ToLower()       // "  bonjou ayiti  "
s.Trim().ToUpper()  // ou ka CHÈNE metòd yo!
s[2]              // 'B'  (yon char)
string.IsNullOrWhiteSpace(s)  // false</pre>
       <p>⚠️ <code>string</code> yo <b>pa ka chanje</b> (immutable): <code>s.Trim()</code> bay yon <b>nouvo</b> string, <code>s</code> rete menm jan. Fò w sere rezilta a: <code>s = s.Trim();</code></p>`,
      `<pre>string s = "  Bonjour Haïti  ";

s.Length          // 17  (propriété, sans parenthèses)
s.Trim()          // "Bonjour Haïti"  (retire les espaces aux bords)
s.ToUpper()       // "  BONJOUR HAÏTI  "
s.ToLower()       // "  bonjour haïti  "
s.Trim().ToUpper()  // on peut ENCHAÎNER les méthodes !
s[2]              // 'B'  (un char)
string.IsNullOrWhiteSpace(s)  // false</pre>
       <p>⚠️ Les <code>string</code> sont <b>immuables</b> : <code>s.Trim()</code> renvoie un <b>nouveau</b> string, <code>s</code> ne change pas. Il faut garder le résultat : <code>s = s.Trim();</code></p>`
    ),
    task: T(
      'Kreye <code>string prop = non.Trim().ToUpper();</code>, afiche <code>prop</code>, epi afiche <code>prop.Length</code>.',
      'Crée <code>string prop = non.Trim().ToUpper();</code>, affiche <code>prop</code>, puis affiche <code>prop.Length</code>.'
    ),
    hint: T('2 <code>Console.WriteLine</code>: <code>prop</code> epi <code>prop.Length</code>.', '2 <code>Console.WriteLine</code> : <code>prop</code> puis <code>prop.Length</code>.'),
    starter: csProg({ main: 'string non = "   ayiti   ";\n\n// ✍️' }),
    solution: csProg({ main: 'string non = "   ayiti   ";\n\nstring prop = non.Trim().ToUpper();\nConsole.WriteLine(prop);\nConsole.WriteLine(prop.Length);' }),
    output: 'AYITI\n5',
    check: need(
      R(/string\s+prop\s*=\s*non\.Trim\(\)\.ToUpper\(\)\s*;|string\s+prop\s*=\s*non\.ToUpper\(\)\.Trim\(\)\s*;/, 'Ekri <code>string prop = non.Trim().ToUpper();</code>', 'Écris <code>string prop = non.Trim().ToUpper();</code>'),
      R(/Console\.WriteLine\s*\(\s*prop\s*\)/, 'Afiche <code>prop</code>.', 'Affiche <code>prop</code>.'),
      R(/Console\.WriteLine\s*\(\s*prop\.Length\s*\)/, 'Afiche <code>prop.Length</code> (san parantèz).', 'Affiche <code>prop.Length</code> (sans parenthèses).')
    ),
    tips: T(`<li><code>Length</code> pa gen <code>()</code>; <code>Trim()</code> genyen.</li><li><code>s.Trim();</code> pou kont li pa fè anyen — sere rezilta a!</li>`, `<li><code>Length</code> n'a pas de <code>()</code> ; <code>Trim()</code> en a.</li><li><code>s.Trim();</code> seul ne fait rien — garde le résultat !</li>`),
    recap: T(`<li><code>Length</code>, <code>Trim</code>, <code>ToUpper</code>, <code>ToLower</code>.</li><li>String = immutable.</li>`, `<li><code>Length</code>, <code>Trim</code>, <code>ToUpper</code>, <code>ToLower</code>.</li><li>String = immuable.</li>`)
  },
  {
    id: 'cs-strsearch',
    title: T('Chèche ak ranplase nan tèks', 'Chercher et remplacer dans un texte'),
    theory: T(
      `<pre>string fraz = "Mwen renmen JavaScript";

fraz.Contains("renmen")       // True
fraz.StartsWith("Mwen")       // True
fraz.EndsWith("!")            // False
fraz.IndexOf("renmen")        // 5   (pozisyon, -1 si pa la)
fraz.Substring(0, 4)          // "Mwen"   (depa, longè)
fraz.Substring(12)            // "JavaScript"  (depa → fen)
fraz.Replace("JavaScript", "C#")  // "Mwen renmen C#"</pre>
       <p>Pou konpare san okipe majiskil: <code>a.Equals(b, StringComparison.OrdinalIgnoreCase)</code>.</p>`,
      `<pre>string phrase = "J'aime JavaScript";

phrase.Contains("aime")        // True
phrase.StartsWith("J'")        // True
phrase.EndsWith("!")           // False
phrase.IndexOf("aime")         // 2   (position, -1 si absent)
phrase.Substring(0, 6)         // "J'aime"  (début, longueur)
phrase.Substring(7)            // "JavaScript"  (début → fin)
phrase.Replace("JavaScript", "C#")  // "J'aime C#"</pre>
       <p>Pour comparer sans tenir compte de la casse : <code>a.Equals(b, StringComparison.OrdinalIgnoreCase)</code>.</p>`
    ),
    task: T(
      'Afiche (youn pa liy): <code>fraz.Contains("renmen")</code>, <code>fraz.Replace("JavaScript", "C#")</code>, epi <code>fraz.Substring(0, 4)</code>.',
      'Affiche (un par ligne) : <code>fraz.Contains("renmen")</code>, <code>fraz.Replace("JavaScript", "C#")</code>, puis <code>fraz.Substring(0, 4)</code>.'
    ),
    hint: T('3 <code>Console.WriteLine(…)</code>, youn pou chak metòd.', '3 <code>Console.WriteLine(…)</code>, un par méthode.'),
    starter: csProg({ main: 'string fraz = "Mwen renmen JavaScript";\n\n// ✍️' }),
    solution: csProg({ main: 'string fraz = "Mwen renmen JavaScript";\n\nConsole.WriteLine(fraz.Contains("renmen"));\nConsole.WriteLine(fraz.Replace("JavaScript", "C#"));\nConsole.WriteLine(fraz.Substring(0, 4));' }),
    output: 'True\nMwen renmen C#\nMwen',
    check: need(
      R(/fraz\.Contains\s*\(\s*"renmen"\s*\)/, 'Itilize <code>fraz.Contains("renmen")</code>.', 'Utilise <code>fraz.Contains("renmen")</code>.'),
      R(/fraz\.Replace\s*\(\s*"JavaScript"\s*,\s*"C#"\s*\)/, 'Itilize <code>fraz.Replace("JavaScript", "C#")</code>.', 'Utilise <code>fraz.Replace("JavaScript", "C#")</code>.'),
      R(/fraz\.Substring\s*\(\s*0\s*,\s*4\s*\)/, 'Itilize <code>fraz.Substring(0, 4)</code>.', 'Utilise <code>fraz.Substring(0, 4)</code>.'),
      R(count(/Console\.WriteLine/, 3), 'Afiche 3 rezilta yo.', 'Affiche les 3 résultats.')
    ),
    tips: T(`<li><code>Substring(depa, longè)</code> — dezyèm nonm nan se <b>longè</b>, pa pozisyon fen an.</li><li>Si w depase fen tèks la → <code>ArgumentOutOfRangeException</code>.</li>`, `<li><code>Substring(début, longueur)</code> — le 2e nombre est une <b>longueur</b>, pas la position de fin.</li><li>Si on dépasse la fin du texte → <code>ArgumentOutOfRangeException</code>.</li>`),
    recap: T(`<li><code>Contains</code>, <code>IndexOf</code>, <code>Substring</code>, <code>Replace</code>, <code>StartsWith</code>.</li>`, `<li><code>Contains</code>, <code>IndexOf</code>, <code>Substring</code>, <code>Replace</code>, <code>StartsWith</code>.</li>`)
  },
  {
    id: 'cs-split',
    title: T('Split ak Join', 'Split et Join'),
    theory: T(
      `<p><code>Split</code> <b>koupe</b> yon tèks an tablo; <code>string.Join</code> <b>kole</b> yon tablo an tèks:</p>
       <pre>string liy = "Ana;15;Okap";
string[] moso = liy.Split(';');   // ["Ana", "15", "Okap"]
string non = moso[0];             // "Ana"
int laj = int.Parse(moso[1]);     // 15

string[] mo = { "C#", "se", "bèl" };
string fraz = string.Join(" ", mo);  // "C# se bèl"</pre>
       <p>Sa itil anpil pou li fichye <b>CSV</b> (done separe ak vigil) — fòma Excel ka ekspòte.</p>`,
      `<p><code>Split</code> <b>découpe</b> un texte en tableau ; <code>string.Join</code> <b>assemble</b> un tableau en texte :</p>
       <pre>string ligne = "Ana;15;Cap";
string[] morceaux = ligne.Split(';');  // ["Ana", "15", "Cap"]
string nom = morceaux[0];              // "Ana"
int age = int.Parse(morceaux[1]);      // 15

string[] mots = { "C#", "est", "beau" };
string phrase = string.Join(" ", mots);  // "C# est beau"</pre>
       <p>Très utile pour lire des fichiers <b>CSV</b> (données séparées par des virgules) — un format exporté par Excel.</p>`
    ),
    task: T(
      'Koupe <code>lis</code> ak <code>Split(\',\')</code> nan <code>string[] fwi</code>, epi afiche <code>string.Join(" | ", fwi)</code>.',
      'Découpe <code>lis</code> avec <code>Split(\',\')</code> dans <code>string[] fwi</code>, puis affiche <code>string.Join(" | ", fwi)</code>.'
    ),
    hint: T('<code>string[] fwi = lis.Split(\',\');</code>', '<code>string[] fwi = lis.Split(\',\');</code>'),
    starter: csProg({ main: 'string lis = "mango,zaboka,kokoye";\n\n// ✍️' }),
    solution: csProg({ main: 'string lis = "mango,zaboka,kokoye";\n\nstring[] fwi = lis.Split(\',\');\nConsole.WriteLine(string.Join(" | ", fwi));' }),
    output: 'mango | zaboka | kokoye',
    check: need(
      R(/string\s*\[\s*\]\s+fwi\s*=\s*lis\.Split\s*\(\s*('.'|".")\s*\)\s*;|var\s+fwi\s*=\s*lis\.Split\s*\(\s*('.'|".")\s*\)\s*;/, 'Ekri <code>string[] fwi = lis.Split(\',\');</code>', 'Écris <code>string[] fwi = lis.Split(\',\');</code>'),
      R(/string\.Join\s*\(\s*" \| "\s*,\s*fwi\s*\)/, 'Afiche <code>string.Join(" | ", fwi)</code>.', 'Affiche <code>string.Join(" | ", fwi)</code>.')
    ),
    tips: T(`<li><code>Split(\',\')</code> pran yon <code>char</code> (gimè senp) oswa yon string.</li><li>Si tèks la gen espas apre vigil yo, itilize <code>.Trim()</code> sou chak moso.</li>`, `<li><code>Split(\',\')</code> prend un <code>char</code> (guillemets simples) ou un string.</li><li>Si le texte a des espaces après les virgules, applique <code>.Trim()</code> à chaque morceau.</li>`),
    recap: T(`<li><code>Split</code>: tèks → tablo.</li><li><code>string.Join</code>: tablo → tèks.</li>`, `<li><code>Split</code> : texte → tableau.</li><li><code>string.Join</code> : tableau → texte.</li>`)
  },
  {
    id: 'cs-sb',
    title: T('StringBuilder', 'StringBuilder'),
    theory: T(
      `<p>Paske string yo <b>immutable</b>, chak <code>+=</code> kreye yon <b>nouvo</b> string. Nan yon bouk 10 000 tou, sa vin <b>trè lan</b>. Solisyon: <code>StringBuilder</code>.</p>
       <pre>using System.Text;

var sb = new StringBuilder();
for (int i = 0; i &lt; 3; i++)
{
    sb.Append("Liy ");
    sb.Append(i);
    sb.AppendLine();     // nouvo liy
}
string rezilta = sb.ToString();</pre>
       <p>Règ pratik: pou <b>kèk</b> konkatènasyon, <code>+</code> oswa <code>$"…"</code> bon. Pou yon <b>bouk</b>, itilize <code>StringBuilder</code>.</p>`,
      `<p>Les strings étant <b>immuables</b>, chaque <code>+=</code> crée un <b>nouveau</b> string. Dans une boucle de 10 000 tours, ça devient <b>très lent</b>. Solution : <code>StringBuilder</code>.</p>
       <pre>using System.Text;

var sb = new StringBuilder();
for (int i = 0; i &lt; 3; i++)
{
    sb.Append("Ligne ");
    sb.Append(i);
    sb.AppendLine();     // nouvelle ligne
}
string resultat = sb.ToString();</pre>
       <p>Règle pratique : pour <b>quelques</b> concaténations, <code>+</code> ou <code>$"…"</code> suffisent. Dans une <b>boucle</b>, utilise <code>StringBuilder</code>.</p>`
    ),
    task: T(
      'Ak yon <code>StringBuilder</code> ak yon bouk, bati tèks <b>"1-2-3-4-5"</b> epi afiche l ak <code>.ToString()</code>.',
      'Avec un <code>StringBuilder</code> et une boucle, construis le texte <b>"1-2-3-4-5"</b> et affiche-le avec <code>.ToString()</code>.'
    ),
    hint: T('Nan bouk la: <code>sb.Append(i); if (i &lt; 5) sb.Append("-");</code>. Pa bliye <code>using System.Text;</code>', 'Dans la boucle : <code>sb.Append(i); if (i &lt; 5) sb.Append("-");</code>. N\'oublie pas <code>using System.Text;</code>'),
    starter: CS_STARTER,
    solution: csProg({ usings: ['System.Text'], main: 'var sb = new StringBuilder();\n\nfor (int i = 1; i <= 5; i++)\n{\n    sb.Append(i);\n    if (i < 5) sb.Append("-");\n}\n\nConsole.WriteLine(sb.ToString());' }),
    output: '1-2-3-4-5',
    check: need(
      R(/using\s+System\.Text\s*;/, 'erè CS0246: ajoute <code>using System.Text;</code> anlè fichye a.', 'erreur CS0246 : ajoute <code>using System.Text;</code> en haut du fichier.'),
      R(/new\s+StringBuilder\s*\(\s*\)/, 'Kreye <code>new StringBuilder()</code>.', 'Crée <code>new StringBuilder()</code>.'),
      R(/\bfor\s*\(/, 'Itilize yon bouk <code>for</code>.', 'Utilise une boucle <code>for</code>.'),
      R(/\.Append\s*\(/, 'Itilize <code>.Append(…)</code>.', 'Utilise <code>.Append(…)</code>.'),
      R(/\.ToString\s*\(\s*\)/, 'Afiche ak <code>.ToString()</code>.', 'Affiche avec <code>.ToString()</code>.')
    ),
    tips: T(`<li><code>StringBuilder</code> nan <code>System.Text</code>, pa nan <code>System</code>.</li>`, `<li><code>StringBuilder</code> est dans <code>System.Text</code>, pas dans <code>System</code>.</li>`),
    recap: T(`<li><code>new StringBuilder()</code>, <code>.Append()</code>, <code>.ToString()</code>.</li><li>Pi rapid nan bouk.</li>`, `<li><code>new StringBuilder()</code>, <code>.Append()</code>, <code>.ToString()</code>.</li><li>Plus rapide dans les boucles.</li>`)
  },
  {
    id: 'cs-palindrome',
    title: T('Mini-pwojè: palendwòm', 'Mini-projet : palindrome'),
    theory: T(
      `<p>Yon <b>palendwòm</b> se yon mo ki li menm jan nan 2 sans: <i>kayak</i>, <i>radar</i>, <i>ala</i>. Ann ekri yon metòd ki tcheke sa!</p>
       <p><b>Algorit</b> (plan an):</p>
       <ol><li>Kreye yon tèks vid <code>ranvèse</code>.</li>
       <li>Pakouri mo a <b>depi lafen</b> (<code>i = mo.Length - 1</code>) rive <code>0</code>.</li>
       <li>Ajoute chak lèt <code>mo[i]</code> nan <code>ranvèse</code>.</li>
       <li>Retounen <code>mo == ranvèse</code>.</li></ol>
       <p>Pwofesyonèl yo toujou ekri <b>algorit la an fraz</b> anvan yo kode!</p>`,
      `<p>Un <b>palindrome</b> se lit pareil dans les 2 sens : <i>kayak</i>, <i>radar</i>, <i>été</i>. Écrivons une méthode qui le vérifie !</p>
       <p><b>Algorithme</b> (le plan) :</p>
       <ol><li>Crée un texte vide <code>ranvèse</code>.</li>
       <li>Parcours le mot <b>depuis la fin</b> (<code>i = mo.Length - 1</code>) jusqu'à <code>0</code>.</li>
       <li>Ajoute chaque lettre <code>mo[i]</code> à <code>ranvèse</code>.</li>
       <li>Renvoie <code>mo == ranvèse</code>.</li></ol>
       <p>Les pros écrivent toujours l'<b>algorithme en phrases</b> avant de coder !</p>`
    ),
    task: T(
      'Ekri <code>static bool Palendwom(string mo)</code> epi afiche <code>Palendwom("kayak")</code> (True) ak <code>Palendwom("ayiti")</code> (False).',
      'Écris <code>static bool Palendwom(string mo)</code> puis affiche <code>Palendwom("kayak")</code> (True) et <code>Palendwom("ayiti")</code> (False).'
    ),
    hint: T('<code>for (int i = mo.Length - 1; i &gt;= 0; i--) ranvese += mo[i];</code>', '<code>for (int i = mo.Length - 1; i &gt;= 0; i--) ranvese += mo[i];</code>'),
    starter: CS_STARTER,
    solution: csProg({ main: 'Console.WriteLine(Palendwom("kayak"));\nConsole.WriteLine(Palendwom("ayiti"));', inside: 'static bool Palendwom(string mo)\n{\n    string ranvese = "";\n    for (int i = mo.Length - 1; i >= 0; i--)\n    {\n        ranvese += mo[i];\n    }\n    return mo == ranvese;\n}' }),
    output: 'True\nFalse',
    check: need(
      R(/static\s+bool\s+Palendwom\s*\(\s*string\s+mo\s*\)/, 'Siyati a: <code>static bool Palendwom(string mo)</code>', 'Signature : <code>static bool Palendwom(string mo)</code>'),
      R(/mo\s*\[\s*\w+(\s*-\s*\w+)?\s*\]|Array\.Reverse|\.Reverse\s*\(/, 'Ranvèse mo a (ak <code>mo[i]</code> nan yon bouk, oswa <code>Array.Reverse</code>).', 'Inverse le mot (avec <code>mo[i]</code> dans une boucle, ou <code>Array.Reverse</code>).'),
      R(/return\s+[^;]*(==|\.Equals)/, 'Retounen konparezon an: <code>return mo == ranvese;</code>', 'Renvoie la comparaison : <code>return mo == ranvese;</code>'),
      R(inMain(/Palendwom\s*\(\s*"kayak"\s*\)/), 'Teste <code>Palendwom("kayak")</code>.', 'Teste <code>Palendwom("kayak")</code>.'),
      R(inMain(/Palendwom\s*\(\s*"ayiti"\s*\)/), 'Teste <code>Palendwom("ayiti")</code>.', 'Teste <code>Palendwom("ayiti")</code>.')
    ),
    extra: T(
      `<p>Defi bonis: fè metòd la mache pou fraz tankou <i>"Ala la"</i> — retire espas yo (<code>Replace(" ", "")</code>) epi konvèti an miniskil (<code>ToLower()</code>) anvan w konpare.</p>`,
      `<p>Défi bonus : fais marcher la méthode pour des phrases comme <i>« Ésope reste ici et se repose »</i> — retire les espaces (<code>Replace(" ", "")</code>) et passe en minuscules (<code>ToLower()</code>) avant de comparer.</p>`
    ),
    tips: T(`<li>Dènye endèks la se <code>Length - 1</code>, pa <code>Length</code>.</li><li><code>i--</code> pou desann.</li>`, `<li>Le dernier indice est <code>Length - 1</code>, pas <code>Length</code>.</li><li><code>i--</code> pour descendre.</li>`),
    recap: T(`<li>Ekri algorit la anvan kòd la.</li><li><code>mo[i]</code> = yon char.</li>`, `<li>Écris l'algorithme avant le code.</li><li><code>mo[i]</code> = un char.</li>`)
  },

  /* ---------- Semèn 19: Koleksyon ---------- */
  {
    id: 'cs-list',
    title: T('List<T>', 'List<T>'),
    theory: T(
      `<p>Yon tablo gen yon gwosè <b>fiks</b>. Yon <code>List&lt;T&gt;</code> ka <b>grandi</b> ak <b>diminye</b>:</p>
       <pre>using System.Collections.Generic;

List&lt;string&gt; elev = new List&lt;string&gt;();
elev.Add("Ana");
elev.Add("Jak");
elev.Add("Lise");
elev.Remove("Jak");          // retire pa valè
Console.WriteLine(elev.Count);   // 2  (Count, pa Length!)
Console.WriteLine(elev[0]);      // "Ana"</pre>
       <p><code>&lt;string&gt;</code> se tip eleman yo — sa rele yon tip <b>jenerik</b>. Ou ka gen <code>List&lt;int&gt;</code>, <code>List&lt;double&gt;</code>, elatriye.</p>`,
      `<p>Un tableau a une taille <b>fixe</b>. Une <code>List&lt;T&gt;</code> peut <b>grandir</b> et <b>rétrécir</b> :</p>
       <pre>using System.Collections.Generic;

List&lt;string&gt; eleves = new List&lt;string&gt;();
eleves.Add("Ana");
eleves.Add("Jacques");
eleves.Add("Lise");
eleves.Remove("Jacques");       // retire par valeur
Console.WriteLine(eleves.Count);   // 2  (Count, pas Length !)
Console.WriteLine(eleves[0]);      // "Ana"</pre>
       <p><code>&lt;string&gt;</code> est le type des éléments — on parle de type <b>générique</b>. On peut avoir <code>List&lt;int&gt;</code>, <code>List&lt;double&gt;</code>, etc.</p>`
    ),
    task: T(
      'Kreye <code>List&lt;string&gt; elev</code>, ajoute <b>3</b> non, retire youn ak <code>Remove</code>, epi afiche <code>elev.Count</code>.',
      'Crée <code>List&lt;string&gt; elev</code>, ajoute <b>3</b> noms, retires-en un avec <code>Remove</code>, puis affiche <code>elev.Count</code>.'
    ),
    hint: T('<code>List&lt;string&gt; elev = new List&lt;string&gt;();</code> epi <code>elev.Add("Ana");</code>…', '<code>List&lt;string&gt; elev = new List&lt;string&gt;();</code> puis <code>elev.Add("Ana");</code>…'),
    starter: csProg({ usings: ['System.Collections.Generic'] }),
    solution: csProg({ usings: ['System.Collections.Generic'], main: 'List<string> elev = new List<string>();\nelev.Add("Ana");\nelev.Add("Jak");\nelev.Add("Lise");\n\nelev.Remove("Jak");\nConsole.WriteLine(elev.Count);' }),
    output: '2',
    check: need(
      R(/using\s+System\.Collections\.Generic\s*;/, 'Ajoute <code>using System.Collections.Generic;</code>', 'Ajoute <code>using System.Collections.Generic;</code>'),
      R(/List\s*<\s*string\s*>\s+elev\s*=\s*new\s+(List\s*<\s*string\s*>\s*)?\(\s*\)|var\s+elev\s*=\s*new\s+List\s*<\s*string\s*>\s*\(\s*\)/, 'Kreye <code>List&lt;string&gt; elev = new List&lt;string&gt;();</code>', 'Crée <code>List&lt;string&gt; elev = new List&lt;string&gt;();</code>'),
      R(count(/elev\.Add\s*\(/, 3), 'Ajoute 3 non ak <code>elev.Add(…)</code>.', 'Ajoute 3 noms avec <code>elev.Add(…)</code>.'),
      R(/elev\.Remove(At)?\s*\(/, 'Retire youn ak <code>elev.Remove(…)</code>.', 'Retires-en un avec <code>elev.Remove(…)</code>.'),
      R(/Console\.WriteLine\s*\(\s*elev\.Count\s*\)/, 'Afiche <code>elev.Count</code>.', 'Affiche <code>elev.Count</code>.')
    ),
    tips: T(`<li>Tablo: <code>.Length</code>. List: <code>.Count</code>.</li><li>Pa bliye <code>new List&lt;string&gt;()</code> — sinon lis la se <code>null</code>.</li>`, `<li>Tableau : <code>.Length</code>. List : <code>.Count</code>.</li><li>N'oublie pas <code>new List&lt;string&gt;()</code> — sinon la liste vaut <code>null</code>.</li>`),
    recap: T(`<li><code>List&lt;T&gt;</code>: <code>Add</code>, <code>Remove</code>, <code>Count</code>, <code>[i]</code>.</li>`, `<li><code>List&lt;T&gt;</code> : <code>Add</code>, <code>Remove</code>, <code>Count</code>, <code>[i]</code>.</li>`)
  },
  {
    id: 'cs-listops',
    title: T('Plis operasyon sou List', 'Plus d\'opérations sur List'),
    theory: T(
      `<pre>var nonm = new List&lt;int&gt; { 5, 3, 8 };   // inisyalize dirèkteman

nonm.Insert(0, 10);     // mete 10 nan pozisyon 0 → 10 5 3 8
nonm.RemoveAt(1);       // retire pozisyon 1     → 10 3 8
nonm.Contains(8);       // True
nonm.IndexOf(3);        // 1
nonm.Sort();            // 3 8 10
nonm.Reverse();         // 10 8 3
nonm.Clear();           // vide tout</pre>
       <p>Pakouri ak <code>foreach</code> menm jan ak yon tablo.</p>`,
      `<pre>var nombres = new List&lt;int&gt; { 5, 3, 8 };   // initialisation directe

nombres.Insert(0, 10);     // insère 10 en position 0 → 10 5 3 8
nombres.RemoveAt(1);       // retire la position 1    → 10 3 8
nombres.Contains(8);       // True
nombres.IndexOf(3);        // 1
nombres.Sort();            // 3 8 10
nombres.Reverse();         // 10 8 3
nombres.Clear();           // vide tout</pre>
       <p>On la parcourt avec <code>foreach</code>, comme un tableau.</p>`
    ),
    task: T(
      'Ajoute <code>1</code> nan <b>kòmansman</b> lis la ak <code>Insert</code>, klase l ak <code>Sort</code>, afiche <code>nonm.Contains(8)</code>, epi afiche chak nonm ak <code>foreach</code>.',
      'Ajoute <code>1</code> au <b>début</b> de la liste avec <code>Insert</code>, trie-la avec <code>Sort</code>, affiche <code>nonm.Contains(8)</code>, puis affiche chaque nombre avec <code>foreach</code>.'
    ),
    hint: T('<code>nonm.Insert(0, 1);</code> <code>nonm.Sort();</code>', '<code>nonm.Insert(0, 1);</code> <code>nonm.Sort();</code>'),
    starter: csProg({ usings: ['System.Collections.Generic'], main: 'var nonm = new List<int> { 5, 3, 8 };\n\n// ✍️' }),
    solution: csProg({ usings: ['System.Collections.Generic'], main: 'var nonm = new List<int> { 5, 3, 8 };\n\nnonm.Insert(0, 1);\nnonm.Sort();\nConsole.WriteLine(nonm.Contains(8));\n\nforeach (int n in nonm)\n{\n    Console.WriteLine(n);\n}' }),
    output: 'True\n1\n3\n5\n8',
    check: need(
      R(/nonm\.Insert\s*\(\s*0\s*,\s*1\s*\)/, 'Ekri <code>nonm.Insert(0, 1);</code>', 'Écris <code>nonm.Insert(0, 1);</code>'),
      R(/nonm\.Sort\s*\(\s*\)/, 'Klase ak <code>nonm.Sort();</code>', 'Trie avec <code>nonm.Sort();</code>'),
      R(/Console\.WriteLine\s*\(\s*nonm\.Contains\s*\(\s*8\s*\)\s*\)/, 'Afiche <code>nonm.Contains(8)</code>.', 'Affiche <code>nonm.Contains(8)</code>.'),
      R(/foreach\s*\(\s*(int|var)\s+\w+\s+in\s+nonm\s*\)/, 'Pakouri ak <code>foreach (int n in nonm)</code>.', 'Parcours avec <code>foreach (int n in nonm)</code>.')
    ),
    tips: T(`<li><code>Remove(x)</code> retire pa <b>valè</b>; <code>RemoveAt(i)</code> retire pa <b>pozisyon</b>.</li><li>Pa modifye yon lis pandan w ap pakouri l ak <code>foreach</code> → <code>InvalidOperationException</code>.</li>`, `<li><code>Remove(x)</code> retire par <b>valeur</b> ; <code>RemoveAt(i)</code> par <b>position</b>.</li><li>Ne modifie pas une liste pendant un <code>foreach</code> dessus → <code>InvalidOperationException</code>.</li>`),
    recap: T(`<li><code>Insert</code>, <code>RemoveAt</code>, <code>Contains</code>, <code>Sort</code>, <code>Reverse</code>.</li>`, `<li><code>Insert</code>, <code>RemoveAt</code>, <code>Contains</code>, <code>Sort</code>, <code>Reverse</code>.</li>`)
  },
  {
    id: 'cs-dict',
    title: T('Dictionary<K,V>', 'Dictionary<K,V>'),
    theory: T(
      `<p>Yon <b>diksyonè</b> asosye yon <b>kle</b> inik ak yon <b>valè</b> — tankou yon vrè diksyonè (mo → definisyon), oswa yon kontak (non → nimewo):</p>
       <pre>var pri = new Dictionary&lt;string, int&gt;();
pri["diri"] = 250;          // ajoute oswa ranplase
pri.Add("pwa", 300);        // ajoute (erè si kle a egziste deja)

Console.WriteLine(pri["diri"]);        // 250
Console.WriteLine(pri.ContainsKey("mayi"));  // False
pri.Remove("pwa");
Console.WriteLine(pri.Count);          // 1</pre>
       <p>Chèche nan yon diksyonè <b>trè rapid</b>, menm ak 1 milyon eleman.</p>`,
      `<p>Un <b>dictionnaire</b> associe une <b>clé</b> unique à une <b>valeur</b> — comme un vrai dictionnaire (mot → définition), ou un répertoire (nom → numéro) :</p>
       <pre>var prix = new Dictionary&lt;string, int&gt;();
prix["riz"] = 250;           // ajoute ou remplace
prix.Add("pois", 300);       // ajoute (erreur si la clé existe déjà)

Console.WriteLine(prix["riz"]);             // 250
Console.WriteLine(prix.ContainsKey("maïs")); // False
prix.Remove("pois");
Console.WriteLine(prix.Count);              // 1</pre>
       <p>La recherche dans un dictionnaire est <b>très rapide</b>, même avec 1 million d'éléments.</p>`
    ),
    task: T(
      'Kreye <code>Dictionary&lt;string, int&gt; pri</code>, ajoute <code>"diri"</code> → 250 ak <code>"pwa"</code> → 300, afiche <code>pri["diri"]</code>, epi afiche <code>pri.ContainsKey("mayi")</code>.',
      'Crée <code>Dictionary&lt;string, int&gt; pri</code>, ajoute <code>"diri"</code> → 250 et <code>"pwa"</code> → 300, affiche <code>pri["diri"]</code>, puis affiche <code>pri.ContainsKey("mayi")</code>.'
    ),
    hint: T('<code>var pri = new Dictionary&lt;string, int&gt;();</code> <code>pri["diri"] = 250;</code>', '<code>var pri = new Dictionary&lt;string, int&gt;();</code> <code>pri["diri"] = 250;</code>'),
    starter: csProg({ usings: ['System.Collections.Generic'] }),
    solution: csProg({ usings: ['System.Collections.Generic'], main: 'var pri = new Dictionary<string, int>();\npri["diri"] = 250;\npri["pwa"] = 300;\n\nConsole.WriteLine(pri["diri"]);\nConsole.WriteLine(pri.ContainsKey("mayi"));' }),
    output: '250\nFalse',
    check: need(
      R(/new\s+Dictionary\s*<\s*string\s*,\s*int\s*>\s*\(\s*\)/, 'Kreye <code>new Dictionary&lt;string, int&gt;()</code>.', 'Crée <code>new Dictionary&lt;string, int&gt;()</code>.'),
      R(/pri\s*\[\s*"diri"\s*\]\s*=\s*250\s*;|pri\.Add\s*\(\s*"diri"\s*,\s*250\s*\)/, 'Ajoute <code>pri["diri"] = 250;</code>', 'Ajoute <code>pri["diri"] = 250;</code>'),
      R(/pri\s*\[\s*"pwa"\s*\]\s*=\s*300\s*;|pri\.Add\s*\(\s*"pwa"\s*,\s*300\s*\)/, 'Ajoute <code>pri["pwa"] = 300;</code>', 'Ajoute <code>pri["pwa"] = 300;</code>'),
      R(/Console\.WriteLine\s*\(\s*pri\s*\[\s*"diri"\s*\]\s*\)/, 'Afiche <code>pri["diri"]</code>.', 'Affiche <code>pri["diri"]</code>.'),
      R(/Console\.WriteLine\s*\(\s*pri\.ContainsKey\s*\(\s*"mayi"\s*\)\s*\)/, 'Afiche <code>pri.ContainsKey("mayi")</code>.', 'Affiche <code>pri.ContainsKey("mayi")</code>.')
    ),
    tips: T(`<li><code>pri["mayi"]</code> sou yon kle ki pa egziste → <code>KeyNotFoundException</code>. Tcheke ak <code>ContainsKey</code> oswa <code>TryGetValue</code> anvan.</li>`, `<li><code>pri["mayi"]</code> sur une clé absente → <code>KeyNotFoundException</code>. Vérifie avec <code>ContainsKey</code> ou <code>TryGetValue</code> avant.</li>`),
    recap: T(`<li><code>Dictionary&lt;K, V&gt;</code>: kle → valè.</li><li><code>[kle]</code>, <code>ContainsKey</code>, <code>Remove</code>.</li>`, `<li><code>Dictionary&lt;K, V&gt;</code> : clé → valeur.</li><li><code>[cle]</code>, <code>ContainsKey</code>, <code>Remove</code>.</li>`)
  },
  {
    id: 'cs-dictloop',
    title: T('Pakouri yon diksyonè', 'Parcourir un dictionnaire'),
    theory: T(
      `<pre>var stòk = new Dictionary&lt;string, int&gt;
{
    ["mango"] = 12,
    ["zaboka"] = 5
};

foreach (var pè in stòk)
{
    Console.WriteLine($"{pè.Key}: {pè.Value}");
}

// Chèche san risk erè:
if (stòk.TryGetValue("kokoye", out int kantite))
    Console.WriteLine(kantite);
else
    Console.WriteLine("Pa gen kokoye");</pre>
       <p>Chak eleman se yon <code>KeyValuePair</code> ak <code>.Key</code> ak <code>.Value</code>. Ou ka pakouri sèlman <code>stòk.Keys</code> oswa <code>stòk.Values</code> tou.</p>`,
      `<pre>var stock = new Dictionary&lt;string, int&gt;
{
    ["mangue"] = 12,
    ["avocat"] = 5
};

foreach (var paire in stock)
{
    Console.WriteLine($"{paire.Key} : {paire.Value}");
}

// Chercher sans risque d'erreur :
if (stock.TryGetValue("coco", out int quantite))
    Console.WriteLine(quantite);
else
    Console.WriteLine("Pas de coco");</pre>
       <p>Chaque élément est un <code>KeyValuePair</code> avec <code>.Key</code> et <code>.Value</code>. On peut aussi parcourir seulement <code>stock.Keys</code> ou <code>stock.Values</code>.</p>`
    ),
    task: T(
      'Pakouri <code>stok</code> ak <code>foreach</code> epi afiche chak <code>$"{p.Key}: {p.Value}"</code>. Apre bouk la, afiche <b>total</b> kantite yo (17).',
      'Parcours <code>stok</code> avec <code>foreach</code> et affiche chaque <code>$"{p.Key}: {p.Value}"</code>. Après la boucle, affiche le <b>total</b> des quantités (17).'
    ),
    hint: T('Nan bouk la: <code>total += p.Value;</code>', 'Dans la boucle : <code>total += p.Value;</code>'),
    starter: csProg({ usings: ['System.Collections.Generic'], main: 'var stok = new Dictionary<string, int>\n{\n    ["mango"] = 12,\n    ["zaboka"] = 5\n};\nint total = 0;\n\n// ✍️' }),
    solution: csProg({ usings: ['System.Collections.Generic'], main: 'var stok = new Dictionary<string, int>\n{\n    ["mango"] = 12,\n    ["zaboka"] = 5\n};\nint total = 0;\n\nforeach (var p in stok)\n{\n    Console.WriteLine($"{p.Key}: {p.Value}");\n    total += p.Value;\n}\n\nConsole.WriteLine(total);' }),
    output: 'mango: 12\nzaboka: 5\n17',
    check: need(
      R(/foreach\s*\(\s*(var|KeyValuePair\s*<[^>]+>)\s+(\w+)\s+in\s+stok\s*\)/, 'Ekri <code>foreach (var p in stok)</code>.', 'Écris <code>foreach (var p in stok)</code>.'),
      R(/\.Key\b/, 'Itilize <code>.Key</code>.', 'Utilise <code>.Key</code>.'),
      R(/total\s*\+=\s*\w+\.Value|total\s*=\s*total\s*\+\s*\w+\.Value/, 'Ajoute chak <code>.Value</code> nan <code>total</code>.', 'Ajoute chaque <code>.Value</code> à <code>total</code>.'),
      R(/Console\.WriteLine\s*\(\s*total\s*\)/, 'Afiche <code>total</code> apre bouk la.', 'Affiche <code>total</code> après la boucle.')
    ),
    tips: T(`<li>Lòd eleman nan yon <code>Dictionary</code> pa garanti. Si w bezwen lòd, itilize <code>SortedDictionary</code>.</li>`, `<li>L'ordre des éléments d'un <code>Dictionary</code> n'est pas garanti. Pour un ordre trié, utilise <code>SortedDictionary</code>.</li>`),
    recap: T(`<li><code>foreach (var p in d)</code> → <code>p.Key</code>, <code>p.Value</code>.</li><li><code>TryGetValue</code> = chèche san erè.</li>`, `<li><code>foreach (var p in d)</code> → <code>p.Key</code>, <code>p.Value</code>.</li><li><code>TryGetValue</code> = chercher sans erreur.</li>`)
  },
  {
    id: 'cs-queue',
    title: T('Queue ak Stack', 'Queue et Stack'),
    theory: T(
      `<p>2 koleksyon espesyal:</p>
       <p><b>Queue</b> (file) — <b>premye ki antre, premye ki soti</b> (FIFO), tankou liy nan bank:</p>
       <pre>var liy = new Queue&lt;string&gt;();
liy.Enqueue("Ana");     // antre nan liy
liy.Enqueue("Jak");
string premye = liy.Dequeue();   // "Ana" soti
string pwochen = liy.Peek();     // "Jak" (gade san retire)</pre>
       <p><b>Stack</b> (pil) — <b>dènye ki antre, premye ki soti</b> (LIFO), tankou yon pil asyèt, oswa bouton "Anile" (Ctrl+Z):</p>
       <pre>var pil = new Stack&lt;string&gt;();
pil.Push("aksyon 1");
pil.Push("aksyon 2");
pil.Pop();   // "aksyon 2"</pre>`,
      `<p>2 collections spéciales :</p>
       <p><b>Queue</b> (file) — <b>premier entré, premier sorti</b> (FIFO), comme la file à la banque :</p>
       <pre>var file = new Queue&lt;string&gt;();
file.Enqueue("Ana");     // entre dans la file
file.Enqueue("Jacques");
string premier = file.Dequeue();   // "Ana" sort
string suivant = file.Peek();      // "Jacques" (regarde sans retirer)</pre>
       <p><b>Stack</b> (pile) — <b>dernier entré, premier sorti</b> (LIFO), comme une pile d'assiettes, ou le bouton « Annuler » (Ctrl+Z) :</p>
       <pre>var pile = new Stack&lt;string&gt;();
pile.Push("action 1");
pile.Push("action 2");
pile.Pop();   // "action 2"</pre>`
    ),
    task: T(
      'Kreye <code>Queue&lt;string&gt; liy</code>, mete 3 kliyan ak <code>Enqueue</code>, sèvi premye a ak <code>Dequeue</code> epi afiche <code>$"Kliyan: {non}"</code>, answit afiche <code>liy.Count</code>.',
      'Crée <code>Queue&lt;string&gt; liy</code>, ajoute 3 clients avec <code>Enqueue</code>, sers le premier avec <code>Dequeue</code> et affiche <code>$"Client : {non}"</code>, puis affiche <code>liy.Count</code>.'
    ),
    hint: T('<code>string non = liy.Dequeue();</code>', '<code>string non = liy.Dequeue();</code>'),
    starter: csProg({ usings: ['System.Collections.Generic'] }),
    solution: csProg({ usings: ['System.Collections.Generic'], main: 'var liy = new Queue<string>();\nliy.Enqueue("Ana");\nliy.Enqueue("Jak");\nliy.Enqueue("Lise");\n\nstring non = liy.Dequeue();\nConsole.WriteLine($"Kliyan: {non}");\nConsole.WriteLine(liy.Count);' }),
    output: ({ code }) => `Kliyan: ${(code.match(/Enqueue\s*\(\s*"([^"]*)"/) || [])[1] || ''}\n2`,
    check: need(
      R(/new\s+Queue\s*<\s*string\s*>\s*\(\s*\)/, 'Kreye <code>new Queue&lt;string&gt;()</code>.', 'Crée <code>new Queue&lt;string&gt;()</code>.'),
      R(count(/\.Enqueue\s*\(/, 3), 'Ajoute 3 kliyan ak <code>Enqueue</code>.', 'Ajoute 3 clients avec <code>Enqueue</code>.'),
      R(/\.Dequeue\s*\(\s*\)/, 'Sèvi premye a ak <code>Dequeue()</code>.', 'Sers le premier avec <code>Dequeue()</code>.'),
      R(/\.Count/, 'Afiche <code>liy.Count</code>.', 'Affiche <code>liy.Count</code>.')
    ),
    tips: T(`<li><code>Dequeue</code> sou yon file vid → <code>InvalidOperationException</code>. Tcheke <code>Count &gt; 0</code> anvan.</li>`, `<li><code>Dequeue</code> sur une file vide → <code>InvalidOperationException</code>. Vérifie <code>Count &gt; 0</code> avant.</li>`),
    recap: T(`<li>Queue = FIFO: <code>Enqueue</code>/<code>Dequeue</code>.</li><li>Stack = LIFO: <code>Push</code>/<code>Pop</code>.</li>`, `<li>Queue = FIFO : <code>Enqueue</code>/<code>Dequeue</code>.</li><li>Stack = LIFO : <code>Push</code>/<code>Pop</code>.</li>`)
  },

  /* ---------- Semèn 20: Erè ---------- */
  {
    id: 'cs-try',
    title: T('Eksepsyon: try/catch', 'Exceptions : try/catch'),
    theory: T(
      `<p>Yon <b>eksepsyon</b> se yon erè ki rive pandan pwogram nan ap kouri. San okenn pwoteksyon, pwogram nan <b>kraze</b>:</p>
       <pre>int n = int.Parse("abc");   // 💥 FormatException</pre>
       <p>Ak <code>try/catch</code>, nou <b>kenbe</b> erè a:</p>
       <pre>try
{
    int n = int.Parse(antre);
    Console.WriteLine(n * 2);
}
catch (FormatException)
{
    Console.WriteLine("Sa pa yon nonm!");
}</pre>
       <p>Eksepsyon komen: <code>FormatException</code>, <code>DivideByZeroException</code>, <code>IndexOutOfRangeException</code>, <code>NullReferenceException</code>, <code>KeyNotFoundException</code>.</p>`,
      `<p>Une <b>exception</b> est une erreur qui survient pendant l'exécution. Sans protection, le programme <b>plante</b> :</p>
       <pre>int n = int.Parse("abc");   // 💥 FormatException</pre>
       <p>Avec <code>try/catch</code>, on <b>attrape</b> l'erreur :</p>
       <pre>try
{
    int n = int.Parse(saisie);
    Console.WriteLine(n * 2);
}
catch (FormatException)
{
    Console.WriteLine("Ce n'est pas un nombre !");
}</pre>
       <p>Exceptions courantes : <code>FormatException</code>, <code>DivideByZeroException</code>, <code>IndexOutOfRangeException</code>, <code>NullReferenceException</code>, <code>KeyNotFoundException</code>.</p>`
    ),
    task: T(
      'Mete <code>int.Parse(antre)</code> nan yon <code>try</code>, epi kenbe <code>FormatException</code> pou afiche <b>"Sa pa yon nonm!"</b>.',
      'Place <code>int.Parse(antre)</code> dans un <code>try</code>, et attrape <code>FormatException</code> pour afficher <b>"Ce n\'est pas un nombre !"</b>.'
    ),
    hint: T('<code>try { … } catch (FormatException) { Console.WriteLine("Sa pa yon nonm!"); }</code>', '<code>try { … } catch (FormatException) { Console.WriteLine("Ce n\'est pas un nombre !"); }</code>'),
    starter: csProg({ main: 'string antre = "abc";\n\nint n = int.Parse(antre);\nConsole.WriteLine(n * 2);' }),
    solution: csProg({ main: 'string antre = "abc";\n\ntry\n{\n    int n = int.Parse(antre);\n    Console.WriteLine(n * 2);\n}\ncatch (FormatException)\n{\n    Console.WriteLine("Sa pa yon nonm!");\n}' }),
    output: ({ code }) => (code.match(/catch[^{]*\{\s*Console\.WriteLine\s*\(\s*"([^"]*)"/) || [])[1] || '',
    check: need(
      R(/\btry\s*\{/, 'Mete kòd la nan <code>try { … }</code>.', 'Place le code dans <code>try { … }</code>.'),
      R(/catch\s*\(\s*FormatException(\s+\w+)?\s*\)/, 'Kenbe <code>catch (FormatException)</code>.', 'Attrape <code>catch (FormatException)</code>.'),
      R(c => /try\s*\{[^}]*int\.Parse/.test(c.clean), '<code>int.Parse</code> la dwe <b>anndan</b> <code>try</code> a.', '<code>int.Parse</code> doit être <b>dans</b> le <code>try</code>.'),
      R(/catch[^{]*\{\s*Console\.WriteLine\s*\(/, 'Afiche yon mesaj nan <code>catch</code>.', 'Affiche un message dans le <code>catch</code>.')
    ),
    tips: T(`<li>Kenbe eksepsyon <b>espesifik</b> (<code>FormatException</code>) olye de tout (<code>Exception</code>) lè w kapab.</li>`, `<li>Attrape des exceptions <b>spécifiques</b> (<code>FormatException</code>) plutôt que tout (<code>Exception</code>) quand c'est possible.</li>`),
    recap: T(`<li><code>try { risk } catch (TipEksepsyon) { plan B }</code></li>`, `<li><code>try { risque } catch (TypeException) { plan B }</code></li>`)
  },
  {
    id: 'cs-finally',
    title: T('Plizyè catch ak finally', 'Plusieurs catch et finally'),
    theory: T(
      `<pre>try
{
    Console.WriteLine(10 / zewo);
}
catch (DivideByZeroException)
{
    Console.WriteLine("Ou pa ka divize pa 0!");
}
catch (Exception e)          // tout lòt erè
{
    Console.WriteLine("Erè: " + e.Message);
}
finally
{
    Console.WriteLine("Fini.");   // TOUJOU egzekite
}</pre>
       <ul><li>C# tcheke <code>catch</code> yo <b>nan lòd</b>: mete pi espesifik yo an premye, <code>Exception</code> an dènye.</li>
       <li><code>finally</code> egzekite kit gen erè kit pa genyen — bon pou <b>fèmen</b> fichye oswa koneksyon.</li>
       <li><code>e.Message</code> bay deskripsyon erè a.</li></ul>`,
      `<pre>try
{
    Console.WriteLine(10 / zero);
}
catch (DivideByZeroException)
{
    Console.WriteLine("Impossible de diviser par 0 !");
}
catch (Exception e)          // toutes les autres erreurs
{
    Console.WriteLine("Erreur : " + e.Message);
}
finally
{
    Console.WriteLine("Terminé.");   // TOUJOURS exécuté
}</pre>
       <ul><li>C# teste les <code>catch</code> <b>dans l'ordre</b> : les plus spécifiques d'abord, <code>Exception</code> en dernier.</li>
       <li><code>finally</code> s'exécute avec ou sans erreur — idéal pour <b>fermer</b> des fichiers ou connexions.</li>
       <li><code>e.Message</code> donne la description de l'erreur.</li></ul>`
    ),
    task: T(
      'Mete <code>a / b</code> nan yon <code>try</code>. Kenbe <code>DivideByZeroException</code> (afiche <b>"Divizyon pa zewo!"</b>), epi ajoute yon <code>finally</code> ki afiche <b>"Fini."</b>.',
      'Place <code>a / b</code> dans un <code>try</code>. Attrape <code>DivideByZeroException</code> (affiche <b>"Division par zéro !"</b>), puis ajoute un <code>finally</code> qui affiche <b>"Fini."</b>.'
    ),
    hint: T('3 blòk: <code>try { … } catch (DivideByZeroException) { … } finally { … }</code>', '3 blocs : <code>try { … } catch (DivideByZeroException) { … } finally { … }</code>'),
    starter: csProg({ main: 'int a = 10;\nint b = 0;\n\n// ✍️' }),
    solution: csProg({ main: 'int a = 10;\nint b = 0;\n\ntry\n{\n    Console.WriteLine(a / b);\n}\ncatch (DivideByZeroException)\n{\n    Console.WriteLine("Divizyon pa zewo!");\n}\nfinally\n{\n    Console.WriteLine("Fini.");\n}' }),
    output: ({ code }) => `${(code.match(/catch\s*\(\s*DivideByZeroException[^)]*\)\s*\{\s*Console\.WriteLine\s*\(\s*"([^"]*)"/) || [])[1] || ''}\n${(code.match(/finally\s*\{\s*Console\.WriteLine\s*\(\s*"([^"]*)"/) || [])[1] || ''}`,
    check: need(
      R(/try\s*\{[^}]*a\s*\/\s*b/, 'Mete <code>a / b</code> anndan <code>try</code>.', 'Place <code>a / b</code> dans le <code>try</code>.'),
      R(/catch\s*\(\s*DivideByZeroException(\s+\w+)?\s*\)/, 'Kenbe <code>DivideByZeroException</code>.', 'Attrape <code>DivideByZeroException</code>.'),
      R(/finally\s*\{\s*Console\.WriteLine/, 'Ajoute <code>finally { Console.WriteLine("Fini."); }</code>.', 'Ajoute <code>finally { Console.WriteLine("Fini."); }</code>.')
    ),
    tips: T(`<li>Si w mete <code>catch (Exception)</code> an premye, lòt <code>catch</code> yo pa janm itil — erè CS0160.</li>`, `<li>Si <code>catch (Exception)</code> est en premier, les autres <code>catch</code> ne servent jamais — erreur CS0160.</li>`),
    recap: T(`<li>Plizyè <code>catch</code>: espesifik → jeneral.</li><li><code>finally</code> = toujou.</li>`, `<li>Plusieurs <code>catch</code> : spécifique → général.</li><li><code>finally</code> = toujours.</li>`)
  },
  {
    id: 'cs-throw',
    title: T('Voye eksepsyon: throw', 'Lever des exceptions : throw'),
    theory: T(
      `<p>Ou ka <b>voye</b> pwòp eksepsyon pa w lè yon done pa valid. Sa <b>pwoteje</b> kòd ou:</p>
       <pre>static void Retire(double montan)
{
    if (montan &lt;= 0)
        throw new ArgumentException("Montan an dwe pozitif");

    Console.WriteLine($"Ou retire {montan} goud");
}

try
{
    Retire(-50);
}
catch (ArgumentException e)
{
    Console.WriteLine(e.Message);   // Montan an dwe pozitif
}</pre>
       <p>Prensip la: <b>"echwe vit"</b> (fail fast) — refize move done touswit olye de kontinye ak yon rezilta fo.</p>`,
      `<p>On peut <b>lever</b> ses propres exceptions quand une donnée est invalide. Ça <b>protège</b> le code :</p>
       <pre>static void Retirer(double montant)
{
    if (montant &lt;= 0)
        throw new ArgumentException("Le montant doit être positif");

    Console.WriteLine($"Vous retirez {montant} gourdes");
}

try
{
    Retirer(-50);
}
catch (ArgumentException e)
{
    Console.WriteLine(e.Message);   // Le montant doit être positif
}</pre>
       <p>Le principe : <b>« échouer vite »</b> (fail fast) — refuser tout de suite une mauvaise donnée plutôt que continuer avec un résultat faux.</p>`
    ),
    task: T(
      'Nan <code>Retire</code>, si <code>montan &lt;= 0</code>, <code>throw new ArgumentException("…")</code>. Nan <code>Main</code>, rele <code>Retire(-50)</code> nan yon <code>try</code> epi afiche <code>e.Message</code> nan <code>catch</code>.',
      'Dans <code>Retire</code>, si <code>montan &lt;= 0</code>, fais <code>throw new ArgumentException("…")</code>. Dans <code>Main</code>, appelle <code>Retire(-50)</code> dans un <code>try</code> et affiche <code>e.Message</code> dans le <code>catch</code>.'
    ),
    hint: T('<code>catch (ArgumentException e) { Console.WriteLine(e.Message); }</code>', '<code>catch (ArgumentException e) { Console.WriteLine(e.Message); }</code>'),
    starter: csProg({ inside: 'static void Retire(double montan)\n{\n    // ✍️ verifye montan an\n\n    Console.WriteLine($"Ou retire {montan} goud");\n}' }),
    solution: csProg({ main: 'try\n{\n    Retire(-50);\n}\ncatch (ArgumentException e)\n{\n    Console.WriteLine(e.Message);\n}', inside: 'static void Retire(double montan)\n{\n    if (montan <= 0)\n    {\n        throw new ArgumentException("Montan an dwe pozitif");\n    }\n\n    Console.WriteLine($"Ou retire {montan} goud");\n}' }),
    output: ({ code }) => (code.match(/new\s+ArgumentException\s*\(\s*"([^"]*)"/) || [])[1] || '',
    check: need(
      R(/if\s*\(\s*montan\s*<=?\s*0\s*\)/, 'Tcheke <code>if (montan &lt;= 0)</code>.', 'Teste <code>if (montan &lt;= 0)</code>.'),
      R(/throw\s+new\s+ArgumentException\s*\(\s*"[^"]+"\s*\)\s*;/, 'Ekri <code>throw new ArgumentException("…");</code>', 'Écris <code>throw new ArgumentException("…");</code>'),
      R(inMain(/try\s*\{[^}]*Retire\s*\(\s*-\s*\d+\s*\)/), 'Nan Main, rele <code>Retire(-50)</code> nan yon <code>try</code>.', 'Dans Main, appelle <code>Retire(-50)</code> dans un <code>try</code>.'),
      R(/catch\s*\(\s*ArgumentException\s+(\w+)\s*\)\s*\{[^}]*\1\.Message/, 'Nan <code>catch (ArgumentException e)</code>, afiche <code>e.Message</code>.', 'Dans <code>catch (ArgumentException e)</code>, affiche <code>e.Message</code>.')
    ),
    tips: T(`<li>Mo kle a se <code>throw</code>, epi fò w <code>new</code> eksepsyon an.</li><li>Pa itilize eksepsyon pou lojik nòmal (tankou yon <code>if</code>) — sèlman pou sitiyasyon <b>anòmal</b>.</li>`, `<li>Le mot-clé est <code>throw</code>, et il faut un <code>new</code>.</li><li>N'utilise pas les exceptions pour la logique normale (comme un <code>if</code>) — seulement pour les situations <b>anormales</b>.</li>`),
    recap: T(`<li><code>throw new XException("mesaj");</code></li><li>Echwe vit.</li>`, `<li><code>throw new XException("message");</code></li><li>Échouer vite.</li>`)
  },
  {
    id: 'cs-tryparse',
    title: T('TryParse: konvèsyon san risk', 'TryParse : conversion sans risque'),
    theory: T(
      `<p><code>int.Parse</code> kraze si tèks la pa valid. <code>int.TryParse</code> <b>eseye</b>, epi li retounen <code>true</code>/<code>false</code> — san eksepsyon:</p>
       <pre>string antre = Console.ReadLine();

if (int.TryParse(antre, out int laj))
{
    Console.WriteLine($"Ane pwochèn: {laj + 1}");
}
else
{
    Console.WriteLine("Tanpri antre yon nonm.");
}</pre>
       <p>Konbine l ak yon bouk pou <b>re-mande</b> jiskaske moun nan antre yon bon valè. Se fason pwofesyonèl pou <b>valide</b> antre itilizatè.</p>`,
      `<p><code>int.Parse</code> plante si le texte est invalide. <code>int.TryParse</code> <b>essaie</b>, et renvoie <code>true</code>/<code>false</code> — sans exception :</p>
       <pre>string saisie = Console.ReadLine();

if (int.TryParse(saisie, out int age))
{
    Console.WriteLine($"L'an prochain : {age + 1}");
}
else
{
    Console.WriteLine("Merci d'entrer un nombre.");
}</pre>
       <p>Combine-le avec une boucle pour <b>redemander</b> jusqu'à une bonne valeur. C'est la façon pro de <b>valider</b> une saisie.</p>`
    ),
    task: T(
      'Ak <code>int.TryParse(antre, out int n)</code>: si li reyisi afiche <code>n * 2</code>, sinon afiche <b>"Antre pa valid"</b>.',
      'Avec <code>int.TryParse(antre, out int n)</code> : si ça réussit affiche <code>n * 2</code>, sinon affiche <b>"Saisie invalide"</b>.'
    ),
    hint: T('<code>if (int.TryParse(antre, out int n)) { … } else { … }</code>', '<code>if (int.TryParse(antre, out int n)) { … } else { … }</code>'),
    starter: csProg({ main: 'string antre = "42x";\n\n// ✍️' }),
    solution: csProg({ main: 'string antre = "42x";\n\nif (int.TryParse(antre, out int n))\n{\n    Console.WriteLine(n * 2);\n}\nelse\n{\n    Console.WriteLine("Antre pa valid");\n}' }),
    output: ({ code }) => (code.match(/else\s*\{?\s*Console\.WriteLine\s*\(\s*"([^"]*)"/) || [])[1] || '',
    check: need(
      R(/int\.TryParse\s*\(\s*antre\s*,\s*out\s+(int|var)\s+n\s*\)/, 'Itilize <code>int.TryParse(antre, out int n)</code>.', 'Utilise <code>int.TryParse(antre, out int n)</code>.'),
      R(/if\s*\(\s*int\.TryParse/, 'Mete <code>TryParse</code> la nan yon <code>if</code>.', 'Place le <code>TryParse</code> dans un <code>if</code>.'),
      R(/n\s*\*\s*2/, 'Si li reyisi, afiche <code>n * 2</code>.', 'En cas de succès, affiche <code>n * 2</code>.'),
      R(/\belse\b/, 'Ajoute yon <code>else</code> pou ka a ki pa valid.', 'Ajoute un <code>else</code> pour le cas invalide.')
    ),
    tips: T(`<li>Varyab <code>out int n</code> la egziste <b>apre</b> <code>if</code> la tou.</li><li>Gen <code>double.TryParse</code>, <code>DateTime.TryParse</code>… tou.</li>`, `<li>La variable <code>out int n</code> existe aussi <b>après</b> le <code>if</code>.</li><li>Il existe aussi <code>double.TryParse</code>, <code>DateTime.TryParse</code>…</li>`),
    recap: T(`<li><code>TryParse</code> = pa gen eksepsyon, retounen <code>bool</code>.</li>`, `<li><code>TryParse</code> = pas d'exception, renvoie un <code>bool</code>.</li>`)
  },
  {
    id: 'cs-calc',
    title: T('🏆 Mini-pwojè: kalkilatris', '🏆 Mini-projet : calculatrice'),
    theory: T(
      `<p>Ann konbine <b>metòd</b>, <b>switch</b>, ak <b>eksepsyon</b> pou bati yon kalkilatris solid!</p>
       <pre>static double Kalkile(double a, double b, char op)
{
    switch (op)
    {
        case '+': return a + b;
        case '-': return a - b;
        // …
        default:
            throw new ArgumentException($"Operatè enkoni: {op}");
    }
}</pre>
       <p>Remake: <code>return</code> nan yon <code>case</code> ranplase <code>break</code>. Epi metòd la dwe toujou retounen yon valè <b>oswa</b> voye yon eksepsyon — se poutèt sa <code>default</code> la <code>throw</code>.</p>`,
      `<p>Combinons <b>méthodes</b>, <b>switch</b> et <b>exceptions</b> pour construire une calculatrice solide !</p>
       <pre>static double Calculer(double a, double b, char op)
{
    switch (op)
    {
        case '+': return a + b;
        case '-': return a - b;
        // …
        default:
            throw new ArgumentException($"Opérateur inconnu : {op}");
    }
}</pre>
       <p>Remarque : un <code>return</code> dans un <code>case</code> remplace le <code>break</code>. Et la méthode doit toujours renvoyer une valeur <b>ou</b> lever une exception — d'où le <code>throw</code> dans <code>default</code>.</p>`
    ),
    task: T(
      'Konplete <code>Kalkile</code> pou <code>+ - * /</code>. Pou <code>/</code>, si <code>b == 0</code>, <code>throw new DivideByZeroException()</code>. Nan <code>Main</code>, teste <code>Kalkile(10, 0, \'/\')</code> nan yon <code>try/catch</code>.',
      'Complète <code>Kalkile</code> pour <code>+ - * /</code>. Pour <code>/</code>, si <code>b == 0</code>, fais <code>throw new DivideByZeroException()</code>. Dans <code>Main</code>, teste <code>Kalkile(10, 0, \'/\')</code> dans un <code>try/catch</code>.'
    ),
    hint: T('<code>case \'/\': if (b == 0) throw new DivideByZeroException(); return a / b;</code>', '<code>case \'/\': if (b == 0) throw new DivideByZeroException(); return a / b;</code>'),
    starter: csProg({
      main: 'Console.WriteLine(Kalkile(10, 5, \'+\'));\nConsole.WriteLine(Kalkile(10, 5, \'*\'));\n\n// ✍️ teste divizyon pa zewo',
      inside: 'static double Kalkile(double a, double b, char op)\n{\n    switch (op)\n    {\n        case \'+\': return a + b;\n        // ✍️\n        default:\n            throw new ArgumentException($"Operatè enkoni: {op}");\n    }\n}'
    }),
    solution: csProg({
      main: 'Console.WriteLine(Kalkile(10, 5, \'+\'));\nConsole.WriteLine(Kalkile(10, 5, \'*\'));\n\ntry\n{\n    Console.WriteLine(Kalkile(10, 0, \'/\'));\n}\ncatch (DivideByZeroException)\n{\n    Console.WriteLine("Divizyon pa zewo!");\n}',
      inside: 'static double Kalkile(double a, double b, char op)\n{\n    switch (op)\n    {\n        case \'+\': return a + b;\n        case \'-\': return a - b;\n        case \'*\': return a * b;\n        case \'/\':\n            if (b == 0) throw new DivideByZeroException();\n            return a / b;\n        default:\n            throw new ArgumentException($"Operatè enkoni: {op}");\n    }\n}'
    }),
    output: '15\n50\nDivizyon pa zewo!',
    check: need(
      R(c => ['-', '\\*', '/'].every(o => new RegExp("case\\s*'" + o + "'\\s*:").test(c.clean)), 'Ajoute <code>case \'-\'</code>, <code>case \'*\'</code> ak <code>case \'/\'</code>.', 'Ajoute <code>case \'-\'</code>, <code>case \'*\'</code> et <code>case \'/\'</code>.'),
      R(/if\s*\(\s*b\s*==\s*0\s*\)\s*\{?\s*throw\s+new\s+DivideByZeroException\s*\(/, 'Pou <code>/</code>: <code>if (b == 0) throw new DivideByZeroException();</code>', 'Pour <code>/</code> : <code>if (b == 0) throw new DivideByZeroException();</code>'),
      R(inMain(/try\s*\{[^}]*Kalkile\s*\(\s*\d+\s*,\s*0\s*,\s*'\/'\s*\)/), 'Nan Main, teste <code>Kalkile(10, 0, \'/\')</code> nan yon <code>try</code>.', 'Dans Main, teste <code>Kalkile(10, 0, \'/\')</code> dans un <code>try</code>.'),
      R(inMain(/catch\s*\(\s*(DivideByZeroException|Exception)/), 'Kenbe eksepsyon an ak <code>catch (DivideByZeroException)</code>.', 'Attrape l\'exception avec <code>catch (DivideByZeroException)</code>.')
    ),
    tips: T(`<li>Pou <code>double</code>, <code>10.0 / 0</code> pa voye eksepsyon — li bay <code>∞</code>! Se poutèt sa nou tcheke <code>b == 0</code> nou menm.</li>`, `<li>Avec des <code>double</code>, <code>10.0 / 0</code> ne lève pas d'exception — ça donne <code>∞</code> ! C'est pourquoi on teste <code>b == 0</code> nous-mêmes.</li>`),
    recap: T(`<li>Metòd + switch + throw + try/catch = kòd solid.</li><li>🎉 Fen mwa 5!</li>`, `<li>Méthodes + switch + throw + try/catch = code solide.</li><li>🎉 Fin du mois 5 !</li>`)
  }
);

addDetails({
  'cs-5': {
    tips: T(`<li>Tip <code>return</code> lan dwe koresponn ak tip metòd la: <code>static int</code> → <code>return</code> yon <code>int</code>.</li><li>Erè CS0161: "pa tout chemen retounen yon valè" — chak branch <code>if</code> bezwen yon <code>return</code>.</li>`, `<li>Le type du <code>return</code> doit correspondre au type de la méthode : <code>static int</code> → renvoie un <code>int</code>.</li><li>Erreur CS0161 : « tous les chemins ne renvoient pas de valeur » — chaque branche <code>if</code> doit avoir un <code>return</code>.</li>`),
    recap: T(`<li><code>static TipRetou Non(params) { return …; }</code></li>`, `<li><code>static TypeRetour Nom(params) { return …; }</code></li>`)
  }
});
