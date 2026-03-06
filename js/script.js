// ── App data ──────────────────────────────────────────────
const apps = {
    conversorCulinario: {
        icon: '👨🏾‍🍳', 
        iconBg: '#131a2e', 
        category: 'Utilitário',
        name: 'Conversor Culinário', 
        tagline: 'Converta facilmente entre diferentes unidades de medida de ingredientes.',
        about: 'O Conversor Culinário é um utilitário criado para ajudar chefs e entusiastas da culinária a converter entre diferentes unidades de medida de ingredientes. O app é simples e intuitivo, com uma interface amigável que permite ao usuário inserir o valor e a unidade de medida de um ingrediente, e obter o valor convertido para outra unidade.',
        features: '— Escolher dentre +25 ingredientes\n— Escolher dentre +10 unidades de medida\n— Converter entre as unidades de medida escolhidas',
        challenges: 'O maior desafio foi implementar a lógica de conversão entre as unidades de medida escolhidas, considerando as relações de conversão entre diferentes unidades de medida.',
        techs: ['Swift', 'SwiftUI', 'Swift Testing'],
        links: [
            { icon: '', label: 'App Store', url: '#' },
            { icon: '👨🏾‍🍳', label: 'Página do Aplicativo', url: 'https://luizgustavo358.github.io/conversorculinario/' }
        ],
        screenshots: [
            './conversorculinario/src/1.png',
            './conversorculinario/src/2.png',
            './conversorculinario/src/4.png'
        ]
    },
    myFinances: {
        icon: '💸',
        iconBg: '#1c472dff',
        category: 'Finanças',
        name: 'My Finances',
        tagline: 'Gestão financeira com dashboards interativos, categorização de gastos.',
        about: 'O My Finances é uma aplicação de gestão financeira criada para ajudar os usuários a controlar seus gastos. O app é simples e intuitivo, com uma interface amigável que permite ao usuário registrar seus gastos por mês, categorizá-los e visualizá-los em um gráfico ou em um resumo por categoria em cada mês.',
        features: '',
        challenges: '',
        techs: ['Swift', 'SwiftUI', 'Charts', 'SwiftData', 'Swift'],
        links: [
            { icon: '', label: 'App Store', url: '#' }
        ],
        screenshots: [
            './',
            './',
            './'
        ]
    },
    magicPaper: {
        icon: '📰',
        iconBg: '#1c3e47ff',
        category: 'Entretenimento',
        name: 'MagicPaper',
        tagline: '',
        about: '',
        features: '',
        challenges: '',
        techs: ['Swift', 'Storyboard', 'ARKit', 'SceneKit', 'UIKit'],
        links: [
            { icon: '🐙', label: 'GitHub', url: 'https://github.com/Luizgustavo358/iOS-Swift-Course/tree/master/apps/MagicPaper' }
        ],
        screenshots: [
            './',
            './',
            './'
        ]
    },
    poke3D: {
        icon: '🃏',
        iconBg: '#4e5040ff',
        category: 'Entretenimento',
        name: 'Poke3D',
        tagline: '',
        about: '',
        features: '',
        challenges: '',
        techs: ['Swift', 'Storyboard', 'ARKit', 'SceneKit', 'UIKit'],
        links: [
            { icon: '🐙', label: 'GitHub', url: 'https://github.com/Luizgustavo358/iOS-Swift-Course/tree/master/apps/Poke3D' }
        ],
        screenshots: [
            './',
            './',
            './'
        ]
    },
    clima: {
        icon: '🌤️',
        iconBg: '#606b29ff',
        category: 'Previsão do Tempo',
        name: 'Clima',
        tagline: 'Previsão do tempo com dados recebidos da API OpenWeatherMap.',
        about: '',
        features: '',
        challenges: '',
        techs: ['Swift', 'UIKit', 'Storyboard', 'API REST', 'Core Location'],
        links: [
            { icon: '🐙', label: 'GitHub', url: 'https://github.com/Luizgustavo358/iOS-Swift-Course/tree/master/apps/Clima' }
        ],
        screenshots: [
            './',
            './',
            './'
        ]
    },
    arDicee: {
        icon: '🎲',
        iconBg: '#0E2016',
        category: 'Entretenimento',
        name: 'AR Dicee',
        tagline: '',
        about: '',
        features: '',
        challenges: '',
        techs: [],
        links: [
            { icon: '🐙', label: 'GitHub', url: 'https://github.com/Luizgustavo358/iOS-Swift-Course/tree/master/apps/ARDicee' }
        ],
        screenshots: [
            './',
            './',
            './'
        ]
    },
    arRuler: {
        icon: '📏',
        iconBg: '#0E2016',
        category: 'Entretenimento',
        name: 'AR Ruler',
        tagline: 'Rastreador de distâncias com ARKit e SceneKit.',
        about: '',
        features: '',
        challenges: '',
        techs: ['Swift', 'Storyboard', 'ARKit', 'SceneKit', 'UIKit'],
        links: [
            { icon: '🐙', label: 'GitHub', url: 'https://github.com/Luizgustavo358/iOS-Swift-Course/tree/master/apps/AR%20Ruler' }
        ],
        screenshots: [
            './',
            './',
            './'
        ]
    },
    gratefulMoments: {
        icon: '🙏🏾',
        iconBg: '#431f5bff',
        category: 'Notas',
        name: 'Grateful Moments',
        tagline: 'Aplicativo para registrar momentos gratificantes e acompanhar o progresso.',
        about: 'O Grateful Moments é um aplicativo de notas para registrar momentos gratificantes e acompanhar o progresso. O app é simples e intuitivo, com uma interface amigável que permite ao usuário registrar seus momentos gratificantes e visualizá-los.',
        features: '-Badges\n-Criar momentos com fotos\n-Calculadora de sequências',
        challenges: '',
        techs: ['Swift', 'SwiftUI', 'SwiftData'],
        links: [
            { icon: '🐙', label: 'GitHub', url: 'https://github.com/Luizgustavo358/GratefulMoments' }
        ],
        screenshots: [
            './grateful/src/1.png',
            './grateful/src/2.png',
            './grateful/src/3.png'
        ]
    },
    hackerNews: {
        icon: '👨🏾‍💻',
        iconBg: '',
        category: '',
        name: 'Hacker News',
        tagline: '',
        about: '',
        features: '',
        challenges: '',
        techs: ['Swift', 'SwiftUI', 'WebKit', 'Combine'],
        links: [
            { icon: '🐙', label: 'GitHub', url: 'https://github.com/Luizgustavo358/iOS-Swift-Course/tree/master/apps/HackerNews' }
        ],
        screenshots: [
            './hackernews/src/1.jpg',
            './hackernews/src/2.jpg',
            './hackernews/src/3.jpg'
        ]
    },
    tipsy: {
        icon: '🧾',
        iconBg: '',
        category: '',
        name: 'Tipsy',
        tagline: '',
        about: '',
        features: '',
        challenges: '',
        techs: ['Swift', 'Storyboard', 'UIKit'],
        links: [
            { icon: '🐙', label: 'GitHub', url: 'https://github.com/Luizgustavo358/iOS-Swift-Course/tree/master/apps/Tipsy' }
        ],
        screenshots: [
            './',
            './',
            './'
        ]
    },
    todoey: {
        icon: '✅',
        iconBg: '#431f5bff',
        category: 'Lista',
        name: 'Todoey',
        tagline: 'Aplicativo de lista de tarefas com interface intuitiva.',
        about: '',
        features: '',
        challenges: '',
        techs: ['Swift', 'Storyboard', 'UIKit', 'Realm'],
        links: [
            { icon: '🐙', label: 'GitHub', url: 'https://github.com/Luizgustavo358/iOS-Swift-Course/tree/master/apps/Todoey' }
        ],
        screenshots: [
            './',
            './',
            './'
        ]
    },
    calculatorApp: {
        icon: '🧮',
        iconBg: '#431f5bff',
        category: 'Calculadora',
        name: 'CalculatorApp',
        tagline: 'Aplicativo de calculadora com interface intuitiva.',
        about: '',
        features: '',
        challenges: '',
        techs: ['Swift', 'SwiftUI'],
        links: [
            { icon: '🐙', label: 'GitHub', url: 'https://github.com/Luizgustavo358/CalculatorApp/tree/main' }
        ],
        screenshots: [
            './',
            './',
            './'
        ]
    }
};

