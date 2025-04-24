const botoes = document.querySelectorAll(".btn");
botoes.forEach((btn) => btn.addEventListener("click", FiltrarLivros));

function FiltrarLivros() {
  const elementoBtn = document.getElementById(this.id);
  const categoria = elementoBtn.value;
  let livrosFiltrados =
    categoria == "disponivel"
      ? FiltrarPorDisponibilidade()
      : FiltrarPorCategoria(categoria);
  exibirLivrosNaTela(livrosFiltrados);
  if (categoria == "disponivel") {
    const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
    exibirValorTotalDosLivrosNaTela(valorTotal);
  }
}

function FiltrarPorCategoria(categoria) {
  return livros.filter((livro) => livro.categoria == categoria);
}

function FiltrarPorDisponibilidade() {
  return livros.filter((livro) => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosNaTela(valorTotal) {
  elementoComValorTotalDeLivrosDisponivel.innerHTML = `
  <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
      </div>`;
}
