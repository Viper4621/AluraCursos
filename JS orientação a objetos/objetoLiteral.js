const user = {
  nome: "erick",
  email: "cdzbr46211@gmail.com",
  nascimento: "06/06/1988",
  role: "estudante",
  exibirInfos: function () {
    console.log(this.nome, this.email);
  },
};

// user.exibirInfos()
//aqui abaixo perde contexto
// const exibir = user.exibirInfos;
// exibir();
//isso oq? não tem contexto o this é para isso
//aqui criamos a estrutura da função
const exibir = function () {
  console.log(this.nome, this.email);
};
//agora estamos dando contexto com bind nesta const para referenciar o user e podemos chamar
const exibirNome = exibir.bind(user);
//agora ao chamar a const que esta usando a const da função + o bind para referenciar o contexto do nosso  objeto
exibirNome();

//não se utilizam arrow function para metodos não se pode prender a um contexto pois ela so tem onde é executada
const novaExibicao = function () {
  console.log(this.role, this.nascimento);
};

const exibirResto = novaExibicao.bind(user);

exibirResto();
