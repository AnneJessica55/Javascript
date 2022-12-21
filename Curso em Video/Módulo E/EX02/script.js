let gerar = document.querySelector('#igerar');
gerar.addEventListener('click', calcular);

function calcular(){
    let num = document.querySelector('#inum');
    let tab = document.querySelector('#itabuada');
    if(num.value == 0){
        window.alert('Você selecionou a tabuada de 0');
        let n = Number(num.value);
        tab.innerHTML = '';
        for(c = 0; c <=10; c++){
            let item = document.createElement('option');
            item.text = ` ${n} x ${c} = ${n*c}`;
            item.value = `${c}`;
            tab.appendChild(item);
        }
    } else {
        let n = Number(num.value);
        tab.innerHTML = '';
        for(c = 0; c <= 10; c++){
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n*c}`;
            item.value = `${c}`;
            tab.appendChild(item);
        }
    }
}