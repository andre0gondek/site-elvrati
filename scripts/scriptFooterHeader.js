document.addEventListener("DOMContentLoaded", () => {
  // 1. CARREGA O CABEÇALHO (Adicionada a barra "/" para caminho absoluto)
  const headerContainer = document.getElementById("main-header");
  if (headerContainer) {
    fetch("/header.html")
      .then(response => {
        if (!response.ok) throw new Error("Não foi possível encontrar o arquivo header.html");
        return response.text();
      })
      .then(data => {
        headerContainer.innerHTML = data;
        inicializarMenuMobile();
        inicializarControleTema();
      })
      .catch(err => console.error("Erro no Header:", err));
  }

  // 2. CARREGA O RODAPÉ (Adicionada a barra "/" para caminho absoluto)
  const footerContainer = document.getElementById("main-footer");
  if (footerContainer) {
    fetch("/footer.html")
      .then(response => {
        if (!response.ok) throw new Error("Não foi possível encontrar o arquivo footer.html");
        return response.text();
      })
      .then(data => {
        footerContainer.innerHTML = data;
        sincronizarLogoComTema();
      })
      .catch(err => console.error("Erro no Footer:", err));
  }
});

function inicializarMenuMobile() {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }
}

function inicializarControleTema() {
  const toggleThemeCheckbox = document.getElementById('toggle-theme');
  const aplicarTema = (tema) => {
    if (tema === 'light') {
      document.body.classList.add('light-mode');
      if (toggleThemeCheckbox) toggleThemeCheckbox.checked = true;
    } else {
      document.body.classList.remove('light-mode');
      if (toggleThemeCheckbox) toggleThemeCheckbox.checked = false;
    }
    sincronizarLogoComTema();
    localStorage.setItem('theme', tema);
  };

  const temaSalvo = localStorage.getItem('theme') || 'dark';
  aplicarTema(temaSalvo);

  if (toggleThemeCheckbox) {
    toggleThemeCheckbox.addEventListener('change', () => {
      aplicarTema(toggleThemeCheckbox.checked ? 'light' : 'dark');
    });
  }
}

function sincronizarLogoComTema() {
  const logos = document.querySelectorAll('.logo');
  const corpoModoClaro = document.body.classList.contains('light-mode');
  // Corrigido adicionando "/" no início para a hospedagem achar a pasta de imagens independente da rota
  const logoSrc = corpoModoClaro ? '/imagens/logo-clara.png' : '/imagens/logo-escura.png';
  logos.forEach(logo => { logo.src = logoSrc; });
}