//encontrar btn add tarefa
const btnAdicionarTarefa = document.querySelector(".app__button--add-task");
const formAdicionarTarefa = document.querySelector(".app__form-add-task");
const textArea = document.querySelector(".app__form-textarea");

const tarefas = [];

function criarElementoTarefa(tarefa) {
  const li = document.createElement("li");
  li.classList.add("app__section-task-list-item");

  const svg = document.createElement("svg");
  svg.innerHTML = `<svg>
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>
    </svg>`;
  const paragrafo = document.createElement("p");
  paragrafo.textContent = tarefa.descricao;

  const botao = document.createElement("button");
  const imagemDoBotao = document.createElement("img");
  imagemDoBotao.setAttribute("src", "/imagens/edit.png");
  //pega o botao e coloca imagem com append
  botao.append(imagemDoBotao);

  li.append(svg);
  li.append(paragrafo);
  li.append(botao);
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
  //estamos criando no local uma chave de acesso que ira armazenar nosso array de tarefas
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
});
