/* ======================= MWA 1 — HTML (semèn 1-2) ======================= */
MODULES.push({
  id: 'html',
  icon: '🏝️',
  color: '#ff8a3d',
  lang: 'html',
  file: 'index.html',
  name: T('Zile HTML', 'Île HTML'),
  desc: T('Bati estrikti yon paj web', "Construire la structure d'une page web"),
  duration: T('Mwa 1 · 2 semèn', 'Mois 1 · 2 semaines'),
  weeks: [
    T('Premye paj ou: tit, tèks, lyen, imaj', 'Ta première page : titres, texte, liens, images'),
    T('Paj ki pi rich: tablo, fòmilè, estrikti', 'Des pages plus riches : tableaux, formulaires, structure')
  ],
  lessons: [
{
      id: 'html-1',
      title: T('Premye tit ou', 'Ton premier titre'),
      theory: T(
        `<p><b>HTML</b> (HyperText Markup Language) se lang ki bay <b>estrikti</b> yon paj web — tankou zo yon kò.</p>
         <p>Nou ekri HTML ak <b>baliz</b> (tag). Yon baliz louvri konsa <code>&lt;h1&gt;</code> epi li fèmen konsa <code>&lt;/h1&gt;</code> (ak yon <code>/</code>). Sa ki ant de baliz yo se <b>kontni</b> an.</p>
         <pre>&lt;h1&gt;Mwen se yon tit&lt;/h1&gt;</pre>
         <p><code>h1</code> se pi gwo tit la. Gen <code>h2</code>, <code>h3</code>… jiska <code>h6</code>, chak fwa pi piti.</p>`,
        `<p>Le <b>HTML</b> (HyperText Markup Language) est le langage qui donne la <b>structure</b> d'une page web — comme le squelette d'un corps.</p>
         <p>On écrit le HTML avec des <b>balises</b> (tags). Une balise s'ouvre ainsi <code>&lt;h1&gt;</code> et se ferme ainsi <code>&lt;/h1&gt;</code> (avec un <code>/</code>). Ce qui est entre les deux, c'est le <b>contenu</b>.</p>
         <pre>&lt;h1&gt;Je suis un titre&lt;/h1&gt;</pre>
         <p><code>h1</code> est le plus grand titre. Il existe <code>h2</code>, <code>h3</code>… jusqu'à <code>h6</code>, de plus en plus petits.</p>`
      ),
      task: T(
        'Ekri yon tit <code>h1</code> ki di <b>Bonjou Mond!</b>',
        'Écris un titre <code>h1</code> qui dit <b>Bonjour le monde !</b>'
      ),
      hint: T(
        'Louvri ak <code>&lt;h1&gt;</code>, ekri tèks la, epi fèmen ak <code>&lt;/h1&gt;</code>.',
        'Ouvre avec <code>&lt;h1&gt;</code>, écris le texte, puis ferme avec <code>&lt;/h1&gt;</code>.'
      ),
      starter: '<!-- ✍️ -->\n',
      solution: '<h1>Bonjou Mond!</h1>\n',
      check: ({ doc, code }) => {
        const h = doc.querySelector('h1');
        if (!h) return T('Mwen pa wè okenn baliz <code>h1</code>.', 'Je ne vois aucune balise <code>h1</code>.');
        if (!txt(h)) return T('Tit la vid. Mete tèks ladan l.', 'Le titre est vide. Mets du texte dedans.');
        if (!/<\/h1\s*>/i.test(code)) return T('Pa bliye <b>fèmen</b> baliz la ak <code>&lt;/h1&gt;</code>.', "N'oublie pas de <b>fermer</b> la balise avec <code>&lt;/h1&gt;</code>.");
        return true;
      }
    },
{
      id: 'html-2',
      title: T('Paragraf', 'Les paragraphes'),
      theory: T(
        `<p>Baliz <code>&lt;p&gt;</code> se pou <b>paragraf</b>: blòk tèks nòmal.</p>
         <pre>&lt;h1&gt;Ayiti&lt;/h1&gt;
&lt;p&gt;Ayiti se yon bèl peyi nan Karayib la.&lt;/p&gt;</pre>
         <p>Anndan yon paragraf, ou ka mete <code>&lt;b&gt;</code> pou tèks <b>gra</b> ak <code>&lt;i&gt;</code> pou tèks <i>italik</i>. Sa rele baliz <b>anbrike</b> (youn anndan lòt).</p>`,
        `<p>La balise <code>&lt;p&gt;</code> sert aux <b>paragraphes</b> : des blocs de texte normal.</p>
         <pre>&lt;h1&gt;Haïti&lt;/h1&gt;
&lt;p&gt;Haïti est un beau pays de la Caraïbe.&lt;/p&gt;</pre>
         <p>Dans un paragraphe, tu peux utiliser <code>&lt;b&gt;</code> pour le texte en <b>gras</b> et <code>&lt;i&gt;</code> pour l'<i>italique</i>. On dit que les balises sont <b>imbriquées</b> (l'une dans l'autre).</p>`
      ),
      task: T(
        'Anba tit la, ajoute yon paragraf <code>p</code> ki gen omwen <b>5 mo</b>, ak yon mo an <b>gra</b> (<code>&lt;b&gt;</code>) ladan l.',
        'Sous le titre, ajoute un paragraphe <code>p</code> d\'au moins <b>5 mots</b>, avec un mot en <b>gras</b> (<code>&lt;b&gt;</code>) dedans.'
      ),
      hint: T(
        'Egzanp: <code>&lt;p&gt;Mwen ap aprann &lt;b&gt;HTML&lt;/b&gt; jodi a.&lt;/p&gt;</code>',
        'Exemple : <code>&lt;p&gt;J\'apprends le &lt;b&gt;HTML&lt;/b&gt; aujourd\'hui.&lt;/p&gt;</code>'
      ),
      starter: '<h1>Bonjou Mond!</h1>\n',
      solution: '<h1>Bonjou Mond!</h1>\n<p>Mwen ap aprann <b>HTML</b> jodi a.</p>\n',
      check: ({ doc }) => {
        const p = doc.querySelector('p');
        if (!p) return T('Mwen pa wè okenn paragraf <code>p</code>.', 'Je ne vois aucun paragraphe <code>p</code>.');
        if (words(txt(p)) < 5) return T('Paragraf la dwe gen omwen 5 mo.', 'Le paragraphe doit contenir au moins 5 mots.');
        if (!p.querySelector('b, strong')) return T('Mete yon mo an gra ak <code>&lt;b&gt;</code> <b>anndan</b> paragraf la.', 'Mets un mot en gras avec <code>&lt;b&gt;</code> <b>dans</b> le paragraphe.');
        return true;
      }
    },
{
      id: 'html-3',
      title: T('Lyen', 'Les liens'),
      theory: T(
        `<p>Yon <b>lyen</b> pèmèt ou ale sou yon lòt paj. Nou itilize baliz <code>&lt;a&gt;</code>:</p>
         <pre>&lt;a href="https://www.google.com"&gt;Ale sou Google&lt;/a&gt;</pre>
         <p><code>href</code> se yon <b>atribi</b>. Yon atribi bay plis enfòmasyon sou yon baliz. Li ekri anndan baliz ouvèti a, konsa: <code>non="valè"</code>.</p>
         <p>Tèks ki ant <code>&lt;a&gt;</code> ak <code>&lt;/a&gt;</code> se sa moun wè epi klike.</p>`,
        `<p>Un <b>lien</b> permet d'aller vers une autre page. On utilise la balise <code>&lt;a&gt;</code> :</p>
         <pre>&lt;a href="https://www.google.com"&gt;Aller sur Google&lt;/a&gt;</pre>
         <p><code>href</code> est un <b>attribut</b>. Un attribut donne plus d'informations sur une balise. Il s'écrit dans la balise ouvrante, ainsi : <code>nom="valeur"</code>.</p>
         <p>Le texte entre <code>&lt;a&gt;</code> et <code>&lt;/a&gt;</code> est ce que l'on voit et sur quoi on clique.</p>`
      ),
      task: T(
        'Kreye yon lyen ki mennen sou <code>https://www.wikipedia.org</code> ak tèks <b>Wikipedia</b>.',
        'Crée un lien vers <code>https://www.wikipedia.org</code> avec le texte <b>Wikipédia</b>.'
      ),
      hint: T(
        'Fòm nan se: <code>&lt;a href="ADRÈS"&gt;TÈKS&lt;/a&gt;</code>',
        'La forme est : <code>&lt;a href="ADRESSE"&gt;TEXTE&lt;/a&gt;</code>'
      ),
      starter: '<h1>Lyen mwen yo</h1>\n',
      solution: '<h1>Lyen mwen yo</h1>\n<a href="https://www.wikipedia.org">Wikipedia</a>\n',
      check: ({ doc }) => {
        const a = doc.querySelector('a');
        if (!a) return T('Mwen pa wè okenn baliz <code>a</code>.', 'Je ne vois aucune balise <code>a</code>.');
        const href = a.getAttribute('href') || '';
        if (!href) return T('Lyen an bezwen yon atribi <code>href</code>.', 'Le lien a besoin d\'un attribut <code>href</code>.');
        if (!/wikipedia\.org/i.test(href)) return T('<code>href</code> la dwe mennen sou wikipedia.org.', 'Le <code>href</code> doit mener vers wikipedia.org.');
        if (!txt(a)) return T('Mete yon tèks ant <code>&lt;a&gt;</code> ak <code>&lt;/a&gt;</code>.', 'Mets un texte entre <code>&lt;a&gt;</code> et <code>&lt;/a&gt;</code>.');
        return true;
      }
    },
{
      id: 'html-4',
      title: T('Imaj', 'Les images'),
      theory: T(
        `<p>Baliz <code>&lt;img&gt;</code> montre yon imaj. Li espesyal: li <b>pa gen baliz fèmen</b>.</p>
         <pre>&lt;img src="foto.jpg" alt="Yon plaj an Ayiti"&gt;</pre>
         <ul><li><code>src</code> (source): ki kote imaj la ye.</li>
         <li><code>alt</code>: yon deskripsyon pou moun ki pa ka wè imaj la (aksesibilite) — toujou mete l!</li></ul>`,
        `<p>La balise <code>&lt;img&gt;</code> affiche une image. Elle est spéciale : elle <b>n'a pas de balise fermante</b>.</p>
         <pre>&lt;img src="photo.jpg" alt="Une plage en Haïti"&gt;</pre>
         <ul><li><code>src</code> (source) : où se trouve l'image.</li>
         <li><code>alt</code> : une description pour les personnes qui ne voient pas l'image (accessibilité) — mets-le toujours !</li></ul>`
      ),
      task: T(
        'Ajoute yon imaj ak <code>src="https://picsum.photos/300/200"</code> epi yon <code>alt</code> ki dekri l.',
        'Ajoute une image avec <code>src="https://picsum.photos/300/200"</code> et un <code>alt</code> qui la décrit.'
      ),
      hint: T(
        '<code>&lt;img src="https://picsum.photos/300/200" alt="Yon bèl foto"&gt;</code>',
        '<code>&lt;img src="https://picsum.photos/300/200" alt="Une belle photo"&gt;</code>'
      ),
      starter: '<h1>Galri foto</h1>\n',
      solution: '<h1>Galri foto</h1>\n<img src="https://picsum.photos/300/200" alt="Yon bèl foto">\n',
      check: ({ doc }) => {
        const img = doc.querySelector('img');
        if (!img) return T('Mwen pa wè okenn baliz <code>img</code>.', 'Je ne vois aucune balise <code>img</code>.');
        if (!img.getAttribute('src')) return T('Imaj la bezwen yon atribi <code>src</code>.', 'L\'image a besoin d\'un attribut <code>src</code>.');
        if (!(img.getAttribute('alt') || '').trim()) return T('Pa bliye atribi <code>alt</code> la ak yon deskripsyon.', 'N\'oublie pas l\'attribut <code>alt</code> avec une description.');
        return true;
      }
    },
{
      id: 'html-5',
      title: T('Lis', 'Les listes'),
      theory: T(
        `<p>Gen 2 kalite lis:</p>
         <ul><li><code>&lt;ul&gt;</code> — lis ak pwen (<i>unordered</i>)</li>
         <li><code>&lt;ol&gt;</code> — lis ak nimewo (<i>ordered</i>)</li></ul>
         <p>Chak eleman nan lis la se yon <code>&lt;li&gt;</code>:</p>
         <pre>&lt;ul&gt;
  &lt;li&gt;Mango&lt;/li&gt;
  &lt;li&gt;Kowosòl&lt;/li&gt;
&lt;/ul&gt;</pre>
         <p>Remake <b>endantasyon</b> an (espas devan <code>li</code>): li fè kòd la pi fasil pou li.</p>`,
        `<p>Il existe 2 types de listes :</p>
         <ul><li><code>&lt;ul&gt;</code> — liste à puces (<i>unordered</i>)</li>
         <li><code>&lt;ol&gt;</code> — liste numérotée (<i>ordered</i>)</li></ul>
         <p>Chaque élément de la liste est un <code>&lt;li&gt;</code> :</p>
         <pre>&lt;ul&gt;
  &lt;li&gt;Mangue&lt;/li&gt;
  &lt;li&gt;Corossol&lt;/li&gt;
&lt;/ul&gt;</pre>
         <p>Remarque l'<b>indentation</b> (les espaces devant <code>li</code>) : elle rend le code plus lisible.</p>`
      ),
      task: T(
        'Kreye yon lis <code>ul</code> ak omwen <b>3</b> manje ayisyen ou renmen (diri, pwa, bannann…).',
        'Crée une liste <code>ul</code> avec au moins <b>3</b> plats haïtiens que tu aimes (riz, pois, banane…).'
      ),
      hint: T(
        'Louvri <code>&lt;ul&gt;</code>, mete 3 <code>&lt;li&gt;…&lt;/li&gt;</code>, epi fèmen <code>&lt;/ul&gt;</code>.',
        'Ouvre <code>&lt;ul&gt;</code>, mets 3 <code>&lt;li&gt;…&lt;/li&gt;</code>, puis ferme <code>&lt;/ul&gt;</code>.'
      ),
      starter: '<h1>Manje mwen renmen</h1>\n',
      solution: '<h1>Manje mwen renmen</h1>\n<ul>\n  <li>Diri ak pwa</li>\n  <li>Bannann peze</li>\n  <li>Griyo</li>\n</ul>\n',
      check: ({ doc }) => {
        const ul = doc.querySelector('ul');
        if (!ul) return T('Mwen pa wè okenn lis <code>ul</code>.', 'Je ne vois aucune liste <code>ul</code>.');
        const items = [...ul.querySelectorAll('li')].filter(li => txt(li));
        if (items.length < 3) return T(`Lis la gen ${items.length} eleman. Li bezwen omwen 3 <code>li</code>.`, `La liste a ${items.length} élément(s). Il en faut au moins 3 <code>li</code>.`);
        return true;
      }
    },
{
      id: 'html-6',
      title: T('Fòmilè', 'Les formulaires'),
      theory: T(
        `<p>Fòmilè yo pèmèt itilizatè a <b>antre enfòmasyon</b>.</p>
         <pre>&lt;label&gt;Non ou:&lt;/label&gt;
&lt;input type="text" placeholder="Ekri non ou"&gt;
&lt;button&gt;Voye&lt;/button&gt;</pre>
         <ul><li><code>&lt;input&gt;</code> — yon bwat pou ekri (pa gen baliz fèmen).</li>
         <li><code>placeholder</code> — tèks gri ki parèt lè bwat la vid.</li>
         <li><code>&lt;button&gt;</code> — yon bouton pou klike.</li></ul>`,
        `<p>Les formulaires permettent à l'utilisateur de <b>saisir des informations</b>.</p>
         <pre>&lt;label&gt;Ton nom :&lt;/label&gt;
&lt;input type="text" placeholder="Écris ton nom"&gt;
&lt;button&gt;Envoyer&lt;/button&gt;</pre>
         <ul><li><code>&lt;input&gt;</code> — une zone de saisie (pas de balise fermante).</li>
         <li><code>placeholder</code> — le texte gris affiché quand la zone est vide.</li>
         <li><code>&lt;button&gt;</code> — un bouton à cliquer.</li></ul>`
      ),
      task: T(
        'Kreye yon <code>input</code> ak yon <code>placeholder</code>, epi yon <code>button</code> ki gen tèks ladan l.',
        'Crée un <code>input</code> avec un <code>placeholder</code>, puis un <code>button</code> avec du texte.'
      ),
      hint: T(
        '<code>&lt;input placeholder="Imel ou"&gt;</code> epi <code>&lt;button&gt;Enskri&lt;/button&gt;</code>',
        '<code>&lt;input placeholder="Ton e-mail"&gt;</code> puis <code>&lt;button&gt;S\'inscrire&lt;/button&gt;</code>'
      ),
      starter: '<h1>Enskripsyon</h1>\n',
      solution: '<h1>Enskripsyon</h1>\n<label>Non ou:</label>\n<input type="text" placeholder="Ekri non ou">\n<button>Voye</button>\n',
      check: ({ doc }) => {
        const input = doc.querySelector('input');
        if (!input) return T('Mwen pa wè okenn <code>input</code>.', 'Je ne vois aucun <code>input</code>.');
        if (!(input.getAttribute('placeholder') || '').trim()) return T('Ajoute yon atribi <code>placeholder</code> sou <code>input</code> la.', 'Ajoute un attribut <code>placeholder</code> sur l\'<code>input</code>.');
        const b = doc.querySelector('button');
        if (!b) return T('Mwen pa wè okenn <code>button</code>.', 'Je ne vois aucun <code>button</code>.');
        if (!txt(b)) return T('Mete tèks anndan bouton an.', 'Mets du texte dans le bouton.');
        return true;
      }
    },
{
      id: 'html-7',
      title: T('Tablo', 'Les tableaux'),
      theory: T(
        `<p>Yon <b>tablo</b> òganize done an ranje ak kolòn:</p>
         <pre>&lt;table&gt;
  &lt;tr&gt;
    &lt;th&gt;Vil&lt;/th&gt;
    &lt;th&gt;Depatman&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Okap&lt;/td&gt;
    &lt;td&gt;Nò&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</pre>
         <ul><li><code>&lt;tr&gt;</code> — yon ranje (<i>table row</i>).</li>
         <li><code>&lt;th&gt;</code> — yon selil antèt (an gra).</li>
         <li><code>&lt;td&gt;</code> — yon selil done.</li></ul>`,
        `<p>Un <b>tableau</b> organise des données en lignes et colonnes :</p>
         <pre>&lt;table&gt;
  &lt;tr&gt;
    &lt;th&gt;Ville&lt;/th&gt;
    &lt;th&gt;Département&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Cap-Haïtien&lt;/td&gt;
    &lt;td&gt;Nord&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</pre>
         <ul><li><code>&lt;tr&gt;</code> — une ligne (<i>table row</i>).</li>
         <li><code>&lt;th&gt;</code> — une cellule d'en-tête (en gras).</li>
         <li><code>&lt;td&gt;</code> — une cellule de données.</li></ul>`
      ),
      task: T(
        'Kreye yon tablo ak <b>2 kolòn</b> antèt (<code>th</code>) epi omwen <b>2 ranje</b> done (<code>td</code>).',
        'Crée un tableau avec <b>2 colonnes</b> d\'en-tête (<code>th</code>) et au moins <b>2 lignes</b> de données (<code>td</code>).'
      ),
      hint: T(
        'Premye <code>&lt;tr&gt;</code> a gen <code>&lt;th&gt;</code>; lòt <code>&lt;tr&gt;</code> yo gen <code>&lt;td&gt;</code>.',
        'Le premier <code>&lt;tr&gt;</code> contient des <code>&lt;th&gt;</code> ; les autres <code>&lt;tr&gt;</code> des <code>&lt;td&gt;</code>.'
      ),
      starter: '<h1>Vil Ayiti</h1>\n',
      solution: '<h1>Vil Ayiti</h1>\n<table>\n  <tr>\n    <th>Vil</th>\n    <th>Depatman</th>\n  </tr>\n  <tr>\n    <td>Okap</td>\n    <td>Nò</td>\n  </tr>\n  <tr>\n    <td>Okay</td>\n    <td>Sid</td>\n  </tr>\n</table>\n',
      check: ({ doc }) => {
        const tb = doc.querySelector('table');
        if (!tb) return T('Mwen pa wè okenn <code>table</code>.', 'Je ne vois aucun <code>table</code>.');
        if (tb.querySelectorAll('th').length < 2) return T('Tablo a bezwen omwen 2 <code>th</code> (antèt).', 'Le tableau a besoin d\'au moins 2 <code>th</code> (en-têtes).');
        const rows = [...tb.querySelectorAll('tr')].filter(r => r.querySelectorAll('td').length >= 2);
        if (rows.length < 2) return T(`Mwen wè ${rows.length} ranje done. Ajoute omwen 2 <code>tr</code> ak 2 <code>td</code> chak.`, `Je vois ${rows.length} ligne(s) de données. Ajoute au moins 2 <code>tr</code> avec 2 <code>td</code> chacune.`);
        return true;
      }
    },
{
      id: 'html-8',
      title: T('Estrikti semantik', 'Structure sémantique'),
      theory: T(
        `<p>Baliz <b>semantik</b> yo di <b>ki wòl</b> chak pati paj la jwe. Sa ede Google, lektè ekran, ak lòt pwogramè konprann paj ou.</p>
         <pre>&lt;header&gt;  antèt paj la (logo, tit)
&lt;nav&gt;     meni navigasyon
&lt;main&gt;    kontni prensipal la
&lt;footer&gt;  pye paj la (kontak, ©)</pre>
         <p>Yo pa chanje aparans paj la, men yo fè kòd ou pi <b>pwofesyonèl</b>.</p>`,
        `<p>Les balises <b>sémantiques</b> indiquent <b>le rôle</b> de chaque partie de la page. Cela aide Google, les lecteurs d'écran et les autres développeurs à comprendre ta page.</p>
         <pre>&lt;header&gt;  en-tête (logo, titre)
&lt;nav&gt;     menu de navigation
&lt;main&gt;    contenu principal
&lt;footer&gt;  pied de page (contact, ©)</pre>
         <p>Elles ne changent pas l'apparence, mais rendent ton code plus <b>professionnel</b>.</p>`
      ),
      task: T(
        'Òganize paj la ak yon <code>header</code>, yon <code>main</code> ak yon <code>footer</code> — chak ak tèks ladan l.',
        'Organise la page avec un <code>header</code>, un <code>main</code> et un <code>footer</code> — chacun avec du texte.'
      ),
      hint: T(
        '<code>&lt;header&gt;&lt;h1&gt;Sit mwen&lt;/h1&gt;&lt;/header&gt;</code>, answit <code>&lt;main&gt;…&lt;/main&gt;</code> ak <code>&lt;footer&gt;…&lt;/footer&gt;</code>.',
        '<code>&lt;header&gt;&lt;h1&gt;Mon site&lt;/h1&gt;&lt;/header&gt;</code>, puis <code>&lt;main&gt;…&lt;/main&gt;</code> et <code>&lt;footer&gt;…&lt;/footer&gt;</code>.'
      ),
      starter: '',
      solution: '<header>\n  <h1>Sit mwen</h1>\n</header>\n<main>\n  <p>Byenvini sou sit mwen!</p>\n</main>\n<footer>\n  <p>© 2026 Aprann Kode</p>\n</footer>\n',
      check: ({ doc }) => {
        for (const tag of ['header', 'main', 'footer']) {
          const el = doc.querySelector(tag);
          if (!el) return T(`Mwen pa wè baliz <code>${tag}</code>.`, `Je ne vois pas la balise <code>${tag}</code>.`);
          if (!txt(el)) return T(`<code>${tag}</code> la vid. Mete tèks ladan l.`, `Le <code>${tag}</code> est vide. Mets du texte dedans.`);
        }
        return true;
      }
    },
{
      id: 'html-9',
      title: T('div, span, id ak class', 'div, span, id et class'),
      theory: T(
        `<p><code>&lt;div&gt;</code> se yon <b>bwat</b> pou gwoupe eleman (li pran tout liy lan). <code>&lt;span&gt;</code> se yon ti bwat <b>anndan</b> yon liy tèks.</p>
         <p>Nou ba yo non ak 2 atribi enpòtan:</p>
         <ul><li><code>class</code> — pou <b>plizyè</b> eleman ki sanble (CSS).</li>
         <li><code>id</code> — pou <b>yon sèl</b> eleman inik (JavaScript).</li></ul>
         <pre>&lt;div class="kat"&gt;
  &lt;h2&gt;Diri kole&lt;/h2&gt;
  &lt;p&gt;Pri: &lt;span id="pri"&gt;250&lt;/span&gt; goud&lt;/p&gt;
&lt;/div&gt;</pre>`,
        `<p><code>&lt;div&gt;</code> est une <b>boîte</b> pour regrouper des éléments (elle prend toute la ligne). <code>&lt;span&gt;</code> est une petite boîte <b>dans</b> une ligne de texte.</p>
         <p>On les nomme avec 2 attributs importants :</p>
         <ul><li><code>class</code> — pour <b>plusieurs</b> éléments semblables (CSS).</li>
         <li><code>id</code> — pour <b>un seul</b> élément unique (JavaScript).</li></ul>
         <pre>&lt;div class="kat"&gt;
  &lt;h2&gt;Riz collé&lt;/h2&gt;
  &lt;p&gt;Prix : &lt;span id="pri"&gt;250&lt;/span&gt; gourdes&lt;/p&gt;
&lt;/div&gt;</pre>`
      ),
      task: T(
        'Kreye yon <code>div</code> ak <code>class="kat"</code> ki gen yon <code>h2</code> ak yon <code>p</code>. Anndan <code>p</code> a, mete yon <code>span</code> ak <code>id="pri"</code>.',
        'Crée un <code>div</code> avec <code>class="kat"</code> contenant un <code>h2</code> et un <code>p</code>. Dans le <code>p</code>, mets un <code>span</code> avec <code>id="pri"</code>.'
      ),
      hint: T('Gade egzanp lan anlè a — li prèske menm bagay!', 'Regarde l\'exemple ci-dessus — c\'est presque pareil !'),
      starter: '',
      solution: '<div class="kat">\n  <h2>Diri kole</h2>\n  <p>Pri: <span id="pri">250</span> goud</p>\n</div>\n',
      check: ({ doc }) => {
        const kat = doc.querySelector('div.kat');
        if (!kat) return T('Mwen pa wè <code>&lt;div class="kat"&gt;</code>.', 'Je ne vois pas <code>&lt;div class="kat"&gt;</code>.');
        if (!kat.querySelector('h2')) return T('Mete yon <code>h2</code> <b>anndan</b> div la.', 'Mets un <code>h2</code> <b>dans</b> le div.');
        if (!kat.querySelector('p')) return T('Mete yon <code>p</code> <b>anndan</b> div la.', 'Mets un <code>p</code> <b>dans</b> le div.');
        if (!kat.querySelector('p span#pri')) return T('Mete <code>&lt;span id="pri"&gt;</code> <b>anndan</b> paragraf la.', 'Mets <code>&lt;span id="pri"&gt;</code> <b>dans</b> le paragraphe.');
        return true;
      }
    },
{
      id: 'html-10',
      title: T('Lis dewoulan ak bwat pou koche', 'Listes déroulantes et cases à cocher'),
      theory: T(
        `<p>Pou kite moun <b>chwazi</b>, gen 2 eleman itil:</p>
         <pre>&lt;select&gt;
  &lt;option&gt;Pòtoprens&lt;/option&gt;
  &lt;option&gt;Jakmèl&lt;/option&gt;
&lt;/select&gt;

&lt;label&gt;
  &lt;input type="checkbox"&gt; Mwen dakò
&lt;/label&gt;</pre>
         <ul><li><code>&lt;select&gt;</code> + <code>&lt;option&gt;</code> — yon lis dewoulan.</li>
         <li><code>type="checkbox"</code> — yon bwat pou koche ✓.</li>
         <li><code>&lt;label&gt;</code> — tèks ki ale ak eleman an (klike sou li koche bwat la!).</li></ul>`,
        `<p>Pour laisser l'utilisateur <b>choisir</b>, il existe 2 éléments utiles :</p>
         <pre>&lt;select&gt;
  &lt;option&gt;Port-au-Prince&lt;/option&gt;
  &lt;option&gt;Jacmel&lt;/option&gt;
&lt;/select&gt;

&lt;label&gt;
  &lt;input type="checkbox"&gt; J'accepte
&lt;/label&gt;</pre>
         <ul><li><code>&lt;select&gt;</code> + <code>&lt;option&gt;</code> — une liste déroulante.</li>
         <li><code>type="checkbox"</code> — une case à cocher ✓.</li>
         <li><code>&lt;label&gt;</code> — le texte associé (cliquer dessus coche la case !).</li></ul>`
      ),
      task: T(
        'Kreye yon <code>select</code> ak omwen <b>3</b> <code>option</code>, epi yon <code>input type="checkbox"</code> anndan yon <code>label</code>.',
        'Crée un <code>select</code> avec au moins <b>3</b> <code>option</code>, puis un <code>input type="checkbox"</code> dans un <code>label</code>.'
      ),
      hint: T('Pa bliye <code>type="checkbox"</code> sou <code>input</code> la.', 'N\'oublie pas <code>type="checkbox"</code> sur l\'<code>input</code>.'),
      starter: '<h1>Ki vil ou?</h1>\n',
      solution: '<h1>Ki vil ou?</h1>\n<select>\n  <option>Pòtoprens</option>\n  <option>Jakmèl</option>\n  <option>Okap</option>\n</select>\n\n<label>\n  <input type="checkbox"> Mwen dakò\n</label>\n',
      check: ({ doc }) => {
        const sel = doc.querySelector('select');
        if (!sel) return T('Mwen pa wè okenn <code>select</code>.', 'Je ne vois aucun <code>select</code>.');
        if (sel.querySelectorAll('option').length < 3) return T('<code>select</code> la bezwen omwen 3 <code>option</code>.', 'Le <code>select</code> a besoin d\'au moins 3 <code>option</code>.');
        const cb = doc.querySelector('input[type="checkbox"]');
        if (!cb) return T('Mwen pa wè <code>&lt;input type="checkbox"&gt;</code>.', 'Je ne vois pas <code>&lt;input type="checkbox"&gt;</code>.');
        if (!cb.closest('label')) return T('Mete checkbox la <b>anndan</b> yon <code>label</code>.', 'Mets la case <b>dans</b> un <code>label</code>.');
        return true;
      }
    }
  ]
});

