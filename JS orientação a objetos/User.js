//criando class eleas utilizam função especial constructor nos parametros tem que colocar todas as propriedades da classe
//export default exportar
//para trabalhar com exportação temos que usar terminal
//npm init -y lembrar de caracteres especiais em nome de pasta não aceita o comando
// dentro do package.json temos que criar geralmente depois de main "type": "module", para conseguir exportar e importar
export default class User {
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
