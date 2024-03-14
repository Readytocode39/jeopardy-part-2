// Do not change the import statement
import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });

//creating variable to diable buttons
// const button = document.getElementById("guess", "pass", "nextRd");
// button.disabled = true;


//CREATED VARIABLES FOR RD ONE PT ELEMENTS

//creating a variable for round 1 class of 200 pt elements
const rd1TwoEl = document.querySelectorAll(".two")

//creating a variable for round 1 class of 400 pt elements
const rd1FourEl = document.querySelectorAll(".four")

//creating a variable for round 1 class of 600 pt elements
const rd1SixEl = document.querySelectorAll(".six")

//creating a variable for round 1 class of 800 pt elements
const rd1EightEl = document.querySelectorAll(".eight")

//creating a variable for round 1 class of 1000 pt elements
const rd1OneEl = document.querySelectorAll(".one")


//CREATED VARIABLES FOR RD TWO PT ELEMENTS

//creating a variable for round 2 class of 200 pt elements
const rd2FourEl = document.querySelectorAll(".four2")

//creating a variable for round 2 class of 400 pt elements
const rd2EightEl = document.querySelectorAll(".eight2")

//creating a variable for round 2 class of 600 pt elements
const rd2TwelveEl = document.querySelectorAll(".twelve")

//creating a variable for round 2 class of 800 pt elements
const rd2SixteenEl = document.querySelectorAll(".sixteen")

//creating a variable for round 2 class of 1000 pt elements
const rd2TwoEl = document.querySelectorAll(".two2")


//created variable to display questions
const quesDisplay = document.querySelector(".quesDisplay")


//created variable for players answer
const playerAnswer = document.querySelector("#playerAnswer")
console.log(playerAnswer.value) //empty string until player enters value


//created variable for guess element in html
const guess = document.querySelector(".guess")


//const turn = document.getElementById('turn')


//CREATED VARIABLES FOR ROUND ONE AND ROUND TWO CATAGORIE QUESTIONS
let natRd1 = placeholderQuestions.slice(0, 5);
let natRd2 = placeholderQuestions.slice(5, 10);


let animalRd1 = placeholderQuestions.slice(10, 15);
let animalRd2 = placeholderQuestions.slice(15, 20);


let compRd1 = placeholderQuestions.slice(20, 25)
let compRd2 = placeholderQuestions.slice(25, 30)


let mythRd1 = placeholderQuestions.slice(30, 35)
let mythRd2 = placeholderQuestions.slice(35, 40)


let hisRd1 = placeholderQuestions.slice(40, 45)
let hisRd2 = placeholderQuestions.slice(45, 50)


let genRd1 = placeholderQuestions.slice(50, 55)
let genRd2 = placeholderQuestions.slice(55, 60)


//SETTING UP ROUND ONE QUESTIONS

//made variable with an array of round one categories with questions
const rd1Ques = [natRd1, animalRd1, compRd1, mythRd1, hisRd1, genRd1]
console.log(rd1Ques)


//made variable with an empty array that will hold round one questions worth 200 pts.
let pt2Array = []


//made a for each function that goes over all round 1 categories and pushes to pt2Array the 1st question of each round 1 categorie.
function pt2() {
    rd1Ques.forEach((question) => {
        pt2Array.push(question[0])

    })
}
//calling for each function.
pt2()


//creating for each function with for loop, that is taking each round one 200 elements and adding an addeventlistener to it, so when element is clicked 1st question of each categorie will be shown

rd1TwoEl.forEach((element, index) => {
    element.addEventListener("click", () => {


        for (let i = 0; i < pt2Array.length; i++) {
            let currQues = pt2Array[i]
            if (index === i) {

                quesDisplay.textContent = currQues.question
                console.log(currQues, "GOTCHA")
                guessBtn(currQues.answer)

            }


        }
    })

});

//WORKING ON

//function created to take current question's asnwer and compare it to players answer... If player's answer is equal to current question's answer then point value of question will be added to player's score... If player's answer is not equal to current question's answer then pt value of current question will be deducted from player's total score.

