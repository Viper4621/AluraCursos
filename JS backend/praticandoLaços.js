const precos = [5.5, 6.2, 14, 19.5];

let desconto = 0.9;

for (let i = 0; i < precos.length; i++) {
  precos[i] = precos[i] * desconto;
}

console.log(precos);

const precos2 = [5.5, 6.2, 14, 19.5];

let desconto2 = 0.9;

for (let preco of precos2) {
  preco = precos2 * desconto2;
}

console.log(precos2);

const numeros = [5, 8, 6, 10, 7];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}

const media = soma / numeros.length;

console.log("A média dos números é:", media);

const numeros2 = [100, 200, 300, 400, 500, 600];

for (let i = numeros2.length - 1; i >= 0; i--) {
  console.log(numeros2[i]);
}

const numeros3 = [100, 200, 300, 400, 500, 600];

for (let i = numeros3.length - 1; i >= 0; i -= 2) {
  console.log(numeros3[i]);
}

const numerosPares = [];
//loop para ir ate 100 percorendo de 2 em 2
for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}

console.log(numerosPares);
