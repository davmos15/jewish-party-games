// ===== DOM BUILD =====
// Builds the entire app UI from JS so all festival pages share one HTML shell.
(function buildDOM() {
  document.body.innerHTML = `<header>
  <h1 id="headerTitle"></h1>
  <div class="header-actions">
    <div class="stat-pill" id="statPill">0 cards</div>
    <button class="btn btn-gold btn-sm catalog-only" onclick="startNewSeder()">&#x1F389; Create Your Own</button>
    <div class="view-toggle seder-only">
      <button class="view-toggle-btn active" id="viewGridBtn" onclick="toggleViewMode('grid')">Grid</button>
      <button class="view-toggle-btn" id="viewTableBtn" onclick="toggleViewMode('table')">Table</button>
    </div>
    <button class="btn btn-ghost btn-sm seder-only" onclick="toggleCulled()">Toggle Culled</button>
    <button class="btn btn-gold btn-sm seder-only" onclick="exportPrint()">&#x1F5A8; Print Deck</button>
    <button class="btn btn-ghost btn-sm seder-only" onclick="exportCSV()">&#x1F4E5; Export CSV</button>
    <button class="btn btn-ghost btn-sm seder-only" onclick="document.getElementById('csvImport').click()">&#x1F4E4; Import CSV</button>
    <input type="file" id="csvImport" accept=".csv" onchange="importCSV(this)" style="display:none">
    <span class="sync-status sync-offline seder-only" id="syncStatus">Connecting...</span>
    <button class="btn btn-ghost btn-sm seder-only" onclick="resetCards()">Reset Defaults</button>
    <a href="../" class="btn btn-ghost btn-sm">&#x1F3E0; All Games</a>
    <a href="https://buymeacoffee.com/nadavmoskow" target="_blank" rel="noopener" class="btn btn-ghost btn-sm">&#x2615; Support</a>
  </div>
</header>
<div class="share-bar seder-only" id="shareBar" style="display:none">
  <span style="font-weight:700;color:var(--text-light)">Share this link with your partner:</span>
  <code id="shareLink"></code>
  <button class="btn btn-blue btn-sm" onclick="copyShareLink()">Copy Link</button>
  <span class="copy-msg" id="copyMsg"></span>
</div>
<div class="toolbar">
  <div class="filter-group" id="categoryFilters"><label>Category:</label></div>
  <div class="filter-group">
    <label>Points:</label>
    <select id="ptsFilter" onchange="renderGrid()">
      <option value="all">All</option>
      <option value="1">1 pt</option>
      <option value="2">2 pts</option>
      <option value="3">3 pts</option>
    </select>
  </div>
  <div class="filter-group">
    <label>Search:</label>
    <input type="text" id="searchBox" placeholder="Search..." oninput="renderGrid()" style="width:140px">
  </div>
  <div class="filter-group">
    <button class="btn btn-outline btn-sm" onclick="toggleHelp()" style="font-size:0.72rem;gap:4px">? How to Use</button>
  </div>
</div>
<div class="welcome-overlay" id="welcomeOverlay">
  <div class="welcome-modal" onclick="event.stopPropagation()">
    <h2 id="welcomeTitle"></h2>
    <p class="welcome-subtitle" id="welcomeSubtitle"></p>
    <div class="welcome-cols">
      <div class="welcome-col">
        <strong>&#x1F3AE; How to Play</strong>
        <ol>
          <li><strong>Two teams</strong>, 5 cards each player. Keep the ones you know.</li>
          <li><strong>Round 1:</strong> Describe it (no title words!)</li>
          <li><strong>Round 2:</strong> One word only</li>
          <li><strong>Round 3:</strong> Charades only</li>
          <li>Same cards all 3 rounds. Most points wins!</li>
        </ol>
      </div>
      <div class="welcome-col">
        <strong>&#x1F4CB; How to Use This App</strong>
        <ul>
          <li>Tap any card to preview &amp; flip it</li>
          <li>Click <strong>Create Your Own</strong> to start your deck</li>
          <li>Share the link with your partner for live sync</li>
          <li>Cull, edit, add cards, or bulk-edit via CSV or Table view</li>
          <li>Print your deck for double-sided printing</li>
        </ul>
      </div>
    </div>
    <div class="welcome-tip">&#x1F4A1; <strong>Tip:</strong> The same cards are used in all three rounds &mdash; clues from Round 1 help in later rounds. Pay attention!</div>
    <button class="welcome-dismiss" onclick="dismissWelcome()">Got it &mdash; Let&apos;s Play!</button>
  </div>
</div>
<div class="help-banner" id="helpBanner" style="display:none">
  <div class="help-inner">
    <div class="help-col">
      <strong>&#x1F3B2; How to Play</strong>
      <ol>
        <li><strong>Two teams</strong>, 5 cards each player. Keep the ones you know.</li>
        <li><strong>Round 1:</strong> Describe it (no title words!)</li>
        <li><strong>Round 2:</strong> One word only</li>
        <li><strong>Round 3:</strong> Charades only</li>
        <li>Same cards all 3 rounds. Most points wins!</li>
      </ol>
    </div>
    <div class="help-col">
      <strong>&#x1F4CB; How to Use This App</strong>
      <ul>
        <li>Tap any card to preview &amp; flip it</li>
        <li>Click <strong>Create Your Own</strong> to start your deck</li>
        <li>Share the link with your partner for live sync</li>
        <li>Cull, edit, add cards, or bulk-edit via CSV or Table view</li>
        <li>Print your deck with fronts &amp; backs for double-sided printing</li>
      </ul>
    </div>
    <button class="help-close" onclick="toggleHelp()" aria-label="Close help">&times;</button>
  </div>
</div>
<div class="main">
  <div class="card-grid-panel" id="gridPanel">
    <div class="grid-header">
      <h2 id="gridLabel">All Cards</h2>
      <button class="btn btn-blue btn-sm seder-only" onclick="addNewCard()">+ Add Card</button>
    </div>
    <div class="card-back-section" id="cardBackSection">
      <div class="back-label">Card Back</div>
      <div id="cardBackPreview"></div>
      <div class="card-back-actions seder-only">
        <button class="btn btn-outline btn-sm" onclick="document.getElementById('backUpload').click()">Upload Custom Back</button>
        <button class="btn btn-outline btn-sm" id="resetBackBtn" onclick="resetCardBack()" style="display:none">Reset to Default</button>
        <input type="file" id="backUpload" accept="image/*" onchange="handleBackUpload(this)" style="display:none">
      </div>
    </div>
    <div class="card-grid" id="cardGrid"></div>
  </div>
  <div class="table-view-container" id="tablePanel" style="display:none">
    <div class="bulk-table-actions" id="tableActions"></div>
    <div id="tableContainer"></div>
  </div>
  <div class="edit-panel" id="editPanel">
    <h3><span id="editTitle">Select a card to edit</span></h3>
    <div id="editForm" style="display:none">
      <div class="type-toggle">
        <div class="type-btn active" id="typeBtnText" onclick="setCardType('text')">Text Card</div>
        <div class="type-btn" id="typeBtnPicture" onclick="setCardType('picture')">Picture Card</div>
      </div>
      <div class="form-group"><label>Title</label><input type="text" id="eTitle" oninput="updatePreview()"></div>
      <div class="form-group"><label>Description</label><textarea id="eDesc" oninput="updatePreview()"></textarea></div>
      <div class="form-group"><label>Category</label><select id="eCat" onchange="updatePreview()"></select></div>
      <div class="form-group">
        <label>Points (Difficulty)</label>
        <div class="pts-picker">
          <div class="pts-opt" data-pts="1" onclick="setPts(1)">1<br><small style="font-size:0.5rem;font-weight:600">Easy</small></div>
          <div class="pts-opt" data-pts="2" onclick="setPts(2)">2<br><small style="font-size:0.5rem;font-weight:600">Medium</small></div>
          <div class="pts-opt" data-pts="3" onclick="setPts(3)">3<br><small style="font-size:0.5rem;font-weight:600">Hard</small></div>
        </div>
      </div>
      <div id="pictureControls" style="display:none">
        <div class="form-group">
          <label>Upload Image</label>
          <input type="file" id="eImgUpload" accept="image/*" onchange="handleImageUpload(this)" style="font-size:0.78rem">
        </div>
        <button class="btn btn-danger btn-sm" id="removeImgBtn" onclick="removeImage()" style="display:none;margin-top:4px">Remove Image</button>
        <div id="genStatus"></div>
      </div>
      <div class="edit-actions">
        <button class="btn btn-blue" onclick="saveCard()" style="flex:1">Save Card</button>
        <button class="btn btn-danger" onclick="deleteCard()">Delete</button>
      </div>
      <div id="saveStatus"></div>
      <div class="panel-flip-wrap" id="panelFlipWrap"></div>
    </div>
    <div id="editPh" style="color:#aaa;font-size:0.82rem;text-align:center;margin-top:40px;line-height:1.9">Click any card to edit it.</div>
  </div>
</div>
<div class="card-modal-overlay" id="cardModalOverlay" onclick="closeCardModal()">
  <div class="card-modal" onclick="event.stopPropagation()">
    <div class="card-modal-header">
      <h3 id="cardModalTitle">Card</h3>
      <button class="card-modal-close" onclick="closeCardModal()" aria-label="Close card">&times;</button>
    </div>
    <div class="card-modal-tabs" id="cardModalTabs">
      <button class="card-modal-tab active" data-tab="visual" onclick="switchModalTab('visual')">Visual</button>
      <button class="card-modal-tab seder-only" data-tab="edit" onclick="switchModalTab('edit')">Edit</button>
    </div>
    <div class="card-modal-body" id="cardModalBody"></div>
  </div>
</div>
<div class="info-section" id="infoSection">
  <div class="info-box">
    <h2>&#x1F3B2; How to Play</h2>
    <ol>
      <li><strong>Split into two teams.</strong> Each team should have at least 2 players.</li>
      <li><strong>Deal cards.</strong> Each player gets 5 cards from the deck. Secretly look at them and choose which ones to keep (discard any you don't know).</li>
      <li><strong>Round 1 &mdash; Describe It:</strong> Give any clues you want (words, sounds, gestures) to get your team to guess. You just can't say any word in the title.</li>
      <li><strong>Round 2 &mdash; One Word:</strong> Same cards, reshuffled. This time you can only say <strong>one single word</strong> as a clue.</li>
      <li><strong>Round 3 &mdash; Act It Out:</strong> Same cards again. No words at all &mdash; only charades!</li>
      <li><strong>Scoring:</strong> Each card is worth its point value (1, 2, or 3). Team with the most points after all three rounds wins!</li>
    </ol>
    <p style="margin-top:10px;font-size:0.82rem;color:var(--text-light)"><strong>Tip:</strong> The fun of the game is that all three rounds use the same cards &mdash; so clues from Round 1 help in later rounds. Pay attention!</p>
  </div>
  <div class="info-box">
    <h2>&#x1F4CB; How to Use This App</h2>
    <ul>
      <li><strong>Browse</strong> all cards in the catalog above. Tap any card to preview it and flip to see the back.</li>
      <li><strong>Create Your Own</strong> to start your deck with a unique shareable link.</li>
      <li><strong>Share the link</strong> with your partner &mdash; edits sync in real-time.</li>
      <li><strong>Cull cards</strong> you don't want, add your own, or upload images for picture cards.</li>
      <li><strong>Table View</strong> to bulk-edit all cards in a spreadsheet-style editor.</li>
      <li><strong>Export/Import CSV</strong> to bulk-edit your deck in a spreadsheet.</li>
      <li><strong>Upload a custom card back</strong> to personalize your deck.</li>
      <li><strong>Print your deck</strong> with the Print button &mdash; includes fronts and backs for double-sided printing.</li>
    </ul>
  </div>
  <div class="info-box" style="text-align:center;">
    <h2>&#x1F4AC; Get in Touch</h2>
    <p>Enjoying the game? Have feedback or ideas? We'd love to hear from you!</p>
    <div class="info-links" style="justify-content:center;margin-top:12px;">
      <a href="https://buymeacoffee.com/nadavmoskow" target="_blank" rel="noopener" class="btn btn-gold">&#x2615; Buy Me a Coffee</a>
      <a href="mailto:moskownadav@gmail.com" class="btn btn-outline" style="gap:4px">&#x2709; Send Feedback</a>
    </div>
  </div>
</div>
<div id="printLoading" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;align-items:center;justify-content:center">
  <div style="background:#fff;border-radius:16px;padding:32px 48px;text-align:center;box-shadow:0 12px 48px rgba(0,0,0,0.3)">
    <div style="font-family:'Nunito',sans-serif;font-weight:900;font-size:1.2rem;color:#1a1a2e;margin-bottom:8px">Generating Print Preview...</div>
    <div style="font-size:0.85rem;color:#888">This may take a moment</div>
  </div>
</div>
<div id="toastContainer" class="toast-container"></div>`;
})();

