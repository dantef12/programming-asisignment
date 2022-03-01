input.onButtonPressed(Button.A, function () {
    ball_count += 1
    basic.showNumber(ball_count)
    basic.showString("b")
    if (ball_count == 4) {
        basic.showString("Walk")
        basic.clearScreen()
        ball_count = 0
        soundExpression.yawn.playUntilDone()
        basic.showNumber(ball_count)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showNumber(0)
})
input.onButtonPressed(Button.B, function () {
    strike_count += 1
    basic.showNumber(strike_count)
    basic.showString("s")
    if (strike_count == 3) {
        basic.showString("Strikeout!")
        soundExpression.soaring.playUntilDone()
        basic.clearScreen()
        strike_count = 0
        basic.showNumber(strike_count)
    }
})
let strike_count = 0
let ball_count = 0
ball_count = 0
strike_count = 0
