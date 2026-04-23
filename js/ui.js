/*DOM rendering */

function renderScoreRing(score) {
  const color = getScoreColor(score);
  const ring = document.getElementById('scoreRing');
  const numEl = document.getElementById('scoreNum');
  const labelEl = document.getElementById('scoreLabel');

  ring.style.stroke = color;
  numEl.textContent = score;
  numEl.style.color = color;
  labelEl.textContent = getScoreLabel(score);
  labelEl.style.color = color;

  const circumference = 251;
  const offset = circumference - (score / 100) * circumference;

  requestAnimationFrame(() => {
    setTimeout(() => { ring.style.strokeDashoffset = offset; }, 80);
  });
}

function renderSummary(issues) {
  const high = issues.filter(i => i.sev === 'sev-high').length;
  const med  = issues.filter(i => i.sev === 'sev-med').length;
  const low  = issues.filter(i => i.sev === 'sev-low').length;

  document.getElementById('summaryGrid').innerHTML = `
    <div class="stat-card">
      <div class="stat-label">Total Issues</div>
      <div class="stat-value">${issues.length}</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">High Impact</div>
      <div class="stat-value" style="color:var(--danger)">${high}</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Medium Impact</div>
      <div class="stat-value" style="color:var(--warn)">${med}</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Low Impact</div>
      <div class="stat-value" style="color:var(--good)">${low}</div>
    </div>
  `;
}

function renderIssues(issues) {
  const container = document.getElementById('issuesList');
  container.innerHTML = '';

  issues.forEach((issue, idx) => {
    const card = document.createElement('div');
    card.className = 'issue-card';
    card.style.animationDelay = `${idx * 80}ms`;
    card.innerHTML = `
      <div class="issue-icon ${issue.iconClass}">${issue.icon}</div>
      <div class="issue-body">
        <h3>${issue.title}</h3>
        <p>${issue.desc}</p>
        <div class="issue-fix">${issue.fix}</div>
      </div>
      <span class="impact-badge ${issue.sev}">${issue.sevLabel}</span>
    `;
    container.appendChild(card);
  });
}

function renderRecommendations(recs) {
  document.getElementById('recGrid').innerHTML = recs.map((rec, idx) => `
    <div class="rec-card">
      <div class="rec-num">0${idx + 1}</div>
      <h4>${rec.title}</h4>
      <p>${rec.desc}</p>
    </div>
  `).join('');
}

function showLoader() {
  document.getElementById('loader').classList.remove('hidden');
  document.getElementById('results').classList.add('hidden');
}

function hideLoader() {
  document.getElementById('loader').classList.add('hidden');
}

function showResults(url, score, issues, recs) {
  document.getElementById('siteTitle').textContent = getSiteName(url);
  document.getElementById('siteUrl').textContent = url;

  renderScoreRing(score);
  renderSummary(issues);
  renderIssues(issues);
  renderRecommendations(recs);

  document.getElementById('results').classList.remove('hidden');
  document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

async function animateLoaderSteps() {
  const stepIds = ['step1', 'step2', 'step3', 'step4', 'step5'];

  for (const id of stepIds) {
    await sleep(420 + Math.random() * 280);
    document.getElementById(id).className = 'active';
    await sleep(280);
    document.getElementById(id).className = 'done';
  }

  await sleep(300);
}

function resetLoaderSteps() {
  ['step1','step2','step3','step4','step5'].forEach(id => {
    document.getElementById(id).className = '';
  });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