// ===== CONSTANTS =====
const MAX_IMG_SIZE  = 5 * 1024 * 1024; // 5 MB
const MAX_IMG_DIM   = 800;              // px — max width/height when resizing
const PRINT_CARD_W  = '60mm';
const PRINT_CARD_H  = '88mm';

// ===== FESTIVAL CONFIG =====
const CFG = window.FESTIVAL_CONFIG;
const PTSCOLORS = {1:'#27ae60', 2:'#2b7bb9', 3:'#c0392b'};
const CATLABEL = CFG.categoryLabels;
const CATCLASS = CFG.categoryClasses;
const CATCOLORS = CFG.categoryColors;

// ===== MODE DETECTION =====
const urlParams = new URLSearchParams(window.location.search);
const sederId = urlParams.get('seder');
const isSederMode = !!sederId;
document.body.classList.add(isSederMode ? 'seder-mode' : 'catalog-mode');

// ===== FIREBASE REFS =====
if (isSederMode && firebaseReady) {
  dbRef = db.ref('seders/' + CFG.id + '/' + sederId + '/cards');
  dbBackRef = db.ref('seders/' + CFG.id + '/' + sederId + '/cardBack');
}

// ===== PERSISTENCE =====
function saveCards() {
  if (!isSederMode) return;
  localStorage.setItem(CFG.storagePrefix + '_seder_' + sederId, JSON.stringify(cards));
  if (firebaseReady && dbRef) dbRef.set(cards);
}

function loadCardsLocal() {
  if (isSederMode) {
    try {
      const s = localStorage.getItem(CFG.storagePrefix + '_seder_' + sederId);
      if (s) return JSON.parse(s);
    } catch(e) {}
  }
  return JSON.parse(JSON.stringify(CFG.defaultCards));
}

let cards = loadCardsLocal();
let selectedId = null, editingPts = 2, editingType = 'text';
let activeFilters = new Set(CFG.categories);
let showCulled = true;
let viewMode = 'grid';

// ===== CARD BACK IMAGE =====
let backImgDataUri = '';
let customBackImgDataUri = '';

function getEffectiveBack() { return customBackImgDataUri || backImgDataUri; }

if (CFG.cardBackImage) {
  fetch(CFG.cardBackImage)
    .then(r => { if (r.ok) return r.blob(); throw 0; })
    .then(b => {
      const reader = new FileReader();
      reader.onload = () => { backImgDataUri = reader.result; renderCardBackPreview(); };
      reader.readAsDataURL(b);
    })
    .catch(() => {});
}

