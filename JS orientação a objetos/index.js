import User from "./User.js";
import Admin from "./admin.js";
import Docente from "./Docente.js";

const novoUser = new User("Erick", "cdzbr46211@gmail.com", "06/06/1988");
console.log(novoUser.exibirInfos());
// console.log(novoUser.exibirInfos());

const novoAdmin = new Admin("Abreu", "abreu4621@gmail", "10/10/1988");
console.log(novoAdmin.exibirInfos());

const novoDocente = new Docente("alguem", "algummail@gmail.com", "05/09/2000");
console.log(novoDocente.exibirInfos());

// novoUser.nome = "Jason";
// console.log(novoUser.nome);
// console.log(novoUser.nome);

//propriedade ou metodo ser alterado por fora da classe aqui conseguimos mudar erick para jason
// novoUser.#nome = "Jason";
//não deixa mudar e nem acessar fora da class
//SyntaxError: Private field '#nome' must be declared in an enclosing class vai dar erro
// console.log(novoUser.exibirInfos());
// console.log(novoUser.#nome);
//para não conseguir fazer isto podemos fazemos encapsulamento atributos privados
//em nossa class declaramos fora do constructor #nome no caso desejamos o nome
//e no construtor no parametro this.#nome
// export default class User {
//     #nome;
//     constructor(nome, email, nascimento, role, ativo = true) {
//       this.#nome = nome;
//       this.email = email;
//       this.nascimento = nascimento;
//       this.role = role || "estudante";
//       this.ativo = ativo;
//     }

//     exibirInfos() {
//       return `${this.#nome}, ${this.email}`;
//     }
//   }
