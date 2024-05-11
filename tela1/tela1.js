const form = document.querySelector("#cadastroPessoa");
const cpfInput = document.getElementById('cpf');

cpfInput.addEventListener('input', function() {
  this.value = formatCnpjCpf(this.value);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const cpf = cpfInput.value.replace(/[^0-9]/g, ''); // remove caracteres não numéricos

  if (validarCPF(cpf)) {
    // CPF válido: armazena os dados do formulário e redireciona 
    // ... (seu código para armazenar dados)
    window.location.href = "lista_abrigos.html";
  } else {
    // CPF inválido: exibe mensagem de erro
    exibirErro(cpfInput, "CPF inválido.");
  }
});

function validarCPF(cpf) {
  // ... (código de validação do CPF - permanece o mesmo)
}

function exibirErro(input, mensagem) {
  // ... (código para exibir mensagem de erro - permanece o mesmo)
}

function formatCnpjCpf(value) {
  const cnpjCpf = value.replace(/\D/g, '');

  if (cnpjCpf.length === 11) {
    return cnpjCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
  }

  return cnpjCpf.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '$1.$2.$3/$4-$5');
}