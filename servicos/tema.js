document.addEventListener("DOMContentLoaded", () => {
  const logos = document.querySelectorAll('.logo');

  // Atualiza todas as logos conforme o tema
  const atualizarLogos = (tema) => {
    const logoSrc = tema === 'light' ? '../imagens/logo-clara.png' : '../imagens/logo-escura.png';
    logos.forEach(logo => logo.src = logoSrc);
  };

  // Aplica tema
  const aplicarTema = (tema) => {
    document.body.classList.toggle('light-mode', tema === 'light');
    atualizarLogos(tema);
    localStorage.setItem('theme', tema);
  };

  // Aplica tema salvo ou dark por padrão
  aplicarTema(localStorage.getItem('theme') || 'dark');
});

document.addEventListener("DOMContentLoaded", function () {
  

  // Máscara CPF
  const cpfInput = document.getElementById("cpf");
  if (cpfInput) {
    cpfInput.addEventListener("input", function (e) {
      let value = e.target.value.replace(/\D/g, "").slice(0, 11);
      let formatted = value;

      if (value.length > 9) {
        formatted = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
      } else if (value.length > 6) {
        formatted = value.replace(/(\d{3})(\d{3})(\d+)/, "$1.$2.$3");
      } else if (value.length > 3) {
        formatted = value.replace(/(\d{3})(\d+)/, "$1.$2");
      }

      e.target.value = formatted;
    });
  }

  // Máscara Telefone
  const telefoneInput = document.getElementById("telefone");
  if (telefoneInput) {
    telefoneInput.addEventListener("input", function (e) {
      let value = e.target.value.replace(/\D/g, "").slice(0, 11);
      let formatted = value;

      if (value.length >= 10) {
        formatted = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
      } else if (value.length >= 6) {
        formatted = value.replace(/(\d{2})(\d{4})(\d+)/, "($1) $2-$3");
      } else if (value.length >= 3) {
        formatted = value.replace(/(\d{2})(\d+)/, "($1) $2");
      }

      e.target.value = formatted;
    });
  }
});

// Abrir pop-up e preencher dados salvos
function abrirPopup() {
  document.getElementById('popup').style.display = 'flex';

  const dadosSalvos = JSON.parse(localStorage.getItem("dadosCliente"));
  if (dadosSalvos) {
    document.getElementById("nome").value = dadosSalvos.nome || "";
    document.getElementById("telefone").value = dadosSalvos.telefone || "";
    document.getElementById("servico").value = dadosSalvos.servico || "";
    document.getElementById("cpf").value = dadosSalvos.cpf || "";
    document.getElementById("email").value = dadosSalvos.email || "";
    document.getElementById("endereco").value = dadosSalvos.endereco || "";
  }
}

// Fechar pop-up
function fecharPopup() {
  document.getElementById('popup').style.display = 'none';
}

// Enviar e-mail e salvar dados
function enviarEmail() {
  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const servico = document.getElementById("servico").value;
  const cpf = document.getElementById("cpf").value;
  const emailCliente = document.getElementById("email").value;
  const endereco = document.getElementById("endereco").value;

   // Verifica se todos os campos estão preenchidos
  if (!nome || !telefone || !servico || !cpf || !emailCliente || !endereco) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  if (!validarCPF(cpf)) {
    alert("CPF inválido. Por favor, verifique e tente novamente.");
    return;
  }

  const telefoneLimpo = telefone.replace(/\D/g, "");
  if (telefoneLimpo.length < 10) {
    alert("Telefone inválido. Insira um número com DDD.");
    return;
  }

  const dadosCliente = {
    nome,
    telefone,
    servico,
    cpf,
    email: emailCliente,
    endereco,
    data: new Date().toLocaleString()
  };
  localStorage.setItem("dadosCliente", JSON.stringify(dadosCliente));

  const assunto = "Ordem de Serviço";
  const corpo =
    `Serviço solicitado por: ${nome}\n` +
    `CPF: ${cpf}\n` +
    `Contato: ${telefone}\n` +
    `E-mail: ${emailCliente}\n` +
    `Endereço: ${endereco}\n` +
    `Serviço: ${servico}\n`;

  const email = "contato@elvrati.com.br";
  const link = `mailto:${email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;

  window.location.href = link;
  fecharPopup();
}

// Validação de CPF
function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, '');

  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  let soma = 0;
  for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
  let resto = 11 - (soma % 11);
  let digito1 = resto >= 10 ? 0 : resto;

  soma = 0;
  for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
  resto = 11 - (soma % 11);
  let digito2 = resto >= 10 ? 0 : resto;

  return digito1 === parseInt(cpf.charAt(9)) && digito2 === parseInt(cpf.charAt(10));
}
