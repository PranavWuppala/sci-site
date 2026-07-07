(function () {
  const carousel = document.getElementById('carousel');
  if (!carousel) return;
  const slides = carousel.querySelectorAll('.cslide');
  if (!slides.length) return;

  // build dots
  const dots = document.createElement('div');
  dots.className = 'carousel-dots';
  slides.forEach((_, i) => {
    const d = document.createElement('span');
    if (i === 0) d.classList.add('active');
    dots.appendChild(d);
  });
  carousel.parentNode.insertBefore(dots, carousel.nextSibling);
  const dotSpans = dots.querySelectorAll('span');

  let idx = 0;
  slides[0].classList.add('active');

  function currentIsVideo() {
    return slides[idx].classList.contains('cslide-video-embed');
  }

  function go(i) {
    slides[idx].classList.remove('active');
    dotSpans[idx].classList.remove('active');
    idx = (i + slides.length) % slides.length;
    slides[idx].classList.add('active');
    dotSpans[idx].classList.add('active');
  }

  let timer;
  function startTimer() {
    stopTimer();
    if (currentIsVideo()) return;
    timer = setInterval(() => go(idx + 1), 4500);
  }
  function stopTimer() {
    if (timer) { clearInterval(timer); timer = null; }
  }

  startTimer();
  carousel.addEventListener('mouseenter', stopTimer);
  carousel.addEventListener('mouseleave', startTimer);

  // Recompute timer when a dot is clicked (user might land on the video)
  dotSpans.forEach((d, i) => d.addEventListener('click', () => { go(i); startTimer(); }));
})();
