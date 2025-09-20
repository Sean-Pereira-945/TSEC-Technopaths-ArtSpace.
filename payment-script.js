// Artist-specific patronage data
const artistPatronageData = {
    'Sarah Chen': {
        name: 'Sarah Chen',
        specialty: 'Contemporary Mixed Media Artist',
        avatar: 'https://imgs.search.brave.com/lMgbdK9sgspV-Uj6oxnEHSkZVa-IPcMyqeMWKmWnYfo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91dW5h/dGVrLmNvbS9jZG4v/c2hvcC9hcnRpY2xl/cy9OZXJpX094bWFu/X01lcmdpbmdfQmlv/bG9neV9BcmNoaXRl/Y3R1cmVfYW5kX0Rp/Z2l0YWxfRmFicmlj/YXRpb25fZmZkYTlk/OWItNDg3MC00OTk2/LWJiZDktMWY3ZWUw/OTI2NDc2LmpwZz92/PTE3NTIzOTc2MjMm/d2lkdGg9MTEwMA',
        patronageDescription: 'Support Sarah\'s innovative mixed media art and gain exclusive access to her creative process.',
        tiers: [
            {
                name: 'Creative Supporter',
                amount: 10,
                benefits: [
                    'Monthly behind-the-scenes videos',
                    'Early access to new artworks',
                    'Digital wallpaper collection',
                    'Exclusive artist updates'
                ]
            },
            {
                name: 'Mixed Media Advocate',
                amount: 25,
                featured: true,
                benefits: [
                    'All Creative Supporter benefits',
                    'Monthly digital art prints',
                    'Live studio sessions access',
                    '15% discount on purchases',
                    'Technique tutorial videos'
                ]
            },
            {
                name: 'Art Collector',
                amount: 50,
                benefits: [
                    'All Mixed Media Advocate benefits',
                    'Quarterly physical print delivery',
                    'Personal video calls with Sarah',
                    '25% discount on all works',
                    'First access to new collections',
                    'Custom artwork commission priority'
                ]
            }
        ]
    },
    'Marcus Rodriguez': {
        name: 'Marcus Rodriguez',
        specialty: 'Abstract Oil Painter',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop',
        patronageDescription: 'Join Marcus in exploring the depths of abstract expression through bold oil paintings.',
        tiers: [
            {
                name: 'Abstract Explorer',
                amount: 12,
                benefits: [
                    'Monthly painting process videos',
                    'Color theory insights',
                    'Digital sketch collection',
                    'Artist journal excerpts'
                ]
            },
            {
                name: 'Urban Canvas Patron',
                amount: 28,
                featured: true,
                benefits: [
                    'All Abstract Explorer benefits',
                    'High-quality art prints monthly',
                    'Virtual studio tours',
                    '20% discount on originals',
                    'Brushwork technique tutorials'
                ]
            },
            {
                name: 'Master Collector',
                amount: 60,
                benefits: [
                    'All Urban Canvas Patron benefits',
                    'Original small canvas quarterly',
                    'In-person studio visits',
                    '30% discount on all works',
                    'Custom abstract commission',
                    'Painting supplies recommendations'
                ]
            }
        ]
    },
    'Elena Volkov': {
        name: 'Elena Volkov',
        specialty: 'Digital Art Pioneer',
        avatar: 'https://imgs.search.brave.com/gP0lyLE_YUt-IqReCYHh4XCRSsw5sO35rvxinb1I630/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9ub3Vy/LWJpc2hvdXR5LTY4/M2RkNzQ0ODcxNWIu/cG5nP2Nyb3A9MS4w/MHh3OjAuNzMweGg7/MCwwLjAzOTZ4aCZy/ZXNpemU9MzYwOio',
        patronageDescription: 'Support cutting-edge digital art innovation and explore the future of creative technology.',
        tiers: [
            {
                name: 'Digital Pioneer',
                amount: 15,
                benefits: [
                    'Software tutorials and tips',
                    'NFT creation insights',
                    '4K digital artwork collection',
                    'Technology trends updates'
                ]
            },
            {
                name: 'Tech Art Innovator',
                amount: 35,
                featured: true,
                benefits: [
                    'All Digital Pioneer benefits',
                    'Interactive digital experiences',
                    'VR artwork previews',
                    '18% discount on digital works',
                    'Live coding sessions access'
                ]
            },
            {
                name: 'Future Collector',
                amount: 70,
                benefits: [
                    'All Tech Art Innovator benefits',
                    'Custom digital installation',
                    'AR artwork experiences',
                    '25% discount on all digital art',
                    'Exclusive metaverse gallery access',
                    'Personal tech consultation'
                ]
            }
        ]
    },
    'David Kim': {
        name: 'David Kim',
        specialty: 'Installation Artist',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop',
        patronageDescription: 'Support transformative space installations that redefine how we experience art.',
        tiers: [
            {
                name: 'Space Supporter',
                amount: 20,
                benefits: [
                    'Installation process documentation',
                    'Concept sketches and plans',
                    'Space transformation videos',
                    'Artist philosophy discussions'
                ]
            },
            {
                name: 'Installation Advocate',
                amount: 45,
                featured: true,
                benefits: [
                    'All Space Supporter benefits',
                    'Private installation previews',
                    'Interactive design sessions',
                    '20% discount on small installations',
                    'Material sourcing insights'
                ]
            },
            {
                name: 'Space Transformer',
                amount: 80,
                benefits: [
                    'All Installation Advocate benefits',
                    'Custom small-scale installation',
                    'Collaborative design opportunities',
                    '30% discount on commissioned works',
                    'Exhibition opening VIP access',
                    'Personal space consultation'
                ]
            }
        ]
    },
    'Isabella Torres': {
        name: 'Isabella Torres',
        specialty: 'Conceptual Photographer',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop',
        patronageDescription: 'Join Isabella in exploring identity and memory through powerful conceptual photography.',
        tiers: [
            {
                name: 'Visual Storyteller',
                amount: 8,
                benefits: [
                    'Photo story breakdowns',
                    'Behind-the-scenes content',
                    'High-res digital photo collection',
                    'Conceptual development insights'
                ]
            },
            {
                name: 'Narrative Patron',
                amount: 22,
                featured: true,
                benefits: [
                    'All Visual Storyteller benefits',
                    'Limited edition photo prints',
                    'Photography technique workshops',
                    '15% discount on photo series',
                    'Model and setup stories'
                ]
            },
            {
                name: 'Memory Keeper',
                amount: 40,
                benefits: [
                    'All Narrative Patron benefits',
                    'Signed limited edition prints',
                    'Personal photo sessions',
                    '25% discount on all works',
                    'Story development collaboration',
                    'Exhibition catalog inclusion'
                ]
            }
        ]
    },
    'James Wilson': {
        name: 'James Wilson',
        specialty: 'Street Artist & Muralist',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=400&fit=crop',
        patronageDescription: 'Support community-focused street art that brings powerful stories to public spaces.',
        tiers: [
            {
                name: 'Street Supporter',
                amount: 15,
                benefits: [
                    'Mural creation time-lapses',
                    'Community story features',
                    'Street art photography collection',
                    'Social impact updates'
                ]
            },
            {
                name: 'Community Advocate',
                amount: 30,
                featured: true,
                benefits: [
                    'All Street Supporter benefits',
                    'Mural location map access',
                    'Community event invitations',
                    '20% discount on canvas works',
                    'Spray painting workshops'
                ]
            },
            {
                name: 'Urban Patron',
                amount: 55,
                benefits: [
                    'All Community Advocate benefits',
                    'Custom mural design collaboration',
                    'Private community tour',
                    '25% discount on all works',
                    'Mural dedication opportunity',
                    'Artist advocacy projects'
                ]
            }
        ]
    },
    'Maya Patel': {
        name: 'Maya Patel',
        specialty: 'Watercolor Illustrator',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=400&fit=crop',
        patronageDescription: 'Support delicate watercolor artistry that captures nature\'s beauty and human emotion.',
        tiers: [
            {
                name: 'Watercolor Friend',
                amount: 12,
                benefits: [
                    'Painting technique videos',
                    'Color mixing tutorials',
                    'Digital watercolor collection',
                    'Nature study sketches'
                ]
            },
            {
                name: 'Botanical Patron',
                amount: 25,
                featured: true,
                benefits: [
                    'All Watercolor Friend benefits',
                    'Monthly botanical prints',
                    'Live painting sessions',
                    '15% discount on originals',
                    'Seasonal color palette guides'
                ]
            },
            {
                name: 'Nature Collector',
                amount: 45,
                benefits: [
                    'All Botanical Patron benefits',
                    'Original watercolor pieces',
                    'Personal botanical illustration',
                    '30% discount on all works',
                    'Garden painting excursions',
                    'Custom nature commission'
                ]
            }
        ]
    }
};

