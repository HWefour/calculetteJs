const buttons = document.querySelectorAll('.button');
const display = document.querySelector('#display');
let operateur = '';
let operand1 = '';
let operand2 = '';

for (const button of buttons) {
    button.addEventListener('click', function() {
        if (this.classList.contains('num')) {
            if (operateur === '') {
                operand1 += this.value;
                display.textContent = operand1;
            } else {
                operand2 += this.value;
                display.textContent = operand2;
            }
        } else if (this.classList.contains('operateur')) {
            operateur = this.value;
        } else if (this.id === 'vider') {
            operateur = '';
            operand1 = '';
            operand2 = '';
            display.textContent = '0';
        } else if (this.id === 'egal') {
            const result = eval(operand1 + operateur + operand2);
            display.textContent = result;
            operateur = '';
            operand1 = result;
            operand2 = '';
        }
    });
}
