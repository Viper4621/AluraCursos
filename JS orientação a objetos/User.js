//criando class eleas utilizam função especial constructor nos parametros tem que colocar todas as propriedades da classe
class User {
  constructor(nome, email, nascimento, role, ativo = true) {
    this.nome = nome;
    this.email = email;
    this.nascimento = nascimento;
    this.role = role || "estudante";
    this.ativo = ativo;
  }

  exibirInfos() {
    return `${this.nome}, ${this.email}`;
  }
}

const novoUser = new User("Erick", "cdzbr46211@gmail.com", "06/06/1988");
//console.log(novoUser);
//console.log(novoUser.exibirInfos());
//user e uma classe porem internamente da para ver se o novoUser é uma copia de User ou seja é herança de prototipo serve para TS
console.log(User.prototype.isPrototypeOf(novoUser));
