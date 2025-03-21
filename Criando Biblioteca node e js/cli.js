// padrao sempre na pasta raiz npm init -y
//padrao apois main usar "type": module
import fs from "fs";
import trataErros from "./erros/funcoesErros.js";
import { contaPalavras } from "./index2.js";

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];
const endereco = caminhoArquivo[3];

fs.readFile(link, "utf-8", (erro, texto) => {
  try {
    if (erro) throw erro;
    const resultado = contaPalavras(texto, link); //ao exportar o a função conta palavras agora temos que mudar na função para colocar o texto e , link
    criaEsalvaArquivo(resultado, endereco);
  } catch (erro) {
    trataErros(erro);
  }
});

// async function criaEsalvaArquivo(listaPalavras, endereco) {
//   const arquivoNovo = `${endereco}/resultados.txt`;
//   const textoPalavras = JSON.stringify(listaPalavras);
//   try {
//     await fs.promises.writeFile(arquivoNovo, textoPalavras);
//     console.log("Arquivo Criado");
//   } catch (erro) {
//     throw erro;
//   }
// }

//diferenca a syntax async await mais facil // then tem metodo de encadeamento faz o codigo ficar mais longo e menos fluida
//then e mais antiga

function criaEsalvaArquivo(listaPalavras, endereco) {
  const arquivoNovo = `${endereco}/resultados.txt`;
  const textoPalavras = JSON.stringify(listaPalavras);

  fs.promises
    .writeFile(arquivoNovo, textoPalavras)
    .then(() => {
      console.log("arquivo criado com sucesso");
    })
    .catch((erro) => {
      throw erro;
    })
    .finally(() => console.log("operação finalizada"));
}
