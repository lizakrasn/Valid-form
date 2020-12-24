const textInputs = [...document.querySelectorAll('[data-input-text]')]
const emailInput = document.querySelector('[data-input-email]')

export const isTextInputsValid = () => {
  return textInputs.map(input => {
    const inputValue = input.value

    if(inputValue.length > 0) {
      input.classList.remove('input_invalid')
      input.classList.add('input_success')

      return true
    }

    input.classList.add('input_invalid')
  })
  .some(inputResult => {
    inputResult === false
  })
}

export const isEmailInputsValid = () => {
  const inputValue = emailInput.value
  const firstLetter = inputValue[0]
  const lastLetter = inputValue[inputValue.length - 1]

  if(inputValue.length > 3) {
    if(firstLetter !== '@' && firstLetter !== '.') {
      if(lastLetter !== '@' && lastLetter !== '.') {
        if(inputValue.includes('@')) {

          emailInput.classList.remove('input_invalid')
          emailInput.classList.add('input_success')

          return true
        }
      }
    }
  }

  emailInput.classList.add('input_invalid')
}

// export const handleOnSubmit = () => {

// }