let selectedTier = null;
let currentArtist = null;

document.addEventListener('DOMContentLoaded', function() {
    loadArtistData();
    setupEventListeners();
    setupFormValidation();
});

function loadArtistData() {
    const urlParams = new URLSearchParams(window.location.search);
    const artistName = urlParams.get('artist') || 'Sarah Chen';
    
    currentArtist = artistPatronageData[artistName] || artistPatronageData['Sarah Chen'];
    
    // Update artist information
    document.getElementById('payment-artist-name').textContent = currentArtist.name;
    document.getElementById('payment-artist-specialty').textContent = currentArtist.specialty;
    document.getElementById('payment-artist-avatar').src = currentArtist.avatar;
    document.getElementById('success-artist-name').textContent = currentArtist.name;
    
    // Update patronage description
    document.querySelector('.patronage-info p').textContent = currentArtist.patronageDescription;
    
    // Generate tier cards
    generateTierCards();
}

function generateTierCards() {
    const tiersGrid = document.querySelector('.tiers-grid');
    tiersGrid.innerHTML = '';
    
    currentArtist.tiers.forEach((tier, index) => {
        const tierCard = document.createElement('div');
        tierCard.className = `tier-card ${tier.featured ? 'featured' : ''}`;
        tierCard.setAttribute('data-amount', tier.amount);
        
        const benefitsList = tier.benefits.map(benefit => 
            `<li><i class="fas fa-check"></i> ${benefit}</li>`
        ).join('');
        
        tierCard.innerHTML = `
            ${tier.featured ? '<div class="tier-badge">Most Popular</div>' : ''}
            <div class="tier-header">
                <h3>${tier.name}</h3>
                <div class="price">$${tier.amount}<span>/month</span></div>
            </div>
            <ul class="benefits">
                ${benefitsList}
            </ul>
        `;
        
        tierCard.addEventListener('click', function() {
            selectTier(this, tier);
        });
        
        tiersGrid.appendChild(tierCard);
    });
}

