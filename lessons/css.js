/* ======================= MWA 1 — CSS (semèn 3-4) ======================= */
MODULES.push({
  id: 'css',
  icon: '🎨',
  color: '#38bdf8',
  lang: 'css',
  file: 'style.css',
  name: T('Zile CSS', 'Île CSS'),
  desc: T('Bay paj ou yo koulè ak style', 'Donner couleurs et style à tes pages'),
  duration: T('Mwa 1 · 2 semèn', 'Mois 1 · 2 semaines'),
  weeks: [
    T('Koulè, tèks, klas ak bwat', 'Couleurs, texte, classes et boîtes'),
    T('Mizanpaj modèn ak responsive', 'Mise en page moderne et responsive')
  ],
  lessons: [
{
      id: 'css-1',
      title: T('Koulè', 'Les couleurs'),
      html: '<h1>Ayiti Cheri</h1>\n<p>Pi bon peyi pase ou nanpwen.</p>',
      theory: T(
        `<p><b>CSS</b> (Cascading Style Sheets) se lang ki bay paj la <b>style</b>: koulè, gwosè, pozisyon…</p>
         <p>Yon règ CSS gen yon <b>selektè</b> ak <b>deklarasyon</b>:</p>
         <pre>h1 {
  color: red;
}</pre>
         <ul><li><code>h1</code> — selektè a: li chwazi tout tit <code>h1</code>.</li>
         <li><code>color</code> — <b>pwopriyete</b> a (koulè tèks la).</li>
         <li><code>red</code> — <b>valè</b> a.</li></ul>
         <p>Pa bliye <code>:</code> ant pwopriyete ak valè, ak <code>;</code> nan fen!</p>`,
        `<p>Le <b>CSS</b> (Cascading Style Sheets) est le langage qui donne du <b>style</b> à la page : couleurs, tailles, positions…</p>
         <p>Une règle CSS a un <b>sélecteur</b> et des <b>déclarations</b> :</p>
         <pre>h1 {
  color: red;
}</pre>
         <ul><li><code>h1</code> — le sélecteur : il choisit tous les titres <code>h1</code>.</li>
         <li><code>color</code> — la <b>propriété</b> (couleur du texte).</li>
         <li><code>red</code> — la <b>valeur</b>.</li></ul>
         <p>N'oublie pas le <code>:</code> entre propriété et valeur, et le <code>;</code> à la fin !</p>`
      ),
      task: T('Fè tit <code>h1</code> la vin <b>ble</b> (<code>blue</code>).', 'Rends le titre <code>h1</code> <b>bleu</b> (<code>blue</code>).'),
      hint: T('Anndan akolad yo, ekri <code>color: blue;</code>', 'Dans les accolades, écris <code>color: blue;</code>'),
      starter: 'h1 {\n  \n}\n',
      solution: 'h1 {\n  color: blue;\n}\n',
      check: ({ doc, win }) => {
        const c = win.getComputedStyle(doc.querySelector('h1')).color;
        if (c !== 'rgb(0, 0, 255)') return T('Tit la poko ble. Tcheke òtograf <code>color</code> ak <code>blue</code>.', 'Le titre n\'est pas encore bleu. Vérifie l\'orthographe de <code>color</code> et <code>blue</code>.');
        return true;
      }
    },
{
      id: 'css-2',
      title: T('Koulè fon', "Couleur de fond"),
      html: '<h1>Ayiti Cheri</h1>\n<p>Pi bon peyi pase ou nanpwen.</p>',
      theory: T(
        `<p>Pwopriyete <code>background-color</code> chanje koulè <b>fon</b> yon eleman.</p>
         <p>Ou ka ekri yon koulè plizyè fason:</p>
         <pre>body { background-color: lightyellow; }  /* non */
body { background-color: #ffe8a3; }      /* hex */
body { background-color: rgb(255,232,163); }</pre>
         <p>Selektè <code>body</code> chwazi tout kò paj la. <code>/* … */</code> se yon <b>kòmantè</b>: navigatè a inyore l.</p>`,
        `<p>La propriété <code>background-color</code> change la couleur de <b>fond</b> d'un élément.</p>
         <p>On peut écrire une couleur de plusieurs façons :</p>
         <pre>body { background-color: lightyellow; }  /* nom */
body { background-color: #ffe8a3; }      /* hex */
body { background-color: rgb(255,232,163); }</pre>
         <p>Le sélecteur <code>body</code> choisit tout le corps de la page. <code>/* … */</code> est un <b>commentaire</b> : le navigateur l'ignore.</p>`
      ),
      task: T('Bay <code>body</code> nenpòt koulè fon ou vle.', 'Donne au <code>body</code> la couleur de fond de ton choix.'),
      hint: T('<code>background-color: lightblue;</code>', '<code>background-color: lightblue;</code>'),
      starter: 'body {\n  \n}\n',
      solution: 'body {\n  background-color: #ffe8a3;\n}\n',
      check: ({ doc, win }) => {
        const bg = win.getComputedStyle(doc.body).backgroundColor;
        if (bg === 'rgba(0, 0, 0, 0)' || bg === 'transparent') return T('<code>body</code> la poko gen koulè fon.', 'Le <code>body</code> n\'a pas encore de couleur de fond.');
        return true;
      }
    },
{
      id: 'css-3',
      title: T('Tèks', 'Le texte'),
      html: '<h1>Pwovèb</h1>\n<p>Piti piti zwazo fè nich li.</p>\n<p>Men anpil, chay pa lou.</p>',
      theory: T(
        `<p>Kèk pwopriyete pou tèks:</p>
         <ul><li><code>font-size</code> — gwosè tèks la (egz. <code>18px</code>).</li>
         <li><code>text-align</code> — aliyman: <code>left</code>, <code>center</code>, <code>right</code>.</li>
         <li><code>font-family</code> — polis karaktè a (egz. <code>Arial</code>).</li></ul>
         <p>Yon règ ka gen <b>plizyè</b> deklarasyon:</p>
         <pre>p {
  font-size: 18px;
  text-align: right;
}</pre>`,
        `<p>Quelques propriétés pour le texte :</p>
         <ul><li><code>font-size</code> — taille du texte (ex. <code>18px</code>).</li>
         <li><code>text-align</code> — alignement : <code>left</code>, <code>center</code>, <code>right</code>.</li>
         <li><code>font-family</code> — la police (ex. <code>Arial</code>).</li></ul>
         <p>Une règle peut avoir <b>plusieurs</b> déclarations :</p>
         <pre>p {
  font-size: 18px;
  text-align: right;
}</pre>`
      ),
      task: T('Bay paragraf <code>p</code> yo <code>font-size: 24px</code> epi <b>santre</b> yo.', 'Donne aux paragraphes <code>p</code> une <code>font-size: 24px</code> et <b>centre</b>-les.'),
      hint: T('Santre = <code>text-align: center;</code>', 'Centrer = <code>text-align: center;</code>'),
      starter: 'p {\n  \n}\n',
      solution: 'p {\n  font-size: 24px;\n  text-align: center;\n}\n',
      check: ({ doc, win }) => {
        const s = win.getComputedStyle(doc.querySelector('p'));
        if (s.fontSize !== '24px') return T(`Gwosè a se <code>${s.fontSize}</code>, li dwe <code>24px</code>.`, `La taille est <code>${s.fontSize}</code>, elle doit être <code>24px</code>.`);
        if (s.textAlign !== 'center') return T('Tèks la poko santre.', 'Le texte n\'est pas encore centré.');
        return true;
      }
    },
{
      id: 'css-4',
      title: T('Klas', 'Les classes'),
      html: '<p>Tèks nòmal.</p>\n<p class="espesyal">Tèks espesyal!</p>\n<p>Yon lòt tèks nòmal.</p>',
      theory: T(
        `<p>Pou chwazi <b>sèlman kèk</b> eleman, nou ba yo yon <b>klas</b> nan HTML:</p>
         <pre>&lt;p class="espesyal"&gt;…&lt;/p&gt;</pre>
         <p>Nan CSS, selektè yon klas kòmanse ak yon <b>pwen</b> <code>.</code>:</p>
         <pre>.espesyal {
  color: green;
}</pre>
         <p><code>font-weight: bold;</code> mete tèks la an gra.</p>`,
        `<p>Pour choisir <b>seulement certains</b> éléments, on leur donne une <b>classe</b> en HTML :</p>
         <pre>&lt;p class="espesyal"&gt;…&lt;/p&gt;</pre>
         <p>En CSS, le sélecteur d'une classe commence par un <b>point</b> <code>.</code> :</p>
         <pre>.espesyal {
  color: green;
}</pre>
         <p><code>font-weight: bold;</code> met le texte en gras.</p>`
      ),
      task: T('Fè <b>sèlman</b> paragraf ki gen klas <code>espesyal</code> la vin <b>wouj</b> (<code>red</code>) ak <b>gra</b>.', 'Rends <b>seulement</b> le paragraphe de classe <code>espesyal</code> <b>rouge</b> (<code>red</code>) et en <b>gras</b>.'),
      hint: T('Selektè a se <code>.espesyal</code> — ak pwen an devan.', 'Le sélecteur est <code>.espesyal</code> — avec le point devant.'),
      starter: '',
      solution: '.espesyal {\n  color: red;\n  font-weight: bold;\n}\n',
      check: ({ doc, win }) => {
        const ps = doc.querySelectorAll('p');
        const sp = win.getComputedStyle(ps[1]);
        if (sp.color !== 'rgb(255, 0, 0)') return T('Paragraf espesyal la poko wouj.', 'Le paragraphe spécial n\'est pas encore rouge.');
        if (parseInt(sp.fontWeight, 10) < 600) return T('Paragraf espesyal la poko an gra.', 'Le paragraphe spécial n\'est pas encore en gras.');
        if (win.getComputedStyle(ps[0]).color === 'rgb(255, 0, 0)') return T('Lòt paragraf yo vin wouj tou! Itilize selektè klas la <code>.espesyal</code>.', 'Les autres paragraphes sont rouges aussi ! Utilise le sélecteur de classe <code>.espesyal</code>.');
        return true;
      }
    },
{
      id: 'css-5',
      title: T('Modèl bwat la', 'Le modèle de boîte'),
      html: '<div class="bwat">Mwen se yon bwat 📦</div>',
      baseCss: '.bwat{background:#fff3c4;font-family:sans-serif}',
      theory: T(
        `<p>Nan CSS, <b>chak eleman se yon bwat</b>. Bwat la gen 3 kouch alantou kontni an:</p>
         <ul><li><code>padding</code> — espas <b>anndan</b>, ant kontni an ak bòdi a.</li>
         <li><code>border</code> — <b>bòdi</b> a (lajè, stil, koulè).</li>
         <li><code>margin</code> — espas <b>deyò</b>, ant bwat la ak lòt eleman.</li></ul>
         <pre>.bwat {
  padding: 10px;
  border: 2px dashed purple;
  margin: 15px;
}</pre>`,
        `<p>En CSS, <b>chaque élément est une boîte</b>. Elle a 3 couches autour du contenu :</p>
         <ul><li><code>padding</code> — l'espace <b>intérieur</b>, entre le contenu et la bordure.</li>
         <li><code>border</code> — la <b>bordure</b> (épaisseur, style, couleur).</li>
         <li><code>margin</code> — l'espace <b>extérieur</b>, entre la boîte et les autres éléments.</li></ul>
         <pre>.bwat {
  padding: 10px;
  border: 2px dashed purple;
  margin: 15px;
}</pre>`
      ),
      task: T('Bay <code>.bwat</code> la yon <code>padding</code> <b>20px</b> ak yon <code>border</code> <b>3px solid</b> (nenpòt koulè).', 'Donne à <code>.bwat</code> un <code>padding</code> de <b>20px</b> et une <code>border</code> <b>3px solid</b> (couleur au choix).'),
      hint: T('<code>border: 3px solid navy;</code>', '<code>border: 3px solid navy;</code>'),
      starter: '.bwat {\n  \n}\n',
      solution: '.bwat {\n  padding: 20px;\n  border: 3px solid navy;\n}\n',
      check: ({ doc, win }) => {
        const s = win.getComputedStyle(doc.querySelector('.bwat'));
        if (s.paddingTop !== '20px' || s.paddingLeft !== '20px') return T('<code>padding</code> la dwe <code>20px</code>.', 'Le <code>padding</code> doit être <code>20px</code>.');
        if (s.borderTopStyle !== 'solid') return T('Bòdi a dwe <code>solid</code>.', 'La bordure doit être <code>solid</code>.');
        if (s.borderTopWidth !== '3px') return T('Bòdi a dwe gen lajè <code>3px</code>.', 'La bordure doit faire <code>3px</code>.');
        return true;
      }
    },
{
      id: 'css-6',
      title: T('Flexbox', 'Flexbox'),
      html: '<div class="ranje">\n  <div class="kare">1</div>\n  <div class="kare">2</div>\n  <div class="kare">3</div>\n</div>',
      baseCss: '.kare{width:60px;height:60px;background:#6c7bff;color:#fff;font:700 24px sans-serif;display:grid;place-items:center;border-radius:10px;margin-bottom:6px}',
      theory: T(
        `<p><b>Flexbox</b> se yon zouti pou <b>ranje</b> eleman yo youn bò kote lòt fasilman.</p>
         <pre>.paran {
  display: flex;
  gap: 10px;
  justify-content: center;
}</pre>
         <ul><li><code>display: flex</code> — mete pitit yo sou yon liy.</li>
         <li><code>gap</code> — espas ant chak pitit.</li>
         <li><code>justify-content</code> — kote yo plase: <code>flex-start</code>, <code>center</code>, <code>space-between</code>…</li></ul>`,
        `<p><b>Flexbox</b> est un outil pour <b>aligner</b> facilement des éléments côte à côte.</p>
         <pre>.parent {
  display: flex;
  gap: 10px;
  justify-content: center;
}</pre>
         <ul><li><code>display: flex</code> — met les enfants sur une ligne.</li>
         <li><code>gap</code> — l'espace entre chaque enfant.</li>
         <li><code>justify-content</code> — leur placement : <code>flex-start</code>, <code>center</code>, <code>space-between</code>…</li></ul>`
      ),
      task: T('Mete kare yo youn bò kote lòt: bay <code>.ranje</code> <code>display: flex</code> ak yon <code>gap</code> <b>10px</b>.', 'Mets les carrés côte à côte : donne à <code>.ranje</code> <code>display: flex</code> et un <code>gap</code> de <b>10px</b>.'),
      hint: T('Se <code>.ranje</code> (paran an) ki bezwen <code>display: flex;</code>, pa <code>.kare</code> yo.', 'C\'est <code>.ranje</code> (le parent) qui a besoin de <code>display: flex;</code>, pas les <code>.kare</code>.'),
      starter: '.ranje {\n  \n}\n',
      solution: '.ranje {\n  display: flex;\n  gap: 10px;\n}\n',
      check: ({ doc, win }) => {
        const s = win.getComputedStyle(doc.querySelector('.ranje'));
        if (s.display !== 'flex') return T('<code>.ranje</code> poko <code>display: flex</code>.', '<code>.ranje</code> n\'est pas encore en <code>display: flex</code>.');
        if (s.columnGap !== '10px') return T('<code>gap</code> la dwe <code>10px</code>.', 'Le <code>gap</code> doit être <code>10px</code>.');
        return true;
      }
    },
{
      id: 'css-7',
      title: T('Efè lè w pase sou li (:hover)', 'Effet au survol (:hover)'),
      html: '<button class="bouton">Achte kounye a 🛒</button>',
      baseCss: '.bouton{background:#6c7bff;color:#fff;border:0;padding:12px 22px;border-radius:10px;font:700 18px sans-serif;cursor:pointer;transition:background .2s}',
      theory: T(
        `<p>Yon <b>pseudo-klas</b> chwazi yon eleman nan yon <b>sitiyasyon</b> espesyal. Li ekri ak <code>:</code> apre selektè a.</p>
         <pre>a:hover {
  color: orange;
}</pre>
         <ul><li><code>:hover</code> — lè sourit la pase sou eleman an.</li>
         <li><code>:active</code> — pandan y ap klike l.</li>
         <li><code>:focus</code> — lè eleman an chwazi (egz. yon input).</li></ul>
         <p>Sa bay itilizatè a yon siy ke bouton an <b>vivan</b>!</p>`,
        `<p>Une <b>pseudo-classe</b> sélectionne un élément dans une <b>situation</b> particulière. Elle s'écrit avec <code>:</code> après le sélecteur.</p>
         <pre>a:hover {
  color: orange;
}</pre>
         <ul><li><code>:hover</code> — quand la souris passe sur l'élément.</li>
         <li><code>:active</code> — pendant le clic.</li>
         <li><code>:focus</code> — quand l'élément est sélectionné (ex. un input).</li></ul>
         <p>Cela montre à l'utilisateur que le bouton est <b>vivant</b> !</p>`
      ),
      task: T('Lè sourit la pase sou <code>.bouton</code>, chanje <code>background-color</code> li (nenpòt koulè).', 'Quand la souris survole <code>.bouton</code>, change son <code>background-color</code> (couleur au choix).'),
      hint: T('<code>.bouton:hover { background-color: orange; }</code>', '<code>.bouton:hover { background-color: orange; }</code>'),
      starter: '',
      solution: '.bouton:hover {\n  background-color: #ff8a3d;\n}\n',
      check: ({ doc }) => {
        const rules = [...doc.styleSheets].flatMap(s => { try { return [...s.cssRules]; } catch (e) { return []; } });
        const r = rules.find(x => x.selectorText && /(\.bouton|button):hover/.test(x.selectorText));
        if (!r) return T('Mwen pa wè règ <code>.bouton:hover</code>.', 'Je ne vois pas de règle <code>.bouton:hover</code>.');
        if (!r.style.backgroundColor && !r.style.background) return T('Ajoute yon <code>background-color</code> nan règ <code>:hover</code> la.', 'Ajoute un <code>background-color</code> dans la règle <code>:hover</code>.');
        return true;
      }
    },
{
      id: 'css-8',
      title: T('Kwen won ak lonbraj', 'Coins arrondis et ombres'),
      html: '<div class="kat">\n  <h3>🌴 Labadi</h3>\n  <p>Yon bèl plaj nan Nò Ayiti.</p>\n</div>',
      baseCss: 'body{background:#eef1f8}.kat{background:#fff;padding:16px;width:220px;margin:10px}.kat h3{margin:0 0 6px}',
      theory: T(
        `<p>2 pwopriyete ki fè yon desen gen yon gade <b>modèn</b>:</p>
         <pre>.kat {
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}</pre>
         <ul><li><code>border-radius</code> — awondi kwen yo. <code>50%</code> fè yon sèk!</li>
         <li><code>box-shadow</code> — lonbraj: <i>deplase-x deplase-y flou koulè</i>.</li></ul>
         <p><code>rgba(0,0,0,0.2)</code> se nwa ak 20% opasite (transparan).</p>`,
        `<p>2 propriétés qui donnent un look <b>moderne</b> :</p>
         <pre>.kat {
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}</pre>
         <ul><li><code>border-radius</code> — arrondit les coins. <code>50%</code> fait un cercle !</li>
         <li><code>box-shadow</code> — l'ombre : <i>décalage-x décalage-y flou couleur</i>.</li></ul>
         <p><code>rgba(0,0,0,0.2)</code> est du noir à 20 % d'opacité (transparent).</p>`
      ),
      task: T('Bay <code>.kat</code> la <code>border-radius: 16px</code> ak yon <code>box-shadow</code>.', 'Donne à <code>.kat</code> un <code>border-radius: 16px</code> et une <code>box-shadow</code>.'),
      hint: T('<code>box-shadow: 0 4px 12px rgba(0,0,0,0.2);</code>', '<code>box-shadow: 0 4px 12px rgba(0,0,0,0.2);</code>'),
      starter: '.kat {\n  \n}\n',
      solution: '.kat {\n  border-radius: 16px;\n  box-shadow: 0 4px 12px rgba(0,0,0,0.2);\n}\n',
      check: ({ doc, win }) => {
        const s = win.getComputedStyle(doc.querySelector('.kat'));
        if (s.borderTopLeftRadius !== '16px') return T('<code>border-radius</code> la dwe <code>16px</code>.', 'Le <code>border-radius</code> doit être <code>16px</code>.');
        if (!s.boxShadow || s.boxShadow === 'none') return T('Kat la poko gen <code>box-shadow</code>.', 'La carte n\'a pas encore de <code>box-shadow</code>.');
        return true;
      }
    },
{
      id: 'css-9',
      title: T('CSS Grid', 'CSS Grid'),
      html: '<div class="galri">\n  <div class="bwat">🥭</div>\n  <div class="bwat">🍍</div>\n  <div class="bwat">🥥</div>\n  <div class="bwat">🍌</div>\n  <div class="bwat">🥑</div>\n  <div class="bwat">🍊</div>\n</div>',
      baseCss: '.bwat{background:#fff3c4;border-radius:10px;font-size:32px;text-align:center;padding:12px 0;margin-bottom:6px}',
      theory: T(
        `<p><b>Grid</b> ranje eleman yo an <b>ranje ak kolòn</b> an menm tan — pafè pou galri foto oswa tablo bò.</p>
         <pre>.paran {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}</pre>
         <ul><li><code>repeat(3, 1fr)</code> — 3 kolòn ki gen menm lajè.</li>
         <li><code>fr</code> — yon "fraksyon" espas ki disponib.</li>
         <li><code>200px 1fr</code> — 2 kolòn: youn fiks, lòt la pran rès la.</li></ul>`,
        `<p><b>Grid</b> range les éléments en <b>lignes et colonnes</b> à la fois — parfait pour une galerie photo ou un tableau de bord.</p>
         <pre>.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}</pre>
         <ul><li><code>repeat(3, 1fr)</code> — 3 colonnes de même largeur.</li>
         <li><code>fr</code> — une « fraction » de l'espace disponible.</li>
         <li><code>200px 1fr</code> — 2 colonnes : une fixe, l'autre prend le reste.</li></ul>`
      ),
      task: T('Fè <code>.galri</code> la vin yon grid ak <b>3 kolòn</b> egal epi <code>gap: 10px</code>.', 'Transforme <code>.galri</code> en grille de <b>3 colonnes</b> égales avec <code>gap: 10px</code>.'),
      hint: T('<code>grid-template-columns: repeat(3, 1fr);</code>', '<code>grid-template-columns: repeat(3, 1fr);</code>'),
      starter: '.galri {\n  \n}\n',
      solution: '.galri {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n}\n',
      check: ({ doc, win }) => {
        const s = win.getComputedStyle(doc.querySelector('.galri'));
        if (s.display !== 'grid') return T('<code>.galri</code> poko <code>display: grid</code>.', '<code>.galri</code> n\'est pas encore en <code>display: grid</code>.');
        const cols = s.gridTemplateColumns.split(' ').filter(Boolean).length;
        if (cols !== 3) return T(`Grid la gen ${cols} kolòn. Li dwe gen 3.`, `La grille a ${cols} colonne(s). Il en faut 3.`);
        if (s.columnGap !== '10px') return T('<code>gap</code> la dwe <code>10px</code>.', 'Le <code>gap</code> doit être <code>10px</code>.');
        return true;
      }
    },
{
      id: 'css-10',
      title: T('Responsive: telefòn ak òdinatè', 'Responsive : mobile et ordinateur'),
      html: '<div class="kolon">\n  <div class="bwat">📱 A</div>\n  <div class="bwat">💻 B</div>\n</div>',
      baseCss: '.kolon{display:flex;gap:10px}.bwat{flex:1;background:#d9f2ff;border-radius:10px;padding:20px;font:700 22px sans-serif;text-align:center}',
      theory: T(
        `<p>Plis pase mwatye moun sou entènèt itilize <b>telefòn</b>. Yon sit <b>responsive</b> adapte l ak gwosè ekran an.</p>
         <p>Yon <b>media query</b> aplike règ CSS <b>sèlman</b> si ekran an respekte yon kondisyon:</p>
         <pre>@media (max-width: 600px) {
  h1 {
    font-size: 20px;
  }
}</pre>
         <p>Sa vle di: "si ekran an <b>pa pi laj pase 600px</b> (telefòn), mete tit yo pi piti".</p>
         <p>Astis: nan <code>flex</code>, <code>flex-direction: column</code> mete eleman yo <b>youn anba lòt</b>.</p>`,
        `<p>Plus de la moitié des internautes utilisent un <b>téléphone</b>. Un site <b>responsive</b> s'adapte à la taille de l'écran.</p>
         <p>Une <b>media query</b> applique des règles CSS <b>seulement</b> si l'écran respecte une condition :</p>
         <pre>@media (max-width: 600px) {
  h1 {
    font-size: 20px;
  }
}</pre>
         <p>Cela veut dire : « si l'écran <b>ne dépasse pas 600px</b> de large (mobile), réduis les titres ».</p>
         <p>Astuce : en <code>flex</code>, <code>flex-direction: column</code> place les éléments <b>les uns sous les autres</b>.</p>`
      ),
      task: T('Ekri yon <code>@media (max-width: 600px)</code> ki mete <code>.kolon</code> an <code>flex-direction: column</code>.', 'Écris une <code>@media (max-width: 600px)</code> qui passe <code>.kolon</code> en <code>flex-direction: column</code>.'),
      hint: T('Règ <code>.kolon { … }</code> la dwe <b>anndan</b> akolad <code>@media</code> a.', 'La règle <code>.kolon { … }</code> doit être <b>dans</b> les accolades de la <code>@media</code>.'),
      starter: '',
      solution: '@media (max-width: 600px) {\n  .kolon {\n    flex-direction: column;\n  }\n}\n',
      check: ({ doc }) => {
        const rules = [...doc.styleSheets].flatMap(s => { try { return [...s.cssRules]; } catch (e) { return []; } });
        const media = rules.filter(r => r.media && /max-width\s*:\s*600px/.test(r.conditionText || r.media.mediaText));
        if (!media.length) return T('Mwen pa wè <code>@media (max-width: 600px)</code>.', 'Je ne vois pas <code>@media (max-width: 600px)</code>.');
        const inner = media.flatMap(m => [...m.cssRules]).find(r => r.selectorText && /\.kolon\b/.test(r.selectorText));
        if (!inner) return T('Mete yon règ <code>.kolon { … }</code> <b>anndan</b> media query a.', 'Mets une règle <code>.kolon { … }</code> <b>dans</b> la media query.');
        if (inner.style.flexDirection !== 'column') return T('Règ la dwe gen <code>flex-direction: column;</code>', 'La règle doit contenir <code>flex-direction: column;</code>');
        return true;
      }
    }
  ]
});

