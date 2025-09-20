// ==========================================
//    DYNAMIC ART GALLERY SYSTEM
// ==========================================

// Global State Management
const galleryState = {
    user: {
        preferences: JSON.parse(localStorage.getItem('userPreferences')) || {},
        favoriteArtists: JSON.parse(localStorage.getItem('favoriteArtists')) || [],
        viewHistory: JSON.parse(localStorage.getItem('viewHistory')) || [],
        visitCount: parseInt(localStorage.getItem('visitCount')) || 0
    },
    gallery: {
        currentTheme: localStorage.getItem('currentTheme') || 'default',
        autoRotateEnabled: true,
        animationSpeed: 1,
        soundEnabled: localStorage.getItem('soundEnabled') !== 'false'
    },
    stats: {
        totalViews: parseInt(localStorage.getItem('totalViews')) || 0,
        dailyVisitors: parseInt(localStorage.getItem('dailyVisitors')) || 0,
        popularArtworks: JSON.parse(localStorage.getItem('popularArtworks')) || {}
    }
};

// Particle System Class
class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.maxParticles = 50;
        this.weatherMode = 'sunny';
        this.resize();
        this.createParticles();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        for (let i = 0; i < this.maxParticles; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                size: Math.random() * 3 + 1,
                opacity: Math.random() * 0.5 + 0.1,
                color: this.getParticleColor()
            });
        }
    }

    getParticleColor() {
        const colors = ['#ff00a6', '#007bff', '#00d4aa', '#ff6b6b'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    setWeatherMode(weather) {
        this.weatherMode = weather;
        this.updateParticlesBehavior();
    }

    updateParticlesBehavior() {
        this.particles.forEach(particle => {
            switch (this.weatherMode) {
                case 'rainy':
                    particle.vy = Math.abs(particle.vy) + 2;
                    particle.vx = particle.vx * 0.5;
                    break;
                case 'snowy':
                    particle.vy = Math.abs(particle.vy) * 0.5;
                    particle.vx = particle.vx * 0.3;
                    particle.color = '#ffffff';
                    break;
                case 'windy':
                    particle.vx = particle.vx * 2;
                    break;
                default:
                    // sunny - normal behavior
                    break;
            }
        });
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Wrap around edges
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;

            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = particle.color;
            this.ctx.globalAlpha = particle.opacity;
            this.ctx.fill();
        });

        this.ctx.globalAlpha = 1;
        requestAnimationFrame(() => this.animate());
    }

    start() {
        this.animate();
    }
}

// Dynamic Content Manager
class DynamicContentManager {
    constructor() {
        this.themes = {
            default: {
                primary: '#ff00a6',
                secondary: '#007bff',
                background: '#f9f8f6'
            },
            dark: {
                primary: '#ff00a6',
                secondary: '#00d4aa',
                background: '#1a1a1a'
            },
            warm: {
                primary: '#ff6b35',
                secondary: '#f7931e',
                background: '#fdf5e6'
            },
            cool: {
                primary: '#00a8cc',
                secondary: '#0492c2',
                background: '#f0f8ff'
            }
        };
        this.init();
    }

    init() {
        this.updateVisitStats();
        this.loadUserPreferences();
        this.initializeParticleSystem();
        this.setupDynamicBackground();
        this.initializeInteractiveElements();
        this.setupRealTimeUpdates();
        this.createDynamicControls();
    }

    updateVisitStats() {
        galleryState.user.visitCount++;
        galleryState.stats.totalViews++;
        localStorage.setItem('visitCount', galleryState.user.visitCount);
        localStorage.setItem('totalViews', galleryState.stats.totalViews);
        
        const today = new Date().toDateString();
        const lastVisit = localStorage.getItem('lastVisitDate');
        if (lastVisit !== today) {
            galleryState.stats.dailyVisitors++;
            localStorage.setItem('dailyVisitors', galleryState.stats.dailyVisitors);
            localStorage.setItem('lastVisitDate', today);
        }
    }

    loadUserPreferences() {
        const theme = galleryState.gallery.currentTheme;
        if (theme !== 'default') {
            this.applyTheme(theme);
        }
        
        if (galleryState.user.visitCount > 1) {
            this.showWelcomeBackMessage();
        }
    }

