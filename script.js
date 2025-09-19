function initSpiralGallery() {
    const artworks = document.querySelectorAll('.artwork');
    const spiralGallery = document.querySelector('#spiral-gallery');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const spiralContainer = document.querySelector('.spiral-container');

    let currentIndex = 0;
    let isScrolling = false;
    let scrollTimeout;
    let scrollAccumulator = 0;
    const scrollThreshold = 50;
    let autoRotateInterval;
    let isAutoRotating = true;

    // Ensure we use exactly 6 artworks for a cube
    const facesArtworks = Array.from(artworks).slice(0, 6);
    if (artworks.length !== 6) {
        console.warn('Cube gallery expects exactly 6 artworks. Found:', artworks.length, '→ using first 6.');
        // Hide the rest to avoid layout issues
        Array.from(artworks).slice(6).forEach(el => {
            el.style.display = 'none';
        });
    }

    if (!facesArtworks.length || !spiralGallery || !spiralContainer) {
        console.error('Missing artworks or gallery elements');
        return;
    }

    // Define cube face positions [name, translateX, translateY, translateZ, rotateX, rotateY]
    const cubeFaces = [
        { name: 'front',   tx: 0, ty: 0, tz: 300, rx: 0, ry: 0 },
        { name: 'right',   tx: 300, ty: 0, tz: 0, rx: 0, ry: 90 },
        { name: 'back',    tx: 0, ty: 0, tz: -300, rx: 0, ry: 180 },
        { name: 'left',    tx: -300, ty: 0, tz: 0, rx: 0, ry: -90 },
        { name: 'top',     tx: 0, ty: -300, tz: 0, rx: 90, ry: 0 },
        { name: 'bottom',  tx: 0, ty: 300, tz: 0, rx: -90, ry: 0 }
    ];

    // Apply cube face transforms
    facesArtworks.forEach((artwork, index) => {
        const face = cubeFaces[index % 6]; // ensure we don't go out of bounds

        artwork.style.position = 'absolute';
        artwork.style.width = '300px';
        artwork.style.height = '300px';
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

    // Show first face (front) prominently
    if (facesArtworks[0]) {
        facesArtworks[0].classList.add('active');
        facesArtworks[0].style.opacity = '1';
        facesArtworks[0].style.filter = 'brightness(1)';
        facesArtworks[0].style.scale = '1';
        facesArtworks[0].style.zIndex = '10';
    }

    // Mouse wheel handler
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
            // Scroll down → next face
            newIndex = (currentIndex + 1) % facesArtworks.length;
        } else if (scrollAccumulator < 0) {
            // Scroll up → previous face
            newIndex = (currentIndex - 1 + facesArtworks.length) % facesArtworks.length;
        }

        if (newIndex !== currentIndex) {
            rotateCube(newIndex);
        }

        scrollAccumulator = 0;

        scrollTimeout = setTimeout(() => {
            isScrolling = false;
        }, 600); // slightly longer for smoother UX
    }

    // Rotate cube to specified face index
    function rotateCube(newIndex) {
        const currentArtwork = facesArtworks[currentIndex];
        const newArtwork = facesArtworks[newIndex];

        if (!currentArtwork || !newArtwork) return;

        // Get target rotation based on face
        const targetFace = cubeFaces[newIndex % 6];
        const currentFace = cubeFaces[currentIndex % 6];

        // Animate current face out
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

        // Animate container to new orientation
        anime({
            targets: spiralContainer,
            rotateX: targetFace.rx,
            rotateY: targetFace.ry,
            duration: 800,
            easing: 'easeOutCubic',
            complete: () => {
                spiralContainer.classList.remove('rotating');
            }
        });

        // Highlight new face
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

        // Update scroll indicator
        if (scrollIndicator) {
            const progress = ((currentIndex + 1) / facesArtworks.length) * 100;
            const indicatorText = scrollIndicator.querySelector('p');

            anime({
                targets: { value: 0 },
                value: Math.round(progress),
                duration: 800,
                easing: 'easeOutCubic',
                update: function(anim) {
                    indicatorText.textContent = `Face ${currentIndex + 1} of ${facesArtworks.length} • ${Math.round(anim.animatables[0].target.value)}%`;
                }
            });
        }
    }

    // Add event listeners
    spiralGallery.addEventListener('wheel', handleWheel, { passive: false });

    // Prevent page scroll
    spiralGallery.addEventListener('wheel', (e) => {
        e.preventDefault();
        e.stopPropagation();
    }, { passive: false });

    // Initialize indicator
    if (scrollIndicator) {
        scrollIndicator.querySelector('p').textContent = `Face 1 of ${facesArtworks.length} • 5%`;
    }

    // Interactive hover/click effects (unchanged from your original)
    facesArtworks.forEach((artwork, index) => {
        const artworkInfo = artwork.querySelector('.artwork-info');

        artwork.addEventListener('mouseenter', () => {
            if (artwork.classList.contains('active')) {
                anime({
                    targets: artworkInfo,
                    opacity: 1,
                    translateY: 0,
                    duration: 300,
                    easing: 'easeOutExpo'
                });
            }
        });

        artwork.addEventListener('mouseleave', () => {
            anime({
                targets: artworkInfo,
                opacity: 0,
                translateY: 20,
                duration: 300,
                easing: 'easeOutExpo'
            });
        });

        artwork.addEventListener('click', () => {
            if (artwork.classList.contains('active')) {
                const title = artwork.querySelector('h4')?.textContent || 'Untitled';
                const medium = artwork.querySelector('p')?.textContent || '';

                const detailView = document.createElement('div');
                detailView.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: rgba(255, 255, 255, 0.95);
                    padding: 30px;
                    border-radius: 20px;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
                    z-index: 1000;
                    max-width: 400px;
                    text-align: center;
                    backdrop-filter: blur(10px);
                `;

                detailView.innerHTML = `
                    <h3 style="font-size: 24px; margin-bottom: 10px; color: #333;">${title}</h3>
                    <p style="font-size: 16px; color: #666; margin-bottom: 15px;">${medium}</p>
                    <p style="font-size: 14px; color: #888; line-height: 1.6;">
                        This contemporary artwork represents the intersection of traditional techniques 
                        and modern expression, showcasing the artist's unique perspective on contemporary themes.
                    </p>
                    <button onclick="this.parentElement.remove()" style="
                        margin-top: 20px;
                        padding: 10px 20px;
                        background: linear-gradient(135deg, #ff00a6, #007bff);
                        color: white;
                        border: none;
                        border-radius: 25px;
                        cursor: pointer;
                        font-size: 14px;
                    ">Close</button>
                `;

                document.body.appendChild(detailView);

                detailView.style.opacity = '0';
                detailView.style.transform = 'translate(-50%, -50%) scale(0.8)';
                anime({
                    targets: detailView,
                    opacity: 1,
                    scale: 1,
                    duration: 400,
                    easing: 'easeOutExpo'
                });
            }
        });
    });

    // Ensure container has perspective for 3D effect
    spiralContainer.style.perspective = '1000px';
    spiralContainer.style.transformStyle = 'preserve-3d';
    
    // Auto-rotation functionality
    function startAutoRotation() {
        if (autoRotateInterval) clearInterval(autoRotateInterval);
        
        autoRotateInterval = setInterval(() => {
            if (!isScrolling && isAutoRotating) {
                const nextIndex = (currentIndex + 1) % facesArtworks.length;
                rotateCube(nextIndex);
            }
        }, 3000); // Rotate every 3 seconds
    }
    
    function stopAutoRotation() {
        if (autoRotateInterval) {
            clearInterval(autoRotateInterval);
            autoRotateInterval = null;
        }
    }
    
    // Start auto-rotation
    startAutoRotation();
    
    // Pause auto-rotation on user interaction
    spiralGallery.addEventListener('wheel', () => {
        stopAutoRotation();
        setTimeout(() => {
            if (isAutoRotating) startAutoRotation();
        }, 5000); // Resume after 5 seconds of no interaction
    });
    
    // Toggle auto-rotation with spacebar
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
}

// Remove loader to fix black screen - IMMEDIATE FIX
document.addEventListener('DOMContentLoaded', () => {
    // Hide loader immediately
    const loader = document.querySelector('#loader');
    if (loader) {
        loader.classList.add('hidden');
        loader.style.top = '-100%';
    }
    
    // Also hide after 2 seconds as backup
    setTimeout(() => {
        if (loader) {
            loader.style.top = '-100%';
        }
    }, 2000);
});

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Locomotive Scroll first
    if (typeof initLocomotiveScroll === 'function') {
        initLocomotiveScroll();
    }
    
    // Initialize spiral gallery
    initSpiralGallery();
    
    // Initialize tab functionality
    if (typeof initTabFunctionality === 'function') {
        initTabFunctionality();
    }
    
    // Initialize other animations
    if (typeof initPageAnimations === 'function') {
        initPageAnimations();
    }
});

// Also initialize on window load as backup
window.addEventListener('load', () => {
    // Window loaded, re-initializing spiral gallery
    setTimeout(() => {
        initSpiralGallery();
    }, 100);
});