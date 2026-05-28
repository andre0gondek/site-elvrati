document.addEventListener("DOMContentLoaded", () => {
  const toggleThemeCheckbox = document.getElementById('toggle-theme');
  const logos = document.querySelectorAll('.logo');
  const body = document.body;

  const toggleMenu = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  // Função para atualizar logos
  const atualizarLogos = (tema) => {
    const src = tema === 'light' ? 'imagens/logo-clara.png' : 'imagens/logo-escura.png';
    logos.forEach(logo => logo.src = src);
  };

  // Função para aplicar tema
  const aplicarTema = (tema) => {
    if (tema === 'light') {
      body.classList.add('light-mode');
      toggleThemeCheckbox.checked = true;
    } else {
      body.classList.remove('light-mode');
      toggleThemeCheckbox.checked = false;
    }
    atualizarLogos(tema);
    localStorage.setItem('theme', tema);
  };

  // Aplica tema salvo ou padrão
  const savedTheme = localStorage.getItem('theme') || 'dark';
  aplicarTema(savedTheme);

  // Alterna tema pelo switch
  toggleThemeCheckbox.addEventListener('change', () => {
    const novoTema = toggleThemeCheckbox.checked ? 'light' : 'dark';
    aplicarTema(novoTema);
  });

  // Controle do menu mobile
  if (toggleMenu && menu) {
    toggleMenu.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  }
});

  //Função para esconder o ícone do whatsapp ao chegar na seção de agendamento
  const whatsappBtn = document.getElementById("whatsapp-btn");
  const agendarSection = document.getElementById("agendar");

  window.addEventListener("scroll", () => {
    const sectionTop = agendarSection.offsetTop;
    const sectionHeight = agendarSection.offsetHeight;
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollY + windowHeight > sectionTop && scrollY < sectionTop + sectionHeight) {
      whatsappBtn.classList.add("whatsapp-hidden");
    } else {
      whatsappBtn.classList.remove("whatsapp-hidden");
    }
  });
