// ── App data ──────────────────────────────────────────────
const apps = {
    fittrack: {
        icon: '🏋️', iconBg: '#f0f5ff', category: 'Saúde & Fitness',
        name: 'FitTrack', tagline: 'Rastreamento inteligente de treinos com planos personalizados e integração nativa com o HealthKit.',
        about: 'FitTrack é um app de fitness criado para ajudar usuários a monitorar seus treinos de forma simples e eficiente. O app conecta-se ao HealthKit para ler e gravar dados de saúde, mantendo um histórico completo de atividades.',
        features: '— Criação de planos de treino personalizados\n— Integração bidirecional com HealthKit\n— Gráficos de evolução semanal e mensal\n— Registro de séries, repetições e carga\n— Notificações inteligentes de descanso',
        challenges: 'O maior desafio foi sincronizar os dados em tempo real com o HealthKit sem impactar a performance da UI, utilizando Combine para gerenciar fluxos assíncronos de forma reativa.',
        techs: ['Swift', 'SwiftUI', 'HealthKit', 'CoreData', 'Combine', 'Charts'],
        links: [
            { icon: '🛍️', label: 'App Store', url: '#' },
            { icon: '🐙', label: 'GitHub', url: 'https://github.com/Luizgustavo358' }
        ]
    },
    carteira: {
        icon: '💸', iconBg: '#f5f0ff', category: 'Finanças',
        name: 'Carteira Pro', tagline: 'Gestão financeira pessoal com dashboards interativos, categorização automática e metas de economia.',
        about: 'Carteira Pro ajuda os usuários a controlar suas finanças pessoais de forma visual e intuitiva. Com categorização automática de despesas e gráficos em tempo real, o app torna simples entender para onde o dinheiro vai.',
        features: '— Dashboard com resumo mensal interativo\n— Categorização automática de lançamentos\n— Metas de economia com progresso visual\n— Sincronização via CloudKit em múltiplos dispositivos\n— Exportação de relatórios em PDF',
        challenges: 'Implementar o framework Charts do iOS 16 com animações fluidas e dados dinâmicos, mantendo performance mesmo com centenas de transações no CoreData.',
        techs: ['Swift', 'SwiftUI', 'Charts', 'CloudKit', 'CoreData', 'StoreKit'],
        links: [
            { icon: '🛍️', label: 'App Store', url: '#' },
            { icon: '🐙', label: 'GitHub', url: 'https://github.com/Luizgustavo358' }
        ]
    },
    podcast: {
        icon: '🎧', iconBg: '#edfaf6', category: 'Entretenimento',
        name: 'PodCast Now', tagline: 'Player de podcasts com download offline, velocidade ajustável e recomendações personalizadas por IA.',
        about: 'PodCast Now é um player de podcasts com foco na experiência de escuta. O app utiliza CoreML para recomendar episódios com base no histórico e preferências do usuário, enquanto o AVFoundation gerencia a reprodução com alta fidelidade.',
        features: '— Download de episódios para escuta offline\n— Velocidade de reprodução de 0.5x a 3x\n— Recomendações personalizadas via CoreML\n— Fila de reprodução inteligente\n— Widget na tela de bloqueio e Dynamic Island',
        challenges: 'Treinar e integrar um modelo CoreML leve para recomendações sem sobrecarregar o dispositivo, além de gerenciar o cache de áudios com limite inteligente de armazenamento.',
        techs: ['Swift', 'SwiftUI', 'AVFoundation', 'CoreML', 'Combine', 'WidgetKit'],
        links: [
            { icon: '🛍️', label: 'App Store', url: '#' },
            { icon: '🐙', label: 'GitHub', url: 'https://github.com/Luizgustavo358' }
        ]
    },
    taskflow: {
        icon: '📦', iconBg: '#f2f4f7', category: 'Produtividade',
        name: 'TaskFlow', tagline: 'Gerenciador de tarefas com widgets interativos, lembretes por localização e modo foco.',
        about: 'TaskFlow é um gerenciador de tarefas minimalista que utiliza geolocalização para lembretes contextuais — "lembre-me quando eu chegar no mercado". Widgets interativos permitem adicionar e marcar tarefas direto da tela inicial.',
        features: '— Lembretes ativados por localização via CoreLocation\n— Widgets interativos com WidgetKit (iOS 17+)\n— Modo foco com integração ao Focus Filters da Apple\n— Organização por projetos e etiquetas\n— Sincronização com Reminders nativos',
        challenges: 'Implementar widgets verdadeiramente interativos (AppIntents + WidgetKit no iOS 17) sem acessar o contexto principal do app, e garantir que os geofences funcionem com precisão em segundo plano.',
        techs: ['Swift', 'SwiftUI', 'WidgetKit', 'AppIntents', 'CoreLocation', 'UserNotifications'],
        links: [
            { icon: '🛍️', label: 'App Store', url: '#' },
            { icon: '🐙', label: 'GitHub', url: 'https://github.com/Luizgustavo358' }
        ]
    },
    receita: {
        icon: '🍽️', iconBg: '#fff2f5', category: 'Alimentação',
        name: 'ReceitaFácil', tagline: 'Receitas personalizadas por restrições alimentares, com lista de compras automática e modo cozinha.',
        about: 'ReceitaFácil usa a câmera do dispositivo para identificar ingredientes via Vision Framework e sugere receitas compatíveis com as restrições alimentares do usuário. O modo cozinha mantém a tela ativa e amplia o texto para facilitar o uso enquanto cozinha.',
        features: '— Reconhecimento de ingredientes pela câmera (Vision)\n— Filtros por intolerâncias e dietas\n— Lista de compras gerada automaticamente\n— Modo cozinha com tela sempre ativa\n— Favoritos com sincronização Firebase',
        challenges: 'Usar o Vision Framework para reconhecer alimentos em condições de iluminação variadas e integrar esse fluxo assíncrono com a UI de forma suave e sem travar.',
        techs: ['Swift', 'SwiftUI', 'Vision', 'Firebase', 'Firestore', 'CoreML'],
        links: [
            { icon: '🛍️', label: 'App Store', url: '#' },
            { icon: '🐙', label: 'GitHub', url: 'https://github.com/Luizgustavo358' }
        ]
    },
    habitos: {
        icon: '🌱', iconBg: '#f0faf2', category: 'Lifestyle',
        name: 'HábitOS', tagline: 'Rastreador de hábitos com streaks, notificações inteligentes e análise semanal de progresso.',
        about: 'HábitOS ajuda usuários a construir e manter hábitos saudáveis através de um sistema de streaks gamificado. Notificações adaptativas aprendem o melhor horário para cada usuário com base no histórico de interações.',
        features: '— Sistema de streaks com recompensas visuais\n— Notificações adaptativas por horário de uso\n— Análise semanal e mensal de consistência\n— Compras in-app via StoreKit 2\n— Widget de progresso diário',
        challenges: 'Implementar o StoreKit 2 com suporte a assinaturas e compras únicas, gerenciando o estado de entitlement de forma confiável e validando localmente as transações.',
        techs: ['Swift', 'SwiftUI', 'CoreData', 'StoreKit 2', 'UserNotifications', 'WidgetKit'],
        links: [
            { icon: '🛍️', label: 'App Store', url: '#' },
            { icon: '🐙', label: 'GitHub', url: 'https://github.com/Luizgustavo358' }
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
    <div class="screenshot-slot" onclick="document.getElementById('ss-${id}-${i}').click()">
      <img id="ss-img-${id}-${i}" src="" alt="">
      <div class="slot-add" id="ss-add-${id}-${i}">
        <span class="slot-add-icon">＋</span>
        <span class="slot-add-text">Screenshot ${i + 1}</span>
      </div>
      <input type="file" id="ss-${id}-${i}" accept="image/*" onchange="loadScreenshot(event,'${id}',${i})">
    </div>
  `).join('');

    showPage('page-detail');
}

function loadScreenshot(event, appId, idx) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
        const img = document.getElementById(`ss-img-${appId}-${idx}`);
        const add = document.getElementById(`ss-add-${appId}-${idx}`);
        img.src = e.target.result;
        img.style.display = 'block';
        add.style.display = 'none';
    };
    reader.readAsDataURL(file);
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
    const name = document.getElementById('fName').value.trim();
    const email = document.getElementById('fEmail').value.trim();
    const msg = document.getElementById('fMsg').value.trim();
    if (!name || !email || !msg) return;
    window.location.href = `mailto:luizgbraganca@email.com?subject=Portfólio - ${encodeURIComponent(name)}&body=${encodeURIComponent('Nome: ' + name + '\nEmail: ' + email + '\n\n' + msg)}`;
    const s = document.getElementById('fSuccess');
    s.style.display = 'block';
    setTimeout(() => s.style.display = 'none', 4000);
}

function downloadCV(e) {
    e.preventDefault();
    alert('Substitua esta função pelo link direto do seu currículo PDF.');
}