function checkAnswers() {
    // Collect answers
    let score = 0;
    let totalQuestions = 4; // Adjust this based on the number of questions

    // Check Question 1
    if (document.querySelector('input[name="q1"]:checked') && document.querySelector('input[name="q1"]:checked').value === "1") {
        score++;
    }

    // Check Question 2 (multiple correct answers)
    if (document.querySelector('input[name="q2a"]:checked')) score++;
    if (document.querySelector('input[name="q2c"]:checked')) score++;
    if (document.querySelector('input[name="q2d"]:checked')) score++;

    // Check Question 3 (fill-in-the-blank)
    let q3Answer = document.getElementById('q3').value.trim().toLowerCase();
    if (q3Answer === "authentication and authorization") {
        score++;
    }

    // Calculate the result
    let resultText = '';
    let feedbackText = '';

    // Pass or Fail with Enthusiastic Responses
    if (score === totalQuestions) {
        resultText = `Congratulations! You passed with a perfect score of ${score}/${totalQuestions}.`;
        feedbackText = "Excellent work! You're a Web Security pro!";
    } else if (score >= totalQuestions / 2) {
        resultText = `Well done! You scored ${score}/${totalQuestions}.`;
        feedbackText = "Great job! You're on the right track!";
    } else {
        resultText = `Oops! You scored ${score}/${totalQuestions}.`;
        feedbackText = "Don't worry, keep learning and trying!";
    }

    // Display the result with enthusiasm
    document.getElementById('result').innerHTML = `<h2>${resultText}</h2><p>${feedbackText}</p>`;
}

function resetQuiz() {
    // Reset all radio buttons and checkboxes
    document.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(input => input.checked = false);
    
    // Reset text input
    document.getElementById('q3').value = '';
    
    // Clear the result
    document.getElementById('result').innerHTML = '';
}
