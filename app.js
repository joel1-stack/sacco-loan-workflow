// ===== DATA =====
const STATUSES = [
  { id: 'application', name: '📄 Application', color: '#3b82f6' },
  { id: 'verification', name: '🔍 Verification', color: '#f59e0b' },
  { id: 'credit', name: '💳 Credit Assessment', color: '#8b5cf6' },
  { id: 'underwriting', name: '📝 Underwriting', color: '#ec4899' },
  { id: 'approval', name: '✅ Approval', color: '#10b981' },
  { id: 'disbursement', name: '💰 Disbursement', color: '#06b6d4' },
  { id: 'active', name: '🟢 Active Loan', color: '#22c55e' },
  { id: 'completed', name: '🏁 Completed', color: '#059669' },
  { id: 'blocked', name: '❗ Blocked', color: '#ef4444' },
];

let tasks = [
  { id: 1, title: 'Mary Nakato - Personal Loan', product: 'Personal Loan', amount: 5000000, status: 'application', priority: 'high', assignee: 'Mary (Loan Officer)', date: '2026-09-25', notes: 'Salary earner, 3 months' },
  { id: 2, title: 'James Okello - Business Loan', product: 'Business Loan', amount: 15000000, status: 'verification', priority: 'high', assignee: 'Peter (Credit)', date: '2026-09-23', notes: 'Small business expansion' },
  { id: 3, title: 'Grace Auma - Education Loan', product: 'Education Loan', amount: 8000000, status: 'credit', priority: 'medium', assignee: 'Peter (Credit)', date: '2026-09-28', notes: 'University tuition' },
  { id: 4, title: 'Robert Ssemakula - Agriculture Loan', product: 'Agriculture Loan', amount: 12000000, status: 'underwriting', priority: 'high', assignee: 'Sarah (Underwriter)', date: '2026-09-26', notes: 'Farm equipment purchase' },
  { id: 5, title: 'Sarah Namutebi - Emergency Loan', product: 'Emergency Loan', amount: 2000000, status: 'approval', priority: 'high', assignee: 'John (PM)', date: '2026-09-22', notes: 'Medical emergency' },
  { id: 6, title: 'David Mugisha - Asset Finance', product: 'Asset Finance', amount: 20000000, status: 'disbursement', priority: 'medium', assignee: 'John (PM)', date: '2026-09-24', notes: 'Vehicle purchase' },
  { id: 7, title: 'Fatuma Kabira - Business Loan', product: 'Business Loan', amount: 10000000, status: 'active', priority: 'low', assignee: 'Mary (Loan Officer)', date: '2026-09-20', notes: 'Disbursed, repaying monthly' },
  { id: 8, title: 'Peter Wanyama - Personal Loan', product: 'Personal Loan', amount: 3000000, status: 'completed', priority: 'low', assignee: 'Mary (Loan Officer)', date: '2026-09-15', notes: 'Loan fully repaid' },
  { id: 9, title: 'Esther Nanyonga - Education Loan', product: 'Education Loan', amount: 6000000, status: 'blocked', priority: 'high', assignee: 'Peter (Credit)', date: '2026-09-27', notes: 'Missing guarantor documents' },
  { id: 10, title: 'Brian Kato - Agriculture Loan', product: 'Agriculture Loan', amount: 7000000, status: 'application', priority: 'medium', assignee: 'Mary (Loan Officer)', date: '2026-09-30', notes: 'Crop farming inputs' },
];

let activities = [
  { time: '2 min ago', text: '<strong>John</strong> approved loan for Sarah Namutebi' },
  { time: '15 min ago', text: '<strong>Mary</strong> submitted application for Brian Kato' },
  { time: '1 hour ago', text: '<strong>Peter</strong> blocked Esther Nanyonga - missing documents' },
  { time: '2 hours ago', text: '<strong>Sarah</strong> completed underwriting for Robert Ssemakula' },
  { time: '3 hours ago', text: '<strong>David Mugisha</strong> loan disbursed - UGX 20,000,000' },
  { time: '5 hours ago', text: '<strong>Fatuma Kabira</strong> made monthly repayment' },
];

