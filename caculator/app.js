// function: number 'operator' number

let value = '', only = '1234567890/*-+';
const array = only.split('');

window.addEventListener('keydown', e => {
    const key = e.key.toLocaleLowerCase();

    if(key == 'enter') {
        console.log(`${value} = ${eval(value)}`);
        value = '';
    }else {
        array.forEach(data => {
            if(data == key) {
                value += e.key;
            }
        });        
    }
});
