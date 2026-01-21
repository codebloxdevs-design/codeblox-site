// ========================================
// TUTORIALS PAGE JAVASCRIPT
// ========================================

// Sample tutorials data (in production, this would come from YouTube API or database)
const tutorialsData = [
    // FUNDAMENTOS - INICIANTE
    {
        id: '1',
        title: 'Introdução ao Luau - Primeiros Passos',
        description: 'Aprenda os fundamentos da linguagem Luau e configure seu ambiente de desenvolvimento para começar a criar jogos.',
        thumbnail: 'https://via.placeholder.com/640x360/1a1f3a/00ff88?text=Introdução+ao+Luau',
        level: 'iniciante',
        category: 'fundamentos',
        duration: '15:30',
        publishedAt: '2024-01-05',
        views: '2.5K'
    },
    {
        id: '2',
        title: 'Variáveis e Tipos de Dados',
        description: 'Entenda como declarar variáveis, os diferentes tipos de dados em Luau e como utilizá-los corretamente.',
        thumbnail: 'https://via.placeholder.com/640x360/1a1f3a/0066ff?text=Variáveis',
        level: 'iniciante',
        category: 'fundamentos',
        duration: '18:45',
        publishedAt: '2024-01-08',
        views: '2.1K'
    },
    {
        id: '3',
        title: 'Operadores e Expressões',
        description: 'Aprenda a usar operadores aritméticos, lógicos e de comparação para criar expressões em Luau.',
        thumbnail: 'https://via.placeholder.com/640x360/1a1f3a/ff0066?text=Operadores',
        level: 'iniciante',
        category: 'fundamentos',
        duration: '16:20',
        publishedAt: '2024-01-12',
        views: '1.8K'
    },
    {
        id: '4',
        title: 'Estruturas Condicionais - If e Else',
        description: 'Domine as estruturas de decisão para criar lógica condicional em seus scripts.',
        thumbnail: 'https://via.placeholder.com/640x360/1a1f3a/00ff88?text=Condicionais',
        level: 'iniciante',
        category: 'fundamentos',
        duration: '20:15',
        publishedAt: '2024-01-15',
        views: '2.3K'
    },
    {
        id: '5',
        title: 'Loops - For, While e Repeat',
        description: 'Aprenda a usar loops para repetir ações e processar dados de forma eficiente.',
        thumbnail: 'https://via.placeholder.com/640x360/1a1f3a/0066ff?text=Loops',
        level: 'iniciante',
        category: 'fundamentos',
        duration: '22:30',
        publishedAt: '2024-01-18',
        views: '2.0K'
    },
    
    // FUNDAMENTOS - INTERMEDIÁRIO
    {
        id: '6',
        title: 'Funções em Luau',
        description: 'Crie e utilize funções para organizar seu código de forma modular e reutilizável.',
        thumbnail: 'https://via.placeholder.com/640x360/1a1f3a/ff0066?text=Funções',
        level: 'intermediario',
        category: 'fundamentos',
        duration: '25:40',
        publishedAt: '2024-01-22',
        views: '1.9K'
    },
    {
        id: '7',
        title: 'Tabelas e Arrays',
        description: 'Trabalhe com estruturas de dados complexas usando tabelas e arrays em Luau.',
        thumbnail: 'https://via.placeholder.com/640x360/1a1f3a/00ff88?text=Tabelas',
        level: 'intermediario',
        category: 'fundamentos',
        duration: '28:15',
        publishedAt: '2024-01-25',
        views: '1.7K'
    },
    {
        id: '8',
        title: 'Módulos e Scripts',
        description: 'Organize seu código em módulos reutilizáveis e entenda a diferença entre Scripts e LocalScripts.',
        thumbnail: 'https://via.placeholder.com/640x360/1a1f3a/0066ff?text=Módulos',
        level: 'intermediario',
        category: 'fundamentos',
        duration: '24:50',
        publishedAt: '2024-01-28',
        views: '1.6K'
    },
    
    // MECÂNICAS - INICIANTE
    {
        id: '9',
        title: 'Sistema de Movimentação Básico',
        description: 'Crie um sistema simples de movimentação de personagem usando inputs do teclado.',
        thumbnail: 'https://via.placeholder.com/640x360/1a1f3a/ff0066?text=Movimentação',
        level: 'iniciante',
        category: 'mecanicas',
        duration: '30:20',
        publishedAt: '2024-02-01',
        views: '3.2K'
    },
    {
        id: '10',
        title: 'Sistema de Coleta de Itens',
        description: 'Implemente um sistema básico para coletar e armazenar itens no jogo.',
        thumbnail: 'https://via.placeholder.com/640x360/1a1f3a/00ff88?text=Coleta+Itens',
        level: 'iniciante',
        category: 'mecanicas',
        duration: '26:35',
        publishedAt: '2024-02-05',
        views: '2.8K'
    },
    
    // MECÂNICAS - INTERMEDIÁRIO
    {
        id: '11',
        title: 'Sistema de Combate Completo',
        description: 'Desenvolva um sistema robusto de combate com ataques, dano, cooldown e animações.',
        thumbnail: 'https://via.placeholder.com/640x360/1a1f3a/0066ff?text=Sistema+Combate',
        level: 'intermediario',
        category: 'mecanicas',
        duration: '45:20',
        publishedAt: '2024-02-08',
        views: '4.1K'
    },
    {
        id: '12',
        title: 'Sistema de Inventário Avançado',
        description: 'Crie um inventário completo com slots, categorias e integração com interface gráfica.',
        thumbnail: 'https://via.placeholder.com/640x360/1a1f3a/ff0066?text=Inventário',
        level: 'intermediario',
        category: 'mecanicas',
        duration: '38:45',
        publishedAt: '2024-02-12',
        views: '3.5K'
    },
    {
        id: '13',
        title: 'Sistema de Pontuação e Ranking',
        description: 'Implemente sistema de pontos, ranking e salvamento de recordes usando DataStore.',
        thumbnail: 'https://via.placeholder.com/640x360/1a1f3a/00ff88?text=Pontuação',
        level: 'intermediario',
        category: 'mecanicas',
        duration: '32:10',
        publishedAt: '2024-02-15',
        views: '2.9K'
    },
    {
        id: '14',
        title: 'Sistema de Progressão de Personagem',
        description: 'Crie um sistema de níveis, experiência e habilidades desbloqueáveis.',
        thumbnail: 'https://via.placeholder.com/640x360/1a1f3a/0066ff?text=Progressão',
        level: 'intermediario',
        category: 'mecanicas',
        duration: '42:30',
        publishedAt: '2024-02-18',
        views: '3.3K'
    },
    
    // INTERFACE - INICIANTE
    {
        id: '15',
        title: 'GUI Básica - Introdução',
        description: 'Aprenda os fundamentos de criação de interface gráfica no Roblox Studio.',
        thumbnail: 'https://via.placeholder.com/640x360/1a1f3a/ff0066?text=GUI+Básica',
        level: 'iniciante',
        category: 'interface',
        duration: '22:45',
        publishedAt: '2024-02-22',
        views: '2.4K'
    },
    {
        id: '16',
        title: 'Botões Interativos',
        description: 'Crie botões funcionais com hover effects e feedback visual.',
        thumbnail: 'https://via.placeholder.com/640x360/1a1f3a/00ff88?text=Botões',
        level: 'iniciante',
        category: 'interface',
        duration: '19:30',
        publishedAt: '2024-02-25',
        views: '2.1K'
    },
    
    // INTERFACE - INTERMEDIÁRIO
    {
        id: '17',
        title: 'Menu Principal Profissional',
        description: 'Desenvolva um menu principal completo com configurações e navegação.',
        thumbnail: 'https://via.placeholder.com/640x360/1a1f3a/0066ff?text=Menu+Principal',
        level: 'intermediario',
        category: 'interface',
        duration: '35:50',
        publishedAt: '2024-03-01',
        views: '3.0K'
    },
    {
        id: '18',
        title: 'HUD Customizada',
        description: 'Crie uma HUD personalizada com barra de vida, mana, minimapa e mais.',
        thumbnail: 'https://via.placeholder.com/640x360/1a1f3a/ff0066?text=HUD',
        level: 'intermediario',
        category: 'interface',
        duration: '40:15',
        publishedAt: '2024-03-05',
        views: '3.4K'
    },
    {
        id: '19',
        title: 'Animações de UI',
        description: 'Adicione animações suaves e profissionais à sua interface usando TweenService.',
        thumbnail: 'https://via.placeholder.com/640x360/1a1f3a/00ff88?text=Animações+UI',
        level: 'intermediario',
        category: 'interface',
        duration: '28:40',
        publishedAt: '2024-03-08',
        views: '2.7K'
    },
    
    // OTIMIZAÇÃO - INTERMEDIÁRIO
    {
        id: '20',
        title: 'Otimização de Performance',
        description: 'Técnicas essenciais para melhorar a performance do seu jogo.',
        thumbnail: 'https://via.placeholder.com/640x360/1a1f3a/0066ff?text=Otimização',
        level: 'intermediario',
        category: 'otimizacao',
        duration: '33:20',
        publishedAt: '2024-03-12',
        views: '2.5K'
    },
    
    // OTIMIZAÇÃO - AVANÇADO
    {
        id: '21',
        title: 'Remote Events e Functions',
        description: 'Domine a comunicação entre cliente e servidor usando RemoteEvents e RemoteFunctions.',
        thumbnail: 'https://via.placeholder.com/640x360/1a1f3a/ff0066?text=Remote+Events',
        level: 'avancado',
        category: 'otimizacao',
        duration: '48:30',
        publishedAt: '2024-03-15',
        views: '3.1K'
    },
    {
        id: '22',
        title: 'DataStore Avançado',
        description: 'Implementação profissional de DataStore com backups e tratamento de erros.',
        thumbnail: 'https://via.placeholder.com/640x360/1a1f3a/00ff88?text=DataStore',
        level: 'avancado',
        category: 'otimizacao',
        duration: '52:15',
        publishedAt: '2024-03-18',
        views: '2.8K'
    },
    {
        id: '23',
        title: 'Arquitetura de Código Escalável',
        description: 'Organize seu código usando padrões de design e arquitetura limpa.',
        thumbnail: 'https://via.placeholder.com/640x360/1a1f3a/0066ff?text=Arquitetura',
        level: 'avancado',
        category: 'otimizacao',
        duration: '55:40',
        publishedAt: '2024-03-22',
        views: '2.3K'
    },
    {
        id: '24',
        title: 'Sistema de Replicação Customizada',
        description: 'Crie seu próprio sistema de replicação para otimizar a comunicação de rede.',
        thumbnail: 'https://via.placeholder.com/640x360/1a1f3a/ff0066?text=Replicação',
        level: 'avancado',
        category: 'otimizacao',
        duration: '60:25',
        publishedAt: '2024-03-25',
        views: '2.0K'
    }
];

