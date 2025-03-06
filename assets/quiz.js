function checkAnswers() {
    let score = 0;
    const totalQuestions = 3;
    let resultMessage = "Your Results:<br>";

    // Question 1 (Multiple Choice)
    if (document.getElementById('q1b').checked) {
        score++;
        resultMessage += "Q1: Correct<br>";
    } else {
        resultMessage += "Q1: Incorrect<br>";
    }

    // Question 2 (Multiple Choice with Multiple Answers)
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

    // Question 3 (Fill-in-the-Blank)
    const q3Answer = document.getElementById('q3').value.trim().toLowerCase();
    if (q3Answer === "authorization") {
        score++;
        resultMessage += "Q3: Correct<br>";
    } else {
        resultMessage += "Q3: Incorrect<br>";
    }

    // Show the total score and pass/fail result
    resultMessage += `<br><strong>Your total score: ${score} out of ${totalQuestions}</strong><br>`;
    if (score >= 2) {
        resultMessage += "You passed!<br>";
    } else {
        resultMessage += "You failed. Try again!<br>";
    }

    document.getElementById('result').innerHTML = resultMessage;
}

function resetQuiz() {
    document.getElementById('quiz-form').reset();
    document.getElementById('result').innerHTML = '';
}

