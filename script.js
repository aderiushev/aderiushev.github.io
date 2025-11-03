// i18n Functionality
const detectLanguage = () => {
    const path = window.location.pathname;
    if (path.startsWith('/ca/') || path === '/ca') return 'ca';
    if (path.startsWith('/es/') || path === '/es') return 'es';
    if (path.startsWith('/ru/') || path === '/ru') return 'ru';
    return 'en';
};

const loadTranslations = async (lang) => {
    try {
        const response = await fetch(`/locales/${lang}/index.json`);
        if (!response.ok) throw new Error(`Failed to load ${lang} translations`);
        return await response.json();
    } catch (error) {
        console.error('Translation loading error:', error);
        // Fallback to English
        if (lang !== 'en') {
            return await loadTranslations('en');
        }
        return {};
    }
};

const applyTranslations = (translations) => {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key]) {
            element.innerHTML = translations[key];
        }
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(element => {
        const attrConfig = element.getAttribute('data-i18n-attr');
        const [attr, key] = attrConfig.split(':');
        if (translations[key]) {
            element.setAttribute(attr, translations[key]);
        }
    });
};

// Random Emoji Logo System
const initializeEmojiLogo = () => {
    const emojis = ['👨‍💻', '🚀', '⚡', '🎯', '💎', '🔥', '🌟', '🏃‍♂️', '♟️'];
    const logoContainer = document.getElementById('logo-emojis');

    if (!logoContainer) return;

    // Shuffle and pick 3 unique emojis
    const shuffled = [...emojis].sort(() => Math.random() - 0.5);
    const selectedEmojis = shuffled.slice(0, 3);

    // Create emoji elements
    logoContainer.innerHTML = selectedEmojis
        .map(emoji => `<span class="logo-emoji">${emoji}</span>`)
        .join('');
};

// Scroll Animation Observer
const initializeScrollAnimations = () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
};

// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', async () => {
    // Initialize emoji logo
    initializeEmojiLogo();

    // Initialize scroll animations
    initializeScrollAnimations();

    // Load and apply translations
    const lang = detectLanguage();
    const translations = await loadTranslations(lang);
    applyTranslations(translations);

    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', lang);

    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Check for saved theme preference or default to system preference
    const getPreferredTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    // Set theme
    const setTheme = (theme) => {
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

    // Initialize theme
    setTheme(getPreferredTheme());

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

