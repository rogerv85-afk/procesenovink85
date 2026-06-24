(function () {
  'use strict';

  const commonKey = 'cdh-projectbestand-v1';
  const steps = [
    { nr: 1, file: '01-aanvraaganalyse-opdrachtgever.html', label: 'Aanvraaganalyse', test: hasAanvraag },
    { nr: 2, file: '02-projectopzet-werkzaamheden.html', label: 'Projectopzet / scope', test: hasScope },
    { nr: 3, file: '03-opname-locatie.html', label: 'Opname locatie', test: hasPageData('cdh-opname-locatie-v1') },
    { nr: 4, file: '04-offerteaanvraag-onderaannemer.html', label: 'Offerteaanvraag OA', test: hasPageData('cdh-offerteaanvraag-oa-v1') },
    { nr: 5, file: '05-begroting-offerte.html', label: 'Begroting / offerte', test: hasPageData('cdh-begroting-offerte-v1') },
    { nr: 6, file: '06-opdrachtbevestiging.html', label: 'Opdracht', test: hasPageData('cdh-opdrachtbevestiging-v1') },
    { nr: 7, file: '07-doelstellingbegroting.html', label: 'Doelstellingbegroting', test: hasPageData('cdh-doelstellingbegroting-v1') },
    { nr: 8, file: '08-weekrapport-uitvoering.html', label: 'Uitvoering', test: hasPageData('cdh-weekrapport-uitvoering-v1') },
    { nr: 9, file: '09-oplevering.html', label: 'Oplevering', test: hasPageData('cdh-oplevering-v1') },
    { nr: 10, file: '10-dossier-overzicht.html', label: 'Dossier', test: hasPageData('cdh-dossieroverzicht-v1') }
  ];

  function readJson(key) {
    try { return JSON.parse(localStorage.getItem(key) || '{}') || {}; }
    catch { return {}; }
  }

  function text(value) { return String(value || '').trim(); }
  function hasText(value) { return text(value).length > 0; }

  function hasAnyValue(obj) {
    if (!obj || typeof obj !== 'object') return false;
    return Object.values(obj).some((value) => {
      if (Array.isArray(value)) return value.some((item) => hasAnyValue(item));
      if (value && typeof value === 'object') return hasAnyValue(value);
      return hasText(value);
    });
  }

  function projectData() { return readJson(commonKey); }

  function hasAanvraag(data) {
    const aanvraag = Object.assign({}, readJson('cdh-aanvraaganalyse-v1'), readJson('cdh-aanvraaganalyse-v2'), data || projectData());
    return ['project', 'werkordernummer', 'opdrachtgever', 'adres', 'letterlijkeVraag', 'aanvraagdatum'].some((key) => hasText(aanvraag[key])) ||
      Object.keys(aanvraag).some((key) => (key.includes('_bron') || key.includes('_status')) && hasText(aanvraag[key]));
  }

  function hasScope(data) {
    const scope = Object.assign({}, data || projectData(), readJson('cdh-projectopzet-v1'));
    return hasText(scope.projectopzet) || hasText(scope.vervolgstap) || Object.keys(scope).some((key) => /^work_\d+_naam$/.test(key) && hasText(scope[key]));
  }

  function hasPageData(key) {
    return function (data) {
      const common = data || projectData();
      return hasAnyValue(common[key]) || hasAnyValue(readJson(key));
    };
  }

  function currentStep() {
    const file = (location.pathname.split('/').pop() || '').toLowerCase();
    return steps.find((step) => step.file.toLowerCase() === file) || null;
  }

  function completionState() {
    const data = projectData();
    const done = new Map();
    steps.forEach((step) => done.set(step.nr, !!step.test(data)));

    let lastCompleted = 0;
    for (const step of steps) {
      if (done.get(step.nr)) lastCompleted = step.nr;
      else break;
    }

    const nextAllowed = Math.min(steps.length, Math.max(2, lastCompleted + 1));
    const firstOpen = steps.find((step) => step.nr === Math.min(steps.length, lastCompleted + 1)) || steps[steps.length - 1];
    return { done, firstOpen, lastCompleted, nextAllowed };
  }

  function injectStyle() {
    if (document.getElementById('cdh-flow-style')) return;
    const style = document.createElement('style');
    style.id = 'cdh-flow-style';
    style.textContent = `
      .cdh-flow-panel{max-width:1120px;margin:10px auto 0;padding:0 18px}
      .cdh-flow-box{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:10px;align-items:center;border:1px solid #d8cfc3;border-left:4px solid #176b49;border-radius:8px;background:#fffefa;padding:9px 12px;box-shadow:0 1px 3px rgba(29,29,27,.05)}
      .cdh-flow-title{font-size:15px;font-weight:850;color:#0f4f37}.cdh-flow-note{font-size:13px;line-height:1.4;color:#625d55}.cdh-flow-pill{border-radius:999px;background:#edf5ef;color:#0f4f37;padding:4px 9px;font-size:12px;font-weight:850;white-space:nowrap}
      .cdh-flow-box.is-blocked{border-left-color:#c75b23;background:#fff8f1}.cdh-flow-box.is-blocked .cdh-flow-pill{background:#f7e7db;color:#8a3b12}
      .process-nav a.is-locked{opacity:.42;cursor:not-allowed;background:#f4f0ea!important;color:#6d665e!important;border-style:dashed}.process-nav a.is-done::after{content:' ✓';color:#176b49;font-weight:900}.process-nav a.active.is-done::after{color:#fff}
      .cdh-flow-disabled{opacity:.62}.cdh-flow-disabled input:not(#projectFile),.cdh-flow-disabled select,.cdh-flow-disabled textarea,.cdh-flow-disabled button:not([onclick*='projectFile']):not([onclick*='import']):not([onclick*='load']){pointer-events:none}
      @media(max-width:760px){.cdh-flow-panel{padding:0 12px}.cdh-flow-box{grid-template-columns:1fr}.cdh-flow-pill{width:max-content}}
    `;
    document.head.appendChild(style);
  }

  function showMessage(message) {
    const note = document.querySelector('.cdh-flow-note');
    if (note) note.textContent = message;
  }

  function updateNav(state) {
    document.querySelectorAll('.process-nav a').forEach((link) => {
      const href = (link.getAttribute('href') || '').split('/').pop();
      const step = steps.find((item) => item.file === href);
      if (!step) return;
      const locked = step.nr > state.nextAllowed;
      link.classList.toggle('is-locked', locked);
      link.classList.toggle('is-done', state.done.get(step.nr));
      if (locked && !link.dataset.flowBound) {
        link.dataset.flowBound = '1';
        link.setAttribute('aria-disabled', 'true');
        link.addEventListener('click', (event) => {
          event.preventDefault();
          showMessage(`Eerst stap ${state.firstOpen.nr}: ${state.firstOpen.label} afronden of een projectbestand inladen.`);
        });
      }
    });
  }

  function injectPanel(state, current) {
    if (!current || document.querySelector('.cdh-flow-panel')) return;
    const blocked = current.nr > state.nextAllowed;
    const doneCount = Array.from(state.done.values()).filter(Boolean).length;
    const panel = document.createElement('section');
    panel.className = 'cdh-flow-panel';
    panel.innerHTML = `<div class="cdh-flow-box ${blocked ? 'is-blocked' : ''}"><div><div class="cdh-flow-title">${blocked ? 'Deze stap is nog niet vrijgegeven' : `Stap ${current.nr}: ${current.label}`}</div><div class="cdh-flow-note">${blocked ? `Eerst stap ${state.firstOpen.nr}: ${state.firstOpen.label} afronden. Daarna komt deze pagina vrij.` : 'Werk de stappen van boven naar beneden af. Opslaan geeft de volgende pagina vrij.'}</div></div><div class="cdh-flow-pill">${doneCount} van ${steps.length} stappen gevuld</div></div>`;
    const nav = document.querySelector('.process-nav');
    if (nav && nav.parentNode) nav.parentNode.insertBefore(panel, nav.nextSibling);
  }

  function protectPage(state, current) {
    if (!current || current.nr <= state.nextAllowed) return;
    const main = document.querySelector('main');
    if (main) main.classList.add('cdh-flow-disabled');
    document.querySelectorAll('button.primary, a.button-link.primary').forEach((button) => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        location.href = state.firstOpen.file;
      });
      button.textContent = `Naar stap ${state.firstOpen.nr}`;
    });
  }

  function refresh() {
    const current = currentStep();
    if (!current) return;
    const state = completionState();
    updateNav(state);
    const panel = document.querySelector('.cdh-flow-panel');
    if (panel) panel.remove();
    injectPanel(state, current);
    protectPage(state, current);
  }

  function boot() {
    const current = currentStep();
    if (!current) return;
    injectStyle();
    refresh();
    document.addEventListener('input', () => setTimeout(refresh, 200));
    document.addEventListener('change', () => setTimeout(refresh, 200));
    window.CDH_FLOW_REFRESH = refresh;
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