// State management
let currentFilter = 'all';
let currentCategory = 'all';
let searchQuery = '';
let filteredTutorials = [...tutorialsData];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const tutorialsGrid = document.getElementById('tutorialsGrid');
const noResults = document.getElementById('noResults');
const filterButtons = document.querySelectorAll('.filter-btn[data-filter]');
const categoryButtons = document.querySelectorAll('.filter-btn[data-category]');
const totalVideosEl = document.getElementById('totalVideos');

// ========================================
// INITIALIZE
// ========================================
function init() {
    renderTutorials();
    setupEventListeners();
    updateTotalCount();
}

// ========================================
// EVENT LISTENERS
// ========================================
function setupEventListeners() {
    // Search input
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        filterTutorials();
    });
    
    // Level filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            filterTutorials();
        });
    });
    
    // Category filter buttons
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            filterTutorials();
        });
    });
}

// ========================================
// FILTER TUTORIALS
// ========================================
function filterTutorials() {
    filteredTutorials = tutorialsData.filter(tutorial => {
        // Filter by level
        const levelMatch = currentFilter === 'all' || tutorial.level === currentFilter;
        
        // Filter by category
        const categoryMatch = currentCategory === 'all' || tutorial.category === currentCategory;
        
        // Filter by search query
        const searchMatch = searchQuery === '' || 
            tutorial.title.toLowerCase().includes(searchQuery) ||
            tutorial.description.toLowerCase().includes(searchQuery);
        
        return levelMatch && categoryMatch && searchMatch;
    });
    
    renderTutorials();
    updateTotalCount();
}