const KB_PAGES = {
  policies: `<h1>📜 SACCO Loan Policies</h1>
    <h2>1. General Lending Policy</h2>
    <p>All loan applications must go through the standardized workflow from application to disbursement. No loan shall be disbursed without complete verification and approval.</p>
    <h2>2. Loan Limits</h2>
    <table><tr><th>Product</th><th>Min Amount</th><th>Max Amount</th><th>Term</th></tr>
    <tr><td>Personal Loan</td><td>UGX 500,000</td><td>UGX 20,000,000</td><td>1-36 months</td></tr>
    <tr><td>Business Loan</td><td>UGX 1,000,000</td><td>UGX 50,000,000</td><td>6-60 months</td></tr>
    <tr><td>Education Loan</td><td>UGX 500,000</td><td>UGX 15,000,000</td><td>1-48 months</td></tr>
    <tr><td>Agriculture Loan</td><td>UGX 500,000</td><td>UGX 30,000,000</td><td>3-36 months</td></tr>
    <tr><td>Emergency Loan</td><td>UGX 100,000</td><td>UGX 5,000,000</td><td>1-12 months</td></tr></table>
    <h2>3. Approval Authority</h2>
    <ul><li>Up to UGX 5M: Loan Officer</li><li>UGX 5M - 15M: Credit Manager</li><li>UGX 15M - 30M: Credit Committee</li><li>Above UGX 30M: Board Approval</li></ul>`,

  eligibility: `<h1>✅ Eligibility Rules</h1>
    <h2>Basic Requirements</h2>
    <ul>
    <li>✅ Must be a SACCO member for at least 6 months</li>
    <li>✅ Minimum age: 18 years</li>
    <li>✅ Valid national ID or passport</li>
    <li>✅ Proof of income or employment</li>
    <li>✅ No default on previous loans</li>
    <li>✅ Membership contributions up to date</li>
    </ul>
    <h2>Scoring Criteria</h2>
    <table><tr><th>Factor</th><th>Weight</th><th>Pass Score</th></tr>
    <tr><td>Credit History</td><td>30%</td><td>60+</td></tr>
    <tr><td>Income Stability</td><td>25%</td><td>60+</td></tr>
    <tr><td>Membership Tenure</td><td>20%</td><td>6 months+</td></tr>
    <tr><td>Guarantor Quality</td><td>15%</td><td>2 active guarantors</td></tr>
    <tr><td>Debt-to-Income Ratio</td><td>10%</td><td>Below 40%</td></tr></table>
    <h2>Automatic Rejection</h2>
    <ul><li>❌ Active loan in default</li><li>❌ Blacklisted with credit bureaus</li><li>❌ Incomplete membership records</li></ul>`,

  documents: `<h1>📄 Required Documents</h1>
    <h2>For All Applications</h2>
    <ul>
    <li>📋 Completed loan application form</li>
    <li>🪪 Copy of National ID / Passport</li>
    <li>📸 Passport-size photographs (2)</li>
    <li>📝 Membership certificate</li>
    <li>🤝 Guarantor forms (2 minimum)</li>
    </ul>
    <h2>Additional by Product</h2>
    <table><tr><th>Product</th><th>Extra Documents</th></tr>
    <tr><td>Personal Loan</td><td>Payslip (3 months), Employment letter</td></tr>
    <tr><td>Business Loan</td><td>Business license, Financial statements, Tax returns</td></tr>
    <tr><td>Education Loan</td><td>Admission letter, Fee structure</td></tr>
    <tr><td>Agriculture Loan</td><td>Land documents, Farm plan</td></tr>
    <tr><td>Asset Finance</td><td>Quotation/Proforma invoice, Asset details</td></tr></table>
    <h2>Verification Checklist</h2>
    <ul><li>☐ All documents received</li><li>☐ Documents authenticated</li><li>☐ Identity verified in person</li><li>☐ Income confirmed with employer</li><li>☐ Guarantors contacted and verified</li></ul>`,

  rates: `<h1>💰 Interest Rates & Fees</h1>
    <h2>Interest Rates (Reducing Balance)</h2>
    <table><tr><th>Product</th><th>Annual Rate</th><th>Processing Fee</th></tr>
    <tr><td>Personal Loan</td><td>18% p.a.</td><td>2%</td></tr>
    <tr><td>Business Loan</td><td>15% p.a.</td><td>1.5%</td></tr>
    <tr><td>Education Loan</td><td>12% p.a.</td><td>1%</td></tr>
    <tr><td>Agriculture Loan</td><td>10% p.a.</td><td>1%</td></tr>
    <tr><td>Emergency Loan</td><td>20% p.a.</td><td>0%</td></tr>
    <tr><td>Asset Finance</td><td>16% p.a.</td><td>2%</td></tr></table>
    <h2>Late Payment</h2>
    <ul><li>Grace period: 5 days</li><li>Late fee: 2% of overdue amount</li><li>After 30 days: Account sent to collections</li></ul>
    <h2>Early Repayment</h2>
    <ul><li>No penalty for early repayment</li><li>Interest calculated on reducing balance</li></ul>`,

  procedures: `<h1>📋 Loan Processing Procedures</h1>
    <h2>Step-by-Step Workflow</h2>
    <ol>
    <li><strong>Application Received</strong> → Loan officer captures all applicant details in system</li>
    <li><strong>Verification</strong> → Cross-check all documents, verify identity, confirm employment/income</li>
    <li><strong>Credit Assessment</strong> → Run credit score, check bureau reports, assess debt-to-income</li>
    <li><strong>Underwriting</strong> → Evaluate against lending policies, determine risk grade</li>
    <li><strong>Approval</strong> → Route to appropriate authority based on loan amount</li>
    <li><strong>Offer</strong> → Generate loan offer letter with terms and conditions</li>
    <li><strong>Agreement</strong> → Applicant signs loan agreement, provide security if needed</li>
    <li><strong>Disbursement</strong> → Transfer funds to borrower's account</li>
    <li><strong>Active Monitoring</strong> → Track repayments, send reminders</li>
    <li><strong>Closure</strong> → Close loan account upon full repayment</li>
    </ol>
    <h2>Turnaround Time</h2>
    <table><tr><th>Stage</th><th>Target Time</th></tr>
    <tr><td>Application to Verification</td><td>1 day</td></tr>
    <tr><td>Verification to Credit Assessment</td><td>2 days</td></tr>
    <tr><td>Credit to Underwriting</td><td>1 day</td></tr>
    <tr><td>Underwriting to Approval</td><td>2 days</td></tr>
    <tr><td>Approval to Disbursement</td><td>1-3 days</td></tr>
    <tr><td><strong>Total</strong></td><td><strong>5-8 working days</strong></td></tr></table>`,

  lessons: `<h1>📚 Lessons Learned</h1>
    <h2>What Worked Well</h2>
    <ul>
    <li>✅ Digital workflow reduced processing time by 40%</li>
    <li>✅ Automated notifications improved team communication</li>
    <li>✅ Document checklist prevented incomplete applications</li>
    <li>✅ Clear approval matrix reduced bottlenecks</li>
    </ul>
    <h2>What to Improve</h2>
    <ul>
    <li>⚠️ Credit assessment stage needs faster turnaround</li>
    <li>⚠️ Some applicants submit incomplete documents</li>
    <li>⚠️ Need better integration with credit bureaus</li>
    <li>⚠️ Mobile access for field loan officers</li>
    </ul>
    <h2>Action Items</h2>
    <table><tr><th>Action</th><th>Owner</th><th>Due</th></tr>
    <tr><td>Implement document pre-check</td><td>Peter</td><td>Oct 2026</td></tr>
    <tr><td>Automate credit bureau integration</td><td>John</td><td>Nov 2026</td></tr>
    <tr><td>Build mobile-responsive interface</td><td>IT Team</td><td>Dec 2026</td></tr></table>`,

  templates: `<h1>📝 Templates</h1>
    <h2>Weekly Report Template</h2>
    <div style="background:#0f172a;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;color:#94a3b8;white-space:pre-wrap">
WEEKLY LOAN PROCESSING REPORT
Week: [Date Range]

SUMMARY:
- New applications received: [X]
- Completed (disbursed): [X]
- In progress: [X]
- Blocked: [X]

FINANCIAL SUMMARY:
- Total amount disbursed: UGX [X]
- Average loan size: UGX [X]
- Approval rate: [X]%

ISSUES & BLOCKERS:
1. [Issue 1]
2. [Issue 2]

NEXT WEEK PRIORITIES:
1. [Priority 1]
2. [Priority 2]
    </div>
    <h2>Email Notification Template</h2>
    <div style="background:#0f172a;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;color:#94a3b8;white-space:pre-wrap">
Subject: [SACCO] Loan Application Update - [Applicant Name]

Dear [Team Member],

The loan application for [Applicant Name] has moved to [New Stage].

Current Status: [Status]
Assigned To: [Person]
Due Date: [Date]

Action Required: [What needs to be done]

View in workflow engine: [Link]

Regards,
SACCO Loan Workflow Engine
    </div>`,
};

