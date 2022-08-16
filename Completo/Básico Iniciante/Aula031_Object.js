//Objetos
//É possível criar uma função de forma literal
/*const pessoa = {
    nome: 'Jurema Cleide',
    sobrenome:'Ohana',
    idade:'23'
};
console.log(`O nome é ${pessoa.nome}, o sobrenome é ${pessoa.sobrenome} e a idade é ${pessoa.idade} anos.`);*/

//É possível utilizar uma função para criar objetos
function criaPessoa(nome, sobrenome, idade){
    return {
    nome,
    sobrenome,
    idade
    };
}
const pessoa = criaPessoa('Grosélia Célia', 'Araújo', 33);
console.log(`O nome é ${pessoa.nome}, o sobrenome é ${pessoa.sobrenome} e a idade é ${pessoa.idade} anos.`);

//criando um método
const pessoa1 ={
    nome:'Cocacólicas Romana',
    sobrenome:'da Silva Sauro',
    idade:'65',
fala() {
    console.log(`${this.nome} ${this.sobrenome} de ${this.idade} realizou seu cadastro com sucesso.`);
}
};
pessoa1.fala(); 