//criando class eleas utilizam função especial constructor nos parametros tem que colocar todas as propriedades da classe
//export default exportar
//para trabalhar com exportação temos que usar terminal
//npm init -y lembrar de caracteres especiais em nome de pasta não aceita o comando
// dentro do package.json temos que criar geralmente depois de main "type": "module", para conseguir exportar e importar
export default class User {
  #nome;
  #email;
  #nascimento;
  #role;
  #ativo;
  constructor(nome, email, nascimento, role, ativo = true) {
    this.#nome = nome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role || "estudante";
    this.#ativo = ativo;
  }
  //getter para fora da class chama como se fosse propriedade e o codigo interpreta sem mecher na class ou dar acesso
  //get precisa ser feito para cada propriedade boas praticas de responsabilidade unica
  get nome() {
    return this.#nome;
  }

  get email() {
    return this.#email;
  }

  get nascimento() {
    return this.#nascimento;
  }

  get role() {
    return this.#role;
  }

  get ativo() {
    return this.#ativo;
  }
  //get e set são metodos acessores
  //get deixou nossas propriedades privadas para não acessar fora usando apenas.parametro
  //set aceita um parametro e podemos criar verificações atraves de logicas internas
  //set === modificar algo por fora da classe
  set nome(novoNome) {
    if (novoNome === "") {
      throw new Error("Formato do nome não é valido");
    }
    this.#nome = novoNome;
  }
  //para criar um metodo privado usamos #no metodo
  #montaObjUser() {
    return {
      nome: this.#nome,
      email: this.#email,
      nascimento: this.#nascimento,
      role: this.#role,
      ativo: this.#ativo,
    };
  }
  //e precisamos modificar o retorno salvando em uma const os dados para acessar o objeto privado e retornar de acordo
  //ou seja nao mechemos direto com a class e sim salvamos os resultados dentro de um novo objeto
  // exibirInfos() {
  //   // const objUser = this.#montaObjUser();
  //   // return `${this.nome}, ${this.email}`;
  //   // return `${this.#nome}, ${this.#email}`;
  // }
  //desta forma abaixo conseguimos fazer polimorfismo com condições em uma função metodo esta forma se chama Overload sobrecarga de função
  //sobrecarga de metodo

  exibirInfos() {
    if (this.role === "estudante") {
      return `dados estudantes: ${this.nome}`;
    }
    if (this.role === "admin") {
      return `dados admin: ${this.nome}, ${this.role}`;
    }
    if (this.role === "docente") {
      return `dados docente: ${this.nome}, ${this.email}`;
    }
  }
  //metodos estaticos não depende estancia nova e construtor de class ou seja nao precisa de new e não utiliza o this quando
  //chamada usar apenas const algumaNome = User.exibirInfosGenericas("","")
  static exibirInfosGenericas(nome, email) {
    return `${nome}, ${email}`;
  }
}

const novoUser = new User("Erick", "cdzbr46211@gmail.com", "06/06/1988");
//console.log(novoUser);
//console.log(novoUser.exibirInfos());
//user e uma classe porem internamente da para ver se o novoUser é uma copia de User ou seja é herança de prototipo serve para TS
//console.log(User.prototype.isPrototypeOf(novoUser));
