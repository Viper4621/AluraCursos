//encontrar btn add tarefa
const btnAdicionarTarefa = document.querySelector(".app__button--add-task");
const formAdicionarTarefa = document.querySelector(".app__form-add-task");
const textArea = document.querySelector(".app__form-textarea");
const ulTarefas = document.querySelector(".app__section-task-list");
const paragrafoDescricaoTarefa = document.querySelector(
  ".app__section-active-task-description"
);

//como desejamos salvar o local storage para ter acesso a conteudos mesmo recarregando a pagina temos que modificar igual abaixo
//e colocar tambem operador de || ou se não ele nao ira funcionar seria como se não existisse array e não deixa criar
const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
let tarefaSelecionada = null;
let liTarefaSelecionada = null;

//para nçao deixar codigo fragil vamos criar essa função para colocar nos locais que necessitam de mudanças
function atualizarTarefas() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function criarElementoTarefa(tarefa) {
  const li = document.createElement("li");
  li.classList.add("app__section-task-list-item");

  const svg = document.createElement("svg");
  svg.innerHTML = `
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>
  `;
  const paragrafo = document.createElement("p");
  paragrafo.textContent = tarefa.descricao;
  paragrafo.classList.add("app__section-task-list-item-description");

  const botao = document.createElement("button");
  botao.classList.add("app_button-edit");

  botao.onclick = () => {
    const novaDescricao = prompt("Qual é o nome da tarefa?");
    if (novaDescricao) {
      paragrafo.textContent = novaDescricao;
      tarefa.descricao = novaDescricao;
      atualizarTarefas();
    } else {
      alert("O campo de alterar a tarefa não foi digitado");
    }
  };

  const imagemDoBotao = document.createElement("img");
  imagemDoBotao.setAttribute("src", "/imagens/edit.png");
  //pega o botao e coloca imagem com append
  botao.append(imagemDoBotao);

  li.append(svg);
  li.append(paragrafo);
  li.append(botao);
  //atualizamos com if para que quando selecionar uma tarefa limpe a descrição de paragrafo antiga e desmaque a anterior
  //antes ele selecionava todas no click e não tirava a seleção agr so deixa 1 selecionada e se clicar denovo tira seleção
  li.onclick = () => {
    document
      .querySelectorAll(".app__section-task-list-item-active")
      .forEach((elemento) => {
        elemento.classList.remove("app__section-task-list-item-active");
      });
    if (tarefaSelecionada == tarefa) {
      paragrafoDescricaoTarefa.textContent = "";
      tarefaSelecionada = null;
      liTarefaSelecionada = null;
      return;
    }
    tarefaSelecionada = tarefa;
    liTarefaSelecionada = li;
    paragrafoDescricaoTarefa.textContent = tarefa.descricao;

    li.classList.add("app__section-task-list-item-active");
  };
  //agora para adicionar o retorno temos retornar essa estrutura
  return li;
}
btnAdicionarTarefa.addEventListener("click", () => {
  formAdicionarTarefa.classList.toggle("hidden");
});

formAdicionarTarefa.addEventListener("submit", (evento) => {
  evento.preventDefault();
  //criamos um objeto para pegar o valor da text area e salvar // criamos o array de tarefas acima
  const tarefa = {
    descricao: textArea.value,
  };
  //estmaos jogando essa tarefa dentro de nosso array tarefas
  tarefas.push(tarefa);
  const elementoTarefa = criarElementoTarefa(tarefa);
  ulTarefas.append(elementoTarefa);
  //estamos criando no local uma chave de acesso que ira armazenar nosso array de tarefas
  atualizarTarefas();
  textArea.value = "";
  formAdicionarTarefa.classList.add("hidden");
});

//agora percorrermos a lista de tarefa e para cada tarefa dentro vamos criar o elemento
tarefas.forEach((tarefa) => {
  //depois de percorrer a lista temos que salvar os dados em uma variavel
  const elementoTarefa = criarElementoTarefa(tarefa);
  //depois de selecionar em nosso html a class da ul vazia agora podemos colocar nossa variavel com append
  ulTarefas.append(elementoTarefa);
});

document.addEventListener("FocoFinalizado", () => {
  if (tarefaSelecionada && liTarefaSelecionada) {
    liTarefaSelecionada.classList.remove("app__section-task-list-item-active");
    liTarefaSelecionada.classList.add("app__section-task-list-item-complete");
    liTarefaSelecionada
      .querySelector("button")
      .setAttribute("disabled", "disabled");
  }
});
