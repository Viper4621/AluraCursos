const estudante = {
  nome: "José Silva",
  idade: 32,
  cpf: "12312312345",
  turma: "JavaScript",
};
//abaixo forma que conseguimos atribuir nova propriedade a objeto
estudante.telefone = "5511-5999";
console.log(estudante.telefone);
//passando apos incluir nova propriedade nosso objeto agora tem telefone
console.log(estudante);
//quando alteramos alguma propriedade que já existe em nosso objeto e damos novo console log ele mostra o antigo
//e tambem o novo atualizado se a propriedade existe é alterada se não criada
estudante.nome = "Jose jhonson";
console.log(estudante);

const estudante2 = {};
estudante2.nome = "Jack Bauer";
console.log(estudante2);
