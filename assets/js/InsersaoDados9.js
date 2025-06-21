// lê as notas do aluno
  var nota1 = Number(prompt("Digite a 1ª Nota: "));
  var nota2 = Number(prompt("Digite a 2ª Nota: "));

  // calcula a média das notas (não esqueça do parênteses)
  var media = (nota1 + nota2) / 2;

  // exibe a média das notas
  alert("Média Final: " + media.toFixed(1));