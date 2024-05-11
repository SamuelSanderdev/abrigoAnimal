const listaAbrigos = document.getElementById('listaAbrigos');

// Simulando dados de abrigos - idealmente, estes dados viriam de um servidor
const abrigos = [
  {
    nome: "Abrigo Animal",
    endereco: {
      rua: "Rua Principal",
      numero: "123",
      bairro: "Centro",
      referencia: "Próximo ao mercado",
      cep: "99999-999",
      cidade: "Cidade Exemplo",
      UF: "RS"
    },
    mapaUrl: "https://www.google.com/maps",
    responsavel: "João da Silva",
    telefone: "(51) 99999-9999",
    capacidadeMaxima: 50,
    vagasDisponiveis: 20
  },
  {
    nome: "Acolhida Animal",
    endereco: {
      rua: "Avenida Secundária",
      numero: "456",
      bairro: "Vila Nova",
      referencia: "Em frente ao parque",
      cep: "88888-888",
      cidade: "Outra Cidade",
      UF: "RS"
    },
    mapaUrl: "https://www.google.com/maps",
    responsavel: "Maria Souza",
    telefone: "(51) 88888-8888",
    capacidadeMaxima: 30,
    vagasDisponiveis: 10
  }
];

abrigos.forEach(abrigo => {
  const abrigoElement = document.createElement('div');
  abrigoElement.innerHTML = `
    <h2>${abrigo.nome}</h2>
    <p><strong>Endereço:</strong> ${abrigo.endereco.rua}, ${abrigo.endereco.numero} - ${abrigo.endereco.bairro}, ${abrigo.endereco.cidade} - ${abrigo.endereco.UF}</p>
    <p><strong>Referência:</strong> ${abrigo.endereco.referencia}</p>
    <p><strong>Vagas:</strong> ${abrigo.vagasDisponiveis} / ${abrigo.capacidadeMaxima}</p>
    <a href="${abrigo.mapaUrl}" target="_blank">Ver no Mapa</a>
    <p><strong>Responsável:</strong> ${abrigo.responsavel}</p>
    <p><strong>Telefone:</strong> ${abrigo.telefone}</p>
  `;
  listaAbrigos.appendChild(abrigoElement);
});