function renderCardBackPreview() {
  const el = document.getElementById('cardBackPreview');
  if (!el) return;
  const src = getEffectiveBack();
  if (src) {
    el.innerHTML = '<img src="' + src + '" alt="Card back" style="width:120px;height:168px;object-fit:cover;border-radius:8px;box-shadow:0 3px 14px rgba(0,0,0,0.18);border:1px solid #d4c9b0">';
  } else {
    el.innerHTML = '<div class="back-fallback"><div>' + esc(CFG.name) + '</div><div style="font-size:0.5rem;opacity:0.6;margin-top:2px">' + esc(CFG.subtitle) + '</div></div>';
  }
  const resetBtn = document.getElementById('resetBackBtn');
  if (resetBtn) resetBtn.style.display = customBackImgDataUri ? 'inline-flex' : 'none';
}

function handleBackUpload(input) {
  if (!input.files[0]) return;
  const file = input.files[0];
  if (!file.type.startsWith('image/')) { showToast('Please upload an image file.', 'error'); input.value = ''; return; }
  if (file.size > MAX_IMG_SIZE) { showToast('Image must be under 5MB.', 'error'); input.value = ''; return; }
  resizeImage(file, MAX_IMG_DIM, 0.85, function(dataUri) {
    customBackImgDataUri = dataUri;
    localStorage.setItem(CFG.storagePrefix + '_back_' + sederId, dataUri);
    if (firebaseReady && dbBackRef) dbBackRef.set(dataUri);
    renderCardBackPreview();
    input.value = '';
  });
}

function resetCardBack() {
  if (!confirm('Reset card back to default?')) return;
  customBackImgDataUri = '';
  localStorage.removeItem(CFG.storagePrefix + '_back_' + sederId);
  if (firebaseReady && dbBackRef) dbBackRef.remove();
  renderCardBackPreview();
}

// Load saved custom back from localStorage
if (isSederMode) {
  try {
    const saved = localStorage.getItem(CFG.storagePrefix + '_back_' + sederId);
    if (saved) customBackImgDataUri = saved;
  } catch(e) {}
}

// ===== SEDER MANAGEMENT =====
function generateSederId() {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const arr = new Uint8Array(12); crypto.getRandomValues(arr);
  let id = ''; for (let i = 0; i < 12; i++) id += chars[arr[i] % chars.length];
  return id;
}

function startNewSeder() {
  if (!firebaseReady) { showToast('No connection — cannot create a session.', 'error'); return; }
  const id = generateSederId();
  db.ref('seders/' + CFG.id + '/' + id + '/cards').set(JSON.parse(JSON.stringify(CFG.defaultCards))).then(() => {
    window.location.href = window.location.pathname + '?seder=' + id;
  }).catch(() => { showToast('Failed to create session. Please try again.', 'error'); });
}

function copyShareLink() {
  const link = window.location.origin + window.location.pathname + '?seder=' + sederId;
  navigator.clipboard.writeText(link).then(() => {
    const msg = document.getElementById('copyMsg');
    msg.textContent = 'Copied!'; setTimeout(() => msg.textContent = '', 2000);
  });
}

// ===== CSV EXPORT / IMPORT =====
function exportCSV() {
  let csv = 'id,title,category,points,type,description\n';
  cards.forEach(c => {
    const t = '"' + String(c.title).replace(/"/g, '""') + '"';
    const d = '"' + String(c.desc).replace(/"/g, '""') + '"';
    csv += c.id + ',' + t + ',' + c.cat + ',' + c.pts + ',' + c.type + ',' + d + '\n';
  });
  const blob = new Blob([csv], {type: 'text/csv'});
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
  a.download = CFG.storagePrefix + '-cards.csv'; a.click();
}

function importCSV(input) {
  if (!input.files[0]) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const lines = e.target.result.split('\n').filter(l => l.trim());
      if (lines.length < 2) { showToast('CSV is empty.', 'error'); return; }
      const newCards = [];
      for (let i = 1; i < lines.length; i++) {
        const cols = parseCSVLine(lines[i]);
        if (cols.length < 6) continue;
        const id = parseInt(cols[0]);
        const existingCard = cards.find(c => c.id === id);
        newCards.push({
          id: id, title: cols[1], cat: cols[2], pts: parseInt(cols[3]) || 1,
          type: cols[4] || 'text', img: existingCard ? existingCard.img : null,
          imgPrompt: '', culled: false, desc: cols[5]
        });
      }
      if (newCards.length === 0) { showToast('No valid cards found in CSV.', 'error'); return; }
      cards = newCards;
      selectedId = null;
      saveCards(); renderGrid();
      showToast('Imported ' + newCards.length + ' cards!', 'success');
    } catch(err) { showToast('Error parsing CSV: ' + err.message, 'error'); input.value = ''; }
  };
  reader.readAsText(input.files[0]);
}

function parseCSVLine(line) {
  const result = []; let current = ''; let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inQuotes) {
      if (ch === '"' && i + 1 < line.length && line[i + 1] === '"') { current += '"'; i++; }
      else if (ch === '"') inQuotes = false;
      else current += ch;
    } else {
      if (ch === '"') inQuotes = true;
      else if (ch === ',') { result.push(current); current = ''; }
      else current += ch;
    }
  }
  result.push(current);
  return result;
}

// ===== UTILITY =====
function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

// ===== TOAST NOTIFICATIONS =====
function showToast(msg, type, duration) {
  type = type || 'info';
  duration = duration === undefined ? 3000 : duration;
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast toast-' + type;
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(function() {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s';
    setTimeout(function() { if (toast.parentNode) toast.remove(); }, 300);
  }, duration);
}

// ===== DEBOUNCED RENDER =====
let _renderTimeout = null;
function renderGrid() {
  clearTimeout(_renderTimeout);
  _renderTimeout = setTimeout(_renderGrid, 80);
}

function _renderGrid() {
  const grid = document.getElementById('cardGrid');
  if (!grid) return;
  const pf = document.getElementById('ptsFilter').value;
  const s = document.getElementById('searchBox').value.toLowerCase();
  let vis = cards.filter(c => {
    if (!showCulled && c.culled) return false;
    if (!activeFilters.has(c.cat)) return false;
    if (pf !== 'all' && c.pts !== parseInt(pf)) return false;
    if (s && !c.title.toLowerCase().includes(s) && !c.desc.toLowerCase().includes(s)) return false;
    return true;
  });
  document.getElementById('statPill').textContent = cards.filter(c => !c.culled).length + (isSederMode ? ' in deck' : ' cards');
  document.getElementById('gridLabel').textContent = vis.length + ' cards';
  grid.innerHTML = '';
  vis.forEach(card => {
    const d = document.createElement('div');
    d.className = 'mini-card' + (selectedId === card.id ? ' selected' : '') + (card.culled ? ' culled' : '') + (card.type === 'picture' ? ' picture-card' : '');
    d.onclick = () => {
      if (isSederMode && window.innerWidth > 768) selectCard(card.id);
      else openCardModal(card.id);
    };
    const titleEl = document.createElement('div'); titleEl.className = 'mini-card-title'; titleEl.textContent = card.title;
    d.appendChild(titleEl);
    if (card.type === 'picture') {
      if (card.img) { const im = document.createElement('img'); im.className = 'mini-card-img'; im.src = card.img; im.alt = ''; im.loading = 'lazy'; d.appendChild(im); }
      else { const ph = document.createElement('div'); ph.className = 'mini-card-img-ph'; ph.textContent = 'No image yet'; d.appendChild(ph); }
    }
    const descEl = document.createElement('div'); descEl.className = 'mini-card-desc'; descEl.textContent = card.desc;
    d.appendChild(descEl);
    const footer = document.createElement('div'); footer.className = 'mini-card-footer';
    const ptsBadge = document.createElement('div'); ptsBadge.className = 'pts-badge pts-' + card.pts; ptsBadge.textContent = card.pts;
    footer.appendChild(ptsBadge);
    const catBadge = document.createElement('span'); catBadge.className = 'cat-badge ' + (CATCLASS[card.cat] || ''); catBadge.style.cssText = 'font-size:0.58rem;padding:2px 5px'; catBadge.textContent = card.cat;
    footer.appendChild(catBadge);
    if (isSederMode) {
      const cb = document.createElement('button'); cb.className = 'cull-btn'; cb.textContent = card.culled ? 'Restore' : 'Cull';
      cb.onclick = function(e) { e.stopPropagation(); toggleCull(card.id); };
      footer.appendChild(cb);
    }
    d.appendChild(footer);
    grid.appendChild(d);
  });
  if (isSederMode) {
    const add = document.createElement('div'); add.className = 'add-card-tile'; add.onclick = addNewCard;
    add.innerHTML = '<span style="font-size:1.6rem">+</span>Add Card';
    grid.appendChild(add);
  }
  // Also update table if visible
  if (viewMode === 'table') renderTable();
}

