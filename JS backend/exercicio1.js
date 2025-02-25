var string = "texto";
var number = 0;
var boleano = true;

var nome = "erick";
var sobrenome = "luciano";
var nomeCompleto = `${nome} ${sobrenome}`;
var mostrarNome = `${nomeCompleto}`;

console.log(mostrarNome);

var dado = "idade";
var idade = 36;
var idadeCompleta = `${dado} + ${idade}`;
console.log(idadeCompleta);

var valor1 = 10;
console.log(valor1);
valor1 = 20;
console.log(valor1);

var escopo = "texto";
console.log(escopo);

if (1 > 0) {
  let escopo2 = "novo texto";
  console.log(escopo2);
}

// console.log(escopo2); erro de referencia não definido pois tentamos acessar de dentro de um escopo

let chovendo = true;

if (chovendo == true) {
  console.log("Leve seu guarda chuva");
} else {
  console.log("não precisa de guarda chuva");
}
