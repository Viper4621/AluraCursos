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
