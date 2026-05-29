document.addEventListener('DOMContentLoaded', () => {
    const slides         = document.querySelectorAll('.slide');
    const totalSlides    = slides.length;
    let currentSlideIdx  = 0;

    const prevBtn        = document.getElementById('prev-btn');
    const nextBtn        = document.getElementById('next-btn');
    const slideCounter   = document.getElementById('slide-num');
    const dotsContainer  = document.getElementById('dots-container');
    const headerIndicator= document.getElementById('header-indicator');
    const orb1           = document.getElementById('orb1');
    const orb2           = document.getElementById('orb2');

    // Logo fijo — nunca se toca el innerHTML
    const LOGO_SRC = 'https://i.ibb.co/gbS6cgdw/LOGO-GS-3-2.png';

    // Autogenerar dots
    slides.forEach((_, idx) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (idx === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(idx));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function goToSlide(index) {
        if (index < 0 || index >= totalSlides) return;

        slides[currentSlideIdx].classList.remove('active');
        dots[currentSlideIdx].classList.remove('active');

        currentSlideIdx = index;
        slides[currentSlideIdx].classList.add('active');
        dots[currentSlideIdx].classList.add('active');

        slideCounter.textContent = `${String(currentSlideIdx + 1).padStart(2, '0')} / ${String(totalSlides).padStart(2, '0')}`;

        const activeSlide = slides[currentSlideIdx];
        const theme = activeSlide.getAttribute('data-theme');
        const title = activeSlide.getAttribute('data-title');

        headerIndicator.textContent = title;

        // Solo cambian los glows — el logo nunca cambia
        if (theme === 'snapdocs') {
            document.documentElement.style.setProperty('--glow-1', '#ff6b00');
            document.documentElement.style.setProperty('--glow-2', '#ff8533');
            orb1.style.transform = 'translate(120px, 60px)';
            orb2.style.transform = 'translate(-80px, -120px)';
        } else {
            document.documentElement.style.setProperty('--glow-1', '#8b5cf6');
            document.documentElement.style.setProperty('--glow-2', '#3b82f6');
            orb1.style.transform = 'translate(0px, 0px)';
            orb2.style.transform = 'translate(0px, 0px)';
        }
    }

    prevBtn.addEventListener('click', () => {
        if (currentSlideIdx > 0) goToSlide(currentSlideIdx - 1);
    });

    nextBtn.addEventListener('click', () => {
        if (currentSlideIdx < totalSlides - 1) goToSlide(currentSlideIdx + 1);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            if (currentSlideIdx < totalSlides - 1) goToSlide(currentSlideIdx + 1);
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            if (currentSlideIdx > 0) goToSlide(currentSlideIdx - 1);
        }
    });

    // Partículas de fondo
    const canvas = document.getElementById('bg-canvas');
    const ctx    = canvas.getContext('2d');

    let width  = canvas.width  = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width  = canvas.width  = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = Array.from({ length: 45 }, () => ({
        x:      Math.random() * width,
        y:      Math.random() * height,
        size:   Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity:Math.random() * 0.4 + 0.1
    }));

    function animateParticles() {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';

        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;
            if (p.x < 0 || p.x > width)  p.speedX *= -1;
            if (p.y < 0 || p.y > height) p.speedY *= -1;

            ctx.globalAlpha = p.opacity;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });

        requestAnimationFrame(animateParticles);
    }

    animateParticles();
});
