function comprar() {
  let tipo = document.getElementById("tipo-ingresso");
  //temos que converter em numero pois vai dar erro que o js vai devolver string
  let qtd = parseInt(document.getElementById("qtd").value);

  if (tipo.value == "pista") {
    comprarPista(qtd);
  } else if (tipo.value == "superior") {
    comprarSuperior(qtd);
  } else {
    comprarInferior(qtd);
  }
}

//função para pista
function comprarPista(qtd) {
  let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);
  if (qtd > qtdPista) {
    alert("Quantidade indisponível para tipo pista");
  } else {
    qtdPista = qtdPista - qtd;
    document.getElementById("qtd-pista").textContent = qtdPista;
    alert("Compra realizada com sucesso");
  }
}

//função para cadeira superior
function comprarSuperior(qtd) {
  let qtdSuperior = parseInt(
    document.getElementById("qtd-superior").textContent
  );
  if (qtd > qtdSuperior) {
    alert("Quantidade indisponível para tipo superior");
  } else {
    qtdSuperior = qtdSuperior - qtd;
    document.getElementById("qtd-superior").textContent = qtdSuperior;
    alert("compra realizada com sucesso");
  }
}

// função para cadeira inferior
function comprarInferior(qtd) {
  let qtdInferior = parseInt(document.getElementById("qtd-inferior").value);
  if (qtd > qtdInferior) {
    alert("quantidade indisponível para tipo inferior");
  } else {
    qtdInferior = qtdInferior - qtd;
    document.getElementById("qtd-inferior").textContent = qtdInferior;
    alert("compra realizada com sucesso");
  }
}
