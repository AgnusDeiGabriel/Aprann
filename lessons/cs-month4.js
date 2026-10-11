/* ======================= MWA 4 — C# Fondasyon (semèn 13-16) ======================= */
MODULES.push({
  id: 'cs',
  icon: '🚀',
  color: '#a78bfa',
  lang: 'cs',
  file: 'Program.cs',
  name: T('Zile C#', 'Île C#'),
  desc: T('Lang pwofesyonèl pou aplikasyon, sit web ak jwèt (Unity)', 'Langage pro pour applis, sites web et jeux (Unity)'),
  duration: T('Mwa 4-8 · 20 semèn', 'Mois 4-8 · 20 semaines'),
  weeks: [
    T('Premye pa: estrikti, varyab, tip', 'Premiers pas : structure, variables, types'),
    T('Done ak desizyon', 'Données et décisions'),
    T('Plis desizyon ak bouk', 'Plus de décisions et boucles'),
    T('Bouk ak tablo', 'Boucles et tableaux'),
    T('Metòd', 'Les méthodes'),
    T('Travay ak tèks', 'Travailler avec le texte'),
    T('Koleksyon: List, Dictionary', 'Collections : List, Dictionary'),
    T('Erè ak eksepsyon', 'Erreurs et exceptions'),
    T('Klas ak objè', 'Classes et objets'),
    T('Ankapsilasyon', 'Encapsulation'),
    T('Eritaj ak polimòfis', 'Héritage et polymorphisme'),
    T('Entèfas, enum, struct, record', 'Interfaces, enum, struct, record'),
    T('Jenerik ak tip modèn', 'Génériques et types modernes'),
    T('Delege, lambda, evènman', 'Délégués, lambdas, événements'),
    T('LINQ', 'LINQ'),
    T('Dat, fichye, JSON', 'Dates, fichiers, JSON'),
    T('Asenkwon ak async/await', 'Asynchrone et async/await'),
    T('Pwojè: sistèm bank', 'Projet : système bancaire'),
    T('Jwèt ak Unity', 'Jeux et Unity'),
    T('Web API ak pwojè final', 'Web API et projet final')
  ],
  lessons: [
    /* ---------- Semèn 13 ---------- */
{
      id: 'cs-1',
      title: T('Bonjou C#', 'Bonjour C#'),
      theory: T(
        `<p><b>C#</b> (di "C-sharp") se yon lang Microsoft kreye. Nou itilize l pou aplikasyon Windows, sit web (ASP.NET), ak jwèt video ak <b>Unity</b>.</p>
         <p>Diferan ak JavaScript, C# se yon lang <b>konpile</b> ak <b>tip estrik</b>. Chak pwogram kòmanse nan metòd <code>Main</code>:</p>
         <pre>using System;

class Program
{
    static void Main()
    {
      Console.WriteLine("Bonjou!");
    }
}</pre>
         <p><code>Console.WriteLine</code> = <code>console.log</code> nan JS. Chak enstriksyon <b>dwe</b> fini ak <code>;</code></p>
         <p class="note">ℹ️ Nan jwèt la, nou <b>analize</b> kòd C# ou a (similasyon). Pou egzekite l vre, enstale <b>.NET SDK</b> epi itilize <code>dotnet run</code>.</p>`,
        `<p><b>C#</b> (dit « C-sharp ») est un langage créé par Microsoft. On l'utilise pour des applications Windows, des sites web (ASP.NET) et des jeux vidéo avec <b>Unity</b>.</p>
         <p>Contrairement à JavaScript, C# est un langage <b>compilé</b> et <b>fortement typé</b>. Chaque programme commence dans la méthode <code>Main</code> :</p>
         <pre>using System;

class Program
{
    static void Main()
    {
      Console.WriteLine("Bonjour !");
    }
}</pre>
         <p><code>Console.WriteLine</code> = <code>console.log</code> en JS. Chaque instruction <b>doit</b> finir par <code>;</code></p>
         <p class="note">ℹ️ Dans le jeu, ton code C# est <b>analysé</b> (simulation). Pour l'exécuter réellement, installe le <b>.NET SDK</b> et utilise <code>dotnet run</code>.</p>`
      ),
      task: T('Anndan <code>Main</code>, afiche <b>"Bonjou Mond!"</b> ak <code>Console.WriteLine</code>.', 'Dans <code>Main</code>, affiche <b>"Bonjour le monde !"</b> avec <code>Console.WriteLine</code>.'),
      hint: T('<code>Console.WriteLine("Bonjou Mond!");</code> — C majiskil, W majiskil, L majiskil!', '<code>Console.WriteLine("Bonjour le monde !");</code> — C, W et L en majuscules !'),
      starter: CS_STARTER,
      solution: CS_STARTER.replace('// ✍️', 'Console.WriteLine("Bonjou Mond!");'),
      check: ({ clean }) => {
        if (/console\.writeline/i.test(clean) && !/Console\.WriteLine/.test(clean)) return T('C# sansib a majiskil: ekri <code>Console.WriteLine</code> egzakteman.', 'C# est sensible à la casse : écris exactement <code>Console.WriteLine</code>.');
        if (!/Console\.WriteLine\s*\(\s*\$?"[^"]+"\s*\)\s*;/.test(clean)) return T('Mwen pa wè <code>Console.WriteLine("…");</code> ak yon tèks ladan l.', 'Je ne vois pas <code>Console.WriteLine("…");</code> avec un texte dedans.');
        return true;
      }
    },
    {
      id: 'cs-comments',
      title: T('Estrikti ak kòmantè', 'Structure et commentaires'),
      theory: T(
        `<p>Ann egzamine chak pati yon pwogram C#:</p>
         <pre>using System;          // itilize bibliyotèk "System" (Console…)

class Program          // tout kòd la viv nan yon klas
{
    static void Main()  // pwen depa pwogram nan
    {
        Console.WriteLine("Liy 1");
        Console.WriteLine("Liy 2");
    }
}</pre>
         <p><b>Kòmantè</b> yo se nòt pou moun — konpilatè a inyore yo:</p>
         <pre>// kòmantè sou yon liy

/* kòmantè
   sou plizyè liy */</pre>
         <p>Bon kòmantè eksplike <b>poukisa</b>, pa <b>kisa</b> (kòd la deja di kisa).</p>`,
        `<p>Examinons chaque partie d'un programme C# :</p>
         <pre>using System;          // utilise la bibliothèque "System" (Console…)

class Program          // tout le code vit dans une classe
{
    static void Main()  // point de départ du programme
    {
        Console.WriteLine("Ligne 1");
        Console.WriteLine("Ligne 2");
    }
}</pre>
         <p>Les <b>commentaires</b> sont des notes pour les humains — le compilateur les ignore :</p>
         <pre>// commentaire sur une ligne

/* commentaire
   sur plusieurs lignes */</pre>
         <p>Un bon commentaire explique <b>pourquoi</b>, pas <b>quoi</b> (le code dit déjà quoi).</p>`
      ),
      task: T(
        'Ekri yon kòmantè <code>/* … */</code> ki di kiyès ou ye, epi afiche <b>2 liy</b> ak <code>Console.WriteLine</code>.',
        'Écris un commentaire <code>/* … */</code> qui dit qui tu es, puis affiche <b>2 lignes</b> avec <code>Console.WriteLine</code>.'
      ),
      hint: T('<code>/* Pwogram Ana */</code> epi 2 <code>Console.WriteLine("…");</code>', '<code>/* Programme d\'Ana */</code> puis 2 <code>Console.WriteLine("…");</code>'),
      starter: CS_STARTER,
      solution: csProg({ main: '/* Pwogram Ana — premye jou C# */\nConsole.WriteLine("Mwen rele Ana.");\nConsole.WriteLine("M ap aprann C#!");' }),
      check: need(
        R(c => /\/\*[\s\S]*?\S[\s\S]*?\*\//.test(c.code), 'Ajoute yon kòmantè <code>/* … */</code>.', 'Ajoute un commentaire <code>/* … */</code>.'),
        R(c => (c.clean.match(/Console\.WriteLine\s*\(\s*\$?"[^"]*"\s*\)\s*;/g) || []).length >= 2, 'Afiche omwen 2 liy ak <code>Console.WriteLine("…");</code>', 'Affiche au moins 2 lignes avec <code>Console.WriteLine("…");</code>')
      ),
      tips: T(
        `<li>Pa bliye fèmen <code>*/</code> — sinon tout rès kòd la vin kòmantè!</li><li><code>Console.Write</code> (san Line) pa ale nan liy.</li>`,
        `<li>N'oublie pas de fermer <code>*/</code> — sinon tout le reste devient commentaire !</li><li><code>Console.Write</code> (sans Line) ne revient pas à la ligne.</li>`
      ),
      recap: T(
        `<li><code>using</code> → <code>class</code> → <code>Main</code>.</li><li><code>//</code> ak <code>/* */</code> = kòmantè.</li>`,
        `<li><code>using</code> → <code>class</code> → <code>Main</code>.</li><li><code>//</code> et <code>/* */</code> = commentaires.</li>`
      )
    },
{
      id: 'cs-2',
      title: T('Varyab ak tip', 'Variables et types'),
      theory: T(
        `<p>Nan C#, chak varyab gen yon <b>tip</b> ki di ki kalite done li ka kenbe:</p>
         <pre>int laj = 17;            // nonm antye
double pri = 99.50;      // nonm ak vigil
string non = "Jowèl";    // tèks
bool ayisyen = true;     // vre / fo</pre>
         <p>Pou mete varyab nan yon tèks, itilize <b>entèpolasyon</b> ak <code>$</code>:</p>
         <pre>Console.WriteLine($"{non} gen {laj} an.");</pre>`,
        `<p>En C#, chaque variable a un <b>type</b> qui indique le genre de données qu'elle peut contenir :</p>
         <pre>int age = 17;            // nombre entier
double prix = 99.50;     // nombre à virgule
string nom = "Joël";     // texte
bool haitien = true;     // vrai / faux</pre>
         <p>Pour insérer des variables dans un texte, utilise l'<b>interpolation</b> avec <code>$</code> :</p>
         <pre>Console.WriteLine($"{nom} a {age} ans.");</pre>`
      ),
      task: T('Kreye yon <code>string non</code> ak yon <code>int laj</code>, epi afiche yo ak <code>Console.WriteLine($"…")</code>.', 'Crée un <code>string non</code> et un <code>int laj</code>, puis affiche-les avec <code>Console.WriteLine($"…")</code>.'),
      hint: T('<code>string non = "Mari";</code> <code>int laj = 20;</code> <code>Console.WriteLine($"{non} gen {laj} an");</code>', '<code>string non = "Marie";</code> <code>int laj = 20;</code> <code>Console.WriteLine($"{non} a {laj} ans");</code>'),
      starter: CS_STARTER,
      solution: CS_STARTER.replace('// ✍️', 'string non = "Mari";\n        int laj = 20;\n        Console.WriteLine($"{non} gen {laj} an.");'),
      output: ({ code }) => {
        const n = (code.match(/string\s+non\s*=\s*"([^"]*)"/) || [])[1];
        const a = (code.match(/int\s+laj\s*=\s*(\d+)/) || [])[1];
        const f = (code.match(/Console\.WriteLine\s*\(\s*\$"([^"]*)"/) || [])[1] || '';
        return f.replace(/\{\s*non\s*\}/g, n).replace(/\{\s*laj\s*\}/g, a);
      },
      check: ({ clean }) => {
        if (!/\bstring\s+non\s*=\s*"[^"]*"\s*;/.test(clean)) return T('Kreye <code>string non = "…";</code>', 'Crée <code>string non = "…";</code>');
        if (/\bint\s+laj\s*=\s*"/.test(clean)) return T('erè CS0029: yon <code>int</code> pa ka resevwa tèks. Retire gimè yo: <code>int laj = 20;</code>', 'erreur CS0029 : un <code>int</code> ne peut pas recevoir de texte. Retire les guillemets : <code>int laj = 20;</code>');
        if (!/\bint\s+laj\s*=\s*\d+\s*;/.test(clean)) return T('Kreye <code>int laj = …;</code> ak yon nonm.', 'Crée <code>int laj = …;</code> avec un nombre.');
        if (!/Console\.WriteLine\s*\(\s*\$"[^"]*\{\s*non\s*\}[^"]*"/.test(clean) || !/\{\s*laj\s*\}/.test(clean)) return T('Afiche tou de varyab yo ak <code>$"… {non} … {laj} …"</code>.', 'Affiche les deux variables avec <code>$"… {non} … {laj} …"</code>.');
        return true;
      }
    },
    {
      id: 'cs-types',
      title: T('Plis tip: double, bool, char, const', 'Plus de types : double, bool, char, const'),
      theory: T(
        `<pre>int      laj = 17;          // antye: -2 milya → 2 milya
long     popilasyon = 11500000000;
double   pri = 12.5;        // nonm ak vigil (pwen!)
decimal  lajan = 99.95m;    // pou lajan (pi presi) — m nan fen
bool     aktif = true;      // true / false
char     inisyal = 'A';     // YON karaktè, ant gimè SENP
string   non = "Ana";       // tèks, ant gimè DOUB

const double TAKS = 0.10;   // konstant: pa ka chanje</pre>
         <p>Kote C# diferan ak JS: yon fwa yon varyab gen yon tip, li <b>pa ka chanje tip</b>. <code>laj = "disèt";</code> → erè konpilasyon!</p>
         <p><code>var</code> kite C# devine tip la: <code>var x = 5;</code> (x se <code>int</code>).</p>`,
        `<pre>int      age = 17;          // entier : -2 milliards → 2 milliards
long     population = 11500000000;
double   prix = 12.5;       // nombre décimal (point !)
decimal  argent = 99.95m;   // pour l'argent (plus précis) — m à la fin
bool     actif = true;      // true / false
char     initiale = 'A';    // UN caractère, guillemets SIMPLES
string   nom = "Ana";       // texte, guillemets DOUBLES

const double TAXE = 0.10;   // constante : non modifiable</pre>
         <p>Différence avec JS : une fois typée, une variable <b>ne peut pas changer de type</b>. <code>age = "dix-sept";</code> → erreur de compilation !</p>
         <p><code>var</code> laisse C# deviner le type : <code>var x = 5;</code> (x est un <code>int</code>).</p>`
      ),
      task: T(
        'Deklare: <code>double pri = 12.5;</code>, <code>bool disponib = true;</code>, <code>char inisyal = \'A\';</code> ak <code>const int MAX = 10;</code>, epi afiche <code>pri</code>.',
        'Déclare : <code>double pri = 12.5;</code>, <code>bool disponib = true;</code>, <code>char inisyal = \'A\';</code> et <code>const int MAX = 10;</code>, puis affiche <code>pri</code>.'
      ),
      hint: T('Pou <code>char</code>, se gimè <b>senp</b>: <code>\'A\'</code>.', 'Pour <code>char</code>, ce sont des guillemets <b>simples</b> : <code>\'A\'</code>.'),
      starter: CS_STARTER,
      solution: csProg({ main: 'double pri = 12.5;\nbool disponib = true;\nchar inisyal = \'A\';\nconst int MAX = 10;\n\nConsole.WriteLine(pri);' }),
      output: '12.5',
      check: need(
        R(/\bdouble\s+pri\s*=\s*\d+(\.\d+)?\s*;/, 'Deklare <code>double pri = 12.5;</code>', 'Déclare <code>double pri = 12.5;</code>'),
        R(/\bbool\s+disponib\s*=\s*(true|false)\s*;/, 'Deklare <code>bool disponib = true;</code> (san gimè).', 'Déclare <code>bool disponib = true;</code> (sans guillemets).'),
        R(/\bchar\s+inisyal\s*=\s*'.'\s*;/, 'Deklare <code>char inisyal = \'A\';</code> — gimè senp, yon sèl karaktè.', 'Déclare <code>char inisyal = \'A\';</code> — guillemets simples, un seul caractère.'),
        R(/\bconst\s+int\s+MAX\s*=\s*\d+\s*;/, 'Deklare <code>const int MAX = 10;</code>', 'Déclare <code>const int MAX = 10;</code>'),
        R(/Console\.WriteLine\s*\(\s*pri\s*\)\s*;/, 'Afiche <code>pri</code>: <code>Console.WriteLine(pri);</code>', 'Affiche <code>pri</code> : <code>Console.WriteLine(pri);</code>')
      ),
      tips: T(
        `<li><code>"A"</code> se yon <code>string</code>; <code>'A'</code> se yon <code>char</code>.</li><li>Itilize <b>pwen</b> pou desimal: <code>12.5</code>, pa <code>12,5</code>.</li><li><code>true</code>, pa <code>True</code> ni <code>"true"</code>.</li>`,
        `<li><code>"A"</code> est un <code>string</code> ; <code>'A'</code> est un <code>char</code>.</li><li>Utilise un <b>point</b> pour les décimales : <code>12.5</code>, pas <code>12,5</code>.</li><li><code>true</code>, pas <code>True</code> ni <code>"true"</code>.</li>`
      ),
      recap: T(
        `<li><code>int</code>, <code>double</code>, <code>decimal</code>, <code>bool</code>, <code>char</code>, <code>string</code>.</li><li><code>const</code> = valè fiks.</li>`,
        `<li><code>int</code>, <code>double</code>, <code>decimal</code>, <code>bool</code>, <code>char</code>, <code>string</code>.</li><li><code>const</code> = valeur fixe.</li>`
      )
    },
    {
      id: 'cs-math',
      title: T('Operatè aritmetik', 'Opérateurs arithmétiques'),
      theory: T(
        `<pre>int a = 17, b = 5;
Console.WriteLine(a + b);   // 22
Console.WriteLine(a - b);   // 12
Console.WriteLine(a * b);   // 85
Console.WriteLine(a / b);   // 3   ⚠️ divizyon ANTYE
Console.WriteLine(a % b);   // 2   (rès)</pre>
         <p>⚠️ Lè <b>2 antye</b> divize, C# <b>koupe</b> vigil la: <code>17 / 5</code> = <code>3</code>, pa 3.4! Pou jwenn desimal yo, konvèti youn an <code>double</code>:</p>
         <pre>Console.WriteLine((double)a / b);  // 3.4</pre>
         <p><code>(double)</code> devan yon valè rele yon <b>cast</b> (konvèsyon fòse).</p>
         <p>Raccourci: <code>x += 5;</code> <code>x -= 2;</code> <code>x *= 3;</code> <code>x++;</code> <code>x--;</code></p>`,
        `<pre>int a = 17, b = 5;
Console.WriteLine(a + b);   // 22
Console.WriteLine(a - b);   // 12
Console.WriteLine(a * b);   // 85
Console.WriteLine(a / b);   // 3   ⚠️ division ENTIÈRE
Console.WriteLine(a % b);   // 2   (reste)</pre>
         <p>⚠️ Quand on divise <b>2 entiers</b>, C# <b>tronque</b> la partie décimale : <code>17 / 5</code> = <code>3</code>, pas 3,4 ! Pour avoir les décimales, convertis l'un en <code>double</code> :</p>
         <pre>Console.WriteLine((double)a / b);  // 3.4</pre>
         <p><code>(double)</code> devant une valeur s'appelle un <b>cast</b> (conversion forcée).</p>
         <p>Raccourcis : <code>x += 5;</code> <code>x -= 2;</code> <code>x *= 3;</code> <code>x++;</code> <code>x--;</code></p>`
      ),
      task: T(
        'Ak <code>a = 17</code> ak <code>b = 5</code>, afiche: <code>a / b</code>, <code>a % b</code>, epi <code>(double)a / b</code>.',
        'Avec <code>a = 17</code> et <code>b = 5</code>, affiche : <code>a / b</code>, <code>a % b</code>, puis <code>(double)a / b</code>.'
      ),
      hint: T('3 <code>Console.WriteLine</code>. Dènye a: <code>Console.WriteLine((double)a / b);</code>', '3 <code>Console.WriteLine</code>. Le dernier : <code>Console.WriteLine((double)a / b);</code>'),
      starter: csProg({ main: 'int a = 17;\nint b = 5;\n\n// ✍️' }),
      solution: csProg({ main: 'int a = 17;\nint b = 5;\n\nConsole.WriteLine(a / b);\nConsole.WriteLine(a % b);\nConsole.WriteLine((double)a / b);' }),
      output: '3\n2\n3.4',
      check: need(
        R(/Console\.WriteLine\s*\(\s*a\s*\/\s*b\s*\)/, 'Afiche <code>a / b</code>.', 'Affiche <code>a / b</code>.'),
        R(/Console\.WriteLine\s*\(\s*a\s*%\s*b\s*\)/, 'Afiche <code>a % b</code>.', 'Affiche <code>a % b</code>.'),
        R(/\(\s*double\s*\)\s*a\s*\/\s*b|a\s*\/\s*\(\s*double\s*\)\s*b/, 'Afiche <code>(double)a / b</code> pou jwenn 3.4.', 'Affiche <code>(double)a / b</code> pour obtenir 3.4.')
      ),
      tips: T(
        `<li><code>(double)(a / b)</code> bay <b>3.0</b> — divizyon an fèt anvan konvèsyon an! Mete <code>(double)</code> sou <code>a</code>.</li><li>Divizyon antye pa 0 → <code>DivideByZeroException</code>.</li>`,
        `<li><code>(double)(a / b)</code> donne <b>3.0</b> — la division se fait avant la conversion ! Mets <code>(double)</code> sur <code>a</code>.</li><li>Division entière par 0 → <code>DivideByZeroException</code>.</li>`
      ),
      recap: T(
        `<li><code>int / int</code> = antye.</li><li><code>%</code> = rès.</li><li><code>(double)</code> = cast.</li>`,
        `<li><code>int / int</code> = entier.</li><li><code>%</code> = reste.</li><li><code>(double)</code> = cast.</li>`
      )
    },

    /* ---------- Semèn 14 ---------- */
    {
      id: 'cs-interp',
      title: T('Fòmate tèks', 'Formater du texte'),
      theory: T(
        `<p>Entèpolasyon (<code>$"…"</code>) pèmèt ou fòmate valè yo ak <code>:</code>:</p>
         <pre>double pri = 1250.5;
Console.WriteLine($"{pri:F2}");    // 1250.50  (2 chif apre pwen)
Console.WriteLine($"{pri:N0}");    // 1,251    (separatè milye)
Console.WriteLine($"{0.15:P0}");   // 15 %     (pousantaj)

string non = "Ana";
Console.WriteLine($"[{non,8}]");   // [     Ana] (aliyen a dwat sou 8)
Console.WriteLine($"[{non,-8}]");  // [Ana     ] (aliyen a goch)</pre>
         <p>Karaktè espesyal nan tèks: <code>\\n</code> (nouvo liy), <code>\\t</code> (tab), <code>\\"</code> (gimè).</p>`,
        `<p>L'interpolation (<code>$"…"</code>) permet de formater les valeurs avec <code>:</code> :</p>
         <pre>double prix = 1250.5;
Console.WriteLine($"{prix:F2}");    // 1250.50  (2 chiffres après la virgule)
Console.WriteLine($"{prix:N0}");    // 1,251    (séparateur de milliers)
Console.WriteLine($"{0.15:P0}");    // 15 %     (pourcentage)

string nom = "Ana";
Console.WriteLine($"[{nom,8}]");    // [     Ana] (aligné à droite sur 8)
Console.WriteLine($"[{nom,-8}]");   // [Ana     ] (aligné à gauche)</pre>
         <p>Caractères spéciaux : <code>\\n</code> (nouvelle ligne), <code>\\t</code> (tabulation), <code>\\"</code> (guillemet).</p>`
      ),
      task: T(
        'Afiche <b>"Pri: 1250.50 goud"</b> ak entèpolasyon, an fòmatan <code>pri</code> ak <code>:F2</code>.',
        'Affiche <b>"Prix : 1250.50 gourdes"</b> avec l\'interpolation, en formatant <code>pri</code> avec <code>:F2</code>.'
      ),
      hint: T('<code>Console.WriteLine($"Pri: {pri:F2} goud");</code>', '<code>Console.WriteLine($"Prix : {pri:F2} gourdes");</code>'),
      starter: csProg({ main: 'double pri = 1250.5;\n\n// ✍️' }),
      solution: csProg({ main: 'double pri = 1250.5;\n\nConsole.WriteLine($"Pri: {pri:F2} goud");' }),
      output: ({ code }) => ((code.match(/\$"([^"]*)"/) || [])[1] || '').replace(/\{\s*pri\s*:\s*F2\s*\}/, '1250.50'),
      check: need(
        R(/\$"/, 'Itilize entèpolasyon <code>$"…"</code>.', 'Utilise l\'interpolation <code>$"…"</code>.'),
        R(/\{\s*pri\s*:\s*F2\s*\}/, 'Fòmate ak <code>{pri:F2}</code> (F majiskil).', 'Formate avec <code>{pri:F2}</code> (F majuscule).')
      ),
      tips: T(
        `<li>Pa gen espas ant <code>$</code> ak <code>"</code>.</li><li>Fòma yo sansib a majiskil: <code>F2</code>, <code>N0</code>.</li>`,
        `<li>Pas d'espace entre <code>$</code> et <code>"</code>.</li><li>Les formats sont sensibles à la casse : <code>F2</code>, <code>N0</code>.</li>`
      ),
      recap: T(
        `<li><code>{x:F2}</code> 2 desimal, <code>{x:N0}</code> milye, <code>{x:P0}</code> %.</li><li><code>\\n</code> = nouvo liy.</li>`,
        `<li><code>{x:F2}</code> 2 décimales, <code>{x:N0}</code> milliers, <code>{x:P0}</code> %.</li><li><code>\\n</code> = nouvelle ligne.</li>`
      )
    },
    {
      id: 'cs-convert',
      title: T('Konvèsyon tip', 'Conversions de types'),
      theory: T(
        `<p>Souvan ou gen yon done nan move tip (egzanp: yon nonm nan yon <code>string</code>). Gen plizyè zouti:</p>
         <pre>string tèks = "42";
int n = int.Parse(tèks);              // "42" → 42
double d = double.Parse("3.5");       // "3.5" → 3.5
int k = Convert.ToInt32("15");        // "15" → 15

double pri = 9.99;
int antye = (int)pri;                 // 9  (cast: koupe vigil la)
int awondi = (int)Math.Round(pri);    // 10

string s = n.ToString();              // 42 → "42"</pre>
         <p>Konvèsyon <b>otomatik</b> fèt sèlman lè pa gen risk pou pèdi done: <code>int → double</code> ✅, <code>double → int</code> ❌ (fò w fè cast).</p>`,
        `<p>Souvent une donnée n'est pas du bon type (par exemple un nombre dans un <code>string</code>). Plusieurs outils :</p>
         <pre>string texte = "42";
int n = int.Parse(texte);             // "42" → 42
double d = double.Parse("3.5");       // "3.5" → 3.5
int k = Convert.ToInt32("15");        // "15" → 15

double prix = 9.99;
int entier = (int)prix;               // 9  (cast : tronque)
int arrondi = (int)Math.Round(prix);  // 10

string s = n.ToString();              // 42 → "42"</pre>
         <p>La conversion <b>automatique</b> ne se fait que sans risque de perte : <code>int → double</code> ✅, <code>double → int</code> ❌ (il faut un cast).</p>`
      ),
      task: T(
        'Konvèti <code>tèks</code> an <code>int n</code> ak <code>int.Parse</code>, konvèti <code>d</code> an <code>int k</code> ak yon cast <code>(int)</code>, epi afiche <code>n + k</code> (51).',
        'Convertis <code>tèks</code> en <code>int n</code> avec <code>int.Parse</code>, convertis <code>d</code> en <code>int k</code> avec un cast <code>(int)</code>, puis affiche <code>n + k</code> (51).'
      ),
      hint: T('<code>int n = int.Parse(tèks);</code> <code>int k = (int)d;</code>', '<code>int n = int.Parse(tèks);</code> <code>int k = (int)d;</code>'),
      starter: csProg({ main: 'string tèks = "42";\ndouble d = 9.99;\n\n// ✍️' }),
      solution: csProg({ main: 'string tèks = "42";\ndouble d = 9.99;\n\nint n = int.Parse(tèks);\nint k = (int)d;\nConsole.WriteLine(n + k);' }),
      output: '51',
      check: need(
        R(/int\s+n\s*=\s*(int\.Parse|Convert\.ToInt32)\s*\(\s*tèks\s*\)\s*;/, 'Ekri <code>int n = int.Parse(tèks);</code>', 'Écris <code>int n = int.Parse(tèks);</code>'),
        R(/int\s+k\s*=\s*\(\s*int\s*\)\s*d\s*;/, 'Ekri <code>int k = (int)d;</code>', 'Écris <code>int k = (int)d;</code>'),
        R(/Console\.WriteLine\s*\(\s*n\s*\+\s*k\s*\)/, 'Afiche <code>n + k</code>.', 'Affiche <code>n + k</code>.')
      ),
      tips: T(
        `<li><code>int.Parse("abc")</code> → <code>FormatException</code>. N ap aprann <code>TryParse</code> pou evite sa.</li><li><code>"5" + 3</code> bay <code>"53"</code> nan C# tou!</li>`,
        `<li><code>int.Parse("abc")</code> → <code>FormatException</code>. On verra <code>TryParse</code> pour l'éviter.</li><li><code>"5" + 3</code> donne <code>"53"</code> en C# aussi !</li>`
      ),
      recap: T(
        `<li><code>int.Parse</code>, <code>double.Parse</code>, <code>Convert.ToInt32</code>.</li><li>Cast: <code>(int)x</code>.</li><li><code>.ToString()</code></li>`,
        `<li><code>int.Parse</code>, <code>double.Parse</code>, <code>Convert.ToInt32</code>.</li><li>Cast : <code>(int)x</code>.</li><li><code>.ToString()</code></li>`
      )
    },
{
      id: 'cs-10',
      title: T('Pale ak itilizatè a', "Dialoguer avec l'utilisateur"),
      theory: T(
        `<p>Yon pwogram konsòl ka <b>poze kesyon</b> epi <b>li repons</b> itilizatè a ak <code>Console.ReadLine()</code>. Li toujou bay yon <code>string</code>.</p>
         <pre>Console.Write("Ki koulè ou renmen? ");
string koulè = Console.ReadLine();
Console.WriteLine($"{koulè} se yon bèl koulè!");</pre>
         <p>Pou jwenn yon <b>nonm</b>, nou dwe <b>konvèti</b> tèks la ak <code>int.Parse()</code>:</p>
         <pre>Console.Write("Konbyen pen? ");
int kantite = int.Parse(Console.ReadLine());
Console.WriteLine(kantite * 25);</pre>
         <p><code>Console.Write</code> (san <i>Line</i>) pa ale nan liy.</p>`,
        `<p>Un programme console peut <b>poser des questions</b> et <b>lire la réponse</b> avec <code>Console.ReadLine()</code>. Elle renvoie toujours un <code>string</code>.</p>
         <pre>Console.Write("Quelle couleur aimes-tu ? ");
string couleur = Console.ReadLine();
Console.WriteLine($"{couleur} est une belle couleur !");</pre>
         <p>Pour obtenir un <b>nombre</b>, il faut <b>convertir</b> le texte avec <code>int.Parse()</code> :</p>
         <pre>Console.Write("Combien de pains ? ");
int quantite = int.Parse(Console.ReadLine());
Console.WriteLine(quantite * 25);</pre>
         <p><code>Console.Write</code> (sans <i>Line</i>) ne revient pas à la ligne.</p>`
      ),
      task: T('Mande <b>non</b> moun nan (<code>string</code>) ak <b>laj</b> li (<code>int.Parse</code>), epi afiche <code>$"{non}, ane pwochèn ou va gen {laj + 1} an!"</code>.', 'Demande le <b>nom</b> (<code>string</code>) et l\'<b>âge</b> (<code>int.Parse</code>), puis affiche <code>$"{non}, l\'an prochain tu auras {laj + 1} ans !"</code>.'),
      hint: T('<code>string non = Console.ReadLine();</code> epi <code>int laj = int.Parse(Console.ReadLine());</code>', '<code>string non = Console.ReadLine();</code> puis <code>int laj = int.Parse(Console.ReadLine());</code>'),
      starter: CS_STARTER,
      solution: CS_STARTER.replace('// ✍️', 'Console.Write("Ki non ou? ");\n        string non = Console.ReadLine();\n\n        Console.Write("Ki laj ou? ");\n        int laj = int.Parse(Console.ReadLine());\n\n        Console.WriteLine($"{non}, ane pwochèn ou va gen {laj + 1} an!");'),
      output: ({ code }) => {
        const f = (code.match(/Console\.WriteLine\s*\(\s*\$"([^"]*)"/) || [])[1] || '';
        return '> Ana\n> 15\n' + f.replace(/\{\s*non\s*\}/g, 'Ana').replace(/\{\s*laj\s*\+\s*1\s*\}/g, '16').replace(/\{\s*laj\s*\}/g, '15');
      },
      check: ({ clean }) => {
        if (!/string\s+non\s*=\s*Console\.ReadLine\s*\(\s*\)\s*;/.test(clean)) return T('Li non an: <code>string non = Console.ReadLine();</code>', 'Lis le nom : <code>string non = Console.ReadLine();</code>');
        if (/int\s+laj\s*=\s*Console\.ReadLine/.test(clean)) return T('erè CS0029: <code>ReadLine()</code> bay yon <code>string</code>. Konvèti l ak <code>int.Parse(…)</code>.', 'erreur CS0029 : <code>ReadLine()</code> renvoie un <code>string</code>. Convertis-le avec <code>int.Parse(…)</code>.');
        if (!/int\s+laj\s*=\s*int\.Parse\s*\(\s*Console\.ReadLine\s*\(\s*\)\s*\)\s*;/.test(clean)) return T('Li laj la: <code>int laj = int.Parse(Console.ReadLine());</code>', 'Lis l\'âge : <code>int laj = int.Parse(Console.ReadLine());</code>');
        if (!/Console\.WriteLine\s*\(\s*\$"[^"]*\{\s*non\s*\}[^"]*\{\s*laj\s*\+\s*1\s*\}/.test(clean)) return T('Afiche mesaj la ak <code>{non}</code> ak <code>{laj + 1}</code> nan yon <code>$"…"</code>.', 'Affiche le message avec <code>{non}</code> et <code>{laj + 1}</code> dans un <code>$"…"</code>.');
        return true;
      }
    },
{
      id: 'cs-3',
      title: T('Kondisyon an C#', 'Conditions en C#'),
      theory: T(
        `<p><code>if</code> / <code>else</code> mache menm jan ak JavaScript:</p>
         <pre>int tanperati = 32;

if (tanperati &gt; 30)
{
    Console.WriteLine("Fè cho!");
}
else if (tanperati &gt; 20)
{
    Console.WriteLine("Bon tan.");
}
else
{
    Console.WriteLine("Fè frèt!");
}</pre>
         <p>Bon nouvèl: sa ou aprann nan JS sèvi w isit la! 🎉</p>`,
        `<p><code>if</code> / <code>else</code> fonctionnent comme en JavaScript :</p>
         <pre>int temperature = 32;

if (temperature &gt; 30)
{
    Console.WriteLine("Il fait chaud !");
}
else if (temperature &gt; 20)
{
    Console.WriteLine("Il fait bon.");
}
else
{
    Console.WriteLine("Il fait froid !");
}</pre>
         <p>Bonne nouvelle : ce que tu as appris en JS te sert ici ! 🎉</p>`
      ),
      task: T('Kreye <code>int note = 75;</code>. Si <code>note &gt;= 50</code> afiche <b>"Pase"</b>, sinon <b>"Echwe"</b>.', 'Crée <code>int note = 75;</code>. Si <code>note &gt;= 50</code> affiche <b>"Réussi"</b>, sinon <b>"Échoué"</b>.'),
      hint: T('<code>if (note &gt;= 50) { Console.WriteLine("Pase"); } else { … }</code>', '<code>if (note &gt;= 50) { Console.WriteLine("Réussi"); } else { … }</code>'),
      starter: CS_STARTER,
      solution: CS_STARTER.replace('// ✍️', 'int note = 75;\n\n        if (note >= 50)\n        {\n            Console.WriteLine("Pase");\n        }\n        else\n        {\n            Console.WriteLine("Echwe");\n        }'),
      output: () => 'Pase',
      check: ({ clean }) => {
        if (!/\bint\s+note\s*=\s*\d+\s*;/.test(clean)) return T('Kreye <code>int note = 75;</code>', 'Crée <code>int note = 75;</code>');
        if (!/\bif\s*\(\s*note\s*>=\s*50\s*\)/.test(clean)) return T('Ekri kondisyon an: <code>if (note &gt;= 50)</code>', 'Écris la condition : <code>if (note &gt;= 50)</code>');
        if (!/\belse\b/.test(clean)) return T('Pa bliye <code>else</code> la.', 'N\'oublie pas le <code>else</code>.');
        if ((clean.match(/Console\.WriteLine/g) || []).length < 2) return T('Ou bezwen yon <code>Console.WriteLine</code> nan chak branch (if ak else).', 'Il faut un <code>Console.WriteLine</code> dans chaque branche (if et else).');
        return true;
      }
    },
    {
      id: 'cs-logic',
      title: T('Operatè lojik', 'Opérateurs logiques'),
      theory: T(
        `<p>Menm jan ak JavaScript:</p>
         <pre>&amp;&amp;   E      — tou de vre
||   OSWA   — omwen youn vre
!    PA     — envèse

==   egal       (an C#, == konpare valè a — pa gen ===)
!=   diferan</pre>
         <pre>int laj = 20;
bool genKat = true;
bool kapVote = laj &gt;= 18 &amp;&amp; genKat;
Console.WriteLine(kapVote);   // True</pre>
         <p>Remake: C# afiche <code>True</code>/<code>False</code> ak <b>majiskil</b>, men ou ekri <code>true</code>/<code>false</code> an miniskil nan kòd la.</p>`,
        `<p>Comme en JavaScript :</p>
         <pre>&amp;&amp;   ET   — les deux vrais
||   OU   — au moins un vrai
!    NON  — inverse

==   égal       (en C#, == compare la valeur — pas de ===)
!=   différent</pre>
         <pre>int age = 20;
bool aCarte = true;
bool peutVoter = age &gt;= 18 &amp;&amp; aCarte;
Console.WriteLine(peutVoter);   // True</pre>
         <p>Remarque : C# affiche <code>True</code>/<code>False</code> avec une <b>majuscule</b>, mais on écrit <code>true</code>/<code>false</code> en minuscules dans le code.</p>`
      ),
      task: T(
        'Kreye <code>bool kapVote = laj &gt;= 18 &amp;&amp; genKat;</code> epi afiche l. Answit, afiche <code>!kapVote</code>.',
        'Crée <code>bool kapVote = laj &gt;= 18 &amp;&amp; genKat;</code> et affiche-le. Puis affiche <code>!kapVote</code>.'
      ),
      hint: T('2 <code>Console.WriteLine</code>: youn ak <code>kapVote</code>, youn ak <code>!kapVote</code>.', '2 <code>Console.WriteLine</code> : un avec <code>kapVote</code>, un avec <code>!kapVote</code>.'),
      starter: csProg({ main: 'int laj = 20;\nbool genKat = true;\n\n// ✍️' }),
      solution: csProg({ main: 'int laj = 20;\nbool genKat = true;\n\nbool kapVote = laj >= 18 && genKat;\nConsole.WriteLine(kapVote);\nConsole.WriteLine(!kapVote);' }),
      output: 'True\nFalse',
      check: need(
        R(/bool\s+kapVote\s*=\s*laj\s*>=\s*18\s*&&\s*genKat\s*;|bool\s+kapVote\s*=\s*genKat\s*&&\s*laj\s*>=\s*18\s*;/, 'Ekri <code>bool kapVote = laj &gt;= 18 &amp;&amp; genKat;</code>', 'Écris <code>bool kapVote = laj &gt;= 18 &amp;&amp; genKat;</code>'),
        R(/Console\.WriteLine\s*\(\s*kapVote\s*\)/, 'Afiche <code>kapVote</code>.', 'Affiche <code>kapVote</code>.'),
        R(/Console\.WriteLine\s*\(\s*!\s*kapVote\s*\)/, 'Afiche <code>!kapVote</code>.', 'Affiche <code>!kapVote</code>.')
      ),
      tips: T(
        `<li>Nan C#, <code>if (x = 5)</code> se yon erè konpilasyon — se <code>==</code> pou konpare.</li><li><code>&amp;&amp;</code> sispann tcheke depi premye a fo (<b>court-circuit</b>).</li>`,
        `<li>En C#, <code>if (x = 5)</code> est une erreur de compilation — c'est <code>==</code> pour comparer.</li><li><code>&amp;&amp;</code> s'arrête dès que le premier est faux (<b>court-circuit</b>).</li>`
      ),
      recap: T(`<li><code>&amp;&amp; || !</code>, <code>== !=</code>.</li>`, `<li><code>&amp;&amp; || !</code>, <code>== !=</code>.</li>`)
    },

    /* ---------- Semèn 15 ---------- */
    {
      id: 'cs-elseif',
      title: T('else if an C#', 'else if en C#'),
      theory: T(
        `<pre>int note = 85;

if (note &gt;= 90)
{
    Console.WriteLine("A");
}
else if (note &gt;= 75)
{
    Console.WriteLine("B");
}
else if (note &gt;= 50)
{
    Console.WriteLine("C");
}
else
{
    Console.WriteLine("D");
}</pre>
         <p>Si yon blòk gen <b>yon sèl</b> liy, akolad yo opsyonèl — men pwofesyonèl yo mete yo toujou pou evite erè.</p>`,
        `<pre>int note = 85;

if (note &gt;= 90)
{
    Console.WriteLine("A");
}
else if (note &gt;= 75)
{
    Console.WriteLine("B");
}
else if (note &gt;= 50)
{
    Console.WriteLine("C");
}
else
{
    Console.WriteLine("D");
}</pre>
         <p>Si un bloc n'a qu'<b>une seule</b> ligne, les accolades sont optionnelles — mais les pros les mettent toujours pour éviter les erreurs.</p>`
      ),
      task: T(
        'Ekri yon pwogram ki afiche mesaj tanperati a: <code>&gt;= 30</code> → <b>"Cho"</b>, <code>&gt;= 20</code> → <b>"Bon"</b>, sinon <b>"Frèt"</b>.',
        'Écris un programme qui affiche la météo : <code>&gt;= 30</code> → <b>"Chaud"</b>, <code>&gt;= 20</code> → <b>"Bon"</b>, sinon <b>"Froid"</b>.'
      ),
      hint: T('<code>if (tanperati &gt;= 30) { … } else if (tanperati &gt;= 20) { … } else { … }</code>', '<code>if (tanperati &gt;= 30) { … } else if (tanperati &gt;= 20) { … } else { … }</code>'),
      starter: csProg({ main: 'int tanperati = 32;\n\n// ✍️' }),
      solution: csProg({ main: 'int tanperati = 32;\n\nif (tanperati >= 30)\n{\n    Console.WriteLine("Cho");\n}\nelse if (tanperati >= 20)\n{\n    Console.WriteLine("Bon");\n}\nelse\n{\n    Console.WriteLine("Frèt");\n}' }),
      output: ({ code }) => (code.match(/Console\.WriteLine\s*\(\s*"([^"]*)"/) || [])[1] || '',
      check: need(
        R(/if\s*\(\s*tanperati\s*>=?\s*30\s*\)/, 'Premye kondisyon an: <code>if (tanperati &gt;= 30)</code>', 'Première condition : <code>if (tanperati &gt;= 30)</code>'),
        R(/else\s+if\s*\(\s*tanperati\s*>=?\s*20\s*\)/, 'Dezyèm nan: <code>else if (tanperati &gt;= 20)</code>', 'Deuxième : <code>else if (tanperati &gt;= 20)</code>'),
        R(/\belse\s*\{/, 'Fini ak yon <code>else</code>.', 'Termine par un <code>else</code>.'),
        R(c => (c.clean.match(/Console\.WriteLine/g) || []).length >= 3, 'Ou bezwen 3 <code>Console.WriteLine</code> (youn pa branch).', 'Il faut 3 <code>Console.WriteLine</code> (un par branche).')
      ),
      tips: T(
        `<li>Pa mete <code>;</code> apre <code>if (…)</code>: <code>if (x &gt; 5);</code> fè blòk la toujou egzekite!</li>`,
        `<li>Pas de <code>;</code> après <code>if (…)</code> : <code>if (x &gt; 5);</code> fait toujours exécuter le bloc !</li>`
      ),
      recap: T(`<li>Kondisyon yo tcheke de anwo an ba.</li><li>Toujou mete akolad.</li>`, `<li>Conditions testées de haut en bas.</li><li>Mets toujours les accolades.</li>`)
    },
    {
      id: 'cs-switch',
      title: T('switch an C#', 'switch en C#'),
      theory: T(
        `<pre>int jou = 3;
switch (jou)
{
    case 1:
        Console.WriteLine("Lendi");
        break;
    case 6:
    case 7:
        Console.WriteLine("Wikenn!");   // 6 OSWA 7
        break;
    default:
        Console.WriteLine("Jou travay");
        break;
}</pre>
         <p>Diferans ak JS: nan C#, <b>chak</b> <code>case</code> ki gen kòd <b>dwe</b> fini ak <code>break</code> (oswa <code>return</code>) — konpilatè a refize sinon. <code>switch</code> mache ak <code>int</code>, <code>string</code>, <code>char</code>, <code>enum</code>…</p>`,
        `<pre>int jour = 3;
switch (jour)
{
    case 1:
        Console.WriteLine("Lundi");
        break;
    case 6:
    case 7:
        Console.WriteLine("Week-end !");   // 6 OU 7
        break;
    default:
        Console.WriteLine("Jour de travail");
        break;
}</pre>
         <p>Différence avec JS : en C#, <b>chaque</b> <code>case</code> qui contient du code <b>doit</b> finir par <code>break</code> (ou <code>return</code>) — sinon le compilateur refuse. <code>switch</code> marche avec <code>int</code>, <code>string</code>, <code>char</code>, <code>enum</code>…</p>`
      ),
      task: T(
        'Ak yon <code>switch</code> sou <code>string koulè</code>: <code>"wouj"</code> → <b>"Kanpe"</b>, <code>"jòn"</code> → <b>"Atansyon"</b>, <code>"vèt"</code> → <b>"Ale"</b>, <code>default</code> → <b>"Enkoni"</b>.',
        'Avec un <code>switch</code> sur <code>string koulè</code> : <code>"wouj"</code> → <b>"Stop"</b>, <code>"jòn"</code> → <b>"Attention"</b>, <code>"vèt"</code> → <b>"Passe"</b>, <code>default</code> → <b>"Inconnu"</b>.'
      ),
      hint: T('<code>case "wouj": Console.WriteLine("Kanpe"); break;</code>', '<code>case "wouj": Console.WriteLine("Stop"); break;</code>'),
      starter: csProg({ main: 'string koulè = "vèt";\n\n// ✍️' }),
      solution: csProg({ main: 'string koulè = "vèt";\n\nswitch (koulè)\n{\n    case "wouj":\n        Console.WriteLine("Kanpe");\n        break;\n    case "jòn":\n        Console.WriteLine("Atansyon");\n        break;\n    case "vèt":\n        Console.WriteLine("Ale");\n        break;\n    default:\n        Console.WriteLine("Enkoni");\n        break;\n}' }),
      output: ({ code }) => { const m = code.match(/case\s*"vèt"\s*:\s*Console\.WriteLine\s*\(\s*"([^"]*)"/); return m ? m[1] : 'Ale'; },
      check: need(
        R(/switch\s*\(\s*koulè\s*\)/, 'Ekri <code>switch (koulè)</code>.', 'Écris <code>switch (koulè)</code>.'),
        R(c => ['wouj', 'jòn', 'vèt'].every(k => new RegExp('case\\s*"' + k + '"\\s*:').test(c.clean)), 'Ou bezwen 3 <code>case</code>: "wouj", "jòn", "vèt".', 'Il faut 3 <code>case</code> : "wouj", "jòn", "vèt".'),
        R(/default\s*:/, 'Ajoute <code>default:</code>.', 'Ajoute <code>default:</code>.'),
        R(c => (c.clean.match(/\bbreak\s*;/g) || []).length >= 3, 'erè CS0163: chak <code>case</code> dwe fini ak <code>break;</code>', 'erreur CS0163 : chaque <code>case</code> doit finir par <code>break;</code>')
      ),
      tips: T(`<li>Tèks yo sansib a majiskil: <code>"Wouj"</code> ≠ <code>"wouj"</code>.</li>`, `<li>Les textes sont sensibles à la casse : <code>"Wouj"</code> ≠ <code>"wouj"</code>.</li>`),
      recap: T(`<li><code>switch</code> / <code>case</code> / <code>break</code> / <code>default</code>.</li><li><code>break</code> obligatwa an C#.</li>`, `<li><code>switch</code> / <code>case</code> / <code>break</code> / <code>default</code>.</li><li><code>break</code> obligatoire en C#.</li>`)
    },
    {
      id: 'cs-ternary',
      title: T('Operatè tènè ?:', 'Opérateur ternaire ?:'),
      theory: T(
        `<p>Pou yon desizyon <b>senp</b> ki bay yon valè, gen yon fòm kout:</p>
         <pre>kondisyon ? valèSiVre : valèSiFo</pre>
         <pre>int note = 75;

// Ak if/else:
string mesaj;
if (note &gt;= 50) mesaj = "Pase";
else mesaj = "Echwe";

// Ak operatè tènè:
string mesaj2 = note &gt;= 50 ? "Pase" : "Echwe";</pre>
         <p>Itilize l pou ti desizyon. Pou lojik ki konplike, <code>if/else</code> pi fasil pou li.</p>`,
        `<p>Pour une décision <b>simple</b> qui produit une valeur, il existe une forme courte :</p>
         <pre>condition ? valeurSiVrai : valeurSiFaux</pre>
         <pre>int note = 75;

// Avec if/else :
string message;
if (note &gt;= 50) message = "Réussi";
else message = "Échoué";

// Avec l'opérateur ternaire :
string message2 = note &gt;= 50 ? "Réussi" : "Échoué";</pre>
         <p>Utilise-le pour les petites décisions. Pour une logique complexe, <code>if/else</code> est plus lisible.</p>`
      ),
      task: T(
        'Ak operatè tènè a, kreye <code>string rezilta</code> ki vo <b>"Pè"</b> si <code>n % 2 == 0</code>, sinon <b>"Enpè"</b>. Afiche l.',
        'Avec l\'opérateur ternaire, crée <code>string rezilta</code> qui vaut <b>"Pair"</b> si <code>n % 2 == 0</code>, sinon <b>"Impair"</b>. Affiche-le.'
      ),
      hint: T('<code>string rezilta = n % 2 == 0 ? "Pè" : "Enpè";</code>', '<code>string rezilta = n % 2 == 0 ? "Pair" : "Impair";</code>'),
      starter: csProg({ main: 'int n = 7;\n\n// ✍️' }),
      solution: csProg({ main: 'int n = 7;\n\nstring rezilta = n % 2 == 0 ? "Pè" : "Enpè";\nConsole.WriteLine(rezilta);' }),
      output: ({ code }) => (code.match(/:\s*"([^"]*)"\s*;/) || [])[1] || 'Enpè',
      check: need(
        R(/string\s+rezilta\s*=\s*[^;]*\?[^;]*:[^;]*;/, 'Ekri <code>string rezilta = … ? … : …;</code>', 'Écris <code>string rezilta = … ? … : …;</code>'),
        R(/n\s*%\s*2\s*==\s*0/, 'Kondisyon an: <code>n % 2 == 0</code>', 'La condition : <code>n % 2 == 0</code>'),
        R(/Console\.WriteLine\s*\(\s*rezilta\s*\)/, 'Afiche <code>rezilta</code>.', 'Affiche <code>rezilta</code>.')
      ),
      tips: T(`<li>De valè yo dwe gen <b>menm tip</b>.</li><li>Pa anbrike plizyè <code>?:</code> — sa vin enposib pou li.</li>`, `<li>Les deux valeurs doivent avoir le <b>même type</b>.</li><li>N'imbrique pas plusieurs <code>?:</code> — ça devient illisible.</li>`),
      recap: T(`<li><code>kond ? a : b</code></li>`, `<li><code>cond ? a : b</code></li>`)
    },
{
      id: 'cs-8',
      title: T('Bouk while: kont a rebou', 'Boucle while : compte à rebours'),
      theory: T(
        `<p><code>while</code> repete kòd la <b>tank</b> kondisyon an vre. Li bon lè ou pa konnen davans konbyen tou pou fè.</p>
         <pre>int lajan = 100;
while (lajan &gt;= 30)
{
    Console.WriteLine("M achte yon pate!");
    lajan -= 30;   // menm bagay ak lajan = lajan - 30
}</pre>
         <p>⚠️ Toujou chanje varyab kondisyon an anndan bouk la, sinon li p ap janm sispann (<b>bouk enfini</b>)!</p>`,
        `<p><code>while</code> répète le code <b>tant que</b> la condition est vraie. Utile quand on ne sait pas d'avance combien de tours faire.</p>
         <pre>int argent = 100;
while (argent &gt;= 30)
{
    Console.WriteLine("J'achète un pâté !");
    argent -= 30;   // pareil que argent = argent - 30
}</pre>
         <p>⚠️ Modifie toujours la variable de la condition dans la boucle, sinon elle ne s'arrête jamais (<b>boucle infinie</b>) !</p>`
      ),
      task: T('Ak <code>while</code>, fè yon kont a rebou <b>5, 4, 3, 2, 1</b>, epi apre bouk la afiche <b>"Dekole! 🚀"</b>.', 'Avec <code>while</code>, fais un compte à rebours <b>5, 4, 3, 2, 1</b>, puis après la boucle affiche <b>"Décollage ! 🚀"</b>.'),
      hint: T('<code>int n = 5;</code> → <code>while (n &gt; 0) { Console.WriteLine(n); n--; }</code>', '<code>int n = 5;</code> → <code>while (n &gt; 0) { Console.WriteLine(n); n--; }</code>'),
      starter: CS_STARTER,
      solution: CS_STARTER.replace('// ✍️', 'int n = 5;\n\n        while (n > 0)\n        {\n            Console.WriteLine(n);\n            n--;\n        }\n\n        Console.WriteLine("Dekole! 🚀");'),
      output: ({ code }) => '5\n4\n3\n2\n1\n' + ((code.match(/Console\.WriteLine\s*\(\s*"([^"]*(?:dekole|[ée]coll)[^"]*)"/i) || [])[1] || ''),
      check: ({ clean }) => {
        const w = clean.match(/while\s*\(\s*(\w+)\s*(>|>=)\s*(\d+)\s*\)/);
        if (!w) return T('Ekri yon bouk <code>while (n &gt; 0)</code>.', 'Écris une boucle <code>while (n &gt; 0)</code>.');
        const v = w[1];
        const init = clean.match(new RegExp('int\\s+' + v + '\\s*=\\s*(\\d+)\\s*;'));
        if (!init || +init[1] !== 5) return T(`Kòmanse <code>${v}</code> a 5: <code>int ${v} = 5;</code>`, `Commence <code>${v}</code> à 5 : <code>int ${v} = 5;</code>`);
        const last = w[2] === '>' ? +w[3] + 1 : +w[3];
        if (last !== 1) return T('Kont a rebou a dwe fini sou 1.', 'Le compte à rebours doit finir à 1.');
        if (!new RegExp(v + '\\s*--|' + v + '\\s*-=\\s*1|' + v + '\\s*=\\s*' + v + '\\s*-\\s*1').test(clean)) return T(`Diminye <code>${v}</code> nan bouk la (<code>${v}--;</code>), sinon se yon bouk enfini!`, `Diminue <code>${v}</code> dans la boucle (<code>${v}--;</code>), sinon c'est une boucle infinie !`);
        if (!/Console\.WriteLine\s*\(\s*"[^"]*(dekole|d[ée]coll)/i.test(clean)) return T('Afiche "Dekole! 🚀" apre bouk la.', 'Affiche "Décollage ! 🚀" après la boucle.');
        return true;
      }
    },
    {
      id: 'cs-dowhile',
      title: T('do…while', 'do…while'),
      theory: T(
        `<p><code>do…while</code> sanble ak <code>while</code>, men li tcheke kondisyon an <b>apre</b> chak tou. Kidonk li egzekite <b>omwen yon fwa</b>:</p>
         <pre>int chwa;
do
{
    Console.WriteLine("1. Jwe  2. Kite");
    chwa = int.Parse(Console.ReadLine());
} while (chwa != 2);</pre>
         <p>Se fòm ideyal pou yon <b>meni</b>: ou montre l omwen yon fwa, epi ou repete tank moun nan pa chwazi "Kite".</p>
         <p>Remake <code>;</code> apre <code>while (…)</code> nan fen an — li obligatwa isit la!</p>`,
        `<p><code>do…while</code> ressemble à <code>while</code>, mais teste la condition <b>après</b> chaque tour. Donc elle s'exécute <b>au moins une fois</b> :</p>
         <pre>int choix;
do
{
    Console.WriteLine("1. Jouer  2. Quitter");
    choix = int.Parse(Console.ReadLine());
} while (choix != 2);</pre>
         <p>C'est la forme idéale pour un <b>menu</b> : on l'affiche au moins une fois, puis on répète tant que l'utilisateur ne choisit pas « Quitter ».</p>
         <p>Remarque le <code>;</code> après <code>while (…)</code> à la fin — il est obligatoire ici !</p>`
      ),
      task: T(
        'Ak <code>do…while</code>, afiche <b>0, 2, 4, 6</b>: kòmanse ak <code>i = 0</code>, ajoute 2 chak tou, kontinye tank <code>i &lt;= 6</code>.',
        'Avec <code>do…while</code>, affiche <b>0, 2, 4, 6</b> : commence à <code>i = 0</code>, ajoute 2 à chaque tour, continue tant que <code>i &lt;= 6</code>.'
      ),
      hint: T('<code>do { Console.WriteLine(i); i += 2; } while (i &lt;= 6);</code>', '<code>do { Console.WriteLine(i); i += 2; } while (i &lt;= 6);</code>'),
      starter: csProg({ main: 'int i = 0;\n\n// ✍️' }),
      solution: csProg({ main: 'int i = 0;\n\ndo\n{\n    Console.WriteLine(i);\n    i += 2;\n} while (i <= 6);' }),
      output: '0\n2\n4\n6',
      check: need(
        R(/\bdo\s*\{/, 'Kòmanse ak <code>do {</code>.', 'Commence par <code>do {</code>.'),
        R(/\}\s*while\s*\(\s*i\s*<=\s*6\s*\)\s*;/, 'Fini ak <code>} while (i &lt;= 6);</code> — ak <code>;</code>.', 'Termine par <code>} while (i &lt;= 6);</code> — avec le <code>;</code>.'),
        R(/i\s*\+=\s*2|i\s*=\s*i\s*\+\s*2/, 'Ajoute 2 chak tou: <code>i += 2;</code>', 'Ajoute 2 à chaque tour : <code>i += 2;</code>'),
        R(/Console\.WriteLine\s*\(\s*i\s*\)/, 'Afiche <code>i</code>.', 'Affiche <code>i</code>.')
      ),
      tips: T(`<li>Bliye <code>;</code> apre <code>while (…)</code> → erè CS1002.</li>`, `<li>Oublier le <code>;</code> après <code>while (…)</code> → erreur CS1002.</li>`),
      recap: T(`<li><code>do { } while (kond);</code> = omwen 1 fwa.</li>`, `<li><code>do { } while (cond);</code> = au moins 1 fois.</li>`)
    },

    /* ---------- Semèn 16 ---------- */
{
      id: 'cs-4',
      title: T('Bouk an C#', 'Boucles en C#'),
      theory: T(
        `<p>Bouk <code>for</code> nan C# sanble ak JS, men nou mete <b>tip</b> varyab la (<code>int</code>) olye de <code>let</code>:</p>
         <pre>for (int i = 0; i &lt; 3; i++)
{
    Console.WriteLine($"Tou {i}");
}</pre>
         <p>Gen tou <code>while</code>:</p>
         <pre>int n = 3;
while (n &gt; 0)
{
    Console.WriteLine(n);
    n--;
}</pre>`,
        `<p>La boucle <code>for</code> en C# ressemble à celle de JS, mais on indique le <b>type</b> de la variable (<code>int</code>) au lieu de <code>let</code> :</p>
         <pre>for (int i = 0; i &lt; 3; i++)
{
    Console.WriteLine($"Tour {i}");
}</pre>
         <p>Il existe aussi <code>while</code> :</p>
         <pre>int n = 3;
while (n &gt; 0)
{
    Console.WriteLine(n);
    n--;
}</pre>`
      ),
      task: T('Itilize yon bouk <code>for</code> pou afiche nimewo <b>1</b> rive <b>5</b>.', 'Utilise une boucle <code>for</code> pour afficher les nombres de <b>1</b> à <b>5</b>.'),
      hint: T('<code>for (int i = 1; i &lt;= 5; i++) { Console.WriteLine(i); }</code>', '<code>for (int i = 1; i &lt;= 5; i++) { Console.WriteLine(i); }</code>'),
      starter: CS_STARTER,
      solution: CS_STARTER.replace('// ✍️', 'for (int i = 1; i <= 5; i++)\n        {\n            Console.WriteLine(i);\n        }'),
      output: () => '1\n2\n3\n4\n5',
      check: ({ clean }) => {
        if (/for\s*\(\s*(let|var)\s/.test(clean) && /for\s*\(\s*let\s/.test(clean)) return T('<code>let</code> pa egziste an C#! Itilize <code>int i = 1</code>.', '<code>let</code> n\'existe pas en C# ! Utilise <code>int i = 1</code>.');
        const m = clean.match(/for\s*\(\s*(?:int|var)\s+(\w+)\s*=\s*(\d+)\s*;\s*\1\s*(<=|<)\s*(\d+)\s*;\s*\1\s*(\+\+|\+=\s*1)\s*\)/);
        if (!m) return T('Ekri bouk la konsa: <code>for (int i = 1; i &lt;= 5; i++)</code>', 'Écris la boucle ainsi : <code>for (int i = 1; i &lt;= 5; i++)</code>');
        const start = +m[2], end = m[3] === '<=' ? +m[4] : +m[4] - 1;
        if (start !== 1 || end !== 5) return T(`Bouk ou a ale de ${start} rive ${end}. Li dwe ale de 1 rive 5.`, `Ta boucle va de ${start} à ${end}. Elle doit aller de 1 à 5.`);
        if (!new RegExp('Console\\.WriteLine\\s*\\(\\s*\\$?"?[^)]*\\b' + m[1] + '\\b').test(clean)) return T(`Afiche <code>${m[1]}</code> ak <code>Console.WriteLine</code> anndan bouk la.`, `Affiche <code>${m[1]}</code> avec <code>Console.WriteLine</code> dans la boucle.`);
        return true;
      }
    },
    {
      id: 'cs-breakcont',
      title: T('break ak continue an C#', 'break et continue en C#'),
      theory: T(
        `<pre>for (int i = 1; i &lt;= 100; i++)
{
    if (i % 2 == 0) continue;   // sote nonm pè yo
    if (i &gt; 9) break;           // kanpe apre 9
    Console.WriteLine(i);       // 1 3 5 7 9
}</pre>
         <p>Egzanp reyèl: chèche yon eleman nan yon lis — depi w jwenn li, <code>break</code> pou pa pèdi tan.</p>`,
        `<pre>for (int i = 1; i &lt;= 100; i++)
{
    if (i % 2 == 0) continue;   // saute les nombres pairs
    if (i &gt; 9) break;           // s'arrête après 9
    Console.WriteLine(i);       // 1 3 5 7 9
}</pre>
         <p>Exemple réel : chercher un élément dans une liste — dès qu'on le trouve, <code>break</code> pour ne pas perdre de temps.</p>`
      ),
      task: T(
        'Chèche <b>premye</b> nonm ant 1 ak 100 ki divizib pa <b>7</b> <b>e</b> pa <b>5</b>. Afiche l epi itilize <code>break</code>.',
        'Cherche le <b>premier</b> nombre entre 1 et 100 divisible par <b>7</b> <b>et</b> par <b>5</b>. Affiche-le et utilise <code>break</code>.'
      ),
      hint: T('<code>if (i % 7 == 0 &amp;&amp; i % 5 == 0) { Console.WriteLine(i); break; }</code>', '<code>if (i % 7 == 0 &amp;&amp; i % 5 == 0) { Console.WriteLine(i); break; }</code>'),
      starter: CS_STARTER,
      solution: csProg({ main: 'for (int i = 1; i <= 100; i++)\n{\n    if (i % 7 == 0 && i % 5 == 0)\n    {\n        Console.WriteLine(i);\n        break;\n    }\n}' }),
      output: '35',
      check: need(
        R(/for\s*\(\s*int\s+(\w+)\s*=\s*1\s*;\s*\1\s*<=?\s*\d+/, 'Itilize yon bouk <code>for (int i = 1; i &lt;= 100; i++)</code>.', 'Utilise une boucle <code>for (int i = 1; i &lt;= 100; i++)</code>.'),
        R(/%\s*7\s*==\s*0/, 'Tcheke divizibilite pa 7: <code>i % 7 == 0</code>.', 'Teste la divisibilité par 7 : <code>i % 7 == 0</code>.'),
        R(/%\s*5\s*==\s*0/, 'Tcheke divizibilite pa 5: <code>i % 5 == 0</code>.', 'Teste la divisibilité par 5 : <code>i % 5 == 0</code>.'),
        R(/&&/, 'Konbine 2 kondisyon yo ak <code>&amp;&amp;</code>.', 'Combine les 2 conditions avec <code>&amp;&amp;</code>.'),
        R(/\bbreak\s*;/, 'Itilize <code>break;</code> apre w jwenn li.', 'Utilise <code>break;</code> après l\'avoir trouvé.')
      ),
      tips: T(`<li><code>break</code> kite <b>sèlman</b> bouk ki pi pre a (si gen bouk anbrike).</li>`, `<li><code>break</code> ne quitte <b>que</b> la boucle la plus proche (en cas de boucles imbriquées).</li>`),
      recap: T(`<li><code>continue</code> = sote; <code>break</code> = kanpe.</li>`, `<li><code>continue</code> = sauter ; <code>break</code> = arrêter.</li>`)
    },
    {
      id: 'cs-nested',
      title: T('Bouk anbrike: desen', 'Boucles imbriquées : dessins'),
      theory: T(
        `<p>Ak 2 bouk, ou ka desine fòm nan konsòl la:</p>
         <pre>for (int ranje = 1; ranje &lt;= 3; ranje++)
{
    for (int kol = 1; kol &lt;= 4; kol++)
    {
        Console.Write("# ");      // Write: rete sou menm liy
    }
    Console.WriteLine();          // ale nan liy apre chak ranje
}
// # # # #
// # # # #
// # # # #</pre>
         <p>Si bouk anndan an depann de bouk deyò a (<code>kol &lt;= ranje</code>), ou jwenn yon <b>triyang</b>!</p>`,
        `<p>Avec 2 boucles, on peut dessiner des formes dans la console :</p>
         <pre>for (int ligne = 1; ligne &lt;= 3; ligne++)
{
    for (int col = 1; col &lt;= 4; col++)
    {
        Console.Write("# ");      // Write : reste sur la même ligne
    }
    Console.WriteLine();          // retour à la ligne après chaque rangée
}
// # # # #
// # # # #
// # # # #</pre>
         <p>Si la boucle intérieure dépend de l'extérieure (<code>col &lt;= ligne</code>), on obtient un <b>triangle</b> !</p>`
      ),
      task: T(
        'Desine yon triyang 4 liy ak <code>*</code>: liy 1 gen 1 zetwal, liy 2 gen 2… (itilize 2 bouk <code>for</code>).',
        'Dessine un triangle de 4 lignes avec <code>*</code> : la ligne 1 a 1 étoile, la ligne 2 en a 2… (utilise 2 boucles <code>for</code>).'
      ),
      hint: T('Bouk anndan an: <code>for (int j = 1; j &lt;= i; j++) Console.Write("*");</code> epi <code>Console.WriteLine();</code>', 'Boucle intérieure : <code>for (int j = 1; j &lt;= i; j++) Console.Write("*");</code> puis <code>Console.WriteLine();</code>'),
      starter: CS_STARTER,
      solution: csProg({ main: 'for (int i = 1; i <= 4; i++)\n{\n    for (int j = 1; j <= i; j++)\n    {\n        Console.Write("*");\n    }\n    Console.WriteLine();\n}' }),
      output: '*\n**\n***\n****',
      check: need(
        R(c => (c.clean.match(/\bfor\s*\(/g) || []).length >= 2, 'Itilize 2 bouk <code>for</code>, youn anndan lòt.', 'Utilise 2 boucles <code>for</code>, l\'une dans l\'autre.'),
        R(/for\s*\(\s*int\s+(\w+)\s*=\s*1\s*;\s*\1\s*<=\s*4\s*;/, 'Bouk deyò a: <code>for (int i = 1; i &lt;= 4; i++)</code>.', 'Boucle extérieure : <code>for (int i = 1; i &lt;= 4; i++)</code>.'),
        R(/for\s*\(\s*int\s+(\w+)\s*=\s*1\s*;\s*\1\s*<=\s*i\s*;/, 'Bouk anndan an dwe depann de <code>i</code>: <code>j &lt;= i</code>.', 'La boucle intérieure doit dépendre de <code>i</code> : <code>j &lt;= i</code>.'),
        R(/Console\.Write\s*\(\s*"\*"\s*\)/, 'Itilize <code>Console.Write("*")</code> (san Line).', 'Utilise <code>Console.Write("*")</code> (sans Line).'),
        R(/Console\.WriteLine\s*\(\s*\)/, 'Ale nan liy ak <code>Console.WriteLine();</code> apre chak ranje.', 'Reviens à la ligne avec <code>Console.WriteLine();</code> après chaque rangée.')
      ),
      tips: T(`<li><code>Console.WriteLine()</code> la dwe nan bouk <b>deyò</b> a, apre bouk anndan an.</li>`, `<li>Le <code>Console.WriteLine()</code> doit être dans la boucle <b>extérieure</b>, après l'intérieure.</li>`),
      recap: T(`<li><code>Write</code> vs <code>WriteLine</code>.</li><li>Bouk anndan ka depann de bouk deyò.</li>`, `<li><code>Write</code> vs <code>WriteLine</code>.</li><li>La boucle intérieure peut dépendre de l'extérieure.</li>`)
    },
{
      id: 'cs-7',
      title: T('Tablo ak foreach', 'Tableaux et foreach'),
      theory: T(
        `<p>Nan C#, yon tablo gen yon <b>tip</b> ak <code>[]</code>, epi valè yo ant <code>{ }</code>:</p>
         <pre>string[] vil = { "Okap", "Jakmèl", "Gonayiv" };
Console.WriteLine(vil[0]);       // Okap
Console.WriteLine(vil.Length);   // 3  (L majiskil!)</pre>
         <p>Pou pakouri l, <code>foreach</code> se pi fasil:</p>
         <pre>foreach (string v in vil)
{
    Console.WriteLine(v);
}</pre>`,
        `<p>En C#, un tableau a un <b>type</b> suivi de <code>[]</code>, et ses valeurs entre <code>{ }</code> :</p>
         <pre>string[] villes = { "Cap-Haïtien", "Jacmel", "Gonaïves" };
Console.WriteLine(villes[0]);       // Cap-Haïtien
Console.WriteLine(villes.Length);   // 3  (L majuscule !)</pre>
         <p>Pour le parcourir, <code>foreach</code> est le plus simple :</p>
         <pre>foreach (string v in villes)
{
    Console.WriteLine(v);
}</pre>`
      ),
      task: T('Kreye <code>string[] fwi</code> ak <b>3</b> fwi, epi afiche chak fwi ak <code>foreach</code>.', 'Crée <code>string[] fwi</code> avec <b>3</b> fruits, puis affiche chaque fruit avec <code>foreach</code>.'),
      hint: T('<code>string[] fwi = { "Mango", "Zaboka", "Kokoye" };</code> epi <code>foreach (string f in fwi) { … }</code>', '<code>string[] fwi = { "Mangue", "Avocat", "Coco" };</code> puis <code>foreach (string f in fwi) { … }</code>'),
      starter: CS_STARTER,
      solution: CS_STARTER.replace('// ✍️', 'string[] fwi = { "Mango", "Zaboka", "Kokoye" };\n\n        foreach (string f in fwi)\n        {\n            Console.WriteLine(f);\n        }'),
      output: ({ code }) => {
        const m = code.match(/string\s*\[\s*\]\s+\w+\s*=\s*(?:new\s+string\s*\[\s*\]\s*)?\{([^}]*)\}/);
        return m ? (m[1].match(/"([^"]*)"/g) || []).map(s => s.slice(1, -1)).join('\n') : '';
      },
      check: ({ clean }) => {
        const arr = clean.match(/string\s*\[\s*\]\s+(\w+)\s*=\s*(?:new\s+string\s*\[\s*\]\s*)?\{([^}]*)\}\s*;/);
        if (!arr) return T('Kreye tablo a: <code>string[] fwi = { "…", "…", "…" };</code>', 'Crée le tableau : <code>string[] fwi = { "…", "…", "…" };</code>');
        if ((arr[2].match(/"[^"]*"/g) || []).length < 3) return T('Tablo a bezwen omwen 3 fwi.', 'Le tableau a besoin d\'au moins 3 fruits.');
        const fe = clean.match(/foreach\s*\(\s*(?:string|var)\s+(\w+)\s+in\s+(\w+)\s*\)/);
        if (!fe) return T('Ekri bouk la: <code>foreach (string f in fwi)</code>', 'Écris la boucle : <code>foreach (string f in fwi)</code>');
        if (fe[2] !== arr[1]) return T(`<code>foreach</code> la dwe pakouri <code>${arr[1]}</code>.`, `Le <code>foreach</code> doit parcourir <code>${arr[1]}</code>.`);
        if (!new RegExp('Console\\.WriteLine\\s*\\(\\s*' + fe[1] + '\\s*\\)').test(clean)) return T(`Afiche <code>${fe[1]}</code> anndan bouk la.`, `Affiche <code>${fe[1]}</code> dans la boucle.`);
        return true;
      }
    },
    {
      id: 'cs-arrays2',
      title: T('Kalkil sou tablo', 'Calculs sur les tableaux'),
      theory: T(
        `<pre>int[] notes = { 70, 45, 90, 60 };
int[] vid = new int[5];      // 5 eleman, tout a 0

notes[1] = 50;               // chanje 2yèm nan
Console.WriteLine(notes.Length);  // 4

Array.Sort(notes);           // klase: 50 60 70 90
int pos = Array.IndexOf(notes, 70);  // 2</pre>
         <p>Pou kalkile yon <b>mwayèn</b>: fè sòm nan ak yon bouk, answit divize pa <code>Length</code> — san bliye <code>(double)</code>!</p>
         <pre>int som = 0;
foreach (int n in notes) som += n;
double mwayèn = (double)som / notes.Length;</pre>`,
        `<pre>int[] notes = { 70, 45, 90, 60 };
int[] vide = new int[5];     // 5 éléments, tous à 0

notes[1] = 50;               // modifie le 2e
Console.WriteLine(notes.Length);  // 4

Array.Sort(notes);           // trie : 50 60 70 90
int pos = Array.IndexOf(notes, 70);  // 2</pre>
         <p>Pour calculer une <b>moyenne</b> : fais la somme avec une boucle, puis divise par <code>Length</code> — sans oublier <code>(double)</code> !</p>
         <pre>int som = 0;
foreach (int n in notes) som += n;
double moyenne = (double)som / notes.Length;</pre>`
      ),
      task: T(
        'Kalkile <b>sòm</b> ak <b>mwayèn</b> <code>notes</code> yo, epi afiche <code>$"Mwayèn: {mwayen:F2}"</code> (66.25).',
        'Calcule la <b>somme</b> et la <b>moyenne</b> des <code>notes</code>, puis affiche <code>$"Moyenne : {mwayen:F2}"</code> (66.25).'
      ),
      hint: T('<code>int som = 0; foreach (int n in notes) som += n; double mwayen = (double)som / notes.Length;</code>', '<code>int som = 0; foreach (int n in notes) som += n; double mwayen = (double)som / notes.Length;</code>'),
      starter: csProg({ main: 'int[] notes = { 70, 45, 90, 60 };\n\n// ✍️' }),
      solution: csProg({ main: 'int[] notes = { 70, 45, 90, 60 };\n\nint som = 0;\nforeach (int n in notes)\n{\n    som += n;\n}\n\ndouble mwayen = (double)som / notes.Length;\nConsole.WriteLine($"Mwayèn: {mwayen:F2}");' }),
      output: 'Mwayèn: 66.25',
      check: need(
        R(/(foreach\s*\(|for\s*\()/, 'Itilize yon bouk pou fè sòm nan.', 'Utilise une boucle pour faire la somme.'),
        R(/\w+\s*\+=\s*\w+|\w+\s*=\s*\w+\s*\+\s*\w+/, 'Ajoute chak nòt nan sòm nan: <code>som += n;</code>', 'Ajoute chaque note à la somme : <code>som += n;</code>'),
        R(/notes\.Length/, 'Divize pa <code>notes.Length</code>.', 'Divise par <code>notes.Length</code>.'),
        R(/\(\s*double\s*\)/, 'Pa bliye <code>(double)</code> — sinon divizyon an ap antye (66 olye de 66.25).', 'N\'oublie pas <code>(double)</code> — sinon la division est entière (66 au lieu de 66.25).'),
        R(/:\s*F2\s*\}/, 'Fòmate ak <code>:F2</code>.', 'Formate avec <code>:F2</code>.')
      ),
      tips: T(`<li>Endèks valid yo: <code>0</code> rive <code>Length - 1</code>. <code>notes[4]</code> → <code>IndexOutOfRangeException</code>.</li><li>Gwosè yon tablo <b>fiks</b>; pou yon lis ki grandi, n ap wè <code>List&lt;T&gt;</code>.</li>`, `<li>Indices valides : <code>0</code> à <code>Length - 1</code>. <code>notes[4]</code> → <code>IndexOutOfRangeException</code>.</li><li>Un tableau a une taille <b>fixe</b> ; pour une liste qui grandit, on verra <code>List&lt;T&gt;</code>.</li>`),
      recap: T(`<li><code>new int[n]</code>, <code>.Length</code>, <code>Array.Sort</code>.</li><li>Mwayèn = <code>(double)som / Length</code>.</li><li>🎉 Fen mwa 4!</li>`, `<li><code>new int[n]</code>, <code>.Length</code>, <code>Array.Sort</code>.</li><li>Moyenne = <code>(double)som / Length</code>.</li><li>🎉 Fin du mois 4 !</li>`)
    }
  ]
});

addDetails({
  'cs-1': {
    extra: T(
      `<p><b>Kijan pou enstale C# sou òdinatè w</b> (gratis):</p>
       <ol><li>Telechaje <b>.NET SDK</b> sou <code>dotnet.microsoft.com</code>.</li>
       <li>Enstale <b>Visual Studio Code</b> + ekstansyon "C# Dev Kit".</li>
       <li>Nan tèminal la: <code>dotnet new console -n PremyePwojè</code></li>
       <li>Answit: <code>cd PremyePwojè</code> epi <code>dotnet run</code> 🚀</li></ol>`,
      `<p><b>Comment installer C# sur ton ordinateur</b> (gratuit) :</p>
       <ol><li>Télécharge le <b>.NET SDK</b> sur <code>dotnet.microsoft.com</code>.</li>
       <li>Installe <b>Visual Studio Code</b> + l'extension « C# Dev Kit ».</li>
       <li>Dans le terminal : <code>dotnet new console -n PremierProjet</code></li>
       <li>Puis : <code>cd PremierProjet</code> et <code>dotnet run</code> 🚀</li></ol>`
    ),
    tips: T(`<li>Chak enstriksyon fini ak <code>;</code>.</li><li><code>Console</code>, <code>WriteLine</code>: majiskil yo enpòtan.</li>`, `<li>Chaque instruction finit par <code>;</code>.</li><li><code>Console</code>, <code>WriteLine</code> : les majuscules comptent.</li>`),
    recap: T(`<li>Pwogram nan kòmanse nan <code>Main</code>.</li><li><code>Console.WriteLine</code> = afiche.</li>`, `<li>Le programme démarre dans <code>Main</code>.</li><li><code>Console.WriteLine</code> = afficher.</li>`)
  },
  'cs-2': {
    tips: T(`<li>C# itilize <b>camelCase</b> pou varyab (<code>nonKonple</code>) ak <b>PascalCase</b> pou metòd ak klas (<code>WriteLine</code>, <code>Program</code>).</li><li>Ou pa ka itilize yon varyab anvan ou ba l yon valè.</li>`, `<li>C# utilise le <b>camelCase</b> pour les variables (<code>nomComplet</code>) et le <b>PascalCase</b> pour méthodes et classes (<code>WriteLine</code>, <code>Program</code>).</li><li>On ne peut pas utiliser une variable avant de lui donner une valeur.</li>`),
    recap: T(`<li><code>tip non = valè;</code></li><li>Entèpolasyon: <code>$"… {x} …"</code></li>`, `<li><code>type nom = valeur;</code></li><li>Interpolation : <code>$"… {x} …"</code></li>`)
  },
  'cs-3': {
    tips: T(`<li>Kondisyon an dwe yon <code>bool</code>: <code>if (note)</code> ❌ nan C#, <code>if (note &gt; 0)</code> ✅.</li>`, `<li>La condition doit être un <code>bool</code> : <code>if (note)</code> ❌ en C#, <code>if (note &gt; 0)</code> ✅.</li>`),
    recap: T(`<li><code>if (…) { } else { }</code></li>`, `<li><code>if (…) { } else { }</code></li>`)
  },
  'cs-4': {
    tips: T(`<li>Varyab <code>i</code> la egziste sèlman anndan bouk la.</li><li><code>for (int i = 0; i &lt; tablo.Length; i++)</code> se modèl klasik pou pakouri yon tablo.</li>`, `<li>La variable <code>i</code> n'existe que dans la boucle.</li><li><code>for (int i = 0; i &lt; tableau.Length; i++)</code> est le modèle classique pour parcourir un tableau.</li>`),
    recap: T(`<li><code>for (int i = 0; i &lt; n; i++)</code></li>`, `<li><code>for (int i = 0; i &lt; n; i++)</code></li>`)
  },
  'cs-7': {
    tips: T(`<li>Nan <code>foreach</code>, ou <b>pa ka</b> modifye eleman an (<code>f = "x"</code> → erè). Itilize <code>for</code> pou sa.</li>`, `<li>Dans un <code>foreach</code>, on <b>ne peut pas</b> modifier l'élément (<code>f = "x"</code> → erreur). Utilise <code>for</code> pour ça.</li>`),
    recap: T(`<li><code>tip[] non = { … };</code></li><li><code>foreach (tip x in tablo)</code></li>`, `<li><code>type[] nom = { … };</code></li><li><code>foreach (type x in tableau)</code></li>`)
  },
  'cs-8': {
    tips: T(`<li><code>n--</code> = <code>n = n - 1</code>.</li><li>Si kondisyon an fo depi okòmansman, <code>while</code> pa janm egzekite.</li>`, `<li><code>n--</code> = <code>n = n - 1</code>.</li><li>Si la condition est fausse dès le départ, <code>while</code> ne s'exécute jamais.</li>`),
    recap: T(`<li><code>while (kond) { … }</code></li><li>Chanje varyab la anndan bouk la.</li>`, `<li><code>while (cond) { … }</code></li><li>Modifie la variable dans la boucle.</li>`)
  },
  'cs-10': {
    tips: T(`<li><code>Console.ReadLine()</code> toujou bay yon <code>string</code>.</li><li>Si moun nan tape "abc", <code>int.Parse</code> ap kraze — n ap wè <code>TryParse</code> nan mwa 5.</li>`, `<li><code>Console.ReadLine()</code> renvoie toujours un <code>string</code>.</li><li>Si l'utilisateur tape "abc", <code>int.Parse</code> plante — on verra <code>TryParse</code> au mois 5.</li>`),
    recap: T(`<li><code>Console.ReadLine()</code> = li sa moun tape.</li><li><code>int.Parse(…)</code> = tèks → nonm.</li>`, `<li><code>Console.ReadLine()</code> = lire la saisie.</li><li><code>int.Parse(…)</code> = texte → nombre.</li>`)
  }
});
