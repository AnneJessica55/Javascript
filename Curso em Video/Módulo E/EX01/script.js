let cont = document.querySelector('#icontador');
cont.addEventListener('click', contar);
function contar() {
    let ini = document.querySelector('#iinicio');
    let fim = document.querySelector('#ifim');
    let passo = document.querySelector('#ipasso');
    let res = document.querySelector('#res');
    if (ini.value != fim.value){

        if(passo.value != 0){
            let i = Number(ini.value);
            let f = Number(fim.value);
            let p = Number(passo.value);
            res.innerHTML += `<br>CONTANDO<br>`;
            if(i < f){
                for(c = i; c <= f; c += p){
                    res.innerHTML += ` ${c} \u{1F449}`;
                }
                res.innerHTML += `\u{1F3C1}`
            } else {
                for(c = i; c >= f; c -= p){
                   res.innerHTML += ` ${c} \u{1F449}`; 
                }
                res.innerHTML += ` \u{1F3C1}`;
            }
        } else {
            let i = Number(ini.value);
            let f = Number(fim.value);
            window.alert('[ERRO] O passo não pode ser igual a 0. Considerando-o igual a 1.<br>');
            res.innerHTML += `<br>CONTANDO<br>`;
            if (i < f){
                for(c = i; c <= f; c++){
                    res.innerHTML += ` ${c} \u{1F449}`;
                }
                res.innerHTML += `\u{1F3C1}`;
            } else {
                for(c = i; c >= f; c--){
                    res.innerHTML += ` ${c} \u{1F449}`;
                }
                res.innerHTML += ` \u{1F3C1}`;

            }
        }

    } else {
        window.alert('[ERRO] O fim não pode ser igual ao inicio. Tente de novo.');
    }
}