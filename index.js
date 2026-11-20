  // META IT SCHOOL - Interactive Application Logic

// Course Details for Modal Popup
const courseDetails = {
  frontend: {
    title: "Frontend Dasturlash",
    duration: "6 oy (Haftada 3 kun, 2 soatdan)",
    age: "12 yoshdan yuqori",
    desc: "Veb-saytlar va murakkab platformalarning foydalanuvchi ko‘radigan tashqi vizual ko‘rinishini noldan professional darajada yaratish kursi.",
    syllabus: [
      "HTML5 Semantik teglash, CSS3 zamonaviy uslublari va animatsiyalar",
      "Flexbox, CSS Grid, Mobile-First moslashuvchan (responsive) dizayn",
      "JavaScript (ES6+) asoslari: DOM manipulyatsiyasi, Hodisalar va Funksiyalar",
      "Asinxron dasturlash, Fetch API va Backend bilan ma'lumot almashish",
      "React.js kutubxonasi: Komponentlar, Virtual DOM, State va Custom Hooks",
      "Tailwind CSS bilan tezkor va toza foydalanuvchi interfeysini qurish",
      "Git & GitHub orqali jamoaviy ishlash hamda loyihalarni Vercel / Netlify platformalarida ishga tushirish"
    ],
    tools: ["VS Code", "Figma", "Git / GitHub", "React", "Tailwind CSS", "Chrome DevTools"]
  },
  backend: {
    title: "Backend Dasturlash",
    duration: "7 oy (Haftada 3 kun, 2 soatdan)",
    age: "14 yoshdan yuqori",
    desc: "Veb-sayt va mobil ilovalarning 'miya' qismi bo‘lgan server mantig‘i, ma'lumotlar bazasi va xavfsiz REST APIlarni ishlab chiqish kursi.",
    syllabus: [
      "Python / Node.js dasturlash asoslari va Obyektga Yo‘naltirilgan Dasturlash (OOP)",
      "Relyatsion ma'lumotlar bazalari (PostgreSQL, MySQL) va SQL so‘rovlar",
      "RESTful API va GraphQL arxitekturasi, ma'lumotlarni tekshirish (Validation)",
      "Autentifikatsiya va avtorizatsiya tizimlari (JWT, Token, parollarni xesh qilish)",
      "NoSQL bazalar bilan ishlash (MongoDB) va keshlash (Redis)",
      "Docker konteynerizatsiyasi va mikroxizmatlar asoslari",
      "Serverlarni sozlash (Linux/Ubuntu) va mahsulotni jonli serverga chiqarish (Deploy)"
    ],
    tools: ["Python", "Node.js", "PostgreSQL", "Docker", "Postman", "Linux Ubuntu"]
  },
  fullstack: {
    title: "Full-Stack Dasturlash",
    duration: "9 oy (Haftada 3 kun, 2 soatdan)",
    age: "15 yoshdan yuqori",
    desc: "Eng yuqori talabga ega bo‘lgan universal dasturchilar kursi. Bitta mutaxassis sifatida butun boshli loyihani noldan boshlab to to‘liq ishga tushirishgacha bo‘lgan barcha bosqichlarini qamrab olasiz.",
    syllabus: [
      "Frontend qismi: Modern JavaScript, React.js va Next.js (SSR / SSG)",
      "Backend qismi: Node.js / Express yoki FastAPI serverlari",
      "Ma'lumotlar bazasi: PostgreSQL, Prisma ORM va Redis",
      "Real vaqtda xabar almashish (WebSockets / Socket.io)",
      "To‘lov tizimlarini (Payme, Click) va Telegram botlarni integratsiya qilish",
      "CI/CD quvurlari va xavfsizlik protokollari"
    ],
    tools: ["Next.js", "React", "Node.js", "PostgreSQL", "Prisma", "Docker", "Git"]
  },
  cybersec: {
    title: "Kiberxavfsizlik (Cybersecurity)",
    duration: "6 oy (Haftada 3 kun, 2 soatdan)",
    age: "14 yoshdan yuqori",
    desc: "Axborot xavfsizligini ta'minlash, kiberhujumlarni oldini olish va tizimlar zaifligini qonuniy (Ethical Hacking / Pen-testing) yo‘llar bilan sinovdan o‘tkazish.",
    syllabus: [
      "Kompyuter tarmoqlari tuzilishi: TCP/IP, OSI modeli, DNS, Subnetting",
      "Linux tizimi administratsiyasi (Kali Linux buyruqlari va bash skriptlar)",
      "Kriptografiya, shifrlash protokollari va xavfsizlik sertifikatlari",
      "Veb-zaifliklar tahlili: OWASP Top 10 (SQL Injection, XSS, CSRF, Brute Force)",
      "Tarmoqlarni skanerlash va analiz (Wireshark, Nmap, Burp Suite)",
      "Xavfsizlik devorlari (Firewall), SIEM tizimlari va axborot xavfsizligi etika qoidalari"
    ],
    tools: ["Kali Linux", "Wireshark", "Burp Suite", "Nmap", "Metasploit", "VirtualBox"]
  },
  ai: {
    title: "Sun'iy Intellekt & Prompt Engineering",
    duration: "3 oy (Haftada 3 kun, 1.5 soatdan)",
    age: "12 yoshdan yuqori",
    desc: "Zamonaviy AI modellaridan (ChatGPT, Claude, Midjourney) unumli foydalanish, biznes jarayonlarini avtomatlashtirish va AI botlar yasash.",
    syllabus: [
      "Sun'iy intellekt va neyrotarmoqlarning ishlash mexanizmi",
      "Prompt Engineering san'ati: AIga aniq, tushunarli va professional so‘rovlar tuzish",
      "Dizayn va multimedia uchun AI vositalari (Midjourney, Stable Diffusion)",
      "Dasturlashda AI yordamchilari (GitHub Copilot, Cursor AI)",
      "Make.com va Telegram orqali avtomatlashtirilgan aqlli botlar yaratish",
      "Python orqali OpenAI API va Anthropic API bilan ishlash asoslari"
    ],
    tools: ["ChatGPT Plus", "Claude", "Midjourney", "OpenAI API", "Python", "Make.com"]
  },
  robotics: {
    title: "Robototexnika & Sxemotexnika",
    duration: "6 oy (Haftada 3 kun, 2 soatdan)",
    age: "7 - 16 yosh oralig‘i",
    desc: "Yoshlarda muhandislik, mantiq va dasturlash ko‘nikmalarini birlashtiruvchi amaliy kurs. O‘quvchi har darsda real qurilma va harakatlanuvchi robotlar yasaydi.",
    syllabus: [
      "Elektronika asoslari: elektr zanjirlari, rezistorlar, tranzistorlar va diodlar",
      "Arduino mikrokontrolleri va C++ dasturlash tili sintaksisi",
      "Har xil turdagi datchiklar bilan ishlash (masofa, ultratovush, yorug‘lik, harorat)",
      "Servomotorlar, qadamli motorlar va g‘ildirakli shassilarni boshqarish",
      "Aqlli uy (Smart Home) qurilmalari (avtomatik chiroq, xavfsizlik datchigi)",
      "Avtonom to‘siqlarni aylanib o‘tuvchi robot yaratish va tanlov loyihasi"
    ],
    tools: ["Arduino Uno", "Tinkercad", "Arduino IDE", "Elektron komponentlar", "Sensorlar"]
  },
  design: {
    title: "UI/UX & Grafik Dizayn",
    duration: "5 oy (Haftada 3 kun, 2 soatdan)",
    age: "13 yoshdan yuqori",
    desc: "Figma orqali qulay va zamonaviy mobil ilovalar hamda veb-saytlar dizaynini loyihalash, brending va ijtimoiy tarmoqlar uchun kreativ vizuallar yaratish.",
    syllabus: [
      "Grafik dizayn qonuniyatlari: kompozitsiya, ranglar garmoniyasi, tipografika",
      "Adobe Photoshop: professional fotomontaj, bannerlar, manipulatsiya",
      "Adobe Illustrator: vektorli grafika, logotiplar, brend uslubi (Brandbook)",
      "UI/UX dizayn asoslari: User Journey, Wireframing va UX tadqiqot",
      "Figma: komponentlar, Auto-Layout, variantlar va interaktiv jonli prototiplar",
      "Tayyor keyslarni Behance va Dribbble platformalariga joylash"
    ],
    tools: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Behance", "Dribbble"]
  },
  literacy: {
    title: "Boshlang‘ich IT Savodxonligi",
    duration: "2 oy (Haftada 3 kun, 1.5 soatdan)",
    age: "7 yoshdan boshlab",
    desc: "Kompyuter olamiga ishonchli birinchi qadam. Kompyuterdan professional foydalanish, klaviaturada tez yozish va xavfsiz internet qoidalari.",
    syllabus: [
      "Kompyuter arxitekturasi va Windows / macOS tizimlarida ishlash",
      "Klaviatura trenajyori orqali 10 barmoqli tez yozish (Blind typing)",
      "Microsoft Word (hujjatlar formati) va Excel (jadvallar, hisob-kitob formulalari)",
      "PowerPoint (chiroyli va ta'sirli taqdimotlar tayyorlash)",
      "Google bulutli xizmatlari (Google Drive, Docs, Sheets) bilan ishlash",
      "Internet xavfsizligi va axborot gigiyenasi"
    ],
    tools: ["Windows / macOS", "MS Office", "Google Workspace", "Typing Club"]
  },
  english: {
    title: "IT Mutaxassislar uchun Ingliz Tili",
    duration: "4 oy (Haftada 3 kun, 1.5 soatdan)",
    age: "12 yoshdan yuqori",
    desc: "Dasturchilar va IT soha vakillari uchun maxsus texnik ingliz tili. Texnik hujjatlarni erkin o‘qish, xalqaro intervyulardan muvaffaqiyatli o‘tish va so‘zlashuv.",
    syllabus: [
      "Dasturlash va axborot texnologiyalariga oid maxsus texnik terminologiya",
      "GitHub, Stack Overflow va rasmiy texnik hujjatlarni (Documentation) erkin o‘qish",
      "Dasturdagi xatolar (Bugs & Issues) haqida inglizcha aniq yozish",
      "IT mutaxassisi rezyumesi (CV) va LinkedIn profilini professional tayyorlash",
      "HR va Texnik suhbat (Interview) mashg‘ulotlari (Mock interviews)",
      "Jamoaviy kundalik uchrashuvlarda (Daily Standup) erkin gapirish"
    ],
    tools: ["Technical Docs", "Mock Interviews", "Grammar & Vocab", "Speaking Sessions"]
  }
};

