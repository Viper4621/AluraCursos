const estudante = {
  nome: "José Silva",
  idade: 32,
  cpf: "12312312312",
  turma: "JavaScript",
  bolsista: true,
  telefones: ["551199999998", "551199999993"],
  enderecos: [
    {
      rua: "Rua Joseph Climber",
      numero: "45",
      complemento: "apto 43",
    },
    {
      rua: "Rua Dona Clotilde",
      numero: "71",
      complemento: null,
    },
  ],
};

//operador de espalhamento

function exibirTelefone(telefone1, telefone2) {
  console.log(`Ligar para ${telefone1}`);
  console.log(`Ligar para ${telefone2}`);
}

//como pegar telefone 1 e 2 de dentro do objeto na chamada da função
//poderia ser feito essa maneira com posição de array
// exibirTelefone(estudante.telefones[0], estudante.telefones[1]);
//a boa pratica é spread utilizar sempre da forma abaixo
//spread abre e espalha para pegar elementos especificios e podemos usar em paramentros de funções
exibirTelefone(...estudante.telefones);
//abaixo nao e exemplo de boas praticas pois esta chumbando codigo
const dadosEnvio = {
  //aqui ok
  destinatario: estudante.nome,
  //agora nosso objeto é 1 objeto com todos dados que precisamos atraves de objeto especifico com operador de espalhamento
  ...estudante.enderecos[0],
};

console.log(dadosEnvio);

const dadosEnvio2 = {
  destinatario: estudante.nome,
  ...estudante.enderecos[1],
};

console.log(dadosEnvio2);

const arrayMalaDireta = {
  nome: "Jossef",
  endereço: [
    {
      rua: "alguma",
      numero: "10",
    },
    {
      rua: "outra",
      numero: "15",
    },
  ],
};

const paraEnvio = {
  destinatario: arrayMalaDireta.nome,
  ...arrayMalaDireta.endereço[1],
};

console.log(paraEnvio);
