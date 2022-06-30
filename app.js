function notNull() {
    return "I am a string."
}

function truthy() {
    return `red` === `red`
}

function objFunction(val1, val2) {
    return {
        value1 : val1,
        value2 : val2
    }
}

function moreThanSix(array){
    return array.filter(x => x.length >= 6)
}

function numToString(num){
    return num.toString()
}

function planet(num){
    const planets = [`mercury`, `venus`, `earth`, `mars`, `jupiter`, `saturn`, `uranus`, `neptune`, `pluto`]
    return planets[num-1]
}

function takeAttendance(array){
    return array.filter(x => x === true).length
}

function spicyNumber(num){
    return num.toString().split("").map(x=> x**2).reduce((a, b) => a+b)
}

module.exports = {notNull, truthy, objFunction, moreThanSix, numToString, planet, takeAttendance, spicyNumber}