// Open Course Modal
function openCourseModal(courseKey) {
  const course = courseDetails[courseKey];
  if (!course) return;

  const modal = document.getElementById('courseModal');
  const content = document.getElementById('modalContent');

  let syllabusHTML = course.syllabus.map((item, idx) => `
    <li class="flex items-start gap-3 text-slate-300 text-sm">
      <span class="w-5 h-5 rounded-full bg-brand-cyan/20 text-brand-cyan text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">${idx + 1}</span>
      <span>${item}</span>
    </li>
  `).join('');

  let toolsHTML = course.tools.map(tool => `
    <span class="text-xs px-2.5 py-1 rounded-md bg-slate-800 border border-brand-border text-slate-300 font-mono font-medium">${tool}</span>
  `).join('');

  content.innerHTML = `
    <div class="mb-6">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-brand-cyan/10 text-brand-cyan mb-3">
        ${course.duration} • ${course.age}
      </div>
      <h3 class="text-2xl sm:text-3xl font-extrabold text-white mb-2">${course.title}</h3>
      <p class="text-slate-400 text-sm leading-relaxed">${course.desc}</p>
    </div>

    <div class="mb-6">
      <h4 class="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">O‘rganiladigan Asosiy Dars Rejasi:</h4>
      <ul class="space-y-2.5 bg-slate-950/70 p-4 rounded-xl border border-brand-border">
        ${syllabusHTML}
      </ul>
    </div>

    <div class="mb-8">
      <h4 class="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Ishlatiladigan Texnologiyalar & Dasturlar:</h4>
      <div class="flex flex-wrap gap-2">
        ${toolsHTML}
      </div>
    </div>

    <div class="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-brand-border">
      <button onclick="selectCourseAndEnroll('${courseKey}')" class="w-full sm:w-auto flex-1 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-brand-cyan to-brand-blue text-brand-darker hover:opacity-95 shadow-glow-cyan transition-all">
        Ushbu kursga bepul yozilish
      </button>
      <button onclick="closeCourseModal()" class="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all">
        Yopish
      </button>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  lucide.createIcons();
}

function closeCourseModal() {
  const modal = document.getElementById('courseModal');
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

// Close modal on background click
window.addEventListener('click', (e) => {
  const modal = document.getElementById('courseModal');
  if (e.target === modal) {
    closeCourseModal();
  }
});

// Close modal with Escape key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeCourseModal();
  }
});

// Auto-fill course in form and scroll
function selectCourseAndEnroll(courseKey) {
  closeCourseModal();
  const selectElem = document.getElementById('course');
  if (selectElem) {
    selectElem.value = courseKey;
  }
  const enrollSection = document.getElementById('enroll');
  if (enrollSection) {
    enrollSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// DOM Ready Handler
document.addEventListener('DOMContentLoaded', () => {

  // 1. Animated Number Counters (for all 6 statistics)
  const counters = document.querySelectorAll('.counter');
  let started = false;

  function runCounters() {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const duration = 1600;
      const step = Math.ceil(target / (duration / 25));
      let current = 0;

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          counter.textContent = target.toLocaleString();
          clearInterval(timer);
        } else {
          counter.textContent = current.toLocaleString();
        }
      }, 25);
    });
  }

  // Trigger counters when scrolled into view
  const statsSection = document.getElementById('stats');
  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started) {
        started = true;
        runCounters();
      }
    }, { threshold: 0.25 });
    observer.observe(statsSection);
  }

  // 2. Course Category Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const courseCards = document.querySelectorAll('.course-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active', 'border-brand-cyan', 'bg-brand-cyan/10', 'text-brand-cyan', 'shadow-glow-cyan');
        b.classList.add('border-brand-border', 'bg-slate-900/50', 'text-slate-300');
      });

      btn.classList.add('active', 'border-brand-cyan', 'bg-brand-cyan/10', 'text-brand-cyan', 'shadow-glow-cyan');
      btn.classList.remove('border-brand-border', 'bg-slate-900/50', 'text-slate-300');

      const filter = btn.getAttribute('data-filter');

      courseCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // 3. Mobile Navigation Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 4. FAQ Accordion Toggle
  const faqToggles = document.querySelectorAll('.faq-toggle');
  faqToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const content = toggle.nextElementSibling;
      const icon = toggle.querySelector('[data-lucide="chevron-down"]');
      const isHidden = content.classList.contains('hidden');

      // Close all
      document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
      document.querySelectorAll('.faq-toggle [data-lucide="chevron-down"]').forEach(i => i.classList.remove('rotate-180'));

      // If was