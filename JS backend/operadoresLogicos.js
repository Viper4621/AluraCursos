const notaFinal = 7;
const faltas = 3;
const advertencias = 0;

//aqui é se nota final menor que 7 ou faltas > 4 = resultado reprovado
// if (notaFinal < 7 || faltas > 4) {
//   console.log("Reprovado, Boas festas");
// } else {
//   console.log("Aprovado, Boas festas");
// }
// aqui queremos que nota seja minimo 7 e faltas no maximo 4 e tem que ser true nos 2 para dar certo
if (notaFinal < 7 && faltas > 4) {
  console.log("Reprovado, Boas festas");
} else {
  console.log("Aprovado, Boas festas");
}
//truthy e false caso abaixo queremos que não tenha advertencias como a const tem valor 0 e usamos!advertencias
//vai gerar true e usando && queremos 2 true para acessar o bloco de codigo sendo assim funcionando ok recebeu bonus
if (faltas >= 2 && !advertencias) {
  console.log("recebeu bonus");
} else {
  console.log("nao recebeu bonus");
}
