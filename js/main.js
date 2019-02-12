/********************************
***                           ***
******      JavaScript     ******
***                           ***
* Copyright (c) 2019 menno.work *
*********************************/
var today = new Date()

function updateTime() {
  today = new Date()

  updateHands()
}

function updateHands() {
  const secondHand = document.querySelector('.second-hand')
  const minuteHand = document.querySelector('.minute-hand')
  const hourHand = document.querySelector('.hour-hand')

  secondHand.style.transform = 'rotate(' + today.getSeconds() * 6 + 'deg)'
  minuteHand.style.transform = 'rotate(' + today.getMinutes() * 6 + 'deg)'
  hourHand.style.transform = 'rotate(' + today.getHours() * 30 + 'deg)'
}

document.addEventListener("DOMContentLoaded", updateHands)
setInterval(updateTime, 1000)