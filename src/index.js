import { validateForm } from "./js/form"

const inputs = [...document.querySelectorAll('.field__input')]
const form = document.querySelector('.form')

validateForm(form, inputs)