addDetails({
  'css-1': {
    extra: T(
      `<p>Gen 3 fason pou mete CSS:</p>
       <pre>&lt;!-- 1. Fichye apa (pi bon an!) --&gt;
&lt;link rel="stylesheet" href="style.css"&gt;

&lt;!-- 2. Nan &lt;head&gt; ak &lt;style&gt; --&gt;
&lt;style&gt; h1 { color: red; } &lt;/style&gt;

&lt;!-- 3. Dirèkteman sou eleman an (evite sa) --&gt;
&lt;h1 style="color: red;"&gt;…&lt;/h1&gt;</pre>
       <p>Navigatè a konnen <b>140+ non koulè</b>: <code>tomato</code>, <code>gold</code>, <code>navy</code>, <code>teal</code>, <code>crimson</code>…</p>`,
      `<p>Il existe 3 façons d'ajouter du CSS :</p>
       <pre>&lt;!-- 1. Fichier séparé (le meilleur !) --&gt;
&lt;link rel="stylesheet" href="style.css"&gt;

&lt;!-- 2. Dans &lt;head&gt; avec &lt;style&gt; --&gt;
&lt;style&gt; h1 { color: red; } &lt;/style&gt;

&lt;!-- 3. Directement sur l'élément (à éviter) --&gt;
&lt;h1 style="color: red;"&gt;…&lt;/h1&gt;</pre>
       <p>Le navigateur connaît <b>plus de 140 noms de couleurs</b> : <code>tomato</code>, <code>gold</code>, <code>navy</code>, <code>teal</code>, <code>crimson</code>…</p>`
    ),
    tips: T(
      `<li>Se <code>color</code> (angle), pa <code>colour</code> ni <code>couleur</code>.</li>
       <li>Si yon deklarasyon gen yon erè, navigatè a <b>inyore l</b> san di w anyen — tcheke òtograf la.</li>`,
      `<li>C'est <code>color</code> (anglais), pas <code>colour</code> ni <code>couleur</code>.</li>
       <li>Si une déclaration contient une erreur, le navigateur l'<b>ignore</b> en silence — vérifie l'orthographe.</li>`
    ),
    recap: T(
      `<li><code>selektè { pwopriyete: valè; }</code></li><li><code>color</code> = koulè tèks la.</li>`,
      `<li><code>sélecteur { propriété: valeur; }</code></li><li><code>color</code> = couleur du texte.</li>`
    )
  },
  'css-2': {
    extra: T(
      `<p>Koulè <b>hex</b> yo: <code>#RRGGBB</code> — wouj, vèt, ble, chak soti <code>00</code> (pa ditou) rive <code>ff</code> (nèt).</p>
       <pre>#000000  nwa       #ffffff  blan
#ff0000  wouj      #00ff00  vèt
#0000ff  ble       #ffd700  lò</pre>
       <p>Ou ka mete yon <b>degrade</b> tou:</p>
       <pre>body {
  background: linear-gradient(to right, #00209f, #d21034);
}</pre>
       <p>(Ble ak wouj drapo Ayiti! 🇭🇹)</p>`,
      `<p>Les couleurs <b>hex</b> : <code>#RRVVBB</code> — rouge, vert, bleu, chacun de <code>00</code> (rien) à <code>ff</code> (maximum).</p>
       <pre>#000000  noir      #ffffff  blanc
#ff0000  rouge     #00ff00  vert
#0000ff  bleu      #ffd700  or</pre>
       <p>Tu peux aussi mettre un <b>dégradé</b> :</p>
       <pre>body {
  background: linear-gradient(to right, #00209f, #d21034);
}</pre>
       <p>(Le bleu et le rouge du drapeau haïtien ! 🇭🇹)</p>`
    ),
    tips: T(
      `<li>Pa bliye <code>#</code> devan yon koulè hex.</li>
       <li>Asire w tèks la ka li sou fon an (<b>kontras</b>): pa mete tèks jòn sou fon blan!</li>`,
      `<li>N'oublie pas le <code>#</code> devant une couleur hex.</li>
       <li>Vérifie que le texte reste lisible sur le fond (<b>contraste</b>) : pas de texte jaune sur fond blanc !</li>`
    ),
    recap: T(
      `<li><code>background-color</code> = koulè fon.</li><li>Koulè: non, hex <code>#…</code>, <code>rgb()</code>.</li><li><code>/* … */</code> = kòmantè.</li>`,
      `<li><code>background-color</code> = couleur de fond.</li><li>Couleurs : nom, hex <code>#…</code>, <code>rgb()</code>.</li><li><code>/* … */</code> = commentaire.</li>`
    )
  },
  'css-3': {
    extra: T(
      `<p>Plis pwopriyete tèks:</p>
       <pre>p {
  font-family: Georgia, serif;  /* plizyè chwa */
  font-weight: bold;            /* gra */
  font-style: italic;           /* italik */
  line-height: 1.6;             /* espas ant liy */
  text-decoration: underline;   /* souliye */
  text-transform: uppercase;    /* MAJISKIL */
}</pre>
       <p>Inite gwosè: <code>px</code> (fiks), <code>em</code>/<code>rem</code> (relatif a gwosè tèks la — pi bon pou aksesibilite), <code>%</code>.</p>`,
      `<p>Plus de propriétés de texte :</p>
       <pre>p {
  font-family: Georgia, serif;  /* plusieurs choix */
  font-weight: bold;            /* gras */
  font-style: italic;           /* italique */
  line-height: 1.6;             /* interligne */
  text-decoration: underline;   /* souligné */
  text-transform: uppercase;    /* MAJUSCULES */
}</pre>
       <p>Unités : <code>px</code> (fixe), <code>em</code>/<code>rem</code> (relatif à la taille du texte — meilleur pour l'accessibilité), <code>%</code>.</p>`
    ),
    tips: T(
      `<li>Pa mete espas ant nonm nan ak inite a: <code>24px</code>, pa <code>24 px</code>.</li>
       <li>Si non yon font gen espas, mete l ant gimè: <code>font-family: "Times New Roman";</code></li>`,
      `<li>Pas d'espace entre le nombre et l'unité : <code>24px</code>, pas <code>24 px</code>.</li>
       <li>Si le nom d'une police contient des espaces, mets-le entre guillemets : <code>font-family: "Times New Roman";</code></li>`
    ),
    recap: T(
      `<li><code>font-size</code>, <code>text-align</code>, <code>font-family</code>, <code>font-weight</code>.</li><li>Yon règ ka gen plizyè deklarasyon.</li>`,
      `<li><code>font-size</code>, <code>text-align</code>, <code>font-family</code>, <code>font-weight</code>.</li><li>Une règle peut avoir plusieurs déclarations.</li>`
    )
  },
  'css-4': {
    extra: T(
      `<p>Lòt selektè enpòtan:</p>
       <pre>#tit { }          /* id (yon sèl eleman) */
h1, h2 { }        /* plizyè selektè ansanm */
nav a { }         /* tout a ki ANNDAN nav */
*  { }            /* tout eleman */</pre>
       <p><b>Priyorite</b> (spesifisite): si 2 règ chwazi menm eleman, <code>#id</code> genyen sou <code>.klas</code>, ki genyen sou <code>baliz</code>. Si yo egal, <b>dènye</b> règ la genyen — se sa "Cascading" vle di.</p>`,
      `<p>Autres sélecteurs importants :</p>
       <pre>#titre { }        /* id (un seul élément) */
h1, h2 { }        /* plusieurs sélecteurs */
nav a { }         /* tous les a DANS nav */
*  { }            /* tous les éléments */</pre>
       <p><b>Priorité</b> (spécificité) : si 2 règles visent le même élément, <code>#id</code> l'emporte sur <code>.classe</code>, qui l'emporte sur <code>balise</code>. À égalité, la <b>dernière</b> règle gagne — c'est le sens de « Cascading ».</p>`
    ),
    tips: T(
      `<li>Nan HTML: <code>class="espesyal"</code> (san pwen). Nan CSS: <code>.espesyal</code> (ak pwen).</li>
       <li>Non klas yo sansib a majiskil: <code>.Kat</code> ≠ <code>.kat</code>.</li>`,
      `<li>En HTML : <code>class="espesyal"</code> (sans point). En CSS : <code>.espesyal</code> (avec point).</li>
       <li>Les noms de classes sont sensibles à la casse : <code>.Carte</code> ≠ <code>.carte</code>.</li>`
    ),
    recap: T(
      `<li><code>.klas</code>, <code>#id</code>, <code>baliz</code>.</li><li>Pi espesifik = pi fò.</li>`,
      `<li><code>.classe</code>, <code>#id</code>, <code>balise</code>.</li><li>Plus spécifique = plus fort.</li>`
    )
  },
  'css-5': {
    extra: T(
      `<p>Ou ka bay chak kote yon valè diferan:</p>
       <pre>padding: 10px 20px;           /* anwo/anba  goch/dwat */
padding: 5px 10px 15px 20px;  /* anwo dwat anba goch (sans revèy) */
margin-top: 30px;             /* yon sèl kote */
margin: 0 auto;               /* santre yon blòk orizontalman */</pre>
       <p>⚠️ Pa defo, <code>width</code> pa enkli padding ak border. Pou rann kalkil yo fasil, pwofesyonèl yo mete:</p>
       <pre>* { box-sizing: border-box; }</pre>`,
      `<p>Tu peux donner une valeur différente à chaque côté :</p>
       <pre>padding: 10px 20px;           /* haut/bas  gauche/droite */
padding: 5px 10px 15px 20px;  /* haut droite bas gauche (sens horaire) */
margin-top: 30px;             /* un seul côté */
margin: 0 auto;               /* centre un bloc horizontalement */</pre>
       <p>⚠️ Par défaut, <code>width</code> n'inclut pas padding et border. Pour simplifier les calculs, les pros mettent :</p>
       <pre>* { box-sizing: border-box; }</pre>`
    ),
    tips: T(
      `<li>Lòd <code>border</code> la: <b>lajè stil koulè</b> — <code>3px solid red</code>.</li>
       <li>San <code>solid</code> (oswa <code>dashed</code>, <code>dotted</code>), bòdi a p ap parèt!</li>`,
      `<li>Ordre de <code>border</code> : <b>épaisseur style couleur</b> — <code>3px solid red</code>.</li>
       <li>Sans <code>solid</code> (ou <code>dashed</code>, <code>dotted</code>), la bordure n'apparaît pas !</li>`
    ),
    recap: T(
      `<li>Kontni → <code>padding</code> → <code>border</code> → <code>margin</code>.</li><li><code>box-sizing: border-box</code> fè lavi w pi fasil.</li>`,
      `<li>Contenu → <code>padding</code> → <code>border</code> → <code>margin</code>.</li><li><code>box-sizing: border-box</code> simplifie la vie.</li>`
    )
  },
  'css-6': {
    extra: T(
      `<p>Aliyman vètikal ak <code>align-items</code>:</p>
       <pre>.paran {
  display: flex;
  justify-content: space-between; /* sou liy lan (orizontal) */
  align-items: center;            /* travès (vètikal) */
  flex-wrap: wrap;                /* ale nan liy si pa gen plas */
}
.pitit { flex: 1; }               /* chak pitit pran menm espas */</pre>
       <p>Astis klasik pou santre nenpòt bagay: <code>display:flex; justify-content:center; align-items:center;</code></p>`,
      `<p>Alignement vertical avec <code>align-items</code> :</p>
       <pre>.parent {
  display: flex;
  justify-content: space-between; /* sur l'axe principal (horizontal) */
  align-items: center;            /* axe secondaire (vertical) */
  flex-wrap: wrap;                /* passe à la ligne si pas de place */
}
.enfant { flex: 1; }              /* chaque enfant prend la même place */</pre>
       <p>Astuce classique pour tout centrer : <code>display:flex; justify-content:center; align-items:center;</code></p>`
    ),
    tips: T(
      `<li><code>display: flex</code> ale sou <b>paran an</b>, pa sou pitit yo.</li>
       <li><code>justify-content</code> = direksyon prensipal; <code>align-items</code> = lòt direksyon an.</li>`,
      `<li><code>display: flex</code> se met sur le <b>parent</b>, pas sur les enfants.</li>
       <li><code>justify-content</code> = axe principal ; <code>align-items</code> = l'autre axe.</li>`
    ),
    recap: T(
      `<li>Flexbox = ranje eleman sou yon liy.</li><li><code>gap</code>, <code>justify-content</code>, <code>align-items</code>.</li>`,
      `<li>Flexbox = aligner des éléments sur une ligne.</li><li><code>gap</code>, <code>justify-content</code>, <code>align-items</code>.</li>`
    )
  },
  'css-7': {
    extra: T(
      `<p>Ajoute yon <b>tranzisyon</b> pou chanjman an fèt dousman:</p>
       <pre>.bouton {
  transition: background-color 0.3s, transform 0.2s;
}
.bouton:hover {
  transform: scale(1.05);  /* grandi yon ti kras */
}</pre>
       <p>Lòt pseudo-klas: <code>:first-child</code>, <code>:last-child</code>, <code>:nth-child(2)</code>, <code>:nth-child(odd)</code> (tout enpè — bon pou tablo ak liy koulè altène).</p>`,
      `<p>Ajoute une <b>transition</b> pour que le changement soit progressif :</p>
       <pre>.bouton {
  transition: background-color 0.3s, transform 0.2s;
}
.bouton:hover {
  transform: scale(1.05);  /* grossit un peu */
}</pre>
       <p>Autres pseudo-classes : <code>:first-child</code>, <code>:last-child</code>, <code>:nth-child(2)</code>, <code>:nth-child(odd)</code> (tous les impairs — utile pour des lignes de tableau alternées).</p>`
    ),
    tips: T(
      `<li>Pa mete espas: <code>.bouton:hover</code>, pa <code>.bouton :hover</code>.</li>
       <li>Sou telefòn pa gen sourit: pa kache enfòmasyon enpòtan dèyè <code>:hover</code>.</li>`,
      `<li>Pas d'espace : <code>.bouton:hover</code>, pas <code>.bouton :hover</code>.</li>
       <li>Sur mobile il n'y a pas de souris : ne cache pas d'info importante derrière <code>:hover</code>.</li>`
    ),
    recap: T(
      `<li><code>:hover</code>, <code>:active</code>, <code>:focus</code>.</li><li><code>transition</code> pou animasyon dous.</li>`,
      `<li><code>:hover</code>, <code>:active</code>, <code>:focus</code>.</li><li><code>transition</code> pour une animation douce.</li>`
    )
  },
  'css-8': {
    extra: T(
      `<p>Ou ka fè yon imaj won (avata):</p>
       <pre>.avata {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;  /* imaj la pa defòme */
}</pre>
       <p>Lonbraj sou tèks: <code>text-shadow: 2px 2px 4px rgba(0,0,0,0.3);</code>. Plizyè lonbraj: separe yo ak vigil.</p>`,
      `<p>Tu peux faire une image ronde (avatar) :</p>
       <pre>.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;  /* l'image n'est pas déformée */
}</pre>
       <p>Ombre sur le texte : <code>text-shadow: 2px 2px 4px rgba(0,0,0,0.3);</code>. Plusieurs ombres : sépare-les par des virgules.</p>`
    ),
    tips: T(
      `<li>Lonbraj ki twò nwa fè desen an sanble lou — itilize yon opasite fèb (0.1 – 0.25).</li>`,
      `<li>Une ombre trop foncée alourdit le design — utilise une faible opacité (0,1 – 0,25).</li>`
    ),
    recap: T(
      `<li><code>border-radius</code> = kwen won.</li><li><code>box-shadow: x y flou koulè</code>.</li>`,
      `<li><code>border-radius</code> = coins arrondis.</li><li><code>box-shadow: x y flou couleur</code>.</li>`
    )
  },
  'css-9': {
    extra: T(
      `<p>Grid otomatik ki adapte l pou kont li (pa bezwen media query!):</p>
       <pre>.galri {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 12px;
}</pre>
       <p>Yon eleman ka pran plizyè kolòn: <code>grid-column: span 2;</code></p>
       <p><b>Flex oswa Grid?</b> Flex pou <b>yon dimansyon</b> (yon liy), Grid pou <b>de dimansyon</b> (liy + kolòn).</p>`,
      `<p>Une grille automatique qui s'adapte toute seule (pas besoin de media query !) :</p>
       <pre>.galerie {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 12px;
}</pre>
       <p>Un élément peut occuper plusieurs colonnes : <code>grid-column: span 2;</code></p>
       <p><b>Flex ou Grid ?</b> Flex pour <b>une dimension</b> (une ligne), Grid pour <b>deux dimensions</b> (lignes + colonnes).</p>`
    ),
    tips: T(
      `<li>Se <code>grid-template-columns</code> (ak <b>s</b>).</li><li><code>repeat(3, 1fr)</code> — vigil la enpòtan.</li>`,
      `<li>C'est <code>grid-template-columns</code> (avec un <b>s</b>).</li><li><code>repeat(3, 1fr)</code> — la virgule est importante.</li>`
    ),
    recap: T(
      `<li><code>display: grid</code> + <code>grid-template-columns</code>.</li><li><code>fr</code> = fraksyon espas.</li>`,
      `<li><code>display: grid</code> + <code>grid-template-columns</code>.</li><li><code>fr</code> = fraction d'espace.</li>`
    )
  },
  'css-10': {
    extra: T(
      `<p>Metòd <b>"mobile first"</b>: ekri CSS pou telefòn an premye, epi ajoute règ pou gwo ekran ak <code>min-width</code>:</p>
       <pre>.kolon { display: flex; flex-direction: column; }

@media (min-width: 768px) {
  .kolon { flex-direction: row; }
}</pre>
       <p>Pa bliye baliz sa a nan <code>&lt;head&gt;</code>, sinon telefòn nan ap montre paj la tou piti:</p>
       <pre>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</pre>
       <p>Gwosè komen: telefòn &lt; 600px, tablèt 600–1024px, òdinatè &gt; 1024px.</p>`,
      `<p>La méthode <b>« mobile first »</b> : écris d'abord le CSS pour mobile, puis ajoute des règles pour grand écran avec <code>min-width</code> :</p>
       <pre>.kolon { display: flex; flex-direction: column; }

@media (min-width: 768px) {
  .kolon { flex-direction: row; }
}</pre>
       <p>N'oublie pas cette balise dans le <code>&lt;head&gt;</code>, sinon le téléphone affiche la page en tout petit :</p>
       <pre>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</pre>
       <p>Tailles courantes : mobile &lt; 600px, tablette 600–1024px, ordinateur &gt; 1024px.</p>`
    ),
    tips: T(
      `<li>Règ ki anndan <code>@media</code> bezwen <b>de nivo</b> akolad: youn pou media a, youn pou règ la.</li>
       <li>Mete media query yo <b>apre</b> règ nòmal yo, pou yo ka ranplase yo.</li>`,
      `<li>Les règles dans <code>@media</code> ont <b>deux niveaux</b> d'accolades : un pour la media, un pour la règle.</li>
       <li>Place les media queries <b>après</b> les règles normales, pour pouvoir les remplacer.</li>`
    ),
    recap: T(
      `<li><code>@media (max-width: …)</code> = règ pou ti ekran.</li><li>Meta viewport obligatwa.</li><li>🎉 Ou fini mwa 1! Pwochen: JavaScript.</li>`,
      `<li><code>@media (max-width: …)</code> = règles pour petits écrans.</li><li>Meta viewport obligatoire.</li><li>🎉 Tu as fini le mois 1 ! Ensuite : JavaScript.</li>`
    )
  }
});
