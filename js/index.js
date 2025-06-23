
function transformarDecimal() {
  let binario = document.getElementById("campoBinario").value;
  let resposta = document.getElementById("resposta")

  if(binario.length !== 8) {
    resposta.innerText = "Digite exatamente 8 bits!";
    resposta.style.color = "red";
    return;
  }

  let bits = binario.split('').map(Number);
  let decimal = 0;
  for (let i = 0; i < bits.length; i++) {
    decimal += bits[i] * Math.pow(2, bits.length - 1 - i);
  }

  resposta.innerText = `Decimal: ${decimal}`;
  resposta.style.color = "green";
  resposta.style.fontWeight = "bold";
}
