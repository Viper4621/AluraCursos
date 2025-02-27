// Função de calculadora simples
const calculadoraSimples = (a, b, operacao) => {
  let resultado;
  if (operacao === "soma") {
    resultado = a + b;
  } else if (operacao === "subtracao") {
    resultado = a - b;
  } else if (operacao === "multiplicacao") {
    resultado = a * b;
  } else if (operacao === "divisao") {
    resultado = a / b;
  } else {
    resultado = "Operação não reconhecida";
  }
  return resultado;
};

console.log(calculadoraSimples(2, 4, "soma"));
