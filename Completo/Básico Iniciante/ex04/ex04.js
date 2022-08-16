function minhaFuncao () {
    const form = document.querySelector('.form'); //Vai selecionar o item form no meu HTML
    const resultado = document.querySelector('.resultado');

    function recebeEventoForm (evento) {
        evento.preventDefault();// Previne que a página atualize a cada submit.

        const cadastrados = [];

        const nome = form.querySelector('.nome');//Seleciona o que foi digitado no input de classe nome. Utiliza-se o nome da variável ou o caminho inteiro do HTML com o document;
        const sobrenome = form.querySelector('.sobrenome');
        const idade = form.querySelector('.idade');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        cadastrados.push({
             nome: nome.value, 
             sobrenome: sobrenome.value, 
             idade: idade.value, 
             peso: peso.value, 
             altura: altura.value
            });//Preenchendo a Array
            
            console.log(cadastrados);

            resultado.innerHTML += `<p>Cliente ${nome.value} ${sobrenome.value}, de ${idade.value} anos, com peso de ${peso.value}Kg e altura de ${altura.value}m possui um IMC de ${((peso.value)/((altura.value)**2)).toFixed(2)}.</p>`;// Mostrando na div resultados
    }
    
    form.addEventListener('submit', recebeEventoForm)
}
minhaFuncao();