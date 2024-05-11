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
      UF: "RS",
      lat: -30.0346,  // Latitude do abrigo
      lng: -51.2177   // Longitude do abrigo
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
      UF: "RS",
      lat: -29.7633, // Latitude do abrigo
      lng: -52.4067  // Longitude do abrigo
    },
    mapaUrl: "https://www.google.com/maps",
    responsavel: "Maria Souza",
    telefone: "(51) 88888-8888",
    capacidadeMaxima: 30,
    vagasDisponiveis: 10
  }
];

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: -30.0346, lng: -51.2177 }, // Coordenadas de Cidade Exemplo, RS
  });

  // Add markers for each abrigo location
  abrigos.forEach(abrigo => {
    new google.maps.Marker({
      position: { lat: abrigo.endereco.lat, lng: abrigo.endereco.lng },
      map,
      title: abrigo.nome,
    });
  });
}