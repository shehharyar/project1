let questions = [{
        question: "Who is the father of computer?",
        options: ["Charles Babbage", "Charles Naiper", "Lady Ada Augusta"],
        answer: "Charles Babbage"
    },
    {
        question: "Who is the first governor general of pakistan?",
        options: ["Lord Mount batten", "Muhammad Ali bogra", "Quaid-e-Azam"],
        answer: "Quaid-e-Azam"
    },
    {
        question: "Who is the first programmer?",
        options: ["Charles Babbage", "Charles Naiper", "Lady Ada Augusta"],
        answer: "Lady Ada Augusta"
    },
    {
        question: "Who is the first prime minister of Pakistan?",
        options: ["Liaquat Ali Khan", "J.L. Nehru", "Z.A. Bhutto"],
        answer: "Liaquat Ali Khan"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    showQuestions(0);
});
let question_Number = 0;
let correct = 0

let showQuestions = (e) => {
    let quest = document.getElementById('question').innerHTML = questions[e].question;
    // options
    let Options = document.getElementById('container')
    Options.innerHTML = "";

    for (const opt of questions[e].options) {

        Options.innerHTML += `<input type="radio" name = "Gen_quest" value= '${opt}' id="Option">${opt}<br/>`;

    }

}
let nextQuestion = 0;
let Next_Question = (e) => {
    nextQuestion++;
    if (document.getElementById("Option").checked == questions[nextQuestion].answer) {
        alert(2);
    } else if (document.getElementById("Option").checked != questions[nextQuestion].answer) {
        alert("wrong")

    } else if (document.getElementById("Option").checked == false) {
        alert("You have not selected any season")

    }
    showQuestions(nextQuestion)
}