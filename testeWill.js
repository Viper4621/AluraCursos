const tabDataInicio = ["01/01/2024", "15/10/2024", "01/01/2025", "15/08/2025"];
const tabDataFim = ["31/12/2024", "15/02/2025", "30/06/2025", "31/12/2025"];

const tabTotal = tabDataInicio.concat(tabDataFim);

function verificarData(pInicio, pFim) {
  if (tabTotal.includes(pInicio) && tabTotal.includes(pFim)) {
    console.log("Ok, ambas as datas tem interseção");
  } else if (tabTotal.includes(pInicio) || tabTotal.includes(pFim)) {
    console.log("Ok, uma ou ambas datas tem interseção");
  } else {
    console.log("Erro, ambas as datas não tem interseção");
  }
}

// Exemplo de uso
verificarData("01/01/2024", "31/12/2024"); // Ok, ambas as datas tem interseção
verificarData("02/01/2024", "31/12/2025"); // Ok, uma das tadas tem interseção
verificarData("10/10/2024", "30/12/2025"); //Erro, ambas datas não tem interseção
