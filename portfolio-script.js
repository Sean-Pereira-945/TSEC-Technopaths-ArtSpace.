// Sample artwork data for each artist
const artworksDatabase = {
    'Sarah Chen': [
        {
            id: 1,
            title: "Urban Dreams",
            medium: "Mixed Media on Canvas, 2024",
            image: "imgs-painting-scketches/img1.jpg",
            category: "paintings",
            views: 245,
            comments: 12,
            likes: 89,
            description: "An exploration of urban landscapes through mixed media techniques, blending traditional painting with digital elements."
        },
        {
            id: 2,
            title: "Abstract Emotions",
            medium: "Acrylic on Canvas, 2024",
            image: "imgs-painting-scketches/img2.jpg",
            category: "paintings",
            views: 312,
            comments: 18,
            likes: 156,
            description: "A vibrant representation of human emotions through abstract forms and bold color choices."
        },
        {
            id: 3,
            title: "Digital Synthesis",
            medium: "Digital Art, 2024",
            image: "imgs-painting-scketches/img3.jpg",
            category: "digital",
            views: 189,
            comments: 8,
            likes: 67,
            description: "Exploring the fusion of technology and art through digital manipulation and creative coding."
        },
        {
            id: 4,
            title: "Character Study #1",
            medium: "Charcoal on Paper, 2024",
            image: "imgs-painting-scketches/img4.jpeg",
            category: "sketches",
            views: 156,
            comments: 5,
            likes: 43,
            description: "A detailed character study focusing on facial expressions and emotional depth."
        },
        {
            id: 5,
            title: "Nature's Rhythm",
            medium: "Watercolor, 2024",
            image: "imgs-painting-scketches/img5.jpg",
            category: "paintings",
            views: 278,
            comments: 15,
            likes: 112,
            description: "Capturing the natural flow and rhythm of organic forms through fluid watercolor techniques."
        },
        {
            id: 6,
            title: "Geometric Harmony",
            medium: "Digital Illustration, 2024",
            image: "imgs-painting-scketches/img6.jpg",
            category: "digital",
            views: 203,
            comments: 9,
            likes: 78,
            description: "An exploration of geometric forms and their harmonious relationships in digital space."
        }
    ],
    'Marcus Rodriguez': [
        {
            id: 7,
            title: "Urban Energy",
            medium: "Oil on Canvas, 2024",
            image: "imgs-painting-scketches/img7.jpg",
            category: "paintings",
            views: 198,
            comments: 14,
            likes: 95,
            description: "A bold expression of urban life through dynamic brushstrokes and vibrant colors."
        },
        {
            id: 8,
            title: "Abstract Motion",
            medium: "Acrylic on Canvas, 2024",
            image: "imgs-painting-scketches/img8.jpg",
            category: "paintings",
            views: 267,
            comments: 11,
            likes: 123,
            description: "Capturing movement and emotion through abstract forms and expressive color palettes."
        },
        {
            id: 9,
            title: "City Rhythms",
            medium: "Mixed Media, 2024",
            image: "imgs-painting-scketches/img9.jpg",
            category: "paintings",
            views: 189,
            comments: 7,
            likes: 78,
            description: "An interpretation of city life through rhythmic patterns and bold abstract elements."
        },
        {
            id: 10,
            title: "Emotional Landscape",
            medium: "Oil on Canvas, 2024",
            image: "imgs-painting-scketches/img10.jpg",
            category: "paintings",
            views: 234,
            comments: 16,
            likes: 101,
            description: "A landscape of emotions expressed through abstract forms and dynamic composition."
        }
    ],
    'Elena Volkov': [
        {
            id: 11,
            title: "Digital Dreams",
            medium: "Digital Art, 2024",
            image: "imgs-painting-scketches/img11.jpg",
            category: "digital",
            views: 312,
            comments: 22,
            likes: 178,
            description: "An immersive digital experience that blurs the boundaries between reality and imagination."
        },
        {
            id: 12,
            title: "Cybernetic Garden",
            medium: "Digital Installation, 2024",
            image: "imgs-painting-scketches/img12.jpeg",
            category: "digital",
            views: 298,
            comments: 19,
            likes: 165,
            description: "A fusion of nature and technology in an interactive digital environment."
        },
        {
            id: 13,
            title: "Virtual Reality",
            medium: "3D Digital Art, 2024",
            image: "imgs-painting-scketches/img13.jpeg",
            category: "digital",
            views: 267,
            comments: 13,
            likes: 142,
            description: "Exploring new dimensions of artistic expression through virtual reality technology."
        }
    ],
    'David Kim': [
        {
            id: 14,
            title: "Space Transformation",
            medium: "Installation Art, 2024",
            image: "imgs-painting-scketches/img14.jpeg",
            category: "installations",
            views: 189,
            comments: 8,
            likes: 67,
            description: "A large-scale installation that transforms architectural space into an artistic experience."
        },
        {
            id: 15,
            title: "Interactive Elements",
            medium: "Mixed Media Installation, 2024",
            image: "imgs-painting-scketches/img15.jpeg",
            category: "installations",
            views: 223,
            comments: 12,
            likes: 89,
            description: "An interactive installation that invites viewers to become part of the artwork."
        }
    ],
    'Isabella Torres': [
        {
            id: 16,
            title: "Memory Fragments",
            medium: "Photography, 2024",
            image: "imgs-painting-scketches/img16.jpeg",
            category: "photography",
            views: 156,
            comments: 9,
            likes: 73,
            description: "A conceptual photography series exploring themes of memory and identity."
        },
        {
            id: 17,
            title: "Identity Narratives",
            medium: "Digital Photography, 2024",
            image: "imgs-painting-scketches/img17.jpeg",
            category: "photography",
            views: 198,
            comments: 14,
            likes: 98,
            description: "Constructed narratives that examine the complexity of modern identity."
        }
    ],
    'James Wilson': [
        {
            id: 18,
            title: "Community Voices",
            medium: "Street Mural, 2024",
            image: "imgs-painting-scketches/img18.jpeg",
            category: "murals",
            views: 234,
            comments: 18,
            likes: 156,
            description: "A large-scale mural reflecting the stories and voices of the local community."
        },
        {
            id: 19,
            title: "Social Commentary",
            medium: "Spray Paint on Wall, 2024",
            image: "imgs-painting-scketches/img19.jpeg",
            category: "murals",
            views: 287,
            comments: 25,
            likes: 189,
            description: "Street art that addresses contemporary social issues through powerful visual imagery."
        }
    ],
    'Maya Patel': [
        {
            id: 20,
            title: "Botanical Studies",
            medium: "Watercolor on Paper, 2024",
            image: "imgs-painting-scketches/img20.jpeg",
            category: "watercolor",
            views: 167,
            comments: 7,
            likes: 89,
            description: "Delicate watercolor studies capturing the subtle beauty of botanical forms."
        },
        {
            id: 21,
            title: "Emotional Landscapes",
            medium: "Watercolor Illustration, 2024",
            image: "imgs-painting-scketches/img1.jpg",
            category: "watercolor",
            views: 201,
            comments: 11,
            likes: 112,
            description: "Fluid watercolor works that express emotional states through natural imagery."
        }
    ]
};

