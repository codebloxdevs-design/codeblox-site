// ========================================
// PARTICLES BACKGROUND ANIMATION
// ========================================

class ParticlesBackground {
    constructor() {
        this.container = document.getElementById('particles-background');
        if (!this.container) return;
        
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.container.appendChild(this.canvas);
        
        this.particles = [];
        this.particleCount = this.getParticleCount();
        this.mouse = { x: null, y: null, radius: 150 };
        
        this.init();
        this.animate();
        this.addEventListeners();
    }
    
    getParticleCount() {
        // Adjust particle count based on screen size for performance
        const width = window.innerWidth;
        if (width < 768) return 30;
        if (width < 1200) return 50;
        return 80;
    }
    
    init() {
        this.resize();
        this.createParticles();
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
    }
    
    createParticles() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push(new Particle(this.canvas, this.mouse));
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw particles
        this.particles.forEach(particle => {
            particle.update();
            particle.draw(this.ctx);
        });
        
        // Connect particles
        this.connectParticles();
        
        requestAnimationFrame(() => this.animate());
    }
    
    connectParticles() {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 120) {
                    const opacity = 1 - (distance / 120);
                    this.ctx.strokeStyle = `rgba(0, 255, 136, ${opacity * 0.2})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }
    }
    
    addEventListeners() {
        window.addEventListener('resize', () => {
            this.resize();
            this.particleCount = this.getParticleCount();
            this.createParticles();
        });
        
        // Mouse move effect
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.x;
            this.mouse.y = e.y;
        });
        
        // Reset mouse position when leaving window
        window.addEventListener('mouseout', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
    }
}

class Particle {
    constructor(canvas, mouse) {
        this.canvas = canvas;
        this.mouse = mouse;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.3;
        
        // Color variations
        this.colors = [
            'rgba(0, 255, 136, ',     // Primary green
            'rgba(0, 102, 255, ',     // Blue
            'rgba(255, 255, 255, '    // White
        ];
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    }
    
    update() {
        // Move particle
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Bounce off edges
        if (this.x > this.canvas.width || this.x < 0) {
            this.speedX *= -1;
        }
        if (this.y > this.canvas.height || this.y < 0) {
            this.speedY *= -1;
        }
        
        // Mouse interaction
        if (this.mouse.x !== null && this.mouse.y !== null) {
            const dx = this.mouse.x - this.x;
            const dy = this.mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < this.mouse.radius) {
                const force = (this.mouse.radius - distance) / this.mouse.radius;
                const angle = Math.atan2(dy, dx);
                this.x -= Math.cos(angle) * force * 3;
                this.y -= Math.sin(angle) * force * 3;
            }
        }
        
        // Ensure particles stay within bounds
        this.x = Math.max(0, Math.min(this.canvas.width, this.x));
        this.y = Math.max(0, Math.min(this.canvas.height, this.y));
    }
    
    draw(ctx) {
        ctx.fillStyle = this.color + this.opacity + ')';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color + '0.8)';
        ctx.fill();
        ctx.shadowBlur = 0;
    }
}

// ========================================
// FLOATING SHAPES ANIMATION
// ========================================

class FloatingShapes {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;
        
        this.shapes = [];
        this.shapeCount = 5;
        
        this.init();
    }
    
    init() {
        for (let i = 0; i < this.shapeCount; i++) {
            this.createShape();
        }
    }
    
    createShape() {
        const shape = document.createElement('div');
        shape.className = 'floating-shape';
        
        const size = Math.random() * 100 + 50;
        const left = Math.random() * 100;
        const duration = Math.random() * 20 + 15;
        const delay = Math.random() * 5;
        const opacity = Math.random() * 0.1 + 0.05;
        
        shape.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${left}%;
            bottom: -${size}px;
            background: linear-gradient(135deg, rgba(0, 255, 136, ${opacity}), rgba(0, 102, 255, ${opacity}));
            border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
            animation: floatUp ${duration}s linear infinite ${delay}s;
            pointer-events: none;
            transform: rotate(${Math.random() * 360}deg);
        `;
        
        this.container.appendChild(shape);
        this.shapes.push(shape);
    }
}

// Add floating animation styles
const floatingStyles = document.createElement('style');
floatingStyles.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(720deg);
            opacity: 0;
        }
    }
    
    .floating-shape {
        z-index: 0;
    }
`;
document.head.appendChild(floatingStyles);

// ========================================
// INITIALIZE ANIMATIONS
// ========================================

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
} else {
    initAnimations();
}

function initAnimations() {
    // Initialize particles
    new ParticlesBackground();
    
    // Initialize floating shapes (optional - can be enabled for specific sections)
    // new FloatingShapes('hero');
    
    console.log('Particle animations initialized! ✨');
}

// ========================================
// PERFORMANCE MONITORING
// ========================================

let fps = 0;
let lastTime = performance.now();
let frameCount = 0;

function measureFPS() {
    const currentTime = performance.now();
    frameCount++;
    
    if (currentTime >= lastTime + 1000) {
        fps = frameCount;
        frameCount = 0;
        lastTime = currentTime;
        
        // Log FPS for debugging (can be removed in production)
        if (fps < 30) {
            console.warn(`Low FPS detected: ${fps}`);
        }
    }
    
    requestAnimationFrame(measureFPS);
}

// Start FPS monitoring (comment out in production)
// measureFPS();

// ========================================
// EXPORT FOR USE IN OTHER SCRIPTS
// ========================================

window.ParticlesBackground = ParticlesBackground;
window.FloatingShapes = FloatingShapes;
