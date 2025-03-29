function User(nome, email) {
  this.nome = nome;
  this.email = email;

  this.exibirInfos = function () {
    return `${this.nome}, ${this.email}`;
  };
}

//criamos uma função com letra maiuscula usando this e uma função para retornar os dados
//apos uma const de novo usuario usando = new User(atribuimos nome , email)
//com isso ira retornar um usuario novo com os parametros de nome e email que criamos seguindo o this e trazendo o return de mostrar
const novoUser = new User("Erick", "cdzbr46211@gmail.com");
console.log(novoUser.exibirInfos());

//exemplo de utilização com call para chamar dados de uma const usando this de uma função
function exibirInfos1() {
  console.log(this.nome, this.email);
}

const user = {
  nome: "Mariana",
  email: "m@m.com",
};

exibirInfos1.call(user);

//outro exemplo de utilização de call
//uma função depois um objeto com função dentro dele podemos acessar utilizando uma função com call
function exibeMensagem(nome, email) {
  console.log(`Seu nome é ${nome}, seu email ${email}`);
}

const usuario = {
  nome: "alguem",
  email: "algum@gmail.com",
  executaFuncao: function (fn) {
    fn.call(user, this.nome, this.email);
  },
};

usuario.executaFuncao(exibeMensagem);

//outro exemplo
const userDefault = {
  exibirInfos: function () {
    console.log(this.nome, this.email);
  },
  cadastraEmail: function (email) {
    console.log(`email ${email} cadastrado com sucesso`);
  },
};

const atendente = {
  nome: "Rodrigo",
  email: "r@r.com",
  role: "atendente",
};

const gerente = {
  nome: "Juliana",
  email: "j@j.com",
  role: "gerente sênior",
  removeUsuario: function (idUsuario) {
    console.log(`usuário ${idUsuario} removido`);
  },
};

Object.setPrototypeOf(atendente, userDefault);
Object.setPrototypeOf(gerente, userDefault);

gerente.removeUsuario(123);
atendente.exibirInfos();
atendente.cadastraEmail(this.email);
