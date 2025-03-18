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
  quebraEmParagrafos(texto);
  //   verificaPalavrasDuplicadas(texto);
});

console.log(caminhoArquivo);
//agora criamos uma function para verificar palavras duplicadas
//criar um array com as palavras
//contar as ocorrencias
//montar um objeto com resultados

function quebraEmParagrafos(texto) {
  //aqui estamos criando a função para quebrar linha no split ('\n') <=== detecta quebra de linha para separar
  //aproveitando o problema de maiuscula e minuscula toLowerCase()
  const paragrafos = texto.toLowerCase().split("\n");
  //Com volumes de dados muito grandes ao inves de criar 2 loops filter/map podemos usar flat
  //ele é mais performatico que fazer 2 funções
  const contagem = paragrafos.flatMap((paragrafo) => {
    if (!paragrafo) return [];
    return verificaPalavrasDuplicadas(paragrafo);
  });
  console.log(contagem);
}

function limpaPalavras(palavra) {
  return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}

function verificaPalavrasDuplicadas(texto) {
  //parametro do split separador toda string cada espaço colocar como elemento deixar ele com espaço dentro do array
  const listaPalavras = texto.split(" ");
  const resultado = {};
  //js vai criar propriedade com valor ou se ja existir atribuir novo valor
  //   objeto[propriedade] = valor;
  //agora vamos informar que o array criado e para incluir em resultados se não existir e se exitir count+1
  listaPalavras.forEach((palavra) => {
    if (palavra.length >= 3) {
      const palavraLimpa = limpaPalavras(palavra);
      resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
    }
  });
  return resultado;
}

//tratamento de função: o js vai apresentar\n\ = quebra de linha () ele vai msotrar como palavra e tbm vai dar palavras curtas
//e tambem palavras que tem letra inicial maiuscula e minuscula