// ===== VIEW MODE TOGGLE =====
function toggleViewMode(mode) {
  viewMode = mode;
  const gridPanel = document.getElementById('gridPanel');
  const tablePanel = document.getElementById('tablePanel');
  const editPanel = document.getElementById('editPanel');
  const gridBtn = document.getElementById('viewGridBtn');
  const tableBtn = document.getElementById('viewTableBtn');
  if (mode === 'table') {
    if (gridPanel) gridPanel.style.display = 'none';
    if (tablePanel) tablePanel.style.display = 'block';
    if (editPanel) editPanel.style.display = 'none';
    if (gridBtn) gridBtn.classList.remove('active');
    if (tableBtn) tableBtn.classList.add('active');
    renderTable();
  } else {
    if (gridPanel) gridPanel.style.display = '';
    if (tablePanel) tablePanel.style.display = 'none';
    if (editPanel) editPanel.style.display = '';
    if (gridBtn) gridBtn.classList.add('active');
    if (tableBtn) tableBtn.classList.remove('active');
  }
}

// ===== BULK TABLE EDITOR =====
let tableSortCol = 'id', tableSortDir = 'asc';
let _tableSaveTimeout = null;

function renderTable() {
  const container = document.getElementById('tableContainer');
  const actionsEl = document.getElementById('tableActions');
  if (!container) return;

  // Actions bar
  actionsEl.innerHTML = '';
  const cullAllBtn = document.createElement('button');
  cullAllBtn.className = 'btn btn-outline btn-sm';
  cullAllBtn.textContent = 'Cull All Visible';
  cullAllBtn.onclick = () => { getVisibleCards().forEach(c => c.culled = true); saveCards(); renderTable(); _renderGrid(); };
  actionsEl.appendChild(cullAllBtn);

  const uncullAllBtn = document.createElement('button');
  uncullAllBtn.className = 'btn btn-outline btn-sm';
  uncullAllBtn.textContent = 'Restore All';
  uncullAllBtn.onclick = () => { cards.forEach(c => c.culled = false); saveCards(); renderTable(); _renderGrid(); };
  actionsEl.appendChild(uncullAllBtn);

  const addBtn = document.createElement('button');
  addBtn.className = 'btn btn-blue btn-sm';
  addBtn.textContent = '+ Add Card';
  addBtn.onclick = addNewCard;
  actionsEl.appendChild(addBtn);

  const countLabel = document.createElement('span');
  countLabel.className = 'stat-pill';
  countLabel.style.cssText = 'background:rgba(26,26,46,0.08);color:#555;margin-left:auto';
  countLabel.textContent = cards.filter(c => !c.culled).length + ' active / ' + cards.length + ' total';
  actionsEl.appendChild(countLabel);

  // Sort cards
  let sorted = [...cards];
  sorted.sort((a, b) => {
    let va = a[tableSortCol], vb = b[tableSortCol];
    if (typeof va === 'string') va = va.toLowerCase();
    if (typeof vb === 'string') vb = vb.toLowerCase();
    if (va < vb) return tableSortDir === 'asc' ? -1 : 1;
    if (va > vb) return tableSortDir === 'asc' ? 1 : -1;
    return 0;
  });

  // Build table
  const cols = [
    {key: 'title', label: 'Title', cls: 'title-col'},
    {key: 'desc', label: 'Description', cls: 'desc-col'},
    {key: 'cat', label: 'Category', cls: 'cat-col'},
    {key: 'pts', label: 'Pts', cls: 'pts-col'},
    {key: 'type', label: 'Type', cls: 'type-col'},
    {key: 'culled', label: 'Culled', cls: 'cull-col'}
  ];

  let html = '<table class="bulk-table"><thead><tr>';
  cols.forEach(col => {
    const isActive = tableSortCol === col.key;
    const arrow = isActive ? (tableSortDir === 'asc' ? ' ▲' : ' ▼') : '';
    html += '<th class="' + col.cls + '" onclick="tableSort(\'' + col.key + '\')">' + col.label + '<span class="sort-arrow' + (isActive ? ' active' : '') + '">' + arrow + '</span></th>';
  });
  html += '</tr></thead><tbody>';

  sorted.forEach(card => {
    const rowCls = card.culled ? ' class="culled-row"' : '';
    html += '<tr' + rowCls + ' data-id="' + card.id + '">';
    // Title
    html += '<td class="title-col"><input type="text" value="' + esc(card.title) + '" onchange="tableEdit(' + card.id + ',\'title\',this.value)" onblur="tableEdit(' + card.id + ',\'title\',this.value)"></td>';
    // Description
    html += '<td class="desc-col"><textarea onchange="tableEdit(' + card.id + ',\'desc\',this.value)" onblur="tableEdit(' + card.id + ',\'desc\',this.value)">' + esc(card.desc) + '</textarea></td>';
    // Category
    html += '<td class="cat-col"><select onchange="tableEdit(' + card.id + ',\'cat\',this.value)">';
    CFG.categories.forEach(cat => {
      html += '<option value="' + esc(cat) + '"' + (card.cat === cat ? ' selected' : '') + '>' + esc(cat) + '</option>';
    });
    html += '</select></td>';
    // Points
    html += '<td class="pts-col"><select onchange="tableEdit(' + card.id + ',\'pts\',parseInt(this.value))">';
    [1, 2, 3].forEach(p => {
      html += '<option value="' + p + '"' + (card.pts === p ? ' selected' : '') + '>' + p + '</option>';
    });
    html += '</select></td>';
    // Type
    html += '<td class="type-col"><select onchange="tableEdit(' + card.id + ',\'type\',this.value)">';
    ['text', 'picture'].forEach(t => {
      html += '<option value="' + t + '"' + (card.type === t ? ' selected' : '') + '>' + t + '</option>';
    });
    html += '</select></td>';
    // Culled
    html += '<td class="cull-col"><input type="checkbox"' + (card.culled ? ' checked' : '') + ' onchange="tableEdit(' + card.id + ',\'culled\',this.checked)"></td>';
    html += '</tr>';
  });

  html += '</tbody></table>';
  container.innerHTML = html;
}

function tableSort(col) {
  if (tableSortCol === col) tableSortDir = tableSortDir === 'asc' ? 'desc' : 'asc';
  else { tableSortCol = col; tableSortDir = 'asc'; }
  renderTable();
}

function tableEdit(id, field, value) {
  const c = cards.find(x => x.id === id);
  if (!c) return;
  c[field] = value;
  clearTimeout(_tableSaveTimeout);
  _tableSaveTimeout = setTimeout(() => { saveCards(); _renderGrid(); }, 300);
}

function getVisibleCards() {
  const pf = document.getElementById('ptsFilter').value;
  const s = document.getElementById('searchBox').value.toLowerCase();
  return cards.filter(c => {
    if (!showCulled && c.culled) return false;
    if (!activeFilters.has(c.cat)) return false;
    if (pf !== 'all' && c.pts !== parseInt(pf)) return false;
    if (s && !c.title.toLowerCase().includes(s) && !c.desc.toLowerCase().includes(s)) return false;
    return true;
  });
}

