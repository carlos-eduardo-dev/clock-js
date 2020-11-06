const scInterval = 1000

const hrCrono = document.querySelector('div#hrCrono')
const mnCrono = document.querySelector('div#mnCrono')
const scCrono = document.querySelector('div#scCrono')

const hours = document.querySelector('input#setHr')
const minutes = document.querySelector('input#setMn')
const seconds = document.querySelector('input#setSc')

var crono

var btnClicked = false

function start() {
    if (!btnClicked) {

        setClock(hrCrono, hours.value, mnCrono, minutes.value, scCrono, seconds.value)

        crono = setInterval(() => {
            if (hours.value == 0 && minutes.value == 0 && seconds.value == 0) {
                stop()
            }
            else {
                timer()

                let hh = hours.value * 30
                let mm = minutes.value * deg
                let ss = seconds.value * deg

                setClock(hrCrono, hours.value, mnCrono, minutes.value, scCrono, seconds.value)
            }
        }, scInterval)

        btnClicked = true
    }

}

function pause() {
    clearInterval(crono)
    btnClicked = false
}

function stop() {
    clearInterval(crono);

    hours.value = ''
    minutes.value = ''
    seconds.value = ''

    setClock(hrCrono, hours.value, mnCrono, minutes.value, scCrono, seconds.value)

    btnClicked = false
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