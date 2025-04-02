import User from "./User.js";

export default class Docente extends User {
  constructor(nome, email, nascimento, role = "Docente", ativo = "true") {
    super(nome, email, nascimento, role, ativo);
  }
  aprovarEstudante(estudante, curso) {
    return `o estudante: ${estudante}, foi aprovado no curso: ${curso}, o responsavel ${this.nome}`;
  }
}

const novaDocente = new Docente("Ana", "ana.pereira@gmail.com", "05/05/1980");
// console.log(novaDocente.aprovarEstudante("Juliana", "javascript"));
