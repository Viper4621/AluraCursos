//alteramos para de padrão ter mensagem que lsita esta vazia
//agora selecionamos o elemento da msg e armazenamos
const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");
//vamos criar função para ver se esta vazia ou não nossa lista
//agora vamos pedir para selecionar todos li de nossa lista de compras
function verificarListaVazia(listaDeCompras) {
  const itensDaLista = listaDeCompras.querySelectorAll("li");
  if (itensDaLista.length === 0) {
    mensagemListaVazia.style.display = "block";
  } else {
    mensagemListaVazia.style.display = "none";
  }
}

export default verificarListaVazia;
