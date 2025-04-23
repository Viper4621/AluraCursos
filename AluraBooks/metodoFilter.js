const btnFiltrarLivrosDeFront = document.getElementById(
  "btnFiltrarLivrosFront"
);
btnFiltrarLivrosDeFront.addEventListener("click", FiltrarLivros);

function FiltrarLivros() {
  let livrosFiltrados = livros.filter(
    (livro) => livro.categoria == "front-end"
  );
  console.log(livrosFiltrados);
}
