(function () {
  'use strict';

  const COMMON_KEY = 'cdh-projectbestand-v1';
  const PAGE_KEYS = {
    aanvraag: 'cdh-aanvraaganalyse-v2',
    scope: 'cdh-projectopzet-v1',
    opname: 'cdh-opname-locatie-v1'
  };

  const CHAPTERS = [
    '00 Algemeen',
    '01 Werkvoorbereiding',
    '02 Bouwplaatskosten',
    '03 Bereikbaarheid',
    '04 Gevelwerk',
    '05 Voegwerk',
    '06 Kozijnen en schilderwerk',
    '07 Dak en goten',
    '08 Installaties',
    '09 Afwerking',
    '10 Oplevering'
  ];

  const OPTIONS = {
    typePost: ['Basis', 'Optie', 'Stelpost', 'Uitsluiting', 'Nader te bepalen'],
    eenheid: ['post', 'm²', 'm¹', 'stuks', 'uren', 'n.t.b.'],
    statusHoeveelheid: ['bekend', 'schatting', 'opnemen buiten', 'ontbreekt'],
    bron: ['aanvraag', 'rapport', 'tekening', 'opname', 'advies', 'overleg'],
    status: ['concept', 'controleren', 'akkoord', 'ontbreekt'],
    scopeStatus: ['concept', 'scope akkoord', 'uitvraag nodig', 'nader bepalen'],
    opnameStatus: ['nog opnemen', 'opgenomen', 'niet nodig', 'vraag open']
  };

  const STEP_INFO = {
    aanvraag: { label: 'Aanvraaganalyse', doneText: 'Aanvraag opgeslagen' },
    scope: { label: 'Scope uitwerken', doneText: 'Scope opgeslagen' },
    opname: { label: 'Buitenopname', doneText: 'Opname opgeslagen' }
  };

  let state = { mode: 'aanvraag', data: {}, posts: [] };

  function $(selector, root) { return (root || document).querySelector(selector); }
  function $all(selector, root) { return Array.from((root || document).querySelectorAll(selector)); }
  function readJson(key) { try { return JSON.parse(localStorage.getItem(key) || '{}') || {}; } catch (error) { return {}; } }
  function writeJson(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
  function text(value) { return String(value || '').trim(); }
  function uid() { return 'post_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 7); }

  function escapeHtml(value) {
    return String(value || '').replace(/[&<>"']/g, function (char) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char];
    });
  }

  function escapeAttr(value) { return escapeHtml(value).replace(/`/g, '&#96;'); }

  function optionHtml(values, selected) {
    return values.map(function (value) {
      const isSelected = value === selected ? ' selected' : '';
      return '<option value="' + escapeAttr(value) + '"' + isSelected + '>' + escapeHtml(value) + '</option>';
    }).join('');
  }

  function detectMode() {
    const bodyMode = document.body ? document.body.dataset.page : '';
    if (bodyMode) return bodyMode;
    const file = (location.pathname.split('/').pop() || '').toLowerCase();
    if (file.includes('02-')) return 'scope';
    if (file.includes('03-')) return 'opname';
    return 'aanvraag';
  }

  function normalizePost(post, index) {
    const fallbackChapter = CHAPTERS[Math.min(index, CHAPTERS.length - 1)] || CHAPTERS[0];
    return Object.assign({
      id: uid(), hoofdstuk: fallbackChapter, post: '', typePost: 'Basis', omschrijving: '', eenheid: 'n.t.b.', hoeveelheid: '',
      statusHoeveelheid: 'opnemen buiten', bron: 'aanvraag', opnamevraag: '', status: 'concept', ibisTekst: '', locatie: '',
      scopeStatus: 'concept', uitvraagNodig: 'nader bepalen', uitvoeringsrisico: '', opnameStatus: 'nog opnemen', opnameAntwoord: '',
      fotoNodig: 'ja', bereikbaarheid: '', staat: ''
    }, post || {});
  }

  function migrateOldWorkItems(common) {
    const posts = [];
    Object.keys(common || {}).forEach(function (key) {
      const match = key.match(/^work_(\d+)_naam$/);
      if (!match || !text(common[key])) return;
      const index = Number(match[1]);
      posts.push(normalizePost({
        id: 'old_' + index,
        post: common[key],
        omschrijving: common['work_' + index + '_omschrijving'] || '',
        locatie: common['work_' + index + '_locatie'] || '',
        opnamevraag: common['work_' + index + '_opnamevraag'] || '',
        bron: common['work_' + index + '_bron'] || 'aanvraag',
        status: common['work_' + index + '_status'] || 'concept'
      }, index - 1));
    });
    return posts;
  }

  function loadState() {
    state.mode = detectMode();
    const common = readJson(COMMON_KEY);
    const page = readJson(PAGE_KEYS[state.mode] || '');
    const rawPosts = common.begrotingsposten || common.ibisPosten || page.begrotingsposten || migrateOldWorkItems(common);
    state.data = Object.assign({}, common, page);
    state.posts = (Array.isArray(rawPosts) && rawPosts.length ? rawPosts : [normalizePost({}, 0)]).map(normalizePost);
    if (state.mode === 'opname') {
      state.posts = state.posts.map(function (post) {
        if (!post.opnamevraag && (post.statusHoeveelheid === 'opnemen buiten' || post.statusHoeveelheid === 'ontbreekt')) {
          post.opnamevraag = 'Controleer hoeveelheid, staat en bereikbaarheid voor deze post.';
        }
        return post;
      });
    }
  }

  function collectFields() {
    $all('[data-field]').forEach(function (field) { state.data[field.dataset.field] = field.type === 'checkbox' ? (field.checked ? 'ja' : '') : field.value; });
  }

  function fillFields() {
    $all('[data-field]').forEach(function (field) {
      const value = state.data[field.dataset.field] || '';
      if (field.type === 'checkbox') field.checked = value === 'ja'; else field.value = value;
    });
  }

  function collectPosts() {
    $all('[data-post-id]').forEach(function (card) {
      const id = card.dataset.postId;
      const post = state.posts.find(function (item) { return item.id === id; });
      if (!post) return;
      $all('[data-post-field]', card).forEach(function (field) { post[field.dataset.postField] = field.value; });
    });
  }

  function fillMeta() {
    const map = {
      project: state.data.project || 'Nog geen project',
      werkordernummer: state.data.werkordernummer || '-',
      opdrachtgever: state.data.opdrachtgever || '-',
      adres: state.data.adres || '-',
      postCount: String(state.posts.length)
    };
    Object.keys(map).forEach(function (key) { $all('[data-meta="' + key + '"]').forEach(function (node) { node.textContent = map[key]; }); });
  }

  function visiblePosts() {
    if (state.mode !== 'opname') return state.posts;
    return state.posts.filter(function (post) {
      return post.statusHoeveelheid === 'opnemen buiten' || post.statusHoeveelheid === 'ontbreekt' || text(post.opnamevraag) || post.opnameStatus === 'nog opnemen' || post.opnameStatus === 'vraag open';
    });
  }

  function postTitle(post, index) {
    const chapterNumber = text(post.hoofdstuk).split(' ')[0] || String(index + 1).padStart(2, '0');
    const name = text(post.post) || 'Nieuwe begrotingspost';
    return chapterNumber + '.' + String(index + 1).padStart(2, '0') + ' ' + name;
  }

  function statusBadge(post) {
    if (post.status === 'akkoord' || post.scopeStatus === 'scope akkoord' || post.opnameStatus === 'opgenomen') return '<span class="badge ok">akkoord</span>';
    if (post.statusHoeveelheid === 'ontbreekt' || post.status === 'ontbreekt' || post.opnameStatus === 'vraag open') return '<span class="badge bad">ontbreekt</span>';
    if (post.statusHoeveelheid === 'opnemen buiten' || post.scopeStatus === 'uitvraag nodig') return '<span class="badge warn">controleren</span>';
    return '<span class="badge">concept</span>';
  }

  function renderPosts() {
    const container = $('#posts');
    if (!container) return;
    const posts = visiblePosts();
    if (!posts.length) {
      container.innerHTML = '<div class="empty">Geen posten met opnamevraag. Pas in stap 2 de status hoeveelheid aan naar “opnemen buiten” of vul een opnamevraag in.</div>';
      return;
    }
    container.innerHTML = posts.map(function (post, index) {
      const optionClass = post.typePost === 'Optie' || post.typePost === 'Stelpost' ? ' is-option' : '';
      return [
        '<article class="post-card' + optionClass + '" data-post-id="' + escapeAttr(post.id) + '">',
        '<div class="post-head"><div><strong>' + escapeHtml(postTitle(post, index)) + '</strong><span>' + escapeHtml(post.typePost) + ' · ' + escapeHtml(post.eenheid) + ' · hoeveelheid: ' + escapeHtml(post.statusHoeveelheid) + '</span></div>',
        '<div class="post-actions">' + statusBadge(post) + (state.mode === 'opname' ? '' : '<button type="button" data-action="duplicate" data-id="' + escapeAttr(post.id) + '">Kopie</button><button type="button" class="danger" data-action="remove" data-id="' + escapeAttr(post.id) + '">Verwijder</button>') + '</div></div>',
        '<div class="post-body">' + renderPostFields(post) + '</div></article>'
      ].join('');
    }).join('');
  }

  function renderPostFields(post) {
    const shared = ['<div class="grid four">', fieldSelect('hoofdstuk', 'Hoofdstuk', CHAPTERS, post.hoofdstuk), fieldInput('post', 'Post / onderdeel', post.post, 'bijv. Gevelreiniging'), fieldSelect('typePost', 'Type post', OPTIONS.typePost, post.typePost), fieldSelect('status', 'Status', OPTIONS.status, post.status), fieldTextarea('omschrijving', 'Omschrijving werkzaamheden', post.omschrijving, 'Kort in begrotingstaal', 'full'), fieldSelect('eenheid', 'Eenheid', OPTIONS.eenheid, post.eenheid), fieldInput('hoeveelheid', 'Hoeveelheid', post.hoeveelheid, 'bijv. 120'), fieldSelect('statusHoeveelheid', 'Status hoeveelheid', OPTIONS.statusHoeveelheid, post.statusHoeveelheid), fieldSelect('bron', 'Bron', OPTIONS.bron, post.bron), '</div>'].join('');
    if (state.mode === 'aanvraag') return [shared, '<details class="post-details"><summary><strong>Details voor later</strong><span class="chev">›</span></summary><div class="content grid">', fieldTextarea('opnamevraag', 'Opnamevraag', post.opnamevraag, 'Wat moet buiten worden gecontroleerd?', 'full'), fieldTextarea('ibisTekst', 'IBIS-kopieertekst', post.ibisTekst, 'Korte tekst die later naar begroting/offerte kan.', 'full'), '</div></details>'].join('');
    if (state.mode === 'scope') return [shared, '<details class="post-details" open><summary><strong>Scope / uitvraag</strong><span class="chev">›</span></summary><div class="content grid three">', fieldInput('locatie', 'Locatie', post.locatie, 'gevel, bouwdeel, verdieping'), fieldSelect('scopeStatus', 'Scope-status', OPTIONS.scopeStatus, post.scopeStatus), fieldSelect('uitvraagNodig', 'Uitvraag nodig?', ['ja', 'nee', 'nader bepalen'], post.uitvraagNodig), fieldTextarea('opnamevraag', 'Opnamevraag', post.opnamevraag, 'Wat moet buiten gecontroleerd worden?', 'full'), fieldTextarea('ibisTekst', 'IBIS-kopieertekst', post.ibisTekst, 'Begrotingstekst zonder prijzen.', 'full'), fieldTextarea('uitvoeringsrisico', 'Aandachtspunt', post.uitvoeringsrisico, 'Bereikbaarheid, hinder, planning, veiligheid.', 'full'), '</div></details>'].join('');
    return ['<div class="grid three">', readBox('Hoofdstuk', post.hoofdstuk), readBox('Post', post.post || 'Nog geen postnaam'), readBox('Hoeveelheid', (post.hoeveelheid || '-') + ' · ' + post.statusHoeveelheid), '</div><div class="grid three">', fieldSelect('opnameStatus', 'Opnamestatus', OPTIONS.opnameStatus, post.opnameStatus), fieldInput('hoeveelheid', 'Hoeveelheid na opname', post.hoeveelheid, 'gemeten hoeveelheid'), fieldSelect('statusHoeveelheid', 'Status hoeveelheid', OPTIONS.statusHoeveelheid, post.statusHoeveelheid), fieldInput('staat', 'Staat / conditie', post.staat, 'goed, matig, slecht'), fieldInput('bereikbaarheid', 'Bereikbaarheid', post.bereikbaarheid, 'steiger, hoogwerker, ladder'), fieldSelect('fotoNodig', 'Foto nodig?', ['ja', 'nee'], post.fotoNodig), fieldTextarea('opnamevraag', 'Opnamevraag', post.opnamevraag, 'Vraag vanuit stap 1/2.', 'full'), fieldTextarea('opnameAntwoord', 'Antwoord buitenopname', post.opnameAntwoord, 'Feitelijke bevindingen, geen prijzen.', 'full'), fieldTextarea('ibisTekst', 'IBIS-kopieertekst bijwerken', post.ibisTekst, 'Tekst na opname aanscherpen.', 'full'), '</div>'].join('');
  }

  function fieldInput(name, label, value, placeholder, extraClass) { return '<div class="' + (extraClass || '') + '"><label>' + escapeHtml(label) + '</label><input data-post-field="' + escapeAttr(name) + '" value="' + escapeAttr(value) + '" placeholder="' + escapeAttr(placeholder || '') + '"></div>'; }
  function fieldTextarea(name, label, value, placeholder, extraClass) { return '<div class="' + (extraClass || '') + '"><label>' + escapeHtml(label) + '</label><textarea data-post-field="' + escapeAttr(name) + '" placeholder="' + escapeAttr(placeholder || '') + '">' + escapeHtml(value) + '</textarea></div>'; }
  function fieldSelect(name, label, values, value, extraClass) { return '<div class="' + (extraClass || '') + '"><label>' + escapeHtml(label) + '</label><select data-post-field="' + escapeAttr(name) + '">' + optionHtml(values, value) + '</select></div>'; }
  function readBox(label, value) { return '<div><label>' + escapeHtml(label) + '</label><div class="readbox">' + escapeHtml(value) + '</div></div>'; }

  function addPost(seed) { collectFields(); collectPosts(); state.posts.push(normalizePost(seed || {}, state.posts.length)); renderPosts(); fillMeta(); persist(false); }
  function removePost(id) { collectPosts(); state.posts = state.posts.filter(function (post) { return post.id !== id; }); if (!state.posts.length) state.posts = [normalizePost({}, 0)]; renderPosts(); fillMeta(); persist(false); }
  function duplicatePost(id) { collectPosts(); const original = state.posts.find(function (post) { return post.id === id; }); if (!original) return; const copy = Object.assign({}, original, { id: uid(), post: text(original.post) ? original.post + ' kopie' : 'Nieuwe begrotingspost' }); state.posts.push(normalizePost(copy, state.posts.length)); renderPosts(); fillMeta(); persist(false); }

  function buildCommonData() {
    const common = Object.assign({}, readJson(COMMON_KEY), state.data);
    common.begrotingsposten = state.posts.map(function (post, index) { return normalizePost(post, index); });
    Object.keys(common).forEach(function (key) { if (/^work_\d+_/.test(key)) delete common[key]; });
    common.begrotingsposten.forEach(function (post, index) {
      const nr = index + 1;
      common['work_' + nr + '_naam'] = post.post;
      common['work_' + nr + '_omschrijving'] = post.omschrijving;
      common['work_' + nr + '_locatie'] = post.locatie;
      common['work_' + nr + '_opnamevraag'] = post.opnamevraag;
      common['work_' + nr + '_bron'] = post.bron;
      common['work_' + nr + '_status'] = post.status;
    });
    common.projectopzet = 'Begrotingsconcept-scope met ' + common.begrotingsposten.length + ' posten.';
    common.vervolgstap = common.begrotingsposten.some(function (post) { return post.statusHoeveelheid === 'opnemen buiten' || post.statusHoeveelheid === 'ontbreekt' || text(post.opnamevraag); }) ? 'Buitenopname voor ontbrekende hoeveelheden en risico’s.' : 'Scope controleren en uitvraag voorbereiden.';
    if (state.mode === 'opname') common[PAGE_KEYS.opname] = { opnameposten: common.begrotingsposten.filter(function (post) { return post.opnameStatus && post.opnameStatus !== 'niet nodig'; }) };
    return common;
  }

  function buildPageData(common) {
    if (state.mode === 'aanvraag') return { project: common.project || '', werkordernummer: common.werkordernummer || '', opdrachtgever: common.opdrachtgever || '', adres: common.adres || '', aanvraagdatum: common.aanvraagdatum || '', contactpersoon: common.contactpersoon || '', letterlijkeVraag: common.letterlijkeVraag || '', ontbrekendeInfo: common.ontbrekendeInfo || '', begrotingsposten: common.begrotingsposten };
    if (state.mode === 'scope') return { projectopzet: common.projectopzet, vervolgstap: common.vervolgstap, begrotingsposten: common.begrotingsposten };
    return { opnameposten: common.begrotingsposten.filter(function (post) { return post.opnameStatus && post.opnameStatus !== 'niet nodig'; }), begrotingsposten: common.begrotingsposten };
  }

  function persist(showMessage) {
    collectFields(); collectPosts();
    const common = buildCommonData();
    writeJson(COMMON_KEY, common);
    writeJson(PAGE_KEYS[state.mode], buildPageData(common));
    state.data = common;
    fillMeta();
    if (window.CDH_FLOW_REFRESH) window.CDH_FLOW_REFRESH();
    if (showMessage) setSavedMessage(STEP_INFO[state.mode].doneText);
  }

  function setSavedMessage(message) {
    const node = $('#savedMessage');
    if (!node) return;
    node.textContent = message + ' · ' + new Date().toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' });
  }

  function exportProject() {
    persist(false);
    const common = readJson(COMMON_KEY);
    const nameParts = [common.werkordernummer || 'project', common.project || 'begrotingsconcept'].map(function (part) { return String(part).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }).filter(Boolean);
    const blob = new Blob([JSON.stringify(common, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = (nameParts.join('-') || 'begrotingsconcept') + '.cdhproject.json';
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(function () { URL.revokeObjectURL(link.href); }, 1000);
    setSavedMessage('Projectbestand gedownload');
  }

  function importProject(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function () {
      try {
        const imported = JSON.parse(String(reader.result || '{}'));
        writeJson(COMMON_KEY, imported);
        if (imported.begrotingsposten) {
          writeJson(PAGE_KEYS.aanvraag, Object.assign({}, imported));
          writeJson(PAGE_KEYS.scope, { projectopzet: imported.projectopzet || '', vervolgstap: imported.vervolgstap || '', begrotingsposten: imported.begrotingsposten || [] });
          writeJson(PAGE_KEYS.opname, { opnameposten: imported.begrotingsposten || [], begrotingsposten: imported.begrotingsposten || [] });
        }
        loadState(); fillFields(); renderPosts(); fillMeta(); setSavedMessage('Projectbestand ingeladen');
      } catch (error) { setSavedMessage('Inladen mislukt: geen geldig projectbestand'); }
    };
    reader.readAsText(file);
  }

  function bindEvents() {
    document.addEventListener('input', function (event) { if (event.target.matches('[data-field], [data-post-field]')) persist(false); });
    document.addEventListener('change', function (event) {
      if (event.target.matches('[data-field], [data-post-field]')) { persist(false); renderPosts(); }
      if (event.target.matches('[data-import-file]')) { importProject(event.target.files[0]); event.target.value = ''; }
    });
    document.addEventListener('click', function (event) {
      const button = event.target.closest('[data-action]');
      if (!button) return;
      const action = button.dataset.action;
      const id = button.dataset.id;
      if (action === 'add-post') addPost();
      if (action === 'remove') removePost(id);
      if (action === 'duplicate') duplicatePost(id);
      if (action === 'save') { persist(true); exportProject(); }
      if (action === 'save-only') persist(true);
      if (action === 'export') exportProject();
      if (action === 'show-all-opname') { state.posts.forEach(function (post) { if (!post.opnamevraag) post.opnamevraag = 'Controle buiten nodig.'; post.opnameStatus = 'nog opnemen'; }); renderPosts(); persist(true); }
    });
  }

  function boot() {
    loadState(); fillFields(); renderPosts(); fillMeta(); bindEvents(); setSavedMessage('Lokaal concept geladen');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
