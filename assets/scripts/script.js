const deg = 6
const scInterval = 1000

const hr = document.querySelector('div#hr')
const mn = document.querySelector('div#mn')
const sc = document.querySelector('div#sc')

const hrCrono = document.querySelector('div#hrCrono')
const mnCrono = document.querySelector('div#mnCrono')
const scCrono = document.querySelector('div#scCrono')

const hours = document.querySelector('input#setHr')
const minutes = document.querySelector('input#setMn')
const seconds = document.querySelector('input#setSc')

var crono

setInterval(() => {
    let date = new Date()

    let hh = date.getHours() * 30
    let mm = date.getMinutes() * deg
    let ss = date.getSeconds() * deg

    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`
    mn.style.transform = `rotateZ(${mm}deg)`
    sc.style.transform = `rotateZ(${ss}deg)`
})

function start() {
    crono = setInterval(() => {
        if (hours.value == 0 && minutes.value == 0 && seconds.value == 0) {
            stop()
        }
        else {
            timer()

            let hh = hours.value * 30
            let mm = minutes.value * deg
            let ss = seconds.value * deg

            hrCrono.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`
            mnCrono.style.transform = `rotateZ(${mm}deg)`
            scCrono.style.transform = `rotateZ(${ss}deg)`
        }
    }, scInterval);
}

function pause() {
    clearInterval(crono);
}

function stop() {
    clearInterval(crono);

    hours.value = 00
    minutes.value = 00
    seconds.value = 00

    hrCrono.style.transform = `rotateZ(0deg)`
    mnCrono.style.transform = `rotateZ(0deg)`
    scCrono.style.transform = `rotateZ(0deg)`
}

function timer() {
    seconds.value--
    if (seconds.value < 0) {
        minutes.value--
        if (minutes.value < 0) {
            hours.value--
            minutes.value = 59
        }
        seconds.value = 59
    }
}