// ===== DESKTOP EDIT PANEL =====
function selectCard(id) {
  if (!isSederMode) return;
  selectedId = id; const c = cards.find(x => x.id === id); if (!c) return;
  document.getElementById('editTitle').textContent = 'Edit Card';
  document.getElementById('editForm').style.display = 'block';
  document.getElementById('editPh').style.display = 'none';
  document.getElementById('eTitle').value = c.title;
  document.getElementById('eDesc').value = c.desc;
  document.getElementById('eCat').value = c.cat;
  document.getElementById('eImgUpload').value = '';
  document.getElementById('removeImgBtn').style.display = c.img ? 'inline-block' : 'none';
  editingPts = c.pts; editingType = c.type || 'text';
  setCardType(editingType, true);
  document.querySelectorAll('.pts-opt').forEach(el => { el.className = 'pts-opt'; if (parseInt(el.dataset.pts) === editingPts) el.classList.add('active-' + editingPts); });
  updatePreview();
  renderPanelFlip(c);
  _renderGrid();
}

function setCardType(t, silent) {
  editingType = t;
  document.getElementById('typeBtnText').className = 'type-btn' + (t === 'text' ? ' active' : '');
  document.getElementById('typeBtnPicture').className = 'type-btn' + (t === 'picture' ? ' active' : '');
  document.getElementById('pictureControls').style.display = t === 'picture' ? 'block' : 'none';
  if (!silent) updatePreview();
}

function updatePreview() {
  const c = cards.find(x => x.id === selectedId);
  if (c) renderPanelFlip(c);
}

function setPts(n) {
  editingPts = n;
  document.querySelectorAll('.pts-opt').forEach(el => { el.className = 'pts-opt'; if (parseInt(el.dataset.pts) === n) el.classList.add('active-' + n); });
  updatePreview();
}

function saveCard() {
  const c = cards.find(x => x.id === selectedId); if (!c) return;
  c.title = document.getElementById('eTitle').value;
  c.desc = document.getElementById('eDesc').value;
  c.cat = document.getElementById('eCat').value;
  c.pts = editingPts; c.type = editingType;
  const s = document.getElementById('saveStatus');
  s.textContent = 'Saved!'; s.style.color = PTSCOLORS[1];
  setTimeout(() => s.textContent = '', 2000);
  saveCards(); _renderGrid(); renderPanelFlip(c);
}

function deleteCard() {
  if (!selectedId || !confirm('Delete this card?')) return;
  cards = cards.filter(c => c.id !== selectedId); selectedId = null;
  document.getElementById('editForm').style.display = 'none';
  document.getElementById('editPh').style.display = 'block';
  document.getElementById('editTitle').textContent = 'Select a card to edit';
  document.getElementById('panelFlipWrap').innerHTML = '';
  saveCards(); _renderGrid();
}

// ===== FLIP CARD BUILDER =====
function buildFlipCard(c, container, useLiveForm) {
  container.innerHTML = '';
  const isPic = c.type === 'picture';
  const et = useLiveForm ? document.getElementById('eTitle') : null;
  const ed = useLiveForm ? document.getElementById('eDesc') : null;
  const ec = useLiveForm ? document.getElementById('eCat') : null;
  const liveTitle = (et && et.value) ? et.value : c.title;
  const liveDesc = (ed && ed.value) ? ed.value : c.desc;
  const liveCat = (ec && ec.value) ? ec.value : c.cat;
  const livePts = useLiveForm ? editingPts : c.pts;

  const front = document.createElement('div');
  front.className = 'monikers-card' + (isPic ? ' is-picture' : '');
  front.style.cssText = 'width:200px;min-height:280px;margin:0;box-sizing:border-box;';

  const title = document.createElement('div'); title.className = 'mc-title'; title.textContent = liveTitle || c.title;
  front.appendChild(title);
  const divider = document.createElement('div'); divider.className = 'mc-divider'; front.appendChild(divider);
  if (isPic) {
    const imgWrap = document.createElement('div'); imgWrap.className = 'mc-img-wrap';
    if (c.img) { const im = document.createElement('img'); im.className = 'mc-img'; im.src = c.img; im.alt = ''; imgWrap.appendChild(im); }
    else { const ph = document.createElement('div'); ph.className = 'mc-img-ph'; ph.textContent = 'No image'; imgWrap.appendChild(ph); }
    front.appendChild(imgWrap);
  }
  const desc = document.createElement('div'); desc.className = 'mc-desc'; desc.textContent = liveDesc || c.desc; front.appendChild(desc);
  const dots = document.createElement('div'); dots.className = 'mc-dots'; dots.innerHTML = '&#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226;'; front.appendChild(dots);
  const catLabel = document.createElement('div'); catLabel.className = 'mc-cat-label';
  catLabel.style.color = CATCOLORS[liveCat || c.cat] || '#2b7bb9';
  catLabel.textContent = CATLABEL[liveCat || c.cat] || CFG.subtitle.toUpperCase();
  front.appendChild(catLabel);
  const footer = document.createElement('div'); footer.className = 'mc-footer';
  const ptsCircle = document.createElement('div'); ptsCircle.className = 'mc-pts-circle'; ptsCircle.style.background = PTSCOLORS[livePts] || PTSCOLORS[1];
  const ptsNum = document.createElement('div'); ptsNum.className = 'mc-pts-num'; ptsNum.textContent = livePts;
  const ptsLabel = document.createElement('div'); ptsLabel.className = 'mc-pts-label'; ptsLabel.textContent = 'POINTS';
  ptsCircle.appendChild(ptsNum); ptsCircle.appendChild(ptsLabel); footer.appendChild(ptsCircle); front.appendChild(footer);

  const flipContainer = document.createElement('div'); flipContainer.className = 'flip-container';
  const flipInner = document.createElement('div'); flipInner.className = 'flip-inner';
  const flipFront = document.createElement('div'); flipFront.className = 'flip-front'; flipFront.appendChild(front);
  const flipBack = document.createElement('div'); flipBack.className = 'flip-back';

  const effectiveBack = getEffectiveBack();
  if (effectiveBack) {
    const backImg = document.createElement('img'); backImg.src = effectiveBack; backImg.alt = 'Card back';
    flipBack.appendChild(backImg);
  } else {
    flipBack.innerHTML = '<div style="width:100%;height:100%;background:#1a1a2e;display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:14px"><div style="font-family:Nunito,sans-serif;font-weight:900;font-size:0.9rem;color:#e8b84b;letter-spacing:1.5px;text-transform:uppercase">' + esc(CFG.name) + '</div><div style="font-family:Nunito,sans-serif;font-weight:800;font-size:0.55rem;color:rgba(232,184,75,0.6);letter-spacing:2px;text-transform:uppercase;margin-top:4px">' + esc(CFG.subtitle) + '</div></div>';
  }

  flipInner.appendChild(flipFront); flipInner.appendChild(flipBack);
  flipContainer.appendChild(flipInner);
  flipContainer.onclick = function() { flipInner.classList.toggle('flipped'); };
  container.appendChild(flipContainer);
  const hint = document.createElement('div'); hint.className = 'flip-hint'; hint.textContent = 'Click card to flip';
  container.appendChild(hint);
}

function renderPanelFlip(c) {
  const wrap = document.getElementById('panelFlipWrap');
  if (wrap) buildFlipCard(c, wrap, true);
}

// ===== CARD MODAL =====
function openCardModal(id) {
  const c = cards.find(x => x.id === id); if (!c) return;
  selectedId = id;
  document.getElementById('cardModalTitle').textContent = c.title;
  document.getElementById('cardModalOverlay').classList.add('active');
  switchModalTab('visual');
}

function closeCardModal() {
  document.getElementById('cardModalOverlay').classList.remove('active');
}
document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeCardModal(); });

function switchModalTab(tab) {
  document.querySelectorAll('.card-modal-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tab);
  });
  const body = document.getElementById('cardModalBody');
  const c = cards.find(x => x.id === selectedId); if (!c) { body.innerHTML = ''; return; }
  if (tab === 'visual') {
    buildFlipCard(c, body);
  } else {
    renderModalEdit(c, body);
  }
}

