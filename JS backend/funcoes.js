//parametros ou argumentos tem que ser passados na ordem que a função é criada
//retorno
//console.log só exibe
//quiser pegar resultado de processamento temos que usar return
//

function exibirInfosEstudante(nome, nota) {
  return `O nome é ${nome} e a nota foi ${nota}`;
}

console.log(exibirInfosEstudante("Erick", 10));
console.log(exibirInfosEstudante("Luciano", 10));

function somarDoisNumeros(a, b) {
  return a + b;
}

somarDoisNumeros(10, 15);

const resultado = somarDoisNumeros(10, 15);

console.log(resultado);

function dividir(dividendo, divisor) {
  return dividendo / divisor;
}

const divisao = dividir(10, 2);
console.log(divisao);
console.log(`o resultado é ${divisao}`);

const novoResultado = dividir(2, 10);
console.log(`O resultado é ${novoResultado}`);

//exemplo de erro por não usar o return ele executa mas não retorna resultado para ser utilizado ele fica sem output
//return sempre usado na ultima linha do codigo para não parar a execução dele antes do resultado esperado

// function dividir(dividendo, divisor) {
//     dividendo / divisor;
//    }

//    const resultado = dividir(10, 2);
//    console.log(`o resultado é ${resultado}`); // o resultado é undefined

// em caso de mais de 1 bloco de codigo com return

// function dividir(dividendo, divisor) {
//     if (divisor !== 0) {
//       return dividendo / divisor;
//     } else {
//       return 'favor não dividir por zero';
//     }
//    }

//    const resultado = dividir(10, 5);
//    console.log(resultado); // 2
//    const resultadoZero = dividir(10, 0);
//    console.log(resultadoZero); // 'favor não dividir por zero'
