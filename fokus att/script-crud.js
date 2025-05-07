//encontrar btn add tarefa
const btnAdicionarTarefa = document.querySelector(".app__button--add-task");
const formAdicionarTarefa = document.querySelector(".app__form-add-task");
const textArea = document.querySelector(".app__form-textarea");

const tarefas = [];

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
