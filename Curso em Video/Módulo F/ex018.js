/*function soma(n = 0, j = 0){
    return n + j;
}
console.log(soma(7,6));
É possível predefinir valores para os parâmetros de uma função para evitar erros
*/
let v = function dobro(x){
    return 2 * x;
}
console.log(v(5));
//É possível colocar uma função inteira dentro de uma variável e estabelecer parâmetros.

function fat(n){
    let g = 1;
    for(c = n; c > 1; c--){
        g *= c;
    }
    return g;
}

console.log(fat(5));

//Por recursão
function fatori (n){
    if(n == 1){
        return 1;
    } else {
        return n * fatori(n-1);
    }
}
console.log(fatori(6));