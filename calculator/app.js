const app = {
    init(selectors) {
        this.value = '';
        this.only = '1 2 3 4 5 6 7 8 9 0 / * - + backspace';
        this.array = this.only.split(' ');

        const buttons = document.querySelectorAll(selectors.buttons);

        buttons.forEach(button => this.clickFunction(button));
    },
    
    clickFunction(button) {
        button.addEventListener('click', ev => {
            const key = ev.target.dataset.set.toLocaleLowerCase();
            const formula = document.querySelector('#formula');
            const sum = document.querySelector('#sum');

            if(key == 'enter') {
                if(this.value != '0') {
                    formula.innerHTML = `${this.value}`;
                    sum.innerHTML = eval(this.value);
                    this.value = '';
                }
            }else if(key == 'backspace') {      
                formula.innerHTML = '';                          
                if(this.value.length <= 1) {
                    this.value = '';                                   
                    sum.innerHTML = '0';                         
                }else {
                    this.value = this.value.slice(0, -1);                    
                    sum.innerHTML = this.value;
                }                
            }else if(key != 'enter' && key != 'backspace'){
                this.value += key;
                formula.innerHTML = '';
                sum.innerHTML = this.value;     
            }
        });
    }
    
};

app.init({
    buttons: '.button',
});