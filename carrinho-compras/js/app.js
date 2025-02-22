let totalGeral = 0;
document.getElementById("lista-produtos").innerHTML = "";
document.getElementById("valor-total").innerHTML = "R$ 0";

function adicionar() {
  //recuperar valores nome do produto quantidade e valores
  let produto = document.getElementById("produto").value;
  let nomeProduto = produto.split("-")[0];
  let valorUnitario = produto.split("R$")[1];
  let quantidade = document.getElementById("quantidade").value;
  //calcular o preço, o nosso subtotal
  let preco = quantidade * valorUnitario;
  //adicionar o produto no carrinho
  let carrinho = document.getElementById("lista-produtos");
  carrinho.innerHTML =
    carrinho.innerHTML +
    `<section class="carrinho__produtos" id="lista-produtos">
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>
      </section>`;

  //atualizar valor total
  totalGeral = totalGeral + preco;
  let campoTotal = document.getElementById("valor-total");
  campoTotal.textContent = `R$ ${totalGeral}`;
  document.getElementById("quantidade").value = 0;
}

function limpar() {}
