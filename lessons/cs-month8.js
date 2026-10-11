/* ======================= MWA 8 — C# Pwojè ak mond reyèl (semèn 29-32) ======================= */
(() => {
  const ASYNC = ['System.Threading.Tasks'];

  /* ---- Kòd pwojè bank lan, etap pa etap / code du projet bancaire, étape par étape ---- */
  const KONT_BAZ = 'class Kont\n{\n    public string Nimewo { get; }\n    public string Pwopriyete { get; }\n    public decimal Solde { get; private set; }\n\n    public Kont(string nimewo, string pwopriyete)\n    {\n        Nimewo = nimewo;\n        Pwopriyete = pwopriyete;\n    }\n';
  const KONT_OPS = '\n    public void Depoze(decimal montan)\n    {\n        if (montan <= 0) throw new ArgumentException("Montan an dwe pozitif");\n        Solde += montan;\n    }\n\n    public void Retire(decimal montan)\n    {\n        if (montan <= 0) throw new ArgumentException("Montan an dwe pozitif");\n        if (montan > Solde) throw new InvalidOperationException("Lajan pa ase");\n        Solde -= montan;\n    }\n';
  const KONT_OPS_ISTORIK = '\n    public List<string> Istorik { get; } = new List<string>();\n\n    public void Depoze(decimal montan)\n    {\n        if (montan <= 0) throw new ArgumentException("Montan an dwe pozitif");\n        Solde += montan;\n        Istorik.Add($"+{montan} HTG");\n    }\n\n    public void Retire(decimal montan)\n    {\n        if (montan <= 0) throw new ArgumentException("Montan an dwe pozitif");\n        if (montan > Solde) throw new InvalidOperationException("Lajan pa ase");\n        Solde -= montan;\n        Istorik.Add($"-{montan} HTG");\n    }\n';
  const KONT1 = KONT_BAZ + '}';
  const KONT2 = KONT_BAZ + KONT_OPS + '}';
  const KONT3 = KONT_BAZ + KONT_OPS_ISTORIK + '}';
  const BANK4 = 'class Bank\n{\n    private List<Kont> kont = new List<Kont>();\n\n    public Kont OuvriKont(string pwopriyete)\n    {\n        var k = new Kont((kont.Count + 1).ToString("D3"), pwopriyete);\n        kont.Add(k);\n        return k;\n    }\n\n    public Kont? Jwenn(string nimewo)\n    {\n        return kont.FirstOrDefault(k => k.Nimewo == nimewo);\n    }\n';
  const BANK5_TRANSFE = '\n    public void Transfere(string de, string a, decimal montan)\n    {\n        Kont? sous = Jwenn(de);\n        Kont? dest = Jwenn(a);\n        if (sous == null || dest == null)\n        {\n            throw new InvalidOperationException("Kont pa egziste");\n        }\n\n        sous.Retire(montan);\n        dest.Depoze(montan);\n    }\n';

  /* ---- Pwojè final: elèv yo / projet final : les élèves ---- */
  const ELEV = 'class Elev\n{\n    public string Non { get; }\n    public List<double> Notes { get; }\n\n    public Elev(string non, params double[] notes)\n    {\n        Non = non;\n        Notes = notes.ToList();\n    }\n\n    public double Mwayen()\n    {\n        return Notes.Average();\n    }\n}';
  const ELEV_STARTER = 'class Elev\n{\n    public string Non { get; }\n    public List<double> Notes { get; }\n\n    public Elev(string non, params double[] notes)\n    {\n        Non = non;\n        Notes = notes.ToList();\n    }\n\n    // ✍️ Mwayen()\n}';
  const KLAS_MAIN = 'var klas = new List<Elev>\n{\n    new Elev("Ana", 85, 92, 78),\n    new Elev("Jak", 55, 61, 48),\n    new Elev("Lise", 95, 88, 99)\n};\n';
  const parseElev = code => [...code.matchAll(/new\s+Elev\s*\(\s*"([^"]*)"\s*((?:,\s*[\d.]+\s*)+)\)/g)].map(m => {
    const n = m[2].split(',').map(parseFloat).filter(x => !isNaN(x));
    return { non: m[1], avg: n.reduce((a, b) => a + b, 0) / (n.length || 1) };
  });

  findModule('cs').lessons.push(
    /* ---------- Semèn 29: Asenkwon ---------- */
    {
      id: 'cs-async',
      title: T('async ak await', 'async et await'),
      theory: T(
        `<p>Kèk operasyon pran <b>tan</b>: telechaje yon fichye, rele yon API, li yon baz done. Si pwogram nan <b>tann</b> san fè anyen, aplikasyon an <b>jele</b> 🥶. Solisyon: kòd <b>asenkwon</b>.</p>
         <pre>using System.Threading.Tasks;

class Program
{
    static async Task Main()          // Main ka async tou!
    {
        Console.WriteLine("Ap telechaje…");
        await Task.Delay(2000);        // tann 2 s SAN bloke
        Console.WriteLine("Fini!");
    }
}</pre>
         <ul><li><code>async</code> — make metòd la kòm asenkwon.</li>
         <li><code>Task</code> — reprezante yon travay k ap fèt (tankou <code>Promise</code> nan JS).</li>
         <li><code>await</code> — tann travay la fini, epi kontinye.</li></ul>`,
        `<p>Certaines opérations prennent du <b>temps</b> : télécharger un fichier, appeler une API, lire une base de données. Si le programme <b>attend</b> sans rien faire, l'application <b>gèle</b> 🥶. Solution : le code <b>asynchrone</b>.</p>
         <pre>using System.Threading.Tasks;

class Program
{
    static async Task Main()          // Main peut aussi être async !
    {
        Console.WriteLine("Téléchargement…");
        await Task.Delay(2000);        // attend 2 s SANS bloquer
        Console.WriteLine("Terminé !");
    }
}</pre>
         <ul><li><code>async</code> — marque la méthode comme asynchrone.</li>
         <li><code>Task</code> — représente un travail en cours (comme une <code>Promise</code> en JS).</li>
         <li><code>await</code> — attend la fin du travail, puis continue.</li></ul>`
      ),
      task: T(
        'Nan <code>static async Task Main()</code>, afiche <b>"Ap telechaje…"</b>, <code>await Task.Delay(1000);</code>, epi afiche <b>"Fini!"</b>.',
        'Dans <code>static async Task Main()</code>, affiche <b>"Téléchargement…"</b>, <code>await Task.Delay(1000);</code>, puis affiche <b>"Terminé !"</b>.'
      ),
      hint: T('3 liy: <code>Console.WriteLine</code>, <code>await Task.Delay(1000);</code>, <code>Console.WriteLine</code>.', '3 lignes : <code>Console.WriteLine</code>, <code>await Task.Delay(1000);</code>, <code>Console.WriteLine</code>.'),
      starter: csProg({ usings: ASYNC, asyncMain: true }),
      solution: csProg({ usings: ASYNC, asyncMain: true, main: 'Console.WriteLine("Ap telechaje…");\nawait Task.Delay(1000);\nConsole.WriteLine("Fini!");' }),
      output: ({ code }) => [...code.matchAll(/Console\.WriteLine\s*\(\s*"([^"]*)"/g)].map(m => m[1]).join('\n⏳ …\n'),
      check: need(
        R(/static\s+async\s+Task\s+Main\s*\(/, 'Main dwe <code>static async Task Main()</code>.', 'Main doit être <code>static async Task Main()</code>.'),
        R(/await\s+Task\.Delay\s*\(\s*\d+\s*\)\s*;/, 'Ekri <code>await Task.Delay(1000);</code>', 'Écris <code>await Task.Delay(1000);</code>'),
        R(c => /Console\.WriteLine[\s\S]*await\s+Task\.Delay[\s\S]*Console\.WriteLine/.test(csMainBody(c.clean)), 'Afiche yon mesaj <b>anvan</b> ak <b>apre</b> <code>await</code> la.', 'Affiche un message <b>avant</b> et <b>après</b> le <code>await</code>.')
      ),
      tips: T(`<li><code>await</code> mache sèlman nan yon metòd <code>async</code>.</li><li>Evite <code>async void</code> (sof pou evènman) — itilize <code>async Task</code>.</li><li>Pa itilize <code>Thread.Sleep</code> nan kòd async — li bloke tout bagay.</li>`, `<li><code>await</code> ne marche que dans une méthode <code>async</code>.</li><li>Évite <code>async void</code> (sauf pour les événements) — utilise <code>async Task</code>.</li><li>N'utilise pas <code>Thread.Sleep</code> dans du code async — il bloque tout.</li>`),
      recap: T(`<li><code>async Task</code> + <code>await</code> = tann san bloke.</li>`, `<li><code>async Task</code> + <code>await</code> = attendre sans bloquer.</li>`)
    },
    {
      id: 'cs-asyncresult',
      title: T('Task<T>: rezilta asenkwon', 'Task<T> : résultats asynchrones'),
      theory: T(
        `<p>Yon metòd async ki <b>retounen</b> yon valè itilize <code>Task&lt;T&gt;</code>:</p>
         <pre>static async Task&lt;int&gt; JwennTanperatiAsync(string vil)
{
    await Task.Delay(500);     // simile yon apèl rezo
    return 31;                 // retounen yon int (pa Task!)
}

int t = await JwennTanperatiAsync("Pòtoprens");
Console.WriteLine($"{t}°C");</pre>
         <p>Konvansyon: non metòd async yo fini ak <b>Async</b>. Ou <code>return</code> valè a dirèkteman — C# mete l nan <code>Task</code> la pou ou.</p>`,
        `<p>Une méthode async qui <b>renvoie</b> une valeur utilise <code>Task&lt;T&gt;</code> :</p>
         <pre>static async Task&lt;int&gt; ObtenirTemperatureAsync(string ville)
{
    await Task.Delay(500);     // simule un appel réseau
    return 31;                 // renvoie un int (pas une Task !)
}

int t = await ObtenirTemperatureAsync("Port-au-Prince");
Console.WriteLine($"{t}°C");</pre>
         <p>Convention : les méthodes async finissent par <b>Async</b>. On fait <code>return</code> de la valeur directement — C# l'emballe dans la <code>Task</code>.</p>`
      ),
      task: T(
        'Ekri <code>static async Task&lt;int&gt; KareAsync(int n)</code> ki tann 500 ms epi retounen <code>n * n</code>. Nan Main: <code>int r = await KareAsync(7);</code> epi afiche <code>r</code>.',
        'Écris <code>static async Task&lt;int&gt; KareAsync(int n)</code> qui attend 500 ms puis renvoie <code>n * n</code>. Dans Main : <code>int r = await KareAsync(7);</code> et affiche <code>r</code>.'
      ),
      hint: T('<code>await Task.Delay(500); return n * n;</code>', '<code>await Task.Delay(500); return n * n;</code>'),
      starter: csProg({ usings: ASYNC, asyncMain: true }),
      solution: csProg({ usings: ASYNC, asyncMain: true, main: 'int r = await KareAsync(7);\nConsole.WriteLine(r);', inside: 'static async Task<int> KareAsync(int n)\n{\n    await Task.Delay(500);\n    return n * n;\n}' }),
      output: '49',
      check: need(
        R(/static\s+async\s+Task\s*<\s*int\s*>\s+KareAsync\s*\(\s*int\s+n\s*\)/, 'Siyati a: <code>static async Task&lt;int&gt; KareAsync(int n)</code>', 'Signature : <code>static async Task&lt;int&gt; KareAsync(int n)</code>'),
        R(/await\s+Task\.Delay\s*\(\s*500\s*\)/, 'Tann ak <code>await Task.Delay(500);</code>', 'Attends avec <code>await Task.Delay(500);</code>'),
        R(/return\s+n\s*\*\s*n\s*;/, 'Retounen <code>n * n</code>.', 'Renvoie <code>n * n</code>.'),
        R(inMain(/int\s+r\s*=\s*await\s+KareAsync\s*\(\s*7\s*\)\s*;|var\s+r\s*=\s*await\s+KareAsync\s*\(\s*7\s*\)\s*;/), 'Nan Main: <code>int r = await KareAsync(7);</code>', 'Dans Main : <code>int r = await KareAsync(7);</code>')
      ),
      tips: T(`<li>Si w bliye <code>await</code>, <code>r</code> ap yon <code>Task&lt;int&gt;</code>, pa yon <code>int</code> — erè CS0029.</li>`, `<li>Si tu oublies <code>await</code>, <code>r</code> sera une <code>Task&lt;int&gt;</code>, pas un <code>int</code> — erreur CS0029.</li>`),
      recap: T(`<li><code>async Task&lt;T&gt;</code> → <code>return valè;</code> → <code>T x = await M();</code></li>`, `<li><code>async Task&lt;T&gt;</code> → <code>return valeur;</code> → <code>T x = await M();</code></li>`)
    },
    {
      id: 'cs-whenall',
      title: T('Plizyè travay an paralèl', 'Plusieurs tâches en parallèle'),
      theory: T(
        `<p>Si w <code>await</code> youn apre lòt, travay yo fèt <b>youn apre lòt</b>: 1 s + 1.5 s = 2.5 s. Ak <code>Task.WhenAll</code>, yo fèt <b>an menm tan</b>: 1.5 s sèlman! ⚡</p>
         <pre>Task&lt;string&gt; t1 = TelechajeAsync("foto.jpg", 1000);   // kòmanse
Task&lt;string&gt; t2 = TelechajeAsync("videyo.mp4", 1500); // kòmanse tou

string[] rezilta = await Task.WhenAll(t1, t2);  // tann TOU DE

foreach (var r in rezilta)
    Console.WriteLine(r);</pre>
         <p>Remake: nou <b>pa</b> mete <code>await</code> lè nou kreye t1 ak t2 — sa pèmèt yo kòmanse ansanm.</p>`,
        `<p>Si on fait <code>await</code> l'un après l'autre, les travaux se font <b>en série</b> : 1 s + 1,5 s = 2,5 s. Avec <code>Task.WhenAll</code>, ils se font <b>en même temps</b> : 1,5 s seulement ! ⚡</p>
         <pre>Task&lt;string&gt; t1 = TelechargerAsync("photo.jpg", 1000);   // démarre
Task&lt;string&gt; t2 = TelechargerAsync("video.mp4", 1500);   // démarre aussi

string[] resultats = await Task.WhenAll(t1, t2);  // attend LES DEUX

foreach (var r in resultats)
    Console.WriteLine(r);</pre>
         <p>Remarque : on ne met <b>pas</b> <code>await</code> en créant t1 et t2 — ça leur permet de démarrer ensemble.</p>`
      ),
      task: T(
        'Kòmanse <code>Telechaje("Foto", 1000)</code> ak <code>Telechaje("Videyo", 1500)</code> <b>san</b> await, answit <code>await Task.WhenAll(t1, t2)</code> epi afiche chak rezilta.',
        'Démarre <code>Telechaje("Foto", 1000)</code> et <code>Telechaje("Videyo", 1500)</code> <b>sans</b> await, puis <code>await Task.WhenAll(t1, t2)</code> et affiche chaque résultat.'
      ),
      hint: T('<code>var t1 = Telechaje("Foto", 1000);</code> … <code>string[] r = await Task.WhenAll(t1, t2);</code>', '<code>var t1 = Telechaje("Foto", 1000);</code> … <code>string[] r = await Task.WhenAll(t1, t2);</code>'),
      starter: csProg({ usings: ASYNC, asyncMain: true, inside: 'static async Task<string> Telechaje(string non, int ms)\n{\n    await Task.Delay(ms);\n    return $"{non} fini ✔";\n}' }),
      solution: csProg({ usings: ASYNC, asyncMain: true, main: 'var t1 = Telechaje("Foto", 1000);\nvar t2 = Telechaje("Videyo", 1500);\n\nstring[] rezilta = await Task.WhenAll(t1, t2);\n\nforeach (var r in rezilta)\n{\n    Console.WriteLine(r);\n}', inside: 'static async Task<string> Telechaje(string non, int ms)\n{\n    await Task.Delay(ms);\n    return $"{non} fini ✔";\n}' }),
      output: 'Foto fini ✔\nVideyo fini ✔',
      check: need(
        R(inMain(/(var|Task\s*<\s*string\s*>)\s+\w+\s*=\s*Telechaje\s*\(\s*"[^"]+"\s*,\s*\d+\s*\)\s*;/), 'Kòmanse travay yo <b>san</b> <code>await</code>: <code>var t1 = Telechaje("Foto", 1000);</code>', 'Démarre les tâches <b>sans</b> <code>await</code> : <code>var t1 = Telechaje("Foto", 1000);</code>'),
        R(c => (csMainBody(c.clean).match(/=\s*Telechaje\s*\(/g) || []).length >= 2, 'Kòmanse 2 telechajman.', 'Démarre 2 téléchargements.'),
        R(/await\s+Task\.WhenAll\s*\(/, 'Tann tou de ak <code>await Task.WhenAll(t1, t2)</code>.', 'Attends les deux avec <code>await Task.WhenAll(t1, t2)</code>.'),
        R(/foreach\s*\(/, 'Afiche chak rezilta ak <code>foreach</code>.', 'Affiche chaque résultat avec <code>foreach</code>.')
      ),
      tips: T(`<li><code>Task.WhenAny</code> tann <b>premye</b> ki fini an.</li><li>Si youn nan travay yo echwe, <code>WhenAll</code> voye eksepsyon an — mete l nan <code>try/catch</code>.</li>`, `<li><code>Task.WhenAny</code> attend la <b>première</b> qui termine.</li><li>Si une tâche échoue, <code>WhenAll</code> relance l'exception — mets-le dans un <code>try/catch</code>.</li>`),
      recap: T(`<li>Kòmanse plizyè Task → <code>await Task.WhenAll(…)</code>.</li>`, `<li>Démarrer plusieurs Task → <code>await Task.WhenAll(…)</code>.</li>`)
    },
    {
      id: 'cs-http',
      title: T('HttpClient: pale ak entènèt', 'HttpClient : parler à internet'),
      theory: T(
        `<p>Avèk <code>HttpClient</code>, pwogram ou ka <b>telechaje</b> paj web oswa rele <b>API</b> (sèvis sou entènèt ki bay done an JSON: meteyo, to chanj, elatriye):</p>
         <pre>using System.Net.Http;

using var kliyan = new HttpClient();
try
{
    string json = await kliyan.GetStringAsync("https://api.exemple.com/to");
    Console.WriteLine(json);
}
catch (HttpRequestException e)
{
    Console.WriteLine($"Pa gen koneksyon: {e.Message}");
}</pre>
         <p>Rezo a ka toujou echwe (pa gen entènèt, sèvè a tonbe…) — se poutèt sa <code>try/catch</code> <b>obligatwa</b> isit la.</p>`,
        `<p>Avec <code>HttpClient</code>, ton programme peut <b>télécharger</b> des pages web ou appeler des <b>API</b> (services en ligne qui renvoient du JSON : météo, taux de change, etc.) :</p>
         <pre>using System.Net.Http;

using var client = new HttpClient();
try
{
    string json = await client.GetStringAsync("https://api.exemple.com/taux");
    Console.WriteLine(json);
}
catch (HttpRequestException e)
{
    Console.WriteLine($"Pas de connexion : {e.Message}");
}</pre>
         <p>Le réseau peut toujours échouer (pas d'internet, serveur en panne…) — c'est pourquoi le <code>try/catch</code> est <b>indispensable</b> ici.</p>`
      ),
      task: T(
        'Kreye <code>using var kliyan = new HttpClient();</code>. Nan yon <code>try</code>, telechaje <code>"https://example.com"</code> ak <code>GetStringAsync</code> epi afiche <code>$"Mwen resevwa {html.Length} karaktè"</code>. Kenbe <code>HttpRequestException</code>.',
        'Crée <code>using var kliyan = new HttpClient();</code>. Dans un <code>try</code>, télécharge <code>"https://example.com"</code> avec <code>GetStringAsync</code> et affiche <code>$"Reçu {html.Length} caractères"</code>. Attrape <code>HttpRequestException</code>.'
      ),
      hint: T('<code>string html = await kliyan.GetStringAsync("https://example.com");</code>', '<code>string html = await kliyan.GetStringAsync("https://example.com");</code>'),
      starter: csProg({ usings: ['System.Net.Http', ...ASYNC], asyncMain: true }),
      solution: csProg({ usings: ['System.Net.Http', ...ASYNC], asyncMain: true, main: 'using var kliyan = new HttpClient();\n\ntry\n{\n    string html = await kliyan.GetStringAsync("https://example.com");\n    Console.WriteLine($"Mwen resevwa {html.Length} karaktè");\n}\ncatch (HttpRequestException e)\n{\n    Console.WriteLine($"Erè rezo: {e.Message}");\n}' }),
      output: 'Mwen resevwa 1256 karaktè',
      check: need(
        R(/using\s+System\.Net\.Http\s*;/, 'Ajoute <code>using System.Net.Http;</code>', 'Ajoute <code>using System.Net.Http;</code>'),
        R(/using\s+var\s+kliyan\s*=\s*new\s+HttpClient\s*\(\s*\)\s*;|using\s*\(\s*var\s+kliyan\s*=\s*new\s+HttpClient\s*\(\s*\)\s*\)/, 'Kreye <code>using var kliyan = new HttpClient();</code>', 'Crée <code>using var kliyan = new HttpClient();</code>'),
        R(/await\s+kliyan\.GetStringAsync\s*\(\s*"https:\/\/example\.com\/?"\s*\)/, 'Telechaje ak <code>await kliyan.GetStringAsync("https://example.com")</code>.', 'Télécharge avec <code>await kliyan.GetStringAsync("https://example.com")</code>.'),
        R(/\.Length/, 'Afiche <code>html.Length</code>.', 'Affiche <code>html.Length</code>.'),
        R(/catch\s*\(\s*HttpRequestException/, 'Kenbe <code>catch (HttpRequestException e)</code>.', 'Attrape <code>catch (HttpRequestException e)</code>.')
      ),
      tips: T(`<li>Nan gwo aplikasyon, kreye <b>yon sèl</b> <code>HttpClient</code> epi reyitilize l.</li><li>Pou JSON: <code>await kliyan.GetFromJsonAsync&lt;T&gt;(url)</code> (<code>System.Net.Http.Json</code>).</li>`, `<li>Dans les grosses applis, crée <b>un seul</b> <code>HttpClient</code> et réutilise-le.</li><li>Pour du JSON : <code>await client.GetFromJsonAsync&lt;T&gt;(url)</code> (<code>System.Net.Http.Json</code>).</li>`),
      recap: T(`<li><code>HttpClient</code> + <code>GetStringAsync</code> + <code>try/catch</code>.</li>`, `<li><code>HttpClient</code> + <code>GetStringAsync</code> + <code>try/catch</code>.</li>`)
    },
    {
      id: 'cs-namespace',
      title: T('Namespace ak òganizasyon pwojè', 'Namespaces et organisation de projet'),
      theory: T(
        `<p>Nan yon vrè pwojè, gen <b>dè santèn</b> klas. <b>Namespace</b> yo òganize yo tankou dosye:</p>
         <pre>namespace Lekol.Model
{
    public class Elev { … }
    public class Pwofesè { … }
}

namespace Lekol.Sevis
{
    public class Rapò { … }
}</pre>
         <p>Pou itilize yo nan yon lòt fichye: <code>using Lekol.Model;</code> — menm jan ak <code>using System;</code>!</p>
         <p>Estrikti tipik yon pwojè:</p>
         <pre>📁 MonPwojè/
  📄 Program.cs
  📁 Model/      (Elev.cs, Pwofesè.cs)
  📁 Sevis/      (Rapò.cs)
  📄 MonPwojè.csproj</pre>
         <p>Modifikatè <code>internal</code> = vizib sèlman nan menm pwojè a.</p>`,
        `<p>Dans un vrai projet, il y a <b>des centaines</b> de classes. Les <b>namespaces</b> les organisent comme des dossiers :</p>
         <pre>namespace Ecole.Modele
{
    public class Eleve { … }
    public class Professeur { … }
}

namespace Ecole.Services
{
    public class Rapport { … }
}</pre>
         <p>Pour les utiliser dans un autre fichier : <code>using Ecole.Modele;</code> — comme <code>using System;</code> !</p>
         <p>Structure typique d'un projet :</p>
         <pre>📁 MonProjet/
  📄 Program.cs
  📁 Modele/     (Eleve.cs, Professeur.cs)
  📁 Services/   (Rapport.cs)
  📄 MonProjet.csproj</pre>
         <p>Le modificateur <code>internal</code> = visible seulement dans le même projet.</p>`
      ),
      task: T(
        'Mete <code>class Elev</code> anndan <code>namespace Lekol.Model { … }</code>, epi ajoute <code>using Lekol.Model;</code> anlè fichye a pou Main ka itilize l.',
        'Place <code>class Elev</code> dans <code>namespace Lekol.Model { … }</code>, puis ajoute <code>using Lekol.Model;</code> en haut du fichier pour que Main puisse l\'utiliser.'
      ),
      hint: T('Antoure klas la ak <code>namespace Lekol.Model { … }</code>. Mete <code>public</code> devan <code>class</code>.', 'Entoure la classe avec <code>namespace Lekol.Model { … }</code>. Mets <code>public</code> devant <code>class</code>.'),
      starter: csProg({ main: 'var e = new Elev { Non = "Ana" };\nConsole.WriteLine(e.Non);', after: 'class Elev\n{\n    public string Non { get; set; }\n}' }),
      solution: csProg({ usings: ['Lekol.Model'], main: 'var e = new Elev { Non = "Ana" };\nConsole.WriteLine(e.Non);', after: 'namespace Lekol.Model\n{\n    public class Elev\n    {\n        public string Non { get; set; }\n    }\n}' }),
      output: 'Ana',
      check: need(
        R(/namespace\s+Lekol\.Model\s*\{[\s\S]*class\s+Elev/, 'Mete <code>class Elev</code> anndan <code>namespace Lekol.Model { … }</code>.', 'Place <code>class Elev</code> dans <code>namespace Lekol.Model { … }</code>.'),
        R(/using\s+Lekol\.Model\s*;/, 'erè CS0246: ajoute <code>using Lekol.Model;</code> anlè fichye a.', 'erreur CS0246 : ajoute <code>using Lekol.Model;</code> en haut du fichier.')
      ),
      extra: T(`<p>C# 10+ gen <b>file-scoped namespace</b>: <code>namespace Lekol.Model;</code> (ak pwen vigil) anlè fichye a — pa bezwen akolad, tout fichye a anndan l.</p>`, `<p>C# 10+ propose le <b>file-scoped namespace</b> : <code>namespace Ecole.Modele;</code> (avec point-virgule) en haut du fichier — plus besoin d'accolades, tout le fichier est dedans.</p>`),
      tips: T(`<li>Konvansyon: <code>Konpayi.Pwojè.Modil</code>, an PascalCase.</li>`, `<li>Convention : <code>Entreprise.Projet.Module</code>, en PascalCase.</li>`),
      recap: T(`<li><code>namespace A.B { … }</code> + <code>using A.B;</code></li>`, `<li><code>namespace A.B { … }</code> + <code>using A.B;</code></li>`)
    },

    /* ---------- Semèn 30: Pwojè bank ---------- */
    {
      id: 'cs-bank1',
      title: T('🏦 Pwojè bank 1: klas Kont', '🏦 Projet banque 1 : la classe Kont'),
      theory: T(
        `<p>Semèn sa a, n ap bati yon <b>sistèm bank</b> konplè, etap pa etap — tankou yon vrè pwojè pwofesyonèl! 💼</p>
         <p>Etap 1: modèl done a. Yon kont gen:</p>
         <ul><li>Yon <b>nimewo</b> (pa ka chanje apre kreyasyon → <code>{ get; }</code> sèlman)</li>
         <li>Yon <b>pwopriyetè</b> (menm bagay)</li>
         <li>Yon <b>solde</b> (moun deyò ka li l, men sèlman kont lan ka chanje l → <code>{ get; private set; }</code>)</li></ul>
         <p>Pou lajan, nou itilize <code>decimal</code> (pa <code>double</code>) — li pa fè erè awondi: <code>0.1 + 0.2</code> bay egzakteman <code>0.3</code>. Valè decimal yo fini ak <code>m</code>: <code>100.50m</code>.</p>`,
        `<p>Cette semaine, on construit un <b>système bancaire</b> complet, étape par étape — comme un vrai projet pro ! 💼</p>
         <p>Étape 1 : le modèle de données. Un compte a :</p>
         <ul><li>Un <b>numéro</b> (non modifiable après création → <code>{ get; }</code> seulement)</li>
         <li>Un <b>propriétaire</b> (pareil)</li>
         <li>Un <b>solde</b> (lisible de l'extérieur, modifiable seulement par le compte → <code>{ get; private set; }</code>)</li></ul>
         <p>Pour l'argent, on utilise <code>decimal</code> (pas <code>double</code>) — pas d'erreur d'arrondi : <code>0.1 + 0.2</code> donne exactement <code>0.3</code>. Les valeurs decimal finissent par <code>m</code> : <code>100.50m</code>.</p>`
      ),
      task: T(
        'Kreye <code>class Kont</code> ak <code>Nimewo</code> ak <code>Pwopriyete</code> (<code>string</code>, <code>{ get; }</code>), <code>decimal Solde { get; private set; }</code>, ak yon konstriktè <code>Kont(string nimewo, string pwopriyete)</code>.',
        'Crée <code>class Kont</code> avec <code>Nimewo</code> et <code>Pwopriyete</code> (<code>string</code>, <code>{ get; }</code>), <code>decimal Solde { get; private set; }</code>, et un constructeur <code>Kont(string nimewo, string pwopriyete)</code>.'
      ),
      hint: T('<code>public string Nimewo { get; }</code> — konstriktè a ka bay li valè menm si pa gen <code>set</code>.', '<code>public string Nimewo { get; }</code> — le constructeur peut l\'affecter même sans <code>set</code>.'),
      starter: csProg({ main: 'var k = new Kont("001", "Ana");\nConsole.WriteLine($"{k.Pwopriyete} — {k.Nimewo}: {k.Solde} HTG");', after: 'class Kont\n{\n    // ✍️\n}' }),
      solution: csProg({ main: 'var k = new Kont("001", "Ana");\nConsole.WriteLine($"{k.Pwopriyete} — {k.Nimewo}: {k.Solde} HTG");', after: KONT1 }),
      output: 'Ana — 001: 0 HTG',
      check: need(
        R(/public\s+string\s+Nimewo\s*\{\s*get\s*;\s*\}/, 'Ajoute <code>public string Nimewo { get; }</code>', 'Ajoute <code>public string Nimewo { get; }</code>'),
        R(/public\s+string\s+Pwopriyete\s*\{\s*get\s*;\s*\}/, 'Ajoute <code>public string Pwopriyete { get; }</code>', 'Ajoute <code>public string Pwopriyete { get; }</code>'),
        R(/public\s+decimal\s+Solde\s*\{\s*get\s*;\s*private\s+set\s*;\s*\}/, 'Ajoute <code>public decimal Solde { get; private set; }</code>', 'Ajoute <code>public decimal Solde { get; private set; }</code>'),
        R(/public\s+Kont\s*\(\s*string\s+(\w+)\s*,\s*string\s+(\w+)\s*\)/, 'Ajoute konstriktè <code>public Kont(string nimewo, string pwopriyete)</code>.', 'Ajoute le constructeur <code>public Kont(string nimewo, string pwopriyete)</code>.'),
        R(/Nimewo\s*=\s*\w+\s*;/, 'Nan konstriktè a: <code>Nimewo = nimewo;</code>', 'Dans le constructeur : <code>Nimewo = nimewo;</code>'),
        R(/Pwopriyete\s*=\s*\w+\s*;/, 'Nan konstriktè a: <code>Pwopriyete = pwopriyete;</code>', 'Dans le constructeur : <code>Pwopriyete = pwopriyete;</code>')
      ),
      tips: T(`<li>Pa janm itilize <code>double</code> oswa <code>float</code> pou lajan nan yon vrè sistèm.</li>`, `<li>N'utilise jamais <code>double</code> ou <code>float</code> pour de l'argent dans un vrai système.</li>`),
      recap: T(`<li><code>{ get; }</code> = sèlman konstriktè a ka bay valè.</li><li><code>decimal</code> pou lajan.</li>`, `<li><code>{ get; }</code> = seul le constructeur peut affecter.</li><li><code>decimal</code> pour l'argent.</li>`)
    },
    {
      id: 'cs-bank2',
      title: T('🏦 Pwojè bank 2: depo ak retrè', '🏦 Projet banque 2 : dépôts et retraits'),
      theory: T(
        `<p>Etap 2: <b>règ biznis</b> yo. Yon bank pa ka aksepte nenpòt bagay:</p>
         <ul><li>Yon montan dwe <b>pozitif</b> → sinon <code>ArgumentException</code>.</li>
         <li>Ou pa ka retire plis pase sa w genyen → <code>InvalidOperationException</code>.</li></ul>
         <p>Nou voye eksepsyon olye de afiche mesaj: konsa se kòd ki <b>rele</b> metòd la ki deside kijan pou reyaji (afiche yon mesaj, anrejistre erè a, elatriye). Klas <code>Kont</code> lan rete <b>pwòp</b>, li pa depann de konsòl la.</p>`,
        `<p>Étape 2 : les <b>règles métier</b>. Une banque n'accepte pas n'importe quoi :</p>
         <ul><li>Un montant doit être <b>positif</b> → sinon <code>ArgumentException</code>.</li>
         <li>On ne peut pas retirer plus que le solde → <code>InvalidOperationException</code>.</li></ul>
         <p>On lève des exceptions plutôt que d'afficher des messages : ainsi c'est le code <b>appelant</b> qui décide comment réagir (afficher un message, journaliser l'erreur…). La classe <code>Kont</code> reste <b>propre</b>, indépendante de la console.</p>`
      ),
      task: T(
        'Ajoute <code>Depoze(decimal montan)</code> ak <code>Retire(decimal montan)</code> nan <code>Kont</code> ak règ yo: montan &lt;= 0 → <code>ArgumentException</code>; retrè &gt; solde → <code>InvalidOperationException</code>.',
        'Ajoute <code>Depoze(decimal montan)</code> et <code>Retire(decimal montan)</code> à <code>Kont</code> avec les règles : montant &lt;= 0 → <code>ArgumentException</code> ; retrait &gt; solde → <code>InvalidOperationException</code>.'
      ),
      hint: T('<code>if (montan &gt; Solde) throw new InvalidOperationException("Lajan pa ase");</code>', '<code>if (montan &gt; Solde) throw new InvalidOperationException("Solde insuffisant");</code>'),
      starter: csProg({ main: 'var k = new Kont("001", "Ana");\nk.Depoze(1000m);\nk.Retire(250m);\nConsole.WriteLine(k.Solde);', after: KONT_BAZ + '\n    // ✍️ Depoze ak Retire\n}' }),
      solution: csProg({ main: 'var k = new Kont("001", "Ana");\nk.Depoze(1000m);\nk.Retire(250m);\nConsole.WriteLine(k.Solde);', after: KONT2 }),
      output: '750',
      check: need(
        R(/public\s+void\s+Depoze\s*\(\s*decimal\s+montan\s*\)/, 'Ajoute <code>public void Depoze(decimal montan)</code>.', 'Ajoute <code>public void Depoze(decimal montan)</code>.'),
        R(/public\s+void\s+Retire\s*\(\s*decimal\s+montan\s*\)/, 'Ajoute <code>public void Retire(decimal montan)</code>.', 'Ajoute <code>public void Retire(decimal montan)</code>.'),
        R(count(/throw\s+new\s+ArgumentException\s*\(/, 1), 'Voye <code>ArgumentException</code> si montan an &lt;= 0.', 'Lève <code>ArgumentException</code> si le montant est &lt;= 0.'),
        R(/if\s*\(\s*montan\s*>\s*Solde\s*\)\s*\{?\s*throw\s+new\s+InvalidOperationException/, 'Nan <code>Retire</code>: <code>if (montan &gt; Solde) throw new InvalidOperationException(…);</code>', 'Dans <code>Retire</code> : <code>if (montan &gt; Solde) throw new InvalidOperationException(…);</code>'),
        R(/Solde\s*\+=\s*montan\s*;/, 'Nan <code>Depoze</code>: <code>Solde += montan;</code>', 'Dans <code>Depoze</code> : <code>Solde += montan;</code>'),
        R(/Solde\s*-=\s*montan\s*;/, 'Nan <code>Retire</code>: <code>Solde -= montan;</code>', 'Dans <code>Retire</code> : <code>Solde -= montan;</code>')
      ),
      tips: T(`<li>Fè validasyon yo <b>anvan</b> ou chanje <code>Solde</code> — konsa yon erè pa janm kite kont lan nan move eta.</li>`, `<li>Fais les validations <b>avant</b> de modifier <code>Solde</code> — ainsi une erreur ne laisse jamais le compte dans un état incohérent.</li>`),
      recap: T(`<li>Règ biznis → eksepsyon.</li><li>Valide anvan modifye.</li>`, `<li>Règles métier → exceptions.</li><li>Valider avant de modifier.</li>`)
    },
    {
      id: 'cs-bank3',
      title: T('🏦 Pwojè bank 3: istorik', '🏦 Projet banque 3 : historique'),
      theory: T(
        `<p>Etap 3: chak bank dwe kenbe yon <b>istorik</b> tout tranzaksyon yo (pou kliyan an, pou kontwòl, pou lalwa).</p>
         <pre>public List&lt;string&gt; Istorik { get; } = new List&lt;string&gt;();</pre>
         <p>Remake: <code>{ get; }</code> sèlman — moun deyò pa ka <b>ranplase</b> lis la (<code>k.Istorik = null</code> ❌). Men… yo ka toujou fè <code>k.Istorik.Clear()</code>! Pou pwoteksyon total, pwofesyonèl yo ekspoze yon <code>IReadOnlyList&lt;string&gt;</code>. Pou kounye a, lis la ase.</p>`,
        `<p>Étape 3 : toute banque doit garder un <b>historique</b> des transactions (pour le client, le contrôle, la loi).</p>
         <pre>public List&lt;string&gt; Istorik { get; } = new List&lt;string&gt;();</pre>
         <p>Remarque : <code>{ get; }</code> seulement — on ne peut pas <b>remplacer</b> la liste de l'extérieur (<code>k.Istorik = null</code> ❌). Mais… on peut encore faire <code>k.Istorik.Clear()</code> ! Pour une protection totale, les pros exposent une <code>IReadOnlyList&lt;string&gt;</code>. Pour l'instant, la liste suffit.</p>`
      ),
      task: T(
        'Ajoute <code>public List&lt;string&gt; Istorik { get; } = new List&lt;string&gt;();</code>. Nan <code>Depoze</code>, ajoute <code>$"+{montan} HTG"</code>; nan <code>Retire</code>, ajoute <code>$"-{montan} HTG"</code>. Nan Main, afiche istorik la.',
        'Ajoute <code>public List&lt;string&gt; Istorik { get; } = new List&lt;string&gt;();</code>. Dans <code>Depoze</code>, ajoute <code>$"+{montan} HTG"</code> ; dans <code>Retire</code>, ajoute <code>$"-{montan} HTG"</code>. Dans Main, affiche l\'historique.'
      ),
      hint: T('<code>Istorik.Add($"+{montan} HTG");</code> — <b>apre</b> <code>Solde += montan;</code>', '<code>Istorik.Add($"+{montan} HTG");</code> — <b>après</b> <code>Solde += montan;</code>'),
      starter: csProg({ usings: ['System.Collections.Generic'], main: 'var k = new Kont("001", "Ana");\nk.Depoze(1000m);\nk.Retire(250m);\n\n// ✍️ afiche istorik la', after: KONT2 }),
      solution: csProg({ usings: ['System.Collections.Generic'], main: 'var k = new Kont("001", "Ana");\nk.Depoze(1000m);\nk.Retire(250m);\n\nforeach (var t in k.Istorik)\n{\n    Console.WriteLine(t);\n}', after: KONT3 }),
      output: '+1000 HTG\n-250 HTG',
      check: need(
        R(/List\s*<\s*string\s*>\s+Istorik\s*\{\s*get\s*;\s*\}\s*=\s*new/, 'Ajoute <code>public List&lt;string&gt; Istorik { get; } = new List&lt;string&gt;();</code>', 'Ajoute <code>public List&lt;string&gt; Istorik { get; } = new List&lt;string&gt;();</code>'),
        R(/Istorik\.Add\s*\(\s*\$"\+\{\s*montan\s*\}/, 'Nan <code>Depoze</code>: <code>Istorik.Add($"+{montan} HTG");</code>', 'Dans <code>Depoze</code> : <code>Istorik.Add($"+{montan} HTG");</code>'),
        R(/Istorik\.Add\s*\(\s*\$"-\{\s*montan\s*\}/, 'Nan <code>Retire</code>: <code>Istorik.Add($"-{montan} HTG");</code>', 'Dans <code>Retire</code> : <code>Istorik.Add($"-{montan} HTG");</code>'),
        R(inMain(/foreach\s*\([^)]*in\s+\w+\.Istorik\s*\)/), 'Nan Main, afiche istorik la ak <code>foreach (var t in k.Istorik)</code>.', 'Dans Main, affiche l\'historique avec <code>foreach (var t in k.Istorik)</code>.')
      ),
      tips: T(`<li>Ajoute nan istorik la <b>apre</b> operasyon an reyisi — pa anvan validasyon yo.</li>`, `<li>Ajoute à l'historique <b>après</b> le succès de l'opération — pas avant les validations.</li>`),
      recap: T(`<li>Konpozisyon: Kont <i>gen yon</i> lis tranzaksyon.</li>`, `<li>Composition : Kont <i>a une</i> liste de transactions.</li>`)
    },
    {
      id: 'cs-bank4',
      title: T('🏦 Pwojè bank 4: klas Bank', '🏦 Projet banque 4 : la classe Bank'),
      theory: T(
        `<p>Etap 4: yon <code>Bank</code> jere <b>plizyè</b> kont. Li responsab:</p>
         <ul><li><b>Ouvri</b> kont ak yon nimewo inik otomatik (<code>"001"</code>, <code>"002"</code>…).</li>
         <li><b>Jwenn</b> yon kont pa nimewo li — ak LINQ!</li></ul>
         <pre>(kont.Count + 1).ToString("D3")   // 1 → "001", 12 → "012"

kont.FirstOrDefault(k =&gt; k.Nimewo == nimewo)   // null si pa jwenn</pre>
         <p>Lis <code>kont</code> la <code>private</code>: sèl fason pou ajoute yon kont se <code>OuvriKont</code> — sa garanti chak kont gen yon nimewo valid.</p>`,
        `<p>Étape 4 : une <code>Bank</code> gère <b>plusieurs</b> comptes. Elle est responsable de :</p>
         <ul><li><b>Ouvrir</b> des comptes avec un numéro unique automatique (<code>"001"</code>, <code>"002"</code>…).</li>
         <li><b>Trouver</b> un compte par son numéro — avec LINQ !</li></ul>
         <pre>(kont.Count + 1).ToString("D3")   // 1 → "001", 12 → "012"

kont.FirstOrDefault(k =&gt; k.Nimewo == nimewo)   // null si introuvable</pre>
         <p>La liste <code>kont</code> est <code>private</code> : la seule façon d'ajouter un compte est <code>OuvriKont</code> — ça garantit que chaque compte a un numéro valide.</p>`
      ),
      task: T(
        'Konplete <code>class Bank</code>: <code>OuvriKont(string pwopriyete)</code> kreye yon kont ak nimewo <code>(kont.Count + 1).ToString("D3")</code>, ajoute l, epi retounen l. <code>Jwenn(string nimewo)</code> itilize <code>FirstOrDefault</code>.',
        'Complète <code>class Bank</code> : <code>OuvriKont(string pwopriyete)</code> crée un compte numéroté <code>(kont.Count + 1).ToString("D3")</code>, l\'ajoute et le renvoie. <code>Jwenn(string nimewo)</code> utilise <code>FirstOrDefault</code>.'
      ),
      hint: T('<code>return kont.FirstOrDefault(k =&gt; k.Nimewo == nimewo);</code>', '<code>return kont.FirstOrDefault(k =&gt; k.Nimewo == nimewo);</code>'),
      starter: csProg({ usings: ['System.Collections.Generic', 'System.Linq'], main: 'var bank = new Bank();\nbank.OuvriKont("Ana");\nbank.OuvriKont("Jak");\n\nConsole.WriteLine(bank.Jwenn("002")?.Pwopriyete);', after: KONT3 + '\n\nclass Bank\n{\n    private List<Kont> kont = new List<Kont>();\n\n    // ✍️ OuvriKont ak Jwenn\n}' }),
      solution: csProg({ usings: ['System.Collections.Generic', 'System.Linq'], main: 'var bank = new Bank();\nbank.OuvriKont("Ana");\nbank.OuvriKont("Jak");\n\nConsole.WriteLine(bank.Jwenn("002")?.Pwopriyete);', after: KONT3 + '\n\n' + BANK4 + '}' }),
      output: 'Jak',
      check: need(
        R(/public\s+Kont\s+OuvriKont\s*\(\s*string\s+\w+\s*\)/, 'Ajoute <code>public Kont OuvriKont(string pwopriyete)</code>.', 'Ajoute <code>public Kont OuvriKont(string pwopriyete)</code>.'),
        R(/\(\s*kont\.Count\s*\+\s*1\s*\)\.ToString\s*\(\s*"D3"\s*\)/, 'Kreye nimewo a ak <code>(kont.Count + 1).ToString("D3")</code>.', 'Crée le numéro avec <code>(kont.Count + 1).ToString("D3")</code>.'),
        R(/kont\.Add\s*\(/, 'Ajoute kont lan nan lis la: <code>kont.Add(k);</code>', 'Ajoute le compte à la liste : <code>kont.Add(k);</code>'),
        R(/OuvriKont[\s\S]*return\s+\w+\s*;/, '<code>OuvriKont</code> dwe retounen kont lan.', '<code>OuvriKont</code> doit renvoyer le compte.'),
        R(/public\s+Kont\??\s+Jwenn\s*\(\s*string\s+\w+\s*\)/, 'Ajoute <code>public Kont? Jwenn(string nimewo)</code>.', 'Ajoute <code>public Kont? Jwenn(string nimewo)</code>.'),
        R(/kont\.FirstOrDefault\s*\(\s*\(?\s*(\w+)\s*\)?\s*=>\s*\1\.Nimewo\s*==\s*\w+\s*\)/, 'Nan <code>Jwenn</code>: <code>kont.FirstOrDefault(k =&gt; k.Nimewo == nimewo)</code>.', 'Dans <code>Jwenn</code> : <code>kont.FirstOrDefault(k =&gt; k.Nimewo == nimewo)</code>.')
      ),
      tips: T(`<li><code>Kont?</code> (ak <code>?</code>) avèti moun k ap itilize metòd la ke rezilta a ka <code>null</code>.</li>`, `<li><code>Kont?</code> (avec <code>?</code>) prévient l'appelant que le résultat peut être <code>null</code>.</li>`),
      recap: T(`<li>Lis <code>private</code> + metòd <code>public</code> = kontwòl.</li><li><code>FirstOrDefault</code> pou chèche.</li>`, `<li>Liste <code>private</code> + méthodes <code>public</code> = contrôle.</li><li><code>FirstOrDefault</code> pour chercher.</li>`)
    },
    {
      id: 'cs-bank5',
      title: T('🏦 Pwojè bank 5: transfè', '🏦 Projet banque 5 : virements'),
      theory: T(
        `<p>Dènye etap: <b>transfè</b> lajan ant 2 kont. Se konbinezon tout sa nou bati:</p>
         <ol><li><b>Jwenn</b> 2 kont yo (<code>Jwenn</code>).</li>
         <li>Si youn pa egziste → <code>InvalidOperationException</code>.</li>
         <li><b>Retire</b> nan kont sous la (sa deja verifye solde a!).</li>
         <li><b>Depoze</b> nan kont destinasyon an.</li></ol>
         <p>Lòd la enpòtan: nou <b>retire an premye</b>. Si retrè a echwe (pa ase lajan), eksepsyon an kanpe tout bagay — epi pa gen lajan ki parèt nan lòt kont lan pa erè. 🎯</p>`,
        `<p>Dernière étape : le <b>virement</b> entre 2 comptes. C'est la combinaison de tout ce qu'on a construit :</p>
         <ol><li><b>Trouver</b> les 2 comptes (<code>Jwenn</code>).</li>
         <li>Si l'un n'existe pas → <code>InvalidOperationException</code>.</li>
         <li><b>Retirer</b> du compte source (qui vérifie déjà le solde !).</li>
         <li><b>Déposer</b> sur le compte destination.</li></ol>
         <p>L'ordre compte : on <b>retire d'abord</b>. Si le retrait échoue (solde insuffisant), l'exception arrête tout — et aucun argent n'apparaît par erreur sur l'autre compte. 🎯</p>`
      ),
      task: T(
        'Ajoute <code>Transfere(string de, string a, decimal montan)</code> nan <code>Bank</code>. Nan Main, eseye transfere <b>5000</b> (twòp!) nan yon <code>try</code> epi afiche <code>e.Message</code> nan <code>catch (InvalidOperationException e)</code>.',
        'Ajoute <code>Transfere(string de, string a, decimal montan)</code> à <code>Bank</code>. Dans Main, essaie de virer <b>5000</b> (trop !) dans un <code>try</code> et affiche <code>e.Message</code> dans <code>catch (InvalidOperationException e)</code>.'
      ),
      hint: T('<code>sous.Retire(montan); dest.Depoze(montan);</code> — retire an premye!', '<code>sous.Retire(montan); dest.Depoze(montan);</code> — retire d\'abord !'),
      starter: csProg({ usings: ['System.Collections.Generic', 'System.Linq'], main: 'var bank = new Bank();\nvar ana = bank.OuvriKont("Ana");\nvar jak = bank.OuvriKont("Jak");\nana.Depoze(1000m);\n\n// ✍️ eseye transfere 5000 nan yon try/catch', after: KONT3 + '\n\n' + BANK4 + '\n    // ✍️ Transfere\n}' }),
      solution: csProg({ usings: ['System.Collections.Generic', 'System.Linq'], main: 'var bank = new Bank();\nvar ana = bank.OuvriKont("Ana");\nvar jak = bank.OuvriKont("Jak");\nana.Depoze(1000m);\n\ntry\n{\n    bank.Transfere("001", "002", 5000m);\n}\ncatch (InvalidOperationException e)\n{\n    Console.WriteLine($"❌ {e.Message}");\n}\n\nbank.Transfere("001", "002", 300m);\nConsole.WriteLine($"Ana: {ana.Solde}, Jak: {jak.Solde}");', after: KONT3 + '\n\n' + BANK4 + BANK5_TRANSFE + '}' }),
      output: '❌ Lajan pa ase\nAna: 700, Jak: 300',
      check: need(
        R(/public\s+void\s+Transfere\s*\(\s*string\s+(\w+)\s*,\s*string\s+(\w+)\s*,\s*decimal\s+montan\s*\)/, 'Ajoute <code>public void Transfere(string de, string a, decimal montan)</code>.', 'Ajoute <code>public void Transfere(string de, string a, decimal montan)</code>.'),
        R(/Transfere[\s\S]*Jwenn\s*\(/, 'Itilize <code>Jwenn(…)</code> pou jwenn 2 kont yo.', 'Utilise <code>Jwenn(…)</code> pour trouver les 2 comptes.'),
        R(/==\s*null[\s\S]*throw\s+new\s+InvalidOperationException/, 'Si yon kont <code>== null</code>, voye <code>InvalidOperationException</code>.', 'Si un compte est <code>== null</code>, lève <code>InvalidOperationException</code>.'),
        R(/\w+\.Retire\s*\(\s*montan\s*\)\s*;\s*\w+\.Depoze\s*\(\s*montan\s*\)\s*;/, 'Retire an premye, answit depoze: <code>sous.Retire(montan); dest.Depoze(montan);</code>', 'Retire d\'abord, puis dépose : <code>sous.Retire(montan); dest.Depoze(montan);</code>'),
        R(inMain(/try\s*\{[^}]*Transfere\s*\([^)]*5000/), 'Nan Main, eseye transfere 5000 nan yon <code>try</code>.', 'Dans Main, essaie de virer 5000 dans un <code>try</code>.'),
        R(inMain(/catch\s*\(\s*InvalidOperationException\s+(\w+)\s*\)\s*\{[^}]*\1\.Message/), 'Afiche <code>e.Message</code> nan <code>catch (InvalidOperationException e)</code>.', 'Affiche <code>e.Message</code> dans <code>catch (InvalidOperationException e)</code>.')
      ),
      extra: T(
        `<p>🎓 Ou fèk bati yon sistèm ki gen <b>tout</b> eleman yon vrè aplikasyon: modèl done, règ biznis, eksepsyon, koleksyon, LINQ. Pou ale pi lwen:</p>
         <ul><li>Sove bank lan nan yon fichye JSON (<code>JsonSerializer</code>).</li>
         <li>Ajoute yon meni konsòl (<code>do…while</code> + <code>switch</code>).</li>
         <li>Ajoute <code>DateTime</code> nan chak tranzaksyon (yon <code>record Tranzaksyon</code>).</li></ul>`,
        `<p>🎓 Tu viens de construire un système avec <b>tous</b> les éléments d'une vraie appli : modèle de données, règles métier, exceptions, collections, LINQ. Pour aller plus loin :</p>
         <ul><li>Sauvegarder la banque dans un fichier JSON (<code>JsonSerializer</code>).</li>
         <li>Ajouter un menu console (<code>do…while</code> + <code>switch</code>).</li>
         <li>Ajouter un <code>DateTime</code> à chaque transaction (un <code>record Tranzaksyon</code>).</li></ul>`
      ),
      tips: T(`<li>Nan vrè bank, yon transfè dwe <b>atomik</b>: tou de operasyon yo reyisi, oswa okenn. Baz done yo bay <b>tranzaksyon</b> pou sa.</li>`, `<li>Dans une vraie banque, un virement doit être <b>atomique</b> : les deux opérations réussissent, ou aucune. Les bases de données offrent des <b>transactions</b> pour ça.</li>`),
      recap: T(`<li>🏦 Pwojè bank fini!</li><li>Klas + eksepsyon + LINQ = aplikasyon solid.</li>`, `<li>🏦 Projet banque terminé !</li><li>Classes + exceptions + LINQ = application solide.</li>`)
    },

    /* ---------- Semèn 31: Jwèt ak Unity ---------- */
    {
      id: 'cs-game1',
      title: T('🎮 Jwèt tèks: bouk jwèt la', '🎮 Jeu texte : la boucle de jeu'),
      theory: T(
        `<p>Tout jwèt video — soti nan Mario rive nan Fortnite — gen yon <b>bouk jwèt</b> (game loop):</p>
         <pre>while (jwe)
{
    1. Li antre jwè a      (klavye, sourit, manèt)
    2. Mete jwèt la ajou   (deplase, kolizyon, pwen)
    3. Afiche              (desine ekran an)
}</pre>
         <p>Ann fè yon <b>avanti tèks</b> 🗺️: jwè a tape kòmand (<code>nò</code>, <code>sid</code>, <code>kite</code>) epi pwogram nan chanje kote l ye.</p>`,
        `<p>Tout jeu vidéo — de Mario à Fortnite — a une <b>boucle de jeu</b> (game loop) :</p>
         <pre>while (jeu)
{
    1. Lire l'entrée du joueur  (clavier, souris, manette)
    2. Mettre à jour le jeu     (déplacements, collisions, score)
    3. Afficher                 (dessiner l'écran)
}</pre>
         <p>Faisons une <b>aventure texte</b> 🗺️ : le joueur tape des commandes (<code>nò</code>, <code>sid</code>, <code>kite</code>) et le programme change sa position.</p>`
      ),
      task: T(
        'Nan bouk la, ajoute yon <code>switch (komand)</code>: <code>"nò"</code> → <code>kote = "Forè";</code>, <code>"sid"</code> → <code>kote = "Plaj";</code>, <code>"kite"</code> → <code>jwe = false;</code>, <code>default</code> → afiche <b>"Mwen pa konprann."</b>',
        'Dans la boucle, ajoute un <code>switch (komand)</code> : <code>"nò"</code> → <code>kote = "Forè";</code>, <code>"sid"</code> → <code>kote = "Plaj";</code>, <code>"kite"</code> → <code>jwe = false;</code>, <code>default</code> → affiche <b>"Je ne comprends pas."</b>'
      ),
      hint: T('<code>case "kite": jwe = false; break;</code>', '<code>case "kite": jwe = false; break;</code>'),
      starter: csProg({ main: 'bool jwe = true;\nstring kote = "Lakou";\n\nwhile (jwe)\n{\n    Console.WriteLine($"📍 Ou nan: {kote}");\n    Console.Write("> ");\n    string komand = Console.ReadLine();\n\n    // ✍️ switch\n}\n\nConsole.WriteLine("Orevwa! 👋");' }),
      solution: csProg({ main: 'bool jwe = true;\nstring kote = "Lakou";\n\nwhile (jwe)\n{\n    Console.WriteLine($"📍 Ou nan: {kote}");\n    Console.Write("> ");\n    string komand = Console.ReadLine();\n\n    switch (komand)\n    {\n        case "nò":\n            kote = "Forè";\n            break;\n        case "sid":\n            kote = "Plaj";\n            break;\n        case "kite":\n            jwe = false;\n            break;\n        default:\n            Console.WriteLine("Mwen pa konprann.");\n            break;\n    }\n}\n\nConsole.WriteLine("Orevwa! 👋");' }),
      output: '📍 Ou nan: Lakou\n> nò\n📍 Ou nan: Forè\n> sid\n📍 Ou nan: Plaj\n> kite\nOrevwa! 👋',
      check: need(
        R(/switch\s*\(\s*komand\s*\)/, 'Ekri <code>switch (komand)</code>.', 'Écris <code>switch (komand)</code>.'),
        R(/case\s*"nò"\s*:\s*kote\s*=\s*"[^"]+"\s*;/, '<code>case "nò": kote = "Forè"; break;</code>', '<code>case "nò": kote = "Forè"; break;</code>'),
        R(/case\s*"sid"\s*:\s*kote\s*=\s*"[^"]+"\s*;/, '<code>case "sid": kote = "Plaj"; break;</code>', '<code>case "sid": kote = "Plaj"; break;</code>'),
        R(/case\s*"kite"\s*:\s*jwe\s*=\s*false\s*;/, '<code>case "kite": jwe = false; break;</code> — sinon jwèt la pa janm fini!', '<code>case "kite": jwe = false; break;</code> — sinon le jeu ne finit jamais !'),
        R(/default\s*:/, 'Ajoute <code>default:</code> pou kòmand enkoni.', 'Ajoute <code>default:</code> pour les commandes inconnues.')
      ),
      extra: T(`<p>Defi bonis: ajoute yon envantè (<code>List&lt;string&gt;</code>) ak kòmand <code>pran</code> — si jwè a nan Forè, li jwenn yon <i>kle</i> 🗝️.</p>`, `<p>Défi bonus : ajoute un inventaire (<code>List&lt;string&gt;</code>) et une commande <code>pran</code> — dans la Forêt, le joueur trouve une <i>clé</i> 🗝️.</p>`),
      tips: T(`<li>Pou aksepte "NÒ" oswa "Nò", itilize <code>komand.Trim().ToLower()</code>.</li>`, `<li>Pour accepter "NÒ" ou "Nò", utilise <code>komand.Trim().ToLower()</code>.</li>`),
      recap: T(`<li>Bouk jwèt: antre → mizajou → afiche.</li>`, `<li>Boucle de jeu : entrée → mise à jour → affichage.</li>`)
    },
    {
      id: 'cs-game2',
      title: T('🎮 Jwèt: batay', '🎮 Jeu : le combat'),
      theory: T(
        `<p>Ann kreye yon <b>sistèm batay</b> ak POO! Chak <code>Jwe</code> (jwè oswa mons) gen <b>pwen vi</b> (PV). Chak tou, youn atake lòt ak dega o aza.</p>
         <pre>class Jwe
{
    public string Non { get; }
    public int PV { get; private set; }
    public bool Vivan =&gt; PV &gt; 0;          // pwopriyete KALKILE

    public void Atake(Jwe lot, Random rnd)
    {
        int dega = rnd.Next(5, 21);
        lot.PV -= dega;
        …
    }
}</pre>
         <p><code>Vivan =&gt; PV &gt; 0</code> se yon pwopriyete <b>kalkile</b>: li pa sere anyen, li kalkile valè a chak fwa w li l.</p>`,
        `<p>Créons un <b>système de combat</b> avec la POO ! Chaque <code>Jwe</code> (joueur ou monstre) a des <b>points de vie</b> (PV). À chaque tour, l'un attaque l'autre avec des dégâts aléatoires.</p>
         <pre>class Jwe
{
    public string Non { get; }
    public int PV { get; private set; }
    public bool Vivan =&gt; PV &gt; 0;          // propriété CALCULÉE

    public void Atake(Jwe lot, Random rnd)
    {
        int dega = rnd.Next(5, 21);
        lot.PV -= dega;
        …
    }
}</pre>
         <p><code>Vivan =&gt; PV &gt; 0</code> est une propriété <b>calculée</b> : elle ne stocke rien, elle calcule la valeur à chaque lecture.</p>`
      ),
      task: T(
        'Nan <code>class Jwe</code>, ajoute <code>public bool Vivan =&gt; PV &gt; 0;</code> ak metòd <code>Atake(Jwe lot, Random rnd)</code> ki fè <code>rnd.Next(5, 21)</code> dega, retire yo nan <code>lot.PV</code>, epi afiche <code>$"{Non} frape {lot.Non}: -{dega}"</code>.',
        'Dans <code>class Jwe</code>, ajoute <code>public bool Vivan =&gt; PV &gt; 0;</code> et la méthode <code>Atake(Jwe lot, Random rnd)</code> qui inflige <code>rnd.Next(5, 21)</code> dégâts, les retire de <code>lot.PV</code>, et affiche <code>$"{Non} frappe {lot.Non} : -{dega}"</code>.'
      ),
      hint: T('<code>int dega = rnd.Next(5, 21); lot.PV -= dega;</code>', '<code>int dega = rnd.Next(5, 21); lot.PV -= dega;</code>'),
      starter: csProg({ main: 'var rnd = new Random();\nvar ewo = new Jwe("Ewo", 100);\nvar mons = new Jwe("Lougawou", 80);\n\nwhile (ewo.Vivan && mons.Vivan)\n{\n    ewo.Atake(mons, rnd);\n    if (mons.Vivan) mons.Atake(ewo, rnd);\n}\n\nConsole.WriteLine(ewo.Vivan ? "🏆 Ou genyen!" : "💀 Ou pèdi...");', after: 'class Jwe\n{\n    public string Non { get; }\n    public int PV { get; private set; }\n\n    public Jwe(string non, int pv)\n    {\n        Non = non;\n        PV = pv;\n    }\n\n    // ✍️ Vivan ak Atake\n}' }),
      solution: csProg({ main: 'var rnd = new Random();\nvar ewo = new Jwe("Ewo", 100);\nvar mons = new Jwe("Lougawou", 80);\n\nwhile (ewo.Vivan && mons.Vivan)\n{\n    ewo.Atake(mons, rnd);\n    if (mons.Vivan) mons.Atake(ewo, rnd);\n}\n\nConsole.WriteLine(ewo.Vivan ? "🏆 Ou genyen!" : "💀 Ou pèdi...");', after: 'class Jwe\n{\n    public string Non { get; }\n    public int PV { get; private set; }\n\n    public Jwe(string non, int pv)\n    {\n        Non = non;\n        PV = pv;\n    }\n\n    public bool Vivan => PV > 0;\n\n    public void Atake(Jwe lot, Random rnd)\n    {\n        int dega = rnd.Next(5, 21);\n        lot.PV -= dega;\n        Console.WriteLine($"{Non} frape {lot.Non}: -{dega}");\n    }\n}' }),
      output: 'Ewo frape Lougawou: -14\nLougawou frape Ewo: -9\nEwo frape Lougawou: -18\n…\n🏆 Ou genyen!',
      check: need(
        R(/public\s+bool\s+Vivan\s*=>\s*PV\s*>\s*0\s*;|public\s+bool\s+Vivan\s*\{\s*get\s*\{\s*return\s+PV\s*>\s*0\s*;\s*\}\s*\}/, 'Ajoute <code>public bool Vivan =&gt; PV &gt; 0;</code>', 'Ajoute <code>public bool Vivan =&gt; PV &gt; 0;</code>'),
        R(/public\s+void\s+Atake\s*\(\s*Jwe\s+lot\s*,\s*Random\s+rnd\s*\)/, 'Ajoute <code>public void Atake(Jwe lot, Random rnd)</code>.', 'Ajoute <code>public void Atake(Jwe lot, Random rnd)</code>.'),
        R(/int\s+dega\s*=\s*rnd\.Next\s*\(\s*5\s*,\s*21\s*\)\s*;/, 'Kalkile <code>int dega = rnd.Next(5, 21);</code>', 'Calcule <code>int dega = rnd.Next(5, 21);</code>'),
        R(/lot\.PV\s*-=\s*dega\s*;|lot\.PV\s*=\s*lot\.PV\s*-\s*dega\s*;/, 'Retire dega yo: <code>lot.PV -= dega;</code>', 'Retire les dégâts : <code>lot.PV -= dega;</code>'),
        R(/Console\.WriteLine\s*\(\s*\$"[^"]*\{\s*Non\s*\}[^"]*\{\s*lot\.Non\s*\}/, 'Afiche <code>$"{Non} frape {lot.Non}: -{dega}"</code>.', 'Affiche <code>$"{Non} frappe {lot.Non} : -{dega}"</code>.')
      ),
      tips: T(`<li><code>private set</code> aplike pou <b>klas</b> la, pa pou objè a: yon <code>Jwe</code> ka chanje <code>PV</code> yon lòt <code>Jwe</code>.</li>`, `<li><code>private set</code> s'applique à la <b>classe</b>, pas à l'objet : un <code>Jwe</code> peut modifier les <code>PV</code> d'un autre <code>Jwe</code>.</li>`),
      recap: T(`<li>Pwopriyete kalkile: <code>bool X =&gt; …;</code></li><li>Objè ki aji sou lòt objè.</li>`, `<li>Propriété calculée : <code>bool X =&gt; …;</code></li><li>Des objets qui agissent sur d'autres objets.</li>`)
    },
    {
      id: 'cs-unity1',
      title: T('🎮 Unity: premye script ou', '🎮 Unity : ton premier script'),
      noMain: true,
      theory: T(
        `<p><b>Unity</b> se motè jwèt ki pi popilè nan mond lan (Pokémon GO, Among Us, Hollow Knight…) — epi li itilize <b>C#</b>! Ou ka telechaje l gratis sou <code>unity.com</code>.</p>
         <p>Nan Unity, pa gen <code>Main</code>. Chak script se yon klas ki eritye de <code>MonoBehaviour</code>, epi Unity rele metòd espesyal yo otomatikman:</p>
         <pre>using UnityEngine;

public class Bonjou : MonoBehaviour
{
    void Start()       // yon fwa, lè jwèt la kòmanse
    {
        Debug.Log("Jwèt la kòmanse!");
    }

    void Update()      // CHAK IMAJ (60 fwa pa segonn!)
    {
    }
}</pre>
         <p><code>Debug.Log</code> = <code>Console.WriteLine</code> nan Unity (li parèt nan fenèt <b>Console</b> Unity a).</p>`,
        `<p><b>Unity</b> est le moteur de jeu le plus populaire au monde (Pokémon GO, Among Us, Hollow Knight…) — et il utilise <b>C#</b> ! Il se télécharge gratuitement sur <code>unity.com</code>.</p>
         <p>Dans Unity, pas de <code>Main</code>. Chaque script est une classe qui hérite de <code>MonoBehaviour</code>, et Unity appelle automatiquement des méthodes spéciales :</p>
         <pre>using UnityEngine;

public class Bonjour : MonoBehaviour
{
    void Start()       // une fois, au début du jeu
    {
        Debug.Log("Le jeu commence !");
    }

    void Update()      // À CHAQUE IMAGE (60 fois par seconde !)
    {
    }
}</pre>
         <p><code>Debug.Log</code> = le <code>Console.WriteLine</code> d'Unity (il s'affiche dans la fenêtre <b>Console</b> d'Unity).</p>`
      ),
      task: T(
        'Ekri yon script Unity: <code>using UnityEngine;</code>, <code>public class Bonjou : MonoBehaviour</code>, ak yon metòd <code>Start()</code> ki fè <code>Debug.Log("…")</code>.',
        'Écris un script Unity : <code>using UnityEngine;</code>, <code>public class Bonjou : MonoBehaviour</code>, avec une méthode <code>Start()</code> qui fait <code>Debug.Log("…")</code>.'
      ),
      hint: T('Pa gen <code>Main</code> isit la! Jis klas la ak <code>void Start()</code>.', 'Pas de <code>Main</code> ici ! Juste la classe avec <code>void Start()</code>.'),
      starter: '// Script Unity — Bonjou.cs\n// ✍️\n',
      solution: 'using UnityEngine;\n\npublic class Bonjou : MonoBehaviour\n{\n    void Start()\n    {\n        Debug.Log("Bonjou Unity! 🎮");\n    }\n\n    void Update()\n    {\n    }\n}\n',
      output: ({ code }) => `[Unity Console] ${(code.match(/Debug\.Log\s*\(\s*"([^"]*)"/) || [])[1] || ''}`,
      check: need(
        R(/using\s+UnityEngine\s*;/, 'Ajoute <code>using UnityEngine;</code>', 'Ajoute <code>using UnityEngine;</code>'),
        R(/public\s+class\s+\w+\s*:\s*MonoBehaviour/, 'Klas la dwe eritye de <code>MonoBehaviour</code>: <code>public class Bonjou : MonoBehaviour</code>.', 'La classe doit hériter de <code>MonoBehaviour</code> : <code>public class Bonjou : MonoBehaviour</code>.'),
        R(/void\s+Start\s*\(\s*\)/, 'Ajoute metòd <code>void Start()</code>.', 'Ajoute la méthode <code>void Start()</code>.'),
        R(/Start\s*\(\s*\)\s*\{[^}]*Debug\.Log\s*\(\s*\$?"[^"]+"\s*\)\s*;/, 'Nan <code>Start()</code>, ekri <code>Debug.Log("…");</code>', 'Dans <code>Start()</code>, écris <code>Debug.Log("…");</code>')
      ),
      tips: T(`<li>Non fichye a dwe <b>egzakteman</b> menm ak non klas la: <code>Bonjou.cs</code>.</li><li>Ou atache script la sou yon <b>GameObject</b> nan editè Unity a.</li>`, `<li>Le nom du fichier doit être <b>exactement</b> celui de la classe : <code>Bonjou.cs</code>.</li><li>On attache le script à un <b>GameObject</b> dans l'éditeur Unity.</li>`),
      recap: T(`<li><code>MonoBehaviour</code>, <code>Start()</code>, <code>Update()</code>, <code>Debug.Log</code>.</li>`, `<li><code>MonoBehaviour</code>, <code>Start()</code>, <code>Update()</code>, <code>Debug.Log</code>.</li>`)
    },
    {
      id: 'cs-unity2',
      title: T('🎮 Unity: deplase yon jwè', '🎮 Unity : déplacer un joueur'),
      noMain: true,
      theory: T(
        `<p>Pou fè yon pèsonaj <b>bouje</b>, nou li klavye a nan <code>Update()</code> epi nou deplase <code>transform</code> li:</p>
         <pre>public float vites = 5f;     // vizib nan editè Unity a!

void Update()
{
    float h = Input.GetAxis("Horizontal");  // ← → oswa A D: -1 → 1
    float v = Input.GetAxis("Vertical");    // ↑ ↓ oswa W S

    Vector3 direksyon = new Vector3(h, 0, v);
    transform.Translate(direksyon * vites * Time.deltaTime);
}</pre>
         <ul><li><code>Vector3</code> — yon pwen/direksyon an 3D (x, y, z).</li>
         <li><code>Time.deltaTime</code> — tan depi dènye imaj la. Li fè mouvman an <b>menm vitès</b> sou tout òdinatè (30 oswa 144 imaj/s).</li>
         <li>Chan <code>public</code> parèt nan <b>Inspector</b> Unity a: ou ka ajiste vitès la san chanje kòd!</li></ul>`,
        `<p>Pour faire <b>bouger</b> un personnage, on lit le clavier dans <code>Update()</code> et on déplace son <code>transform</code> :</p>
         <pre>public float vitesse = 5f;   // visible dans l'éditeur Unity !

void Update()
{
    float h = Input.GetAxis("Horizontal");  // ← → ou A D : -1 → 1
    float v = Input.GetAxis("Vertical");    // ↑ ↓ ou W S

    Vector3 direction = new Vector3(h, 0, v);
    transform.Translate(direction * vitesse * Time.deltaTime);
}</pre>
         <ul><li><code>Vector3</code> — un point/une direction en 3D (x, y, z).</li>
         <li><code>Time.deltaTime</code> — le temps depuis la dernière image. Il rend le mouvement <b>aussi rapide</b> sur tous les PC (30 ou 144 images/s).</li>
         <li>Les champs <code>public</code> apparaissent dans l'<b>Inspector</b> d'Unity : on peut régler la vitesse sans toucher au code !</li></ul>`
      ),
      task: T(
        'Konplete <code>Update()</code>: li <code>Input.GetAxis("Horizontal")</code> ak <code>"Vertical"</code>, kreye yon <code>Vector3</code>, epi rele <code>transform.Translate(… * vites * Time.deltaTime)</code>.',
        'Complète <code>Update()</code> : lis <code>Input.GetAxis("Horizontal")</code> et <code>"Vertical"</code>, crée un <code>Vector3</code>, puis appelle <code>transform.Translate(… * vites * Time.deltaTime)</code>.'
      ),
      hint: T('<code>transform.Translate(new Vector3(h, 0, v) * vites * Time.deltaTime);</code>', '<code>transform.Translate(new Vector3(h, 0, v) * vites * Time.deltaTime);</code>'),
      starter: 'using UnityEngine;\n\npublic class Jwe : MonoBehaviour\n{\n    public float vites = 5f;\n\n    void Update()\n    {\n        // ✍️\n    }\n}\n',
      solution: 'using UnityEngine;\n\npublic class Jwe : MonoBehaviour\n{\n    public float vites = 5f;\n\n    void Update()\n    {\n        float h = Input.GetAxis("Horizontal");\n        float v = Input.GetAxis("Vertical");\n\n        Vector3 direksyon = new Vector3(h, 0, v);\n        transform.Translate(direksyon * vites * Time.deltaTime);\n    }\n}\n',
      output: '[Unity] ▶ Jwè a ap deplase ak ← → ↑ ↓',
      check: need(
        R(/Input\.GetAxis\s*\(\s*"Horizontal"\s*\)/, 'Li <code>Input.GetAxis("Horizontal")</code>.', 'Lis <code>Input.GetAxis("Horizontal")</code>.'),
        R(/Input\.GetAxis\s*\(\s*"Vertical"\s*\)/, 'Li <code>Input.GetAxis("Vertical")</code>.', 'Lis <code>Input.GetAxis("Vertical")</code>.'),
        R(/new\s+Vector3\s*\(/, 'Kreye yon <code>new Vector3(h, 0, v)</code>.', 'Crée un <code>new Vector3(h, 0, v)</code>.'),
        R(/transform\.Translate\s*\(/, 'Deplase ak <code>transform.Translate(…)</code>.', 'Déplace avec <code>transform.Translate(…)</code>.'),
        R(/Time\.deltaTime/, 'Miltipliye pa <code>Time.deltaTime</code> pou vitès la menm sou tout òdinatè.', 'Multiplie par <code>Time.deltaTime</code> pour une vitesse identique sur tous les PC.'),
        R(/\bvites\b[^;]*\*|\*[^;]*\bvites\b/, 'Itilize <code>vites</code> nan kalkil la.', 'Utilise <code>vites</code> dans le calcul.')
      ),
      tips: T(`<li><code>5f</code> — <code>f</code> la vle di <code>float</code> (Unity itilize <code>float</code>, pa <code>double</code>).</li><li>Unity itilize <b>camelCase</b> pou pwopriyete tankou <code>transform</code>, <code>deltaTime</code>.</li>`, `<li><code>5f</code> — le <code>f</code> signifie <code>float</code> (Unity utilise <code>float</code>, pas <code>double</code>).</li><li>Unity utilise le <b>camelCase</b> pour des propriétés comme <code>transform</code>, <code>deltaTime</code>.</li>`),
      recap: T(`<li><code>Input.GetAxis</code> → <code>Vector3</code> → <code>transform.Translate</code>.</li><li>Toujou <code>* Time.deltaTime</code>.</li>`, `<li><code>Input.GetAxis</code> → <code>Vector3</code> → <code>transform.Translate</code>.</li><li>Toujours <code>* Time.deltaTime</code>.</li>`)
    },
    {
      id: 'cs-unity3',
      title: T('🎮 Unity: kolizyon ak pwen', '🎮 Unity : collisions et score'),
      noMain: true,
      theory: T(
        `<p>Lè 2 objè ki gen <b>Collider</b> touche, Unity rele metòd espesyal:</p>
         <pre>void OnTriggerEnter(Collider lot)   // yon objè "trigger" antre
{
    if (lot.CompareTag("Pyes"))       // ki kalite objè?
    {
        pwen++;
        Destroy(lot.gameObject);      // fè pyès la disparèt
        Debug.Log($"Pwen: {pwen}");
    }
}</pre>
         <ul><li><b>Tag</b> — yon etikèt ou bay objè nan editè a ("Pyes", "Lènmi"…).</li>
         <li><code>Destroy(…)</code> — retire yon objè nan sèn nan.</li>
         <li>Gen <code>OnCollisionEnter</code> tou pou kolizyon fizik (rebondi).</li></ul>
         <p>Avèk 3 leson Unity sa yo, ou gen baz yon jwè ki <b>deplase</b> epi ki <b>ranmase</b> pyès — yon vrè jwè platfòm! 🪙</p>`,
        `<p>Quand 2 objets avec un <b>Collider</b> se touchent, Unity appelle une méthode spéciale :</p>
         <pre>void OnTriggerEnter(Collider autre)   // un objet "trigger" entre
{
    if (autre.CompareTag("Piece"))      // quel type d'objet ?
    {
        score++;
        Destroy(autre.gameObject);      // fait disparaître la pièce
        Debug.Log($"Score : {score}");
    }
}</pre>
         <ul><li><b>Tag</b> — une étiquette donnée aux objets dans l'éditeur ("Piece", "Ennemi"…).</li>
         <li><code>Destroy(…)</code> — retire un objet de la scène.</li>
         <li>Il existe aussi <code>OnCollisionEnter</code> pour les collisions physiques (rebonds).</li></ul>
         <p>Avec ces 3 leçons Unity, tu as la base d'un joueur qui <b>se déplace</b> et <b>ramasse</b> des pièces — un vrai jeu de plateforme ! 🪙</p>`
      ),
      task: T(
        'Ekri <code>void OnTriggerEnter(Collider lot)</code>: si <code>lot.CompareTag("Pyes")</code>, ogmante <code>pwen</code>, <code>Destroy(lot.gameObject)</code>, epi <code>Debug.Log</code> pwen yo.',
        'Écris <code>void OnTriggerEnter(Collider lot)</code> : si <code>lot.CompareTag("Pyes")</code>, incrémente <code>pwen</code>, <code>Destroy(lot.gameObject)</code>, puis <code>Debug.Log</code> le score.'
      ),
      hint: T('<code>if (lot.CompareTag("Pyes")) { pwen++; Destroy(lot.gameObject); Debug.Log($"Pwen: {pwen}"); }</code>', '<code>if (lot.CompareTag("Pyes")) { pwen++; Destroy(lot.gameObject); Debug.Log($"Score : {pwen}"); }</code>'),
      starter: 'using UnityEngine;\n\npublic class Kolekte : MonoBehaviour\n{\n    private int pwen = 0;\n\n    // ✍️ OnTriggerEnter\n}\n',
      solution: 'using UnityEngine;\n\npublic class Kolekte : MonoBehaviour\n{\n    private int pwen = 0;\n\n    void OnTriggerEnter(Collider lot)\n    {\n        if (lot.CompareTag("Pyes"))\n        {\n            pwen++;\n            Destroy(lot.gameObject);\n            Debug.Log($"Pwen: {pwen}");\n        }\n    }\n}\n',
      output: '[Unity Console] Pwen: 1\n[Unity Console] Pwen: 2\n[Unity Console] Pwen: 3',
      check: need(
        R(/void\s+OnTriggerEnter\s*\(\s*Collider\s+(\w+)\s*\)/, 'Ekri <code>void OnTriggerEnter(Collider lot)</code> (O, T, E majiskil).', 'Écris <code>void OnTriggerEnter(Collider lot)</code> (O, T, E majuscules).'),
        R(/\w+\.CompareTag\s*\(\s*"Pyes"\s*\)/, 'Tcheke tag la: <code>lot.CompareTag("Pyes")</code>.', 'Teste le tag : <code>lot.CompareTag("Pyes")</code>.'),
        R(/pwen\s*(\+\+|\+=\s*1)/, 'Ogmante <code>pwen++</code>.', 'Incrémente <code>pwen++</code>.'),
        R(/Destroy\s*\(\s*\w+\.gameObject\s*\)/, 'Fè pyès la disparèt: <code>Destroy(lot.gameObject);</code>', 'Fais disparaître la pièce : <code>Destroy(lot.gameObject);</code>'),
        R(/Debug\.Log\s*\(/, 'Afiche pwen yo ak <code>Debug.Log</code>.', 'Affiche le score avec <code>Debug.Log</code>.')
      ),
      tips: T(`<li>Pou <code>OnTriggerEnter</code> mache, youn nan 2 objè yo dwe gen yon <b>Rigidbody</b>, e Collider pyès la dwe gen <b>Is Trigger</b> koche.</li><li>Si w ekri <code>onTriggerEnter</code> (o miniskil), Unity p ap janm rele l — san erè!</li>`, `<li>Pour que <code>OnTriggerEnter</code> marche, l'un des 2 objets doit avoir un <b>Rigidbody</b>, et le Collider de la pièce doit avoir <b>Is Trigger</b> coché.</li><li>Si tu écris <code>onTriggerEnter</code> (o minuscule), Unity ne l'appellera jamais — sans erreur !</li>`),
      recap: T(`<li><code>OnTriggerEnter</code>, <code>CompareTag</code>, <code>Destroy</code>.</li>`, `<li><code>OnTriggerEnter</code>, <code>CompareTag</code>, <code>Destroy</code>.</li>`)
    },

    /* ---------- Semèn 32: Web ak pwojè final ---------- */
    {
      id: 'cs-api1',
      title: T('🌐 ASP.NET: premye API ou', '🌐 ASP.NET : ta première API'),
      noMain: true,
      theory: T(
        `<p>Ak <b>ASP.NET Core</b>, C# ka kreye <b>sèvè web</b> ak <b>API</b> — sa ki bay done bay aplikasyon mobil ak sit JavaScript yo! Konekte ak tout sa w te aprann nan mwa 1-3! 🔗</p>
         <pre>// Program.cs — "Minimal API" (C# 10+: pa bezwen class ni Main!)
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () =&gt; "Bonjou depi C#!");
app.MapGet("/le", () =&gt; DateTime.Now.ToString("HH:mm"));

app.Run();</pre>
         <p>Kreye pwojè a: <code>dotnet new web -n MonApi</code>, answit <code>dotnet run</code>, epi louvri <code>http://localhost:5000</code> nan navigatè w.</p>
         <p><code>MapGet</code> = "lè yon moun mande adrès sa a (GET), reponn ak sa a". Kòd sa a ekri ak <b>top-level statements</b>: kòd la dirèkteman nan fichye a, san <code>Main</code>.</p>`,
        `<p>Avec <b>ASP.NET Core</b>, C# peut créer des <b>serveurs web</b> et des <b>API</b> — ce qui fournit les données aux applis mobiles et aux sites JavaScript ! Ça relie tout ce que tu as appris aux mois 1-3 ! 🔗</p>
         <pre>// Program.cs — "Minimal API" (C# 10+ : ni class ni Main !)
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () =&gt; "Bonjour depuis C# !");
app.MapGet("/heure", () =&gt; DateTime.Now.ToString("HH:mm"));

app.Run();</pre>
         <p>Crée le projet : <code>dotnet new web -n MonApi</code>, puis <code>dotnet run</code>, et ouvre <code>http://localhost:5000</code> dans ton navigateur.</p>
         <p><code>MapGet</code> = « quand quelqu'un demande cette adresse (GET), réponds ceci ». Ce code utilise des <b>top-level statements</b> : le code est directement dans le fichier, sans <code>Main</code>.</p>`
      ),
      task: T(
        'Ekri yon Minimal API: kreye <code>builder</code> ak <code>app</code>, ajoute <code>app.MapGet("/", …)</code> ki retounen yon mesaj, ak <code>app.MapGet("/elev", …)</code> ki retounen yon tablo non, epi <code>app.Run();</code>',
        'Écris une Minimal API : crée <code>builder</code> et <code>app</code>, ajoute <code>app.MapGet("/", …)</code> qui renvoie un message, et <code>app.MapGet("/elev", …)</code> qui renvoie un tableau de noms, puis <code>app.Run();</code>'
      ),
      hint: T('<code>app.MapGet("/elev", () =&gt; new[] { "Ana", "Jak" });</code> — ASP.NET konvèti tablo a an JSON otomatikman!', '<code>app.MapGet("/elev", () =&gt; new[] { "Ana", "Jak" });</code> — ASP.NET convertit le tableau en JSON automatiquement !'),
      starter: '// Program.cs — Minimal API\n// ✍️\n',
      solution: 'var builder = WebApplication.CreateBuilder(args);\nvar app = builder.Build();\n\napp.MapGet("/", () => "Bonjou depi C#! 🇭🇹");\napp.MapGet("/elev", () => new[] { "Ana", "Jak", "Lise" });\n\napp.Run();\n',
      output: ({ code }) => `info: Now listening on: http://localhost:5000\nGET /     → ${(code.match(/MapGet\s*\(\s*"\/"\s*,\s*\(\s*\)\s*=>\s*"([^"]*)"/) || [])[1] || '…'}\nGET /elev → ${JSON.stringify(((code.match(/MapGet\s*\(\s*"\/elev"[^{]*\{([^}]*)\}/) || [])[1] || '').match(/"([^"]*)"/g)?.map(s => s.slice(1, -1)) || [])}`,
      check: need(
        R(/var\s+builder\s*=\s*WebApplication\.CreateBuilder\s*\(\s*args\s*\)\s*;/, 'Kòmanse ak <code>var builder = WebApplication.CreateBuilder(args);</code>', 'Commence par <code>var builder = WebApplication.CreateBuilder(args);</code>'),
        R(/var\s+app\s*=\s*builder\.Build\s*\(\s*\)\s*;/, 'Answit <code>var app = builder.Build();</code>', 'Puis <code>var app = builder.Build();</code>'),
        R(/app\.MapGet\s*\(\s*"\/"\s*,\s*\(\s*\)\s*=>/, 'Ajoute <code>app.MapGet("/", () =&gt; "…");</code>', 'Ajoute <code>app.MapGet("/", () =&gt; "…");</code>'),
        R(/app\.MapGet\s*\(\s*"\/elev"\s*,\s*\(\s*\)\s*=>/, 'Ajoute <code>app.MapGet("/elev", () =&gt; new[] { … });</code>', 'Ajoute <code>app.MapGet("/elev", () =&gt; new[] { … });</code>'),
        R(/app\.Run\s*\(\s*\)\s*;/, 'Fini ak <code>app.Run();</code>', 'Termine par <code>app.Run();</code>')
      ),
      tips: T(`<li><code>app.Run()</code> dwe <b>dènye</b> liy lan — kòd apre l pa egzekite tank sèvè a ap kouri.</li>`, `<li><code>app.Run()</code> doit être la <b>dernière</b> ligne — le code après ne s'exécute pas tant que le serveur tourne.</li>`),
      recap: T(`<li><code>WebApplication</code> + <code>MapGet</code> + <code>Run</code> = API.</li><li>Objè/tablo → JSON otomatik.</li>`, `<li><code>WebApplication</code> + <code>MapGet</code> + <code>Run</code> = API.</li><li>Objets/tableaux → JSON automatique.</li>`)
    },
    {
      id: 'cs-api2',
      title: T('🌐 API: paramèt ak done', '🌐 API : paramètres et données'),
      noMain: true,
      theory: T(
        `<p>Yon vrè API resevwa <b>paramèt</b> nan adrès la, epi li retounen <b>objè</b> (an JSON):</p>
         <pre>var pwodwi = new List&lt;Pwodwi&gt;
{
    new Pwodwi(1, "Diri", 250),
    new Pwodwi(2, "Pwa", 300)
};

app.MapGet("/pwodwi", () =&gt; pwodwi);   // tout lis la

app.MapGet("/pwodwi/{id}", (int id) =&gt;  // {id} nan URL la → paramèt
{
    var p = pwodwi.FirstOrDefault(x =&gt; x.Id == id);
    return p is null ? Results.NotFound() : Results.Ok(p);
});

app.MapPost("/pwodwi", (Pwodwi p) =&gt; { pwodwi.Add(p); return Results.Created($"/pwodwi/{p.Id}", p); });

record Pwodwi(int Id, string Non, double Pri);</pre>
         <p>Nan JavaScript (mwa 3!), ou ta rele l konsa: <code>const rep = await fetch("/pwodwi/1"); const p = await rep.json();</code> 🔗</p>`,
        `<p>Une vraie API reçoit des <b>paramètres</b> dans l'adresse, et renvoie des <b>objets</b> (en JSON) :</p>
         <pre>var produits = new List&lt;Produit&gt;
{
    new Produit(1, "Riz", 250),
    new Produit(2, "Pois", 300)
};

app.MapGet("/produits", () =&gt; produits);   // toute la liste

app.MapGet("/produits/{id}", (int id) =&gt;    // {id} dans l'URL → paramètre
{
    var p = produits.FirstOrDefault(x =&gt; x.Id == id);
    return p is null ? Results.NotFound() : Results.Ok(p);
});

app.MapPost("/produits", (Produit p) =&gt; { produits.Add(p); return Results.Created($"/produits/{p.Id}", p); });

record Produit(int Id, string Nom, double Prix);</pre>
         <p>En JavaScript (mois 3 !), on l'appellerait ainsi : <code>const rep = await fetch("/produits/1"); const p = await rep.json();</code> 🔗</p>`
    ),
      task: T(
        'Ajoute <code>app.MapGet("/pwodwi", () =&gt; pwodwi);</code> ak <code>app.MapGet("/pwodwi/{id}", (int id) =&gt; …)</code> ki retounen pwodwi a ak <code>FirstOrDefault</code>.',
        'Ajoute <code>app.MapGet("/pwodwi", () =&gt; pwodwi);</code> et <code>app.MapGet("/pwodwi/{id}", (int id) =&gt; …)</code> qui renvoie le produit avec <code>FirstOrDefault</code>.'
      ),
      hint: T('<code>app.MapGet("/pwodwi/{id}", (int id) =&gt; pwodwi.FirstOrDefault(p =&gt; p.Id == id));</code>', '<code>app.MapGet("/pwodwi/{id}", (int id) =&gt; pwodwi.FirstOrDefault(p =&gt; p.Id == id));</code>'),
      starter: 'var builder = WebApplication.CreateBuilder(args);\nvar app = builder.Build();\n\nvar pwodwi = new List<Pwodwi>\n{\n    new Pwodwi(1, "Diri", 250),\n    new Pwodwi(2, "Pwa", 300)\n};\n\n// ✍️ routes\n\napp.Run();\n\nrecord Pwodwi(int Id, string Non, double Pri);\n',
      solution: 'var builder = WebApplication.CreateBuilder(args);\nvar app = builder.Build();\n\nvar pwodwi = new List<Pwodwi>\n{\n    new Pwodwi(1, "Diri", 250),\n    new Pwodwi(2, "Pwa", 300)\n};\n\napp.MapGet("/pwodwi", () => pwodwi);\napp.MapGet("/pwodwi/{id}", (int id) => pwodwi.FirstOrDefault(p => p.Id == id));\n\napp.Run();\n\nrecord Pwodwi(int Id, string Non, double Pri);\n',
      output: 'GET /pwodwi   → [{"id":1,"non":"Diri","pri":250},{"id":2,"non":"Pwa","pri":300}]\nGET /pwodwi/2 → {"id":2,"non":"Pwa","pri":300}',
      check: need(
        R(/app\.MapGet\s*\(\s*"\/pwodwi"\s*,\s*\(\s*\)\s*=>\s*pwodwi\s*\)/, 'Ajoute <code>app.MapGet("/pwodwi", () =&gt; pwodwi);</code>', 'Ajoute <code>app.MapGet("/pwodwi", () =&gt; pwodwi);</code>'),
        R(/app\.MapGet\s*\(\s*"\/pwodwi\/\{id\}"\s*,\s*\(\s*int\s+id\s*\)\s*=>/, 'Ajoute <code>app.MapGet("/pwodwi/{id}", (int id) =&gt; …)</code>.', 'Ajoute <code>app.MapGet("/pwodwi/{id}", (int id) =&gt; …)</code>.'),
        R(/FirstOrDefault\s*\(\s*\(?\s*(\w+)\s*\)?\s*=>\s*\1\.Id\s*==\s*id\s*\)/, 'Chèche ak <code>pwodwi.FirstOrDefault(p =&gt; p.Id == id)</code>.', 'Cherche avec <code>pwodwi.FirstOrDefault(p =&gt; p.Id == id)</code>.'),
        R(c => c.clean.search(/app\.MapGet\s*\(\s*"\/pwodwi\/\{id\}"/) < c.clean.search(/app\.Run\s*\(/), 'Routes yo dwe <b>anvan</b> <code>app.Run();</code>', 'Les routes doivent être <b>avant</b> <code>app.Run();</code>')
      ),
      tips: T(`<li>Non paramèt lambda a (<code>id</code>) dwe koresponn ak <code>{id}</code> nan URL la.</li><li>ASP.NET mete non pwopriyete yo an <b>camelCase</b> nan JSON (<code>Non</code> → <code>"non"</code>).</li>`, `<li>Le nom du paramètre de la lambda (<code>id</code>) doit correspondre à <code>{id}</code> dans l'URL.</li><li>ASP.NET met les propriétés en <b>camelCase</b> dans le JSON (<code>Nom</code> → <code>"nom"</code>).</li>`),
      recap: T(`<li><code>"/x/{id}"</code> + <code>(int id) =&gt; …</code></li><li><code>MapGet</code>, <code>MapPost</code>, <code>Results.Ok/NotFound</code>.</li>`, `<li><code>"/x/{id}"</code> + <code>(int id) =&gt; …</code></li><li><code>MapGet</code>, <code>MapPost</code>, <code>Results.Ok/NotFound</code>.</li>`)
    },
    {
      id: 'cs-test',
      title: T('🧪 Tès inite ak xUnit', '🧪 Tests unitaires avec xUnit'),
      noMain: true,
      theory: T(
        `<p>Pwofesyonèl yo pa tcheke kòd yo alamen chak fwa — yo ekri <b>tès otomatik</b>! Yon tès inite verifye yon ti moso kòd (yon metòd) bay bon rezilta:</p>
         <pre>using Xunit;

public class KalkilatrisTes
{
    [Fact]                                   // sa a se yon tès
    public void Ajoute_2_ak_3_bay_5()
    {
        int rezilta = Kalkilatris.Ajoute(2, 3);   // Aji
        Assert.Equal(5, rezilta);                 // Verifye
    }
}</pre>
         <ul><li><code>[Fact]</code> — yon <b>atribi</b> ki make metòd la kòm tès.</li>
         <li><code>Assert.Equal(espere, reyèl)</code>, <code>Assert.True(…)</code>, <code>Assert.False(…)</code>, <code>Assert.Throws&lt;E&gt;(…)</code>.</li></ul>
         <p>Kouri tès yo: <code>dotnet test</code>. ✅ = tout bon. ❌ = ou kase yon bagay — epi ou konnen touswit ki kote!</p>`,
        `<p>Les pros ne vérifient pas leur code à la main à chaque fois — ils écrivent des <b>tests automatiques</b> ! Un test unitaire vérifie qu'un petit bout de code (une méthode) donne le bon résultat :</p>
         <pre>using Xunit;

public class CalculatriceTests
{
    [Fact]                                   // ceci est un test
    public void Ajoute_2_et_3_donne_5()
    {
        int resultat = Calculatrice.Ajoute(2, 3);  // Agir
        Assert.Equal(5, resultat);                 // Vérifier
    }
}</pre>
         <ul><li><code>[Fact]</code> — un <b>attribut</b> qui marque la méthode comme test.</li>
         <li><code>Assert.Equal(attendu, réel)</code>, <code>Assert.True(…)</code>, <code>Assert.False(…)</code>, <code>Assert.Throws&lt;E&gt;(…)</code>.</li></ul>
         <p>Lancer les tests : <code>dotnet test</code>. ✅ = tout va bien. ❌ = tu as cassé quelque chose — et tu sais tout de suite où !</p>`
      ),
      task: T(
        'Ajoute 2 tès <code>[Fact]</code> pou <code>Kalkilatris.EstPe</code>: youn ki verifye <code>Assert.True(Kalkilatris.EstPe(4))</code>, youn ki verifye <code>Assert.False(Kalkilatris.EstPe(7))</code>.',
        'Ajoute 2 tests <code>[Fact]</code> pour <code>Kalkilatris.EstPe</code> : un qui vérifie <code>Assert.True(Kalkilatris.EstPe(4))</code>, un qui vérifie <code>Assert.False(Kalkilatris.EstPe(7))</code>.'
      ),
      hint: T('<code>[Fact] public void EstPe_4_se_vre() { Assert.True(Kalkilatris.EstPe(4)); }</code>', '<code>[Fact] public void EstPe_4_est_vrai() { Assert.True(Kalkilatris.EstPe(4)); }</code>'),
      starter: 'using Xunit;\n\npublic class Kalkilatris\n{\n    public static int Ajoute(int a, int b) => a + b;\n    public static bool EstPe(int n) => n % 2 == 0;\n}\n\npublic class KalkilatrisTes\n{\n    [Fact]\n    public void Ajoute_2_ak_3_bay_5()\n    {\n        Assert.Equal(5, Kalkilatris.Ajoute(2, 3));\n    }\n\n    // ✍️ 2 nouvo tès\n}\n',
      solution: 'using Xunit;\n\npublic class Kalkilatris\n{\n    public static int Ajoute(int a, int b) => a + b;\n    public static bool EstPe(int n) => n % 2 == 0;\n}\n\npublic class KalkilatrisTes\n{\n    [Fact]\n    public void Ajoute_2_ak_3_bay_5()\n    {\n        Assert.Equal(5, Kalkilatris.Ajoute(2, 3));\n    }\n\n    [Fact]\n    public void EstPe_4_se_vre()\n    {\n        Assert.True(Kalkilatris.EstPe(4));\n    }\n\n    [Fact]\n    public void EstPe_7_se_fo()\n    {\n        Assert.False(Kalkilatris.EstPe(7));\n    }\n}\n',
      output: '$ dotnet test\nPassed!  - Failed: 0, Passed: 3, Skipped: 0, Total: 3 ✅',
      check: need(
        R(count(/\[\s*Fact\s*\]/, 3), 'Ou bezwen 3 tès <code>[Fact]</code> total (1 ki la deja + 2 nouvo).', 'Il faut 3 tests <code>[Fact]</code> au total (1 existant + 2 nouveaux).'),
        R(/Assert\.True\s*\(\s*Kalkilatris\.EstPe\s*\(\s*\d*[02468]\s*\)\s*\)/, 'Ajoute <code>Assert.True(Kalkilatris.EstPe(4));</code>', 'Ajoute <code>Assert.True(Kalkilatris.EstPe(4));</code>'),
        R(/Assert\.False\s*\(\s*Kalkilatris\.EstPe\s*\(\s*\d*[13579]\s*\)\s*\)/, 'Ajoute <code>Assert.False(Kalkilatris.EstPe(7));</code>', 'Ajoute <code>Assert.False(Kalkilatris.EstPe(7));</code>'),
        R(count(/public\s+void\s+\w+\s*\(\s*\)/, 3), 'Chak tès se yon <code>public void NonTes()</code>.', 'Chaque test est un <code>public void NomTest()</code>.')
      ),
      tips: T(`<li>Bay tès yo non ki dekri sa yo verifye: <code>Metòd_Sitiyasyon_RezilaEspere</code>.</li><li>Yon tès = yon sèl bagay pou verifye.</li>`, `<li>Donne aux tests des noms qui décrivent ce qu'ils vérifient : <code>Methode_Situation_ResultatAttendu</code>.</li><li>Un test = une seule chose à vérifier.</li>`),
      recap: T(`<li><code>[Fact]</code> + <code>Assert.*</code> + <code>dotnet test</code>.</li>`, `<li><code>[Fact]</code> + <code>Assert.*</code> + <code>dotnet test</code>.</li>`)
    },
    {
      id: 'cs-final1',
      title: T('🎓 Pwojè final 1: jesyon nòt', '🎓 Projet final 1 : gestion des notes'),
      theory: T(
        `<p>Bienveni nan <b>pwojè final</b> la! 🎓 N ap bati yon sistèm jesyon nòt pou yon lekòl — ak <b>tout</b> sa w aprann.</p>
         <p>Nouvo konsèp: <code>params</code> pèmèt yon metòd resevwa <b>kantite agiman ou vle</b>:</p>
         <pre>public Elev(string non, params double[] notes)

new Elev("Ana", 85, 92, 78);          // 3 nòt
new Elev("Jak", 55, 61, 48, 70, 66);  // 5 nòt</pre>
         <p>Etap 1: chak <code>Elev</code> konnen kalkile <b>mwayèn</b> li. Avèk LINQ, se yon sèl liy: <code>Notes.Average()</code>.</p>`,
        `<p>Bienvenue dans le <b>projet final</b> ! 🎓 On construit un système de gestion des notes pour une école — avec <b>tout</b> ce que tu as appris.</p>
         <p>Nouveau concept : <code>params</code> permet à une méthode de recevoir <b>autant d'arguments qu'on veut</b> :</p>
         <pre>public Eleve(string nom, params double[] notes)

new Eleve("Ana", 85, 92, 78);          // 3 notes
new Eleve("Jacques", 55, 61, 48, 70);  // 4 notes</pre>
         <p>Étape 1 : chaque <code>Elev</code> sait calculer sa <b>moyenne</b>. Avec LINQ, c'est une seule ligne : <code>Notes.Average()</code>.</p>`
      ),
      task: T(
        'Ajoute metòd <code>public double Mwayen()</code> nan <code>Elev</code> (ak <code>Notes.Average()</code>). Nan Main, pakouri <code>klas</code> epi afiche <code>$"{e.Non}: {e.Mwayen():F2}"</code> pou chak elèv.',
        'Ajoute la méthode <code>public double Mwayen()</code> à <code>Elev</code> (avec <code>Notes.Average()</code>). Dans Main, parcours <code>klas</code> et affiche <code>$"{e.Non} : {e.Mwayen():F2}"</code> pour chaque élève.'
      ),
      hint: T('<code>public double Mwayen() =&gt; Notes.Average();</code>', '<code>public double Mwayen() =&gt; Notes.Average();</code>'),
      starter: csProg({ usings: ['System.Collections.Generic', 'System.Linq'], main: KLAS_MAIN + '\n// ✍️ afiche mwayèn chak elèv', after: ELEV_STARTER }),
      solution: csProg({ usings: ['System.Collections.Generic', 'System.Linq'], main: KLAS_MAIN + '\nforeach (var e in klas)\n{\n    Console.WriteLine($"{e.Non}: {e.Mwayen():F2}");\n}', after: ELEV }),
      output: ({ code }) => parseElev(code).map(e => `${e.non}: ${e.avg.toFixed(2)}`).join('\n'),
      check: need(
        R(/public\s+double\s+Mwayen\s*\(\s*\)/, 'Ajoute <code>public double Mwayen()</code>.', 'Ajoute <code>public double Mwayen()</code>.'),
        R(/Notes\.Average\s*\(\s*\)|Notes\.Sum\s*\(\s*\)\s*\/\s*Notes\.Count/, 'Kalkile ak <code>Notes.Average()</code>.', 'Calcule avec <code>Notes.Average()</code>.'),
        R(inMain(/foreach\s*\(\s*(var|Elev)\s+\w+\s+in\s+klas\s*\)/), 'Pakouri ak <code>foreach (var e in klas)</code>.', 'Parcours avec <code>foreach (var e in klas)</code>.'),
        R(inMain(/\{\s*\w+\.Mwayen\s*\(\s*\)\s*:\s*F2\s*\}/), 'Afiche <code>{e.Mwayen():F2}</code>.', 'Affiche <code>{e.Mwayen():F2}</code>.')
      ),
      tips: T(`<li><code>params</code> dwe <b>dènye</b> paramèt la, epi gen youn sèlman pa metòd.</li>`, `<li><code>params</code> doit être le <b>dernier</b> paramètre, et un seul par méthode.</li>`),
      recap: T(`<li><code>params T[]</code> = kantite agiman varyab.</li><li>LINQ fè kalkil yo kout.</li>`, `<li><code>params T[]</code> = nombre d'arguments variable.</li><li>LINQ raccourcit les calculs.</li>`)
    },
    {
      id: 'cs-final2',
      title: T('🎓 Pwojè final 2: rapò ak klasman', '🎓 Projet final 2 : bulletin et classement'),
      theory: T(
        `<p>Dènye leson! 🏁 Ann jenere yon <b>rapò</b> konplè pou direksyon lekòl la:</p>
         <ol><li><b>Klasman</b> — elèv yo klase pa mwayèn, pi bon an premye (<code>OrderByDescending</code>).</li>
         <li><b>Premye klas la</b> 🏆 (<code>First()</code>).</li>
         <li><b>Kantite ki pase</b> — mwayèn &gt;= 60 (<code>Count(kondisyon)</code>).</li></ol>
         <pre>var klase = klas.OrderByDescending(e =&gt; e.Mwayen()).ToList();

for (int i = 0; i &lt; klase.Count; i++)
    Console.WriteLine($"{i + 1}. {klase[i].Non} — {klase[i].Mwayen():F2}");</pre>
         <p>Sa w ap fè la a — modèl done, LINQ, fòmataj, bouk — se egzakteman sa devlopè yo fè chak jou nan biwo yo. 💼</p>`,
        `<p>Dernière leçon ! 🏁 Générons un <b>bulletin</b> complet pour la direction de l'école :</p>
         <ol><li><b>Classement</b> — les élèves triés par moyenne, le meilleur d'abord (<code>OrderByDescending</code>).</li>
         <li><b>Major de promo</b> 🏆 (<code>First()</code>).</li>
         <li><b>Nombre d'admis</b> — moyenne &gt;= 60 (<code>Count(condition)</code>).</li></ol>
         <pre>var classes = klas.OrderByDescending(e =&gt; e.Mwayen()).ToList();

for (int i = 0; i &lt; classes.Count; i++)
    Console.WriteLine($"{i + 1}. {classes[i].Non} — {classes[i].Mwayen():F2}");</pre>
         <p>Ce que tu fais ici — modèle de données, LINQ, formatage, boucles — c'est exactement ce que font les développeurs tous les jours au bureau. 💼</p>`
      ),
      task: T(
        'Jenere rapò a: <b>1)</b> klase elèv yo ak <code>OrderByDescending(e =&gt; e.Mwayen())</code> epi afiche ran yo (<code>1. Lise — 94.00</code>), <b>2)</b> afiche premye a ak <code>First()</code>, <b>3)</b> afiche konbyen ki gen mwayèn <code>&gt;= 60</code> ak <code>Count(…)</code>.',
        'Génère le bulletin : <b>1)</b> trie les élèves avec <code>OrderByDescending(e =&gt; e.Mwayen())</code> et affiche les rangs (<code>1. Lise — 94.00</code>), <b>2)</b> affiche le premier avec <code>First()</code>, <b>3)</b> affiche combien ont une moyenne <code>&gt;= 60</code> avec <code>Count(…)</code>.'
      ),
      hint: T('<code>int pase = klas.Count(e =&gt; e.Mwayen() &gt;= 60);</code>', '<code>int pase = klas.Count(e =&gt; e.Mwayen() &gt;= 60);</code>'),
      starter: csProg({ usings: ['System.Collections.Generic', 'System.Linq'], main: KLAS_MAIN + '\n// ✍️ rapò a', after: ELEV }),
      solution: csProg({ usings: ['System.Collections.Generic', 'System.Linq'], main: KLAS_MAIN + '\nvar klase = klas.OrderByDescending(e => e.Mwayen()).ToList();\n\nConsole.WriteLine("📋 KLASMAN");\nfor (int i = 0; i < klase.Count; i++)\n{\n    Console.WriteLine($"{i + 1}. {klase[i].Non} — {klase[i].Mwayen():F2}");\n}\n\nvar premye = klase.First();\nConsole.WriteLine($"🏆 Premye: {premye.Non}");\n\nint pase = klas.Count(e => e.Mwayen() >= 60);\nConsole.WriteLine($"✅ {pase}/{klas.Count} elèv pase");', after: ELEV }),
      output: ({ code }) => {
        const el = parseElev(code).sort((a, b) => b.avg - a.avg);
        const pase = el.filter(e => e.avg >= 60).length;
        return ['📋 KLASMAN', ...el.map((e, i) => `${i + 1}. ${e.non} — ${e.avg.toFixed(2)}`), `🏆 Premye: ${el[0] ? el[0].non : ''}`, `✅ ${pase}/${el.length} elèv pase`, '', '🎓 FELISITASYON! Ou fini tout pwogram nan!'].join('\n');
      },
      check: need(
        R(/\.OrderByDescending\s*\(\s*\(?\s*(\w+)\s*\)?\s*=>\s*\1\.Mwayen\s*\(\s*\)\s*\)/, 'Klase ak <code>klas.OrderByDescending(e =&gt; e.Mwayen())</code>.', 'Trie avec <code>klas.OrderByDescending(e =&gt; e.Mwayen())</code>.'),
        R(/for\s*\(\s*int\s+\w+\s*=\s*0|foreach\s*\(/, 'Afiche klasman an ak yon bouk.', 'Affiche le classement avec une boucle.'),
        R(/\{\s*\w+\s*\+\s*1\s*\}/, 'Afiche ran an ak <code>{i + 1}</code>.', 'Affiche le rang avec <code>{i + 1}</code>.'),
        R(/\.First\s*\(\s*\)/, 'Jwenn premye a ak <code>.First()</code>.', 'Trouve le premier avec <code>.First()</code>.'),
        R(/\.Count\s*\(\s*\(?\s*(\w+)\s*\)?\s*=>\s*\1\.Mwayen\s*\(\s*\)\s*>=\s*60\s*\)/, 'Konte sa ki pase ak <code>klas.Count(e =&gt; e.Mwayen() &gt;= 60)</code>.', 'Compte les admis avec <code>klas.Count(e =&gt; e.Mwayen() &gt;= 60)</code>.')
      ),
      extra: T(
        `<p>🎓 <b>Felisitasyon!</b> Ou fini 8 mwa pwogram nan: HTML, CSS, JavaScript ak C#. Pwochen etap yo pou w vin yon devlopè pwofesyonèl:</p>
         <ul><li>🛠️ <b>Bati pwojè pa w</b> — se pi bon fason pou aprann. Mete yo sou <b>GitHub</b>.</li>
         <li>🌐 <b>Fullstack</b>: yon fwontann JavaScript (React) + yon API C# (ASP.NET) + yon baz done (SQL / Entity Framework).</li>
         <li>🎮 <b>Jwèt</b>: fè yon ti jwè konplè ak Unity.</li>
         <li>📜 <b>Sètifika</b>: Microsoft Learn ofri kou gratis ak sètifikasyon C#.</li></ul>`,
        `<p>🎓 <b>Félicitations !</b> Tu as terminé les 8 mois du programme : HTML, CSS, JavaScript et C#. Prochaines étapes pour devenir développeur pro :</p>
         <ul><li>🛠️ <b>Construis tes propres projets</b> — la meilleure façon d'apprendre. Publie-les sur <b>GitHub</b>.</li>
         <li>🌐 <b>Fullstack</b> : un frontend JavaScript (React) + une API C# (ASP.NET) + une base de données (SQL / Entity Framework).</li>
         <li>🎮 <b>Jeux</b> : crée un petit jeu complet avec Unity.</li>
         <li>📜 <b>Certification</b> : Microsoft Learn propose des cours gratuits et une certification C#.</li></ul>`
      ),
      tips: T(`<li>Kalkile <code>Mwayen()</code> yon fwa epi sere l si w ap itilize l anpil fwa — se yon bon abitid pou pèfòmans.</li>`, `<li>Calcule <code>Mwayen()</code> une fois et garde-la si tu l'utilises souvent — bonne habitude pour la performance.</li>`),
      recap: T(`<li>🎓 Ou fini pwogram nan — ou se yon <b>devlopè</b> kounye a!</li><li>Kontinye pratike chak jou. 💪</li>`, `<li>🎓 Programme terminé — tu es maintenant un <b>développeur</b> !</li><li>Continue à pratiquer chaque jour. 💪</li>`)
    }
  );
})();
