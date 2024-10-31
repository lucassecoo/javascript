function Calculadora(){
    this.visor = document.querySelector('#p')

    this.iniciar = () => {
        this.clique()
    }

    this.clique = () =>{
        document.addEventListener('click', event => {
            const el = event.target
            if(el.classList.contains('btn-num')) this.Visor(el)
        })
    }

    this.Visor = el => {
        this.visor.innerText += el.innerText
    }
    
}

const calculadora = new Calculadora()
calculadora.iniciar()