function guessBtn(currAnswer) {
    guess.addEventListener("click", () => {
        if (playerAnswer.value === currAnswer) {

            console.log("correct")
        } else {
            console.log("incorrect")
        }

    });
}


//made variable with an empty array that will hold round one questions worth 400 pts.
let pt4Array = []


//made a for each function that goes over all round 1 categories and pushes to pt4Array the 2nd question of each categorie.
function pt4() {
    rd1Ques.forEach((question) => {
        pt4Array.push(question[1])
    })
}
//calling for each function.
pt4()

//creating for each function with for loop, that is taking each round one 400 elements and adding an addeventlistener to it, so when element is clicked 2nd question of each categorie will be shown
rd1FourEl.forEach((element, index) => {
    element.addEventListener("click", () => {
        for (let i = 0; i < pt4Array.length; i++) {
            let currQues = pt4Array[i]
            if (index === i) {
                quesDisplay.textContent = currQues.question
            }
        }
    })
});


//made variable with an empty array that will hold round one questions worth 600 pts.
let pt6Array = []


//made a for each function that goes over all round 1 categories and pushes to pt6Array the 3rd question of each categorie.
function pt6() {
    rd1Ques.forEach((question) => {
        pt6Array.push(question[2])
    })
}
//calling for each function.
pt6()

//creating for each function with for loop, that is taking each round one 600 elements and adding an addeventlistener to it, so when element is clicked 3rd question of each categorie will be shown
rd1SixEl.forEach((element, index) => {
    element.addEventListener("click", () => {
        for (let i = 0; i < pt6Array.length; i++) {
            let currQues = pt6Array[i]
            if (index === i) {
                quesDisplay.textContent = currQues.question
            }
        }
    })
});


//made variable with an empty array that will hold round one questions worth 800 pts.
let pt8Array = []


//made a for each function that goes over all round 1 categories and pushes to pt8Array the 4th question of each categorie.
function pt8() {
    rd1Ques.forEach((question) => {
        pt8Array.push(question[3])
    })
}
//calling for each function.
pt8()

//creating for each function with for loop, that is taking each round one 800 elements and adding an addeventlistener to it, so when element is clicked 4th question of each categorie will be shown
rd1EightEl.forEach((element, index) => {
    element.addEventListener("click", () => {
        for (let i = 0; i < pt8Array.length; i++) {
            let currQues = pt8Array[i]
            if (index === i) {
                quesDisplay.textContent = currQues.question
            }
        }
    })
});


//made variable with an empty array that will hold round one questions worth 1000 pts.
let pt1Array = []


//made a for each function that goes over all round 1 categories and pushes to pt1Array the 5th question of each categorie.
function pt1() {
    rd1Ques.forEach((question) => {
        pt1Array.push(question[4])
    })
}
//calling for each function.
pt1()

//creating for each function with for loop, that is taking each round one 1000 elements and adding an addeventlistener to it, so when element is clicked 5th question of each categorie will be shown
rd1OneEl.forEach((element, index) => {
    element.addEventListener("click", () => {
        for (let i = 0; i < pt1Array.length; i++) {
            let currQues = pt1Array[i]
            if (index === i) {
                quesDisplay.textContent = currQues.question
            }
        }
    })
});


//SETTING UP ROUND TWO QUESTIONS

//made variable with an array of round two categories with questions
const rd2Ques = [natRd2, animalRd2, compRd2, mythRd2, hisRd2, genRd2]
console.log(rd2Ques)

//made variable with an empty array that will hold round two questions worth 400 pts.
let pt42Array = []


//made a for each function that goes over all round 2 categories and pushes to pt42Array the 1st question of each categorie.
function pt42() {
    rd2Ques.forEach((question) => {
        pt42Array.push(question[0])
    })
}
//calling for each function.
pt42()

//creating for each function with for loop, that is taking each round two 400 elements and adding an addeventlistener to it, so when element is clicked 1st question of each categorie will be shown
rd2FourEl.forEach((element, index) => {
    element.addEventListener("click", () => {
        for (let i = 0; i < pt42Array.length; i++) {
            let currQues = pt42Array[i]
            if (index === i) {
                quesDisplay.textContent = currQues.question
            }
        }
    })
});


