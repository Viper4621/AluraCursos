const estudante = {
  nome: "José Silva",
  idade: 32,
  cpf: "12312312345",
  turma: "JavaScript",
  bolsista: true,
  //transformando propriedade string em array com 2 elementos
  telefones: ["55119999911", "55119999911"],
};

//quando uma list aou array nao da conta
//criando novo objeto
//quando precisa dados msm tipo arrays / listas e dados diferentes de mesmo contexto objetos
estudante.endereco = {
  rua: "alguma rua",
  numero: "43",
  complemento: "casa",
};
//neste caso de objeto dentro de objeto
//console.log pelo endereco(numero de index nao funciona)
//sintax certa para acessar é passando o objeto e a propriedade que desejamos acessar
console.log(estudante);
console.log(estudante.endereco.rua);