// ── Theme toggle ──────────────────────────────────────────
function applyTheme(isDark) {
    const thumb = document.getElementById('iosThumb');
    const track = document.getElementById('themeToggle');
    const icon = document.getElementById('themeIcon');
    const label = document.getElementById('themeLabel');
    if (isDark) {
        document.documentElement.classList.add('dark');
        thumb.style.transform = 'translateX(18px)';
        track.style.background = '#4d7fff';
        icon.textContent = '☀️';
        label.textContent = 'Light';
    } else {
        document.documentElement.classList.remove('dark');
        thumb.style.transform = 'translateX(0)';
        track.style.background = '#cac8bf';
        icon.textContent = '🌙';
        label.textContent = 'Dark';
    }
}
function toggleTheme() {
    const isDark = !document.documentElement.classList.contains('dark');
    applyTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
// Apply saved preference on load
(function () {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(saved === 'dark' || (!saved && prefersDark));
})();

// ── Navigation ────────────────────────────────────────────
function showPage(id) {
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active', 'visible');
    });
    const page = document.getElementById(id);
    page.classList.add('active');
    window.scrollTo(0, 0);
    requestAnimationFrame(() => requestAnimationFrame(() => page.classList.add('visible')));
}

function goHome() {
    showPage('page-home');
    setTimeout(initReveal, 100);
}

