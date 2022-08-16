
// criando umm Array
let alunos = ['Jurema'/*0*/, 'Pedro'/*1*/, 'Rojeria'/*2*/, 'Rejinaudo'/*3*/];
//console.log(alunos);
//console.log(alunos[2]);
//Para adicionar um valor no final da Array, utiliza-se a função push:
alunos.push('Jeriwânia');
console.log(alunos);
//Para adicionar um valor no início da Array, utiliza-se da função unshift:
alunos.unshift('Jamime');
console.log(alunos);
//Para remover um valor no final da Array utiliza-se a função pop
const removido = alunos.pop();
console.log(`Esse é o novo vetor [${alunos}.] O nome removido foi o ${removido}.`);
//Para remover o primeiro valor da Array se utiliza a função shift:
const removida = alunos.shift();
console.log(`Esse é o novo vetor [${alunos}.] O nome removido ${removida}.`)
//Para substituir um valor já conhecido por um dentro da Array
alunos[2] = removida;
console.log(alunos[2]);
console.log(removida);
// Para deletar um valor da array sem alterar os índices  se utiliza a função delete 
delete alunos[2];
console.log(alunos);
console.log(typeof(alunos));
console.log(alunos[2]);
//Para guardar no coraçãozinho
/*Quando usamos const com tipos primitivos, esse valor nunca mais poderá ser alterado. Nesse caso, além de const não permitir reatribuição, o valor também é imutável (consequentemente, nunca podemos alterar essa constante).

Já quando usamos const com valores mutáveis (como arrays e objetos), a variável continua sendo constante, porém os valores dentro do objeto poderão ser alterados. Isso acontece porque quando alteramos um valor interno de um objeto, não ocorre a reatribuição da variável com sinal de atribuição = (a variável continua apontando para o mesmo local na memória), apenas a alteração de um valor interno do mesmo objeto*/

