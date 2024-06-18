radio.onReceivedNumber(function (receivedNumber) {
    control2 = receivedNumber
    if (control2 == 1) {
        wuKong.setAllMotor(100, -100)
    } else if (control2 == 2) {
        wuKong.setAllMotor(-100, 100)
    } else if (control2 == 3) {
        wuKong.setAllMotor(-100, -100)
    } else if (control2 == 4) {
        wuKong.setAllMotor(100, 100)
    }
    basic.pause(2000)
    wuKong.setAllMotor(0, 0)
})
let control2 = 0
radio.setGroup(1)
basic.forever(function () {
	
})
