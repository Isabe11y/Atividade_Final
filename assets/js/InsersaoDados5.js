// lê os dados de entrada
  var dias = Number(prompt("Nº de  Dias: "));
  var horas = Number(prompt("Nº de Horas: "));

  // calcula a duração
  var total = (dias * 24) + horas;

  // exibe o total
  alert("Total de Horas: " + total);