    applyTheme(themeName) {
        const theme = this.themes[themeName];
        document.documentElement.style.setProperty('--primary-color', theme.primary);
        document.documentElement.style.setProperty('--secondary-color', theme.secondary);
        document.documentElement.style.setProperty('--background-color', theme.background);
        
        galleryState.gallery.currentTheme = themeName;
        localStorage.setItem('currentTheme', themeName);
    }

    initializeParticleSystem() {
        const canvas = document.createElement('canvas');
        canvas.id = 'particle-canvas';
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.zIndex = '-2';
        canvas.style.pointerEvents = 'none';
        document.body.appendChild(canvas);

        this.particleSystem = new ParticleSystem(canvas);
        this.particleSystem.start();
    }

    setupDynamicBackground() {
        const hour = new Date().getHours();
        const timeOfDay = hour < 6 ? 'night' : hour < 12 ? 'morning' : hour < 18 ? 'afternoon' : 'evening';
        
        document.body.classList.add(`time-${timeOfDay}`);
        this.setWeatherBasedAmbience();
    }

    setWeatherBasedAmbience() {
        const weather = ['sunny', 'cloudy', 'rainy', 'snowy'][Math.floor(Math.random() * 4)];
        document.body.classList.add(`weather-${weather}`);
        
        if (this.particleSystem) {
            this.particleSystem.setWeatherMode(weather);
        }
    }

    showWelcomeBackMessage() {
        const welcomeModal = document.createElement('div');
        welcomeModal.className = 'welcome-modal';
        welcomeModal.innerHTML = `
            <div class="welcome-content">
                <h3>Welcome Back!</h3>
                <p>Visit #${galleryState.user.visitCount}</p>
                <p>Continue exploring our collection</p>
                <button onclick="this.parentElement.parentElement.remove()">Continue</button>
            </div>
        `;
        document.body.appendChild(welcomeModal);
        
        gsap.from(welcomeModal, {
            opacity: 0,
            scale: 0.8,
            duration: 0.5,
            ease: 'back.out(1.7)'
        });
        
        setTimeout(() => {
            if (welcomeModal.parentElement) {
                gsap.to(welcomeModal, {
                    opacity: 0,
                    scale: 0.8,
                    duration: 0.3,
                    onComplete: () => welcomeModal.remove()
                });
            }
        }, 3000);
    }

    initializeInteractiveElements() {
        this.setupGestureControls();
        this.setupKeyboardShortcuts();
        this.setupMouseTracker();
        this.setupScrollEffects();
    }

