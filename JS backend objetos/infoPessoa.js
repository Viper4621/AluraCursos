const pessoa = {
  nome: "Jason",
  idade: 20,
  solteiro: true,
  hobbies: "sei la",
};

pessoa.endereco = {
  rua: "alguma rua",
  cidade: "são paulo",
  estado: "SP",
};

// console.log(pessoa);

function mostrarInfoPessoa(pessoa) {
  console.log("Informações da pessoa");
  console.log(`Nome: ${pessoa.nome} (Tipo: ${typeof pessoa.nome})`);
  console.log(`Idade: ${pessoa.idade} (Tipo: ${typeof pessoa.idade})`);
  console.log(`Solteiro: ${pessoa.solteiro} (Tipo: ${typeof pessoa.solteiro})`);
  console.log(`Hobbies: ${pessoa.hobbies} (Tipo: ${typeof pessoa.hobbies})`);
  console.log("Informações de localidade");
  console.log(
    `Cidade: ${pessoa.endereco.cidade} (Tipo: ${typeof pessoa.endereco.cidade})`
  );
  console.log(
    `Hobbies: ${pessoa.endereco.rua} (Tipo: ${typeof pessoa.endereco.rua})`
  );
  console.log(
    `Hobbies: ${pessoa.endereco.estado} (Tipo: ${typeof pessoa.endereco
      .estado})`
  );
}

mostrarInfoPessoa(pessoa);

//exercicio 3
const listaPessoa = [
  { nome: "Joao", idade: 30, cidade: "São Paulo" },
  { nome: "Maria", idade: 25, cidade: "Brasilia" },
  { nome: "Zé", idade: 40, cidade: "Santos" },
];

function mostrarListaPessoas(pessoas) {
  console.log("Lista de pessoas:");
  pessoas.forEach((pessoa) => {
    console.log(
      `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`
    );
  });
}

function filtrarPorCidade(pessoas, cidade) {
  return pessoas.filter((pessoa) => pessoa.cidade === cidade);
}

// mostrarListaPessoas(listaPessoa);

listaPessoa.push({ nome: "Angelica", idade: 28, cidade: "Minas Gerais" });
//nova chamada com add de pessoa nova
mostrarListaPessoas(listaPessoa);

const pessoasSaopaulo = filtrarPorCidade(listaPessoa, "São Paulo");

console.log("Quem é de São Paulo:");
console.log(pessoasSaopaulo);

// criando calculadora simples:

const calculadora = {
  soma: function (a, b) {
    return a + b;
  },
  subtracao: function (a, b) {
    return a - b;
  },
  multiplicacao: function (a, b) {
    return a * b;
  },
  divisao: function (a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      console.log("Divisão por zero não é permitido");
    }
  },
  calcularMedia: function (numeros) {
    const soma = numeros.reduce((total, numero) => total + numero, 0);
    return soma / numeros.length;
  },
};

const notasMedia = [10, 8, 7, 9];

console.log("Soma:" + calculadora.soma(5, 5));
console.log("Subtração:" + calculadora.subtracao(10, 5));
console.log("Multiplicação:" + calculadora.multiplicacao(3, 9));
console.log("Divisao:" + calculadora.divisao(100, 7));
console.log("Calcular Media:" + calculadora.calcularMedia(notasMedia));

//exercicio 5

const contaBancaria = {
  cliente: "Jason",
  saldo: 1000,

  depositar: function (valor) {
    this.saldo += valor;
  },

  sacar: function (valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
    } else {
      console.log("Saldo Insulficiente");
    }
  },
};

const cliente = {
  nome: "carlos",
  conta: contaBancaria,
};

function mostrarSaldoCliente(cliente) {
  console.log(`Nome do cliente: ${cliente.nome}`);
  console.log(`Saldo do cliente: ${cliente.conta.saldo}`);
}

cliente.conta.depositar(500);
cliente.conta.sacar(200);

mostrarSaldoCliente(cliente);
