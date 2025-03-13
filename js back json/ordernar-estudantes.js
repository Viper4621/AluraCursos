const estudantes = require("./estudantes.json");

//para ordernar usamos metodo sorte sempre usa a e b
function ordena(lista, propriedade) {
  return lista.sort((a, b) => {
    if (a[propriedade] < b[propriedade]) return -1;
    if (a[propriedade] > b[propriedade]) return 1;
    return 0;
  });
}
//desta forma ordemos qualquer dado de um objeto
const listaOrdenada = ordena(estudantes, "nome");
console.log(listaOrdenada);
