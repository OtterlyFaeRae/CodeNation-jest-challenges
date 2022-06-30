const funcs = require('../app.js')

test(`Checks that what is returned is not null`, ()=>{
    expect(funcs.notNull()).not.toBe(null)
})

test(`Checks that the function returns a truthy value`, ()=>{
    expect(funcs.truthy()).toBe(true)
})

test(`Checks that the function does not return a falsy value`, ()=>{
    expect(funcs.truthy()).not.toBe(false)
})

test(`Checks that a factory function's properties are equal to its arguments`,() =>{
    let testObj = funcs.objFunction(`hello`, `red`)
    expect(testObj.value1).toStrictEqual(funcs.objFunction(`hello`, `red`).value1)
    expect(testObj.value2).toStrictEqual(funcs.objFunction(`hello`, `red`).value2)
})

test(`Checks that a function returns an array of items with 6 characters or more`,()=> {
    expect(funcs.moreThanSix([`fishes`, `something`, `do`, `videogames`, `oh`, `table`])).toStrictEqual([`fishes`, `something`, `videogames`])
})

test(`Checks that a function returns a string equal to the number passed as an argument`, ()=> {
    expect(funcs.numToString(14)).toStrictEqual(`14`)
})

test(`Checks that the function returns the correct planet based on how many it is away from the sun`, ()=>{
    expect(funcs.planet(9)).toStrictEqual(`pluto`)
    expect(funcs.planet(8)).toStrictEqual(`neptune`)
    expect(funcs.planet(7)).toStrictEqual(`uranus`)
    expect(funcs.planet(6)).toStrictEqual(`saturn`)
    expect(funcs.planet(5)).toStrictEqual(`jupiter`)
    expect(funcs.planet(4)).toStrictEqual(`mars`)
    expect(funcs.planet(3)).toStrictEqual(`earth`)
    expect(funcs.planet(2)).toStrictEqual(`venus`)
    expect(funcs.planet(1)).toStrictEqual(`mercury`)
})

test(`Checks that the function returns the number of true values in an array`, ()=>{
    expect(funcs.takeAttendance([true, true, false, true, true, false, true])).toBe(5)
    expect(funcs.takeAttendance([false, true, true, false, true, false])).toBe(3)
})

test(`Checks if the function returns the sum of its parameter's digits squared`, ()=>{
    expect(funcs.spicyNumber(22)).toBe(8)
})