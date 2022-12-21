let vet = [5, 0, 9, 7, 4, 3, 2];
console.log('Valores:');
/*for(pos = 0; pos < vet.length; pos++){
    console.log(`O valor da posição ${pos} é igual a ${vet[pos]}`);
}*/
//Outra maneira é usando o ForIn
for(let pos in vet){
    console.log(`O valor da posição ${pos} é igual a ${vet[pos]}`);
}
console.log(`O valor 9 está na chave ${vet.indexOf(9)}`);