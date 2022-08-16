//Valores primitivos e valores por referência.
 let a = 'A';
 let b = a; //b é uma cópia de a, porém cada um possui lugar na memória.
 console.log(a, b);
 a = 'C';
 console.log(a, b);
 //Os valores em variáveis são imutáveis.
 a = 'Pimpolho';
 a[0] = 'R';
 console.log(a);//O valor não foi alterado
 //Uma Array pode ser associada por referência e são mutáveis.
 let arrayA = [1, 2, 3];
 let arrayB = arrayA; //Ocupam o mesmo lugar na memória, logo se um for alterado, o outro também vai ser.
 console.log(arrayA, arrayB);
 arrayB.push(4);
 console.log(arrayA, arrayB); //O número 4 será acrescentado ao final das duas Arrays.
 arrayA.pop();
 console.log(arrayA, arrayB);//O número 4 foi deletado do final de ambas Arrays
 //Para apenas copiar os valores de a para b, tornando-os independentes:
 let arrayC = [...arrayA];//São arrays independentes, onde cada uma possui seu lugar na memória.
 arrayC.push(4);
 console.log(arrayA, arrayC);
 //Essa ação serve para arrays e objetos também. os ... são chamados de spread;
