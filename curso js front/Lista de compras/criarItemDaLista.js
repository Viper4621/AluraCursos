import gerarDiaDaSemana from "./gerarDiaDaSemana.js";

//capturando o campo
const inputItem = document.getElementById("input-item");

let contador = 0;

export function criarItemDaLista() {
  if (inputItem.value === "") {
    alert("Por favor, insira um item");
    return;
  }
  //criando a estrutura de criação de elemento no html
  //temos que criar a estrutura que desejamos de acordo com o html
  //temos em nosso html uma ul id = lista-de-compras que vai ser o pai de tudo
  //criamos li
  const itemDaLista = document.createElement("li");
  //criamos uma div
  const containerItemDaLista = document.createElement("div");
  //colocamos a class do item da item
  containerItemDaLista.classList.add("lista-item-container");
  //criamos o checkbox e damos o type e id para ele e criamos um contador para incrementar a cada criação + 1
  const inputCheckbox = document.createElement("input");
  inputCheckbox.type = "checkbox";
  inputCheckbox.id = "checkbox-" + contador++;
  //por ultimo o paragrafo que vai criar pegando o valor salvo do input
  const nomeItem = document.createElement("p");
  nomeItem.innerText = inputItem.value;

  inputCheckbox.addEventListener("click", () => {
    if (inputCheckbox.checked) {
      nomeItem.style.textDecoration = "line-through";
    } else {
      nomeItem.textDecoration = "none";
    }
  });

  //agora vamos colocar o input e o paragrafo dentro da div como filhos
  containerItemDaLista.appendChild(inputCheckbox);
  containerItemDaLista.appendChild(nomeItem);
  //agora pegemos a li criada e colocamos a div + checkbox + paragrafo dentro deste li criado
  itemDaLista.appendChild(containerItemDaLista);
  const dataCompleta = gerarDiaDaSemana();

  //não basta só colocar o valor em variavel temos que criar o elemento
  const itemData = document.createElement("p");
  //agora colocamos qual informação vamos alterar
  itemData.innerText = dataCompleta;
  //aqui estemos colocando a class para formatar estilo com css
  itemData.classList.add("texto-data");
  //temos que incluir ele como filho da lista ul para ficar fora da div
  itemDaLista.appendChild(itemData);

  return itemDaLista;

  //agora vamos criar o metodo para pegar data / new date usamos tolocaleDateString pra formatar
  //pt-br e quremos mostrar weekday formato longo
}
