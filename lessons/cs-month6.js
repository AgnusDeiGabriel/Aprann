/* ======================= MWA 6 — C# Pwogramasyon oryante objè (semèn 21-24) ======================= */
findModule('cs').lessons.push(
  /* ---------- Semèn 21: Klas ak objè ---------- */
{
      id: 'cs-6',
      title: T('Klas ak objè', 'Classes et objets'),
      theory: T(
        `<p>C# se yon lang <b>oryante objè</b>. Yon <b>klas</b> se tankou yon plan (yon modèl); yon <b>objè</b> se yon bagay ou bati ak plan an.</p>
         <pre>class Machin
{
    public string Mak;

    public void Klaksonnen()
    {
      Console.WriteLine("Pwiiit!");
    }
}

// Nan Main:
Machin m = new Machin();
m.Mak = "Toyota";
m.Klaksonnen();</pre>
         <ul><li><code>Mak</code> se yon <b>chan</b> (done objè a).</li>
         <li><code>Klaksonnen</code> se yon <b>metòd</b> (aksyon objè a).</li>
         <li><code>new</code> kreye yon nouvo objè.</li></ul>`,
        `<p>C# est un langage <b>orienté objet</b>. Une <b>classe</b> est comme un plan (un modèle) ; un <b>objet</b> est une chose construite à partir de ce plan.</p>
         <pre>class Voiture
{
    public string Marque;

    public void Klaxonner()
    {
      Console.WriteLine("Pouet !");
    }
}

// Dans Main :
Voiture v = new Voiture();
v.Marque = "Toyota";
v.Klaxonner();</pre>
         <ul><li><code>Marque</code> est un <b>champ</b> (les données de l'objet).</li>
         <li><code>Klaxonner</code> est une <b>méthode</b> (une action de l'objet).</li>
         <li><code>new</code> crée un nouvel objet.</li></ul>`
      ),
      task: T('Kreye yon klas <code>Chen</code> ak yon chan <code>public string Non;</code> ak yon metòd <code>public void Jape()</code> ki afiche <b>"Wouf!"</b>. Nan <code>Main</code>, kreye yon chen ak <code>new</code> epi rele <code>Jape()</code>.', 'Crée une classe <code>Chen</code> avec un champ <code>public string Non;</code> et une méthode <code>public void Jape()</code> qui affiche <b>"Wouf !"</b>. Dans <code>Main</code>, crée un chien avec <code>new</code> et appelle <code>Jape()</code>.'),
      hint: T('Ekri <code>class Chen { … }</code> anba <code>class Program</code>. Nan Main: <code>Chen c = new Chen();</code> epi <code>c.Jape();</code>', 'Écris <code>class Chen { … }</code> sous <code>class Program</code>. Dans Main : <code>Chen c = new Chen();</code> puis <code>c.Jape();</code>'),
      starter: CS_STARTER,
      solution: 'using System;\n\nclass Program\n{\n    static void Main()\n    {\n        Chen c = new Chen();\n        c.Non = "Bobi";\n        c.Jape();\n    }\n}\n\nclass Chen\n{\n    public string Non;\n\n    public void Jape()\n    {\n        Console.WriteLine("Wouf!");\n    }\n}\n',
      output: () => 'Wouf!',
      check: ({ clean }) => {
        if (!/\bclass\s+Chen\b/.test(clean)) return T('Kreye <code>class Chen</code>.', 'Crée <code>class Chen</code>.');
        if (!/public\s+string\s+Non\s*;/.test(clean)) return T('Ajoute chan <code>public string Non;</code> nan klas la.', 'Ajoute le champ <code>public string Non;</code> dans la classe.');
        if (!/public\s+void\s+Jape\s*\(\s*\)/.test(clean)) return T('Ajoute metòd <code>public void Jape()</code>.', 'Ajoute la méthode <code>public void Jape()</code>.');
        if (!/Console\.WriteLine\s*\(\s*"[^"]*wouf[^"]*"\s*\)\s*;/i.test(clean)) return T('<code>Jape()</code> dwe afiche "Wouf!".', '<code>Jape()</code> doit afficher "Wouf !".');
        const v = clean.match(/\b(?:Chen|var)\s+(\w+)\s*=\s*new\s+Chen\s*\(\s*\)\s*;/);
        if (!v) return T('Nan <code>Main</code>, kreye yon objè: <code>Chen c = new Chen();</code>', 'Dans <code>Main</code>, crée un objet : <code>Chen c = new Chen();</code>');
        if (!new RegExp('\\b' + v[1] + '\\.Jape\\s*\\(\\s*\\)\\s*;').test(clean)) return T(`Rele metòd la: <code>${v[1]}.Jape();</code>`, `Appelle la méthode : <code>${v[1]}.Jape();</code>`);
        return true;
      }
    },
{
      id: 'cs-9',
      title: T('Konstriktè', 'Les constructeurs'),
      theory: T(
        `<p>Yon <b>konstriktè</b> se yon metòd espesyal ki egzekite otomatikman lè ou fè <code>new</code>. Li gen <b>menm non</b> ak klas la epi li pa gen tip retou.</p>
         <pre>class Jwè
{
    public string Non;
    public int Pwen;

    public Jwè(string non)
    {
      Non = non;
      Pwen = 0;
    }
}

// Nan Main:
Jwè j = new Jwè("Ti Jan");
Console.WriteLine(j.Non);   // Ti Jan</pre>`,
        `<p>Un <b>constructeur</b> est une méthode spéciale exécutée automatiquement lors du <code>new</code>. Il porte le <b>même nom</b> que la classe et n'a pas de type de retour.</p>
         <pre>class Joueur
{
    public string Nom;
    public int Points;

    public Joueur(string nom)
    {
      Nom = nom;
      Points = 0;
    }
}

// Dans Main :
Joueur j = new Joueur("Ti Jean");
Console.WriteLine(j.Nom);   // Ti Jean</pre>`
      ),
      task: T('Kreye klas <code>Elev</code> ak <code>public string Non;</code> ak yon konstriktè <code>public Elev(string non)</code>. Nan <code>Main</code>, kreye <code>new Elev("Ana")</code> epi afiche <code>Non</code> li.', 'Crée la classe <code>Elev</code> avec <code>public string Non;</code> et un constructeur <code>public Elev(string non)</code>. Dans <code>Main</code>, crée <code>new Elev("Ana")</code> et affiche son <code>Non</code>.'),
      hint: T('Nan konstriktè a: <code>Non = non;</code>. Nan Main: <code>Elev e = new Elev("Ana");</code> epi <code>Console.WriteLine(e.Non);</code>', 'Dans le constructeur : <code>Non = non;</code>. Dans Main : <code>Elev e = new Elev("Ana");</code> puis <code>Console.WriteLine(e.Non);</code>'),
      starter: CS_STARTER,
      solution: 'using System;\n\nclass Program\n{\n    static void Main()\n    {\n        Elev e = new Elev("Ana");\n        Console.WriteLine(e.Non);\n    }\n}\n\nclass Elev\n{\n    public string Non;\n\n    public Elev(string non)\n    {\n        Non = non;\n    }\n}\n',
      output: ({ code }) => (code.match(/new\s+Elev\s*\(\s*"([^"]*)"/) || [])[1] || '',
      check: ({ clean }) => {
        if (!/\bclass\s+Elev\b/.test(clean)) return T('Kreye <code>class Elev</code>.', 'Crée <code>class Elev</code>.');
        if (!/public\s+string\s+Non\s*;/.test(clean)) return T('Ajoute chan <code>public string Non;</code>', 'Ajoute le champ <code>public string Non;</code>');
        const c = clean.match(/public\s+Elev\s*\(\s*string\s+(\w+)\s*\)/);
        if (!c) return T('Ajoute konstriktè a: <code>public Elev(string non)</code> — san tip retou!', 'Ajoute le constructeur : <code>public Elev(string non)</code> — sans type de retour !');
        if (!new RegExp('(this\\.)?Non\\s*=\\s*' + c[1] + '\\s*;').test(clean)) return T(`Nan konstriktè a, sove paramèt la: <code>Non = ${c[1]};</code>`, `Dans le constructeur, enregistre le paramètre : <code>Non = ${c[1]};</code>`);
        const v = clean.match(/\b(?:Elev|var)\s+(\w+)\s*=\s*new\s+Elev\s*\(\s*"[^"]+"\s*\)\s*;/);
        if (!v) return T('Nan <code>Main</code>: <code>Elev e = new Elev("Ana");</code>', 'Dans <code>Main</code> : <code>Elev e = new Elev("Ana");</code>');
        if (!new RegExp('Console\\.WriteLine\\s*\\(\\s*\\$?"?[^)]*\\b' + v[1] + '\\.Non\\b').test(clean)) return T(`Afiche non an: <code>Console.WriteLine(${v[1]}.Non);</code>`, `Affiche le nom : <code>Console.WriteLine(${v[1]}.Non);</code>`);
        return true;
      }
    },
  {
    id: 'cs-props',
    title: T('Pwopriyete { get; set; }', 'Propriétés { get; set; }'),
    theory: T(
      `<p>Nan C# pwofesyonèl, nou pa itilize chan <code>public</code> dirèkteman — nou itilize <b>pwopriyete</b>:</p>
       <pre>class Pwodwi
{
    public string Non { get; set; }      // li ak ekri
    public double Pri { get; set; }
    public int Stòk { get; private set; } // li deyò, ekri anndan sèlman
}

var p = new Pwodwi();
p.Non = "Diri";      // set
p.Pri = 250;
Console.WriteLine(p.Non);   // get</pre>
       <p>Yon pwopriyete <b>sanble</b> ak yon chan pou moun ki itilize l, men li pèmèt ou <b>kontwole</b> aksè a (n ap wè sa nan semèn pwochèn). Non pwopriyete yo an <b>PascalCase</b>.</p>`,
      `<p>En C# professionnel, on n'utilise pas de champs <code>public</code> directement — on utilise des <b>propriétés</b> :</p>
       <pre>class Produit
{
    public string Nom { get; set; }      // lecture et écriture
    public double Prix { get; set; }
    public int Stock { get; private set; } // lecture dehors, écriture dedans seulement
}

var p = new Produit();
p.Nom = "Riz";       // set
p.Prix = 250;
Console.WriteLine(p.Nom);   // get</pre>
       <p>Une propriété <b>ressemble</b> à un champ pour l'utilisateur, mais permet de <b>contrôler</b> l'accès (on le verra la semaine prochaine). Les propriétés sont en <b>PascalCase</b>.</p>`
    ),
    task: T(
      'Kreye <code>class Pwodwi</code> ak 2 pwopriyete: <code>public string Non { get; set; }</code> ak <code>public double Pri { get; set; }</code>. Nan Main, kreye yon pwodwi, ba l yon non ak yon pri, epi afiche <code>$"{p.Non}: {p.Pri} goud"</code>.',
      'Crée <code>class Pwodwi</code> avec 2 propriétés : <code>public string Non { get; set; }</code> et <code>public double Pri { get; set; }</code>. Dans Main, crée un produit, donne-lui un nom et un prix, puis affiche <code>$"{p.Non} : {p.Pri} gourdes"</code>.'
    ),
    hint: T('Klas la ale <b>anba</b> <code>class Program</code>. Nan Main: <code>var p = new Pwodwi(); p.Non = "Diri"; p.Pri = 250;</code>', 'La classe va <b>sous</b> <code>class Program</code>. Dans Main : <code>var p = new Pwodwi(); p.Non = "Diri"; p.Pri = 250;</code>'),
    starter: CS_STARTER,
    solution: csProg({ main: 'var p = new Pwodwi();\np.Non = "Diri";\np.Pri = 250;\nConsole.WriteLine($"{p.Non}: {p.Pri} goud");', after: 'class Pwodwi\n{\n    public string Non { get; set; }\n    public double Pri { get; set; }\n}' }),
    output: ({ code }) => `${(code.match(/\.Non\s*=\s*"([^"]*)"/) || [])[1] || ''}: ${(code.match(/\.Pri\s*=\s*([\d.]+)/) || [])[1] || ''} goud`,
    check: need(
      R(/class\s+Pwodwi/, 'Kreye <code>class Pwodwi</code>.', 'Crée <code>class Pwodwi</code>.'),
      R(/public\s+string\s+Non\s*\{\s*get\s*;\s*set\s*;\s*\}/, 'Ajoute <code>public string Non { get; set; }</code>', 'Ajoute <code>public string Non { get; set; }</code>'),
      R(/public\s+double\s+Pri\s*\{\s*get\s*;\s*set\s*;\s*\}/, 'Ajoute <code>public double Pri { get; set; }</code>', 'Ajoute <code>public double Pri { get; set; }</code>'),
      R(inMain(/new\s+Pwodwi\s*\(\s*\)/), 'Nan Main, kreye <code>new Pwodwi()</code>.', 'Dans Main, crée <code>new Pwodwi()</code>.'),
      R(inMain(/\w+\.Non\s*=\s*"[^"]+"\s*;/), 'Ba pwodwi a yon non: <code>p.Non = "Diri";</code>', 'Donne un nom au produit : <code>p.Non = "Diri";</code>'),
      R(inMain(/\w+\.Pri\s*=\s*[\d.]+\s*;/), 'Ba l yon pri: <code>p.Pri = 250;</code>', 'Donne-lui un prix : <code>p.Pri = 250;</code>'),
      R(inMain(/Console\.WriteLine\s*\(\s*\$"[^"]*\{\s*\w+\.Non\s*\}[^"]*\{\s*\w+\.Pri\s*\}/), 'Afiche <code>$"{p.Non}: {p.Pri} goud"</code>.', 'Affiche <code>$"{p.Non} : {p.Pri} gourdes"</code>.')
    ),
    tips: T(`<li>Pa bliye <code>;</code> apre <code>get</code> ak <code>set</code> anndan akolad yo.</li><li>Pwopriyete = PascalCase (<code>Non</code>), varyab lokal = camelCase (<code>non</code>).</li>`, `<li>N'oublie pas les <code>;</code> après <code>get</code> et <code>set</code> dans les accolades.</li><li>Propriété = PascalCase (<code>Nom</code>), variable locale = camelCase (<code>nom</code>).</li>`),
    recap: T(`<li><code>public T Non { get; set; }</code> = pwopriyete otomatik.</li><li><code>private set</code> = li sèlman deyò.</li>`, `<li><code>public T Nom { get; set; }</code> = propriété automatique.</li><li><code>private set</code> = lecture seule dehors.</li>`)
  },
  {
    id: 'cs-objinit',
    title: T('Inisyalizatè objè ak lis objè', 'Initialiseurs d\'objets et listes d\'objets'),
    theory: T(
      `<p>Olye de ekri <code>p.Non = …</code> liy pa liy, itilize yon <b>inisyalizatè objè</b>:</p>
       <pre>var p = new Pwodwi { Non = "Diri", Pri = 250 };</pre>
       <p>Konbine sa ak yon <code>List</code> pou kreye yon katalòg:</p>
       <pre>var katalòg = new List&lt;Pwodwi&gt;
{
    new Pwodwi { Non = "Diri", Pri = 250 },
    new Pwodwi { Non = "Pwa",  Pri = 300 },
};

foreach (var p in katalòg)
    Console.WriteLine($"{p.Non,-6} {p.Pri,6:F2}");</pre>`,
      `<p>Au lieu d'écrire <code>p.Nom = …</code> ligne par ligne, utilise un <b>initialiseur d'objet</b> :</p>
       <pre>var p = new Produit { Nom = "Riz", Prix = 250 };</pre>
       <p>Combine-le avec une <code>List</code> pour créer un catalogue :</p>
       <pre>var catalogue = new List&lt;Produit&gt;
{
    new Produit { Nom = "Riz",  Prix = 250 },
    new Produit { Nom = "Pois", Prix = 300 },
};

foreach (var p in catalogue)
    Console.WriteLine($"{p.Nom,-6} {p.Prix,6:F2}");</pre>`
    ),
    task: T(
      'Kreye <code>List&lt;Pwodwi&gt; katalog</code> ak <b>3</b> pwodwi (ak inisyalizatè <code>{ Non = …, Pri = … }</code>), epi afiche chak pwodwi ak <code>foreach</code>.',
      'Crée <code>List&lt;Pwodwi&gt; katalog</code> avec <b>3</b> produits (avec l\'initialiseur <code>{ Non = …, Pri = … }</code>), puis affiche chaque produit avec <code>foreach</code>.'
    ),
    hint: T('<code>new Pwodwi { Non = "Diri", Pri = 250 },</code> — 3 fwa, separe ak vigil.', '<code>new Pwodwi { Non = "Diri", Pri = 250 },</code> — 3 fois, séparés par des virgules.'),
    starter: csProg({ usings: ['System.Collections.Generic'], after: 'class Pwodwi\n{\n    public string Non { get; set; }\n    public double Pri { get; set; }\n}' }),
    solution: csProg({ usings: ['System.Collections.Generic'], main: 'var katalog = new List<Pwodwi>\n{\n    new Pwodwi { Non = "Diri", Pri = 250 },\n    new Pwodwi { Non = "Pwa", Pri = 300 },\n    new Pwodwi { Non = "Sik", Pri = 150 }\n};\n\nforeach (var p in katalog)\n{\n    Console.WriteLine($"{p.Non}: {p.Pri} goud");\n}', after: 'class Pwodwi\n{\n    public string Non { get; set; }\n    public double Pri { get; set; }\n}' }),
    output: ({ code }) => [...code.matchAll(/Non\s*=\s*"([^"]*)"\s*,\s*Pri\s*=\s*([\d.]+)/g)].map(m => `${m[1]}: ${m[2]} goud`).join('\n'),
    check: need(
      R(/new\s+List\s*<\s*Pwodwi\s*>/, 'Kreye <code>new List&lt;Pwodwi&gt;</code>.', 'Crée <code>new List&lt;Pwodwi&gt;</code>.'),
      R(count(/new\s+Pwodwi\s*(\(\s*\))?\s*\{\s*Non\s*=/, 3), 'Ajoute 3 pwodwi ak <code>new Pwodwi { Non = …, Pri = … }</code>.', 'Ajoute 3 produits avec <code>new Pwodwi { Non = …, Pri = … }</code>.'),
      R(/foreach\s*\(\s*(var|Pwodwi)\s+(\w+)\s+in\s+katalog\s*\)/, 'Pakouri ak <code>foreach (var p in katalog)</code>.', 'Parcours avec <code>foreach (var p in katalog)</code>.'),
      R(/Console\.WriteLine\s*\([^;]*\.Non/, 'Afiche non chak pwodwi.', 'Affiche le nom de chaque produit.')
    ),
    tips: T(`<li>Nan inisyalizatè a, separe pwopriyete yo ak <b>vigil</b>, pa <code>;</code>.</li>`, `<li>Dans l'initialiseur, sépare les propriétés par des <b>virgules</b>, pas des <code>;</code>.</li>`),
    recap: T(`<li><code>new T { A = 1, B = 2 }</code></li><li><code>List&lt;T&gt;</code> objè = katalòg, lis elèv…</li>`, `<li><code>new T { A = 1, B = 2 }</code></li><li><code>List&lt;T&gt;</code> d'objets = catalogue, liste d'élèves…</li>`)
  },
  {
    id: 'cs-methodsobj',
    title: T('Metòd ki chanje eta objè a', 'Méthodes qui changent l\'état de l\'objet'),
    theory: T(
      `<p>Yon objè gen <b>done</b> (pwopriyete) ak <b>konpòtman</b> (metòd). Metòd yo ka <b>chanje</b> done objè a — men nan yon fason <b>kontwole</b>:</p>
       <pre>class Telefòn
{
    public int Batri { get; private set; } = 100;

    public void Itilize(int minit)
    {
        Batri -= minit / 2;
        if (Batri &lt; 0) Batri = 0;
    }

    public void Chaje() =&gt; Batri = 100;
}</pre>
       <p>Remake <code>private set</code>: moun deyò ka <b>li</b> <code>Batri</code>, men yo pa ka ekri <code>t.Batri = 500;</code>. Sèl fason pou chanje l se pase pa metòd yo. Sa se baz <b>ankapsilasyon</b>.</p>`,
      `<p>Un objet a des <b>données</b> (propriétés) et un <b>comportement</b> (méthodes). Les méthodes peuvent <b>modifier</b> les données — de façon <b>contrôlée</b> :</p>
       <pre>class Telephone
{
    public int Batterie { get; private set; } = 100;

    public void Utiliser(int minutes)
    {
        Batterie -= minutes / 2;
        if (Batterie &lt; 0) Batterie = 0;
    }

    public void Charger() =&gt; Batterie = 100;
}</pre>
       <p>Remarque <code>private set</code> : on peut <b>lire</b> <code>Batterie</code> de l'extérieur, mais pas écrire <code>t.Batterie = 500;</code>. Seules les méthodes peuvent la modifier. C'est la base de l'<b>encapsulation</b>.</p>`
    ),
    task: T(
      'Konplete <code>Depoze</code> (ajoute nan <code>Solde</code>) ak <code>Retire</code> (retounen <code>false</code> si pa gen ase lajan, sinon retire epi retounen <code>true</code>).',
      'Complète <code>Depoze</code> (ajoute au <code>Solde</code>) et <code>Retire</code> (renvoie <code>false</code> si le solde est insuffisant, sinon retire et renvoie <code>true</code>).'
    ),
    hint: T('Nan <code>Retire</code>: <code>if (montan &gt; Solde) return false; Solde -= montan; return true;</code>', 'Dans <code>Retire</code> : <code>if (montan &gt; Solde) return false; Solde -= montan; return true;</code>'),
    starter: csProg({
      main: 'var kont = new KontBank();\nkont.Depoze(1000);\nConsole.WriteLine(kont.Retire(300));\nConsole.WriteLine(kont.Retire(5000));\nConsole.WriteLine(kont.Solde);',
      after: 'class KontBank\n{\n    public double Solde { get; private set; }\n\n    public void Depoze(double montan)\n    {\n        // ✍️\n    }\n\n    public bool Retire(double montan)\n    {\n        // ✍️\n        return false;\n    }\n}'
    }),
    solution: csProg({
      main: 'var kont = new KontBank();\nkont.Depoze(1000);\nConsole.WriteLine(kont.Retire(300));\nConsole.WriteLine(kont.Retire(5000));\nConsole.WriteLine(kont.Solde);',
      after: 'class KontBank\n{\n    public double Solde { get; private set; }\n\n    public void Depoze(double montan)\n    {\n        Solde += montan;\n    }\n\n    public bool Retire(double montan)\n    {\n        if (montan > Solde) return false;\n        Solde -= montan;\n        return true;\n    }\n}'
    }),
    output: 'True\nFalse\n700',
    check: need(
      R(/void\s+Depoze\s*\([^)]*\)\s*\{\s*(this\.)?Solde\s*(\+=|=\s*Solde\s*\+)\s*montan\s*;/, 'Nan <code>Depoze</code>: <code>Solde += montan;</code>', 'Dans <code>Depoze</code> : <code>Solde += montan;</code>'),
      R(/if\s*\(\s*montan\s*>\s*Solde\s*\)\s*(\{\s*)?return\s+false\s*;|if\s*\(\s*Solde\s*<\s*montan\s*\)\s*(\{\s*)?return\s+false\s*;/, 'Nan <code>Retire</code>: <code>if (montan &gt; Solde) return false;</code>', 'Dans <code>Retire</code> : <code>if (montan &gt; Solde) return false;</code>'),
      R(/Solde\s*(-=|=\s*Solde\s*-)\s*montan\s*;/, 'Retire lajan an: <code>Solde -= montan;</code>', 'Retire l\'argent : <code>Solde -= montan;</code>'),
      R(/return\s+true\s*;/, 'Retounen <code>true</code> si retrè a reyisi.', 'Renvoie <code>true</code> si le retrait réussit.')
    ),
    tips: T(`<li>Valide done yo <b>anvan</b> ou chanje eta objè a.</li>`, `<li>Valide les données <b>avant</b> de modifier l'état de l'objet.</li>`),
    recap: T(`<li>Done + konpòtman = objè.</li><li><code>private set</code> + metòd = kontwòl.</li>`, `<li>Données + comportement = objet.</li><li><code>private set</code> + méthodes = contrôle.</li>`)
  },

  /* ---------- Semèn 22: Ankapsilasyon ---------- */
  {
    id: 'cs-private',
    title: T('private ak validasyon', 'private et validation'),
    theory: T(
      `<p>Modifikatè aksè yo:</p>
       <ul><li><code>public</code> — tout moun ka wè l.</li>
       <li><code>private</code> — sèlman anndan klas la (pa defo).</li>
       <li><code>protected</code> — klas la ak pitit li yo (eritaj).</li></ul>
       <p>Ak yon chan <code>private</code> + yon pwopriyete ki gen <b>lojik</b>, ou pwoteje done yo:</p>
       <pre>class Tanperati
{
    private double _sèlsiyis;

    public double Selsiyis
    {
        get { return _sèlsiyis; }
        set
        {
            if (value &lt; -273.15)
                throw new ArgumentException("Twò frèt!");
            _sèlsiyis = value;    // value = sa yo bay la
        }
    }
}</pre>`,
      `<p>Les modificateurs d'accès :</p>
       <ul><li><code>public</code> — visible par tous.</li>
       <li><code>private</code> — seulement dans la classe (par défaut).</li>
       <li><code>protected</code> — la classe et ses enfants (héritage).</li></ul>
       <p>Avec un champ <code>private</code> + une propriété avec de la <b>logique</b>, on protège les données :</p>
       <pre>class Temperature
{
    private double _celsius;

    public double Celsius
    {
        get { return _celsius; }
        set
        {
            if (value &lt; -273.15)
                throw new ArgumentException("Trop froid !");
            _celsius = value;     // value = la valeur donnée
        }
    }
}</pre>`
    ),
    task: T(
      'Nan <code>class Elev</code>, kreye <code>private int laj;</code> ak pwopriyete <code>public int Laj</code> ki <code>get</code> retounen <code>laj</code>, epi <code>set</code> aksepte <code>value</code> <b>sèlman</b> si <code>value &gt;= 0</code>.',
      'Dans <code>class Elev</code>, crée <code>private int laj;</code> et la propriété <code>public int Laj</code> dont le <code>get</code> renvoie <code>laj</code>, et le <code>set</code> n\'accepte <code>value</code> <b>que</b> si <code>value &gt;= 0</code>.'
    ),
    hint: T('<code>set { if (value &gt;= 0) laj = value; }</code>', '<code>set { if (value &gt;= 0) laj = value; }</code>'),
    starter: csProg({ main: 'var e = new Elev();\ne.Laj = -5;\nConsole.WriteLine(e.Laj);\ne.Laj = 15;\nConsole.WriteLine(e.Laj);', after: 'class Elev\n{\n    // ✍️\n}' }),
    solution: csProg({ main: 'var e = new Elev();\ne.Laj = -5;\nConsole.WriteLine(e.Laj);\ne.Laj = 15;\nConsole.WriteLine(e.Laj);', after: 'class Elev\n{\n    private int laj;\n\n    public int Laj\n    {\n        get { return laj; }\n        set\n        {\n            if (value >= 0) laj = value;\n        }\n    }\n}' }),
    output: '0\n15',
    check: need(
      R(/private\s+int\s+laj\s*;/, 'Kreye chan <code>private int laj;</code>', 'Crée le champ <code>private int laj;</code>'),
      R(/public\s+int\s+Laj\s*\{/, 'Kreye pwopriyete <code>public int Laj { … }</code>.', 'Crée la propriété <code>public int Laj { … }</code>.'),
      R(/get\s*(\{\s*return\s+(this\.)?laj\s*;\s*\}|=>\s*laj\s*;)/, '<code>get</code> la dwe retounen <code>laj</code>.', 'Le <code>get</code> doit renvoyer <code>laj</code>.'),
      R(/set\s*\{[^}]*if\s*\(\s*value\s*>=?\s*0\s*\)[^}]*laj\s*=\s*value/, '<code>set</code> la: <code>if (value &gt;= 0) laj = value;</code>', 'Le <code>set</code> : <code>if (value &gt;= 0) laj = value;</code>')
    ),
    tips: T(`<li><code>value</code> se yon mo kle: se valè yo eseye bay pwopriyete a.</li><li>Konvansyon: chan prive kòmanse ak <code>_</code> (<code>_laj</code>) nan anpil ekip.</li>`, `<li><code>value</code> est un mot-clé : la valeur qu'on essaie d'affecter.</li><li>Convention : les champs privés commencent souvent par <code>_</code> (<code>_age</code>).</li>`),
    recap: T(`<li><code>private</code> chan + <code>public</code> pwopriyete = pwoteksyon.</li><li><code>set</code> ka valide <code>value</code>.</li>`, `<li>Champ <code>private</code> + propriété <code>public</code> = protection.</li><li>Le <code>set</code> peut valider <code>value</code>.</li>`)
  },
  {
    id: 'cs-static',
    title: T('Manm static', 'Membres static'),
    theory: T(
      `<p>Yon manm <code>static</code> fè pati <b>klas la</b> li menm, pa yon objè espesifik. Tout objè yo <b>pataje</b> l:</p>
       <pre>class Jwè
{
    public static int KantiteJwè = 0;   // youn sèl pou tout klas la
    public string Non;

    public Jwè(string non)
    {
        Non = non;
        KantiteJwè++;     // chak nouvo jwè ogmante kontè a
    }
}

new Jwè("Ana");
new Jwè("Jak");
Console.WriteLine(Jwè.KantiteJwè);   // 2 — aksè ak NON KLAS la</pre>
       <p>Ou deja konnen manm static: <code>Console.WriteLine</code>, <code>Math.PI</code>, <code>int.Parse</code> — ou pa janm fè <code>new Console()</code>!</p>`,
      `<p>Un membre <code>static</code> appartient à la <b>classe</b> elle-même, pas à un objet précis. Tous les objets le <b>partagent</b> :</p>
       <pre>class Joueur
{
    public static int NombreJoueurs = 0;  // un seul pour toute la classe
    public string Nom;

    public Joueur(string nom)
    {
        Nom = nom;
        NombreJoueurs++;     // chaque nouveau joueur incrémente
    }
}

new Joueur("Ana");
new Joueur("Jacques");
Console.WriteLine(Joueur.NombreJoueurs);   // 2 — accès par le NOM DE LA CLASSE</pre>
       <p>Tu connais déjà des membres static : <code>Console.WriteLine</code>, <code>Math.PI</code>, <code>int.Parse</code> — on ne fait jamais <code>new Console()</code> !</p>`
    ),
    task: T(
      'Nan <code>class Elev</code>, ajoute <code>public static int Total = 0;</code> epi ogmante l nan konstriktè a. Nan Main, kreye 3 elèv epi afiche <code>Elev.Total</code>.',
      'Dans <code>class Elev</code>, ajoute <code>public static int Total = 0;</code> et incrémente-le dans le constructeur. Dans Main, crée 3 élèves puis affiche <code>Elev.Total</code>.'
    ),
    hint: T('Nan konstriktè a: <code>Total++;</code>. Nan Main: <code>Console.WriteLine(Elev.Total);</code>', 'Dans le constructeur : <code>Total++;</code>. Dans Main : <code>Console.WriteLine(Elev.Total);</code>'),
    starter: csProg({ after: 'class Elev\n{\n    public string Non;\n\n    public Elev(string non)\n    {\n        Non = non;\n    }\n}' }),
    solution: csProg({ main: 'new Elev("Ana");\nnew Elev("Jak");\nnew Elev("Lise");\n\nConsole.WriteLine(Elev.Total);', after: 'class Elev\n{\n    public static int Total = 0;\n    public string Non;\n\n    public Elev(string non)\n    {\n        Non = non;\n        Total++;\n    }\n}' }),
    output: '3',
    check: need(
      R(/public\s+static\s+int\s+Total\s*(=\s*0\s*)?;/, 'Ajoute <code>public static int Total = 0;</code>', 'Ajoute <code>public static int Total = 0;</code>'),
      R(/public\s+Elev\s*\([^)]*\)\s*\{[^}]*Total\s*(\+\+|\+=\s*1)/, 'Ogmante <code>Total++</code> nan konstriktè a.', 'Incrémente <code>Total++</code> dans le constructeur.'),
      R(count(/new\s+Elev\s*\(\s*"[^"]*"\s*\)/, 3), 'Kreye 3 elèv nan Main.', 'Crée 3 élèves dans Main.'),
      R(/Console\.WriteLine\s*\(\s*Elev\.Total\s*\)/, 'Afiche <code>Elev.Total</code> (ak non klas la).', 'Affiche <code>Elev.Total</code> (avec le nom de la classe).')
    ),
    tips: T(`<li>Ou pa ka aksede <code>Total</code> atravè yon objè (<code>e.Total</code> → erè CS0176). Itilize <code>Elev.Total</code>.</li><li>Yon metòd <code>static</code> pa ka itilize manm ki pa static (pa gen <code>this</code>).</li>`, `<li>On ne peut pas accéder à <code>Total</code> via un objet (<code>e.Total</code> → erreur CS0176). Utilise <code>Elev.Total</code>.</li><li>Une méthode <code>static</code> ne peut pas utiliser les membres non static (pas de <code>this</code>).</li>`),
    recap: T(`<li><code>static</code> = pataje pa tout objè.</li><li>Aksè: <code>Klas.Manm</code>.</li>`, `<li><code>static</code> = partagé par tous les objets.</li><li>Accès : <code>Classe.Membre</code>.</li>`)
  },
  {
    id: 'cs-this',
    title: T('Mo kle this', 'Le mot-clé this'),
    theory: T(
      `<p><code>this</code> vle di "<b>objè sa a</b>". Li itil sitou lè yon paramèt gen <b>menm non</b> ak yon chan:</p>
       <pre>class Liv
{
    private string tit;
    private int paj;

    public Liv(string tit, int paj)
    {
        this.tit = tit;   // this.tit = chan an; tit = paramèt la
        this.paj = paj;
    }

    public void Dekri()
    {
        Console.WriteLine($"{tit} — {paj} paj");
    }
}</pre>
       <p>San <code>this</code>, <code>tit = tit;</code> ta bay paramèt la pwòp valè li — chan an ta rete vid!</p>`,
      `<p><code>this</code> signifie « <b>cet objet-ci</b> ». Il est surtout utile quand un paramètre a le <b>même nom</b> qu'un champ :</p>
       <pre>class Livre
{
    private string titre;
    private int pages;

    public Livre(string titre, int pages)
    {
        this.titre = titre;   // this.titre = le champ ; titre = le paramètre
        this.pages = pages;
    }

    public void Decrire()
    {
        Console.WriteLine($"{titre} — {pages} pages");
    }
}</pre>
       <p>Sans <code>this</code>, <code>titre = titre;</code> réaffecterait le paramètre à lui-même — le champ resterait vide !</p>`
    ),
    task: T(
      'Konplete konstriktè <code>Liv(string tit, int paj)</code> ak <code>this.tit = tit;</code> ak <code>this.paj = paj;</code>, epi metòd <code>Dekri()</code> ki afiche <code>$"{tit} — {paj} paj"</code>.',
      'Complète le constructeur <code>Liv(string tit, int paj)</code> avec <code>this.tit = tit;</code> et <code>this.paj = paj;</code>, puis la méthode <code>Dekri()</code> qui affiche <code>$"{tit} — {paj} pages"</code>.'
    ),
    hint: T('2 liy nan konstriktè a ak <code>this.</code>, 1 <code>Console.WriteLine</code> nan <code>Dekri</code>.', '2 lignes dans le constructeur avec <code>this.</code>, 1 <code>Console.WriteLine</code> dans <code>Dekri</code>.'),
    starter: csProg({ main: 'var l = new Liv("Gouverneurs de la rosée", 192);\nl.Dekri();', after: 'class Liv\n{\n    private string tit;\n    private int paj;\n\n    public Liv(string tit, int paj)\n    {\n        // ✍️\n    }\n\n    public void Dekri()\n    {\n        // ✍️\n    }\n}' }),
    solution: csProg({ main: 'var l = new Liv("Gouverneurs de la rosée", 192);\nl.Dekri();', after: 'class Liv\n{\n    private string tit;\n    private int paj;\n\n    public Liv(string tit, int paj)\n    {\n        this.tit = tit;\n        this.paj = paj;\n    }\n\n    public void Dekri()\n    {\n        Console.WriteLine($"{tit} — {paj} paj");\n    }\n}' }),
    output: 'Gouverneurs de la rosée — 192 paj',
    check: need(
      R(/this\.tit\s*=\s*tit\s*;/, 'Ekri <code>this.tit = tit;</code>', 'Écris <code>this.tit = tit;</code>'),
      R(/this\.paj\s*=\s*paj\s*;/, 'Ekri <code>this.paj = paj;</code>', 'Écris <code>this.paj = paj;</code>'),
      R(/void\s+Dekri\s*\(\s*\)\s*\{\s*Console\.WriteLine\s*\(\s*\$"[^"]*\{\s*(this\.)?tit\s*\}[^"]*\{\s*(this\.)?paj\s*\}/, 'Nan <code>Dekri()</code>, afiche <code>$"{tit} — {paj} paj"</code>.', 'Dans <code>Dekri()</code>, affiche <code>$"{tit} — {paj} pages"</code>.')
    ),
    extra: T(`<p>📚 <i>Gouverneurs de la rosée</i> (1944) se yon roman pa ekriven ayisyen <b>Jacques Roumain</b> — youn nan liv ayisyen ki pi koni nan mond lan.</p>`, `<p>📚 <i>Gouverneurs de la rosée</i> (1944) est un roman de l'écrivain haïtien <b>Jacques Roumain</b> — l'un des livres haïtiens les plus célèbres au monde.</p>`),
    tips: T(`<li><code>this</code> pa egziste nan metòd <code>static</code>.</li>`, `<li><code>this</code> n'existe pas dans une méthode <code>static</code>.</li>`),
    recap: T(`<li><code>this.chan = paramèt;</code></li>`, `<li><code>this.champ = parametre;</code></li>`)
  },
  {
    id: 'cs-tostring',
    title: T('Ranplase ToString()', 'Redéfinir ToString()'),
    theory: T(
      `<p>Lè w fè <code>Console.WriteLine(objè)</code>, C# rele metòd <code>ToString()</code> objè a. Pa defo, li afiche non klas la (<code>Moun</code>) — pa trè itil! Ou ka <b>ranplase</b> l ak <code>override</code>:</p>
       <pre>class Moun
{
    public string Non { get; set; }
    public int Laj { get; set; }

    public override string ToString()
    {
        return $"{Non} ({Laj} an)";
    }
}

var m = new Moun { Non = "Ana", Laj = 15 };
Console.WriteLine(m);   // Ana (15 an)</pre>
       <p>Tout klas nan C# eritye de <code>object</code>, ki gen <code>ToString()</code>, <code>Equals()</code>, ak <code>GetHashCode()</code>.</p>`,
      `<p>Quand on fait <code>Console.WriteLine(objet)</code>, C# appelle la méthode <code>ToString()</code> de l'objet. Par défaut, elle affiche le nom de la classe (<code>Personne</code>) — pas très utile ! On peut la <b>redéfinir</b> avec <code>override</code> :</p>
       <pre>class Personne
{
    public string Nom { get; set; }
    public int Age { get; set; }

    public override string ToString()
    {
        return $"{Nom} ({Age} ans)";
    }
}

var p = new Personne { Nom = "Ana", Age = 15 };
Console.WriteLine(p);   // Ana (15 ans)</pre>
       <p>Toutes les classes C# héritent de <code>object</code>, qui possède <code>ToString()</code>, <code>Equals()</code> et <code>GetHashCode()</code>.</p>`
    ),
    task: T(
      'Nan <code>class Moun</code>, ajoute <code>public override string ToString()</code> ki retounen <code>$"{Non} ({Laj} an)"</code>.',
      'Dans <code>class Moun</code>, ajoute <code>public override string ToString()</code> qui renvoie <code>$"{Non} ({Laj} ans)"</code>.'
    ),
    hint: T('<code>public override string ToString() { return $"{Non} ({Laj} an)"; }</code>', '<code>public override string ToString() { return $"{Non} ({Laj} ans)"; }</code>'),
    starter: csProg({ main: 'var m = new Moun { Non = "Ana", Laj = 15 };\nConsole.WriteLine(m);', after: 'class Moun\n{\n    public string Non { get; set; }\n    public int Laj { get; set; }\n\n    // ✍️\n}' }),
    solution: csProg({ main: 'var m = new Moun { Non = "Ana", Laj = 15 };\nConsole.WriteLine(m);', after: 'class Moun\n{\n    public string Non { get; set; }\n    public int Laj { get; set; }\n\n    public override string ToString()\n    {\n        return $"{Non} ({Laj} an)";\n    }\n}' }),
    output: ({ code }) => ((code.match(/ToString\s*\(\s*\)\s*(?:\{\s*return\s*|=>\s*)\$"([^"]*)"/) || [])[1] || '').replace(/\{\s*Non\s*\}/, 'Ana').replace(/\{\s*Laj\s*\}/, '15'),
    check: need(
      R(/public\s+override\s+string\s+ToString\s*\(\s*\)/, 'Ekri <code>public override string ToString()</code>.', 'Écris <code>public override string ToString()</code>.'),
      R(/ToString\s*\(\s*\)\s*(\{\s*return|=>)\s*\$"[^"]*\{\s*Non\s*\}[^"]*\{\s*Laj\s*\}/, 'Retounen <code>$"{Non} ({Laj} an)"</code>.', 'Renvoie <code>$"{Non} ({Laj} ans)"</code>.')
    ),
    tips: T(`<li>San <code>override</code>, ou jwenn yon avètisman CS0114 epi li pa mache jan w vle.</li>`, `<li>Sans <code>override</code>, avertissement CS0114 et ça ne marche pas comme prévu.</li>`),
    recap: T(`<li><code>public override string ToString()</code> = kijan objè a afiche.</li>`, `<li><code>public override string ToString()</code> = comment l'objet s'affiche.</li>`)
  },
  {
    id: 'cs-compose',
    title: T('Konpozisyon: objè ki gen objè', 'Composition : des objets dans des objets'),
    theory: T(
      `<p>Nan vrè lojisyèl, objè yo <b>gen</b> lòt objè: yon lekòl <i>gen</i> elèv, yon panye <i>gen</i> pwodwi, yon jwè <i>gen</i> yon envantè. Sa rele <b>konpozisyon</b> ("gen yon").</p>
       <pre>class Panye
{
    public List&lt;Pwodwi&gt; Atik { get; } = new List&lt;Pwodwi&gt;();

    public void Ajoute(Pwodwi p) =&gt; Atik.Add(p);

    public double Total()
    {
        double t = 0;
        foreach (var p in Atik) t += p.Pri;
        return t;
    }
}</pre>
       <p>Remake <code>= new List…()</code> dirèkteman sou pwopriyete a: lis la toujou pare, li pa janm <code>null</code>.</p>`,
      `<p>Dans les vrais logiciels, des objets <b>contiennent</b> d'autres objets : une école <i>a</i> des élèves, un panier <i>a</i> des produits, un joueur <i>a</i> un inventaire. C'est la <b>composition</b> (« a un »).</p>
       <pre>class Panier
{
    public List&lt;Produit&gt; Articles { get; } = new List&lt;Produit&gt;();

    public void Ajouter(Produit p) =&gt; Articles.Add(p);

    public double Total()
    {
        double t = 0;
        foreach (var p in Articles) t += p.Prix;
        return t;
    }
}</pre>
       <p>Remarque le <code>= new List…()</code> directement sur la propriété : la liste est toujours prête, jamais <code>null</code>.</p>`
    ),
    task: T(
      'Nan <code>class Lekol</code>, ajoute <code>public List&lt;Elev&gt; ListElev { get; } = new List&lt;Elev&gt;();</code> ak metòd <code>public void Enskri(Elev e)</code>. Nan Main, enskri 2 elèv epi afiche <code>lekol.ListElev.Count</code>.',
      'Dans <code>class Lekol</code>, ajoute <code>public List&lt;Elev&gt; ListElev { get; } = new List&lt;Elev&gt;();</code> et la méthode <code>public void Enskri(Elev e)</code>. Dans Main, inscris 2 élèves puis affiche <code>lekol.ListElev.Count</code>.'
    ),
    hint: T('<code>public void Enskri(Elev e) { ListElev.Add(e); }</code> — nan Main: <code>lekol.Enskri(new Elev("Ana"));</code>', '<code>public void Enskri(Elev e) { ListElev.Add(e); }</code> — dans Main : <code>lekol.Enskri(new Elev("Ana"));</code>'),
    starter: csProg({ usings: ['System.Collections.Generic'], main: 'var lekol = new Lekol();\n\n// ✍️', after: 'class Elev\n{\n    public string Non { get; }\n    public Elev(string non) { Non = non; }\n}\n\nclass Lekol\n{\n    // ✍️\n}' }),
    solution: csProg({ usings: ['System.Collections.Generic'], main: 'var lekol = new Lekol();\n\nlekol.Enskri(new Elev("Ana"));\nlekol.Enskri(new Elev("Jak"));\nConsole.WriteLine(lekol.ListElev.Count);', after: 'class Elev\n{\n    public string Non { get; }\n    public Elev(string non) { Non = non; }\n}\n\nclass Lekol\n{\n    public List<Elev> ListElev { get; } = new List<Elev>();\n\n    public void Enskri(Elev e)\n    {\n        ListElev.Add(e);\n    }\n}' }),
    output: '2',
    check: need(
      R(/List\s*<\s*Elev\s*>\s+ListElev\s*\{\s*get\s*;\s*\}\s*=\s*new\s+(List\s*<\s*Elev\s*>\s*)?\(\s*\)\s*;|List\s*<\s*Elev\s*>\s+ListElev\s*=\s*new/, 'Ajoute <code>public List&lt;Elev&gt; ListElev { get; } = new List&lt;Elev&gt;();</code>', 'Ajoute <code>public List&lt;Elev&gt; ListElev { get; } = new List&lt;Elev&gt;();</code>'),
      R(/public\s+void\s+Enskri\s*\(\s*Elev\s+(\w+)\s*\)\s*(\{\s*)?(=>\s*)?ListElev\.Add\s*\(\s*\1\s*\)/, 'Ekri <code>public void Enskri(Elev e) { ListElev.Add(e); }</code>', 'Écris <code>public void Enskri(Elev e) { ListElev.Add(e); }</code>'),
      R(c => (csMainBody(c.clean).match(/\.Enskri\s*\(/g) || []).length >= 2, 'Enskri 2 elèv nan Main.', 'Inscris 2 élèves dans Main.'),
      R(/Console\.WriteLine\s*\(\s*\w+\.ListElev\.Count\s*\)/, 'Afiche <code>lekol.ListElev.Count</code>.', 'Affiche <code>lekol.ListElev.Count</code>.')
    ),
    tips: T(`<li>Si w bliye <code>= new List…()</code>, <code>Add</code> ap bay <code>NullReferenceException</code>.</li>`, `<li>Si tu oublies <code>= new List…()</code>, <code>Add</code> lèvera une <code>NullReferenceException</code>.</li>`),
    recap: T(`<li>Konpozisyon = "gen yon".</li><li>Inisyalize lis yo touswit.</li>`, `<li>Composition = « a un ».</li><li>Initialise les listes tout de suite.</li>`)
  },

  /* ---------- Semèn 23: Eritaj ---------- */
  {
    id: 'cs-inherit',
    title: T('Eritaj', 'Héritage'),
    theory: T(
      `<p><b>Eritaj</b> pèmèt yon klas <b>pitit</b> resevwa tout sa yon klas <b>paran</b> genyen, epi ajoute pwòp bagay pa l. Sa rele relasyon "<b>se yon</b>": yon chat <i>se yon</i> animal.</p>
       <pre>class Animal                 // paran (klas de baz)
{
    public string Non { get; set; }
    public void Manje() =&gt; Console.WriteLine($"{Non} ap manje");
}

class Chat : Animal          // pitit — ":" vle di "eritye de"
{
    public void Miyawo() =&gt; Console.WriteLine("Miyaw!");
}

var c = new Chat { Non = "Mimi" };
c.Manje();    // eritye de Animal ✅
c.Miyawo();   // pwòp metòd Chat ✅</pre>
       <p>C# pèmèt <b>yon sèl</b> paran pa klas.</p>`,
      `<p>L'<b>héritage</b> permet à une classe <b>enfant</b> de recevoir tout ce qu'a une classe <b>parent</b>, et d'ajouter ses propres éléments. C'est la relation « <b>est un</b> » : un chat <i>est un</i> animal.</p>
       <pre>class Animal                 // parent (classe de base)
{
    public string Nom { get; set; }
    public void Manger() =&gt; Console.WriteLine($"{Nom} mange");
}

class Chat : Animal          // enfant — ":" veut dire « hérite de »
{
    public void Miauler() =&gt; Console.WriteLine("Miaou !");
}

var c = new Chat { Nom = "Mimi" };
c.Manger();    // hérité d'Animal ✅
c.Miauler();   // méthode propre à Chat ✅</pre>
       <p>C# n'autorise qu'<b>un seul</b> parent par classe.</p>`
    ),
    task: T(
      'Kreye <code>class Chat : Animal</code> ak yon metòd <code>public void Miyawo()</code> ki afiche <b>"Miyaw!"</b>. Nan Main, kreye yon chat, ba l yon non, epi rele <code>Manje()</code> ak <code>Miyawo()</code>.',
      'Crée <code>class Chat : Animal</code> avec une méthode <code>public void Miyawo()</code> qui affiche <b>"Miaou !"</b>. Dans Main, crée un chat, donne-lui un nom, puis appelle <code>Manje()</code> et <code>Miyawo()</code>.'
    ),
    hint: T('<code>class Chat : Animal { public void Miyawo() { Console.WriteLine("Miyaw!"); } }</code>', '<code>class Chat : Animal { public void Miyawo() { Console.WriteLine("Miaou !"); } }</code>'),
    starter: csProg({ after: 'class Animal\n{\n    public string Non { get; set; }\n\n    public void Manje()\n    {\n        Console.WriteLine($"{Non} ap manje");\n    }\n}\n\n// ✍️' }),
    solution: csProg({ main: 'var c = new Chat { Non = "Mimi" };\nc.Manje();\nc.Miyawo();', after: 'class Animal\n{\n    public string Non { get; set; }\n\n    public void Manje()\n    {\n        Console.WriteLine($"{Non} ap manje");\n    }\n}\n\nclass Chat : Animal\n{\n    public void Miyawo()\n    {\n        Console.WriteLine("Miyaw!");\n    }\n}' }),
    output: ({ code }) => `${(code.match(/Non\s*=\s*"([^"]*)"/) || [])[1] || 'Mimi'} ap manje\n${(code.match(/Miyawo\s*\(\s*\)\s*\{?\s*(?:=>\s*)?Console\.WriteLine\s*\(\s*"([^"]*)"/) || [])[1] || 'Miyaw!'}`,
    check: need(
      R(/class\s+Chat\s*:\s*Animal/, 'Ekri <code>class Chat : Animal</code>.', 'Écris <code>class Chat : Animal</code>.'),
      R(/public\s+void\s+Miyawo\s*\(\s*\)/, 'Ajoute <code>public void Miyawo()</code>.', 'Ajoute <code>public void Miyawo()</code>.'),
      R(inMain(/new\s+Chat\s*(\(\s*\))?/), 'Nan Main, kreye <code>new Chat</code>.', 'Dans Main, crée <code>new Chat</code>.'),
      R(inMain(/\.Manje\s*\(\s*\)\s*;/), 'Rele <code>Manje()</code> (eritye de Animal).', 'Appelle <code>Manje()</code> (hérité d\'Animal).'),
      R(inMain(/\.Miyawo\s*\(\s*\)\s*;/), 'Rele <code>Miyawo()</code>.', 'Appelle <code>Miyawo()</code>.')
    ),
    tips: T(`<li>Itilize eritaj sèlman si relasyon "se yon" vre. Yon <code>Machin</code> <i>pa se yon</i> <code>Motè</code> — li <i>gen yon</i> motè (konpozisyon).</li>`, `<li>N'utilise l'héritage que si la relation « est un » est vraie. Une <code>Voiture</code> <i>n'est pas un</i> <code>Moteur</code> — elle <i>a un</i> moteur (composition).</li>`),
    recap: T(`<li><code>class Pitit : Paran</code></li><li>Pitit la resevwa manm public/protected paran an.</li>`, `<li><code>class Enfant : Parent</code></li><li>L'enfant reçoit les membres public/protected du parent.</li>`)
  },
  {
    id: 'cs-base',
    title: T('Konstriktè ak base', 'Constructeurs et base'),
    theory: T(
      `<p>Si paran an gen yon konstriktè ak paramèt, pitit la dwe rele l ak <code>: base(…)</code>:</p>
       <pre>class Animal
{
    public string Non { get; }
    public Animal(string non) { Non = non; }
}

class Chen : Animal
{
    public string Ras { get; }

    public Chen(string non, string ras) : base(non)   // rele Animal(non)
    {
        Ras = ras;
    }
}

var c = new Chen("Bobi", "Labrador");
Console.WriteLine($"{c.Non} se yon {c.Ras}");</pre>
       <p>Lòd egzekisyon an: konstriktè <b>paran</b> an premye, answit konstriktè <b>pitit</b> la.</p>`,
      `<p>Si le parent a un constructeur avec paramètres, l'enfant doit l'appeler avec <code>: base(…)</code> :</p>
       <pre>class Animal
{
    public string Nom { get; }
    public Animal(string nom) { Nom = nom; }
}

class Chien : Animal
{
    public string Race { get; }

    public Chien(string nom, string race) : base(nom)   // appelle Animal(nom)
    {
        Race = race;
    }
}

var c = new Chien("Bobi", "Labrador");
Console.WriteLine($"{c.Nom} est un {c.Race}");</pre>
       <p>Ordre d'exécution : constructeur du <b>parent</b> d'abord, puis celui de l'<b>enfant</b>.</p>`
    ),
    task: T(
      'Ekri konstriktè <code>public Chen(string non, string ras) : base(non)</code> ki sove <code>Ras = ras;</code>. Nan Main, kreye yon chen epi afiche <code>$"{c.Non} se yon {c.Ras}"</code>.',
      'Écris le constructeur <code>public Chen(string non, string ras) : base(non)</code> qui enregistre <code>Ras = ras;</code>. Dans Main, crée un chien et affiche <code>$"{c.Non} est un {c.Ras}"</code>.'
    ),
    hint: T('<code>public Chen(string non, string ras) : base(non) { Ras = ras; }</code>', '<code>public Chen(string non, string ras) : base(non) { Ras = ras; }</code>'),
    starter: csProg({ after: 'class Animal\n{\n    public string Non { get; }\n    public Animal(string non) { Non = non; }\n}\n\nclass Chen : Animal\n{\n    public string Ras { get; }\n\n    // ✍️\n}' }),
    solution: csProg({ main: 'var c = new Chen("Bobi", "Labrador");\nConsole.WriteLine($"{c.Non} se yon {c.Ras}");', after: 'class Animal\n{\n    public string Non { get; }\n    public Animal(string non) { Non = non; }\n}\n\nclass Chen : Animal\n{\n    public string Ras { get; }\n\n    public Chen(string non, string ras) : base(non)\n    {\n        Ras = ras;\n    }\n}' }),
    output: ({ code }) => { const m = code.match(/new\s+Chen\s*\(\s*"([^"]*)"\s*,\s*"([^"]*)"/); return m ? `${m[1]} se yon ${m[2]}` : ''; },
    check: need(
      R(/public\s+Chen\s*\(\s*string\s+(\w+)\s*,\s*string\s+(\w+)\s*\)\s*:\s*base\s*\(\s*\1\s*\)/, 'erè CS7036: ekri <code>public Chen(string non, string ras) : base(non)</code>', 'erreur CS7036 : écris <code>public Chen(string non, string ras) : base(non)</code>'),
      R(/Ras\s*=\s*ras\s*;/, 'Nan konstriktè a: <code>Ras = ras;</code>', 'Dans le constructeur : <code>Ras = ras;</code>'),
      R(inMain(/new\s+Chen\s*\(\s*"[^"]+"\s*,\s*"[^"]+"\s*\)/), 'Kreye <code>new Chen("Bobi", "Labrador")</code>.', 'Crée <code>new Chen("Bobi", "Labrador")</code>.'),
      R(inMain(/\{\s*\w+\.Non\s*\}[^"]*\{\s*\w+\.Ras\s*\}/), 'Afiche <code>$"{c.Non} se yon {c.Ras}"</code>.', 'Affiche <code>$"{c.Non} est un {c.Ras}"</code>.')
    ),
    tips: T(`<li><code>: base(…)</code> ekri <b>apre</b> parantèz konstriktè a, <b>anvan</b> akolad la.</li>`, `<li><code>: base(…)</code> s'écrit <b>après</b> les parenthèses du constructeur, <b>avant</b> l'accolade.</li>`),
    recap: T(`<li><code>Pitit(…) : base(…)</code> rele konstriktè paran an.</li>`, `<li><code>Enfant(…) : base(…)</code> appelle le constructeur parent.</li>`)
  },
  {
    id: 'cs-virtual',
    title: T('virtual ak override', 'virtual et override'),
    theory: T(
      `<p>Yon metòd <code>virtual</code> nan paran an <b>ka</b> ranplase pa pitit yo ak <code>override</code>:</p>
       <pre>class Animal
{
    public virtual void FeBwi()
    {
        Console.WriteLine("...");
    }
}

class Chat : Animal
{
    public override void FeBwi() =&gt; Console.WriteLine("Miyaw!");
}

class Kok : Animal
{
    public override void FeBwi() =&gt; Console.WriteLine("Kokoriko!");
}</pre>
       <p>Pitit la ka rele vèsyon paran an tou ak <code>base.FeBwi();</code>.</p>`,
      `<p>Une méthode <code>virtual</code> du parent <b>peut</b> être redéfinie par les enfants avec <code>override</code> :</p>
       <pre>class Animal
{
    public virtual void FaireDuBruit()
    {
        Console.WriteLine("...");
    }
}

class Chat : Animal
{
    public override void FaireDuBruit() =&gt; Console.WriteLine("Miaou !");
}

class Coq : Animal
{
    public override void FaireDuBruit() =&gt; Console.WriteLine("Cocorico !");
}</pre>
       <p>L'enfant peut aussi appeler la version du parent avec <code>base.FaireDuBruit();</code>.</p>`
    ),
    task: T(
      'Fè <code>FeBwi()</code> nan <code>Animal</code> vin <code>virtual</code>. Kreye <code>class Chat : Animal</code> ak <code>class Chen : Animal</code> ki <code>override</code> <code>FeBwi()</code> (<b>"Miyaw!"</b> ak <b>"Wouf!"</b>). Rele yo nan Main.',
      'Rends <code>FeBwi()</code> d\'<code>Animal</code> <code>virtual</code>. Crée <code>class Chat : Animal</code> et <code>class Chen : Animal</code> qui font <code>override</code> de <code>FeBwi()</code> (<b>"Miaou !"</b> et <b>"Wouf !"</b>). Appelle-les dans Main.'
    ),
    hint: T('<code>public override void FeBwi() { Console.WriteLine("Wouf!"); }</code>', '<code>public override void FeBwi() { Console.WriteLine("Wouf !"); }</code>'),
    starter: csProg({ after: 'class Animal\n{\n    public void FeBwi()\n    {\n        Console.WriteLine("...");\n    }\n}\n\n// ✍️' }),
    solution: csProg({ main: 'new Chat().FeBwi();\nnew Chen().FeBwi();', after: 'class Animal\n{\n    public virtual void FeBwi()\n    {\n        Console.WriteLine("...");\n    }\n}\n\nclass Chat : Animal\n{\n    public override void FeBwi()\n    {\n        Console.WriteLine("Miyaw!");\n    }\n}\n\nclass Chen : Animal\n{\n    public override void FeBwi()\n    {\n        Console.WriteLine("Wouf!");\n    }\n}' }),
    output: 'Miyaw!\nWouf!',
    check: need(
      R(/public\s+virtual\s+void\s+FeBwi\s*\(\s*\)/, 'Nan Animal: <code>public virtual void FeBwi()</code>.', 'Dans Animal : <code>public virtual void FeBwi()</code>.'),
      R(/class\s+Chat\s*:\s*Animal/, 'Kreye <code>class Chat : Animal</code>.', 'Crée <code>class Chat : Animal</code>.'),
      R(/class\s+Chen\s*:\s*Animal/, 'Kreye <code>class Chen : Animal</code>.', 'Crée <code>class Chen : Animal</code>.'),
      R(count(/public\s+override\s+void\s+FeBwi\s*\(\s*\)/, 2), 'Chak pitit dwe gen <code>public override void FeBwi()</code>.', 'Chaque enfant doit avoir <code>public override void FeBwi()</code>.'),
      R(c => (csMainBody(c.clean).match(/\.FeBwi\s*\(\s*\)/g) || []).length >= 2, 'Rele <code>FeBwi()</code> sou yon chat ak yon chen nan Main.', 'Appelle <code>FeBwi()</code> sur un chat et un chien dans Main.')
    ),
    tips: T(`<li>San <code>virtual</code> nan paran an, <code>override</code> bay erè CS0506.</li>`, `<li>Sans <code>virtual</code> chez le parent, <code>override</code> donne l'erreur CS0506.</li>`),
    recap: T(`<li>Paran: <code>virtual</code>. Pitit: <code>override</code>.</li>`, `<li>Parent : <code>virtual</code>. Enfant : <code>override</code>.</li>`)
  },
  {
    id: 'cs-abstract',
    title: T('Klas abstrè', 'Classes abstraites'),
    theory: T(
      `<p>Yon klas <code>abstract</code> se yon <b>modèl enkonplè</b>: ou pa ka kreye l ak <code>new</code>. Li ka gen metòd <code>abstract</code> (san kò) ke pitit yo <b>OBLIJE</b> ekri:</p>
       <pre>abstract class Fòm
{
    public abstract double Sifas();       // pa gen kò — jis yon pwomès

    public void Dekri() =&gt;
        Console.WriteLine($"Sifas: {Sifas():F2}");
}

class Kare : Fòm
{
    public double Kote { get; set; }
    public override double Sifas() =&gt; Kote * Kote;
}

// new Fòm();   ❌ erè: klas abstrè
new Kare { Kote = 3 }.Dekri();   // Sifas: 9.00</pre>`,
      `<p>Une classe <code>abstract</code> est un <b>modèle incomplet</b> : on ne peut pas l'instancier avec <code>new</code>. Elle peut avoir des méthodes <code>abstract</code> (sans corps) que les enfants <b>DOIVENT</b> écrire :</p>
       <pre>abstract class Forme
{
    public abstract double Surface();       // pas de corps — juste une promesse

    public void Decrire() =&gt;
        Console.WriteLine($"Surface : {Surface():F2}");
}

class Carre : Forme
{
    public double Cote { get; set; }
    public override double Surface() =&gt; Cote * Cote;
}

// new Forme();   ❌ erreur : classe abstraite
new Carre { Cote = 3 }.Decrire();   // Surface : 9.00</pre>`
    ),
    task: T(
      'Kreye <code>class Sek : Fom</code> ak pwopriyete <code>public double Reyon { get; set; }</code>, epi <code>override</code> <code>Sifas()</code> pou retounen <code>Math.PI * Reyon * Reyon</code>.',
      'Crée <code>class Sek : Fom</code> avec la propriété <code>public double Reyon { get; set; }</code>, et fais <code>override</code> de <code>Sifas()</code> pour renvoyer <code>Math.PI * Reyon * Reyon</code>.'
    ),
    hint: T('<code>public override double Sifas() { return Math.PI * Reyon * Reyon; }</code>', '<code>public override double Sifas() { return Math.PI * Reyon * Reyon; }</code>'),
    starter: csProg({ main: 'new Rektang { Lajè = 2, Wotè = 3 }.Dekri();\n// ✍️ teste Sek la', after: 'abstract class Fom\n{\n    public abstract double Sifas();\n\n    public void Dekri()\n    {\n        Console.WriteLine($"Sifas: {Sifas():F2}");\n    }\n}\n\nclass Rektang : Fom\n{\n    public double Lajè { get; set; }\n    public double Wotè { get; set; }\n    public override double Sifas() => Lajè * Wotè;\n}\n\n// ✍️' }),
    solution: csProg({ main: 'new Rektang { Lajè = 2, Wotè = 3 }.Dekri();\nnew Sek { Reyon = 1 }.Dekri();', after: 'abstract class Fom\n{\n    public abstract double Sifas();\n\n    public void Dekri()\n    {\n        Console.WriteLine($"Sifas: {Sifas():F2}");\n    }\n}\n\nclass Rektang : Fom\n{\n    public double Lajè { get; set; }\n    public double Wotè { get; set; }\n    public override double Sifas() => Lajè * Wotè;\n}\n\nclass Sek : Fom\n{\n    public double Reyon { get; set; }\n\n    public override double Sifas()\n    {\n        return Math.PI * Reyon * Reyon;\n    }\n}' }),
    output: 'Sifas: 6.00\nSifas: 3.14',
    check: need(
      R(/class\s+Sek\s*:\s*Fom/, 'Kreye <code>class Sek : Fom</code>.', 'Crée <code>class Sek : Fom</code>.'),
      R(/public\s+double\s+Reyon\s*\{\s*get\s*;\s*set\s*;\s*\}/, 'Ajoute <code>public double Reyon { get; set; }</code>.', 'Ajoute <code>public double Reyon { get; set; }</code>.'),
      R(c => { const i = c.clean.search(/class\s+Sek\b/); return i >= 0 && /public\s+override\s+double\s+Sifas\s*\(\s*\)/.test(c.clean.slice(i)); }, 'erè CS0534: <code>Sek</code> dwe <code>override</code> <code>Sifas()</code>.', 'erreur CS0534 : <code>Sek</code> doit faire <code>override</code> de <code>Sifas()</code>.'),
      R(/Math\.PI\s*\*\s*Reyon\s*\*\s*Reyon|Math\.PI\s*\*\s*Math\.Pow\s*\(\s*Reyon\s*,\s*2\s*\)/, 'Retounen <code>Math.PI * Reyon * Reyon</code>.', 'Renvoie <code>Math.PI * Reyon * Reyon</code>.'),
      R(inMain(/new\s+Sek\b/), 'Teste <code>new Sek { Reyon = 1 }.Dekri();</code> nan Main.', 'Teste <code>new Sek { Reyon = 1 }.Dekri();</code> dans Main.')
    ),
    tips: T(`<li>Metòd <code>abstract</code> pa gen <code>{ }</code> — li fini ak <code>;</code>.</li><li>Yon klas ki gen yon metòd abstract <b>dwe</b> li menm abstract.</li>`, `<li>Une méthode <code>abstract</code> n'a pas de <code>{ }</code> — elle finit par <code>;</code>.</li><li>Une classe avec une méthode abstraite <b>doit</b> être abstraite.</li>`),
    recap: T(`<li><code>abstract</code> = modèl, pa ka <code>new</code>.</li><li>Pitit yo oblije <code>override</code>.</li>`, `<li><code>abstract</code> = modèle, pas de <code>new</code>.</li><li>Les enfants doivent faire <code>override</code>.</li>`)
  },
  {
    id: 'cs-poly',
    title: T('Polimòfis', 'Polymorphisme'),
    theory: T(
      `<p><b>Polimòfis</b> ("plizyè fòm"): ou ka trete objè diferan kòm si yo te <b>menm tip paran an</b>, epi chak youn reyaji <b>a pwòp fason pa l</b>:</p>
       <pre>List&lt;Fom&gt; fom = new List&lt;Fom&gt;
{
    new Rektang { Lajè = 2, Wotè = 3 },
    new Sek { Reyon = 1 },
};

double total = 0;
foreach (Fom f in fom)
{
    total += f.Sifas();   // C# chwazi bon Sifas() pou chak objè!
}</pre>
       <p>Avantaj: si w ajoute yon nouvo fòm (<code>Triyang</code>), bouk la <b>pa bezwen chanje</b>. Se youn nan ide ki pi pwisan nan pwogramasyon.</p>`,
      `<p>Le <b>polymorphisme</b> (« plusieurs formes ») : on peut traiter des objets différents comme s'ils étaient du <b>même type parent</b>, et chacun réagit <b>à sa façon</b> :</p>
       <pre>List&lt;Fom&gt; formes = new List&lt;Fom&gt;
{
    new Rektang { Lajè = 2, Wotè = 3 },
    new Sek { Reyon = 1 },
};

double total = 0;
foreach (Fom f in formes)
{
    total += f.Sifas();   // C# choisit la bonne Sifas() pour chaque objet !
}</pre>
       <p>Avantage : si tu ajoutes une nouvelle forme (<code>Triangle</code>), la boucle <b>ne change pas</b>. C'est l'une des idées les plus puissantes de la programmation.</p>`
    ),
    task: T(
      'Kreye <code>List&lt;Fom&gt; fom</code> ak yon <code>Rektang</code> ak yon <code>Sek</code>. Ak <code>foreach</code>, kalkile <b>total</b> sifas yo epi afiche <code>$"Total: {total:F2}"</code>.',
      'Crée <code>List&lt;Fom&gt; fom</code> avec un <code>Rektang</code> et un <code>Sek</code>. Avec <code>foreach</code>, calcule le <b>total</b> des surfaces et affiche <code>$"Total : {total:F2}"</code>.'
    ),
    hint: T('<code>foreach (Fom f in fom) total += f.Sifas();</code>', '<code>foreach (Fom f in fom) total += f.Sifas();</code>'),
    starter: csProg({ usings: ['System.Collections.Generic'], main: 'double total = 0;\n\n// ✍️', after: 'abstract class Fom\n{\n    public abstract double Sifas();\n}\n\nclass Rektang : Fom\n{\n    public double Lajè { get; set; }\n    public double Wotè { get; set; }\n    public override double Sifas() => Lajè * Wotè;\n}\n\nclass Sek : Fom\n{\n    public double Reyon { get; set; }\n    public override double Sifas() => Math.PI * Reyon * Reyon;\n}' }),
    solution: csProg({ usings: ['System.Collections.Generic'], main: 'double total = 0;\n\nvar fom = new List<Fom>\n{\n    new Rektang { Lajè = 2, Wotè = 3 },\n    new Sek { Reyon = 1 }\n};\n\nforeach (Fom f in fom)\n{\n    total += f.Sifas();\n}\n\nConsole.WriteLine($"Total: {total:F2}");', after: 'abstract class Fom\n{\n    public abstract double Sifas();\n}\n\nclass Rektang : Fom\n{\n    public double Lajè { get; set; }\n    public double Wotè { get; set; }\n    public override double Sifas() => Lajè * Wotè;\n}\n\nclass Sek : Fom\n{\n    public double Reyon { get; set; }\n    public override double Sifas() => Math.PI * Reyon * Reyon;\n}' }),
    output: 'Total: 9.14',
    check: need(
      R(/List\s*<\s*Fom\s*>/, 'Kreye yon <code>List&lt;Fom&gt;</code>.', 'Crée une <code>List&lt;Fom&gt;</code>.'),
      R(inMain(/new\s+Rektang\b/), 'Mete yon <code>new Rektang { … }</code> nan lis la.', 'Mets un <code>new Rektang { … }</code> dans la liste.'),
      R(inMain(/new\s+Sek\b/), 'Mete yon <code>new Sek { … }</code> nan lis la.', 'Mets un <code>new Sek { … }</code> dans la liste.'),
      R(/foreach\s*\(\s*(var|Fom)\s+(\w+)\s+in\s+\w+\s*\)/, 'Pakouri lis la ak <code>foreach (Fom f in fom)</code>.', 'Parcours la liste avec <code>foreach (Fom f in fom)</code>.'),
      R(/total\s*\+=\s*\w+\.Sifas\s*\(\s*\)/, 'Ajoute <code>f.Sifas()</code> nan <code>total</code>.', 'Ajoute <code>f.Sifas()</code> à <code>total</code>.'),
      R(/\{\s*total\s*:\s*F2\s*\}/, 'Afiche <code>{total:F2}</code>.', 'Affiche <code>{total:F2}</code>.')
    ),
    tips: T(`<li>Pou konnen tip reyèl yon objè: <code>if (f is Sek s) { … s.Reyon … }</code>.</li>`, `<li>Pour connaître le type réel d'un objet : <code>if (f is Sek s) { … s.Reyon … }</code>.</li>`),
    recap: T(`<li>Yon varyab tip paran ka kenbe nenpòt pitit.</li><li>Bon metòd la chwazi otomatikman.</li>`, `<li>Une variable du type parent peut contenir n'importe quel enfant.</li><li>La bonne méthode est choisie automatiquement.</li>`)
  },

  /* ---------- Semèn 24: Entèfas ak lòt tip ---------- */
  {
    id: 'cs-interface',
    title: T('Entèfas (interface)', 'Interfaces'),
    theory: T(
      `<p>Yon <b>entèfas</b> se yon <b>kontra</b>: li di <i>kisa</i> yon klas dwe konn fè, san di <i>kijan</i>. Non yo kòmanse ak <code>I</code>:</p>
       <pre>interface IVole
{
    void Vole();       // tout klas ki "IVole" DWE gen metòd sa a
}

class Zwazo : IVole
{
    public void Vole() =&gt; Console.WriteLine("Zwazo a ap bat zèl");
}

class Avyon : IVole
{
    public void Vole() =&gt; Console.WriteLine("Avyon an dekole");
}

IVole v = new Avyon();
v.Vole();</pre>
       <p>Diferans ak eritaj: zwazo ak avyon pa gen <b>okenn</b> lyen fanmi, men tou de <b>konn</b> vole.</p>`,
      `<p>Une <b>interface</b> est un <b>contrat</b> : elle dit <i>ce que</i> une classe doit savoir faire, sans dire <i>comment</i>. Les noms commencent par <code>I</code> :</p>
       <pre>interface IVole
{
    void Vole();       // toute classe "IVole" DOIT avoir cette méthode
}

class Oiseau : IVole
{
    public void Vole() =&gt; Console.WriteLine("L'oiseau bat des ailes");
}

class Avion : IVole
{
    public void Vole() =&gt; Console.WriteLine("L'avion décolle");
}

IVole v = new Avion();
v.Vole();</pre>
       <p>Différence avec l'héritage : l'oiseau et l'avion n'ont <b>aucun</b> lien de famille, mais les deux <b>savent</b> voler.</p>`
    ),
    task: T(
      'Kreye <code>interface IVole</code> ak <code>void Vole();</code>, answit <code>class Zwazo : IVole</code> ak <code>class Avyon : IVole</code>. Nan Main, mete yo nan yon <code>List&lt;IVole&gt;</code> epi rele <code>Vole()</code> sou chak.',
      'Crée <code>interface IVole</code> avec <code>void Vole();</code>, puis <code>class Zwazo : IVole</code> et <code>class Avyon : IVole</code>. Dans Main, mets-les dans une <code>List&lt;IVole&gt;</code> et appelle <code>Vole()</code> sur chacun.'
    ),
    hint: T('Metòd ki aplike entèfas la dwe <code>public</code>: <code>public void Vole() { … }</code>', 'La méthode qui implémente l\'interface doit être <code>public</code> : <code>public void Vole() { … }</code>'),
    starter: csProg({ usings: ['System.Collections.Generic'], after: '// ✍️' }),
    solution: csProg({ usings: ['System.Collections.Generic'], main: 'var bagay = new List<IVole> { new Zwazo(), new Avyon() };\n\nforeach (IVole v in bagay)\n{\n    v.Vole();\n}', after: 'interface IVole\n{\n    void Vole();\n}\n\nclass Zwazo : IVole\n{\n    public void Vole()\n    {\n        Console.WriteLine("Zwazo a ap bat zèl");\n    }\n}\n\nclass Avyon : IVole\n{\n    public void Vole()\n    {\n        Console.WriteLine("Avyon an dekole");\n    }\n}' }),
    output: ({ code }) => [...code.matchAll(/void\s+Vole\s*\(\s*\)\s*\{?\s*(?:=>\s*)?Console\.WriteLine\s*\(\s*"([^"]*)"/g)].map(m => m[1]).join('\n'),
    check: need(
      R(/interface\s+IVole\s*\{\s*void\s+Vole\s*\(\s*\)\s*;\s*\}/, 'Kreye <code>interface IVole { void Vole(); }</code>.', 'Crée <code>interface IVole { void Vole(); }</code>.'),
      R(/class\s+Zwazo\s*:\s*IVole/, 'Kreye <code>class Zwazo : IVole</code>.', 'Crée <code>class Zwazo : IVole</code>.'),
      R(/class\s+Avyon\s*:\s*IVole/, 'Kreye <code>class Avyon : IVole</code>.', 'Crée <code>class Avyon : IVole</code>.'),
      R(count(/public\s+void\s+Vole\s*\(\s*\)/, 2), 'erè CS0535: chak klas dwe gen <code>public void Vole()</code>.', 'erreur CS0535 : chaque classe doit avoir <code>public void Vole()</code>.'),
      R(/List\s*<\s*IVole\s*>/, 'Mete yo nan yon <code>List&lt;IVole&gt;</code>.', 'Mets-les dans une <code>List&lt;IVole&gt;</code>.'),
      R(/\.Vole\s*\(\s*\)\s*;/, 'Rele <code>Vole()</code> sou chak.', 'Appelle <code>Vole()</code> sur chacun.')
    ),
    tips: T(`<li>Pa mete <code>public</code> nan definisyon entèfas la — tout manm yo deja piblik.</li><li>Yon klas ka aplike <b>plizyè</b> entèfas, men li eritye <b>yon sèl</b> klas.</li>`, `<li>Pas de <code>public</code> dans la définition de l'interface — tous ses membres sont publics.</li><li>Une classe peut implémenter <b>plusieurs</b> interfaces, mais n'hérite que d'<b>une</b> classe.</li>`),
    recap: T(`<li><code>interface IX { void M(); }</code> = kontra.</li><li><code>class A : IX</code></li>`, `<li><code>interface IX { void M(); }</code> = contrat.</li><li><code>class A : IX</code></li>`)
  },
  {
    id: 'cs-multiiface',
    title: T('Plizyè entèfas ak is', 'Plusieurs interfaces et is'),
    theory: T(
      `<pre>interface INaje { void Naje(); }
interface IVole { void Vole(); }

class Kanna : IVole, INaje        // plizyè entèfas, separe ak vigil
{
    public void Vole() =&gt; Console.WriteLine("Kanna ap vole");
    public void Naje() =&gt; Console.WriteLine("Kanna ap naje");
}</pre>
       <p>Operatè <code>is</code> tcheke si yon objè aplike yon entèfas (oswa se yon tip), epi li ka <b>konvèti</b> l an menm tan:</p>
       <pre>object o = new Kanna();
if (o is INaje najè)
{
    najè.Naje();     // najè se yon INaje kounye a
}</pre>`,
      `<pre>interface INage { void Nager(); }
interface IVole { void Voler(); }

class Canard : IVole, INage        // plusieurs interfaces, séparées par des virgules
{
    public void Voler() =&gt; Console.WriteLine("Le canard vole");
    public void Nager() =&gt; Console.WriteLine("Le canard nage");
}</pre>
       <p>L'opérateur <code>is</code> teste si un objet implémente une interface (ou est d'un type), et peut le <b>convertir</b> en même temps :</p>
       <pre>object o = new Canard();
if (o is INage nageur)
{
    nageur.Nager();     // nageur est maintenant un INage
}</pre>`
    ),
    task: T(
      'Kreye <code>class Kanna : IVole, INaje</code> ki aplike tou de metòd yo. Nan Main, mete yon kanna nan <code>object o</code>, epi <code>if (o is INaje n)</code> rele <code>n.Naje()</code>.',
      'Crée <code>class Kanna : IVole, INaje</code> qui implémente les deux méthodes. Dans Main, mets un canard dans <code>object o</code>, puis <code>if (o is INaje n)</code> appelle <code>n.Naje()</code>.'
    ),
    hint: T('<code>if (o is INaje n) { n.Naje(); }</code>', '<code>if (o is INaje n) { n.Naje(); }</code>'),
    starter: csProg({ main: '// ✍️', after: 'interface IVole { void Vole(); }\ninterface INaje { void Naje(); }\n\n// ✍️' }),
    solution: csProg({ main: 'object o = new Kanna();\n\nif (o is INaje n)\n{\n    n.Naje();\n}', after: 'interface IVole { void Vole(); }\ninterface INaje { void Naje(); }\n\nclass Kanna : IVole, INaje\n{\n    public void Vole()\n    {\n        Console.WriteLine("Kanna ap vole");\n    }\n\n    public void Naje()\n    {\n        Console.WriteLine("Kanna ap naje");\n    }\n}' }),
    output: ({ code }) => (code.match(/void\s+Naje\s*\(\s*\)\s*\{?\s*(?:=>\s*)?Console\.WriteLine\s*\(\s*"([^"]*)"/) || [])[1] || '',
    check: need(
      R(/class\s+Kanna\s*:\s*(IVole\s*,\s*INaje|INaje\s*,\s*IVole)/, 'Ekri <code>class Kanna : IVole, INaje</code>.', 'Écris <code>class Kanna : IVole, INaje</code>.'),
      R(/public\s+void\s+Vole\s*\(\s*\)/, 'Aplike <code>public void Vole()</code>.', 'Implémente <code>public void Vole()</code>.'),
      R(/public\s+void\s+Naje\s*\(\s*\)/, 'Aplike <code>public void Naje()</code>.', 'Implémente <code>public void Naje()</code>.'),
      R(/object\s+o\s*=\s*new\s+Kanna\s*\(\s*\)\s*;/, 'Ekri <code>object o = new Kanna();</code>', 'Écris <code>object o = new Kanna();</code>'),
      R(/if\s*\(\s*o\s+is\s+INaje\s+(\w+)\s*\)\s*\{?\s*\1\.Naje\s*\(\s*\)/, 'Ekri <code>if (o is INaje n) { n.Naje(); }</code>', 'Écris <code>if (o is INaje n) { n.Naje(); }</code>')
    ),
    tips: T(`<li>Si klas la gen yon paran <b>e</b> entèfas, paran an vini an premye: <code>class Kanna : Animal, IVole</code>.</li>`, `<li>Si la classe a un parent <b>et</b> des interfaces, le parent vient en premier : <code>class Canard : Animal, IVole</code>.</li>`),
    recap: T(`<li><code>class A : I1, I2</code></li><li><code>if (x is T t)</code> = tcheke + konvèti.</li>`, `<li><code>class A : I1, I2</code></li><li><code>if (x is T t)</code> = tester + convertir.</li>`)
  },
  {
    id: 'cs-enum',
    title: T('enum', 'enum'),
    theory: T(
      `<p>Yon <code>enum</code> se yon lis <b>valè nonmen</b> — pi klè ak pi an sekirite pase nonm majik oswa tèks:</p>
       <pre>enum Nivo
{
    Fasil,      // 0
    Mwayen,     // 1
    Difisil     // 2
}

Nivo n = Nivo.Mwayen;

if (n == Nivo.Difisil)
    Console.WriteLine("Bòn chans!");

Console.WriteLine(n);        // Mwayen
Console.WriteLine((int)n);   // 1</pre>
       <p>Olye de <code>string nivo = "dificil"</code> (fòt frap!), konpilatè a <b>verifye</b> <code>Nivo.Difisil</code> pou ou.</p>`,
      `<p>Un <code>enum</code> est une liste de <b>valeurs nommées</b> — plus clair et plus sûr que des nombres magiques ou des textes :</p>
       <pre>enum Niveau
{
    Facile,      // 0
    Moyen,       // 1
    Difficile    // 2
}

Niveau n = Niveau.Moyen;

if (n == Niveau.Difficile)
    Console.WriteLine("Bonne chance !");

Console.WriteLine(n);        // Moyen
Console.WriteLine((int)n);   // 1</pre>
       <p>Au lieu de <code>string niveau = "dificile"</code> (faute de frappe !), le compilateur <b>vérifie</b> <code>Niveau.Difficile</code> pour toi.</p>`
    ),
    task: T(
      'Kreye <code>enum Nivo { Fasil, Mwayen, Difisil }</code>. Nan Main, <code>Nivo n = Nivo.Difisil;</code>, epi ak yon <code>switch</code> afiche kantite vi: Fasil → <b>5</b>, Mwayen → <b>3</b>, Difisil → <b>1</b>.',
      'Crée <code>enum Nivo { Fasil, Mwayen, Difisil }</code>. Dans Main, <code>Nivo n = Nivo.Difisil;</code>, puis avec un <code>switch</code> affiche le nombre de vies : Fasil → <b>5</b>, Mwayen → <b>3</b>, Difisil → <b>1</b>.'
    ),
    hint: T('<code>case Nivo.Fasil: Console.WriteLine(5); break;</code>', '<code>case Nivo.Fasil: Console.WriteLine(5); break;</code>'),
    starter: csProg({ after: '// ✍️ enum' }),
    solution: csProg({ main: 'Nivo n = Nivo.Difisil;\n\nswitch (n)\n{\n    case Nivo.Fasil:\n        Console.WriteLine(5);\n        break;\n    case Nivo.Mwayen:\n        Console.WriteLine(3);\n        break;\n    case Nivo.Difisil:\n        Console.WriteLine(1);\n        break;\n}', after: 'enum Nivo\n{\n    Fasil,\n    Mwayen,\n    Difisil\n}' }),
    output: '1',
    check: need(
      R(/enum\s+Nivo\s*\{\s*Fasil\s*,\s*Mwayen\s*,\s*Difisil\s*,?\s*\}/, 'Kreye <code>enum Nivo { Fasil, Mwayen, Difisil }</code>.', 'Crée <code>enum Nivo { Fasil, Mwayen, Difisil }</code>.'),
      R(/Nivo\s+n\s*=\s*Nivo\.Difisil\s*;/, 'Ekri <code>Nivo n = Nivo.Difisil;</code>', 'Écris <code>Nivo n = Nivo.Difisil;</code>'),
      R(/switch\s*\(\s*n\s*\)/, 'Itilize <code>switch (n)</code>.', 'Utilise <code>switch (n)</code>.'),
      R(c => ['Fasil', 'Mwayen', 'Difisil'].every(v => new RegExp('case\\s+Nivo\\.' + v + '\\s*:').test(c.clean)), 'Ajoute yon <code>case Nivo.X:</code> pou chak nivo.', 'Ajoute un <code>case Nivo.X:</code> pour chaque niveau.')
    ),
    tips: T(`<li>Valè enum yo separe ak <b>vigil</b>, pa <code>;</code>.</li><li>Defini enum nan <b>deyò</b> metòd yo.</li>`, `<li>Les valeurs d'un enum sont séparées par des <b>virgules</b>, pas des <code>;</code>.</li><li>Définis l'enum <b>en dehors</b> des méthodes.</li>`),
    recap: T(`<li><code>enum E { A, B, C }</code> → <code>E.A</code>.</li><li><code>(int)E.B</code> = 1.</li>`, `<li><code>enum E { A, B, C }</code> → <code>E.A</code>.</li><li><code>(int)E.B</code> = 1.</li>`)
  },
  {
    id: 'cs-struct',
    title: T('struct: tip valè', 'struct : types valeur'),
    theory: T(
      `<p>Gen 2 kategori tip nan C#:</p>
       <ul><li><b>Tip referans</b> (<code>class</code>, <code>string</code>, <code>List</code>): varyab la gen yon <b>adrès</b>. 2 varyab ka pwente sou <b>menm</b> objè.</li>
       <li><b>Tip valè</b> (<code>int</code>, <code>double</code>, <code>bool</code>, <code>struct</code>): varyab la gen <b>valè a li menm</b>. Lè w kopye, ou jwenn yon <b>kopi endepandan</b>.</li></ul>
       <pre>struct Pwen
{
    public int X;
    public int Y;
}

Pwen a = new Pwen { X = 1, Y = 2 };
Pwen b = a;      // KOPI
b.X = 10;
Console.WriteLine(a.X);   // 1  — a pa chanje!</pre>
       <p>Si <code>Pwen</code> te yon <code>class</code>, <code>a.X</code> ta vin 10 tou. Itilize <code>struct</code> pou ti done senp (kowòdone, koulè).</p>`,
      `<p>Il existe 2 catégories de types en C# :</p>
       <ul><li><b>Types référence</b> (<code>class</code>, <code>string</code>, <code>List</code>) : la variable contient une <b>adresse</b>. 2 variables peuvent pointer vers le <b>même</b> objet.</li>
       <li><b>Types valeur</b> (<code>int</code>, <code>double</code>, <code>bool</code>, <code>struct</code>) : la variable contient <b>la valeur elle-même</b>. Une copie est <b>indépendante</b>.</li></ul>
       <pre>struct Point
{
    public int X;
    public int Y;
}

Point a = new Point { X = 1, Y = 2 };
Point b = a;      // COPIE
b.X = 10;
Console.WriteLine(a.X);   // 1  — a n'a pas changé !</pre>
       <p>Si <code>Point</code> était une <code>class</code>, <code>a.X</code> vaudrait aussi 10. Utilise <code>struct</code> pour de petites données simples (coordonnées, couleurs).</p>`
    ),
    task: T(
      'Kreye <code>struct Pwen</code> ak <code>public int X;</code> ak <code>public int Y;</code>. Nan Main, kreye <code>a</code>, kopye l nan <code>b</code>, chanje <code>b.X = 10</code>, epi afiche <code>a.X</code> ak <code>b.X</code>.',
      'Crée <code>struct Pwen</code> avec <code>public int X;</code> et <code>public int Y;</code>. Dans Main, crée <code>a</code>, copie-le dans <code>b</code>, change <code>b.X = 10</code>, puis affiche <code>a.X</code> et <code>b.X</code>.'
    ),
    hint: T('<code>Pwen a = new Pwen { X = 1, Y = 2 }; Pwen b = a; b.X = 10;</code>', '<code>Pwen a = new Pwen { X = 1, Y = 2 }; Pwen b = a; b.X = 10;</code>'),
    starter: csProg({ after: '// ✍️ struct' }),
    solution: csProg({ main: 'Pwen a = new Pwen { X = 1, Y = 2 };\nPwen b = a;\nb.X = 10;\n\nConsole.WriteLine(a.X);\nConsole.WriteLine(b.X);', after: 'struct Pwen\n{\n    public int X;\n    public int Y;\n}' }),
    output: '1\n10',
    check: need(
      R(/struct\s+Pwen\s*\{/, 'Kreye <code>struct Pwen</code>.', 'Crée <code>struct Pwen</code>.'),
      R(/public\s+int\s+X\s*;/, 'Ajoute <code>public int X;</code>', 'Ajoute <code>public int X;</code>'),
      R(/Pwen\s+b\s*=\s*a\s*;|var\s+b\s*=\s*a\s*;/, 'Kopye: <code>Pwen b = a;</code>', 'Copie : <code>Pwen b = a;</code>'),
      R(/b\.X\s*=\s*10\s*;/, 'Chanje <code>b.X = 10;</code>', 'Change <code>b.X = 10;</code>'),
      R(/Console\.WriteLine\s*\(\s*a\.X\s*\)/, 'Afiche <code>a.X</code>.', 'Affiche <code>a.X</code>.')
    ),
    tips: T(`<li>Pa fè gwo struct ak anpil done — kopi yo vin chè. Pou sa, itilize <code>class</code>.</li>`, `<li>Évite les gros struct avec beaucoup de données — les copies coûtent cher. Préfère alors une <code>class</code>.</li>`),
    recap: T(`<li><code>struct</code> = tip valè (kopi).</li><li><code>class</code> = tip referans (pataje).</li>`, `<li><code>struct</code> = type valeur (copie).</li><li><code>class</code> = type référence (partagé).</li>`)
  },
  {
    id: 'cs-record',
    title: T('record', 'record'),
    theory: T(
      `<p>Yon <code>record</code> (C# 9+) se yon fason <b>trè kout</b> pou kreye yon tip ki jis kenbe done:</p>
       <pre>record Moun(string Non, int Laj);    // yon sèl liy!

var a = new Moun("Ana", 15);
Console.WriteLine(a);            // Moun { Non = Ana, Laj = 15 }

var b = a with { Laj = 16 };     // kopi ak yon chanjman
Console.WriteLine(a == new Moun("Ana", 15));   // True — konpare VALÈ yo</pre>
       <p>Avantaj record yo:</p>
       <ul><li><code>ToString()</code> ki itil otomatikman.</li>
       <li>Egalite pa <b>valè</b> (2 record ak menm done yo egal).</li>
       <li><b>Immutable</b> pa defo: pou "chanje", ou fè yon kopi ak <code>with</code>.</li></ul>`,
      `<p>Un <code>record</code> (C# 9+) est une façon <b>très courte</b> de créer un type qui contient des données :</p>
       <pre>record Personne(string Nom, int Age);    // une seule ligne !

var a = new Personne("Ana", 15);
Console.WriteLine(a);            // Personne { Nom = Ana, Age = 15 }

var b = a with { Age = 16 };     // copie avec une modification
Console.WriteLine(a == new Personne("Ana", 15));   // True — compare les VALEURS</pre>
       <p>Avantages des records :</p>
       <ul><li>Un <code>ToString()</code> utile automatiquement.</li>
       <li>Égalité par <b>valeur</b> (2 records avec les mêmes données sont égaux).</li>
       <li><b>Immuables</b> par défaut : pour « modifier », on fait une copie avec <code>with</code>.</li></ul>`
    ),
    task: T(
      'Kreye <code>record Moun(string Non, int Laj);</code>. Nan Main, kreye <code>a</code>, afiche l, kreye <code>b = a with { Laj = … }</code> epi afiche <code>b</code>.',
      'Crée <code>record Moun(string Non, int Laj);</code>. Dans Main, crée <code>a</code>, affiche-le, crée <code>b = a with { Laj = … }</code> puis affiche <code>b</code>.'
    ),
    hint: T('Record la ekri anba <code>class Program</code>: <code>record Moun(string Non, int Laj);</code>', 'Le record s\'écrit sous <code>class Program</code> : <code>record Moun(string Non, int Laj);</code>'),
    starter: csProg({ after: '// ✍️ record' }),
    solution: csProg({ main: 'var a = new Moun("Ana", 15);\nConsole.WriteLine(a);\n\nvar b = a with { Laj = 16 };\nConsole.WriteLine(b);', after: 'record Moun(string Non, int Laj);' }),
    output: ({ code }) => {
      const m = code.match(/new\s+Moun\s*\(\s*"([^"]*)"\s*,\s*(\d+)\s*\)/) || [];
      const w = (code.match(/with\s*\{\s*Laj\s*=\s*(\d+)/) || [])[1];
      return `Moun { Non = ${m[1]}, Laj = ${m[2]} }\nMoun { Non = ${m[1]}, Laj = ${w} }`;
    },
    check: need(
      R(/record\s+Moun\s*\(\s*string\s+Non\s*,\s*int\s+Laj\s*\)\s*;/, 'Kreye <code>record Moun(string Non, int Laj);</code>', 'Crée <code>record Moun(string Non, int Laj);</code>'),
      R(inMain(/new\s+Moun\s*\(\s*"[^"]+"\s*,\s*\d+\s*\)/), 'Kreye <code>new Moun("Ana", 15)</code>.', 'Crée <code>new Moun("Ana", 15)</code>.'),
      R(/\w+\s+with\s*\{\s*Laj\s*=\s*\d+\s*\}/, 'Kreye yon kopi ak <code>a with { Laj = 16 }</code>.', 'Crée une copie avec <code>a with { Laj = 16 }</code>.'),
      R(count(/Console\.WriteLine\s*\(\s*\w+\s*\)/, 2), 'Afiche <code>a</code> ak <code>b</code>.', 'Affiche <code>a</code> et <code>b</code>.')
    ),
    tips: T(`<li>Pwopriyete record pozisyonèl yo pa ka chanje: <code>a.Laj = 16;</code> → erè. Itilize <code>with</code>.</li>`, `<li>Les propriétés d'un record positionnel ne sont pas modifiables : <code>a.Age = 16;</code> → erreur. Utilise <code>with</code>.</li>`),
    recap: T(`<li><code>record R(T A, T B);</code></li><li><code>with { … }</code> = kopi modifye.</li><li>🎉 Fen mwa 6: ou konnen POO!</li>`, `<li><code>record R(T A, T B);</code></li><li><code>with { … }</code> = copie modifiée.</li><li>🎉 Fin du mois 6 : tu maîtrises la POO !</li>`)
  }
);

addDetails({
  'cs-6': {
    extra: T(
      `<p>4 pilye <b>pwogramasyon oryante objè</b> (POO) — n ap etidye yo mwa sa a:</p>
       <ol><li><b>Ankapsilasyon</b> — kache detay anndan yo, montre sèlman sa ki nesesè.</li>
       <li><b>Eritaj</b> — yon klas eritye de yon lòt.</li>
       <li><b>Polimòfis</b> — menm aksyon, konpòtman diferan.</li>
       <li><b>Abstraksyon</b> — modèl ki fikse <i>kisa</i>, pa <i>kijan</i>.</li></ol>`,
      `<p>Les 4 piliers de la <b>programmation orientée objet</b> (POO) — on les étudie ce mois-ci :</p>
       <ol><li><b>Encapsulation</b> — cacher les détails internes, n'exposer que le nécessaire.</li>
       <li><b>Héritage</b> — une classe hérite d'une autre.</li>
       <li><b>Polymorphisme</b> — même action, comportements différents.</li>
       <li><b>Abstraction</b> — des modèles qui fixent le <i>quoi</i>, pas le <i>comment</i>.</li></ol>`
    ),
    tips: T(`<li>Non klas yo an PascalCase, sengilye: <code>Chen</code>, pa <code>chens</code>.</li><li>Yon klas = yon fichye <code>.cs</code> nan gwo pwojè.</li>`, `<li>Les noms de classes sont en PascalCase, au singulier : <code>Chien</code>, pas <code>chiens</code>.</li><li>Une classe = un fichier <code>.cs</code> dans les gros projets.</li>`),
    recap: T(`<li>Klas = plan; objè = bagay ou bati ak <code>new</code>.</li><li>Chan = done; metòd = aksyon.</li>`, `<li>Classe = plan ; objet = instance créée avec <code>new</code>.</li><li>Champ = donnée ; méthode = action.</li>`)
  },
  'cs-9': {
    tips: T(`<li>Konstriktè a pa gen tip retou, <b>menm</b> pa <code>void</code>.</li><li>Ou ka gen plizyè konstriktè (overloading).</li>`, `<li>Le constructeur n'a pas de type de retour, <b>même pas</b> <code>void</code>.</li><li>On peut avoir plusieurs constructeurs (surcharge).</li>`),
    recap: T(`<li><code>public NonKlas(params) { … }</code></li><li>Egzekite otomatikman ak <code>new</code>.</li>`, `<li><code>public NomClasse(params) { … }</code></li><li>Exécuté automatiquement avec <code>new</code>.</li>`)
  }
});