function renderModalEdit(c, container) {
  container.innerHTML = '';
  if (!isSederMode) {
    const p = document.createElement('p'); p.style.cssText = 'text-align:center;color:#aaa;margin-top:20px';
    p.textContent = 'Start a game session to edit cards.'; container.appendChild(p); return;
  }

  modalEditPts = c.pts;
  const form = document.createElement('div');
  form.style.cssText = 'font-family:"Nunito Sans",sans-serif;';

  let catOptions = '';
  CFG.categories.forEach(cat => {
    catOptions += '<option value="' + esc(cat) + '"' + (c.cat === cat ? ' selected' : '') + '>' + esc(cat) + '</option>';
  });

  form.innerHTML =
    '<div style="margin-bottom:10px"><label style="display:block;font-size:0.72rem;font-weight:800;color:var(--text-light);text-transform:uppercase;margin-bottom:3px">Title</label>' +
    '<input type="text" id="mTitle" value="' + esc(c.title) + '" style="width:100%;padding:7px 9px;border:1.5px solid var(--border);border-radius:6px;font-size:0.82rem;background:var(--cream)"></div>' +
    '<div style="margin-bottom:10px"><label style="display:block;font-size:0.72rem;font-weight:800;color:var(--text-light);text-transform:uppercase;margin-bottom:3px">Description</label>' +
    '<textarea id="mDesc" rows="4" style="width:100%;padding:7px 9px;border:1.5px solid var(--border);border-radius:6px;font-size:0.82rem;background:var(--cream);resize:vertical">' + esc(c.desc) + '</textarea></div>' +
    '<div style="margin-bottom:10px"><label style="display:block;font-size:0.72rem;font-weight:800;color:var(--text-light);text-transform:uppercase;margin-bottom:3px">Category</label>' +
    '<select id="mCat" style="width:100%;padding:7px 9px;border:1.5px solid var(--border);border-radius:6px;font-size:0.82rem;background:var(--cream)">' + catOptions + '</select></div>' +
    '<div style="margin-bottom:10px"><label style="display:block;font-size:0.72rem;font-weight:800;color:var(--text-light);text-transform:uppercase;margin-bottom:3px">Points</label>' +
    '<div style="display:flex;gap:8px">' +
    '<button class="btn ' + (c.pts === 1 ? 'btn-blue' : 'btn-outline') + '" onclick="modalSetPts(1)" style="flex:1">1 Easy</button>' +
    '<button class="btn ' + (c.pts === 2 ? 'btn-blue' : 'btn-outline') + '" onclick="modalSetPts(2)" style="flex:1">2 Medium</button>' +
    '<button class="btn ' + (c.pts === 3 ? 'btn-blue' : 'btn-outline') + '" onclick="modalSetPts(3)" style="flex:1">3 Hard</button>' +
    '</div></div>' +
    '<div style="display:flex;gap:8px;margin-top:14px">' +
    '<button class="btn btn-blue" onclick="modalSave()" style="flex:1">Save</button>' +
    '<button class="btn btn-danger" onclick="modalDelete()">Delete</button>' +
    '</div>' +
    '<div id="modalSaveStatus" style="text-align:center;font-size:0.72rem;margin-top:6px"></div>';
  container.appendChild(form);
}

var modalEditPts = 1;
function modalSetPts(n) {
  modalEditPts = n;
  switchModalTab('edit');
}
function modalSave() {
  const c = cards.find(x => x.id === selectedId); if (!c) return;
  c.title = document.getElementById('mTitle').value;
  c.desc = document.getElementById('mDesc').value;
  c.cat = document.getElementById('mCat').value;
  c.pts = modalEditPts;
  document.getElementById('cardModalTitle').textContent = c.title;
  if (window.innerWidth > 768) selectCard(c.id);
  saveCards(); _renderGrid();
  const st = document.getElementById('modalSaveStatus');
  if (st) { st.textContent = 'Saved!'; st.style.color = PTSCOLORS[1]; setTimeout(() => st.textContent = '', 2000); }
}
function modalDelete() {
  if (!selectedId || !confirm('Delete this card?')) return;
  cards = cards.filter(c => c.id !== selectedId); selectedId = null;
  closeCardModal(); saveCards(); _renderGrid();
}

// ===== IMAGE HANDLING =====
function resizeImage(file, maxDim, quality, cb) {
  const img = new Image();
  img.onload = function() {
    let w = img.width, h = img.height;
    if (w > maxDim || h > maxDim) { const r = Math.min(maxDim / w, maxDim / h); w = Math.round(w * r); h = Math.round(h * r); }
    const canvas = document.createElement('canvas'); canvas.width = w; canvas.height = h;
    canvas.getContext('2d').drawImage(img, 0, 0, w, h);
    cb(canvas.toDataURL('image/jpeg', quality));
    URL.revokeObjectURL(img.src);
  };
  img.src = URL.createObjectURL(file);
}

function handleImageUpload(input) {
  const c = cards.find(x => x.id === selectedId); if (!c || !input.files[0]) return;
  const file = input.files[0];
  if (!file.type.startsWith('image/')) { showToast('Please upload an image file.', 'error'); input.value = ''; return; }
  if (file.size > MAX_IMG_SIZE) { showToast('Image must be under 5MB.', 'error'); input.value = ''; return; }
  resizeImage(file, MAX_IMG_DIM, 0.8, function(dataUri) {
    c.img = dataUri;
    document.getElementById('removeImgBtn').style.display = 'inline-block';
    document.getElementById('genStatus').textContent = 'Image uploaded!';
    setTimeout(() => document.getElementById('genStatus').textContent = '', 2000);
    saveCards(); _renderGrid(); renderPanelFlip(c);
  });
}

function removeImage() {
  const c = cards.find(x => x.id === selectedId); if (!c) return;
  c.img = null;
  document.getElementById('removeImgBtn').style.display = 'none';
  document.getElementById('eImgUpload').value = '';
  saveCards(); _renderGrid(); renderPanelFlip(c);
}

// ===== OTHER FUNCTIONS =====
function toggleCull(id) { const c = cards.find(x => x.id === id); if (c) c.culled = !c.culled; saveCards(); _renderGrid(); }
function toggleCulled() { showCulled = !showCulled; _renderGrid(); }

function addNewCard() {
  if (!isSederMode) return;
  const nid = cards.length > 0 ? Math.max(...cards.map(c => c.id)) + 1 : 1;
  cards.push({id: nid, title: 'New Card', cat: CFG.categories[0], pts: 1, type: 'text', img: null, imgPrompt: '', culled: false, desc: 'Enter a description here.'});
  saveCards(); _renderGrid();
  if (viewMode === 'table') renderTable();
  if (window.innerWidth > 768 && viewMode === 'grid') selectCard(nid); else openCardModal(nid);
}

function toggleFilter(el) {
  const cat = el.dataset.cat;
  if (activeFilters.has(cat)) { activeFilters.delete(cat); el.classList.remove('active'); }
  else { activeFilters.add(cat); el.classList.add('active'); }
  renderGrid();
}

function toggleHelp() {
  const b = document.getElementById('helpBanner');
  b.style.display = b.style.display === 'none' ? 'block' : 'none';
}

function dismissWelcome() {
  document.getElementById('welcomeOverlay').classList.remove('active');
  localStorage.setItem(CFG.storagePrefix + '_welcomed', '1');
}

function resetCards() {
  if (!isSederMode) return;
  if (!confirm('Reset all cards to defaults? This will erase your edits.')) return;
  cards = JSON.parse(JSON.stringify(CFG.defaultCards));
  selectedId = null;
  document.getElementById('editForm').style.display = 'none';
  document.getElementById('editPh').style.display = 'block';
  document.getElementById('editTitle').textContent = 'Select a card to edit';
  document.getElementById('panelFlipWrap').innerHTML = '';
  saveCards(); _renderGrid();
}