let currentArtworks = [];

// Initialize portfolio
document.addEventListener('DOMContentLoaded', function() {
    loadArtistData();
    renderPortfolio();
    setupEventListeners();
});

function loadArtistData() {
    // Get artist data from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const artistName = urlParams.get('artist') || 'Sarah Chen';
    
    // Update artist information based on selection
    const artistData = getArtistData(artistName);
    document.getElementById('artist-name').textContent = artistData.name;
    document.getElementById('artist-specialty').textContent = artistData.specialty;
    document.getElementById('artist-avatar').src = artistData.avatar;
    document.querySelector('.artist-bio p').textContent = artistData.bio;
    
    // Update stats
    document.querySelector('.stat-number').textContent = artistData.artworks;
    document.querySelectorAll('.stat-number')[1].textContent = artistData.followers;
    document.querySelectorAll('.stat-number')[2].textContent = artistData.patrons;
    
    // Load artist's artworks
    currentArtworks = artworksDatabase[artistName] || artworksDatabase['Sarah Chen'];
}

function getArtistData(name) {
    const artists = {
        'Sarah Chen': {
            name: 'Sarah Chen',
            specialty: 'Contemporary Mixed Media Artist',
            avatar: 'https://imgs.search.brave.com/lMgbdK9sgspV-Uj6oxnEHSkZVa-IPcMyqeMWKmWnYfo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91dW5h/dGVrLmNvbS9jZG4v/c2hvcC9hcnRpY2xl/cy9OZXJpX094bWFu/X01lcmdpbmdfQmlv/bG9neV9BcmNoaXRl/Y3R1cmVfYW5kX0Rp/Z2l0YWxfRmFicmlj/YXRpb25fZmZkYTlk/OWItNDg3MC00OTk2/LWJiZDktMWY3ZWUw/OTI2NDc2LmpwZz92/PTE3NTIzOTc2MjMm/d2lkdGg9MTEwMA',
            bio: 'Sarah Chen is a contemporary mixed media artist known for her innovative approach to traditional techniques. Her work explores themes of identity, culture, and modern expression through a unique blend of digital and physical mediums.',
            artworks: '42',
            followers: '1.2k',
            patrons: '85'
        },
        'Marcus Rodriguez': {
            name: 'Marcus Rodriguez',
            specialty: 'Abstract Oil Painter',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop',
            bio: 'Marcus Rodriguez specializes in abstract oil paintings that capture the essence of human emotion through bold brushstrokes and vibrant color palettes. His work has been exhibited internationally.',
            artworks: '38',
            followers: '980',
            patrons: '67'
        },
        'Elena Volkov': {
            name: 'Elena Volkov',
            specialty: 'Digital Art Pioneer',
            avatar: 'https://imgs.search.brave.com/gP0lyLE_YUt-IqReCYHh4XCRSsw5sO35rvxinb1I630/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9ub3Vy/LWJpc2hvdXR5LTY4/M2RkNzQ0ODcxNWIu/cG5nP2Nyb3A9MS4w/MHh3OjAuNzMweGg7/MCwwLjAzOTZ4aCZy/ZXNpemU9MzYwOio',
            bio: 'Elena Volkov is a pioneering digital artist who pushes the boundaries of technology and creativity. Her immersive digital installations have redefined contemporary art experiences.',
            artworks: '29',
            followers: '2.1k',
            patrons: '123'
        },
        'David Kim': {
            name: 'David Kim',
            specialty: 'Installation Artist',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop',
            bio: 'David Kim creates large-scale installations that transform spaces and invite viewers to engage with art in new and unexpected ways.',
            artworks: '25',
            followers: '756',
            patrons: '45'
        },
        'Isabella Torres': {
            name: 'Isabella Torres',
            specialty: 'Conceptual Photographer',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop',
            bio: 'Isabella Torres uses photography as a medium to explore themes of identity, memory, and the human condition through carefully constructed narratives.',
            artworks: '33',
            followers: '1.1k',
            patrons: '78'
        },
        'James Wilson': {
            name: 'James Wilson',
            specialty: 'Street Artist & Muralist',
            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=400&fit=crop',
            bio: 'James Wilson brings art to the streets, creating large-scale murals that reflect community stories and social commentary through vibrant public art.',
            artworks: '47',
            followers: '2.3k',
            patrons: '156'
        },
        'Maya Patel': {
            name: 'Maya Patel',
            specialty: 'Watercolor Illustrator',
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=400&fit=crop',
            bio: 'Maya Patel\'s delicate watercolor works capture the beauty of nature and human emotion through fluid, organic forms and subtle color palettes.',
            artworks: '35',
            followers: '892',
            patrons: '62'
        }
    };
    
    return artists[name] || artists['Sarah Chen'];
}