//made variable with an empty array that will hold round two questions worth 800 pts.
let pt82Array = []


//made a for each function that goes over all round 2 categories and pushes to pt82Array the 2nd question of each categorie.
function pt82() {
    rd2Ques.forEach((question) => {
        pt82Array.push(question[1])
    })
}
//calling for each function.
pt82()

//creating for each function with for loop, that is taking each round two 800 elements and adding an addeventlistener to it, so when element is clicked 2nd question of each categorie will be shown
rd2EightEl.forEach((element, index) => {
    element.addEventListener("click", () => {
        for (let i = 0; i < pt82Array.length; i++) {
            let currQues = pt82Array[i]
            if (index === i) {
                quesDisplay.textContent = currQues.question
            }
        }
    })
});



//made variable with an empty array that will hold round two questions worth 1200 pts.
let pt12Array = []


//made a for each function that goes over all round 2 categories and pushes to pt12Array the 3rd question of each categorie.
function pt12() {
    rd2Ques.forEach((question) => {
        pt12Array.push(question[2])
    })
}
//calling for each function.
pt12()

//creating for each function with for loop, that is taking each round two 1200 elements and adding an addeventlistener to it, so when element is clicked 3rd question of each categorie will be shown
rd2TwelveEl.forEach((element, index) => {
    element.addEventListener("click", () => {
        for (let i = 0; i < pt12Array.length; i++) {
            let currQues = pt12Array[i]
            if (index === i) {
                quesDisplay.textContent = currQues.question
            }
        }
    })
});


//made variable with an empty array that will hold round two questions worth 1600 pts.
let pt16Array = []


//made a for each function that goes over all round 2 categories and pushes to pt16Array the 4th question of each categorie.
function pt16() {
    rd2Ques.forEach((question) => {
        pt16Array.push(question[3])
    })
}
//calling for each function.
pt16()

//creating for each function with for loop, that is taking each round two 1600 elements and adding an addeventlistener to it, so when element is clicked 4th question of each categorie will be shown
rd2SixteenEl.forEach((element, index) => {
    element.addEventListener("click", () => {
        for (let i = 0; i < pt16Array.length; i++) {
            let currQues = pt16Array[i]
            if (index === i) {
                quesDisplay.textContent = currQues.question
            }
        }
    })
});



//made variable with an empty array that will hold round two questions worth 2000 pts.
let pt2000Array = []


//made a for each function that goes over all round 2 categories and pushes to pt2000Array the 5th question of each categorie.
function pt2000() {
    rd2Ques.forEach((question) => {
        pt2000Array.push(question[4])
    })
}
//calling for each function.
pt2000()

//creating for each function with for loop, that is taking each round two 2000 elements and adding an addeventlistener to it, so when element is clicked 5th question of each categorie will be shown
rd2TwoEl.forEach((element, index) => {
    element.addEventListener("click", () => {
        for (let i = 0; i < pt2000Array.length; i++) {
            let currQues = pt2000Array[i]
            if (index === i) {
                quesDisplay.textContent = currQues.question
            }
        }
    })
});


//CREATING JEOPARDY CLASS TO KEEP TRACK OF PLAYERS SCORE

// class Jeopardy {
//     constructor(element, options = {}) {
//         this.placeholderQuestions = [natRd1, natRd2, animalRd1, animalRd2, compRd1, compRd2, mythRd1, mythRd2, hisRd1, hisRd2, genRd1, genRd2];
//         this.catagories = [];
//         this.player1Score = 0;
//         this.player2Score = 0;
//         this.formElement = element.querySelector("form")
//         this.scoreCountElement1 = element.querySelector(".score-count1")
//         this.scoreCountElement2 = element.querySelector(".score-count2")

//     }

//method that starts game
// initGame() {
//     this.updateScore(0);

// }
//creating method that updates score
//     updateScore(change) {
//         this.player1Score += change;
//         this.player2Score += change;
//         this.scoreCountElement1.textContent = this.player1Score
//         this.scoreCountElement2.textContent = this.player2Score;
//     }
// }

//creating new instance of Jeopardy
//const game = new Jeopardy(document.querySelector(".container1"), {});

//calling startGame method
// game.initGame