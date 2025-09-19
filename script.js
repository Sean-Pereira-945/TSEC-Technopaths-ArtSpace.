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
    let horizontalOffset = 0;

    if (!artworks.length || !spiralGallery || !spiralContainer) {
        console.error('Missing artworks or gallery elements');
        return;
    }

    // Position artworks in a horizontal line for smooth left-to-right movement
    artworks.forEach((artwork, index) => {
        const spacing = 400; // Distance between artworks
        const xPosition = index * spacing;

        artwork.style.position = 'absolute';
        artwork.style.width = '300px';
        artwork.style.height = '300px';
        artwork.style.left = '50%';
        artwork.style.top = '50%';
        artwork.style.transform = `
            translate(-50%, -50%)
            translateX(${xPosition}px)
            translateZ(0px)
        `;
        artwork.style.opacity = index === 0 ? '1' : '0.4';
        artwork.style.zIndex = '1';
        artwork.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        artwork.style.transformStyle = 'preserve-3d';
        artwork.style.backfaceVisibility = 'hidden';
        artwork.style.filter = index === 0 ? 'brightness(1)' : 'brightness(0.6)';
        artwork.style.scale = index === 0 ? '1' : '0.8';
        artwork.style.borderRadius = '10px';
        artwork.style.overflow = 'hidden';
    });

    // Show first artwork prominently
    if (artworks[0]) {
        artworks[0].classList.add('active');
        artworks[0].style.zIndex = '10';
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
            newIndex = (currentIndex + 1) % artworks.length;
        } else if (scrollAccumulator < 0) {
            // Scroll up → previous face
            newIndex = (currentIndex - 1 + artworks.length) % artworks.length;
        }

        if (newIndex !== currentIndex) {
            moveToArtwork(newIndex);
        }

        scrollAccumulator = 0;

        scrollTimeout = setTimeout(() => {
            isScrolling = false;
        }, 600); // slightly longer for smoother UX
    }

    // Move to specified artwork with horizontal animation
    function moveToArtwork(newIndex) {
        const currentArtwork = artworks[currentIndex];
        const newArtwork = artworks[newIndex];

        if (!currentArtwork || !newArtwork) return;

        // Calculate horizontal offset to center the new artwork
        const spacing = 400;
        horizontalOffset = -newIndex * spacing;

        // Animate current face out
        if (currentArtwork.classList.contains('active')) {
            anime({
                targets: currentArtwork,
                opacity: 0.4,
                scale: 0.8,
                filter: 'brightness(0.6)',
                duration: 400,
                easing: 'easeInOutQuad',
                complete: () => {
                    currentArtwork.classList.remove('active');
                    currentArtwork.style.zIndex = '1';
                }
            });
        }

        // Animate all artworks to new positions
        artworks.forEach((artwork, index) => {
            const spacing = 400;
            const newXPosition = (index - newIndex) * spacing;
            
            anime({
                targets: artwork,
                translateX: newXPosition,
                duration: 800,
                easing: 'easeOutCubic'
            });
        });

        // Highlight new artwork
        setTimeout(() => {
            currentIndex = newIndex;
            newArtwork.classList.add('active');
            newArtwork.style.zIndex = '10';

            anime({
                targets: newArtwork,
                opacity: 1,
                scale: 1,
                filter: 'brightness(1)',
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
            const progress = ((currentIndex + 1) / artworks.length) * 100;
            const indicatorText = scrollIndicator.querySelector('p');

            anime({
                targets: { value: 0 },
                value: Math.round(progress),
                duration: 800,
                easing: 'easeOutCubic',
                update: function(anim) {
                    indicatorText.textContent = `Artwork ${currentIndex + 1} of ${artworks.length} • ${Math.round(anim.animatables[0].target.value)}%`;
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
        scrollIndicator.querySelector('p').textContent = `Artwork 1 of ${artworks.length} • 5%`;
    }

    // Interactive hover/click effects (unchanged from your original)
    artworks.forEach((artwork, index) => {
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
    spiralContainer.style.overflow = 'hidden';
    
    // Auto-rotation functionality
    function startAutoRotation() {
        if (autoRotateInterval) clearInterval(autoRotateInterval);
        
        autoRotateInterval = setInterval(() => {
            if (!isScrolling && isAutoRotating) {
                const nextIndex = (currentIndex + 1) % artworks.length;
                moveToArtwork(nextIndex);
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
    initLocomotiveScroll();
    
    // Initialize spiral gallery
    initSpiralGallery();
    
    // Initialize tab functionality
    initTabFunctionality();
    
    // Initialize other animations
    initPageAnimations();
});

// Also initialize on window load as backup
window.addEventListener('load', () => {
    // Window loaded, re-initializing spiral gallery
    setTimeout(() => {
        initSpiralGallery();
    }, 100);
});