// ========================================
// RENDER TUTORIALS
// ========================================
function renderTutorials() {
    tutorialsGrid.innerHTML = '';
    
    if (filteredTutorials.length === 0) {
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    filteredTutorials.forEach((tutorial, index) => {
        const card = createTutorialCard(tutorial);
        tutorialsGrid.appendChild(card);
        
        // Stagger animation
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 50);
    });
}

// ========================================
// CREATE TUTORIAL CARD
// ========================================
function createTutorialCard(tutorial) {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.5s ease';
    
    const badgeClass = getBadgeClass(tutorial.level);
    const badgeText = getBadgeText(tutorial.level);
    
    card.innerHTML = `
        <div class="video-thumbnail">
            <img src="${tutorial.thumbnail}" alt="${tutorial.title}" loading="lazy">
            <div class="video-play-overlay">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                </svg>
            </div>
            <span class="video-duration">${tutorial.duration}</span>
        </div>
        <div class="video-info">
            <span class="video-badge ${badgeClass}">${badgeText}</span>
            <h3 class="video-title">${tutorial.title}</h3>
            <p class="video-description">${tutorial.description}</p>
            <div class="video-meta">
                <span>👁️ ${tutorial.views}</span>
                <span>•</span>
                <span>${formatDate(tutorial.publishedAt)}</span>
            </div>
        </div>
    `;
    
    // Add click handler
    card.addEventListener('click', () => {
        window.open(`https://www.youtube.com/@CodeBlox-c2g`, '_blank');
    });
    
    return card;
}

