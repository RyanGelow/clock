const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.minute-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds()
    const secondDegrees = ((seconds / 60) * 360) + 90 ;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`
    const minutes = now.getMinutes()
    const minuteDegrees = ((minutes / 60) * 360) + 90 ;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`
    const hours = now.getHours()
    const hourDegrees = ((hours / 12) * 360) + 90 ;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
    console.log(seconds, minutes, hours)
}

setInterval(setDate, 1000);