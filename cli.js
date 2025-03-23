// padrao sempre na pasta raiz npm init -y
//padrao apois main usar "type": module
import fs from "fs";
import path from "path"; //biblioteca nativa do node para gerenciar caminhos relativos e absolutos em todos arquivos
import trataErros from "./erros/funcoesErros.js";
import { contaPalavras } from "./index2.js";
import { montaSaidaArquivo } from "./helpers.js";
import { Command } from "commander";

const program = new Command();

program
  .version("0.0.1")
  .option("-t, --texto <string>", "caminho do texto a ser processado")
  .option(
    "-d, --destino <string>",
    "caminho da pasta onde salvar o arquivo de resultados"
  )
  .action((option) => {
    const { texto, destino } = option;

    if (!texto || !destino) {
      console.error("erro favor inserir caminho de origem e destino");
      program.help();
      return;
    }

    const caminhoTexto = path.resolve(texto);
    const caminhoDestino = path.resolve(destino);

    try {
      processaArquivo(caminhoTexto, caminhoDestino);
      console.log("texto processado com sucesso");
    } catch (erro) {
      console.log("ocorreu erro no processamento", erro);
    }
  });

program.parse();

function processaArquivo(texto, destino) {
  fs.readFile(texto, "utf-8", (erro, texto) => {
    try {
      if (erro) throw erro;
      const resultado = contaPalavras(texto, link); //ao exportar o a função conta palavras agora temos que mudar na função para colocar o texto e , link
      criaEsalvaArquivo(resultado, destino);
    } catch (erro) {
      trataErros(erro);
    }
  });
}

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
  const textoPalavras = montaSaidaArquivo(listaPalavras);

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
