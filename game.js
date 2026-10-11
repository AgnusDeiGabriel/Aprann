/* =========================================================
   Aprann Kode — motè jwèt la / moteur du jeu
   ========================================================= */
(() => {
  'use strict';

  /* ---------- Tèks entèfas / Textes de l'interface ---------- */
  const UI = {
    ht: {
      heroTitle: 'Aprann kode pandan w ap jwe! 🎮',
      heroSub: 'Yon pwogram 8 mwa pou w vin devlopè: HTML ak CSS (mwa 1), JavaScript (mwa 2-3), epi C# (mwa 4-8). Rezoud defi, ranmase zetwal ak XP!',
      program: 'Pwogram 8 mwa',
      programSub: '1 leson pa jou · 5 jou pa semèn',
      month: 'Mwa',
      week: 'Semèn',
      day: 'Jou',
      resume: 'Kontinye kote w te ye →',
      streak: n => `🔥 ${n} jou`,
      tipsTitle: '⚠️ Erè komen',
      recapTitle: '📌 Sa pou w retni',
      extraTitle: '🔎 Pou ale pi lwen',
      how: 'Kijan pou jwe',
      howSteps: ['Chwazi yon zile', 'Li leson an', 'Ekri kòd ou', 'Tcheke epi genyen ⭐'],
      islands: 'Zile yo',
      lessons: 'leson',
      locked: 'Bloke 🔒',
      lockedMsg: 'Fini zile anvan an pou debloke sa a!',
      start: 'Kòmanse',
      continue: 'Kontinye',
      back: '← Retounen',
      lesson: 'Leson',
      challenge: '🎯 Defi',
      hint: '💡 Endis',
      solution: '🔑 Wè solisyon an',
      check: '▶ Tcheke',
      reset: '↺ Rekòmanse',
      result: 'Rezilta',
      console: 'Konsòl',
      yourCode: 'Kòd ou',
      htmlPage: 'HTML paj la',
      success: 'Bravo! Ou reyisi! 🎉',
      next: 'Pwochen leson →',
      backIsland: 'Retounen nan zile a',
      tryAgain: 'Pa dekouraje, eseye ankò!',
      error: 'Kòd ou gen yon erè:',
      loop: 'Bouk enfini! Bouk ou a pa janm sispann.',
      level: 'Nivo',
      xpGain: 'XP',
      badgeTitle: 'Zile konplete!',
      badgeMsg: n => `Ou fini <b>${n}</b>! Ou debloke pwochen zile a. 🏆`,
      allDone: 'Ou fini TOUT zile yo! Ou se yon vrè kodè. 👑',
      ok: 'Anfòm!',
      resetAll: 'Efase pwogrè mwen',
      resetConfirm: 'Èske w sèten ou vle efase tout pwogrè ou?',
      yes: 'Wi, efase',
      no: 'Non',
      simulated: 'similasyon',
      compiling: 'Konpilasyon…',
      buildOk: 'Konpilasyon reyisi ✔',
      buildFail: 'Konpilasyon echwe ✘',
      shortcut: 'Ctrl + Enter pou tcheke',
      tabLearn: 'Leson',
      tabCode: 'Kòd',
      goCode: 'Ekri kòd la →',
      csErr: {
        braces: 'erè CS1513: akolad <code>{ }</code> yo pa balanse.',
        parens: 'erè CS1026: parantèz <code>( )</code> yo pa balanse.',
        main: 'erè CS5001: pa gen metòd <code>static void Main()</code>.',
        semi: n => `erè CS1002: <code>;</code> manke nan liy ${n}.`
      }
    },
    fr: {
      heroTitle: 'Apprends à coder en jouant ! 🎮',
      heroSub: 'Un programme de 8 mois pour devenir développeur : HTML et CSS (mois 1), JavaScript (mois 2-3), puis C# (mois 4-8). Résous des défis, gagne des étoiles et de l\'XP !',
      program: 'Programme de 8 mois',
      programSub: '1 leçon par jour · 5 jours par semaine',
      month: 'Mois',
      week: 'Semaine',
      day: 'Jour',
      resume: 'Reprendre où tu en étais →',
      streak: n => `🔥 ${n} j`,
      tipsTitle: '⚠️ Erreurs fréquentes',
      recapTitle: '📌 À retenir',
      extraTitle: '🔎 Pour aller plus loin',
      how: 'Comment jouer',
      howSteps: ['Choisis une île', 'Lis la leçon', 'Écris ton code', 'Vérifie et gagne des ⭐'],
      islands: 'Les îles',
      lessons: 'leçons',
      locked: 'Verrouillé 🔒',
      lockedMsg: 'Termine l\'île précédente pour débloquer celle-ci !',
      start: 'Commencer',
      continue: 'Continuer',
      back: '← Retour',
      lesson: 'Leçon',
      challenge: '🎯 Défi',
      hint: '💡 Indice',
      solution: '🔑 Voir la solution',
      check: '▶ Vérifier',
      reset: '↺ Recommencer',
      result: 'Résultat',
      console: 'Console',
      yourCode: 'Ton code',
      htmlPage: 'Le HTML de la page',
      success: 'Bravo ! Tu as réussi ! 🎉',
      next: 'Leçon suivante →',
      backIsland: 'Retour à l\'île',
      tryAgain: 'Ne lâche rien, réessaie !',
      error: 'Ton code contient une erreur :',
      loop: 'Boucle infinie ! Ta boucle ne s\'arrête jamais.',
      level: 'Niveau',
      xpGain: 'XP',
      badgeTitle: 'Île terminée !',
      badgeMsg: n => `Tu as terminé <b>${n}</b> ! L'île suivante est débloquée. 🏆`,
      allDone: 'Tu as terminé TOUTES les îles ! Tu es un vrai codeur. 👑',
      ok: 'Super !',
      resetAll: 'Effacer ma progression',
      resetConfirm: 'Es-tu sûr de vouloir effacer toute ta progression ?',
      yes: 'Oui, effacer',
      no: 'Non',
      simulated: 'simulation',
      compiling: 'Compilation…',
      buildOk: 'Compilation réussie ✔',
      buildFail: 'Échec de la compilation ✘',
      shortcut: 'Ctrl + Entrée pour vérifier',
      tabLearn: 'Leçon',
      tabCode: 'Code',
      goCode: 'Écrire le code →',
      csErr: {
        braces: 'erreur CS1513 : les accolades <code>{ }</code> ne sont pas équilibrées.',
        parens: 'erreur CS1026 : les parenthèses <code>( )</code> ne sont pas équilibrées.',
        main: 'erreur CS5001 : aucune méthode <code>static void Main()</code>.',
        semi: n => `erreur CS1002 : <code>;</code> manquant à la ligne ${n}.`
      }
    }
  };

  /* ---------- Eta / État (sove nan navigatè a) ---------- */
  const STORE_KEY = 'aprann-kode-v1';
  const XP_PER_LEVEL = 120;
  const defaults = () => ({ lang: 'ht', xp: 0, done: {}, code: {}, streak: 0, lastDay: '' });
  let state = (() => {
    try {
      const s = JSON.parse(localStorage.getItem(STORE_KEY));
      if (s && typeof s === 'object') return Object.assign(defaults(), s);
    } catch (e) { /* pa gen aksè */ }
    return defaults();
  })();
  const save = () => { try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* inyore */ } };

  const t = k => UI[state.lang][k];
  const L = o => (o == null ? '' : typeof o === 'string' ? o : o[state.lang]);
  const $ = (s, r = document) => r.querySelector(s);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const app = $('#app');
  let view = { name: 'home' };
  let session = null; // eta leson aktyèl la

  /* ---------- Pwogrè / Progression ---------- */
  const isDone = id => !!state.done[id];
  const modDone = m => m.lessons.filter(l => isDone(l.id)).length;
  const modComplete = m => modDone(m) === m.lessons.length;
  const modUnlocked = i => i === 0 || modComplete(MODULES[i - 1]) || modDone(MODULES[i]) > 0;
  const lessonUnlocked = (mi, li) => modUnlocked(mi) &&
    (li === 0 || isDone(MODULES[mi].lessons[li].id) || isDone(MODULES[mi].lessons[li - 1].id));

  // Kalandriye: 5 leson pa semèn, 4 semèn pa mwa / calendrier : 5 leçons par semaine, 4 semaines par mois
  const WEEK_START = [];
  MODULES.reduce((w, m, i) => { WEEK_START[i] = w; return w + Math.ceil(m.lessons.length / LESSONS_PER_WEEK); }, 0);
  const where = (mi, li) => {
    const gw = WEEK_START[mi] + Math.floor(li / LESSONS_PER_WEEK);
    return { week: gw + 1, month: Math.floor(gw / 4) + 1, day: (li % LESSONS_PER_WEEK) + 1, localWeek: Math.floor(li / LESSONS_PER_WEEK) };
  };
  const nextLesson = () => {
    for (let mi = 0; mi < MODULES.length; mi++) {
      for (let li = 0; li < MODULES[mi].lessons.length; li++) {
        if (!isDone(MODULES[mi].lessons[li].id) && lessonUnlocked(mi, li)) return { mi, li };
      }
    }
    return null;
  };
  const dayKey = d => `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
  const today = () => dayKey(new Date());
  const yesterday = () => dayKey(new Date(Date.now() - 864e5));
  function bumpStreak() {
    const t0 = today();
    if (state.lastDay === t0) return;
    state.streak = state.lastDay === yesterday() ? (state.streak || 0) + 1 : 1;
    state.lastDay = t0;
  }
  const currentStreak = () => (state.lastDay === today() || state.lastDay === yesterday() ? state.streak || 0 : 0);
  const stars = id => state.done[id] || 0;
  const starStr = n => '★'.repeat(n) + '☆'.repeat(3 - n);

  function updateHeader() {
    const lvl = Math.floor(state.xp / XP_PER_LEVEL) + 1;
    $('#levelLabel').textContent = `${t('level')} ${lvl}`;
    const st = currentStreak();
    $('#xpLabel').textContent = `${state.xp} XP${st ? ' · ' + t('streak')(st) : ''}`;
    $('#xpFill').style.width = `${((state.xp % XP_PER_LEVEL) / XP_PER_LEVEL) * 100}%`;
    document.querySelectorAll('.lang button').forEach(b => b.classList.toggle('active', b.dataset.lang === state.lang));
    document.documentElement.lang = state.lang;
  }

  /* ---------- Navigasyon ---------- */
  function go(v) {
    view = v;
    if (v.name !== 'lesson') session = null;
    render();
    window.scrollTo(0, 0);
  }

  function render() {
    updateHeader();
    if (view.name === 'home') renderHome();
    else if (view.name === 'module') renderModule(view.m);
    else renderLesson(view.m, view.l);
  }

  /* ---------- Paj lakay / Accueil ---------- */
  function renderHome() {
    const total = MODULES.reduce((a, m) => a + m.lessons.length, 0);
    const done = MODULES.reduce((a, m) => a + modDone(m), 0);
    const nx = nextLesson();
    const months = [];
    MODULES.forEach((m, mi) => m.lessons.forEach((l, li) => {
      const n = where(mi, li).month;
      const mo = months[n - 1] || (months[n - 1] = { n, total: 0, done: 0, color: m.color, icons: '' });
      mo.total++;
      if (isDone(l.id)) mo.done++;
      if (!mo.icons.includes(m.icon)) mo.icons += m.icon;
    }));
    app.innerHTML = `
      <section class="hero">
        <h1>${t('heroTitle')}</h1>
        <p>${t('heroSub')}</p>
        <div class="progress-big"><div style="width:${(done / total) * 100}%"></div></div>
        <div class="progress-txt">${done} / ${total} ${t('lessons')}</div>
        <ol class="how">${t('howSteps').map((s, i) => `<li><span>${i + 1}</span>${s}</li>`).join('')}</ol>
        ${nx ? `<button class="primary resume" id="resumeBtn" type="button">${t('resume')}</button>` : ''}
      </section>
      <h2 class="section-title">${t('program')} <small>${t('programSub')}</small></h2>
      <div class="timeline">${months.map(mo => `
        <div class="tl-month" style="--c:${mo.color}" title="${t('month')} ${mo.n}: ${mo.done}/${mo.total}">
          <span class="tl-label">${t('month')} ${mo.n}</span>
          <span class="tl-icons">${mo.icons}</span>
          <span class="tl-bar"><span style="width:${(mo.done / mo.total) * 100}%"></span></span>
          <span class="tl-count">${mo.done}/${mo.total}</span>
        </div>`).join('')}
      </div>
      <h2 class="section-title">${t('islands')}</h2>
      <div class="islands">
        ${MODULES.map((m, i) => {
          const unlocked = modUnlocked(i);
          const d = modDone(m);
          return `
          <button class="island ${unlocked ? '' : 'locked'} ${modComplete(m) ? 'complete' : ''}" data-m="${i}" style="--c:${m.color}" type="button">
            <span class="island-step">${i + 1}</span>
            <span class="island-icon">${unlocked ? m.icon : '🔒'}</span>
            <span class="island-name">${L(m.name)}</span>
            <span class="island-dur">${L(m.duration)}</span>
            <span class="island-desc">${unlocked ? L(m.desc) : t('lockedMsg')}</span>
            <span class="island-bar"><span style="width:${(d / m.lessons.length) * 100}%"></span></span>
            <span class="island-count">${d} / ${m.lessons.length} ${t('lessons')}${modComplete(m) ? ' 🏆' : ''}</span>
          </button>`;
        }).join('')}
      </div>
      <div class="footer-actions"><button class="link-btn" id="resetAll" type="button">${t('resetAll')}</button></div>`;

    app.querySelectorAll('.island').forEach(b => b.addEventListener('click', () => {
      const i = +b.dataset.m;
      if (!modUnlocked(i)) return toast(t('lockedMsg'));
      go({ name: 'module', m: i });
    }));
    $('#resetAll').addEventListener('click', confirmReset);
    if (nx) $('#resumeBtn').addEventListener('click', () => go({ name: 'lesson', m: nx.mi, l: nx.li }));
  }

  /* ---------- Paj zile / Page d'une île ---------- */
  function renderModule(mi) {
    const m = MODULES[mi];
    app.innerHTML = `
      <button class="back" id="back" type="button">${t('back')}</button>
      <section class="module-head" style="--c:${m.color}">
        <span class="module-icon">${m.icon}</span>
        <div>
          <h1>${L(m.name)}</h1>
          <p>${L(m.desc)}</p>
        </div>
        <div class="module-count">${modDone(m)} / ${m.lessons.length}<small>${L(m.duration)}</small></div>
      </section>
      <div class="path" style="--c:${m.color}">${renderWeeks(m, mi)}</div>`;
    $('#back').addEventListener('click', () => go({ name: 'home' }));
    const cur = app.querySelector('.node.current');
    if (cur && cur.offsetTop > innerHeight * 0.6) setTimeout(() => cur.scrollIntoView({ block: 'center' }), 30);
    app.querySelectorAll('.node').forEach(b => b.addEventListener('click', () => {
      const li = +b.dataset.l;
      if (!lessonUnlocked(mi, li)) return toast(t('lockedMsg'));
      go({ name: 'lesson', m: mi, l: li });
    }));
  }

  function renderWeeks(m, mi) {
    const nx = nextLesson();
    const byMonth = new Map();
    m.lessons.forEach((l, li) => {
      const w = where(mi, li);
      if (!byMonth.has(w.month)) byMonth.set(w.month, new Map());
      const weeks = byMonth.get(w.month);
      if (!weeks.has(w.week)) weeks.set(w.week, { local: w.localWeek, items: [] });
      weeks.get(w.week).items.push(li);
    });
    const node = li => {
      const l = m.lessons[li];
      const un = lessonUnlocked(mi, li);
      const st = stars(l.id);
      const current = nx && nx.mi === mi && nx.li === li;
      return `
        <button class="node ${un ? '' : 'locked'} ${st ? 'done' : ''} ${current ? 'current' : ''}" data-l="${li}" type="button">
          <span class="node-num">${un ? li + 1 : '🔒'}</span>
          <span class="node-body">
            <span class="node-day">${t('day')} ${where(mi, li).day}</span>
            <span class="node-title">${L(l.title)}</span>
            <span class="node-stars">${st ? starStr(st) : current ? t('start') + ' →' : ''}</span>
          </span>
        </button>`;
    };
    const lastMonth = [...byMonth.keys()].pop();
    let html = '';
    for (const [month, weeks] of byMonth) {
      const ids = [...weeks.values()].flatMap(w => w.items);
      const hasNext = ids.some(li => nx && nx.mi === mi && nx.li === li);
      const open = byMonth.size === 1 || hasNext || (!(nx && nx.mi === mi) && month === lastMonth);
      const dn = ids.filter(li => isDone(m.lessons[li].id)).length;
      html += `<details class="month" ${open ? 'open' : ''}>
        <summary><span>📅 ${t('month')} ${month}</span><span class="month-count">${dn}/${ids.length}</span></summary>`;
      for (const [week, w] of weeks) {
        const wd = w.items.filter(li => isDone(m.lessons[li].id)).length;
        html += `<div class="week-head"><b>${t('week')} ${week}</b><span class="week-title">${L((m.weeks || [])[w.local]) || ''}</span><span class="week-count">${wd === w.items.length ? '✅' : `${wd}/${w.items.length}`}</span></div>`;
        html += w.items.map(node).join('');
      }
      html += '</details>';
    }
    return html;
  }

  /* ---------- Paj leson / Page de leçon ---------- */
  function renderLesson(mi, li) {
    const m = MODULES[mi];
    const lesson = m.lessons[li];
    if (!session || session.id !== lesson.id) {
      session = { id: lesson.id, attempts: 0, hint: false, solution: false, passed: false, feedback: '', tab: 'learn' };
    }
    const code = state.code[lesson.id] != null ? state.code[lesson.id] : lesson.starter;
    const pos = where(mi, li);
    const showFrame = m.lang === 'html' || m.lang === 'css' || (m.lang === 'js' && lesson.html);
    const showConsole = m.lang === 'js' || m.lang === 'cs';

    app.innerHTML = `
      <button class="back" id="back" type="button">${t('back')}</button>
      <div class="lesson" style="--c:${m.color}" data-tab="${session.tab}">
        <section class="panel learn">
          <div class="crumb">${m.icon} ${t('month')} ${pos.month} · ${t('week')} ${pos.week} · ${t('day')} ${pos.day}<span class="crumb-n">${t('lesson')} ${li + 1}/${m.lessons.length}</span></div>
          <h1>${L(lesson.title)}</h1>
          <div class="theory">${L(lesson.theory)}</div>
          ${lesson.extra ? `<details class="extra"><summary>${t('extraTitle')}</summary><div class="theory">${L(lesson.extra)}</div></details>` : ''}
          ${lesson.tips ? `<div class="tips"><h3>${t('tipsTitle')}</h3><ul>${L(lesson.tips)}</ul></div>` : ''}
          ${lesson.html ? `<details class="page-html"><summary>${t('htmlPage')}</summary><pre>${esc(lesson.html)}</pre></details>` : ''}
          <div class="task">
            <h2>${t('challenge')}</h2>
            <p>${L(lesson.task)}</p>
          </div>
          <div class="hint ${session.hint ? '' : 'hidden'}" id="hintBox">💡 ${L(lesson.hint)}</div>
          <div class="help-btns">
            <button class="ghost" id="hintBtn" type="button">${t('hint')}</button>
            <button class="ghost ${session.attempts >= 2 ? 'pulse' : ''}" id="solBtn" type="button">${t('solution')}</button>
          </div>
          ${lesson.recap ? `<div class="recap"><h3>${t('recapTitle')}</h3><ul>${L(lesson.recap)}</ul></div>` : ''}
          <button class="primary mobile-only go-code" type="button" data-goto="code">${t('goCode')}</button>
        </section>

        <section class="panel code">
          <div class="editor-head">
            <span class="file"><span class="dot" style="background:${m.color}"></span>${m.file}</span>
            <button class="ghost small" id="resetBtn" type="button">${t('reset')}</button>
          </div>
          <div class="editor">
            <pre class="gutter" id="gutter" aria-hidden="true"></pre>
            <textarea id="editor" spellcheck="false" autocapitalize="off" autocomplete="off" aria-label="${t('yourCode')}"></textarea>
          </div>
          <div class="keybar" aria-label="Symbols">${(KEYS[m.lang] || []).map(k => `<button type="button" data-k="${esc(k)}">${k === '\t' ? '⇥' : esc(k)}</button>`).join('')}</div>
          <div class="run-row">
            <span class="shortcut">${t('shortcut')}</span>
            <button class="primary" id="checkBtn" type="button">${t('check')}</button>
          </div>
          <div class="feedback" id="feedback"></div>
          ${showFrame ? `<div class="out-label">${t('result')}</div><iframe id="preview" title="${t('result')}"></iframe>` : ''}
          ${showConsole ? `<div class="out-label">${t('console')}${m.lang === 'cs' ? ` <em>(${t('simulated')})</em>` : ''}</div><pre class="console" id="console"></pre>` : ''}
        </section>
      </div>
      <nav class="mtabs" aria-label="${t('tabLearn')} / ${t('tabCode')}">
        <button type="button" data-goto="learn" class="${session.tab === 'learn' ? 'active' : ''}">📖 ${t('tabLearn')}</button>
        <button type="button" data-goto="code" class="${session.tab === 'code' ? 'active' : ''}">💻 ${t('tabCode')}</button>
      </nav>`;

    const editor = $('#editor');
    const gutter = $('#gutter');
    editor.value = code;
    const syncGutter = () => {
      const n = editor.value.split('\n').length;
      gutter.textContent = Array.from({ length: n }, (_, i) => i + 1).join('\n');
      gutter.scrollTop = editor.scrollTop;
    };
    syncGutter();

    let previewTimer;
    editor.addEventListener('input', () => {
      state.code[lesson.id] = editor.value;
      save();
      syncGutter();
      if (m.lang === 'html' || m.lang === 'css') {
        clearTimeout(previewTimer);
        previewTimer = setTimeout(() => loadFrame($('#preview'), buildDoc(lesson, m.lang, editor.value)), 300);
      }
    });
    editor.addEventListener('scroll', () => { gutter.scrollTop = editor.scrollTop; });
    editor.addEventListener('keydown', e => {
      if (e.key === 'Tab') {
        e.preventDefault();
        const s = editor.selectionStart, en = editor.selectionEnd;
        editor.setRangeText('  ', s, en, 'end');
        editor.dispatchEvent(new Event('input'));
      } else if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        runCheck(m, lesson, mi, li);
      } else if (e.key === 'Enter') {
        // kenbe endantasyon / garder l'indentation
        e.preventDefault();
        const s = editor.selectionStart;
        const line = editor.value.slice(0, s).split('\n').pop();
        let indent = line.match(/^\s*/)[0];
        if (/[{(]\s*$/.test(line) || /<(?!\/)[a-z][^>]*>\s*$/i.test(line) && !/<(img|input|br|hr|meta|link)\b/i.test(line)) indent += '  ';
        editor.setRangeText('\n' + indent, s, editor.selectionEnd, 'end');
        editor.dispatchEvent(new Event('input'));
      }
    });

    $('#back').addEventListener('click', () => go({ name: 'module', m: mi }));
    $('#hintBtn').addEventListener('click', () => { session.hint = true; $('#hintBox').classList.remove('hidden'); });
    $('#solBtn').addEventListener('click', () => {
      session.solution = true;
      editor.value = lesson.solution;
      editor.dispatchEvent(new Event('input'));
      editor.focus();
    });
    $('#resetBtn').addEventListener('click', () => {
      editor.value = lesson.starter;
      editor.dispatchEvent(new Event('input'));
      $('#feedback').innerHTML = '';
    });
    $('#checkBtn').addEventListener('click', () => runCheck(m, lesson, mi, li));

    // Tab mobil / onglets mobiles
    app.querySelectorAll('[data-goto]').forEach(b => b.addEventListener('click', () => setTab(b.dataset.goto)));

    // Ba senbòl pou klavye telefòn / barre de symboles pour clavier mobile
    app.querySelectorAll('.keybar button').forEach(b => {
      b.addEventListener('pointerdown', e => e.preventDefault()); // kenbe fokis / garder le focus
      b.addEventListener('click', () => {
        const k = b.dataset.k === '\t' ? '  ' : b.dataset.k;
        editor.focus();
        editor.setRangeText(k, editor.selectionStart, editor.selectionEnd, 'end');
        editor.dispatchEvent(new Event('input'));
      });
    });

    if (m.lang === 'html' || m.lang === 'css' || (m.lang === 'js' && lesson.html)) {
      loadFrame($('#preview'), buildDoc(lesson, m.lang === 'js' ? 'js-static' : m.lang, editor.value));
    }
    if (session.feedback) showFeedback(session.feedback, m, mi, li);
  }

  const KEYS = {
    html: ['<', '>', '/', '=', '"', '!', '-', '\t'],
    css: ['{', '}', ':', ';', '.', '#', '-', '(', ')', '%', '\t'],
    js: ['(', ')', '{', '}', '[', ']', ';', '"', '=', '.', '+', '<', '>', '\t'],
    cs: ['(', ')', '{', '}', '[', ']', ';', '"', '=', '.', '$', '<', '>', '\t']
  };

  function setTab(tab) {
    if (!session) return;
    session.tab = tab;
    const el = $('.lesson');
    if (el) el.dataset.tab = tab;
    app.querySelectorAll('.mtabs button').forEach(b => b.classList.toggle('active', b.dataset.goto === tab));
    window.scrollTo(0, 0);
  }

  /* ---------- Egzekisyon kòd / Exécution du code ---------- */
  const FRAME_BASE = 'body{font-family:system-ui,-apple-system,"Segoe UI",sans-serif;padding:12px;margin:0;color:#1d2140}img{max-width:100%}table{border-collapse:collapse}th,td{border:1px solid #c8cce0;padding:6px 12px;text-align:left}th{background:#eef0fa}';

  function captureScript(offset) {
    return `window.__logs=[];window.__errors=[];window.__g=0;(function(){var f=function(v){if(v===undefined)return'undefined';if(typeof v==='string')return v;if(typeof v==='function')return'[function]';try{return JSON.stringify(v)}catch(e){return String(v)}};['log','info','warn','error'].forEach(function(k){console[k]=function(){window.__logs.push(Array.prototype.map.call(arguments,f).join(' '))}});window.alert=function(m){window.__logs.push(String(m))};window.prompt=function(){return null};window.confirm=function(){return false};window.onerror=function(m,s,l){window.__errors.push({m:String(m),l:l?l-${offset}:0});return true}})();`;
  }

  // Anpeche bouk enfini / Empêche les boucles infinies
  const guardLoops = code => code.replace(/\b(for|while)\s*\(([^()]|\([^()]*\))*\)\s*\{/g, m => m + 'if(++window.__g>100000)throw new Error("__LOOP__");');

  function buildDoc(lesson, lang, code) {
    if (lang === 'html') return `<!doctype html><meta charset="utf-8"><style>${FRAME_BASE}</style>${code}`;
    if (lang === 'css') return `<!doctype html><html><head><meta charset="utf-8"><style>${FRAME_BASE}${lesson.baseCss || ''}</style><style>${code}</style></head><body>${lesson.html || ''}</body></html>`;
    if (lang === 'js-static') return `<!doctype html><html><head><meta charset="utf-8"><style>${FRAME_BASE}${lesson.baseCss || ''}</style></head><body>${lesson.html || ''}</body></html>`;
    const safe = guardLoops(code).replace(/<\/script/gi, '<\\/script');
    const head = `<!doctype html><html><head><meta charset="utf-8"><style>${FRAME_BASE}${lesson.baseCss || ''}</style></head><body>${lesson.html || ''}<script>`;
    const pre = head + captureScript(0) + '<\/script><script>';
    const offset = pre.split('\n').length - 1;
    return head + captureScript(offset) + '<\/script><script>' + safe + '<\/script></body></html>';
  }

  function loadFrame(iframe, html) {
    return new Promise(resolve => {
      let finished = false;
      const finish = () => { if (!finished) { finished = true; resolve(); } };
      iframe.onload = finish;
      setTimeout(finish, 2500); // si yon imaj pran twòp tan / si une image tarde
      iframe.srcdoc = html;
    });
  }

  let hiddenFrame;
  function getHiddenFrame() {
    if (!hiddenFrame) {
      hiddenFrame = document.createElement('iframe');
      hiddenFrame.className = 'hidden-frame';
      hiddenFrame.setAttribute('aria-hidden', 'true');
      hiddenFrame.tabIndex = -1;
      document.body.appendChild(hiddenFrame);
    }
    return hiddenFrame;
  }

  async function runIn(iframe, lesson, lang, code) {
    await loadFrame(iframe, buildDoc(lesson, lang, code));
    const win = iframe.contentWindow;
    const doc = iframe.contentDocument;
    return {
      win, doc, code,
      logs: (win.__logs || []).slice(),
      errors: (win.__errors || []).slice(),
      rerun: c => runIn(getHiddenFrame(), lesson, lang, c),
      wait: ms => new Promise(r => setTimeout(() => r((win.__logs || []).slice()), ms))
    };
  }

  function renderConsole(logs, errors) {
    const el = $('#console');
    if (!el) return;
    const lines = logs.map(l => `<span>${esc(l)}</span>`);
    errors.forEach(e => lines.push(`<span class="err">✘ ${esc(friendlyError(e))}</span>`));
    el.innerHTML = lines.join('\n') || '<span class="muted">—</span>';
  }

  function friendlyError(e) {
    if (/__LOOP__/.test(e.m)) return t('loop');
    return e.m.replace(/^Uncaught\s+/, '') + (e.l > 0 ? ` (${state.lang === 'ht' ? 'liy' : 'ligne'} ${e.l})` : '');
  }

  /* ---------- C#: analiz / analyse ---------- */
  function analyzeCs(code, lesson) {
    // Retire kòmantè yo men kenbe liy yo / retire les commentaires en gardant les lignes
    // (pa touche "//" ki anndan yon tèks, tankou "https://…" / ne pas toucher aux "//" dans les chaînes)
    const clean = code.replace(
      /("(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])')|\/\*[\s\S]*?\*\/|\/\/.*$/gm,
      (m, str) => (str ? str : m.replace(/[^\n]/g, ' '))
    );
    const noStr = clean
      .replace(/\$?@?"(?:\\.|[^"\\\n])*"/g, '""')
      .replace(/'(?:\\.|[^'\\\n])'/g, "''");
    const count = c => noStr.split(c).length - 1;
    const err = (k, a) => ({ clean, error: { ht: fmtErr(UI.ht.csErr[k], a), fr: fmtErr(UI.fr.csErr[k], a) } });
    if (count('{') !== count('}')) return err('braces');
    if (count('(') !== count(')')) return err('parens');
    if (!(lesson && lesson.noMain) && !/static\s+(async\s+)?(void|int|Task(<int>)?)\s+Main\s*\(/.test(noStr)) return err('main');

    // Swiv akolad yo pou konnen si nou anndan yon inisyalizatè ({ A = 1, B = 2 }), kote pa gen ";"
    // Suivre les accolades pour savoir si on est dans un initialiseur, où il n'y a pas de ";"
    const INIT_BEFORE = /(\bswitch|\bwith|=(?![>=])|\bnew\b[^;{}()]*(\(\s*\))?|\bnew\s*\[\s*\])\s*$/;
    const stack = [];
    let since = '';
    const lines = noStr.split('\n');
    const nextLine = i => { for (let j = i + 1; j < lines.length; j++) { const t = lines[j].trim(); if (t) return t; } return ''; };
    for (let i = 0; i < lines.length; i++) {
      const s = lines[i].trim();
      const inInit = stack.includes('init');
      if (s && !inInit) {
        const nx = nextLine(i);
        const continues = /[,({[]$/.test(s) || /^(\.|\?|:|\+|-|\*|\/|&&|\|\||=>|\{)/.test(nx);
        const needsSemi = !continues && (
          /^Console\.\w+\s*\(.*\)$/.test(s) ||
          /^(int|string|double|float|bool|char|var|long|decimal)\??\s+\w+\s*=.+$/.test(s) ||
          /^return\b.+$/.test(s) ||
          /^\w+(\.\w+)*\s*(\+\+|--|[+\-*/]?=)[^=>].*$/.test(s) && !/^(if|for|while|else|case|default)\b/.test(s) ||
          /^\w+(\.\w+)+\s*\(.*\)$/.test(s) && !/^(if|for|while|foreach|switch|using|lock)\b/.test(s));
        if (needsSemi && !s.endsWith(';')) return err('semi', i + 1);
      }
      for (const ch of lines[i] + '\n') {
        if (ch === '{') { stack.push(INIT_BEFORE.test(since.trimEnd()) ? 'init' : 'block'); since = ''; }
        else if (ch === '}') { stack.pop(); since = ''; }
        else if (ch === ';') since = '';
        else since += ch;
      }
    }
    return { clean };
  }

  const fmtErr = (e, a) => (typeof e === 'function' ? e(a) : e);

  function csOutput(lesson, code) {
    if (typeof lesson.output === 'string') return lesson.output;
    if (lesson.output) return lesson.output({ code });
    const out = [];
    code.replace(/Console\.WriteLine\s*\(\s*\$?"((?:\\.|[^"\\])*)"\s*\)/g, (_, s) => out.push(s.replace(/\\n/g, '\n')));
    return out.join('\n');
  }

  /* ---------- Tcheke / Vérifier ---------- */
  async function runCheck(m, lesson, mi, li) {
    const btn = $('#checkBtn');
    const editor = $('#editor');
    const code = editor.value;
    state.code[lesson.id] = code;
    save();
    btn.disabled = true;
    session.attempts++;
    let result;

    try {
      if (m.lang === 'cs') {
        const con = $('#console');
        con.innerHTML = `<span class="muted">$ dotnet run\n${t('compiling')}</span>`;
        await new Promise(r => setTimeout(r, 450));
        const a = analyzeCs(code, lesson);
        if (a.error) {
          result = a.error;
          con.innerHTML = `<span class="muted">$ dotnet run</span>\n<span class="err">${t('buildFail')}\nProgram.cs: ${L(a.error)}</span>`;
        } else {
          result = await lesson.check({ code, clean: a.clean });
          con.innerHTML = result === true
            ? `<span class="muted">$ dotnet run</span>\n<span class="ok">${t('buildOk')}</span>\n${esc(csOutput(lesson, a.clean))}`
            : `<span class="muted">$ dotnet run</span>\n<span class="ok">${t('buildOk')}</span>\n<span class="muted">…</span>`;
        }
      } else {
        const ctx = await runIn($('#preview') || getHiddenFrame(), lesson, m.lang, code);
        if (m.lang === 'js') renderConsole(ctx.logs, ctx.errors);
        if (ctx.errors.length) {
          const msg = friendlyError(ctx.errors[0]);
          result = { ht: `${UI.ht.error} <code>${esc(msg)}</code>`, fr: `${UI.fr.error} <code>${esc(msg)}</code>` };
        } else {
          result = await lesson.check(ctx);
          if (m.lang === 'js') renderConsole((ctx.win.__logs || []).slice(), (ctx.win.__errors || []).slice());
        }
      }
    } catch (e) {
      result = { ht: `${UI.ht.error} <code>${esc(e.message)}</code>`, fr: `${UI.fr.error} <code>${esc(e.message)}</code>` };
    }

    btn.disabled = false;
    setTimeout(() => { const f = $('#feedback'); if (f) f.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }, 50);
    if (result === true) win(m, lesson, mi, li);
    else {
      session.feedback = { ok: false, msg: result };
      showFeedback(session.feedback, m, mi, li);
      if (session.attempts >= 2) $('#solBtn').classList.add('pulse');
      shake($('.editor'));
    }
  }

  function win(m, lesson, mi, li) {
    const before = stars(lesson.id);
    let s = 3;
    if (session.hint) s--;
    if (session.attempts > 2) s--;
    if (session.solution) s = 1;
    s = Math.max(1, s);
    const wasComplete = modComplete(m);
    let gained = 0;
    if (!before) gained += 10;
    if (s > before) { gained += (s - before) * 10; state.done[lesson.id] = s; }
    const oldLevel = Math.floor(state.xp / XP_PER_LEVEL);
    state.xp += gained;
    bumpStreak();
    save();
    updateHeader();
    session.feedback = { ok: true, stars: s, gained };
    showFeedback(session.feedback, m, mi, li);
    confetti();
    if (gained) toast(`+${gained} XP`);
    if (Math.floor(state.xp / XP_PER_LEVEL) > oldLevel) {
      setTimeout(() => toast(`🎉 ${t('level')} ${Math.floor(state.xp / XP_PER_LEVEL) + 1}!`), 1200);
    }
    if (!wasComplete && modComplete(m)) {
      setTimeout(() => {
        const all = MODULES.every(modComplete);
        modal(`<div class="badge" style="--c:${m.color}">${m.icon}</div>
               <h2>${t('badgeTitle')}</h2>
               <p>${t('badgeMsg')(L(m.name))}</p>
               ${all ? `<p class="all-done">${t('allDone')}</p>` : ''}
               <button class="primary" data-close type="button">${t('ok')}</button>`);
        confetti(240);
      }, 900);
    }
  }

  function showFeedback(fb, m, mi, li) {
    const el = $('#feedback');
    if (!el) return;
    if (fb.ok) {
      const hasNext = li + 1 < m.lessons.length;
      el.className = 'feedback ok';
      el.innerHTML = `
        <div class="fb-main"><b>${t('success')}</b> <span class="fb-stars">${starStr(fb.stars)}</span>${fb.gained ? ` <span class="fb-xp">+${fb.gained} XP</span>` : ''}</div>
        <div class="fb-actions">
          ${hasNext ? `<button class="primary" id="nextBtn" type="button">${t('next')}</button>` : ''}
          <button class="ghost" id="islandBtn" type="button">${t('backIsland')}</button>
        </div>`;
      if (hasNext) $('#nextBtn').addEventListener('click', () => go({ name: 'lesson', m: mi, l: li + 1 }));
      $('#islandBtn').addEventListener('click', () => go(hasNext ? { name: 'module', m: mi } : { name: 'home' }));
    } else {
      el.className = 'feedback bad';
      el.innerHTML = `<div class="fb-main"><b>${t('tryAgain')}</b></div><div>${L(fb.msg)}</div>`;
    }
  }

  /* ---------- Ti zouti / Petits outils ---------- */
  let toastTimer;
  function toast(msg) {
    const el = $('#toast');
    el.innerHTML = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
  }

  function modal(html) {
    const el = $('#modal');
    el.innerHTML = `<div class="modal-card">${html}</div>`;
    el.classList.remove('hidden');
    el.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', closeModal));
    const first = el.querySelector('button');
    if (first) first.focus();
  }
  function closeModal() { $('#modal').classList.add('hidden'); }
  $('#modal').addEventListener('click', e => { if (e.target.id === 'modal') closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  function confirmReset() {
    modal(`<h2>⚠️</h2><p>${t('resetConfirm')}</p>
      <div class="modal-actions">
        <button class="ghost" data-close type="button">${t('no')}</button>
        <button class="danger" id="doReset" type="button">${t('yes')}</button>
      </div>`);
    $('#doReset').addEventListener('click', () => {
      const lang = state.lang;
      state = defaults();
      state.lang = lang;
      save();
      closeModal();
      go({ name: 'home' });
    });
  }

  function shake(el) {
    if (!el) return;
    el.classList.remove('shake');
    void el.offsetWidth;
    el.classList.add('shake');
  }

  /* ---------- Konfeti ---------- */
  const canvas = $('#confetti');
  const cx = canvas.getContext('2d');
  let parts = [], raf = 0;
  function confetti(n = 120) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    canvas.width = innerWidth; canvas.height = innerHeight;
    const colors = ['#ff8a3d', '#38bdf8', '#facc15', '#a78bfa', '#34d399', '#f472b6'];
    for (let i = 0; i < n; i++) {
      parts.push({
        x: innerWidth / 2 + (Math.random() - 0.5) * 200, y: innerHeight / 3,
        vx: (Math.random() - 0.5) * 14, vy: Math.random() * -12 - 4,
        r: Math.random() * 6 + 4, c: colors[i % colors.length],
        a: Math.random() * Math.PI, va: (Math.random() - 0.5) * 0.3, life: 0
      });
    }
    if (!raf) raf = requestAnimationFrame(tick);
  }
  function tick() {
    cx.clearRect(0, 0, canvas.width, canvas.height);
    parts = parts.filter(p => p.life < 160 && p.y < canvas.height + 20);
    parts.forEach(p => {
      p.vy += 0.35; p.vx *= 0.99; p.x += p.vx; p.y += p.vy; p.a += p.va; p.life++;
      cx.save(); cx.translate(p.x, p.y); cx.rotate(p.a);
      cx.fillStyle = p.c; cx.globalAlpha = Math.max(0, 1 - p.life / 160);
      cx.fillRect(-p.r / 2, -p.r / 4, p.r, p.r / 2);
      cx.restore();
    });
    raf = parts.length ? requestAnimationFrame(tick) : 0;
    if (!raf) cx.clearRect(0, 0, canvas.width, canvas.height);
  }

  /* ---------- Demaraj / Démarrage ---------- */
  $('#homeBtn').addEventListener('click', () => go({ name: 'home' }));
  document.querySelectorAll('.lang button').forEach(b => b.addEventListener('click', () => {
    const ed = $('#editor');
    if (ed && session) state.code[session.id] = ed.value;
    state.lang = b.dataset.lang;
    save();
    render();
  }));

  render();
})();