const TEAM = [
  { name: 'John', role: 'Program Manager', color: '#3b82f6', initial: 'J', tasks: 2, done: 1 },
  { name: 'Mary', role: 'Loan Officer', color: '#f59e0b', initial: 'M', tasks: 3, done: 1 },
  { name: 'Peter', role: 'Credit Officer', color: '#8b5cf6', initial: 'P', tasks: 3, done: 0 },
  { name: 'Sarah', role: 'Underwriter', color: '#10b981', initial: 'S', tasks: 2, done: 0 },
];

const PERMISSIONS = [
  { action: 'Create Loan', pm: true, officer: true, credit: false, underwriter: false },
  { action: 'Verify Documents', pm: true, officer: true, credit: true, underwriter: false },
  { action: 'Run Credit Check', pm: true, officer: false, credit: true, underwriter: false },
  { action: 'Underwrite', pm: true, officer: false, credit: false, underwriter: true },
  { action: 'Approve Loan', pm: true, officer: false, credit: false, underwriter: false },
  { action: 'Disburse Funds', pm: true, officer: false, credit: false, underwriter: false },
  { action: 'Edit Knowledge Base', pm: true, officer: true, credit: true, underwriter: true },
  { action: 'Delete Application', pm: true, officer: false, credit: false, underwriter: false },
];

