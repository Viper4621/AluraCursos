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

  verificarListaVazia();

  const diaDaSemana = new Date().toLocaleDateString("pt-br", {
    weekday: "long",
  });

  const hora = new Date().toLocaleTimeString("pt-br", {
    hour: "numeric",
    minute: "numeric",
  });

  const data = new Date().toLocaleDateString("pt-br");
  const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`;
  console.log(dataCompleta);
});

const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia() {
  const itemDaLista = listaDeCompras.querySelectorAll("li");
  if (itemDaLista.length === 0) {
    mensagemListaVazia.style.display = "block";
  } else {
    mensagemListaVazia.style.display = "none";
  }
}

verificarListaVazia();
