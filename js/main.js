/**
 * https://github.com/Mennauu/js-clock
 * MIT licensed
 *
 * Copyright (c) 2019 menno.work - A project by Menno de Vries
 */

var today = new Date()
const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.minute-hand')
const hourHand = document.querySelector('.hour-hand')

function updateTime() {
  today = new Date()

  updateHands()
}

function updateHands() {
  secondHand.style.transform = 'rotate(' + today.getSeconds() * 6 + 'deg)'
  minuteHand.style.transform = 'rotate(' + today.getMinutes() * 6 + 'deg)'
  hourHand.style.transform = 'rotate(' + today.getHours() * 30 + 'deg)'
}

document.addEventListener("DOMContentLoaded", updateHands)
setInterval(updateTime, 1000)