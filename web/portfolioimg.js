var number1 = 0,
    number2 = 0,
    number3 = 0,
    number4 = 0,
    number5 = 0,
    number6 = 0,
    number7 = 0;
var img1 = new Array("img/port1_1.JPG", "img/port1_2.JPG", "img/port1_3.JPG", "img/port1_4.JPG");
var img2 = new Array("img/port2_1.png", "img/port2_2.png", "img/port2_3.png", "img/port2_4.png", "img/port2_5.png", "img/port2_6.png");
var img3 = new Array("img/port3_1.png", "img/port3_2.png", "img/port3_3.png", "img/port3_4.png");
var img4 = new Array("img/port4_1.png", "img/port4_2.png", "img/port4_3.png", "img/port4_4.png");
var img5 = new Array("img/port5_1.PNG", "img/port5_2.PNG", "img/port5_3.png", "img/port5_4.PNG", "img/port5_5.PNG");
var img6 = new Array("img/port6_1.PNG", "img/port6_2.PNG", "img/port6_3.PNG", "img/port6_4.PNG");
var img7 = new Array("img/port7_1.PNG", "img/port7_2.PNG");
var img8 = new Array("img/1_1.jpg", "img/1_2.JPG", "img/1_3.JPG", "img/1_4.JPG", "img/1_5.JPG");

function next(n) {
    if (n == 1) {
        number1 += 1;
        if (number1 >= img1.length) {
            number1 = 0;
        }
        document.getElementById("img1").src = "https://github.com/dahee90522/myownportfolio/blob/master/web/" + img1[number1] + "?raw=true";
        //https://github.com/dahee90522/myownportfolio/blob/master/web/img/port1_2.JPG
    }
    if (n == 2) {
        number2 += 1;
        if (number2 >= img2.length) {
            number2 = 0;
        }
        document.getElementById("img2").src = "https://github.com/dahee90522/myownportfolio/blob/master/web/" + img2[number2] + "?raw=true";
    }
    if (n == 3) {
        number3 += 1;
        if (number3 >= img3.length) {
            number3 = 0;
        }
        document.getElementById("img3").src = "https://github.com/dahee90522/myownportfolio/blob/master/web/" + img3[number3] + "?raw=true";
    }
    if (n == 4) {
        number4 += 1;
        if (number4 >= img4.length) {
            number4 = 0;
        }
        document.getElementById("img4").src = "https://github.com/dahee90522/myownportfolio/blob/master/web/" + img4[number4] + "?raw=true";
    }
    if (n == 5) {
        number5 += 1;
        if (number5 >= img5.length) {
            number5 = 0;
        }
        document.getElementById("img5").src = "https://github.com/dahee90522/myownportfolio/blob/master/web/" + img5[number5] + "?raw=true";
    }
    if (n == 6) {
        number6 += 1;
        if (number6 >= img6.length) {
            number6 = 0;
        }
        document.getElementById("img6").src = "https://github.com/dahee90522/myownportfolio/blob/master/web/" + img6[number6] + "?raw=true";
    }
    if (n == 7) {
        number7 += 1;
        if (number7 >= img7.length) {
            number7 = 0;
        }
        document.getElementById("img7").src = "https://github.com/dahee90522/myownportfolio/blob/master/web/" + img7[number7] + "?raw=true";
    }
    if (n == 8) {
        number8 += 1;
        if (number8 >= img8.length) {
            number8 = 0;
        }
        document.getElementById("img8").src = "https://github.com/dahee90522/myownportfolio/blob/master/web/" + img8[number8] + "?raw=true";
    }
}