function setupEventListeners() {
    // Form submission
    document.getElementById('payment-form').addEventListener('submit', handlePaymentSubmission);
    
    // Input formatting
    document.getElementById('card-number').addEventListener('input', formatCardNumber);
    document.getElementById('expiry').addEventListener('input', formatExpiry);
    document.getElementById('cvv').addEventListener('input', formatCVV);
}

function selectTier(tierCard, tierData) {
    // Remove previous selection
    document.querySelectorAll('.tier-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Add selection to clicked tier
    tierCard.classList.add('selected');
    
    selectedTier = {
        amount: tierData.amount,
        name: tierData.name,
        benefits: tierData.benefits
    };
    
    // Update display
    document.getElementById('selected-tier-name').textContent = tierData.name;
    document.getElementById('selected-tier-amount').textContent = `$${tierData.amount}/month`;
    
    // Update payment summary
    updatePaymentSummary(tierData.amount);
    
    // Enable submit button if form is valid
    validateForm();
}

function updatePaymentSummary(amount) {
    const platformFee = amount * 0.03;
    const total = amount + platformFee;
    
    document.getElementById('monthly-amount').textContent = `$${amount.toFixed(2)}`;
    document.getElementById('platform-fee').textContent = `$${platformFee.toFixed(2)}`;
    document.getElementById('total-amount').textContent = `$${total.toFixed(2)}`;
}

function formatCardNumber(e) {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    e.target.value = value;
}

function formatExpiry(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    e.target.value = value;
}

function formatCVV(e) {
    e.target.value = e.target.value.replace(/\D/g, '');
}

function setupFormValidation() {
    const inputs = document.querySelectorAll('#payment-form input');
    inputs.forEach(input => {
        input.addEventListener('input', validateForm);
        input.addEventListener('blur', validateForm);
    });
}

function validateForm() {
    const form = document.getElementById('payment-form');
    const submitBtn = document.querySelector('.submit-payment-btn');
    
    const requiredFields = form.querySelectorAll('input[required]');
    let allValid = selectedTier !== null;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            allValid = false;
        }
    });
    
    // Additional validation
    const email = document.getElementById('email').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiry = document.getElementById('expiry').value;
    const cvv = document.getElementById('cvv').value;
    
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const cardValid = cardNumber.replace(/\s/g, '').length >= 16;
    const expiryValid = /^\d{2}\/\d{2}$/.test(expiry);
    const cvvValid = cvv.length >= 3;
    
    allValid = allValid && emailValid && cardValid && expiryValid && cvvValid;
    
    submitBtn.disabled = !allValid;
    
    // Update submit button text with artist name
    if (currentArtist) {
        submitBtn.innerHTML = `<i class="fas fa-heart"></i> Support ${currentArtist.name.split(' ')[0]}`;
    }
}

