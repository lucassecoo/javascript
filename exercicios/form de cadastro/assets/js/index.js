class validaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario')
        this.eventos()
    }

    eventos(){
        this.formulario.addEventListener('submit', e =>{
        this.handleSubmit(e)
        })
    }

    handleSubmit(e){
        e.preventDefault()
        const camposValidos = this.checaCampos()

        if(camposValidos){
            alert('Formulário enviado!')
            this.formulario.submit()
            
        }
    }

    checaCampos(){
        let valid = true
        let senha = ''

        for(let errorText of this.formulario.querySelectorAll('.errorText')){
            errorText.remove()
        }

        for(let campo of this.formulario.querySelectorAll('.verifica')){
            const label = campo.previousElementSibling.innerText
            const isAlphanumeric = (str) => /^[a-zA-Z0-9]+$/.test(str)
            
            if(!campo.value){
                this.criaErro(campo, `Campo "${label}" não pode estar vazio`)
                valid = false
            }

            if(label === 'Usuário'){
                if(campo.value.length < 3 || campo.value.length > 12){
                    this.criaErro(campo, `Usuário deve ter entre 3 e 12 caracteres`)
                    valid = false
                }
                if(!isAlphanumeric(campo.value)){
                    this.criaErro(campo, `Usuário deve conter apenas letras e numeros`)
                    valid = false
                }
            }

            if(label === 'Senha'){
                if(campo.value.length < 6 || campo.value.length > 12){
                    this.criaErro(campo, `Senha deve ter entre 6 e 12 caracteres`)
                    valid = false
                }
                senha = campo.value
            }

            if(label === 'Repetir senha'){
                if(campo.value != senha){
                    this.criaErro(campo, `Senha deve ser igual`)
                    valid = false
                }
            }

            if (label === 'CPF') {
                const cpfValidador = new validaCPF(campo.value);
                if (!cpfValidador.validaCpf()) {
                    this.criaErro(campo, 'CPF inválido');
                    valid = false;
                }
            }
            return valid
        }
    }

    // validaCPF(campo){
    //     const cpf = new validaCPF(campo.value)

    //     if(!cpf.validaCpf()){
    //         this.criaErro(campo, 'CPF inválido')
    //         return false
    //     }

    //     return true
    // }

    criaErro(campo, msg){
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('errorText')
        campo.insertAdjacentElement('afterend', div)
    }
}

const valida = new validaFormulario()