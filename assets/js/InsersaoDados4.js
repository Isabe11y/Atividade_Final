// lê o valor do jantar
  var jantar = Number(prompt("Valor total do Jantar R$: "));

  // calcula os dados
  var garcom = jantar * 0.10;
  var total = jantar + garcom;

  // apresenta as respostas
  alert("Taxa do Garçom R$: " + garcom.toFixed(2) + "\nTotal R$: " + total.toFixed(2));