function handlePaymentSubmission(e) {
    e.preventDefault();
    
    if (!selectedTier) {
        alert('Please select a patronage tier');
        return;
    }
    
    // Show loading state
    const submitBtn = document.querySelector('.submit-payment-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing Payment...';
    submitBtn.disabled = true;
    
    // Simulate payment processing with artist-specific delay
    const processingTime = currentArtist.name === 'Elena Volkov' ? 3000 : 2000; // Longer for digital art complexity
    
    setTimeout(() => {
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Show success modal with artist-specific message
        showSuccessModal();
        
        // Store patronage data (in real app, this would go to backend)
        storePatronageData();
    }, processingTime);
}

function storePatronageData() {
    const patronageRecord = {
        artist: currentArtist.name,
        tier: selectedTier.name,
        amount: selectedTier.amount,
        benefits: selectedTier.benefits,
        timestamp: new Date().toISOString(),
        patron: {
            name: `${document.getElementById('first-name').value} ${document.getElementById('last-name').value}`,
            email: document.getElementById('email').value
        }
    };
    
    // Store in localStorage (in real app, this would be sent to backend)
    let patronageHistory = JSON.parse(localStorage.getItem('patronageHistory') || '[]');
    patronageHistory.push(patronageRecord);
    localStorage.setItem('patronageHistory', JSON.stringify(patronageHistory));
    
    console.log('Patronage recorded:', patronageRecord);
}

function showSuccessModal() {
    const modal = document.getElementById('success-modal');
    const successContent = modal.querySelector('.success-content');
    
    // Update success message with artist-specific content
    const artistSpecificMessage = getArtistSpecificSuccessMessage();
    modal.querySelector('p').innerHTML = artistSpecificMessage;
    
    // Add tier-specific benefits preview
    if (selectedTier) {
        const benefitsPreview = document.createElement('div');
        benefitsPreview.className = 'success-benefits';
        benefitsPreview.innerHTML = `
            <h4>Your ${selectedTier.name} Benefits:</h4>
            <ul>
                ${selectedTier.benefits.slice(0, 3).map(benefit => `<li>${benefit}</li>`).join('')}
                ${selectedTier.benefits.length > 3 ? '<li>...and more!</li>' : ''}
            </ul>
        `;
        
        // Insert before success actions
        const successActions = modal.querySelector('.success-actions');
        successContent.insertBefore(benefitsPreview, successActions);
    }
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Auto-redirect to portfolio after 10 seconds
    setTimeout(() => {
        if (modal.style.display === 'block') {
            window.location.href = `portfolio.html?artist=${encodeURIComponent(currentArtist.name)}`;
        }
    }, 10000);
}

function getArtistSpecificSuccessMessage() {
    const messages = {
        'Sarah Chen': `Thank you for supporting <strong>${currentArtist.name}</strong>! Your patronage helps Sarah continue pushing the boundaries of mixed media art and exploring new creative territories.`,
        'Marcus Rodriguez': `Welcome to Marcus's creative journey! Your support enables him to create bold abstract works that capture the energy and soul of urban life.`,
        'Elena Volkov': `You're now part of the digital art revolution! Your patronage helps Elena pioneer new technologies and create immersive artistic experiences.`,
        'David Kim': `Thank you for supporting transformative art! Your patronage enables David to create installations that redefine how we experience and interact with spaces.`,
        'Isabella Torres': `Welcome to Isabella's visual storytelling community! Your support helps her explore complex themes of identity and memory through powerful photography.`,
        'James Wilson': `You're now supporting community-focused art! Your patronage helps James bring powerful stories and social commentary to public spaces through street art.`,
        'Maya Patel': `Thank you for supporting delicate artistry! Your patronage enables Maya to continue capturing nature's beauty and human emotion through watercolor masterpieces.`
    };
    
    return messages[currentArtist.name] || `Thank you for supporting <strong>${currentArtist.name}</strong>! Your patronage helps artists continue creating amazing work.`;
}

// Add success benefits styling
const style = document.createElement('style');
style.textContent = `
    .success-benefits {
        margin: 20px 0;
        padding: 20px;
        background: rgba(255, 0, 166, 0.05);
        border-radius: 10px;
        border-left: 4px solid #ff00a6;
    }
    
    .success-benefits h4 {
        color: #333;
        margin-bottom: 10px;
        font-size: 1.2rem;
    }
    
    .success-benefits ul {
        list-style: none;
        padding: 0;
    }
    
    .success-benefits li {
        padding: 5px 0;
        color: #666;
        position: relative;
        padding-left: 20px;
    }
    
    .success-benefits li:before {
        content: "✓";
        position: absolute;
        left: 0;
        color: #ff00a6;
        font-weight: bold;
    }
`;
document.head.appendChild(style);

// GSAP Animations with artist-specific timing
gsap.from(".artist-summary", {duration: 1, y: 50, opacity: 0, ease: "power2.out"});
gsap.from(".tiers-grid .tier-card", {
    duration: 0.6,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    delay: 0.3,
    ease: "power2.out"
});
gsap.from(".payment-form-section", {duration: 1, y: 50, opacity: 0, delay: 0.6, ease: "power2.out"});
