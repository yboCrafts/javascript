const app = {
    init(selectors) {
        this.value = '';
        this.only = '1 2 3 4 5 6 7 8 9 0 / * - + enter backspace';
        this.array = this.only.split(' ');
        this.formula = document.querySelector('#formula');
        this.sum = document.querySelector('#sum');
        this.buttons = document.querySelectorAll(selectors.buttons);

        this.buttons.forEach(button => this.clickFunction(button));
        document.addEventListener('keydown', ev => this.keyFunction(ev.key));
    },
    
    clickFunction(button) {
        button.addEventListener('click', ev => {
            const key = ev.target.dataset.set.toLocaleLowerCase();

            if(key == 'enter') {
                if(this.value != '0') {
                    this.formula.innerHTML = `${this.value}`;
                    this.sum.innerHTML = eval(this.value);
                    this.value = '';
                }
            }else if(key == 'backspace') {      
                formula.innerHTML = '';                          
                if(this.value.length <= 1) {
                    this.value = '';                                   
                    this.sum.innerHTML = '0';                         
                }else {
                    this.value = this.value.slice(0, -1);                    
                    this.sum.innerHTML = this.value;
                }                
            }else if(key != 'enter' && key != 'backspace'){
                this.value += key;
                this.formula.innerHTML = '';
                this.sum.innerHTML = this.value;     
            }
        });
    },

    keyFunction(key) {
        key = key.toLocaleLowerCase();
        this.array.forEach(onlyKey => {
            if(key == onlyKey) {
                if(key == 'enter') {
                    if(this.value != '0') {
                        this.formula.innerHTML = `${this.value}`;
                        this.sum.innerHTML = eval(this.value);
                        this.value = '';
                    }
                }else if(key == 'backspace') {      
                    formula.innerHTML = '';                          
                    if(this.value.length <= 1) {
                        this.value = '';                                   
                        this.sum.innerHTML = '0';                         
                    }else {
                        this.value = this.value.slice(0, -1);                    
                        this.sum.innerHTML = this.value;
                    }                
                }else if(key != 'enter' && key != 'backspace'){
                    this.value += key;
                    this.formula.innerHTML = '';
                    this.sum.innerHTML = this.value;     
                }
            }
        })
    },
    
};

app.init({
    buttons: '.button',
});