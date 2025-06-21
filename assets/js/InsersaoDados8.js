// lê o preço do produto
  var preco = Number(prompt("Digiter um preço R$: "));

  // calcula valores à vista e das parcelas
  var avista = preco - (preco * 0.10); 

 // ou: var avista = preco * 0.90;
  var parcelado = preco / 3;

  // exibe as respostas
  alert("À Vista com desconto de 10% R$: " + avista.toFixed(2) + "\nOu 3x de R$: " + parcelado.toFixed(2));