    setupGestureControls() {
        let touchStartX = 0;
        let touchStartY = 0;
        
        document.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        });
        
        document.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            const touchEndY = e.changedTouches[0].clientY;
            
            const deltaX = touchEndX - touchStartX;
            const deltaY = touchEndY - touchStartY;
            
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                if (deltaX > 0) {
                    this.triggerSwipeRight();
                } else {
                    this.triggerSwipeLeft();
                }
            }
        });
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'ArrowLeft':
                    this.triggerPreviousArtwork();
                    break;
                case 'ArrowRight':
                    this.triggerNextArtwork();
                    break;
                case 't':
                case 'T':
                    this.cycleThemes();
                    break;
                case 'r':
                case 'R':
                    this.resetGallery();
                    break;
                case 'f':
                case 'F':
                    this.toggleFullscreen();
                    break;
            }
        });
    }

    setupMouseTracker() {
        let mouseTrail = [];
        const maxTrailLength = 10;

        document.addEventListener('mousemove', (e) => {
            mouseTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
            
            if (mouseTrail.length > maxTrailLength) {
                mouseTrail.shift();
            }

            this.updateMouseEffects(e.clientX, e.clientY);
        });
    }

    updateMouseEffects(x, y) {
        const floatingShapes = document.querySelectorAll('.shape');
        floatingShapes.forEach((shape, index) => {
            const rect = shape.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
            const influence = Math.max(0, 1 - distance / 200);
            
            if (influence > 0) {
                const offsetX = (x - centerX) * influence * 0.1;
                const offsetY = (y - centerY) * influence * 0.1;
                
                gsap.to(shape, {
                    x: offsetX,
                    y: offsetY,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        });
    }

    setupScrollEffects() {
        let ticking = false;

        function updateScrollEffects() {
            const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
            
            // Update background gradient based on scroll
            const hue = scrollPercent * 360;
            document.documentElement.style.setProperty('--scroll-hue', hue);
            
            ticking = false;
        }

        document.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        });
    }

    setupRealTimeUpdates() {
        setInterval(() => {
            this.updateLiveStats();
        }, 5000);

        setInterval(() => {
            this.rotateBackgroundEffect();
        }, 15000);
    }

    updateLiveStats() {
        const statsElements = document.querySelectorAll('.stat-number');
        statsElements.forEach(element => {
            const currentValue = parseInt(element.textContent);
            const increment = Math.floor(Math.random() * 3) + 1;
            this.animateNumber(element, currentValue + increment);
        });
    }

    animateNumber(element, targetValue) {
        const startValue = parseInt(element.textContent);
        const duration = 1000;
        const startTime = Date.now();

        function update() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = Math.floor(startValue + (targetValue - startValue) * progress);
            
            element.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        
        requestAnimationFrame(update);
    }

    rotateBackgroundEffect() {
        const shapes = document.querySelectorAll('.shape');
        shapes.forEach(shape => {
            const randomX = Math.random() * 100 - 50;
            const randomY = Math.random() * 100 - 50;
            
            gsap.to(shape, {
                x: randomX,
                y: randomY,
                duration: 2,
                ease: 'power2.inOut'
            });
        });
    }

    createDynamicControls() {
        const controlPanel = document.createElement('div');
        controlPanel.className = 'dynamic-controls';
        controlPanel.innerHTML = `
            <div class="control-panel">
                <button class="control-btn" onclick="dynamicManager.cycleThemes()" title="Change Theme (T)">
                    <i class="fas fa-palette"></i>
                </button>
                <button class="control-btn" onclick="dynamicManager.toggleSound()" title="Toggle Sound">
                    <i class="fas fa-volume-up"></i>
                </button>
                <button class="control-btn" onclick="dynamicManager.resetGallery()" title="Reset Gallery (R)">
                    <i class="fas fa-refresh"></i>
                </button>
                <button class="control-btn" onclick="dynamicManager.toggleFullscreen()" title="Fullscreen (F)">
                    <i class="fas fa-expand"></i>
                </button>
            </div>
        `;
        document.body.appendChild(controlPanel);
    }

    // Control Functions
    cycleThemes() {
        const themes = Object.keys(this.themes);
        const currentIndex = themes.indexOf(galleryState.gallery.currentTheme);
        const nextIndex = (currentIndex + 1) % themes.length;
        const nextTheme = themes[nextIndex];
        
        this.applyTheme(nextTheme);
        this.showNotification(`Theme changed to ${nextTheme}`);
    }

    toggleSound() {
        galleryState.gallery.soundEnabled = !galleryState.gallery.soundEnabled;
        localStorage.setItem('soundEnabled', galleryState.gallery.soundEnabled);
        
        const soundBtn = document.querySelector('.control-btn i.fa-volume-up');
        if (soundBtn) {
            soundBtn.className = galleryState.gallery.soundEnabled ? 'fas fa-volume-up' : 'fas fa-volume-mute';
        }
        
        this.showNotification(`Sound ${galleryState.gallery.soundEnabled ? 'enabled' : 'disabled'}`);
    }

    resetGallery() {
        // Reset cube to first position
        if (typeof initCubeGallery === 'function') {
            initCubeGallery();
        }
        
        // Reset theme
        this.applyTheme('default');
        
        // Reset scroll position
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        this.showNotification('Gallery reset');
    }

    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'dynamic-notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        gsap.fromTo(notification, 
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 0.3 }
        );
        
        setTimeout(() => {
            gsap.to(notification, {
                opacity: 0,
                y: -50,
                duration: 0.3,
                onComplete: () => notification.remove()
            });
        }, 2000);
    }

    // Gallery Control Functions
    triggerSwipeLeft() {
        document.dispatchEvent(new WheelEvent('wheel', { deltaY: 100 }));
    }

    triggerSwipeRight() {
        document.dispatchEvent(new WheelEvent('wheel', { deltaY: -100 }));
    }

    triggerNextArtwork() {
        this.triggerSwipeLeft();
    }

    triggerPreviousArtwork() {
        this.triggerSwipeRight();
    }
}

// Initialize Dynamic System
let dynamicManager;

