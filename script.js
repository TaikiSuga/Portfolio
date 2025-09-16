// Portfolio Website JavaScript
document.addEventListener('DOMContentLoaded', function() {

    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');

        // Prevent scrolling when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Smooth Scrolling for Navigation Links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Section Animation on Scroll
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Active Navigation Link Highlighting
    const updateActiveNavLink = () => {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    // Scroll Event Listeners
    let ticking = false;

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                updateActiveNavLink();
                handleHeaderShadow();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Header Shadow on Scroll
    const header = document.querySelector('.header');

    const handleHeaderShadow = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    // Card Hover Effects Enhancement
    const cards = document.querySelectorAll('.achievement-card, .value-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Button Hover Effects
    const buttons = document.querySelectorAll('.hero-cta, .contact-button');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Keyboard Navigation Support
    document.addEventListener('keydown', function(e) {
        // Close mobile menu with Escape key
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Resize Event Handler
    window.addEventListener('resize', function() {
        // Close mobile menu on desktop resize
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Performance: Lazy Loading for Images (if any images are added later)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // Enhanced Accessibility
    const focusableElements = document.querySelectorAll(
        'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
    );

    // Skip to content functionality
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-green);
        color: white;
        padding: 8px;
        text-decoration: none;
        z-index: 10000;
        transition: top 0.2s;
    `;

    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });

    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });

    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add main landmark
    const mainElement = document.querySelector('main');
    if (mainElement) {
        mainElement.id = 'main';
    }

    // Form Validation (if contact forms are added later)
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Smooth scroll to top functionality
    let scrollToTopButton;

    const createScrollToTopButton = () => {
        scrollToTopButton = document.createElement('button');
        scrollToTopButton.textContent = '↑';
        scrollToTopButton.className = 'scroll-to-top';
        scrollToTopButton.setAttribute('aria-label', 'Scroll to top');
        scrollToTopButton.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border: none;
            border-radius: 50%;
            background-color: var(--accent-green);
            color: white;
            font-size: 20px;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
        `;

        scrollToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        document.body.appendChild(scrollToTopButton);
    };

    createScrollToTopButton();

    // Show/hide scroll to top button
    const toggleScrollToTopButton = () => {
        if (window.scrollY > 300) {
            scrollToTopButton.style.opacity = '1';
            scrollToTopButton.style.visibility = 'visible';
        } else {
            scrollToTopButton.style.opacity = '0';
            scrollToTopButton.style.visibility = 'hidden';
        }
    };

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                toggleScrollToTopButton();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Console log for development
    console.log('Portfolio website loaded successfully');

    // Analytics placeholder (can be replaced with actual analytics)
    const trackPageView = () => {
        // Placeholder for analytics tracking
        console.log('Page view tracked');
    };

    trackPageView();

    // Error handling for external links
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add rel attributes for security
            if (!this.rel.includes('noopener')) {
                this.rel += ' noopener';
            }
            if (!this.rel.includes('noreferrer')) {
                this.rel += ' noreferrer';
            }
        });
    });

    // Preload critical resources
    const preloadCriticalResources = () => {
        const criticalResources = [
            // Add any critical resources here
        ];

        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource.href;
            link.as = resource.as;
            document.head.appendChild(link);
        });
    };

    preloadCriticalResources();

    // Initialize all animations and interactions
    const initializeInteractions = () => {
        // Trigger initial animations
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.classList.add('animate');
        }

        // Set initial active nav link
        updateActiveNavLink();

        // Initialize scroll position
        handleHeaderShadow();
        toggleScrollToTopButton();
    };

    // Run initialization
    initializeInteractions();

    // Service Worker registration (for future PWA features)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            // Service worker can be added here for offline functionality
            console.log('Service Worker support detected');
        });
    }
});

// Additional utility functions
const utils = {
    // Debounce function for performance optimization
    debounce: function(func, wait, immediate) {
        let timeout;
        return function executedFunction() {
            const context = this;
            const args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    },

    // Throttle function for scroll events
    throttle: function(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Check if element is in viewport
    isInViewport: function(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
};