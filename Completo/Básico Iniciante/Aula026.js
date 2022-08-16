//Numbers
let num1 = 55;
let num2 = 3;
let num3 = 5.476548465
let num4 = 0.7;
let num5 = 0.1;
//console.log(num1.toString() + num2);
//a variável num1 continua sendo um number, mas o valor no console foi transformado em string;
//console.log(num1.toString(2))
//mostra o número em binário
//console.log(num3.toFixed(2));
//Estabelece quantas casas decimais serão exibidas, já com o arredondamento;
num4 += num5;
num4 += num5;
num4 += num5;
//num4 = parseFloat(num4.toFixed(2));//agora sim o JavaScript reconhece como inteiro;
//num4 = parseInt(num4.toFixed(2));//Tem a mesma função do de cima;
num4 = Number(num4.toFixed(2));//Tem a mesma função do comando acima;
console.log(Number.isInteger(num4));
console.log(num4);