// Enhanced Cube Gallery (keeping existing functionality)
function initCubeGallery() {
    const artworks = document.querySelectorAll('.artwork');
    const cubeGallery = document.querySelector('#spiral-gallery');
    const cubeContainer = document.querySelector('.spiral-container');

    let currentIndex = 0;
    let isScrolling = false;
    let scrollTimeout;
    let scrollAccumulator = 0;
    const scrollThreshold = 50;
    let autoRotateInterval;
    let isAutoRotating = true;

    const cubeSize = 600;
    const halfSize = cubeSize / 2;

    const faceArtworks = Array.from(artworks).slice(0, 6);
    if (artworks.length < 6) {
        console.warn('Cube gallery requires at least 6 artworks. Found:', artworks.length);
        return;
    } else if (artworks.length > 6) {
        Array.from(artworks).slice(6).forEach(el => {
            el.style.display = 'none';
        });
    }

    if (!faceArtworks.length || !cubeGallery || !cubeContainer) {
        console.error('Missing artworks or gallery elements');
        return;
    }

    const cubeFaces = [
        { name: 'front', tx: 0, ty: 0, tz: halfSize, rx: 0, ry: 0 },
        { name: 'right', tx: halfSize, ty: 0, tz: 0, rx: 0, ry: 90 },
        { name: 'back', tx: 0, ty: 0, tz: -halfSize, rx: 0, ry: 180 },
        { name: 'left', tx: -halfSize, ty: 0, tz: 0, rx: 0, ry: -90 },
        { name: 'top', tx: 0, ty: -halfSize, tz: 0, rx: 90, ry: 0 },
        { name: 'bottom', tx: 0, ty: halfSize, tz: 0, rx: -90, ry: 0 }
    ];

    faceArtworks.forEach((artwork, index) => {
        const face = cubeFaces[index];

        artwork.style.position = 'absolute';
        artwork.style.width = `${cubeSize}px`;
        artwork.style.height = `${cubeSize}px`;
        artwork.style.left = '50%';
        artwork.style.top = '50%';
        artwork.style.transform = `
            translate(-50%, -50%)
            translateX(${face.tx}px)
            translateY(${face.ty}px)
            translateZ(${face.tz}px)
            rotateX(${face.rx}deg)
            rotateY(${face.ry}deg)
        `;
        artwork.style.opacity = '0.3';
        artwork.style.zIndex = '1';
        artwork.style.transition = 'all 0.8s ease-out';
        artwork.style.transformStyle = 'preserve-3d';
        artwork.style.backfaceVisibility = 'hidden';
        artwork.style.filter = 'brightness(0.6)';
        artwork.style.scale = '0.7';
        artwork.style.borderRadius = '10px';
        artwork.style.overflow = 'hidden';
    });

    if (faceArtworks[0]) {
        faceArtworks[0].classList.add('active');
        faceArtworks[0].style.opacity = '1';
        faceArtworks[0].style.filter = 'brightness(1)';
        faceArtworks[0].style.scale = '1';
        faceArtworks[0].style.zIndex = '10';
    }

    function handleWheel(e) {
        e.preventDefault();
        e.stopPropagation();

        if (isScrolling) return;

        scrollAccumulator += e.deltaY;

        if (Math.abs(scrollAccumulator) < scrollThreshold) {
            return;
        }

        isScrolling = true;
        clearTimeout(scrollTimeout);

        let newIndex = currentIndex;

        if (scrollAccumulator > 0) {
            newIndex = (currentIndex + 1) % faceArtworks.length;
        } else if (scrollAccumulator < 0) {
            newIndex = (currentIndex - 1 + faceArtworks.length) % faceArtworks.length;
        }

        if (newIndex !== currentIndex) {
            rotateCube(newIndex);
        }

        scrollAccumulator = 0;

        scrollTimeout = setTimeout(() => {
            isScrolling = false;
        }, 600);
    }

    function rotateCube(newIndex) {
        const currentArtwork = faceArtworks[currentIndex];
        const newArtwork = faceArtworks[newIndex];

        if (!currentArtwork || !newArtwork) return;

        const targetFace = cubeFaces[newIndex];
        const targetRotateX = -targetFace.rx;
        const targetRotateY = -targetFace.ry;

        anime({
            targets: currentArtwork,
            opacity: 0.2,
            scale: 0.6,
            filter: 'brightness(0.4) blur(1px)',
            duration: 400,
            easing: 'easeInOutQuad',
            complete: () => {
                currentArtwork.classList.remove('active');
                currentArtwork.style.zIndex = '1';
            }
        });

        anime({
            targets: cubeContainer,
            rotateX: targetRotateX,
            rotateY: targetRotateY,
            duration: 800,
            easing: 'easeOutCubic',
            complete: () => {
                cubeContainer.classList.remove('rotating');
            }
        });

        setTimeout(() => {
            currentIndex = newIndex;
            newArtwork.classList.add('active');
            newArtwork.style.zIndex = '10';

            anime({
                targets: newArtwork,
                opacity: 1,
                scale: 1,
                filter: 'brightness(1) blur(0px)',
                duration: 600,
                delay: 200,
                easing: 'easeOutBack',
                complete: () => {
                    newArtwork.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.3)';
                }
            });
        }, 100);

        // Update progress bar
        const progressBar = document.querySelector('.progress-bar');
        if (progressBar) {
            const progress = ((newIndex + 1) / faceArtworks.length) * 100;
            progressBar.style.width = `${progress}%`;
        }
    }

    cubeGallery.addEventListener('wheel', handleWheel, { passive: false });
    cubeContainer.style.perspective = '2000px';
    cubeContainer.style.transformStyle = 'preserve-3d';

    function startAutoRotation() {
        if (autoRotateInterval) clearInterval(autoRotateInterval);
        
        autoRotateInterval = setInterval(() => {
            if (!isScrolling && isAutoRotating) {
                const nextIndex = (currentIndex + 1) % faceArtworks.length;
                rotateCube(nextIndex);
            }
        }, 3000);
    }
    
    function stopAutoRotation() {
        if (autoRotateInterval) {
            clearInterval(autoRotateInterval);
            autoRotateInterval = null;
        }
    }
    
    startAutoRotation();
    
    cubeGallery.addEventListener('wheel', () => {
        stopAutoRotation();
        setTimeout(() => {
            if (isAutoRotating) startAutoRotation();
        }, 5000);
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            e.preventDefault();
            isAutoRotating = !isAutoRotating;
            if (isAutoRotating) {
                startAutoRotation();
            } else {
                stopAutoRotation();
            }
        }
    });

    // Store reference for dynamic controls
    window.cubeGallery = {
        rotateCube,
        currentIndex,
        faceArtworks
    };
}

