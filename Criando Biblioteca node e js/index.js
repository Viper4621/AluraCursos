//biblioteca nativa js interagir com sistema de arquivo criar deletar e criar arquivos
const fs = require("fs");

// pegar arquivo de texto receber um conteudo
//processar conteudo string
//pensar como as info vão ser processadas
//require so funciona com modulos js ou JSON
//vetor de argumentos pega valores do terminal e coloca em um array em ordem de execução
//process.argv da instruções para o terminal que vai deixar tudo dentro de array
//podemos pegar os 3 links e passar para ele
const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

//utf-8 encoding de nossos caracteres para saber como interpretar
fs.readFile(link, "utf-8", (erro, texto) => {
  console.log(texto);
});
