// variavel com valor de função

//expressão de função:
const estudanteReprovou = function estudanteReprovou(notaFinal, faltas) {
  if (notaFinal < 7 && faltas > 4) {
    return true;
  } else {
    return false;
  }
};

console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(10, 1));

//hoisting quando aquivo é carregado as function são lidas antes então quando executar um console.log em qualquer parte
//do codigo então tanto faz a ordem
// já em expressão de função são funções anonimas existe a necessidade de usar o console.log apos a função não recebendo hoisting
