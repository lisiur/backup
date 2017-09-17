#include <IRremote.h>
#include <Servo.h>
int L_IN_1 = 7;
int L_IN_2 = 6;
int R_IN_1 = 5;
int R_IN_2 = 4;
int L_EN = 11;
int R_EN = 10;

int VOL_ECHO = 12;
int VOL_TRIGGER = 13;
int SERVO_PIN = 3;

int RECEIVER = 9;
IRrecv irrecv(RECEIVER);
decode_results results;
Servo servo;

long lastCMD = 0xFFFFFFFF;
int leftSpeed = 0;
int rightSpeed = 0;

boolean lockForward = false;
int dangerTimes = 0;

float distance;

long codes[12] = {
  0xFD30CF, 0xFD08F7, 0xFD8877, 0xFD48B7, 0xFD28D7, 0xFDA857,
  0xFD6897, 0xFD18E7, 0xFD9867, 0xFD58A7, 0xFD20D7, 0xFD609F
};

long LEFT = codes[4];
long RIGHT = codes[6];
long FORWARD = codes[2];
long BACKWARD = codes[8];
long FORWARD_LEFT = codes[1];
long FORWARD_RIGHT = codes[3];
long BACKWARD_LEFT = codes[7];
long BACKWARD_RIGHT = codes[9];
long STOP = codes[5];
long SHAKE_HEAD = codes[0];

void setLeftMotor(float speed) {
  if (speed > 0) {
    digitalWrite(L_IN_1, HIGH);
    digitalWrite(L_IN_2, LOW);
  } else if (speed < 0){
    digitalWrite(L_IN_1, LOW);
    digitalWrite(L_IN_2, HIGH);
  } else {
    digitalWrite(L_IN_1, LOW);
    digitalWrite(L_IN_2, LOW);
  }
  analogWrite(L_EN, fabs(speed));
}
void setRightMotor(float speed) {
  if (speed > 0) {
    digitalWrite(R_IN_1, HIGH);
    digitalWrite(R_IN_2, LOW);
  } else if (speed < 0){
    digitalWrite(R_IN_1, LOW);
    digitalWrite(R_IN_2, HIGH);
  } else {
    digitalWrite(R_IN_1, LOW);
    digitalWrite(R_IN_2, LOW);
  }
  analogWrite(R_EN, fabs(speed));
}
void stopWheel() {
  leftSpeed = 0;
  rightSpeed = 0;
  setLeftMotor(0);
  setRightMotor(0);
}

void shakeHead(int times=1, int delayTime=2) {
  while(times) {
    for(int degree = 90; degree <= 150; degree++) {
      servo.write(degree);
      delay(delayTime);
    }
    for(int degree = 150; degree >= 30; degree--) {
      servo.write(degree);
      delay(delayTime);
    }
    for(int degree = 30; degree <= 90; degree++) {
      servo.write(degree);
      delay(delayTime);
    }
    times--;
  }
}

void controlWheel() {
  if (irrecv.decode(&results)) {
    if (results.value != 0xFFFFFFFF) { // change cmd;
      lastCMD = results.value;
      if (results.value == FORWARD) {
        leftSpeed = 255;
        rightSpeed = 255;
      } else if (results.value == BACKWARD) {
        leftSpeed = -255;
        rightSpeed = -255;
      } else if (results.value == LEFT) {
        leftSpeed = -255;
        rightSpeed = 255;
      } else if (results.value == RIGHT) {
        leftSpeed = 255;
        rightSpeed = -255;
      } else if (results.value == FORWARD_LEFT) {
        leftSpeed = 0;
        rightSpeed = 255;
      } else if (results.value == FORWARD_RIGHT) {
        leftSpeed = 255;
        rightSpeed = 0;
      } else if (results.value == BACKWARD_LEFT) {
        leftSpeed = 0;
        rightSpeed = -255;
      } else if (results.value == BACKWARD_RIGHT) {
        leftSpeed = -255;
        rightSpeed = 0;
      } else if (results.value == STOP) {
        stopWheel();
      } else if (results.value == SHAKE_HEAD) {
        shakeHead();
      }
    } else {
      setLeftMotor(0);
      setRightMotor(0);
      setLeftMotor(leftSpeed);
      setRightMotor(rightSpeed);
    } // continue cmd;
    // Serial.println(results.value, HEX);
    // Serial.println(lastCMD, HEX);
    // Serial.println(leftSpeed);
    // Serial.println(rightSpeed);
    irrecv.resume();
  } else {
    /* setLeftMotor(0);
    setRightMotor(0);*/
  }
}

void testDistance() {
  digitalWrite(VOL_TRIGGER, LOW);
  delayMicroseconds(2);
  digitalWrite(VOL_TRIGGER,  HIGH);
  delayMicroseconds(10);
  digitalWrite(VOL_TRIGGER, LOW);

  distance = pulseIn(VOL_ECHO, HIGH) / 58.0;
  distance = (int(distance*100.0)) / 100.0;
  // Serial.println(distance);
  // delay(1000);
}

void setup() {
  pinMode(L_IN_1, OUTPUT);
  pinMode(L_IN_2, OUTPUT);
  pinMode(R_IN_1, OUTPUT);
  pinMode(R_IN_2, OUTPUT);
  pinMode(L_EN, OUTPUT);
  pinMode(R_EN, OUTPUT);
  pinMode(VOL_TRIGGER, OUTPUT);
  pinMode(VOL_ECHO, INPUT);

  setLeftMotor(0);
  setRightMotor(0);
  irrecv.enableIRIn();
  servo.attach(SERVO_PIN);
  servo.write(90);
  // Serial.begin(9600);

}

void loop() {
  controlWheel();
  testDistance();
  if (distance <= 15) {
    dangerTimes++;
  }
  if (dangerTimes > 50 && !lockForward) {
    lockForward = true;
    stopWheel();
    shakeHead();
    dangerTimes = 0;
  }
  if (distance > 30) {
    lockForward = false;
  }
}
