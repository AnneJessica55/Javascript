const num1 = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = num1;
texto.innerHTML = `<p>A raiz quadrada de ${num1} é: ${Math.sqrt(num1)}</p>
<p>É um NaN? ${isNaN(num1)}</p>
<p>Arredondado para baixo: ${Math.floor(num1)}</p>
<p>Arredondado para cima: ${Math.ceil(num1)}</p>
<p>Com duas casas decimais: ${num1.toFixed(2)}</p>`;