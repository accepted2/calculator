const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('.grid button');

let currentInput = '';
let operator = '';
let PreviousInput = '';

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value === 'C') {
            currentInput = '';
            PreviousInput = '';
            screen.value = '0';
        } else if (value === '=') {
            if (currentInput && PreviousInput && operator) {
                const result = eval(`${PreviousInput} ${operator}${currentInput}`)
                screen.value = result;
                currentInput = result.toString()
                operator = ''
                PreviousInput = ''
            }
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            operator = value;
            PreviousInput = currentInput
            currentInput = ''
        } else {
            currentInput += value;
            screen.value = currentInput
        }
    })
})