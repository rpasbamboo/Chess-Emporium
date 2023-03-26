var total_seconds = 60 * 1;
var c_minutes = parseInt(total_seconds / 60);
var c_seconds = parseInt(total_seconds % 60);
var timer;

function CheckTime() {
    document.getElementById("quiz-time-left").innerHTML = c_minutes + ' minutes ' + c_seconds + ' seconds ';

    if (total_seconds <= 0) {
        check();
    } else {
        total_seconds = total_seconds - 1;
        c_minutes = parseInt(total_seconds / 60);
        c_seconds = parseInt(total_seconds % 60);
        timer = setTimeout(CheckTime, 1000);
    }
}
timer = setTimeout(CheckTime, 1000);




function getRadioValue(radioArray) {
    for (let i = 0; i < radioArray.length; i++) {
        if (radioArray[i].checked) {
            return radioArray[i].value;
        }
    }
    return "";
}

function check() {

    clearInterval(timer);

    var elements = document.getElementById("quiz").elements;
    for (var i = 0, len = elements.length; i < len; ++i) {
        elements[i].disabled = true;
    }

    let question1 = getRadioValue(quiz.question1);
    let question2 = getRadioValue(quiz.question2);
    let question3 = getRadioValue(quiz.question3);
    let question4 = getRadioValue(quiz.question4);
    let question5 = getRadioValue(quiz.question5);
    let question6 = getRadioValue(quiz.question6);
    let question7 = getRadioValue(quiz.question7);
    let question8 = getRadioValue(quiz.question8);
    let question9 = getRadioValue(quiz.question9);
    let question10 = getRadioValue(quiz.question10);



    var correct = 0;



    if (question1 == "64") {
        correct++;
        document.getElementById("1").style.backgroundColor = "#e6ffe6";

    } else {
        document.getElementById("1").style.backgroundColor = "#ffe6e6";

    }


    if (question2 == "AdolfVsJean") {
        correct++;
        document.getElementById("2").style.backgroundColor = "#e6ffe6";
    } else {
        document.getElementById("2").style.backgroundColor = "#ffe6e6";

    }


    if (question3 == "Checkmate") {
        correct++;
        document.getElementById("3").style.backgroundColor = "#e6ffe6";
    } else {
        document.getElementById("3").style.backgroundColor = "#ffe6e6";

    }


    if (question4 == "India") {
        correct++;
        document.getElementById("4").style.backgroundColor = "#e6ffe6";
    } else {
        document.getElementById("4").style.backgroundColor = "#ffe6e6";

    }


    if (question5 == "dead") {
        correct++;
        document.getElementById("5").style.backgroundColor = "#e6ffe6";
    } else {
        document.getElementById("5").style.backgroundColor = "#ffe6e6";

    }


    if (question6 == "Elo") {
        correct++;
        document.getElementById("6").style.backgroundColor = "#e6ffe6";
    } else {
        document.getElementById("6").style.backgroundColor = "#ffe6e6";

    }


    if (question7 == "white") {
        correct++;
        document.getElementById("7").style.backgroundColor = "#e6ffe6";
    } else {
        document.getElementById("7").style.backgroundColor = "#ffe6e6";

    }


    if (question8 == "priest") {
        correct++;
        document.getElementById("8").style.backgroundColor = "#e6ffe6";
    } else {
        document.getElementById("8").style.backgroundColor = "#ffe6e6";

    }


    if (question9 == "2") {
        correct++;
        document.getElementById("9").style.backgroundColor = "#e6ffe6";
    } else {
        document.getElementById("9").style.backgroundColor = "#ffe6e6";

    }


    if (question10 == "269") {
        correct++;
        document.getElementById("10").style.backgroundColor = "#e6ffe6";
    } else {
        document.getElementById("10").style.backgroundColor = "#ffe6e6";

    }




    var points = (10 - correct) * (-1) + (correct * 2);

    if (correct == 0) {
        document.getElementById("quiz").style.background = "#ff6666";
    }

    if (correct == 1) {
        document.getElementById("quiz").style.background = "#ffb3b3";
    }

    if (correct == 2) {
        document.getElementById("quiz").style.background = "#ffb3d7";
    }

    if (correct == 3) {
        document.getElementById("quiz").style.background = "#ffb3ff";
    }

    if (correct == 4) {
        document.getElementById("quiz").style.background = "#d7b3ff";
    }

    if (correct == 5) {
        document.getElementById("quiz").style.background = "#b3b3ff";
    }

    if (correct == 6) {
        document.getElementById("quiz").style.background = "#b3d7ff";
    }

    if (correct == 7) {
        document.getElementById("quiz").style.background = "#b3ffff";
    }

    if (correct == 8) {
        document.getElementById("quiz").style.background = "#b3ffd7";
    }

    if (correct == 9) {
        document.getElementById("quiz").style.background = "#b3ffb3";
    }
    if (correct == 10) {
        document.getElementById("quiz").style.background = "#66ff66";
    }


    document.getElementById("l1cmc").style.backgroundColor = "#26D07C";
    document.getElementById("l2cmc").style.backgroundColor = "#26D07C";
    document.getElementById("l3cmc").style.backgroundColor = "#26D07C";
    document.getElementById("l4cmc").style.backgroundColor = "#26D07C";
    document.getElementById("l5cmc").style.backgroundColor = "#26D07C";
    document.getElementById("l6cmc").style.backgroundColor = "#26D07C";
    document.getElementById("l7cmc").style.backgroundColor = "#26D07C";
    document.getElementById("l8cmc").style.backgroundColor = "#26D07C";
    document.getElementById("l9cmc").style.backgroundColor = "#26D07C";
    document.getElementById("l10cmc").style.backgroundColor = "#26D07C";










    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("correct").innerHTML = "You marked " + correct + " questions correctly .";
    document.getElementById("time").innerHTML = "You used " + (59 - Math.floor(total_seconds)) + " seconds.";
    document.getElementById("marks").innerHTML = "You got " + points + " points.";

}