import { criarItemDaLista } from "./scripts/criarItemDaLista.js";
//capturando o botao
const botaoAdicionar = document.getElementById("adicionar-item");
//capturando lista de compras
const listaDeCompras = document.getElementById("lista-de-compras");

//criando evento para o botao
botaoAdicionar.addEventListener("click", (evento) => {
  evento.preventDefault();
  const itemDaLista = criarItemDaLista();
  // agora pegamos a estrutura li que tem div / checkbox / paragrafo que criamos e colocamos dentro da lista originial do html
  listaDeCompras.appendChild(itemDaLista);
  verificarListaVazia();
});
//alteramos para de padrão ter mensagem que lsita esta vazia
//agora selecionamos o elemento da msg e armazenamos
const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");
//vamos criar função para ver se esta vazia ou não nossa lista
//agora vamos pedir para selecionar todos li de nossa lista de compras
function verificarListaVazia() {
  const itensDaLista = listaDeCompras.querySelectorAll("li");
  if (itensDaLista.length === 0) {
    mensagemListaVazia.style.display = "block";
  } else {
    mensagemListaVazia.style.display = "none";
  }
}

verificarListaVazia();
