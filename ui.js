(function () {
  // Font size A− / A / A+
  const root = document.documentElement;
  const KEY = 'sci-font-scale';
  const apply = (s) => { root.style.fontSize = (16 * s) + 'px'; localStorage.setItem(KEY, s); };
  const saved = parseFloat(localStorage.getItem(KEY) || '1');
  if (saved !== 1) apply(saved);
  document.querySelectorAll('.text-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const t = btn.textContent.trim();
      const cur = parseFloat(localStorage.getItem(KEY) || '1');
      if (t === 'A−' || t === 'A-') apply(Math.max(0.85, cur - 0.1));
      else if (t === 'A+') apply(Math.min(1.4, cur + 0.1));
      else apply(1);
    });
  });

  // Language switcher (visual active state — content stays English for now)
  document.querySelectorAll('.util-right a').forEach((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.util-right a').forEach((x) => x.classList.remove('emph'));
      a.classList.add('emph');
      const t = a.textContent.trim();
      if (t === 'తెలుగు') alert('తెలుగు అనువాదం త్వరలో అందుబాటులోకి వస్తుంది.');
      else if (t === 'हिन्दी') alert('हिन्दी अनुवाद जल्द ही उपलब्ध होगा।');
    });
  });

  // Screen Reader Access link
  document.querySelectorAll('.util-left a').forEach((a) => {
    if (a.textContent.trim() === 'Screen Reader Access') {
      a.href = '#';
      a.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Screen Reader Access: This site is compatible with NVDA, JAWS and VoiceOver. Use Tab to navigate, Enter to activate links, and the headings list (H) to jump between sections.');
      });
    }
  });
})();