// ===== BOARD RENDERING =====
function renderBoard() {
  const board = document.getElementById('board');
  board.innerHTML = '';
  STATUSES.forEach(status => {
    const statusTasks = tasks.filter(t => t.status === status.id);
    const col = document.createElement('div');
    col.className = 'column';
    col.innerHTML = `
      <div class="column-header" style="border-top:3px solid ${status.color}">
        <h3>${status.name}</h3>
        <span class="column-count">${statusTasks.length}</span>
      </div>
      <div class="column-body" data-status="${status.id}"
           ondragover="event.preventDefault();this.classList.add('drag-over')"
           ondragleave="this.classList.remove('drag-over')"
           ondrop="dropTask(event,this)">
        ${statusTasks.map(t => renderCard(t)).join('')}
      </div>`;
    board.appendChild(col);
  });
}

function renderCard(t) {
  const initials = t.assignee.charAt(0);
  const colors = { 'John (PM)': '#3b82f6', 'Mary (Loan Officer)': '#f59e0b', 'Peter (Credit)': '#8b5cf6', 'Sarah (Underwriter)': '#10b981' };
  const color = colors[t.assignee] || '#64748b';
  return `
    <div class="card" draggable="true" data-id="${t.id}"
         ondragstart="dragTask(event,this)">
      <div class="card-actions">
        <button class="card-action-btn" onclick="editTask(${t.id})" title="Edit">✏️</button>
        <button class="card-action-btn delete" onclick="deleteTask(${t.id})" title="Delete">🗑️</button>
      </div>
      <div class="card-id">LOAN-${String(t.id).padStart(4,'0')}</div>
      <div class="card-title">${t.title}</div>
      <div class="card-amount">UGX ${t.amount.toLocaleString()}</div>
      <span class="card-priority priority-${t.priority}">${t.priority.toUpperCase()}</span>
      <div class="card-meta">
        <div class="card-assignee">
          <div class="mini-avatar" style="background:${color}">${initials}</div>
          ${t.assignee.split(' ')[0]}
        </div>
        <span class="card-date">📅 ${t.date}</span>
      </div>
    </div>`;
}

// ===== DRAG & DROP =====
let draggedId = null;
function dragTask(e, el) {
  draggedId = parseInt(el.dataset.id);
  el.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
}
function dropTask(e, el) {
  e.preventDefault();
  el.classList.remove('drag-over');
  const newStatus = el.dataset.status;
  const task = tasks.find(t => t.id === draggedId);
  if (task && task.status !== newStatus) {
    const oldStatus = task.status;
    task.status = newStatus;
    const statusName = STATUSES.find(s => s.id === newStatus)?.name || newStatus;
    activities.unshift({ time: 'Just now', text: `<strong>Loan ${task.title}</strong> moved to ${statusName}` });
    showToast(`✅ Moved to ${statusName}`);
    renderAll();
  }
}

