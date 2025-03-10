const estudante = {
  nome: "José Silva",
  idade: 32,
  cpf: "12312312312",
  turma: "JavaScript",
  bolsista: true,
  telefones: ["551199999998", "551199999993"],
  enderecos: [
    {
      rua: "Rua Joseph Climber",
      numero: "45",
      complemento: "apto 43",
    },
    {
      rua: "Rua Dona Clotilde",
      numero: "71",
      complemento: null,
    },
  ],
};

//objetos não tem ordem indice
//for in ele percorre o objeto e verifica cada item que temos dentro do objeto as chaves
//notação de colchetes no for in
//da forma estamos pedindo para retornar os valores que existem para cada chave do objeto
for (let chave in estudante) {
  const tipo = typeof estudante[chave]; // para armazenar o type de cada chave
  if (tipo !== "object" && tipo !== "function") {
    const texto = `A chave ${chave} tem o valor ${estudante[chave]}`;
    console.log(texto);
  }
}
//valores primitivos vem ok / chaves que tem objetos dentro de objeto ou seja aparece que o js esta tentando converter obj => string
//object Object como resolver em nosso for criamos a const para armazenar e uma função de comparar se e diferente de obj e func
//se for ele mostra vai mostrar apenas oq tem dados
