/* ---------------- data (from the "A new era in research management" factsheet, Feb 2026) ---------------- */

const differenceAreas = [
  "Efficiency and effectiveness",
  "Accountability and compliance",
  "Policy alignment",
  "Interoperability and flexibility",
  "Impact, knowledge transfer & valorisation of results",
  "Talent development and researcher training",
  "Resource acquisition and allocation",
  "Research infrastructure management",
  "Shaping governance and strategy"
];

const outcomePeriods = [
  {
    id: "p1", label: "2022 – 2024", heading: "Outcomes of ERA action 2022–2024",
    items: [
      "A catalogue of best practices and achievements — 'Success stories from the Research Management Community' — supported by a video series.",
      "Establishment of a network of 140 Research Managers Ambassadors across 40 countries and 10 thematic communities.",
      "Selection of the umbrella term 'Research Manager' as common terminology, based on the RM Roadmap survey.",
      "A mutual learning platform — CARDEA Academy — providing free, open-access training resources for research managers at all career stages."
    ]
  },
  {
    id: "p2", label: "2025 – 2027", heading: "Upcoming outcomes of ERA action 2025–2027",
    items: [
      "RM Comp (published 2025) — a career and competence framework outlining career paths and skills for research managers, to be supported by a handbook for training providers.",
      "An awareness-raising campaign in Member States and other countries highlighting the value of research management for Europe's strategic capacity and competitiveness in R&I.",
      "An analysis of the role of research management in selected actions funded under the 'widening' part of Horizon Europe.",
      "Launch of a centralised hub collecting educational and upskilling material."
    ]
  }
];

const furtherMaterial = [
  {
    title: "ERA Policy Platform",
    desc: "The Commission's platform with the latest monitoring and implementation information on the ERA.",
    url: "https://european-research-area.ec.europa.eu/"
  },
  {
    title: "INSPIRING ERA",
    desc: "The Horizon Europe project behind this factsheet, helping R&I stakeholders put ERA outcomes into practice.",
    url: "https://www.inspiring-era.eu"
  },
  {
    title: "ERA Policy Agenda 2022–2024",
    desc: "The three-year work plan that introduced ERA action 17 on research management.",
    url: "https://european-research-area.ec.europa.eu/policy-agenda-2022-2024"
  },
  {
    title: "ERA Policy Agenda 2025–2027",
    desc: "The current work plan, including the 'Empowering R&I' research management action.",
    url: "https://european-research-area.ec.europa.eu/"
  }
];

/* ---------------- render: "where it makes the difference" grid ---------------- */
const diffGridEl = document.getElementById('diffGrid');
if (diffGridEl){
  differenceAreas.forEach(label => {
    const chip = document.createElement('div');
    chip.className = 'diff-chip';
    chip.innerHTML = `
      <span class="diff-icon"><svg viewBox="0 0 20 20"><path d="M7.5 13.4 4.1 10l-1.4 1.4L7.5 16.2 17.3 6.4l-1.4-1.4z"/></svg></span>
      <span>${label}</span>`;
    diffGridEl.appendChild(chip);
  });
}

/* ---------------- ERA contribution: phase switch ---------------- */
const phaseButtons = document.querySelectorAll('.phase-btn');
const phaseItems = document.querySelectorAll('.era-phase-item');
phaseButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const phase = btn.dataset.phase;
    phaseButtons.forEach(b => {
      b.classList.toggle('active', b === btn);
      b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
    });
    phaseItems.forEach(item => {
      item.hidden = item.dataset.phase !== phase;
    });
  });
});

/* ---------------- render: outcome tabs ---------------- */
const outcomeTabbarEl = document.getElementById('outcomeTabbar');
const outcomeTabpanelsEl = document.getElementById('outcomeTabpanels');
if (outcomeTabbarEl && outcomeTabpanelsEl){
  outcomePeriods.forEach((period, i) => {
    const btn = document.createElement('button');
    btn.className = 'tab-btn' + (i === 0 ? ' active' : '');
    btn.textContent = period.label;
    btn.setAttribute('role', 'tab');
    btn.dataset.target = period.id;
    btn.addEventListener('click', () => {
      document.querySelectorAll('#outcomeTabbar .tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('#outcomeTabpanels .tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('outcome-panel-' + period.id).classList.add('active');
    });
    outcomeTabbarEl.appendChild(btn);

    const panel = document.createElement('div');
    panel.className = 'tab-panel' + (i === 0 ? ' active' : '');
    panel.id = 'outcome-panel-' + period.id;
    panel.innerHTML = `
      <span class="level">${period.heading}</span>
      <ul class="solutions-list">
        ${period.items.map(s => `<li><svg viewBox="0 0 20 20"><path d="M7.5 13.4 4.1 10l-1.4 1.4L7.5 16.2 17.3 6.4l-1.4-1.4z" fill="#C13584"/></svg><span>${s}</span></li>`).join('')}
      </ul>`;
    outcomeTabpanelsEl.appendChild(panel);
  });
}

/* ---------------- render: further material ---------------- */
const furtherListEl = document.getElementById('furtherList');
if (furtherListEl){
  furtherMaterial.forEach(item => {
    const a = document.createElement('a');
    a.className = 'further-item';
    a.href = item.url;
    a.target = '_blank';
    a.rel = 'noopener';
    a.innerHTML = `
      <span class="further-text">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </span>
      <span class="further-arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M13 6l6 6-6 6"/></svg>
      </span>`;
    furtherListEl.appendChild(a);
  });
}

/* ---------------- video overlay ---------------- */
const videoPlayer = document.getElementById('videoPlayer');
const videoOverlay = document.getElementById('videoOverlay');
if (videoPlayer && videoOverlay){
  videoOverlay.addEventListener('click', () => {
    videoPlayer.play().catch(() => {
      /* Autoplay was blocked or playback failed — keep the overlay visible. */
    });
  });
  videoPlayer.addEventListener('play', () => {
    videoOverlay.classList.add('hidden');
  });
  videoPlayer.addEventListener('error', () => {
    videoOverlay.classList.remove('hidden');
  }, true);
}

/* ---------------- header: nav toggle + search toggle ---------------- */
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
if (navToggle && mainNav){
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

const searchToggle = document.getElementById('searchToggle');
const searchBox = document.getElementById('searchBox');
if (searchToggle && searchBox){
  searchToggle.addEventListener('click', () => {
    const isOpen = searchBox.classList.toggle('open');
    if (isOpen) searchBox.querySelector('input').focus();
  });
}
