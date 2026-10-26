const bannerSlides = document.querySelectorAll('.banner-slide');
const bannerDots = document.querySelectorAll('.banner-dot');
const themeToggle = document.getElementById('themeToggle');
const siteTopo = document.querySelector('.site-topo');

let bannerIndex = 0;
let lastScrollY = window.scrollY;

function handleHeaderScroll() {
  if (!siteTopo) return;

  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 80) {
    siteTopo.classList.add('is-hidden');
  } else {
    siteTopo.classList.remove('is-hidden');
  }

  lastScrollY = currentScrollY;
}

function showBannerSlide(index) {
  if (!bannerSlides.length) return;

  bannerIndex = (index + bannerSlides.length) % bannerSlides.length;

  bannerSlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === bannerIndex);
  });

  bannerDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === bannerIndex);
  });
}

if (bannerSlides.length > 0) {
  setInterval(() => {
    showBannerSlide(bannerIndex + 1);
  }, 4000);
}

bannerDots.forEach((dot, index) => {
  dot.addEventListener('click', () => showBannerSlide(index));
});

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-theme');

    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.title = isDark ? 'Ativar modo claro' : 'Ativar modo escuro';
  });
}

window.addEventListener('scroll', handleHeaderScroll, { passive: true });
