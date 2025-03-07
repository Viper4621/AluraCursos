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

const objPersonagem = {
  nome: "Gandalf",
  classe: "mago",
  nivel: "20",
  aliado: {
    nome: "Saruman",
    classe: "mago",
  },
  status: "desaparecido",
};
//novamente 2 formar de acessar alguma propriedade do objeto
console.log(objPersonagem.aliado);
console.log(objPersonagem["aliado"]);
//podemos usar delete para deletar alguma propriedade das duas formas com notação de colchetes tambem funciona
//delete remove tanto o valor do objeto como as chaves
delete objPersonagem.aliado;
delete objPersonagem["aliado"];
console.log(objPersonagem.aliado);
//agora virou undefined

const pessoa = {
  nome: "Bruce Banner",
  dataNascimento: "25/01/1980",
  carteiraIdentidade: "997776-X",
  email: "profbanner@email.com",
  telefone: "+552877776666",
  cidade: "Cachoeiro de Itapemirim",
  estado: "ES",
};
//atenção metodo substring só funciona para parametros que estão dentro do nosso objeto ou array se for incluido depois
//ele não consegue realizar e temos que salvar o novo valor em uma const nova
pessoa.seguroSocial = ["1234674"];
pessoa.Cpf = ["987654321"];
console.log(pessoa);
//exemplo abaixo
const telefoneParcial = pessoa.telefone.substring(0, 4);
console.log(telefoneParcial);
