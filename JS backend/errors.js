console.log(variavel); // referenceError variavel não definida
console.log("oi";  //missing ) after argument erro de sintax

//variavel no escop global então podemos acessar de qualquer local
    const nome = ‘Camila’; // variável global

    function cumprimentar() {
      console.log(`Olá, ${nome}!`); // Acessa a var global
    }
    
    cumprimentar(); // ‘Olá, Camila!”    

// aqui existe erro pois a varivel nome esta dentro do escopo do if não podendo acessar fora
if (1 > 0) {
    let nome = ‘Ana’;
    console.log(nome); // ‘Ana’
  }
  
  // variável `nome` não está acessível
  console.log(nome); // Error: nome is not defined

// variaveis declaradas como var não seguem regra de escopo sendo então consideradas variaveis globais então mesmo exemplo
//dando certo sem erro
if (1 > 0) {
    var nome = ‘Ana’;
    console.log(nome); // ‘Ana’
  }
  
  console.log(nome); // ‘Ana’

//Variaveis declaradas dentro de uma função são consideradas variaveis locais não tendo acesso fora da função

function cumprimentar() {
    const nome = 'Camila'; // variável local
    const cumprimento = 'Olá'; // variável local
    console.log(`${cumprimento}, ${nome}!`); // “Olá, Camila!”
  }
  
  // as variáveis não podem ser acessada de fora da função
  console.log(`${cumprimento}, ${nome}!`); // Dará erro de “not defined” no console