addDetails({
  'html-1': {
    extra: T(
      `<p>Yon vrè fichye HTML gen yon <b>skelèt</b> konplè. Nan jwèt la nou kache l pou w ka konsantre, men men li:</p>
       <pre>&lt;!DOCTYPE html&gt;
&lt;html lang="ht"&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;Paj mwen&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Bonjou Mond!&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>
       <ul><li><code>&lt;head&gt;</code> — enfòmasyon sou paj la (tit onglè a, lang, karaktè).</li>
       <li><code>&lt;body&gt;</code> — sa moun wè sou ekran an.</li>
       <li><code>charset="utf-8"</code> — pèmèt aksan yo (è, ò, à) parèt kòrèkteman.</li></ul>`,
      `<p>Un vrai fichier HTML a un <b>squelette</b> complet. Dans le jeu on le cache pour que tu te concentres, mais le voici :</p>
       <pre>&lt;!DOCTYPE html&gt;
&lt;html lang="fr"&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;Ma page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Bonjour le monde !&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>
       <ul><li><code>&lt;head&gt;</code> — infos sur la page (titre de l'onglet, langue, encodage).</li>
       <li><code>&lt;body&gt;</code> — ce qu'on voit à l'écran.</li>
       <li><code>charset="utf-8"</code> — permet d'afficher correctement les accents (é, è, à).</li></ul>`
    ),
    tips: T(
      `<li>Pa bliye <code>/</code> nan baliz fèmen an: <code>&lt;/h1&gt;</code>.</li>
       <li>Mete <b>yon sèl</b> <code>h1</code> pa paj — se tit prensipal la.</li>
       <li>Pa chwazi <code>h2</code> oswa <code>h3</code> pou gwosè yo; chwazi yo pou <b>nivo enpòtans</b>. CSS ap jere gwosè a.</li>`,
      `<li>N'oublie pas le <code>/</code> dans la balise fermante : <code>&lt;/h1&gt;</code>.</li>
       <li>Mets <b>un seul</b> <code>h1</code> par page — c'est le titre principal.</li>
       <li>Ne choisis pas <code>h2</code> ou <code>h3</code> pour leur taille, mais pour leur <b>niveau d'importance</b>. Le CSS gère la taille.</li>`
    ),
    recap: T(
      `<li>HTML = <b>estrikti</b> paj la.</li><li>Baliz louvri + kontni + baliz fèmen.</li><li><code>h1</code> → <code>h6</code>: tit yo, pi enpòtan rive mwens enpòtan.</li>`,
      `<li>HTML = la <b>structure</b> de la page.</li><li>Balise ouvrante + contenu + balise fermante.</li><li><code>h1</code> → <code>h6</code> : les titres, du plus au moins important.</li>`
    )
  },
  'html-2': {
    extra: T(
      `<p>Lòt baliz tèks itil:</p>
       <ul><li><code>&lt;br&gt;</code> — kase liy (pa gen baliz fèmen).</li>
       <li><code>&lt;hr&gt;</code> — yon liy separasyon orizontal.</li>
       <li><code>&lt;strong&gt;</code> ak <code>&lt;em&gt;</code> — menm jan ak <code>b</code> ak <code>i</code>, men yo di tèks la <b>enpòtan</b> (lektè ekran yo konprann sa).</li></ul>
       <p>Remake: si w mete plizyè espas oswa plizyè liy vid nan HTML, navigatè a <b>konte yo pou yon sèl espas</b>.</p>`,
      `<p>Autres balises de texte utiles :</p>
       <ul><li><code>&lt;br&gt;</code> — retour à la ligne (pas de balise fermante).</li>
       <li><code>&lt;hr&gt;</code> — une ligne de séparation horizontale.</li>
       <li><code>&lt;strong&gt;</code> et <code>&lt;em&gt;</code> — comme <code>b</code> et <code>i</code>, mais indiquent que le texte est <b>important</b> (les lecteurs d'écran le comprennent).</li></ul>
       <p>Remarque : plusieurs espaces ou lignes vides en HTML sont <b>comptés comme un seul espace</b>.</p>`
    ),
    tips: T(
      `<li>Fèmen baliz yo nan <b>bon lòd</b>: <code>&lt;p&gt;&lt;b&gt;…&lt;/b&gt;&lt;/p&gt;</code>, pa <code>&lt;p&gt;&lt;b&gt;…&lt;/p&gt;&lt;/b&gt;</code>.</li>
       <li>Pa mete yon <code>&lt;p&gt;</code> anndan yon lòt <code>&lt;p&gt;</code>.</li>`,
      `<li>Ferme les balises dans le <b>bon ordre</b> : <code>&lt;p&gt;&lt;b&gt;…&lt;/b&gt;&lt;/p&gt;</code>, pas <code>&lt;p&gt;&lt;b&gt;…&lt;/p&gt;&lt;/b&gt;</code>.</li>
       <li>Ne mets pas un <code>&lt;p&gt;</code> dans un autre <code>&lt;p&gt;</code>.</li>`
    ),
    recap: T(
      `<li><code>p</code> = paragraf.</li><li>Baliz ka <b>anbrike</b> youn anndan lòt.</li><li><code>b</code>/<code>strong</code> = gra, <code>i</code>/<code>em</code> = italik.</li>`,
      `<li><code>p</code> = paragraphe.</li><li>Les balises peuvent être <b>imbriquées</b>.</li><li><code>b</code>/<code>strong</code> = gras, <code>i</code>/<code>em</code> = italique.</li>`
    )
  },
  'html-3': {
    extra: T(
      `<p>Kèk atribi itil pou lyen:</p>
       <pre>&lt;a href="https://google.com" target="_blank"&gt;Nouvo onglè&lt;/a&gt;
&lt;a href="kontak.html"&gt;Lòt paj sou sit mwen&lt;/a&gt;
&lt;a href="mailto:mwen@egzanp.com"&gt;Voye yon imel&lt;/a&gt;
&lt;a href="#kontak"&gt;Desann nan seksyon kontak&lt;/a&gt;</pre>
       <ul><li><code>target="_blank"</code> — louvri nan yon nouvo onglè.</li>
       <li>Adrès <b>relatif</b> (<code>kontak.html</code>) — yon fichye sou menm sit la.</li>
       <li><code>#kontak</code> — ale sou eleman ki gen <code>id="kontak"</code>.</li></ul>`,
      `<p>Quelques attributs utiles pour les liens :</p>
       <pre>&lt;a href="https://google.com" target="_blank"&gt;Nouvel onglet&lt;/a&gt;
&lt;a href="contact.html"&gt;Autre page de mon site&lt;/a&gt;
&lt;a href="mailto:moi@exemple.com"&gt;Envoyer un e-mail&lt;/a&gt;
&lt;a href="#contact"&gt;Descendre à la section contact&lt;/a&gt;</pre>
       <ul><li><code>target="_blank"</code> — ouvre dans un nouvel onglet.</li>
       <li>Adresse <b>relative</b> (<code>contact.html</code>) — un fichier du même site.</li>
       <li><code>#contact</code> — va à l'élément qui a <code>id="contact"</code>.</li></ul>`
    ),
    tips: T(
      `<li>Toujou mete gimè yo: <code>href="…"</code>.</li>
       <li>Pou yon sit deyò, kòmanse ak <code>https://</code> — sinon navigatè a ap chèche yon fichye sou sit ou.</li>
       <li>Ekri yon tèks ki gen sans ("Li atik la"), pa "Klike la a".</li>`,
      `<li>Mets toujours les guillemets : <code>href="…"</code>.</li>
       <li>Pour un site externe, commence par <code>https://</code> — sinon le navigateur cherche un fichier sur ton site.</li>
       <li>Écris un texte qui a du sens (« Lire l'article »), pas « Cliquez ici ».</li>`
    ),
    recap: T(
      `<li><code>&lt;a href="…"&gt;</code> = lyen.</li><li>Atribi = <code>non="valè"</code> nan baliz ouvèti a.</li>`,
      `<li><code>&lt;a href="…"&gt;</code> = lien.</li><li>Attribut = <code>nom="valeur"</code> dans la balise ouvrante.</li>`
    )
  },
  'html-4': {
    extra: T(
      `<p>Ou ka kontwole gwosè yon imaj ak atribi <code>width</code> ak <code>height</code> (an piksèl):</p>
       <pre>&lt;img src="logo.png" alt="Logo" width="120"&gt;</pre>
       <p>Pou mete yon imaj ak yon <b>lejand</b>, itilize <code>&lt;figure&gt;</code>:</p>
       <pre>&lt;figure&gt;
  &lt;img src="sitadèl.jpg" alt="Sitadèl Laferyè"&gt;
  &lt;figcaption&gt;Sitadèl Laferyè, Milo&lt;/figcaption&gt;
&lt;/figure&gt;</pre>
       <p>Fòma imaj komen: <code>.jpg</code> (foto), <code>.png</code> (transparans), <code>.svg</code> (desen vektè), <code>.webp</code> (lejè).</p>`,
      `<p>Tu peux contrôler la taille d'une image avec les attributs <code>width</code> et <code>height</code> (en pixels) :</p>
       <pre>&lt;img src="logo.png" alt="Logo" width="120"&gt;</pre>
       <p>Pour une image avec une <b>légende</b>, utilise <code>&lt;figure&gt;</code> :</p>
       <pre>&lt;figure&gt;
  &lt;img src="citadelle.jpg" alt="Citadelle Laferrière"&gt;
  &lt;figcaption&gt;Citadelle Laferrière, Milot&lt;/figcaption&gt;
&lt;/figure&gt;</pre>
       <p>Formats courants : <code>.jpg</code> (photos), <code>.png</code> (transparence), <code>.svg</code> (dessins vectoriels), <code>.webp</code> (léger).</p>`
    ),
    tips: T(
      `<li>Pa ekri <code>&lt;/img&gt;</code> — <code>img</code> pa gen baliz fèmen.</li>
       <li>Non fichye a dwe <b>egzak</b> (majiskil, ekstansyon): <code>Foto.JPG</code> ≠ <code>foto.jpg</code>.</li>
       <li><code>alt</code> pa opsyonèl: li ede moun ki pa wè, ak Google.</li>`,
      `<li>N'écris pas <code>&lt;/img&gt;</code> — <code>img</code> n'a pas de balise fermante.</li>
       <li>Le nom du fichier doit être <b>exact</b> (majuscules, extension) : <code>Photo.JPG</code> ≠ <code>photo.jpg</code>.</li>
       <li><code>alt</code> n'est pas optionnel : il aide les personnes malvoyantes et Google.</li>`
    ),
    recap: T(
      `<li><code>&lt;img src="…" alt="…"&gt;</code></li><li>Baliz <b>vid</b> (san fèmen).</li>`,
      `<li><code>&lt;img src="…" alt="…"&gt;</code></li><li>Balise <b>vide</b> (sans fermeture).</li>`
    )
  },
  'html-5': {
    extra: T(
      `<p>Lis yo ka <b>anbrike</b> pou fè yon sou-lis:</p>
       <pre>&lt;ul&gt;
  &lt;li&gt;Fwi
    &lt;ul&gt;
      &lt;li&gt;Mango&lt;/li&gt;
      &lt;li&gt;Zaboka&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
  &lt;li&gt;Legim&lt;/li&gt;
&lt;/ul&gt;</pre>
       <p>Sou yon <code>&lt;ol&gt;</code>, ou ka chanje kòmansman an: <code>&lt;ol start="5"&gt;</code>, oswa kalite a: <code>&lt;ol type="A"&gt;</code>.</p>`,
      `<p>Les listes peuvent être <b>imbriquées</b> pour faire une sous-liste :</p>
       <pre>&lt;ul&gt;
  &lt;li&gt;Fruits
    &lt;ul&gt;
      &lt;li&gt;Mangue&lt;/li&gt;
      &lt;li&gt;Avocat&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
  &lt;li&gt;Légumes&lt;/li&gt;
&lt;/ul&gt;</pre>
       <p>Sur un <code>&lt;ol&gt;</code>, tu peux changer le début : <code>&lt;ol start="5"&gt;</code>, ou le type : <code>&lt;ol type="A"&gt;</code>.</p>`
    ),
    tips: T(
      `<li>Sèlman <code>&lt;li&gt;</code> ka yon pitit dirèk <code>&lt;ul&gt;</code> oswa <code>&lt;ol&gt;</code>.</li>
       <li>Pou yon sou-lis, mete l <b>anndan</b> <code>&lt;li&gt;</code> a, pa apre l.</li>`,
      `<li>Seul <code>&lt;li&gt;</code> peut être un enfant direct de <code>&lt;ul&gt;</code> ou <code>&lt;ol&gt;</code>.</li>
       <li>Pour une sous-liste, mets-la <b>dans</b> le <code>&lt;li&gt;</code>, pas après.</li>`
    ),
    recap: T(
      `<li><code>ul</code> = pwen, <code>ol</code> = nimewo.</li><li>Chak eleman = <code>li</code>.</li><li>Endantasyon fè kòd la lizib.</li>`,
      `<li><code>ul</code> = puces, <code>ol</code> = numéros.</li><li>Chaque élément = <code>li</code>.</li><li>L'indentation rend le code lisible.</li>`
    )
  },
  'html-6': {
    extra: T(
      `<p>Gen anpil kalite <code>input</code> — navigatè a adapte klavye a sou telefòn!</p>
       <pre>&lt;input type="email"    placeholder="imel"&gt;
&lt;input type="password" placeholder="modpas"&gt;
&lt;input type="number"   min="1" max="10"&gt;
&lt;input type="date"&gt;
&lt;input type="color"&gt;</pre>
       <p>Pou konekte yon <code>label</code> ak yon <code>input</code>: <code>&lt;label for="non"&gt;</code> + <code>&lt;input id="non"&gt;</code>. Atribi <code>required</code> fè chan an obligatwa. Tout chan yo ale anndan yon <code>&lt;form&gt;</code>.</p>`,
      `<p>Il existe beaucoup de types d'<code>input</code> — le navigateur adapte même le clavier sur mobile !</p>
       <pre>&lt;input type="email"    placeholder="e-mail"&gt;
&lt;input type="password" placeholder="mot de passe"&gt;
&lt;input type="number"   min="1" max="10"&gt;
&lt;input type="date"&gt;
&lt;input type="color"&gt;</pre>
       <p>Pour relier un <code>label</code> à un <code>input</code> : <code>&lt;label for="nom"&gt;</code> + <code>&lt;input id="nom"&gt;</code>. L'attribut <code>required</code> rend le champ obligatoire. Tous les champs vont dans un <code>&lt;form&gt;</code>.</p>`
    ),
    tips: T(
      `<li><code>placeholder</code> pa ranplase <code>label</code>: li disparèt lè moun nan ekri.</li>
       <li>Chwazi bon <code>type</code> lan (<code>email</code>, <code>number</code>…) pou validasyon otomatik.</li>`,
      `<li><code>placeholder</code> ne remplace pas <code>label</code> : il disparaît quand on tape.</li>
       <li>Choisis le bon <code>type</code> (<code>email</code>, <code>number</code>…) pour la validation automatique.</li>`
    ),
    recap: T(
      `<li><code>input</code> = chan pou ekri (baliz vid).</li><li><code>button</code> = bouton.</li><li><code>label</code> = tèks ki dekri chan an.</li>`,
      `<li><code>input</code> = champ de saisie (balise vide).</li><li><code>button</code> = bouton.</li><li><code>label</code> = texte qui décrit le champ.</li>`
    )
  },
  'html-7': {
    extra: T(
      `<p>Tablo pwofesyonèl yo divize an 3 pati:</p>
       <pre>&lt;table&gt;
  &lt;thead&gt;  &lt;!-- antèt --&gt;
  &lt;tbody&gt;  &lt;!-- done yo --&gt;
  &lt;tfoot&gt;  &lt;!-- total --&gt;
&lt;/table&gt;</pre>
       <p>Pou yon selil ki pran plizyè kolòn: <code>&lt;td colspan="2"&gt;</code>. Plizyè ranje: <code>rowspan="2"</code>.</p>`,
      `<p>Les tableaux professionnels sont divisés en 3 parties :</p>
       <pre>&lt;table&gt;
  &lt;thead&gt;  &lt;!-- en-tête --&gt;
  &lt;tbody&gt;  &lt;!-- données --&gt;
  &lt;tfoot&gt;  &lt;!-- total --&gt;
&lt;/table&gt;</pre>
       <p>Pour une cellule sur plusieurs colonnes : <code>&lt;td colspan="2"&gt;</code>. Sur plusieurs lignes : <code>rowspan="2"</code>.</p>`
    ),
    tips: T(
      `<li>Chak <code>tr</code> dwe gen <b>menm kantite</b> selil (sof si w itilize <code>colspan</code>).</li>
       <li>Pa itilize tablo pou fè <b>mizanpaj</b> yon paj — se pou done sèlman. Pou mizanpaj, itilize CSS.</li>`,
      `<li>Chaque <code>tr</code> doit avoir le <b>même nombre</b> de cellules (sauf avec <code>colspan</code>).</li>
       <li>N'utilise pas les tableaux pour la <b>mise en page</b> — seulement pour des données. Pour la mise en page, utilise le CSS.</li>`
    ),
    recap: T(
      `<li><code>table</code> › <code>tr</code> › <code>th</code>/<code>td</code>.</li><li><code>th</code> = antèt, <code>td</code> = done.</li>`,
      `<li><code>table</code> › <code>tr</code> › <code>th</code>/<code>td</code>.</li><li><code>th</code> = en-tête, <code>td</code> = donnée.</li>`
    )
  },
  'html-8': {
    extra: T(
      `<p>Lòt baliz semantik:</p>
       <ul><li><code>&lt;section&gt;</code> — yon seksyon ki gen pwòp tit li.</li>
       <li><code>&lt;article&gt;</code> — yon kontni endepandan (atik blog, nouvèl).</li>
       <li><code>&lt;aside&gt;</code> — kontni segondè (kolòn bò kote).</li></ul>
       <pre>&lt;body&gt;
  &lt;header&gt;…&lt;nav&gt;…&lt;/nav&gt;&lt;/header&gt;
  &lt;main&gt;
    &lt;article&gt;…&lt;/article&gt;
    &lt;aside&gt;…&lt;/aside&gt;
  &lt;/main&gt;
  &lt;footer&gt;…&lt;/footer&gt;
&lt;/body&gt;</pre>`,
      `<p>Autres balises sémantiques :</p>
       <ul><li><code>&lt;section&gt;</code> — une section avec son propre titre.</li>
       <li><code>&lt;article&gt;</code> — un contenu indépendant (article de blog, actualité).</li>
       <li><code>&lt;aside&gt;</code> — contenu secondaire (colonne latérale).</li></ul>
       <pre>&lt;body&gt;
  &lt;header&gt;…&lt;nav&gt;…&lt;/nav&gt;&lt;/header&gt;
  &lt;main&gt;
    &lt;article&gt;…&lt;/article&gt;
    &lt;aside&gt;…&lt;/aside&gt;
  &lt;/main&gt;
  &lt;footer&gt;…&lt;/footer&gt;
&lt;/body&gt;</pre>`
    ),
    tips: T(
      `<li>Yon sèl <code>&lt;main&gt;</code> pa paj.</li>
       <li>Pa konfonn <code>&lt;header&gt;</code> (antèt paj la) ak <code>&lt;head&gt;</code> (enfòmasyon kache).</li>`,
      `<li>Un seul <code>&lt;main&gt;</code> par page.</li>
       <li>Ne confonds pas <code>&lt;header&gt;</code> (en-tête visible) et <code>&lt;head&gt;</code> (informations cachées).</li>`
    ),
    recap: T(
      `<li>Baliz semantik = baliz ki gen <b>sans</b>.</li><li><code>header</code>, <code>nav</code>, <code>main</code>, <code>footer</code>.</li>`,
      `<li>Balise sémantique = balise qui a du <b>sens</b>.</li><li><code>header</code>, <code>nav</code>, <code>main</code>, <code>footer</code>.</li>`
    )
  },
  'html-9': {
    extra: T(
      `<p>Yon eleman ka gen <b>plizyè klas</b>, separe ak espas:</p>
       <pre>&lt;div class="kat enpòtan gwo"&gt;…&lt;/div&gt;</pre>
       <p>Men yon <code>id</code> dwe <b>inik</b> nan tout paj la. Diferans <code>div</code>/<code>span</code>: <code>div</code> se yon eleman <b>blòk</b> (li kòmanse sou yon nouvo liy), <code>span</code> se yon eleman <b>inline</b> (li rete nan liy tèks la).</p>`,
      `<p>Un élément peut avoir <b>plusieurs classes</b>, séparées par des espaces :</p>
       <pre>&lt;div class="carte importante grande"&gt;…&lt;/div&gt;</pre>
       <p>Mais un <code>id</code> doit être <b>unique</b> dans toute la page. Différence <code>div</code>/<code>span</code> : <code>div</code> est un élément <b>bloc</b> (il commence une nouvelle ligne), <code>span</code> est un élément <b>en ligne</b> (il reste dans la ligne de texte).</p>`
    ),
    tips: T(
      `<li>Non klas ak id pa ka gen espas: <code>class="kat-bleu"</code>, pa <code>class="kat bleu"</code> (sa se 2 klas).</li>
       <li>Pa itilize menm <code>id</code> la de fwa.</li>`,
      `<li>Les noms de classe et d'id n'ont pas d'espace : <code>class="carte-bleue"</code>, pas <code>class="carte bleue"</code> (ça fait 2 classes).</li>
       <li>N'utilise jamais le même <code>id</code> deux fois.</li>`
    ),
    recap: T(
      `<li><code>div</code> = bwat blòk, <code>span</code> = bwat inline.</li><li><code>class</code> = gwoup, <code>id</code> = inik.</li>`,
      `<li><code>div</code> = boîte bloc, <code>span</code> = boîte en ligne.</li><li><code>class</code> = groupe, <code>id</code> = unique.</li>`
    )
  },
  'html-10': {
    extra: T(
      `<p>Lòt eleman pou chwa:</p>
       <pre>&lt;!-- Bouton radyo: yon sèl chwa nan gwoup la --&gt;
&lt;label&gt;&lt;input type="radio" name="sèks" value="f"&gt; Fi&lt;/label&gt;
&lt;label&gt;&lt;input type="radio" name="sèks" value="g"&gt; Gason&lt;/label&gt;

&lt;!-- Gwo bwat tèks --&gt;
&lt;textarea rows="4" placeholder="Mesaj ou…"&gt;&lt;/textarea&gt;</pre>
       <p>Bouton radyo ki gen menm <code>name</code> fè pati menm gwoup: moun nan ka chwazi <b>yon sèl</b>. Atribi <code>value</code> se sa ki voye bay sèvè a.</p>`,
      `<p>Autres éléments de choix :</p>
       <pre>&lt;!-- Boutons radio : un seul choix dans le groupe --&gt;
&lt;label&gt;&lt;input type="radio" name="genre" value="f"&gt; Femme&lt;/label&gt;
&lt;label&gt;&lt;input type="radio" name="genre" value="h"&gt; Homme&lt;/label&gt;

&lt;!-- Grande zone de texte --&gt;
&lt;textarea rows="4" placeholder="Ton message…"&gt;&lt;/textarea&gt;</pre>
       <p>Les boutons radio avec le même <code>name</code> forment un groupe : on ne peut en choisir qu'<b>un seul</b>. L'attribut <code>value</code> est ce qui est envoyé au serveur.</p>`
    ),
    tips: T(
      `<li><code>checkbox</code> = plizyè chwa posib; <code>radio</code> = yon sèl chwa.</li>
       <li>Mete <code>selected</code> sou yon <code>option</code> pou l chwazi pa defo.</li>`,
      `<li><code>checkbox</code> = plusieurs choix possibles ; <code>radio</code> = un seul choix.</li>
       <li>Ajoute <code>selected</code> sur une <code>option</code> pour la présélectionner.</li>`
    ),
    recap: T(
      `<li><code>select</code> + <code>option</code> = lis dewoulan.</li><li><code>checkbox</code>, <code>radio</code>, <code>textarea</code>.</li><li>🎉 Ou fini HTML! Pwochen etap: CSS.</li>`,
      `<li><code>select</code> + <code>option</code> = liste déroulante.</li><li><code>checkbox</code>, <code>radio</code>, <code>textarea</code>.</li><li>🎉 Tu as fini le HTML ! Prochaine étape : le CSS.</li>`
    )
  }
});
