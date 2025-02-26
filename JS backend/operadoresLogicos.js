const notaFinal = 7;
const faltas = 3;

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
