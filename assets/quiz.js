function checkAnswers() {
    let score = 0;
    const totalQuestions = 5;
    let resultText = "";

    // Check answers for each question
    // Question 1
    if (document.getElementById("q1b").checked) {
        score++;
    }

    // Question 2 (checkboxes)
    if (document.getElementById("q2a").checked) score++;
    if (document.getElementById("q2c").checked) score++;
    if (document.getElementById("q2d").checked) score++;

    // Question 3 (fill-in-the-blank)
    if (document.getElementById("q3").value.toLowerCase() === "authentication and authorization") {
        score++;
    }

    // Question 4
    if (document.getElementById("q4b").checked) {
        score++;
    }

    // Question 5
    if (document.getElementById("q5c").checked) {
        score++;
    }

    // Determine pass/fail based on score
    const passFail = score / totalQuestions >= 0.8 ? "Pass" : "Fail";

    resultText = `Your Score: ${score} / ${totalQuestions} (${passFail})`;

    // Display result
    document.getElementById("result").innerHTML = resultText;
}

function resetQuiz() {
    document.getElementById("quiz-form").reset();
    document.getElementById("result").innerHTML = "";
}