// ===== PRINT EXPORT (OPTIMIZED) =====
let _printLock = false;
function exportPrint() {
  if (_printLock) return;
  _printLock = true;

  // Show loading overlay
  const loadingEl = document.getElementById('printLoading');
  if (loadingEl) loadingEl.style.display = 'flex';

  setTimeout(function() {
    try { _doPrintExport(); } catch(e) { console.error('Print error:', e); showToast('Error generating print preview.', 'error'); }
    if (loadingEl) loadingEl.style.display = 'none';
    _printLock = false;
  }, 50);
}

function _doPrintExport() {
  const active = cards.filter(c => !c.culled);
  if (active.length === 0) { showToast('No cards to print — restore some culled cards first.', 'error'); return; }

  const PTC = {1: '#27ae60', 2: '#2b7bb9', 3: '#c0392b'};
  const PTL = {1: 'EASY', 2: 'MEDIUM', 3: 'HARD'};
  const CW = PRINT_CARD_W, CH = PRINT_CARD_H;
  const effectiveBack = getEffectiveBack();

  function cardHTML(c) {
    const isPic = c.type === 'picture';
    const bg = isPic ? 'background:linear-gradient(160deg,#1a1a2e 0%,#16213e 100%)' : 'background:#f5f0e8';
    const titleCol = isPic ? '#fff' : '#1a1a2e';
    const descCol = isPic ? 'rgba(255,255,255,0.75)' : '#333';
    const borderCol = isPic ? 'rgba(200,150,42,0.3)' : '#c8b890';
    const catCol = isPic ? '#e8b84b' : (CATCOLORS[c.cat] || '#2b7bb9');
    const dotsCol = isPic ? 'rgba(255,255,255,0.15)' : '#d4c9b0';
    const safeImg = c.img && c.img.startsWith('data:') ? c.img : null;
    const imgPart = isPic ? (safeImg
      ? '<img style="width:100%;height:18mm;object-fit:cover;border-radius:1.5mm;display:block;margin-bottom:1.5mm" src="' + safeImg + '" alt="">'
      : '<div style="width:100%;height:18mm;background:rgba(255,255,255,0.07);border-radius:1.5mm;margin-bottom:1.5mm;display:flex;align-items:center;justify-content:center;font-size:6.5pt;color:rgba(255,255,255,0.3)">No image</div>') : '';
    return '<div style="width:' + CW + ';height:' + CH + ';' + bg + ';border-radius:3.5mm;padding:0;display:flex;flex-direction:column;border:0.35mm solid ' + borderCol + ';box-sizing:border-box;overflow:hidden;page-break-inside:avoid;break-inside:avoid">' +
      '<div style="text-align:center;padding:3mm 3.5mm 2mm;font-family:Nunito,sans-serif;font-size:11pt;font-weight:900;color:' + titleCol + ';line-height:1.15">' + esc(c.title) + '</div>' +
      '<div style="height:0.35mm;background:' + borderCol + ';margin:0 3.5mm 2mm"></div>' +
      '<div style="padding:0 3.5mm;flex:1;display:flex;flex-direction:column;overflow:hidden">' + imgPart +
      '<div style="font-family:Nunito Sans,sans-serif;font-size:8pt;color:' + descCol + ';line-height:1.5;flex:1;overflow:hidden;text-align:center">' + esc(c.desc) + '</div></div>' +
      '<div style="text-align:center;color:' + dotsCol + ';font-size:4pt;letter-spacing:2.5px;margin:1mm 0 0.5mm">&#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226;</div>' +
      '<div style="text-align:center;font-family:Nunito,sans-serif;font-size:5pt;font-weight:800;letter-spacing:2px;color:' + catCol + ';text-transform:uppercase;margin-bottom:1mm">' + esc(CATLABEL[c.cat] || CFG.subtitle.toUpperCase()) + '</div>' +
      '<div style="display:flex;align-items:center;justify-content:center;padding-bottom:2.5mm">' +
      '<div style="width:10mm;height:10mm;border-radius:50%;background:' + PTC[c.pts] + ';color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Nunito,sans-serif;box-shadow:0 0.3mm 1.5mm rgba(0,0,0,0.2)">' +
      '<div style="font-size:10pt;font-weight:900;line-height:1">' + c.pts + '</div>' +
      '<div style="font-size:3pt;font-weight:700;letter-spacing:0.4px;opacity:0.9">' + PTL[c.pts] + '</div></div></div></div>';
  }

  function backHTML() {
    if (effectiveBack) {
      return '<div style="width:' + CW + ';height:' + CH + ';border-radius:3.5mm;overflow:hidden;box-sizing:border-box;page-break-inside:avoid;break-inside:avoid;background-image:url(\'' + effectiveBack + '\');background-size:cover;background-position:center;border:0.35mm solid #c8b890"></div>';
    }
    return '<div style="width:' + CW + ';height:' + CH + ';background:#1a1a2e;border-radius:3.5mm;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2mm;border:0.35mm solid #2a2a4e;box-sizing:border-box;overflow:hidden;page-break-inside:avoid;break-inside:avoid">' +
      '<div style="font-family:Nunito,sans-serif;font-weight:900;font-size:10pt;color:#e8b84b;text-align:center;letter-spacing:1.5px;text-transform:uppercase">' + esc(CFG.name) + '</div>' +
      '<div style="font-family:Nunito,sans-serif;font-weight:800;font-size:6pt;color:rgba(232,184,75,0.6);text-align:center;letter-spacing:2px;text-transform:uppercase">' + esc(CFG.subtitle) + '</div></div>';
  }

  function toRows(items, perRow) { const rows = []; for (let i = 0; i < items.length; i += perRow) rows.push(items.slice(i, i + perRow)); return rows; }

  const padded = active.slice();
  while (padded.length % 3 !== 0) padded.push(null);
  const frontRows = toRows(padded, 3);
  function toPages(rows, perPage) { const p = []; for (let i = 0; i < rows.length; i += perPage) p.push(rows.slice(i, i + perPage)); return p; }
  const frontPages = toPages(frontRows, 3);
  const backPages = frontPages.map(page => page.map(row => [...row].reverse()));

  function renderRow(row, fn) {
    return '<div style="display:flex;gap:3mm;justify-content:center;margin-bottom:3mm">' + row.map(item => item ? fn(item) : '<div style="width:' + CW + ';height:' + CH + '"></div>').join('') + '</div>';
  }

  // Build HTML using array for speed
  const parts = [];
  parts.push('<!DOCTYPE html><html><head><meta charset="UTF-8">');
  parts.push('<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&family=Nunito+Sans:wght@400;600&display=swap" rel="stylesheet">');
  parts.push('<style>@page{size:A4;margin:12mm 10mm;}*{box-sizing:border-box;margin:0;padding:0;print-color-adjust:exact;-webkit-print-color-adjust:exact;}body{background:#fff;font-family:Nunito Sans,sans-serif;}.page{display:flex;flex-direction:column;align-items:center;}.label{font-family:Nunito,sans-serif;font-size:7pt;font-weight:700;color:#bbb;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:3mm;text-align:center;}.top-section{display:flex;flex-direction:column;align-items:center;padding:20px 10px 0;}.instructions-box{max-width:550px;width:100%;background:#f8f6f0;border-radius:12px;border:1px solid #d4c9b0;padding:22px 28px;font-family:Nunito Sans,sans-serif;font-size:12px;line-height:1.7;color:#444;text-align:left;margin-bottom:10px;}.instructions-box h2{font-family:Nunito,sans-serif;font-size:16px;margin-bottom:10px;color:#1a1a2e;text-align:center;}.instructions-box ol,.instructions-box ul{padding-left:20px;margin:6px 0;}.instructions-box li{margin-bottom:4px;}.instructions-box .note{background:#fff;border:1px solid #d4c9b0;border-radius:8px;padding:10px 14px;margin-top:10px;font-size:11px;color:#666;text-align:center;}.print-btn{padding:12px 28px;background:#1a1a2e;color:#e8b84b;border:none;border-radius:8px;font-family:Nunito,sans-serif;font-weight:800;font-size:15px;cursor:pointer;margin:12px 0;}.print-btn:hover{background:#2b7bb9;color:#fff;}@media print{.top-section{display:none!important;}.label{display:none!important;}}</style></head><body>');

  // Instructions
  parts.push('<div class="top-section"><div class="instructions-box"><h2>How to Print Your ' + esc(CFG.name) + ' Deck</h2><ol>');
  parts.push('<li>Click <strong>Print Now</strong> below (or Ctrl+P / Cmd+P)</li>');
  parts.push('<li>Set paper size to <strong>A4</strong></li>');
  parts.push('<li>Set margins to <strong>Default</strong> or <strong>Minimum</strong></li>');
  parts.push('<li>Check <strong>"Background graphics"</strong> (essential for colours)</li>');
  parts.push('<li>Pages alternate: <strong>Fronts, Backs, Fronts, Backs...</strong></li></ol>');
  parts.push('<div class="note"><strong>Double-sided:</strong> Print with "Flip on long edge." Backs are mirrored to align with fronts when cut.<br>');
  parts.push('<strong>Single-sided:</strong> Print page 1, reinsert face-down, print page 2. Repeat per pair.<br><br>');
  parts.push('<strong>Total:</strong> ' + active.length + ' cards &bull; ' + (frontPages.length * 2) + ' pages (' + frontPages.length + ' front + ' + frontPages.length + ' back)</div></div>');

  parts.push('<div class="instructions-box"><h2>How to Play ' + esc(CFG.name) + '</h2><ol>');
  parts.push('<li><strong>Split into two teams</strong> (at least 2 players each).</li>');
  parts.push('<li><strong>Deal 5 cards</strong> per player. Keep the ones you know, discard the rest into the deck.</li>');
  parts.push('<li><strong>Round 1 &mdash; Describe It:</strong> Say anything except words in the title to get your team to guess.</li>');
  parts.push('<li><strong>Round 2 &mdash; One Word:</strong> Same cards, reshuffled. Only one word as a clue!</li>');
  parts.push('<li><strong>Round 3 &mdash; Act It Out:</strong> Same cards. No words &mdash; charades only!</li>');
  parts.push('<li><strong>Score:</strong> Each card = its point value. Most points after 3 rounds wins!</li></ol>');
  parts.push('<div class="note">The same cards are used in all three rounds &mdash; clues from Round 1 help in later rounds. Pay attention!</div></div>');
  parts.push('<button class="print-btn" onclick="window.print()">&#x1F5A8; Print Now</button></div>');

  // Card pages
  for (let i = 0; i < frontPages.length; i++) {
    const fpb = i > 0 ? 'page-break-before:always;' : '';
    parts.push('<div class="page" style="' + fpb + '"><div class="label">FRONTS \u2014 Page ' + (i + 1) + ' of ' + frontPages.length + '</div>');
    frontPages[i].forEach(r => parts.push(renderRow(r, cardHTML)));
    parts.push('</div>');
    parts.push('<div class="page" style="page-break-before:always;"><div class="label">BACKS \u2014 Page ' + (i + 1) + ' of ' + frontPages.length + '</div>');
    backPages[i].forEach(r => parts.push(renderRow(r, () => backHTML())));
    parts.push('</div>');
  }

  parts.push('</body></html>');

  const blob = new Blob([parts.join('\n')], {type: 'text/html'});
  window.open(URL.createObjectURL(blob), '_blank');
}

