// ========================================
// YOUTUBE API INTEGRATION
// ========================================

// Note: This uses YouTube Data API v3
// For production, you'll need a YouTube API key from: https://console.developers.google.com/

const YOUTUBE_CONFIG = {
    channelId: 'UCw-JqJ-BqXGXlj2z4wTjZTw', // CodeBlox-c2g channel ID
    channelHandle: '@CodeBlox-c2g',
    apiKey: 'YOUR_API_KEY_HERE', // Replace with your actual API key
    maxResults: 6 // Number of videos to fetch
};

class YouTubeAPI {
    constructor() {
        this.baseURL = 'https://www.googleapis.com/youtube/v3';
        this.channelData = null;
        this.videos = [];
        this.useAPI = false; // Set to true when you have an API key
    }
    
    // ========================================
    // FETCH CHANNEL STATISTICS
    // ========================================
    async fetchChannelStats() {
        if (!this.useAPI) {
            // Return mock data for development
            return {
                subscriberCount: '1.2K',
                viewCount: '15.5K',
                videoCount: '52'
            };
        }
        
        try {
            const response = await fetch(
                `${this.baseURL}/channels?part=statistics,snippet&id=${YOUTUBE_CONFIG.channelId}&key=${YOUTUBE_CONFIG.apiKey}`
            );
            
            if (!response.ok) throw new Error('Failed to fetch channel stats');
            
            const data = await response.json();
            if (data.items && data.items.length > 0) {
                const stats = data.items[0].statistics;
                return {
                    subscriberCount: this.formatNumber(stats.subscriberCount),
                    viewCount: this.formatNumber(stats.viewCount),
                    videoCount: stats.videoCount
                };
            }
        } catch (error) {
            console.error('Error fetching channel stats:', error);
            return null;
        }
    }
    
    // ========================================
    // FETCH LATEST VIDEOS
    // ========================================
    async fetchLatestVideos() {
        if (!this.useAPI) {
            // Return mock data for development
            return this.getMockVideos();
        }
        
        try {
            // First, get the uploads playlist ID
            const channelResponse = await fetch(
                `${this.baseURL}/channels?part=contentDetails&id=${YOUTUBE_CONFIG.channelId}&key=${YOUTUBE_CONFIG.apiKey}`
            );
            
            if (!channelResponse.ok) throw new Error('Failed to fetch channel data');
            
            const channelData = await channelResponse.json();
            const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;
            
            // Then, get videos from the uploads playlist
            const videosResponse = await fetch(
                `${this.baseURL}/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${YOUTUBE_CONFIG.maxResults}&key=${YOUTUBE_CONFIG.apiKey}`
            );
            
            if (!videosResponse.ok) throw new Error('Failed to fetch videos');
            
            const videosData = await videosResponse.json();
            
            return videosData.items.map(item => ({
                id: item.snippet.resourceId.videoId,
                title: item.snippet.title,
                description: item.snippet.description,
                thumbnail: item.snippet.thumbnails.high.url,
                publishedAt: item.snippet.publishedAt,
                channelTitle: item.snippet.channelTitle
            }));
        } catch (error) {
            console.error('Error fetching videos:', error);
            return this.getMockVideos();
        }
    }
    
    // ========================================
    // MOCK DATA FOR DEVELOPMENT
    // ========================================
    getMockVideos() {
        return [
            {
                id: 'dQw4w9WgXcQ',
                title: 'Introdução ao Luau - Primeiros Passos',
                description: 'Aprenda os fundamentos da linguagem Luau neste tutorial completo para iniciantes.',
                thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
                publishedAt: '2024-01-15',
                level: 'iniciante',
                duration: '15:30'
            },
            {
                id: 'dQw4w9WgXcQ',
                title: 'Sistema de Movimentação - Tutorial Completo',
                description: 'Crie um sistema de movimentação profissional para seu jogo com inputs WASD e animações.',
                thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
                publishedAt: '2024-01-18',
                level: 'iniciante',
                duration: '22:45'
            },
            {
                id: 'dQw4w9WgXcQ',
                title: 'Sistema de Combate com Luau',
                description: 'Implemente um sistema de combate robusto com detecção de colisão e dano.',
                thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
                publishedAt: '2024-01-22',
                level: 'intermediario',
                duration: '35:20'
            },
            {
                id: 'dQw4w9WgXcQ',
                title: 'Criando um Inventário Funcional',
                description: 'Desenvolva um sistema de inventário completo com interface gráfica e gerenciamento de itens.',
                thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
                publishedAt: '2024-01-25',
                level: 'intermediario',
                duration: '28:15'
            },
            {
                id: 'dQw4w9WgXcQ',
                title: 'Interface Gráfica (GUI) Avançada',
                description: 'Aprenda a criar interfaces bonitas e responsivas para seu jogo usando Luau.',
                thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
                publishedAt: '2024-01-28',
                level: 'intermediario',
                duration: '31:50'
            },
            {
                id: 'dQw4w9WgXcQ',
                title: 'Otimização e Boas Práticas',
                description: 'Técnicas avançadas de otimização para jogos de alta performance no Roblox.',
                thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
                publishedAt: '2024-02-01',
                level: 'avancado',
                duration: '40:30'
            }
        ];
    }
    
