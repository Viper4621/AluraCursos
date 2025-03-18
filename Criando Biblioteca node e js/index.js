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
//porque estamos colocando a posição [2]?
//process.argv cria o array que vai receber [array com info do node index[0],caminho dos arquivos[1] e agora o que desejamos ler[2]]
const link = caminhoArquivo[2];

//utf-8 encoding de nossos caracteres para saber como interpretar
//nos parametros colocamos a const que usamos para salvar o link + formato encoder e passamos 2 função callback erro ou ok=texto
fs.readFile(link, "utf-8", (erro, texto) => {
  console.log(texto);
});

console.log(caminhoArquivo);
