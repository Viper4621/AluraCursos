//exibir nome
function saudacao(nome) {
  return nome;
}

console.log(`O nome é ${"erick"}`);

//verificar idade
function idade(idade) {
  if (idade >= 18) {
    console.log("Maior de idade");
  } else {
    console.log("menor de idade");
  }
}
idade(18);
//function palavra frente ou verso igual
function palindromo(string) {
  const stringInvertida = string.split("").reverse().join("");

  return string.toLowerCase() === stringInvertida.toLowerCase();
}

console.log(palindromo("ovo"));
console.log(palindromo("casa"));

//encontrar numero maior
//temos que definir inicialmente 1 numero como sendo maior para comparar os demais
function maiorNumero(num1, num2, num3, num4, num5) {
  let maior = num1;

  if (num2 > maior) {
    maior = num2;
  }

  if (num3 > maior) {
    maior = num3;
  }

  if (num4 > maior) {
    maior = num4;
  }

  if (num5 > maior) {
    maior = num5;
  }
  return maior;
}

console.log(maiorNumero(10, 20, 30, 40, 50));

const calculaPotencia = (base, expoente) => {
  return Math.pow(base, expoente);
};

const base = 2;
const expoente = 3;

const resultado = calculaPotencia(base, expoente);

console.log(`o resultado de ${base} elevado a ${expoente} é ${resultado}`);
