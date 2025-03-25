const user = {
  nome: "erick",
  email: "cdzbr46211@gmail.com",
  nascimento: "06/06/1988",
  role: "estudante",
  exibirInfos: function () {
    console.log(this.nome, this.email);
  },
};

const admin = {
  nome: "naty",
  email: "naty@gmail.com",
  nascimento: "06/06/1988",
  role: "admin",
  //   exibirInfos: function () {
  //     console.log(this.nome, this.email);
  //   },
  criarCurso: function () {
    console.log("Curso criado");
  },
};
