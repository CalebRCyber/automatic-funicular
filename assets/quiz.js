function checkAnswers() {
    let score = 0;
    const totalQuestions = 3;
    let resultMessage = "Your Results:<br>";

    // Question 1 (This is my first question that I need to remember the code)
    if (document.getElementById('q1b').checked) {
        score++;
        resultMessage += "Q1: Correct<br>";
    } else {
        resultMessage += "Q1: Incorrect<br>";
    }

    // Question 2 deals with web application security and is composed of gettters)
    let q2Score = 0;
    if (document.getElementById('q2a').checked) q2Score++;
    if (document.getElementById('q2c').checked) q2Score++;
    if (document.getElementById('q2d').checked) q2Score++;
    if (q2Score === 3) {
        score++;
        resultMessage += "Q2: Correct<br>";
    } else {
        resultMessage += "Q2: Incorrect<br>";
    }

    // ( This is the fill in the blank code that runs the quiz questions for question 3)
    const q3Answer = document.getElementById('q3').value.trim().toLowerCase();
    if (q3Answer === "authorization") {
        score++;
        resultMessage += "Q3: Correct<br>";
    } else {
        resultMessage += "Q3: Incorrect<br>";
    }

    // This code is designated to show whether particpant passed or failed 
    resultMessage += `<br><strong>Your total score: ${score} out of ${totalQuestions}</strong><br>`;
    if (score >= 2) {
        resultMessage += "You are so smart and have passed this quiz! Awesome Sauce! <br>";
    } else {
        resultMessage += "You failed but don't give up and try again! My Freind! <br>";
    }

    document.getElementById('result').innerHTML = resultMessage;
}

function resetQuiz() {
    document.getElementById('quiz-form').reset();
    document.getElementById('result').innerHTML = '';
}

