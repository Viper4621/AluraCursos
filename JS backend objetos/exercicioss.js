// criando objeto com funções e dados
const pessoa = {
  nome: "maria",
  notas: [10, 8, 9, 10],

  calcularMediaNotas: function () {
    const somaNotas = this.notas.reduce((soma, nota) => soma + nota, 0);
    const media = somaNotas / this.notas.length;
    return media.toFixed(2);
  },

  classificarDesempenho: function () {
    const media = this.calcularMediaNotas();
    if (media > 9) {
      return "Excelente";
    } else if (media > 7.5 && media < 9) {
      return "Bom desempenho";
    } else if (media > 6 && media < 7.5) {
      return "Estude mais";
    } else {
      return "Desempenho insatisfatorio";
    }
  },
};

// Calculando e exibindo a média de notas
const mediaCalculada = pessoa.calcularMediaNotas();
console.log(`${pessoa.nome} tem uma média de notas de ${mediaCalculada}.`);
const categoriaDesempenho = pessoa.classificarDesempenho();
console.log(`${pessoa.nome} tem a classificação ${categoriaDesempenho}`);

//exercicio 2 atribuindo novas propriedades a objeto utilizando for

const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
  cor: "Prata",
  ligado: true,
  estaLigado: function () {
    if (!this.ligado) {
      this.ligado = true;
      console.log("Carro ligado");
    } else {
      console.log("carro desligado");
    }
  },
};

console.log("Propriedade iniciais");

for (let propriedade in carro) {
  console.log(`${propriedade}: ${carro[propriedade]}`);
}

carro.cambio = "Automatico";
carro.kmRodados = 5000;

console.log("Novas Propriedades");

for (let propriedade in carro) {
  console.log(`${propriedade}: ${carro[propriedade]}`);
}

// Definindo o objeto carro com as propriedades iniciais
const carro2 = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
  cor: "Prata",
  ligado: true, // Propriedade para indicar se o carro está ligado ou desligado

  // Método para ligar o carro
  ligar: function () {
    if (!this.ligado) {
      this.ligado = true;
      console.log("O carro está ligado.");
    } else {
      console.log("O carro já está ligado.");
    }
  },

  // Método para desligar o carro
  desligar: function () {
    if (this.ligado) {
      this.ligado = false;
      console.log("O carro está desligado.");
    } else {
      console.log("O carro já está desligado.");
    }
  },

  // Método para obter detalhes do carro
  obterDetalhes: function () {
    const estado = this.ligado ? "ligado" : "desligado";
    return `Detalhes do carro:\nMarca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}\nCor: ${this.cor}\nEstado: ${estado}`;
  },
};

// Testando os métodos
carro2.ligar(); // Tentar ligar o carro quando já está ligado
console.log(carro2.obterDetalhes());
carro2.desligar(); // Desligar o carro
console.log(carro2.obterDetalhes());
carro2.desligar(); // Tentar desligar o carro quando já está desligado
console.log(carro2.obterDetalhes());
carro2.ligar(); // Ligar o carro
console.log(carro2.obterDetalhes()); // Obter detalhes do carro e imprimir no console

// spreadObjeto.js
const carro3 = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
  cor: "Prata",
  ligado: false, // Nova propriedade indicando o estado do carro (ligado/desligado)
};

const carroNovo = {
  marca: "Honda",
  modelo: "Civic",
  ano: 2023,
  cor: "Azul",
};

// Utilize o operador spread para criar um novo objeto com as propriedades de carro e carroNovo
const carroComNovosDetalhes = { ...carro3, ...carroNovo };

// Imprima no console o objeto carroComNovosDetalhes
console.log("Carro com Novos Detalhes:");
console.log(carroComNovosDetalhes);

// Modifique o valor de uma propriedade no objeto carroComNovosDetalhes
carroComNovosDetalhes.modelo = "Accord";

// Imprima novamente no console o objeto carroComNovosDetalhes
console.log("\nCarro com Detalhes Modificados:");
console.log(carroComNovosDetalhes);
