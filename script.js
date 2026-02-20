// what the user is currently typing, as text.
let typedNumberText = ''

// the number we store for calculations
let storedNumber = null

// the operator curretly selected, AKA + - * /
let currentOperator = ''

// used ONLY for displaying the history line
// in example - ['3', '+', '4']
let historyParts = []

//-----------------
//HELPER FUNCTIONS
//-----------------

function setStatus(message) {
    document.getElementById('statusLine').textContent = message
}

function showSymbol(operator) {
    if (operator === '*') return '×';
    if (operator === '/') return '÷';
    if (operator === '-') return '&#x2212';
    return operator;
}


function updateScreen(){
const display = document.getElementById('displayLine')
const history = document.getElementById('historyLine')
const status = document.getElementById('statusLine')

display.textContent = typedNumberText

}

function pressNumber(digit) {
setStatus('');
    if (typedNumberText === '0') {
        typedNumberText = digit;
    } else {
    typedNumberText = typedNumberText + digit
    }
    updateScreen()
}