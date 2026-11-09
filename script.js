/* Nasif Rafidi — portfolio interactions. Zero external JavaScript dependencies. */

const CREDENTIALS = [
  {
    id: "aspire-leaders", title: "Aspire Leaders Program — Complete Program",
    issuer: "Aspire Institute", date: "November 2024", year: "2024", category: "leadership",
    kind: "Certificate of completion", idNumber: "",
    description: "Completed all stages of the 2024 Aspire Leaders Program, including its leadership coursework and development activities. The final certificate records 30 hours of coursework.",
    thumbnail: "aspire-leaders-2024.webp", original: "aspire-leaders-2024.pdf"
  },
  {
    id: "data-bootcamp", title: "Data Analyst Job Ready Bootcamp",
    issuer: "Data Solution 360", date: "24 October 2026", year: "2026", category: "technical",
    kind: "Certificate of achievement", idNumber: "DS360DABC2624MNR4",
    description: "Six-month program (Batch 2524) covering Excel, SQL, Power BI, Python, statistics, data cleaning, visualization and process optimization.",
    thumbnail: "data-analyst-bootcamp.webp", original: "data-analyst-bootcamp.pdf"
  },
  {
    id: "qpain-2026", title: "IEEE QPAIN 2026 — Research Presentation",
    issuer: "IEEE Photonics Society Bangladesh Chapter / QPAIN 2026", date: "16–18 April 2026", year: "2026", category: "research",
    kind: "Certificate of presentation", idNumber: "Paper ID 2002",
    description: "Presentation of the co-authored paper 'Cache-Aware Generative NLP: Reducing Latency in Large-Scale Multilingual Systems' at QPAIN 2026, hosted at CUET, Chattogram.",
    thumbnail: "qpain-2026-presentation.webp", original: "qpain-2026-presentation.pdf"
  },
  {
    id: "icca-2026", title: "ICCA 2026 — Healthcare Research Presentation",
    issuer: "4th International Conference on Computing Advancements (ICCA)", date: "15–16 October 2026", year: "2026", category: "research",
    kind: "Certificate of presentation", idNumber: "icca2026-presenter-360",
    description: "Presented Paper 360, 'A Cost-Effective Smart Healthcare System to Automatically Log Medications and Support Patient Adherence,' at the 4th International Conference on Computing Advancements on 15–16 October 2026, with affiliation to American International University-Bangladesh. The presentation certificate was issued on 16 October 2026.",
    thumbnail: "icca-2026-presentation.webp", original: "icca-2026-presentation.pdf"
  },
  {
    id: "iconeect-2026-sharp", title: "iCONEECT 2026 — SHARP Research Presentation",
    issuer: "Premier University · iCONEECT 2026", date: "25–26 September 2026", year: "2026", category: "research",
    kind: "Certificate of presentation", idNumber: "Paper ID 271",
    description: "Presented Paper 271, 'SHARP: Content-Fingerprint Anchoring for Self-Healing File-Reference Resolution Across Local and Cloud Storage,' at iCONEECT 2026, held at Premier University, Chattogram, Bangladesh, on 25–26 September 2026. The author team's certificate of appreciation is also attached to this entry.",
    thumbnail: "iconeect-2026-sharp-presentation.webp", original: "iconeect-2026-sharp-presentation.pdf",
    additionalDocuments: [
      { label: "Open author appreciation certificate", original: "iconeect-2026-sharp-appreciation.pdf" }
    ]
  },
  {
    id: "iconeect-2026-clusterflow", title: "iCONEECT 2026 — ClusterFlow Research Appreciation",
    issuer: "Premier University · iCONEECT 2026", date: "25–26 September 2026", year: "2026", category: "research",
    kind: "Certificate of appreciation", idNumber: "Paper ID 272",
    description: "Co-authored Paper 272, 'ClusterFlow: A Temporal Measurement-Based Quantum Computing Simulation Framework for Resource-Optimized and Loss-Aware Cluster-State Subroutines.' The certificate recognizes the author team for research accepted and presented at iCONEECT 2026, held at Premier University, Chattogram, Bangladesh, on 25–26 September 2026.",
    thumbnail: "iconeect-2026-clusterflow-appreciation.webp", original: "iconeect-2026-clusterflow-appreciation.pdf"
  },
  {
    id: "icei-2026", title: "ICEI 2026 — Conference Participation",
    issuer: "Bangladesh Electronics and Informatics Society (BEIS)", date: "7–8 May 2026", year: "2026", category: "events",
    kind: "Certificate of participation", idNumber: "",
    description: "Participated in the International Conference on Electronics and Informatics 2026 (ICEI 2026), organized by the Bangladesh Electronics and Informatics Society at the Atomic Energy Centre, Dhaka, on 7–8 May 2026, with affiliation to American International University-Bangladesh.",
    thumbnail: "icei-2026-participation.webp", original: "icei-2026-participation.pdf"
  },
  {
    id: "ieee-membership-2026", title: "IEEE Student Membership — 2026",
    issuer: "IEEE · Bangladesh Section", date: "Valid through 31 December 2026", year: "2026", category: "membership",
    kind: "Student membership card", idNumber: "101007666",
    description: "IEEE Student Member in the Bangladesh Section for the 2026 membership year. The digital membership card records member number 101007666 and is valid through 31 December 2026.",
    thumbnail: "ieee-membership-2026.webp", original: "ieee-membership-2026.pdf"
  },
  {
    id: "kaggle-ml", title: "Intro to Machine Learning",
    issuer: "Kaggle Learn", date: "22 February 2025", year: "2025", category: "technical",
    kind: "Certificate of completion", idNumber: "",
    description: "Completion of Kaggle's introductory machine learning course, building a foundation in data-driven predictive modeling.",
    thumbnail: "kaggle-intro-machine-learning.webp", original: "kaggle-intro-machine-learning.png"
  },
  {
    id: "industry-5", title: "From Industry 4.0 to Industry 5.0",
    issuer: "Birmingham City University / AIUB · British Council-funded project", date: "11 September 2025", year: "2025", category: "technical",
    kind: "Certificate of participation", idNumber: "",
    description: "Capacity-building training on human-centric digital manufacturing, delivered by Dr. Muhammad Adnan of Birmingham City University as part of a British Council-funded TNE Exploratory Grant project.",
    thumbnail: "industry-5-training.webp", original: "industry-5-training.pdf"
  },
  {
    id: "unreal-engine", title: "App Development with Unreal Engine 5",
    issuer: "Programmee", date: "12 January 2025", year: "2025", category: "technical",
    kind: "Certificate of completion · Distinction", idNumber: "",
    description: "Certificate recognizing completion of an Unreal Engine 5 app development course with distinction.",
    thumbnail: "unreal-engine-5.webp", original: "unreal-engine-5.png"
  },
  {
    id: "rsbru-2026", title: "RSBRU International Research Summit 2026",
    issuer: "Research Society — Begum Rokeya University", date: "15 January 2026", year: "2026", category: "research",
    kind: "Certificate of appreciation", idNumber: "",
    description: "Recognition for presenting a paper as an author at the RSBRU International Research Summit 2026.",
    thumbnail: "rsbru-2026-research.webp", original: "rsbru-2026-research.pdf"
  },
  {
    id: "static-pitch", title: "Static Pitch Finalist — Research Symposium 2.0",
    issuer: "IEOM Society AUST Student Chapter", date: "2026", year: "2026", category: "research",
    kind: "Certificate of appreciation", idNumber: "",
    description: "Recognition as a Static Pitch finalist at Research Symposium 2.0, participating as a member of Team Oblivion.",
    thumbnail: "static-pitch-finalist.webp", original: "static-pitch-finalist.png"
  },
  {
    id: "icai-ambassador", title: "ICAI 2025 — Event Ambassador",
    issuer: "IEEE Systems Council BUBT Student Branch Chapter", date: "6–7 September 2025", year: "2025", category: "leadership",
    kind: "Certificate of appreciation", idNumber: "",
    description: "Recognized for serving as an ambassador and helping promote and coordinate the International Congress on Artificial Intelligence (ICAI 2025).",
    thumbnail: "icai-2025-ambassador.webp", original: "icai-2025-ambassador.pdf"
  },
  {
    id: "icai-participant", title: "ICAI 2025 — Congress Participation",
    issuer: "IEEE Systems Council BUBT Student Branch Chapter", date: "6–7 September 2025", year: "2025", category: "events",
    kind: "Certificate of participation", idNumber: "",
    description: "Participation in the two-day International Congress on Artificial Intelligence (ICAI 2025).",
    thumbnail: "icai-2025-participation.webp", original: "icai-2025-participation.pdf"
  },
  {
    id: "july-hackathon", title: "July Hackathon 2026 — Team Big Brain",
    issuer: "JRA Foundation", date: "28–31 July 2026", year: "2026", category: "events",
    kind: "Certificate of participation", idNumber: "",
    description: "Participation as a member of Team Big Brain in the 72-hour July Hackathon 2026 online build sprint.",
    thumbnail: "july-hackathon-2026.webp", original: "july-hackathon-2026.pdf"
  },
  {
    id: "aspire-module-1", title: "Aspire Leaders — Module 1",
    issuer: "Aspire Institute", date: "2024", year: "2024", category: "leadership",
    kind: "Learning badge", idNumber: "",
    description: "Completed Module 1: Personal and Professional Development of the 2024 Aspire Leaders Program, including 15 hours of participation.",
    thumbnail: "aspire-module-1.webp", original: "aspire-module-1.pdf"
  },
  {
    id: "aspire-module-2", title: "Aspire Leaders — Module 2",
    issuer: "Aspire Institute", date: "2024", year: "2024", category: "leadership",
    kind: "Learning badge", idNumber: "",
    description: "Completed Module 2: World-Class Educator-Led Masterclasses of the 2024 Aspire Leaders Program, with at least five hours of participation.",
    thumbnail: "aspire-module-2.webp", original: "aspire-module-2.pdf"
  },
  {
    id: "aspire-module-3", title: "Aspire Leaders — Module 3",
    issuer: "Aspire Institute", date: "2024", year: "2024", category: "leadership",
    kind: "Learning badge", idNumber: "",
    description: "Completed Module 3: Aspire Horizons Course of the 2024 Aspire Leaders Program, with 20 hours of participation.",
    thumbnail: "aspire-module-3.webp", original: "aspire-module-3.pdf"
  }
];

