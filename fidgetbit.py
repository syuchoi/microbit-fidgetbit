# A와 B는 각각 버튼 방향쪽으로 파도를 만든다.

def on_button_pressed_a():
    global index4, index23
    if ABpressed == 0:
        index4 = 0
        index23 = 0
        for index in range(5):
            for index2 in range(5):
                led.plot(4 - index2, index)
                basic.pause(15)
                led.unplot(4 - index2, index)
input.on_button_pressed(Button.A, on_button_pressed_a)

# 흔들면 랜덤한 x,y 값에 led를 켰다 끔.
# 흔들면 잔상때문에 마치 불빛이 굴러가는것처럼 보임.

def on_gesture_shake():
    global update, shakeRandX, shakeRandY
    update = 0
    while input.is_gesture(Gesture.SHAKE):
        update += 1
        shakeRandX = randint(0, 4)
        shakeRandY = randint(0, 4)
        led.plot(shakeRandX, shakeRandY)
        basic.pause(50)
        led.unplot(shakeRandX, shakeRandY)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

# 터치 손 떼면 led 초기화

def on_logo_released():
    basic.clear_screen()
input.on_logo_event(TouchButtonEvent.RELEASED, on_logo_released)

# 번갈아서 누르면 파도가 지나가는걸 보면 개인적으로 지루하지는 않다.

def on_button_pressed_b():
    global index4, index23
    if ABpressed == 0:
        index4 = 0
        index23 = 0
        for index22 in range(5):
            for index3 in range(5):
                led.plot(index3, 4 - index22)
                basic.pause(15)
                led.unplot(index3, 4 - index22)
input.on_button_pressed(Button.B, on_button_pressed_b)

# 로고 터치시 로고 아이콘을 led로 표시

def on_logo_touched():
    basic.show_leds("""
        . # # # .
                # . . . #
                # # . # #
                # . . . #
                . # # # .
    """)
input.on_logo_event(TouchButtonEvent.TOUCHED, on_logo_touched)

# 만약을 위한 중요 변수 초기화
shakeRandY = 0
shakeRandX = 0
update = 0
ABpressed = 0
index23 = 0
index4 = 0
index4 = 0
index23 = 0
ABpressed = 0
update = 0

def on_forever():
    global ABpressed, update
    # 파도가 위로 생성됐다가 손을 떼면 사라짐
    if input.button_is_pressed(Button.AB):
        ABpressed = 1
        for index24 in range(5):
            update += 1
            for index5 in range(5):
                led.plot(index5, 4 - index24)
            basic.pause(50)
    else:
        if ABpressed == 1:
            ABpressed = 0
            for index25 in range(5):
                update += -1
                for index6 in range(5):
                    led.unplot(index6, index25)
                basic.pause(50)
basic.forever(on_forever)
