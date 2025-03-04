const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

//metodo call back parametro é uma função chamada de volta callback
//funções que chama outras funções
//+= operador para atribuir e operar ao mesmo tempo
//o parametro nota é onde guarda os dados da interação
//forEach da valor undefinned ele executa mas não retorna nada

//abaixo esta tudo dentro

// notas.forEach(function (nota) {
//   somaDasNotas += nota;
// });

//aqui estmaos separando função
notas.forEach(somaNotas);

function somaNotas(nota) {
  somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;

console.log(`a media das notas é ${media}`);
