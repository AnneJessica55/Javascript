
function carregar(){
let msg = document.querySelector('#msg');
let img = document.querySelector('#imagem');
let dia = new Date();
let hora = dia.getHours();

msg.innerHTML = `<p>Agora são ${hora} e ônibus.</p>`;
    if (hora >=5 && hora < 12){
    img.src = "img/morning.png";
    document.body.style.background ='#C1C9CB';
    foto.innerHTML += `<p>Tenha um bom Dia!</p>`;
    } else if(hora >= 12 && hora < 18){
        img.src = 'img/afternoon.png';
        document.body.style.background ='#CD8755';
        foto.innerHTML += `<p>Tenha uma boa Tarde!</p>`;
    } else if (hora >= 18 && hora < 20){
        img.src = 'img/evening.png';
        document.body.style.background = '#7B67A3';
        foto.innerHTML += `<p>Tenha um bom final de tarde!</p>`;
    } else{
        img.src = 'img/night.png';
        document.body.style.background = '#101C47';
        foto.innerHTML += `<p>Tenha uma boa Noite!</p>`;
    }
}
