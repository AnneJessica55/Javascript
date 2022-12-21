console.log('Tabuada')
let c = 0;
let i = 0;

do{
    do{
        console.log(`${i} x ${c} = ${i * c}`);
        c++;
        
    } while( c <= 10)
    console.log('------------------------------------')
    i++;
    c = 0;
} while(i <= 10)