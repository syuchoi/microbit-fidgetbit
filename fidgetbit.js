//  A와 B는 각각 버튼 방향쪽으로 파도를 만든다.
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (ABpressed == 0) {
        index4 = 0
        index23 = 0
        for (let index = 0; index < 5; index++) {
            for (let index2 = 0; index2 < 5; index2++) {
                led.plot(4 - index2, index)
                basic.pause(15)
                led.unplot(4 - index2, index)
            }
        }
    }
    
})
//  흔들면 랜덤한 x,y 값에 led를 켰다 끔.
//  흔들면 잔상때문에 마치 불빛이 굴러가는것처럼 보임.
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    
    update = 0
    while (input.isGesture(Gesture.Shake)) {
        update += 1
        shakeRandX = randint(0, 4)
        shakeRandY = randint(0, 4)
        led.plot(shakeRandX, shakeRandY)
        basic.pause(50)
        led.unplot(shakeRandX, shakeRandY)
    }
})
//  터치 손 떼면 led 초기화
input.onLogoEvent(TouchButtonEvent.Released, function on_logo_released() {
    basic.clearScreen()
})
//  번갈아서 누르면 파도가 지나가는걸 보면 개인적으로 지루하지는 않다.
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (ABpressed == 0) {
        index4 = 0
        index23 = 0
        for (let index22 = 0; index22 < 5; index22++) {
            for (let index3 = 0; index3 < 5; index3++) {
                led.plot(index3, 4 - index22)
                basic.pause(15)
                led.unplot(index3, 4 - index22)
            }
        }
    }
    
})
//  로고 터치시 로고 아이콘을 led로 표시
input.onLogoEvent(TouchButtonEvent.Touched, function on_logo_touched() {
    basic.showLeds(`
        . # # # .
                # . . . #
                # # . # #
                # . . . #
                . # # # .
    `)
})
//  만약을 위한 중요 변수 초기화
let shakeRandY = 0
let shakeRandX = 0
let update = 0
let ABpressed = 0
let index23 = 0
let index4 = 0
index4 = 0
index23 = 0
ABpressed = 0
update = 0
basic.forever(function on_forever() {
    
    //  파도가 위로 생성됐다가 손을 떼면 사라짐
    if (input.buttonIsPressed(Button.AB)) {
        ABpressed = 1
        for (let index24 = 0; index24 < 5; index24++) {
            update += 1
            for (let index5 = 0; index5 < 5; index5++) {
                led.plot(index5, 4 - index24)
            }
            basic.pause(50)
        }
    } else if (ABpressed == 1) {
        ABpressed = 0
        for (let index25 = 0; index25 < 5; index25++) {
            update += -1
            for (let index6 = 0; index6 < 5; index6++) {
                led.unplot(index6, index25)
            }
            basic.pause(50)
        }
    }
    
})
