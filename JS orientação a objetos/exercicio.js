class User {
  #nome;
  #email;
  #cpf;
  constructor(nome, email, cpf) {
    this.#nome = nome;
    this.#email = email;
    this.#cpf = cpf;
  }
  //podemos usar o acessor get para buscar a informação por fora da class
  get nome() {
    return this.#nome;
  }

  get email() {
    return this.#email;
  }

  get cpf() {
    return this.#cpf;
  }

  //   get dados() {
  //     // return `Nome: ${this.#nome} Email: ${this.#email} CPF: ${this.#cpf}`; retorna string formatada
  //     //criando return para acessar via novoUser.dados.e a info
  //     // return {
  //     //   nome: this.#nome,
  //     //   email: this.#email,
  //     //   cpf: this.#cpf,
  //     // };
  //   }
}

const novoUser = new User("Carol", "c@c.com", "12312312312");
// console.log(novoUser.dados.nome);
// console.log(novoUser.cpf);
