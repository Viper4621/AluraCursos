// const estudanteReprovou = function estudanteReprovou(notaFinal, faltas) {
//   if (notaFinal < 7 && faltas > 4) {
//     return true;
//   } else {
//     return false;
//   }
// };

//arrow function são funções anonimas não funciona no topo do codigo não tentar chamar antes de ser declarada
const estudanteReprovou = (notaFinal, faltas) => {
  if (notaFinal < 7 && faltas > 4) {
    return true;
  } else {
    return false;
  }
};

//abaixo função curta de 1 linha ou para callback function
const exibirNome = (nome) => nome;

console.log(exibirNome("Jason"));

console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(10, 1));

//função prende o codigo para separar responsabilidades e apenas executar quando necessario
//pode ter parametro necessario ou não
