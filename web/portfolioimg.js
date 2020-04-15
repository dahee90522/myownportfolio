var number1 = 0,
    number2 = 0,
    number3 = 0,
    number4 = 0,
    number5 = 0,
    number6 = 0,
    number7 = 0;
var img1 = new Array("img/port1_1.jpg", "img/port1_2.jpg", "img/port1_3.jpg", "img/port1_4.jpg");
var img2 = new Array("img/port2_1.png", "img/port2_2.png", "img/port2_3.png", "img/port2_4.png", "img/port2_5.png", "img/port2_6.png");
var img3 = new Array("img/port3_1.png", "img/port3_2.png", "img/port3_3.png", "img/port3_4.png");
var img4 = new Array("img/port4_1.png", "img/port4_2.png", "img/port4_3.png", "img/port4_4.png");
var img5 = new Array("img/port5_1.png", "img/port5_2.png", "img/port5_3.png", "img/port5_4.png", "img/port5_5.png");
var img6 = new Array("img/port6_1.png", "img/port6_2.png", "img/port6_3.png", "img/port6_4.png");
var img7 = new Array("img/port7_1.png", "img/port7_2.png");

function next(n) {
    if (n == 1) {
        number1 += 1;
        if (number1 >= img1.length) {
            number1 = 0;
        }
        document.getElementById("img1").src = img1[number1];
    }
    if (n == 2) {
        number2 += 1;
        if (number2 >= img2.length) {
            number2 = 0;
        }
        document.getElementById("img2").src = img2[number2];
    }
    if (n == 3) {
        number3 += 1;
        if (number3 >= img3.length) {
            number3 = 0;
        }
        document.getElementById("img3").src = img3[number3];
    }
    if (n == 4) {
        number4 += 1;
        if (number4 >= img4.length) {
            number4 = 0;
        }
        document.getElementById("img4").src = img4[number4];
    }
    if (n == 5) {
        number5 += 1;
        if (number5 >= img5.length) {
            number5 = 0;
        }
        document.getElementById("img5").src = img5[number5];
    }
    if (n == 6) {
        number6 += 1;
        if (number6 >= img6.length) {
            number6 = 0;
        }
        document.getElementById("img6").src = img6[number6];
    }
    if (n == 7) {
        number7 += 1;
        if (number7 >= img7.length) {
            number7 = 0;
        }
        document.getElementById("img7").src = img7[number7];
    }
}