const notas = [10, 8.5, 5, 6.5, 8, 7.5];
//primeira expressão: executada apenas 1 x let indice = 0
//segunda expressão: indice < notas.length = condição de execução o laço continua percorer até chegar no comprimento doa array
//terceira expressão: incremento a cada 1 aumentar + 1 indice executada ao final do bloco
// podemos usar qualquer nome do let i , j e etxc ou nome direto
for (let indice = 0; indice < notas.length; indice++) {
  console.log(indice, notas[indice]);
}