function renderPortfolio() {
    const grid = document.getElementById('portfolio-grid');
    grid.innerHTML = '';
    
    currentArtworks.forEach(artwork => {
        const card = createArtworkCard(artwork);
        grid.appendChild(card);
    });
}

function createArtworkCard(artwork) {
    const card = document.createElement('div');
    card.className = 'artwork-card';
    card.setAttribute('data-category', artwork.category);
    card.setAttribute('data-id', artwork.id);
    
    card.innerHTML = `
        <div class="artwork-image">
            <img src="${artwork.image}" alt="${artwork.title}" onerror="this.src='https://via.placeholder.com/300x250/f0f0f0/333?text=${artwork.title}'">
        </div>
        <div class="artwork-info">
            <h4 class="artwork-title">${artwork.title}</h4>
            <p class="artwork-medium">${artwork.medium}</p>
            <div class="artwork-actions">
                <div class="action-item" onclick="event.stopPropagation()">
                    <i class="fas fa-eye"></i>
                    <span>${artwork.views}</span>
                </div>
                <div class="action-item" onclick="event.stopPropagation()">
                    <i class="fas fa-comment"></i>
                    <span>${artwork.comments}</span>
                </div>
                <div class="action-item like-btn" onclick="toggleLike(this, event)">
                    <i class="far fa-heart"></i>
                    <span>${artwork.likes}</span>
                </div>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => openArtworkModal(artwork));
    
    return card;
}

function setupEventListeners() {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            filterArtworks(category);
        });
    });
    
    // Modal close
    document.querySelector('.close-modal').addEventListener('click', closeModal);
    document.getElementById('artwork-modal').addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });
    
    // Comment submission
    document.querySelector('.comment-submit').addEventListener('click', submitComment);
    document.querySelector('.comment-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') submitComment();
    });
}

function filterArtworks(category) {
    const urlParams = new URLSearchParams(window.location.search);
    const artistName = urlParams.get('artist') || 'Sarah Chen';
    const allArtworks = artworksDatabase[artistName] || artworksDatabase['Sarah Chen'];
    
    if (category === 'all') {
        currentArtworks = allArtworks;
    } else {
        currentArtworks = allArtworks.filter(artwork => artwork.category === category);
    }
    renderPortfolio();
}

function toggleLike(element, event) {
    if (event) event.stopPropagation();
    
    const icon = element.querySelector('i');
    const count = element.querySelector('span');
    let currentCount = parseInt(count.textContent);
    
    if (icon.classList.contains('far')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        element.classList.add('liked');
        count.textContent = currentCount + 1;
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        element.classList.remove('liked');
        count.textContent = currentCount - 1;
    }
}

function openArtworkModal(artwork) {
    const modal = document.getElementById('artwork-modal');
    
    // Update modal content
    document.getElementById('modal-artwork-img').src = artwork.image;
    document.getElementById('modal-artwork-title').textContent = artwork.title;
    document.getElementById('modal-artwork-medium').textContent = artwork.medium;
    document.getElementById('modal-views').textContent = artwork.views;
    document.getElementById('modal-comments').textContent = artwork.comments;
    document.getElementById('modal-likes').textContent = artwork.likes;
    document.querySelector('.artwork-description p').textContent = artwork.description;
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Increment view count
    artwork.views++;
    updateArtworkInData(artwork);
    renderPortfolio();
}

function closeModal() {
    const modal = document.getElementById('artwork-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function submitComment() {
    const input = document.querySelector('.comment-input');
    const commentText = input.value.trim();
    
    if (commentText) {
        const commentsList = document.querySelector('.comments-list');
        const newComment = document.createElement('div');
        newComment.className = 'comment';
        
        newComment.innerHTML = `
            <div class="comment-avatar">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop" alt="User">
            </div>
            <div class="comment-content">
                <div class="comment-author">You</div>
                <div class="comment-text">${commentText}</div>
                <div class="comment-time">Just now</div>
            </div>
        `;
        
        commentsList.appendChild(newComment);
        input.value = '';
        
        // Update comment count
        const commentCount = document.getElementById('modal-comments');
        commentCount.textContent = parseInt(commentCount.textContent) + 1;
    }
}

function updateArtworkInData(updatedArtwork) {
    const urlParams = new URLSearchParams(window.location.search);
    const artistName = urlParams.get('artist') || 'Sarah Chen';
    const allArtworks = artworksDatabase[artistName];
    
    if (allArtworks) {
        const index = allArtworks.findIndex(art => art.id === updatedArtwork.id);
        if (index !== -1) {
            allArtworks[index] = updatedArtwork;
        }
    }
}

function redirectToPayment() {
    const artistName = document.getElementById('artist-name').textContent;
    window.location.href = `payment.html?artist=${encodeURIComponent(artistName)}`;
}

// GSAP Animations
gsap.from(".artist-profile", {duration: 1, y: 50, opacity: 0, ease: "power2.out"});
gsap.from(".artist-bio", {duration: 1, y: 30, opacity: 0, delay: 0.3, ease: "power2.out"});
gsap.from(".portfolio-grid .artwork-card", {
    duration: 0.6,
    y: 50,
    opacity: 0,
    stagger: 0.1,
    delay: 0.5,
    ease: "power2.out"
});
