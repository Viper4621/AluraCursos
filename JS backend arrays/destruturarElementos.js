const aluno = ["joao", "juliana", "kaio", "ana"];
const medias = [10, 8, 7.5, 9];
// const lista = [] ,[] array de lista bidimensional
const lista = [aluno, medias];

function exibeNomeENota(aluno) {
  if (lista[0].includes(aluno)) {
    //desestruturação ele vai epgar a lista e desetruturar os 2 arrays e jogar em nova variavel aluno / medias
    //agora podemos puxar ja direto a variavel alunos.indexOF
    //media[indice] não precisando colocar como codigo antigo de acessar na lista e especificar a posição dos dados
    const [alunos, medias] = lista;
    const indice = alunos.indexOf(aluno);
    const mediaALuno = medias[indice];
    console.log(`${aluno} tem a media ${mediaALuno}`);
  } else {
    console.log("Estudante não localizado");
  }
}

exibeNomeENota("juliana");
exibeNomeENota("erick");
