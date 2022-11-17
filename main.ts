let tool = randint(1, 3)
if (tool == 1) {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
}
if (tool == 2) {
    basic.showLeds(`
        . . . . .
        . . # # #
        . # # # .
        # # # . .
        . . . . .
        `)
}
if (tool == 3) {
    basic.showLeds(`
        . . . . #
        # # . # .
        . # # . .
        # # . # .
        . . . . #
        `)
}
basic.forever(function () {
	
})