// ===== CRUD =====
let editingId = null;
function openModal(id = null) {
  editingId = id;
  const modal = document.getElementById('modal');
  if (id) {
    const t = tasks.find(x => x.id === id);
    document.getElementById('modalTitle').textContent = '✏️ Edit Loan Application';
    document.getElementById('f-name').value = t.title;
    document.getElementById('f-product').value = t.product;
    document.getElementById('f-amount').value = t.amount;
    document.getElementById('f-priority').value = t.priority;
    document.getElementById('f-assignee').value = t.assignee;
    document.getElementById('f-notes').value = t.notes || '';
  } else {
    document.getElementById('modalTitle').textContent = '+ New Loan Application';
    ['f-name','f-product','f-amount','f-priority','f-assignee','f-notes'].forEach(id => {
      const el = document.getElementById(id);
      if (el.tagName === 'SELECT') el.selectedIndex = 0;
      else el.value = '';
    });
  }
  modal.classList.add('open');
}
function closeModal() { document.getElementById('modal').classList.remove('open'); editingId = null; }
function saveTask() {
  const name = document.getElementById('f-name').value.trim();
  const product = document.getElementById('f-product').value;
  const amount = parseInt(document.getElementById('f-amount').value) || 0;
  const priority = document.getElementById('f-priority').value;
  const assignee = document.getElementById('f-assignee').value;
  const notes = document.getElementById('f-notes').value;
  if (!name) { showToast('⚠️ Enter applicant name'); return; }
  if (editingId) {
    const t = tasks.find(x => x.id === editingId);
    t.title = name; t.product = product; t.amount = amount; t.priority = priority; t.assignee = assignee; t.notes = notes;
    showToast('✅ Loan updated');
  } else {
    const newId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
    tasks.push({ id: newId, title: name, product, amount, status: 'application', priority, assignee, notes, date: new Date().toISOString().split('T')[0] });
    activities.unshift({ time: 'Just now', text: `<strong>New loan application</strong> created for ${name}` });
    showToast('✅ Loan application created');
  }
  closeModal();
  renderAll();
}
function editTask(id) { openModal(id); }
function deleteTask(id) {
  if (!confirm('Delete this loan application?')) return;
  tasks = tasks.filter(t => t.id !== id);
  showToast('🗑️ Loan deleted');
  renderAll();
}

// ===== FILTER =====
function filterTasks(query) {
  const q = query.toLowerCase();
  document.querySelectorAll('.card').forEach(card => {
    const id = card.dataset.id;
    const t = tasks.find(x => x.id == id);
    card.style.display = (t && (t.title.toLowerCase().includes(q) || t.assignee.toLowerCase().includes(q) || t.product.toLowerCase().includes(q))) ? '' : 'none';
  });
}
function filterByStatus(p, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.card').forEach(card => {
    const t = tasks.find(x => x.id == card.dataset.id);
    card.style.display = (p === 'all' || (t && t.priority === p)) ? '' : 'none';
  });
}

// ===== DASHBOARD =====
function renderDashboard() {
  const total = tasks.length;
  const completed = tasks.filter(t => t.status === 'completed').length;
  const inProgress = tasks.filter(t => !['completed','application','blocked'].includes(t.status)).length;
  const blocked = tasks.filter(t => t.status === 'blocked').length;
  const disursed = tasks.filter(t => ['disbursement','active','completed'].includes(t.status)).reduce((s,t) => s+t.amount, 0);
  const approved = tasks.filter(t => ['approval','disbursement','active','completed'].includes(t.status)).length;
  const rate = total > 0 ? Math.round((approved/total)*100) : 0;

  document.getElementById('stat-total').textContent = total;
  document.getElementById('stat-completed').textContent = completed;
  document.getElementById('stat-progress').textContent = inProgress;
  document.getElementById('stat-blocked').textContent = blocked;
  document.getElementById('stat-amount').textContent = 'UGX ' + disursed.toLocaleString();
  document.getElementById('stat-rate').textContent = rate + '%';

  // Flow chart
  const flow = document.getElementById('flowChart');
  flow.innerHTML = STATUSES.filter(s => s.id !== 'blocked').map(s => {
    const count = tasks.filter(t => t.status === s.id).length;
    const pct = total > 0 ? (count/total)*100 : 0;
    return `<div class="flow-row">
      <div class="flow-label">${s.name}</div>
      <div class="flow-bar-bg"><div class="flow-bar" style="width:${Math.max(pct,8)}%;background:${s.color}">${count}</div></div>
    </div>`;
  }).join('');

  // Workload
  const workload = document.getElementById('workloadChart');
  workload.innerHTML = TEAM.map(m => {
    const count = tasks.filter(t => t.assignee.startsWith(m.name)).length;
    const pct = total > 0 ? (count/total)*100 : 0;
    return `<div class="workload-row">
      <div class="workload-avatar" style="background:${m.color}">${m.initial}</div>
      <div class="workload-info">
        <div class="workload-name">${m.name}</div>
        <div class="workload-role">${m.role}</div>
        <div class="workload-bar-bg"><div class="workload-bar" style="width:${pct}%;background:${m.color}"></div></div>
      </div>
      <div class="workload-count">${count}</div>
    </div>`;
  }).join('');

  // Activity feed
  document.getElementById('activityFeed').innerHTML = activities.slice(0,8).map(a =>
    `<div class="activity-item"><span class="activity-time">${a.time}</span><span class="activity-text">${a.text}</span></div>`
  ).join('');
}

