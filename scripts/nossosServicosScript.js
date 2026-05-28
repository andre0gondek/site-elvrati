document.addEventListener("DOMContentLoaded", () => {
      const toggleThemeCheckbox = document.getElementById('toggle-theme');
      const logos = document.querySelectorAll('.logo');

      const atualizarLogos = (tema) => {
        const logoSrc = tema === 'light' ? 'imagens/logo-clara.png' : 'imagens/logo-escura.png';
        logos.forEach(logo => logo.src = logoSrc);
      };

      const aplicarTema = (tema) => {
        document.body.classList.toggle('light-mode', tema === 'light');
        if (toggleThemeCheckbox) toggleThemeCheckbox.checked = tema === 'light';
        atualizarLogos(tema);
        localStorage.setItem('theme', tema);
      };

      aplicarTema(localStorage.getItem('theme') || 'dark');

      if (toggleThemeCheckbox) {
        toggleThemeCheckbox.addEventListener('change', () => {
          aplicarTema(toggleThemeCheckbox.checked ? 'light' : 'dark');
        });
      }
    });