function scrollToId(selector) {
    const el = document.getElementById(selector);
    
    if(el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}

// ── Open detail ───────────────────────────────────────────
function openDetail(id) {
    const app = apps[id];
    if (!app) return;

    document.getElementById('d-icon').textContent = app.icon;
    document.getElementById('d-icon').style.background = app.iconBg;
    document.getElementById('d-category').textContent = app.category;
    document.getElementById('d-name').textContent = app.name;
    document.getElementById('d-tagline').textContent = app.tagline;
    document.getElementById('d-about').textContent = app.about;
    document.getElementById('d-features').style.whiteSpace = 'pre-line';
    document.getElementById('d-features').textContent = app.features;
    document.getElementById('d-challenges').textContent = app.challenges;

    // Techs
    const techsEl = document.getElementById('d-techs');
    techsEl.innerHTML = app.techs.map(t => `<span class="tech-badge">${t}</span>`).join('');

    // Links
    const linksEl = document.getElementById('d-links');
    linksEl.innerHTML = app.links.map(l =>
        `<a href="${l.url}" target="_blank" class="detail-ext-link">${l.icon} ${l.label}<span>↗</span></a>`
    ).join('');

    // Screenshots (3 upload slots)
    const ssEl = document.getElementById('d-screenshots');
    ssEl.innerHTML = [0, 1, 2].map(i => `
        <div class="screenshot-slot">
            <img id="ss-img-${id}-${i}" src="${app.screenshots[i]}" alt="">
        </div>
    `).join('');

    showPage('page-detail');
}

// ── Reveal on scroll ──────────────────────────────────────
function initReveal() {
    const obs = new IntersectionObserver(entries => {
        entries.forEach((e, i) => {
            if (e.isIntersecting) {
                e.target.style.transitionDelay = (i * 0.06) + 's';
                e.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('#page-home .reveal').forEach(el => obs.observe(el));
}
initReveal();

// Show home with fade-in
requestAnimationFrame(() => requestAnimationFrame(() => {
    document.getElementById('page-home').classList.add('visible');
}));

// ── Photo upload ──────────────────────────────────────────
function loadPhoto(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
        const img = document.getElementById('photoImg');
        img.src = e.target.result; img.style.display = 'block';
        document.getElementById('photoPlaceholder').style.display = 'none';
    };
    reader.readAsDataURL(file);
}

// ── Email ─────────────────────────────────────────────────
function sendEmail() {
    const name  = document.getElementById('fName').value.trim();
    const email = document.getElementById('fEmail').value.trim();
    const msg   = document.getElementById('fMsg').value.trim();

    if (!name || !email || !msg) 
        return;

    window.location.href = `mailto:luizgustavo358@icloud.com?subject=Portfólio - ${encodeURIComponent(name)}&body=${encodeURIComponent('Nome: ' + name + '\nEmail: ' + email + '\n\n' + msg)}`;
    
    const s = document.getElementById('fSuccess');
    s.style.display = 'block';
    
    setTimeout(() => s.style.display = 'none', 4000);
}

function downloadCV(e) {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = './src/CV_Luiz-Gustavo_PTBR.pdf';
    link.download = 'CV_Luiz-Gustavo_PTBR.pdf';
    link.click();
}