function Calculadora() {
    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    }
    this.display = document.querySelector('.display')

    this.clear = () => this.display.value = ''

    this.del = () => this.display.value = this.display.value.slice(0, -1)

    this.addNumDisplay = el => {
        this.display.value += el.innerText
        this.display.focus()
    }

    this.capturaEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.keyCode === 13) this.realizaConta()
        })
    }

    this.realizaConta = () => {  
        try {
            let conta = eval(this.display.value)

            if(!conta) {
                alert('Conta inválida')
                return;
            }
            this.display.value = String(conta)
        } catch (error) {
            alert('Conta inválida')
            return;
        }
    }

    this.capturaCliques = () => {
        // this -> calculadora
        document.addEventListener('click', event => {
            const el = event.target;
            if(el.classList.contains('btn-num')) this.addNumDisplay(el);
            if(el.classList.contains('btn-clear')) this.clear()
            if(el.classList.contains('btn-del')) this.del()
            if(el.classList.contains('btn-eq')) this.realizaConta()
        })
    }

}
const calculadora = new Calculadora()
calculadora.inicia()