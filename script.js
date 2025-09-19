// Modern Flower Landing Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initCountdownTimer();
    initScrollAnimations();
    initProductCarousel();
    initCollectionGallery();
    initSmoothScrolling();
    initMobileMenu();
    initCartFunctionality();
    
    // Initialize i18n system
    if (window.i18n) {
        window.i18n.init();
    }
});

// Navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Update active nav link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Countdown Timer functionality
function initCountdownTimer() {
    const timerBoxes = document.querySelectorAll('.timer-box');
    if (timerBoxes.length === 0) return;

    // Set target date (24 days from now for demo)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 24);
    targetDate.setHours(targetDate.getHours() + 12);
    targetDate.setMinutes(targetDate.getMinutes() + 55);

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate.getTime() - now;

        if (distance < 0) {
            // Timer expired
            timerBoxes.forEach(box => {
                box.querySelector('.timer-number').textContent = '00';
            });
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update timer display
        const timerNumbers = document.querySelectorAll('.timer-number');
        if (timerNumbers.length >= 4) {
            timerNumbers[0].textContent = String(days).padStart(2, '0');
            timerNumbers[1].textContent = String(hours).padStart(2, '0');
            timerNumbers[2].textContent = String(minutes).padStart(2, '0');
            timerNumbers[3].textContent = String(seconds).padStart(2, '0');
        }
    }

    // Update countdown every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Scroll animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.product-card, .deal-card, .feature-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Product carousel functionality
function initProductCarousel() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = card.classList.contains('featured') ? 'scale(1.25)' : 'scale(1.05)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = card.classList.contains('featured') ? 'scale(1.2)' : 'scale(1)';
        });
    });
}

// Collection gallery functionality
function initCollectionGallery() {
    const gallery = document.querySelector('.collection-gallery');
    const dots = document.querySelectorAll('.pagination-dot');
    
    if (!gallery || dots.length === 0) return;

    let currentIndex = 0;
    const itemWidth = 215; // 200px width + 15px gap

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            gallery.scrollTo({
                left: currentIndex * itemWidth * 2,
                behavior: 'smooth'
            });
            
            dots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
        });
    });

    // Auto-slide functionality
    setInterval(() => {
        currentIndex = (currentIndex + 1) % dots.length;
        gallery.scrollTo({
            left: currentIndex * itemWidth * 2,
            behavior: 'smooth'
        });
        
        dots.forEach(d => d.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }, 5000);
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    // Hide/show header on scroll
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const header = document.querySelector('.header');
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.style.transform = 'translateY(-100%) rotate(-0.5deg)';
        } else {
            header.style.transform = 'translateY(0) rotate(-0.5deg)';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
}

// Cart and wishlist functionality
function initCartFunctionality() {
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    const wishlistBtn = document.querySelector('.wishlist-btn');
    const cartBtn = document.querySelector('.cart-btn');
    
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    // Add to cart functionality
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Animation feedback
            btn.style.transform = 'scale(0.95)';
            btn.textContent = 'Added!';
            btn.style.background = '#4CAF50';
            
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
                btn.textContent = 'Add to Cart';
                btn.style.background = '#FF7F7F';
            }, 1000);
            
            // Add item to cart (demo)
            const productCard = btn.closest('.deal-card');
            if (productCard) {
                const productName = productCard.querySelector('.deal-title').textContent;
                const productPrice = productCard.querySelector('.deal-price').textContent;
                
                cartItems.push({
                    id: Date.now(),
                    name: productName,
                    price: productPrice,
                    quantity: 1
                });
                
                localStorage.setItem('cart', JSON.stringify(cartItems));
                updateCartCounter();
                showNotification('Product added to cart!', 'success');
            }
        });
    });
    
    // Wishlist functionality
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', () => {
            wishlistBtn.style.transform = 'scale(1.1)';
            wishlistBtn.style.background = wishlistBtn.style.background === 'rgb(255, 107, 107)' ? '#FFA4A4' : '#FF6B6B';
            
            setTimeout(() => {
                wishlistBtn.style.transform = 'scale(1)';
            }, 200);
            
            showNotification('Wishlist updated!', 'info');
        });
    }
    
    function updateCartCounter() {
        // Update cart counter if exists
        const cartCounter = document.querySelector('.cart-counter');
        if (cartCounter) {
            cartCounter.textContent = cartItems.length;
            cartCounter.style.display = cartItems.length > 0 ? 'block' : 'none';
        }
    }
    
    // Initialize cart counter
    updateCartCounter();
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(n => n.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 10000;
        font-size: 14px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        animation: slideInRight 0.3s ease;
        max-width: 300px;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add notification animations to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Parallax effect for background elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.decoration-ellipse, .star-decoration');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px) rotate(-35.99deg)`;
    });
});

// Performance optimization
let ticking = false;

function updateScrollElements() {
    // Update scroll-dependent elements
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateScrollElements);
        ticking = true;
    }
});

// Error handling
window.addEventListener('error', (e) => {
    console.warn('Non-critical error:', e.error);
});

// Initialize tooltips for action buttons
function initTooltips() {
    const actionBtns = document.querySelectorAll('.action-btn');
    
    actionBtns.forEach(btn => {
        let tooltip = null;
        
        btn.addEventListener('mouseenter', (e) => {
            const btnType = btn.className.split(' ').find(c => c.includes('-btn'));
            let tooltipText = '';
            
            switch(btnType) {
                case 'search-btn': tooltipText = 'Search'; break;
                case 'wishlist-btn': tooltipText = 'Wishlist'; break;
                case 'cart-btn': tooltipText = 'Cart'; break;
                case 'user-btn': tooltipText = 'Account'; break;
            }
            
            if (tooltipText) {
                tooltip = document.createElement('div');
                tooltip.textContent = tooltipText;
                tooltip.style.cssText = `
                    position: absolute;
                    bottom: -30px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: #303030;
                    color: white;
                    padding: 5px 10px;
                    border-radius: 4px;
                    font-size: 12px;
                    white-space: nowrap;
                    z-index: 1000;
                    pointer-events: none;
                `;
                btn.style.position = 'relative';
                btn.appendChild(tooltip);
            }
        });
        
        btn.addEventListener('mouseleave', () => {
            if (tooltip) {
                tooltip.remove();
                tooltip = null;
            }
        });
    });
}

// Initialize tooltips
initTooltips();

// Console welcome message
console.log(`
🌸 Modern Flower Landing Page 🌸
Created with love by Bkalp Design
Version: 1.0.0
`);