// Artist redirect function
function redirectToPortfolio(artistName) {
    window.location.href = `portfolio.html?artist=${encodeURIComponent(artistName)}`;
}

// Smooth scroll function
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', function() {
    // Hide loader after animation
    const loader = document.querySelector('#loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
            loader.style.top = '-100%';
            loader.style.opacity = '0';
        }, 4000);
    }
    
    // Initialize dynamic system
    dynamicManager = new DynamicContentManager();
    
    // Initialize cube gallery
    initCubeGallery();
    
    // Initialize other functions if available
    if (typeof initLocomotiveScroll === 'function') {
        initLocomotiveScroll();
    }
    
    if (typeof initTabFunctionality === 'function') {
        initTabFunctionality();
    }
    
    if (typeof initPageAnimations === 'function') {
        initPageAnimations();
    }

    // Enhanced animations
    const animateCounter = (element) => {
        const target = parseInt(element.dataset.target);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.stat-number');
                counters.forEach(counter => animateCounter(counter));
                observer.unobserve(entry.target);
            }
        });
    });
    
    const statsContainer = document.querySelector('.stats-container');
    if (statsContainer) {
        observer.observe(statsContainer);
    }

    // Enhanced hero animations
    gsap.timeline()
        .from('.hero-title .title-line', {
            duration: 1.2,
            y: 100,
            opacity: 0,
            stagger: 0.2,
            ease: 'power3.out'
        })
        .from('.hero-description', {
            duration: 1,
            y: 30,
            opacity: 0,
            ease: 'power2.out'
        }, '-=0.5')
        .from('.hero-buttons .btn-primary, .hero-buttons .btn-secondary', {
            duration: 0.8,
            y: 30,
            opacity: 0,
            stagger: 0.1,
            ease: 'power2.out'
        }, '-=0.3')
        .from('.stats-container', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power2.out'
        }, '-=0.5');

    // Floating shapes animation
    gsap.to('.shape', {
        duration: 20,
        rotation: 360,
        repeat: -1,
        ease: 'none',
        stagger: {
            each: 2,
            from: 'random'
        }
    });

    gsap.to('.shape', {
        duration: 15,
        y: '+=100',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: {
            each: 1.5,
            from: 'random'
        }
    });
});

// Backup initialization
window.addEventListener('load', () => {
    setTimeout(() => {
        initCubeGallery();
    }, 100);
});
