//Funções

//criando a função
/*function saudacao(){
console.log('Bom dia!');
}*/
//Chamando a função
//saudacao()

//exemplo de função
function saudacao(nome){
    console.log(`Bom dia, ${nome}!`);
}
saudacao('Jurema Cleide Ohana');
let variavel = saudacao('Grosélia Araujo');
console.log(variavel); // Vai retornar undefined
//Funções não retoram valor algum, a não ser que seja acrescentado um return.
function segsaudacao(nome){ 
    return `Bom dia, ${nome}!`;
}
//Tudo o que estiver abaixo de return, não será executado.
variavel = segsaudacao('Grosélia Araujo');
console.log(variavel);

//Criando uma função de soma

function soma(x, y){
return Number(x + y);
}

console.log(soma(4, 6));
console.log(soma(4, 15));
//As vaiáveis dentro da função são variáveis locais, portanto elas não existem fora da função.
//Outra maneira de se utilizar funções é atribuindo-a a variáveis;

const multiplicacao = function (n, m){
    return Number(n * m);
};
console.log(multiplicacao(5, 15));
// Arrow function
const raiz = n => Number(n **0.5); // Quando uma arrow funcion tem só uma linha, é possível escrevê-la assim sem erro de sintaxe.
console.log(raiz(144));
console.log(raiz(121));
