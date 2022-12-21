let addd = document.querySelector('#iadd');
addd.addEventListener('click', adicionar);
let num = document.querySelector('#inum');
let lista = document.querySelector('#ilista');
let vet = [];
let exe = document.querySelector('#iexe');
let limpa = document.querySelector('#ilimpa');
exe.addEventListener('click', executar);
limpa.addEventListener('click', limpar);

function limpar(){
    let u = [];
    lista.innerHTML = '';
    res.innerHTML = '';
    vet = u;
}

function isNumero(num){
    if(num >= 1 && num <= 100){
        return true;
    } else {
        return false;
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true;
    } else {
        return false;
    }
}
function somar (k){
    let soma = 0
    for(c = 0; c < k.length; c++){
        soma += k[c];
    }
    return soma;
}

function media(d){
 let med = Number(somar(d)/Number(d.length))
 return med;
}

function adicionar (){
    if(isNumero(num.value) && !inLista(num.value, vet)){
        vet.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `O valor adicionado é ${num.value}`;
        lista.appendChild(item);
    } else { 
        window.alert('Número Inválido ou já existente.');
    }
    num.value = '';
    num.focus();
    res.innerHTML = '';
}
 function executar (){
    if(vet.length != 0){
        let soma = somar(vet);
        let med = media(vet);
        let maior = vet[0];
        let menor = vet[0]
        for( let pos in vet){
            if(vet[pos] > maior){
                maior = vet[pos];
            }
            if(vet[pos] < menor){
                menor = vet[pos];
            }
        }
        res.innerHTML = '';
        res.innerHTML += `<p>A soma dos números é ${soma}.</p>
        <p>A média dos números é ${med}</p>
        <p>O maior número é ${maior}</p>
        <p>O menor número é ${menor}</p>
        <p>Ao todo são ${vet.length} números cadastrados.</p>`;
    } else {
        window.alert('Adicione valores para iniciar a análise.')
    }
 }