const botoes = document.querySelectorAll(".btn");
botoes.forEach((btn) => btn.addEventListener("click", FiltrarLivros));

function FiltrarLivros() {
  const elementoBtn = document.getElementById(this.id);
  const categoria = elementoBtn.value;
  let livrosFiltrados = livros.filter((livro) => livro.categoria == categoria);
  console.table(livrosFiltrados);
}
