input.onButtonPressed(Button.A, function () {
    RPS__Player += 1
    if (RPS__Player == 0) {
        basic.showString("R")
    } else if (RPS__Player == 1) {
        basic.showString("P")
    } else if (RPS__Player == 2) {
        basic.showString("S")
    }
})
input.onButtonPressed(Button.AB, function () {
    if (RPS__Player == 0 && RPS__Opponent == 2 || RPS__Player == 1 && RPS__Opponent == 0 || RPS__Player == 2 && RPS__Opponent == 1) {
        basic.showString("Lose")
        RPS__Opponent = randint(0, 2)
        RPS__Player = 0
        Points__Opponent += 1
        Game_Number += 1
    } else if (RPS__Player == 0 && RPS__Opponent == 1 || RPS__Player == 1 && RPS__Opponent == 2 || RPS__Player == 2 && RPS__Opponent == 0) {
        basic.showString("Win")
        RPS__Opponent = randint(0, 2)
        RPS__Player = 0
        Points__Player += 1
        Game_Number += 1
    } else if (RPS__Player == RPS__Opponent) {
        basic.showString("Tie")
        RPS__Opponent = randint(0, 2)
        RPS__Player = 0
        Game_Number += 1
    }
    if (Game_Number == 3) {
        basic.showString("Player has" + Points__Player + "Points")
        basic.showString("Opponent has" + Points__Opponent + "Points")
    }
})
let Points__Player = 0
let Game_Number = 0
let Points__Opponent = 0
let RPS__Player = 0
let RPS__Opponent = 0
basic.showIcon(IconNames.Yes)
RPS__Opponent = randint(0, 2)
RPS__Player = 0
basic.forever(function () {
    if (RPS__Player == 3) {
        RPS__Player = 0
    }
    if (RPS__Player == 0) {
        basic.showString("R")
    } else if (RPS__Player == 1) {
        basic.showString("P")
    } else if (RPS__Player == 2) {
        basic.showString("S")
    }
})
