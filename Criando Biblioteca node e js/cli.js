// padrao sempre na pasta raiz npm init -y
//padrao apois main usar "type": module
import fs from "fs";
import trataErros from "./erros/funcoesErros.js";
import { contaPalavras } from "./index2.js";

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, "utf-8", (erro, texto) => {
  try {
    if (erro) throw erro;
    contaPalavras(texto, link); //ao exportar o a função comnta palavras agora temos que mudar na função para colocar o texto e , link
  } catch (erro) {
    trataErros(erro);
  }
});