const categoryLabel = {
  technical: "Technical & Data",
  research: "Research",
  leadership: "Leadership",
  events: "Events & Community",
  membership: "Memberships"
};

const certRoot = "./assets/certificates/";
const grid = document.getElementById("certificate-grid");
const search = document.getElementById("certificate-search");
const buttons = [...document.querySelectorAll("[data-filter]")];
const dialog = document.getElementById("certificate-dialog");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let activeFilter = "all";

document.documentElement.classList.add("js-ready");
document.getElementById("certificate-total").textContent = CREDENTIALS.length;
document.getElementById("all-count").textContent = CREDENTIALS.length;
document.getElementById("year").textContent = new Date().getFullYear();

function escapeText(value) {
  return String(value).replace(/[&<>"']/g, ch =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]
  );
}

function renderCertificates() {
  const term = search.value.toLowerCase().trim();
  const shown = CREDENTIALS.filter(item => {
    const categoryMatch = activeFilter === "all" || item.category === activeFilter;
    const matchesText = [item.title, item.issuer, item.kind, item.date, item.year, item.idNumber, item.description]
      .join(" ").toLowerCase().includes(term);
    return categoryMatch && matchesText;
  });

  grid.innerHTML = shown.map((item, i) => `
    <button class="certificate-card" type="button" data-certificate-id="${item.id}" aria-label="View credential: ${escapeText(item.title)}">
      <div class="certificate-preview">
        <span class="certificate-card-num">${String(i + 1).padStart(2, "0")}</span>
        <span class="certificate-open-icon" aria-hidden="true">↗</span>
        <img src="${certRoot + item.thumbnail}" alt="Preview of ${escapeText(item.title)} document" loading="lazy">
      </div>
      <div class="certificate-info">
        <div class="certificate-tagline"><span>${escapeText(categoryLabel[item.category])}</span><span>${item.year}</span></div>
        <h3>${escapeText(item.title)}</h3>
        <p class="certificate-issuer">${escapeText(item.issuer)}</p>
        <div class="certificate-info-footer"><span>${item.additionalDocuments?.length ? `${item.additionalDocuments.length + 1} ORIGINAL DOCUMENTS` : "ORIGINAL DOCUMENT"}</span><span>INSPECT ↗</span></div>
      </div>
    </button>
  `).join("");

  document.getElementById("result-count").textContent = `${shown.length} ${shown.length === 1 ? "credential" : "credentials"}`;
  document.getElementById("empty-certificates").hidden = shown.length > 0;
}

function openCertificate(id) {
  const certificate = CREDENTIALS.find(item => item.id === id);
  if (!certificate) return;
  const position = CREDENTIALS.indexOf(certificate) + 1;

  document.getElementById("dialog-image").src = certRoot + certificate.thumbnail;
  document.getElementById("dialog-image").alt = "Document preview: " + certificate.title;
  document.getElementById("dialog-title").textContent = certificate.title;
  document.getElementById("dialog-index").textContent = String(position).padStart(2, "0") + " / " + CREDENTIALS.length;
  document.getElementById("dialog-type").textContent = certificate.kind.toUpperCase();
  document.getElementById("dialog-description").textContent = certificate.description;
  document.getElementById("dialog-issuer").textContent = certificate.issuer;
  document.getElementById("dialog-date").textContent = certificate.date;
  document.getElementById("dialog-id-wrap").hidden = !certificate.idNumber;
  document.getElementById("dialog-id").textContent = certificate.idNumber;
  document.getElementById("dialog-document").href = certRoot + certificate.original;
  const additionalDocuments = certificate.additionalDocuments || [];
  const documentLinks = document.getElementById("dialog-additional-documents");
  documentLinks.innerHTML = additionalDocuments.map(document => `
    <a href="${escapeText(certRoot + document.original)}" target="_blank" rel="noopener noreferrer">${escapeText(document.label)} <span aria-hidden="true">↗</span></a>
  `).join("");
  documentLinks.hidden = additionalDocuments.length === 0;
  dialog.showModal();
  document.body.style.overflow = "hidden";
}

function closeCertificate() {
  if (dialog.open) dialog.close();
  document.body.style.overflow = "";
}

grid.addEventListener("click", event => {
  const card = event.target.closest("[data-certificate-id]");
  if (card) openCertificate(card.dataset.certificateId);
});

document.querySelectorAll("[data-open-certificate]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    openCertificate(link.dataset.openCertificate);
  });
});

