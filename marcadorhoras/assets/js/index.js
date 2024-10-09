//dia em num
let data = new Date()
let dataatual = data.getDate()

//dia escrito
let dia = new Date()
let diaatual = dia.getDay()
let numday

function day (diaatual){
    switch (diaatual){
        case 0: 
            numday = 'domingo'
            return numday
        case 1: 
            numday = 'segunda-feira'
            return numday
        case 2: 
            numday = 'terça-feira'
            return numday           
        case 3: 
            numday = 'quarta-feira'
            return numday            
        case 4: 
            numday = 'quinta-feira'
            return numday           
        case 5: 
            numday = 'sexta-feira'
            return numday           
        case 6: 
            numday = 'sabado'
            return numday        
    }
}

numday = day(diaatual)

//mes
let mes = new Date()
let mesatual = mes.getMonth()
let lettermonth

function meshoje (mesatual){
    switch (mesatual){
        case 0:
            lettermonth = 'janeiro'
            return lettermonth
        case 1:
            lettermonth = 'fevereiro'
            return lettermonth
        case 2:
            lettermonth = 'março'
            return lettermonth
        case 3:
            lettermonth = 'abril'
            return lettermonth
        case 4:
            lettermonth = 'maio'
            return lettermonth
        case 5:
            lettermonth = 'junho'
            return lettermonth
        case 6:
            lettermonth = 'julho'
            return lettermonth
        case 7:
            lettermonth = 'agosto'
            return lettermonth
        case 8:
            lettermonth = 'setembro'
            return lettermonth
        case 9:
            lettermonth = 'outubro'
            return lettermonth
        case 10:
            lettermonth = 'novembro'
            return lettermonth
        case 11:
            lettermonth = 'dezembro'
            return lettermonth
    }
} 

lettermonth = meshoje (mesatual)

//ano 
let ano = new Date ()
let anoatual = ano.getFullYear()

//horas
let hora = new Date()
let horaatual = hora.getHours()

//minutos
let min = new Date()
let minatual = min.getMinutes()

res.innerHTML = `${numday}, ${dataatual} de ${lettermonth} de ${anoatual} <br> ${horaatual}:${minatual} `


/*const res = document.querySelector('h1#res')
const data = new Date()
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
}

h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes)*/