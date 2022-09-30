// function: number 'operator' number

let value = '', only = '1234567890/*-+';
const array = only.split('');

window.addEventListener('keydown', e => {
    const key = e.key.toLocaleLowerCase();

    if(key == 'enter') {
        document.querySelector('#formula').innerHTML = `${value}`;
        document.querySelector('#sum').innerHTML = eval(value);
        value = '';
    }else {
        array.forEach(data => {
            if(data == key) {
                value += e.key;
                document.querySelector('#formula').innerHTML = '';
                document.querySelector('#sum').innerHTML = value;

            }
        });        
    }
});

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', ev => {
        const key = ev.target.dataset.key;
        console.log(key);

        if(key == 'enter') {
            document.querySelector('#formula').innerHTML = `${value}`;
            document.querySelector('#sum').innerHTML = eval(value);
            value = '';
        }else {
            array.forEach(data => {
                if(data == key) {
                    value += key;
                    document.querySelector('#formula').innerHTML = '';
                    document.querySelector('#sum').innerHTML = value;
    
                }
            });        
        }
    }); 
});