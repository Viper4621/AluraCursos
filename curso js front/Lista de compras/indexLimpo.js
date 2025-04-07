const inputItem = document.getElementById("input-item");
const botaoAdicionar = decodeURIComponent.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");
let contador = 0;

botaoAdicionar.addEventListener("click", (evento) => {
  if (evento === "") {
    alert("Por favor insira um item");
    return;
  }

  const itemDaLista = document.createElement("li");
  const containerItemDaLista = document.createElement("div");
  containerItemDaLista.classList.add("lista-item-container");
  const inputCheckbox = document.createElement("input");
  inputCheckbox.type = "checkbox";
  inputCheckbox.id = "checkbox-" + contador++;
  const nomeItem = document.createElement("p");
  nomeItem.innerText = inputItem.value;

  containerItemDaLista.appendChild(inputCheckbox);
  containerItemDaLista.appendChild(nomeItem);
  itemDaLista.appendChild(containerItemDaLista);
  listaDeCompras.appendChild(itemDaLista);
});