// ===== FIREBASE SYNC =====
if (isSederMode && firebaseReady && dbRef) {
  document.getElementById('shareBar').style.display = 'flex';
  document.getElementById('shareLink').textContent = window.location.origin + window.location.pathname + '?seder=' + sederId;

  dbRef.on('value', snap => {
    const data = snap.val();
    if (data) {
      const arr = Array.isArray(data) ? data : Object.values(data);
      cards = arr;
      localStorage.setItem(CFG.storagePrefix + '_seder_' + sederId, JSON.stringify(cards));
      _renderGrid();
      if (viewMode === 'table') renderTable();
    }
  });

  db.ref('.info/connected').on('value', snap => {
    const el = document.getElementById('syncStatus');
    if (snap.val()) { el.textContent = 'Live'; el.className = 'sync-status sync-online'; }
    else { el.textContent = 'Offline'; el.className = 'sync-status sync-offline'; }
  });

  dbRef.once('value', snap => {
    if (!snap.val()) {
      // TODO: remove this block once all old pesach sessions have been migrated
      // (migrates sessions from pre-multi-festival path seders/<id> → seders/pesach/<id>)
      if (CFG.id === 'pesach') {
        db.ref('seders/' + sederId + '/cards').once('value', oldSnap => {
          if (oldSnap.val()) {
            const arr = Array.isArray(oldSnap.val()) ? oldSnap.val() : Object.values(oldSnap.val());
            cards = arr;
            dbRef.set(cards);
            _renderGrid();
          } else {
            dbRef.set(cards);
          }
        });
      } else {
        dbRef.set(cards);
      }
    }
  });

  // Sync custom card back
  if (dbBackRef) {
    dbBackRef.on('value', snap => {
      const data = snap.val();
      if (data) {
        customBackImgDataUri = data;
        localStorage.setItem(CFG.storagePrefix + '_back_' + sederId, data);
      } else {
        customBackImgDataUri = '';
        localStorage.removeItem(CFG.storagePrefix + '_back_' + sederId);
      }
      renderCardBackPreview();
    });
  }
} else if (isSederMode) {
  document.getElementById('syncStatus').textContent = 'Local only';
  document.getElementById('syncStatus').className = 'sync-status sync-offline';
}

// ===== INITIALIZATION =====
(function init() {
  // Apply theme colors
  if (CFG.themeColors) {
    const root = document.documentElement.style;
    if (CFG.themeColors.gold) root.setProperty('--accent', CFG.themeColors.gold);
    if (CFG.themeColors.goldLight) root.setProperty('--accent-light', CFG.themeColors.goldLight);
    if (CFG.themeColors.headerBg) root.setProperty('--header-bg', CFG.themeColors.headerBg);
  }

  // Set header text
  const headerTitle = document.getElementById('headerTitle');
  if (headerTitle) headerTitle.innerHTML = CFG.emoji + ' ' + esc(CFG.name) + ': <span>' + esc(CFG.subtitle) + '</span>';

  // Set welcome text
  const welcomeTitle = document.getElementById('welcomeTitle');
  if (welcomeTitle) welcomeTitle.textContent = CFG.emoji + ' Welcome to ' + CFG.name + '!';
  const welcomeSubtitle = document.getElementById('welcomeSubtitle');
  if (welcomeSubtitle) welcomeSubtitle.textContent = 'A ' + CFG.subtitle.toLowerCase() + ' party game';

  // Populate category filters
  const filterContainer = document.getElementById('categoryFilters');
  if (filterContainer) {
    CFG.categories.forEach(cat => {
      const badge = document.createElement('span');
      badge.className = 'cat-badge ' + (CATCLASS[cat] || '') + ' active';
      badge.dataset.cat = cat;
      badge.textContent = cat;
      badge.onclick = function() { toggleFilter(this); };
      filterContainer.appendChild(badge);
    });
  }

  // Populate category select in edit form
  const eCat = document.getElementById('eCat');
  if (eCat) {
    eCat.innerHTML = '';
    CFG.categories.forEach(cat => {
      const opt = document.createElement('option');
      opt.value = cat;
      opt.textContent = CFG.categoryLabels[cat] || cat;
      eCat.appendChild(opt);
    });
  }

  // Welcome modal
  if (!localStorage.getItem(CFG.storagePrefix + '_welcomed')) {
    const overlay = document.getElementById('welcomeOverlay');
    if (overlay) overlay.classList.add('active');
  }

  // Card back preview
  renderCardBackPreview();

  // Initial render
  _renderGrid();
})();
