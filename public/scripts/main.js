const deg = 6

function setClock(hrElement, hours, minElement, minutes, secElement, seconds) {
    hrElement.style.transform = `rotateZ(${(hours * 30) + (minutes / 12)}deg)`
    minElement.style.transform = `rotateZ(${minutes * deg}deg)`
    secElement.style.transform = `rotateZ(${seconds * deg}deg)`
}