// ========================================
// UTILITY FUNCTIONS
// ========================================
function getBadgeClass(level) {
    const badges = {
        'iniciante': 'badge-iniciante',
        'intermediario': 'badge-intermediario',
        'avancado': 'badge-avancado'
    };
    return badges[level] || 'badge-iniciante';
}

function getBadgeText(level) {
    const texts = {
        'iniciante': 'Iniciante',
        'intermediario': 'Intermediário',
        'avancado': 'Avançado'
    };
    return texts[level] || 'Iniciante';
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'há 1 dia';
    if (diffDays < 7) return `há ${diffDays} dias`;
    if (diffDays < 30) return `há ${Math.floor(diffDays / 7)} semanas`;
    if (diffDays < 365) return `há ${Math.floor(diffDays / 30)} meses`;
    return `há ${Math.floor(diffDays / 365)} anos`;
}

function updateTotalCount() {
    if (totalVideosEl) {
        totalVideosEl.textContent = filteredTutorials.length;
    }
}

// ========================================
// KEYBOARD SHORTCUTS
// ========================================
document.addEventListener('keydown', (e) => {
    // Focus search with '/' key
    if (e.key === '/' && document.activeElement !== searchInput) {
        e.preventDefault();
        searchInput.focus();
    }
    
    // Clear search with ESC key
    if (e.key === 'Escape' && document.activeElement === searchInput) {
        searchInput.value = '';
        searchQuery = '';
        filterTutorials();
        searchInput.blur();
    }
});

// ========================================
// INITIALIZE ON DOM LOAD
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    init();
    console.log('Tutorials page loaded! 📚');
});

// ========================================
// EXPORT FOR USE IN OTHER SCRIPTS
// ========================================
window.TutorialsPage = {
    tutorialsData,
    filterTutorials,
    renderTutorials
};