// ===== KNOWLEDGE =====
function showKbPage(key) {
  document.querySelectorAll('.kb-page').forEach(p => p.classList.remove('active'));
  event.target.classList.add('active');
  document.getElementById('kbContent').innerHTML = KB_PAGES[key] || '<h1>Page not found</h1>';
}

// ===== TEAM =====
function renderTeam() {
  document.getElementById('teamGrid').innerHTML = TEAM.map(m => {
    const count = tasks.filter(t => t.assignee.startsWith(m.name)).length;
    const done = tasks.filter(t => t.assignee.startsWith(m.name) && t.status === 'completed').length;
    return `<div class="team-card">
      <div class="team-card-avatar" style="background:${m.color}">${m.initial}</div>
      <div class="team-card-name">${m.name}</div>
      <div class="team-card-role">${m.role}</div>
      <div class="team-card-stats">
        <div class="team-stat"><div class="team-stat-num">${count}</div><div class="team-stat-label">Assigned</div></div>
        <div class="team-stat"><div class="team-stat-num">${done}</div><div class="team-stat-label">Done</div></div>
      </div>
    </div>`;
  }).join('');

  const icon = v => v === true ? '<span class="perm-yes">✅ Yes</span>' : '<span class="perm-no">❌ No</span>';
  document.getElementById('permTable').innerHTML = `<table>
    <tr><th>Action</th><th>PM</th><th>Loan Officer</th><th>Credit</th><th>Underwriter</th></tr>
    ${PERMISSIONS.map(p => `<tr><td>${p.action}</td><td>${icon(p.pm)}</td><td>${icon(p.officer)}</td><td>${icon(p.credit)}</td><td>${icon(p.underwriter)}</td></tr>`).join('')}
  </table>`;
}

// ===== SETTINGS =====
function renderSettings() {
  document.getElementById('statusList').innerHTML = STATUSES.map((s,i) => `
    <div class="status-item">
      <div class="status-dot" style="background:${s.color}"></div>
      <span class="status-name">${s.name}</span>
      <span class="status-order">Step ${i+1}</span>
      <div class="status-move">
        <button onclick="moveStatus(${i},-1)">↑</button>
        <button onclick="moveStatus(${i},1)">↓</button>
      </div>
    </div>`).join('');

  const rules = [
    'Auto-assign new loans to available loan officer',
    'Send notification when loan moves to next stage',
    'Auto-escalate if stuck in stage for 3+ days',
    'Send reminder for overdue repayments',
    'Auto-generate weekly report every Friday',
    'Block disbursement if documents incomplete',
  ];
  document.getElementById('automationRules').innerHTML = rules.map((r,i) => `
    <div class="automation-rule">
      <div class="rule-toggle ${i < 4 ? 'on' : ''}" onclick="this.classList.toggle('on')"></div>
      <span class="rule-text">${r}</span>
    </div>`).join('');
}

function moveStatus(i, dir) {
  const j = i + dir;
  if (j < 0 || j >= STATUSES.length) return;
  [STATUSES[i], STATUSES[j]] = [STATUSES[j], STATUSES[i]];
  renderSettings();
}

// ===== TABS =====
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
    if (tab.dataset.tab === 'knowledge') showKbPage('policies');
  });
});

// ===== UTILS =====
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

function renderAll() {
  renderBoard();
  renderDashboard();
  renderTeam();
  renderSettings();
}

// ===== INIT =====
renderAll();
showKbPage('policies');
document.getElementById('kbContent').innerHTML = KB_PAGES.policies;