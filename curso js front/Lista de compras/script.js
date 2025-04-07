let botaoSalvar = document.getElementById("botao-salvar");

botaoSalvar.addEventListener("click", (event) => {
  event.preventDefault();

  const ul = document.getElementById("lista-item");
  const inputNomeItem = document.getElementById("input-item");

  if (inputNomeItem.value.trim() === "") {
    alert("Erro insira algo valido");
    return;
  }
  const itemLista = document.createElement("li");
  const containerItem = document.createElement("div");
  containerItem.style = "display:flex";
  const inputItem = document.createElement("input");
  inputItem.type = "checkbox";
  const nomeItem = document.createElement("p");
  nomeItem.textContent = inputNomeItem.value;

  ul.appendChild(itemLista);
  itemLista.appendChild(containerItem);
  containerItem.appendChild(inputItem);
  containerItem.appendChild(nomeItem);

  inputNomeItem.value = "";
});
