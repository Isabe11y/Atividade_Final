  // lê um número
  var num = Number(prompt("Digite um número: "));

  // calcula vizinhos
  var anterior = num - 1;
  var posterior = num + 1;

  // exibe a resposta
  alert(" Os Vizinhos do "+ num + " são: " + anterior + " e " + posterior);