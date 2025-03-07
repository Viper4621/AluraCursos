const estudante = {
  nome: "José Silva",
  idade: 32,
  cpf: "12312312345",
  turma: "JavaScript",
  bolsista: true,
  telefones: ["55119999911", "55119999911"],
  //criando objeto dentro de objeto usamos quando temos maior volume de dados exemplo endereço que tem rua numero complemento
  enderecos: [
    {
      rua: "alguma rua",
      numero: "43",
      complemento: "casa",
    },
    {
      rua: "auei",
      numero: "adaS",
      complemento: "",
    },
  ],
};

//podemos criar no nosso objeto ou então caso preferir usar o metodo push com os dados do objeto para incluir onde desejarmos
estudante.enderecos.push({
  rua: "alguma rua nova",
  numero: "4333",
  complemento: "",
});
// console.log(estudante.enderecos); // busca array completo

// console.log(estudante.enderecos); // busca array completo
// console.log(estudante.enderecos[2]); // busca apenas o objeto
//podemos usar varios metodos como o filter que colocamos parametro pra filtrar endereco.completo se tiver mostrar
const listaEnderecosComComplemento = estudante.enderecos.filter(
  (endereco) => endereco.complemento
);

console.log(listaEnderecosComComplemento);
