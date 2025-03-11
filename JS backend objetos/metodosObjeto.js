const estudante = {
  nome: "José Silva",
  idade: 32,
  cpf: "12312312312",
  turma: "JavaScript",
  bolsista: true,
  telefones: ["551199999998", "551199999993"],
  //   enderecos: [
  //     {
  //       rua: "Rua Joseph Climber",
  //       numero: "45",
  //       complemento: "apto 43",
  //     },
  //     {
  //       rua: "Rua Dona Clotilde",
  //       numero: "71",
  //       complemento: null,
  //     },
  //   ],
};

//metodo de objeto object.keys ele mostra as chaves que temos dentro do objeto
//devolve um array com lista de chaves do objeto estudante como lista de strings
//oq fazer com array de chaves?
const chavesObjeto = Object.keys(estudante);

console.log(chavesObjeto);
//aqui vamos verificar se dentro deste array existe com includes endereços e aplicamos um erro caso não estiver
if (!chavesObjeto.includes("enderecos")) {
  console.error("precisa de um endereço");
}
//Object.keys = retorna array
//Object.value = retorna valores
//Object.entries = cria um array juntando a chave e o valor
