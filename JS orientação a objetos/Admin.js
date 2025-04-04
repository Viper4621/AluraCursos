//padrão de class sempre arquivo com letra inicial maiuscula
import User from "./User.js";

//como fazer admin usar partes de outra class:
//no constructor passamos os parametros que desejamos herdar
//depois de definir os parametros usamos o super()
//pegar os aprametros que desejamos reutilizar super = da onde iremos herdar como já definimos os this.nome e etc ele ira usar essa logica
//e nos trazer por herança no caso User
export default class Admin extends User {
  constructor(nome, email, nascimento, role = "admin", ativo = "true") {
    super(nome, email, nascimento, role, ativo);
  }
  exibirInfos() {
    const infos = super.exibirInfos();
    return `admin - ${infos}`;
  }
  //asinatura de função o js não consegue trabalhar com 2 funções de mesmo nome para fazer polimorfismo
  criarCurso(nomeCurso, qtdVagas) {
    return `curso: ${nomeCurso} quantidade de vagas: ${qtdVagas}`;
  }
}

// const novoAdmin = new Admin("Rodrigo", "rod4621@gmail.com", "10/08/1985");
// console.log(novoAdmin);
// console.log(novoAdmin.exibirInfos());
// // console.log(novoAdmin.exibirNome());
// console.log(novoAdmin.criarCurso("javascript", 20));
