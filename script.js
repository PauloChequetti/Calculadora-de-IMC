import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { calculateIMC, notANumber } from "./utils.js"

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// const modalWrapper = document.querySelector('.modal-wrapper')
// const modalMessage = document.querySelector('.modal .title span')
// const modalBtnClose = document.querySelector('.modal button.close')

// 1
form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value 

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

  // Fechar a janela de erro ao digitar no campo
  // evento é de nome input
  inputWeight.oninput = () => AlertError.close()
  inputHeight.oninput = () => AlertError.close()

  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    inputWeight.value = ''
    inputHeight.value = ''
    return;
  }
    AlertError.close()

  const result = calculateIMC(weight, height)
  displayResultMessage(result)
}

// 2
// form.submit = function() {}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
  // modalWrapper.classList.add('open')
}