function gerarDiaDaSemana() {
  const diaDaSemana = new Date().toLocaleDateString("pt-br", {
    weekday: "long",
  });
  //criamos a data para pegar dia numerico
  const data = new Date().toLocaleDateString("pt-br");
  //criamos para pegar o horario com opção de hora e minuto
  const hora = new Date().toLocaleTimeString("pt-br", {
    hour: "numeric",
    minute: "numeric",
  });
  //criamos nossa const com todos os 3 dados em template string
  const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`;
  return dataCompleta;
}

export default gerarDiaDaSemana;
