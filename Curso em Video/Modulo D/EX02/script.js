
let verifica = document.querySelector('#iveri');
verifica.addEventListener('click', verificar)
function verificar(){
    let iano = document.querySelector('#iano');
    let dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();
    let ano = Number(iano.value);
    let nome = String(inome.value);
    if (ano > anoAtual || ano < 1900){
        window.alert('ERRO: Ano inválido.')
    } else{
        let msg = document.querySelector('#msg');
        let fgen = document.getElementsByName( 'genero');
        let nome = document.querySelector('#inome');
        let imagem = document.querySelector('#imagem');
        var img = document.createElement('img');//Aqui você criou o elemento img na variável img
        img.setAttribute('id', 'foto'); // aqui você  acrescentou o atributo id ="foto" na img da variável img
        let gen ='';
        let idade = anoAtual - ano;
        msg.innerHTML +=`<p>Olá, ${nome.value}, você tem/ fará esse ano ${idade} anos.</p>`
        
        if (fgen[0].checked){
            gen = "feminino";
            if(idade < 3){
                img.setAttribute('src', 'img/bebe-de-roupao-seo.jpg');// aqui você adicionou o src="img/bebe-de-roupao-seo.jpg" ao elemento img da varíavel img
                document.body.style.background = "#E2B3AE"; // aqui você mexeu no css do body
            } else if(idade < 12){
                img.setAttribute('src', 'img/crianca.jpg')
                document.body.style.background ="#F5B418";
            } else if (idade < 18){
                img.setAttribute('src', 'img/adolescente.jpg');
                document.body.style.background = '#9B8A92'
            } else if (idade < 30){
                img.setAttribute('src', 'img/jovem_adulta.jpg');
                document.body.style.background = "#FFFFFF";
            } else if (idade < 50){
                img.setAttribute('src','img/adulta.jpg');
                document.body.style.background = "#FEFEFE";
            } else if(idade < 70) {
                img.setAttribute('src', 'img/edosa.jpg');
                document.body.style.background = "#37421D";
            } else{
                img.setAttribute('src', 'img/idosa.jpg');
                document.body.style.background = "#42220E"
            }
        } else if (fgen[1].checked){
            gen = "masculino";
            if(idade < 3){
                img.setAttribute('src', 'img/bebe.webp');
                document.body.style.background = "#FEFEFE";
            } else if(idade < 12){
                img.setAttribute('src', 'img/crianco.jpg')
                document.body.style.background ="#ACBABB";
            } else if (idade < 18){
                img.setAttribute('src', 'img/adolescento.jpg');
                document.body.style.background = '#A39D20';
            } else if (idade < 30){
                img.setAttribute('src', 'img/jovem_adulto.jpg');
                document.body.style.background = "#23221E";
            } else if (idade < 50){
                img.setAttribute('src','img/adulto.jpg');
                document.body.style.background = "#FEFEFE";
            } else if(idade < 70) {
                img.setAttribute('src', 'img/edoso.jpg');
                document.body.style.background = "#C2E8FF";
            } else{
                img.setAttribute('src', 'img/idoso.jpg');
                document.body.style.background = "#FCF5ED"
            }
        } else{
            window.alert('[ERRO] Selecione um gênero.');
        }
        msg.innerHTML += `Seu gênero é ${gen}`;
        imagem.appendChild(img);//aqui você adicionou no HTML o elemento img da variável img na div de id="imagem"
    }
}