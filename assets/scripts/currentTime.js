const hr = document.querySelector('div#hr')
const mn = document.querySelector('div#mn')
const sc = document.querySelector('div#sc')

setInterval(() => {
    let date = new Date()

    let hh = date.getHours() * 30
    let mm = date.getMinutes() * deg
    let ss = date.getSeconds() * deg

    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`
    mn.style.transform = `rotateZ(${mm}deg)`
    sc.style.transform = `rotateZ(${ss}deg)`
})