buttons.forEach(button => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    buttons.forEach(item => {
      const selected = item === button;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    renderCertificates();
  });
});

search.addEventListener("input", renderCertificates);
document.getElementById("modal-close").addEventListener("click", closeCertificate);
dialog.addEventListener("click", event => {
  if (event.target === dialog) closeCertificate();
});
dialog.addEventListener("close", () => { document.body.style.overflow = ""; });
renderCertificates();

/* Mobile navigation */
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open menu");
  mobileMenu.classList.remove("open");
  mobileMenu.inert = true;
}
menuToggle.addEventListener("click", () => {
  const opened = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!opened));
  menuToggle.setAttribute("aria-label", opened ? "Open menu" : "Close menu");
  mobileMenu.classList.toggle("open", !opened);
  mobileMenu.inert = opened;
});
mobileMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeMenu();
});

/* Scroll treatment */
const header = document.getElementById("site-header");
const progress = document.getElementById("reading-progress");
function handleScroll() {
  header.classList.toggle("scrolled", scrollY > 25);
  const scrollable = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${scrollable > 0 ? (scrollY / scrollable) * 100 : 0}%`;
}
window.addEventListener("scroll", handleScroll, { passive: true });
handleScroll();

const revealObserver = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      revealObserver.unobserve(entry.target);
    }
  }
}, { rootMargin: "0px 0px -20px 0px", threshold: .06 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    document.querySelectorAll(".desktop-nav a").forEach(link =>
      link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id)
    );
  });
}, { rootMargin: "-30% 0px -55% 0px" });
document.querySelectorAll("main section[id]").forEach(section => sectionObserver.observe(section));

/* Interactive, responsive neural constellation. Pure canvas with reduced-motion fallback. */
const canvas = document.getElementById("hero-network");
const container = document.querySelector(".hero-display");
const ctx = canvas.getContext("2d", { alpha: true });
let width = 0, height = 0, frame = 0, visible = true;
const points = [];
const pointer = { x: -1000, y: -1000 };
const rand = (min, max) => min + Math.random() * (max - min);

function resizeNetwork() {
  const bounds = container.getBoundingClientRect();
  width = bounds.width;
  height = bounds.height;
  const scale = Math.min(window.devicePixelRatio || 1, 1.75);
  canvas.width = Math.floor(width * scale);
  canvas.height = Math.floor(height * scale);
  ctx.setTransform(scale, 0, 0, scale, 0, 0);
  points.length = 0;
  const count = Math.min(63, Math.max(27, Math.round(width * height / 5400)));
  for (let i = 0; i < count; i++) points.push({
    x: rand(0,width), y: rand(0,height), vx: rand(-.24,.24), vy: rand(-.22,.22),
    r: rand(.8,2.1), phase: rand(0,Math.PI * 2)
  });
  renderNetwork();
}

function renderNetwork() {
  if (!ctx) return;
  ctx.clearRect(0,0,width,height);
  const centerX = width * .51;
  const centerY = height * .48;
  const glow = ctx.createRadialGradient(centerX,centerY,10,centerX,centerY,width*.55);
  glow.addColorStop(0,"rgba(72,192,157,.07)");
  glow.addColorStop(1,"rgba(72,192,157,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0,0,width,height);

  for (let i=0; i<points.length; i++) {
    const a = points[i];
    if (!reducedMotion) {
      a.x += a.vx;
      a.y += a.vy;
      if (a.x < -6 || a.x > width + 6) a.vx *= -1;
      if (a.y < -6 || a.y > height + 6) a.vy *= -1;
    }
    for (let j=i+1; j<points.length; j++) {
      const b = points[j], dx = a.x-b.x, dy = a.y-b.y;
      const distance = Math.sqrt(dx*dx+dy*dy);
      if (distance < 115) {
        ctx.strokeStyle = `rgba(154,230,207,${(1 - distance/115) * .28})`;
        ctx.lineWidth = .75;
        ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
      }
    }
    const pointerDist = Math.hypot(a.x-pointer.x,a.y-pointer.y);
    const highlighted = pointerDist < 95;
    ctx.fillStyle = highlighted ? "#d0ff71" : "rgba(187,232,222,.75)";
    ctx.beginPath(); ctx.arc(a.x,a.y,a.r + (highlighted ? 1 : 0),0,Math.PI*2); ctx.fill();
  }
  frame++;
}

function animateNetwork() {
  if (visible) renderNetwork();
  requestAnimationFrame(animateNetwork);
}

container.addEventListener("pointermove", event => {
  const rect = container.getBoundingClientRect();
  pointer.x = event.clientX - rect.left;
  pointer.y = event.clientY - rect.top;
});
container.addEventListener("pointerleave", () => { pointer.x = -1000; pointer.y = -1000; });
new ResizeObserver(resizeNetwork).observe(container);
new IntersectionObserver(entries => { visible = entries[0].isIntersecting; }, {threshold: .02}).observe(container);
if (!reducedMotion) requestAnimationFrame(animateNetwork);
