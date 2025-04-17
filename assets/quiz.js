function checkAnswers() {
    let score = 0;
    const totalQuestions = 6;
    let resultMessage = "Your Results:<br><br>";

    // Helper to mark correct/incorrect and show the correct answer if wrong
    function evaluateMCQ(questionId, correctOptionId, labelText) {
        const selected = document.querySelector(`input[name="${questionId}"]:checked`);
        if (selected && selected.id === correctOptionId) {
            score++;
            return `Q${questionId.slice(1)}: ✅ Correct<br>`;
        } else {
            const correctLabel = document.querySelector(`label[for="${correctOptionId}"]`).innerText;
            return `Q${questionId.slice(1)}: ❌ Incorrect — Correct Answer: ${correctLabel}<br>`;
        }
    }

    // Question 1 (original)
    resultMessage += evaluateMCQ("q1", "q1b");

    // Question 2 (multi-answer: must select all correct, none wrong)
    const q2Correct = ["q2a", "q2c", "q2d"];
    const q2Selected = ["q2a", "q2b", "q2c", "q2d"].filter(id => document.getElementById(id).checked);
    const q2IsCorrect = q2Selected.length === q2Correct.length && q2Selected.every(id => q2Correct.includes(id));
    if (q2IsCorrect) {
        score++;
        resultMessage += "Q2: ✅ Correct<br>";
    } else {
        resultMessage += "Q2: ❌ Incorrect — Correct Answers: SQL Injection, Cross-Site Scripting (XSS), CSRF<br>";
    }

    // Question 3 (fill in the blank)
    const q3Answer = document.getElementById('q3').value.trim().toLowerCase();
    if (q3Answer === "authorization") {
        score++;
        resultMessage += "Q3: ✅ Correct<br>";
    } else {
        resultMessage += "Q3: ❌ Incorrect — Correct Answer: Authorization<br>";
    }

    // Question 4 (new MCQ)
    resultMessage += evaluateMCQ("q4", "q4c");

    // Question 5 (new MCQ)
    resultMessage += evaluateMCQ("q5", "q5a");

    // Question 6 (new MCQ)
    resultMessage += evaluateMCQ("q6", "q6b");

    // Final score summary
    resultMessage += `<br><strong>Your total score: ${score} out of ${totalQuestions}</strong><br>`;
    if (score >= 4) {
        resultMessage += "🎉 You passed the quiz — Great job, Web Security Champ! 💪<br>";
    } else {
        resultMessage += "😓 You didn't pass — but don't worry, review the material and try again!<br>";
    }

    document.getElementById('result').innerHTML = resultMessage;
}

function resetQuiz() {
    document.getElementById('quiz-form').reset();
    document.getElementById('result').innerHTML = '';
}
