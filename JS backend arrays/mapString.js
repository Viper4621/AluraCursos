//map pode fazer qualquer tipo de alteração no caso modificamos para UpperCase
const nomes = ["ana julia", "Caio Vinicios", "Bia silva"];

const padronizados = nomes.map((nome) => nome.toUpperCase());

console.log(padronizados);

const nome = "Alura";

let letrasMaisculas = "";

for (let i = 0; i < nome.length; i++) {
  letrasMaisculas += nome[i].toUpperCase();
}

console.log(letrasMaisculas);

const nomeDoCurso = "Fundamentos em JS";
const nomePlataforma = " Alura";

const completa = nomeDoCurso.concat(nomePlataforma).toUpperCase();

console.log(completa);
