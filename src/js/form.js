const isEmailInputsValid = (input) => {
  console.log('start email valid.')
  const inputValue = input.value
  const firstLetter = inputValue[0]
  const lastLetter = inputValue[inputValue.length - 1]

  if(inputValue.length > 3) {
    if(firstLetter !== '@' && firstLetter !== '.') {
      if(lastLetter !== '@' && lastLetter !== '.') {
        if(inputValue.includes('@')) {
          return true
        }
      }
    }
  }

  return false
}

const isTelInputValid = (input) => {
  console.log('start tel valid.')
  const phoneRules = /^\+?([0-9]{3})[-. ]?([0-9]{2})[-. ]?([0-9]{3})[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/

  if(input.value.match(phoneRules)) {
    return true
  } else {
    return false
  }
}

const isValidInput = (input) => {
  if (input.value.length === 0 && input.hasAttribute('required')) {
    return false
  }

  const typeInput = input.getAttribute('type')

  switch(typeInput) {
    case 'email':
      return isEmailInputsValid(input)

    case 'tel':
      return isTelInputValid(input)
    
    default:
      return true
  }
}

export const validateForm = (form, inputs) => {
  form.addEventListener('submit', (event) => {
    const validationResult = inputs.map(input => {
      input.parentElement.classList.remove('field_success', 'field_invalid')

      const validationResult = isValidInput(input)
  
      if (validationResult) {
        input.parentElement.classList.add('field_success')
      } else {
        input.parentElement.classList.add('field_invalid')
      }

      return validationResult
    })

    if (!validationResult.every(result => result === true)) {
      event.preventDefault()
    }
  })
}