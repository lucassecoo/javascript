function meuEscopo(){
const form = document.querySelector('.form')
const resultado = document.querySelector('#resultado')

function recebeEvento(event){
    event.preventDefault();
    const nome = document.querySelector('.nome');
    const sobrenome = document.querySelector('.sobrenome');
    const peso = document.querySelector('.peso');
    const altura = document.querySelector('.altura');

    resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`
}

form.addEventListener('submit', recebeEvento)
}
meuEscopo()