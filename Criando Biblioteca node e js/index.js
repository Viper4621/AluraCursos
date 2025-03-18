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
  verificaPalavrasDuplicadas(texto);
});

console.log(caminhoArquivo);
//agora criamos uma function para verificar palavras duplicadas
//criar um array com as palavras
//contar as ocorrencias
//montar um objeto com resultados
function verificaPalavrasDuplicadas(texto) {
  //parametro do split separador toda string cada espaço colocar como elemento deixar ele com espaço dentro do array
  const listaPalavras = texto.split(" ");
  const resultado = {};
  //js vai criar propriedade com valor ou se ja existir atribuir novo valor
  //   objeto[propriedade] = valor;
  //agora vamos informar que o array criado e para incluir em resultados se não existir e se exitir count+1
  listaPalavras.forEach((palavra) => {
    resultado[palavra] = (resultado[palavra] || 0) + 1;
  });
  console.log(resultado);
}

//tratamento de função: o js vai apresentar\n\ = quebra de linha () ele vai msotrar como palavra e tbm vai dar palavras curtas
//e tambem palavras que tem letra inicial maiuscula e minuscula
