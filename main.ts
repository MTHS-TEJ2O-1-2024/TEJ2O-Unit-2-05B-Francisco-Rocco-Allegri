/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Francisco
 * Created on: Sep 2024
 * This program tells you the climate's temperature in Kelvin
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

let temperatureC : number
let temperatureK : number

input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.pause(500)

    temperatureC = input.temperature()
    basic.showString ("The temperature in Kelvin is")
    basic.showNumber(temperatureC * 274.15)

    basic.clearScreen()
    basic.pause(500)
    basic.showIcon(IconNames.Happy)
})
