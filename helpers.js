function filtraOcorencias(paragrafo) {
  return Object.keys(paragrafo).filter((chave) => paragrafo[chave] > 1);
}

function montaSaidaArquivo(listaPalavras) {
  let textoFinal = "";
  listaPalavras.forEach((paragrafo, indice) => {
    const duplicadas = filtraOcorencias(paragrafo).join(", ");
    textoFinal += `palavras duplicadas no parágrafo ${
      indice + 1
    }: ${duplicadas} \n`;
  });
  return textoFinal;
}

export { montaSaidaArquivo };
