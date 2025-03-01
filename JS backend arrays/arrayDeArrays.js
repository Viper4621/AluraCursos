const alunos = ["kaio", "juliana", "david", "davi"];
const notas = [10, 8, 6, 9];

const lista = [alunos, notas];
//abaixo como temos 2 array em 1
//usamos lista[0][0] referente ao array alunos para pegar kaio
//lista[1] selecionar o 2 array no caso das notas e a posição 0 para 1 item do array
// console.log(`
//     o aluno da posição 1 é ${lista[0][0].toUpperCase()}
//     a nota desse aluno é ${lista[1][0]}

//     o aluno da posição 2 é ${lista[0][1].toUpperCase()}
//     a nota desse aluno é ${lista[1][1]}

//     o aluno da posição 3 é ${lista[0][2].toUpperCase()}
//     a nota desse aluno é ${lista[1][2]}

//     o alunoda posição 4 é ${lista[0][3].toUpperCase()}
//     a nota desse aluno é ${lista[1][3]}`);

function aprovado(nota) {
  if (nota >= 7) {
    return "Parabens você passou de ano";
  } else {
    return "Estude mais";
  }
}

for (let i = 0; i < alunos.length; i++) {
  console.log(`
      O aluno da posição ${i + 1} é ${lista[0][i].toUpperCase()}
      A nota desse aluno é ${lista[1][i]}
      Status: ${aprovado(lista[1][i])}
    `);
}
