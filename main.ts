/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Francisco
 * Created on: Sep 2024
 * This program tells you the climate's temperature in Kelvin
*/

basic.clearScreen()
basic.pause(1000)

let temperature: number
basic.showIcon(IconNames.Happy)


input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.pause(500)

    temperature = input.temperature()
    basic.showNumber(temperature)

    basic.clearScreen()
    basic.pause(500)
    basic.showIcon(IconNames.Happy)
})
