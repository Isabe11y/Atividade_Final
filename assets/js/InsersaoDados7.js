// lê os dados de entrada
  var conta = Number(prompt("Valor da Conta R$: "));
  var num = Number(prompt("Número de Clientes: "));

  // calcula o valor individual por cliente
  var individual = conta / num;
  
  // exibe a resposta (com 2 casas decimais no valor)
  alert("Valor por Cliente R$: " + individual.toFixed(2));