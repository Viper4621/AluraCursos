const estudante = {
  nome: "José Silva",
  idade: 32,
  cpf: "12312312345",
  turma: "JavaScript",
  bolsista: true,
  telefones: ["55119999911", "55119999911"],
  media: 7.5,
  estaAprovado: function (mediaBase) {
    return this.media >= mediaBase ? true : false;
  },
  //com arrowFunction vai dar errado ela não consegue lidar com this sempre que usar this usar function tradicional
  //   estaAprovado: (mediaBase) => (this.media >= mediaBase ? true : false),
};
console.log(estudante.estaAprovado(7));
//metodo sao funções executadas dentro de contexto de um objeto
