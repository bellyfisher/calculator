// What the user is currently typing (as text)
let typedNumberText = ''

// The number we store for calculations
let storedNumber = null

// The operator currently selected (+ - * /)
let currentOperator = ''

// Used only for displaying the history line
// Example: ["3", "+", "4"]
let historyParts = []

//------------------------
//HELPER FUNCTIONS
//------------------------

function setStatus (message) {
  document.getElementById('statusLine').textContent = message
}

function showSymbol (operator) {
  if (operator === '*') return '×'
  if (operator === '/') return '÷'
  if (operator === '-') return '−'
  return operator
}

function updateScreen () {
  const display = document.getElementById('displayLine')
  const history = document.getElementById('historyLine')
  const status = document.getElementById('statusLine')

  if (typedNumberText !== '') {
    display.textContent = typedNumberText
  } else {
    display.textContent = '0'
  }

  if (historyParts.length === 0) {
    history.textContent = ''
  }
  if (historyParts.length === 1) {
    history.textContent = historyParts[0]
  }
  if (historyParts.length === 2) {
    history.textContent = historyParts[0] + ' ' + showSymbol(historyParts[1])
  }
  if (historyParts.length === 3) {
    history.textContent =
      historyParts[0] +
      ' ' +
      showSymbol(historyParts[1]) +
      ' ' +
      historyParts[2]
  }

  if (status.textContent === '') status.textContent = 'Ready!'
}

function pressNumber (digit) {
  setStatus('')
  if (typedNumberText === '0') {
    typedNumberText = digit
  } else {
    typedNumberText = typedNumberText + digit
  }
  updateScreen()
}

function pressOperator (operator) {
  setStatus('')
  // If nothing typed and nothing stored, do nothing
  if (typedNumberText === '' && storedNumber === null) {
    setStatus('Please type a number first!')
    updateScreen()
  }
  // FIRST operator press: store first number
  if (storedNumber === null) {
    storedNumber = Number(typedNumberText)
    currentOperator = operator
    historyParts = [String(storedNumber), currentOperator]
    typedNumberText = ''
    updateScreen()
  }
  // if second number was typed, calculate immediately
  if (typedNumberText !== '') {
    const secondNumber = typedNumberText
    //Cant Divide by Zero
    if (currentOperator === '/' && secondNumber === 0) {
      setStatus('Cannot divide by 0!')
      updateScreen()
      return
    }
  }

   let result = storedNumber

  if (currentOperator === '+') {
    result = storedNumber + secondNumber
  } else if (currentOperator === '-') {
    result = storedNumber - secondNumber
  } else if (currentOperator === '*') {
    result = storedNumber * secondNumber
  } else if (currentOperator === '/') {
    result = storedNumber / secondNumber
  }

storedNumber = result
currentOperator = operator

}

function clearAll () {
  typedNumberText = ''
  storedNumber = null
  currentOperator = ''
  historyParts = []

  setStatus('Cleared!')
  updateScreen()
}

function calculate () {
 setStatus('')
  if (storedNumber === null || currentOperator === '' || typedNumberText === '') {
  setStatus('Please complete the operation!')
  updateScreen()
  return
  }

  const secondNumber = Number(typedNumberText)
    historyParts = [String(storedNumber), currentOperator, String(secondNumber)]
  let result = storedNumber

  if (currentOperator === '+') {
    result = storedNumber + secondNumber
  } else if (currentOperator === '-') {
    result = storedNumber - secondNumber
  } else if (currentOperator === '*') {
    result = storedNumber * secondNumber
  } else if (currentOperator === '/') {
    result = storedNumber / secondNumber
  }

  storedNumber = result
  currentOperator = ''
  typedNumberText = ''
  setStatus('Finished!')
  updateScreen()
}