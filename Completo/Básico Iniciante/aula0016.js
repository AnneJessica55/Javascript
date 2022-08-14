const nome = 'Evandro Mesquita de Arruda';
const idade = 29;
let pesoEmKg = 84;
const alturaEmM = 1.80;
let imc = pesoEmKg/(alturaEmM**2);
let anoNascimento = 2022 - idade;

console.log(`${nome} tem ${idade} anos, pesa ${pesoEmKg} Kg, tem ${alturaEmM} m e seu IMC é de ${imc.toFixed(2)}.
${nome} nasceu no ano de ${anoNascimento}.`);