    // ========================================
    // UTILITY FUNCTIONS
    // ========================================
    formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    }
    
    formatDuration(duration) {
        // Convert ISO 8601 duration to readable format
        const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
        const hours = (match[1] || '').replace('H', '');
        const minutes = (match[2] || '').replace('M', '');
        const seconds = (match[3] || '').replace('S', '');
        
        if (hours) {
            return `${hours}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
        }
        return `${minutes}:${seconds.padStart(2, '0')}`;
    }
    
    formatDate(dateString) {
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
    
    getBadgeClass(level) {
        const badges = {
            'iniciante': 'badge-iniciante',
            'intermediario': 'badge-intermediario',
            'avancado': 'badge-avancado'
        };
        return badges[level] || 'badge-iniciante';
    }
    
    getBadgeText(level) {
        const texts = {
            'iniciante': 'Iniciante',
            'intermediario': 'Intermediário',
            'avancado': 'Avançado'
        };
        return texts[level] || 'Iniciante';
    }
}

// ========================================
// RENDER VIDEOS TO DOM
// ========================================
async function renderVideos() {
    const videosGrid = document.getElementById('videosGrid');
    if (!videosGrid) return;
    
    const api = new YouTubeAPI();
    
    try {
        const videos = await api.fetchLatestVideos();
        
        // Clear loading skeletons
        videosGrid.innerHTML = '';
        
        // Render video cards
        videos.forEach((video, index) => {
            const videoCard = createVideoCard(video, api);
            videosGrid.appendChild(videoCard);
            
            // Stagger animation
            setTimeout(() => {
                videoCard.style.opacity = '1';
                videoCard.style.transform = 'translateY(0)';
            }, index * 100);
        });
        
    } catch (error) {
        console.error('Error rendering videos:', error);
        videosGrid.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">Erro ao carregar vídeos. Por favor, tente novamente mais tarde.</p>';
    }
}

function createVideoCard(video, api) {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.5s ease';
    
    const level = video.level || 'iniciante';
    const duration = video.duration || '15:00';
    
    card.innerHTML = `
        <div class="video-thumbnail">
            <img src="${video.thumbnail}" alt="${video.title}" loading="lazy">
            <div class="video-play-overlay">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                </svg>
            </div>
            <span class="video-duration">${duration}</span>
        </div>
        <div class="video-info">
            <span class="video-badge ${api.getBadgeClass(level)}">${api.getBadgeText(level)}</span>
            <h3 class="video-title">${video.title}</h3>
            <p class="video-description">${truncateText(video.description, 120)}</p>
            <div class="video-meta">
                <span>${api.formatDate(video.publishedAt)}</span>
            </div>
        </div>
    `;
    
    // Add click handler to open video
    card.addEventListener('click', () => {
        window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank');
        
        // Or use modal (uncomment to enable)
        // window.CodeBlox.createVideoModal(video.id);
    });
    
    return card;
}

function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
}

// ========================================
// UPDATE CHANNEL STATISTICS
// ========================================
async function updateChannelStats() {
    const api = new YouTubeAPI();
    
    try {
        const stats = await api.fetchChannelStats();
        
        if (stats) {
            // Update subscriber count
            const subscribersEl = document.getElementById('subscribersCount');
            if (subscribersEl) {
                window.CodeBlox.animateCounter(subscribersEl, parseFloat(stats.subscriberCount) * 1000, 2000);
            }
            
            // Update view count
            const viewsEl = document.getElementById('viewsCount');
            if (viewsEl) {
                window.CodeBlox.animateCounter(viewsEl, parseFloat(stats.viewCount) * 1000, 2000);
            }
            
            // Update video count
            const videosEl = document.getElementById('videosCount');
            if (videosEl && stats.videoCount) {
                videosEl.textContent = stats.videoCount + '+';
            }
        }
    } catch (error) {
        console.error('Error updating channel stats:', error);
    }
}

// ========================================
// INITIALIZE ON PAGE LOAD
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Render videos
    renderVideos();
    
    // Update channel statistics
    updateChannelStats();
    
    console.log('YouTube integration loaded! 📺');
});

// ========================================
// REFRESH DATA PERIODICALLY (Optional)
// ========================================
// Refresh videos every 5 minutes
// setInterval(renderVideos, 5 * 60 * 1000);

// ========================================
// EXPORT FOR USE IN OTHER SCRIPTS
// ========================================
window.YouTubeAPI = YouTubeAPI;
window.renderVideos = renderVideos;
window.updateChannelStats = updateChannelStats;
