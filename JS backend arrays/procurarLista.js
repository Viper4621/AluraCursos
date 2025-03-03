const aluno = ["joao", "juliana", "kaio", "ana"];
const medias = [10, 8, 7.5, 9];
// const lista = [] ,[] array de lista bidimensional
const lista = [aluno, medias];

function exibeNomeENota(aluno) {
  if (lista[0].includes(aluno)) {
    const indice = lista[0].indexOf(aluno);
    const mediaALuno = lista[1][indice];
    console.log(`${aluno} tem a media ${mediaALuno}`);
  } else {
    console.log("Estudante não localizado");
  }
}

exibeNomeENota("juliana");
exibeNomeENota("erick");



