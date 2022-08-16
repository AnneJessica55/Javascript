//Math
let num1 = 9.545859;
//let num2 = Math.floor(num1);//arrendonda para baixo
//let num2 = Math.ceil(num1);// arredonda para cima
let num2 = Math.round(num1);//arredondamento certo
console.log(num2);
//console.log(Math.max(1, 2 , 3, 4, 1500, 6, -1600, 8, 5000))//retorna o maior valor da sequencia
console.log(Math.min(1, 2 , 3, 4, 1500, 6, -1600, 8, 5000))//retorna o menor valor da sequencia
console.log(Math.round(Math.random()*(10-5)+5));//gera um número aleatório entre 10 e 5