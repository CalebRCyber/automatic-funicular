function checkAnswers() {
    // Collect answers
    let score = 0;
    let totalQuestions = 5; // Total number of questions

    let resultText = '';
    let feedbackText = '';
    let answerFeedback = '';

    // This are the elemetns that are used for this code and each serve a function 

    // Question 1
    const q1Answer = document.querySelector('input[name="q1"]:checked');
    if (q1Answer) {
        if (q1Answer.value === "1") {
            score++;
            answerFeedback += `<p>1. What is the primary purpose of a web application firewall? <br><b>Your answer: ${q1Answer.nextSibling.textContent.trim()}</b> <span style="color: green;">Correct!</span></p>`;
        } else {
            answerFeedback += `<p>1. What is the primary purpose of a web application firewall? <br><b>Your answer: ${q1Answer.nextSibling.textContent.trim()}</b> <span style="color: red;">Incorrect. Correct answer: To prevent unauthorized access to web applications.</span></p>`;
        }
    }

    // Question 2 (multiple correct answers) I was able to test it!
    let q2Score = 0;
    const q2a = document.getElementById('q2a');
    const q2c = document.getElementById('q2c');
    const q2d = document.getElementById('q2d');
    // I had to use If statements for this code 
    if (q2a.checked) q2Score++;
    if (q2c.checked) q2Score++;
    if (q2d.checked) q2Score++;

    if (q2Score === 3) {
        score++;
        answerFeedback += `<p>2. Which of the following are types of attacks that web applications are vulnerable to? <br><b>Your answer: SQL Injection, Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF)</b> <span style="color: green;">Correct!</span></p>`;
    } else {
        answerFeedback += `<p>2. Which of the following are types of attacks that web applications are vulnerable to? <br><b>Your answer: ${
            q2a.checked ? 'SQL Injection, ' : ''
        }${q2c.checked ? 'Cross-Site Scripting (XSS), ' : ''}${q2d.checked ? 'Cross-Site Request Forgery (CSRF)' : ''}</b> <span style="color: red;">Incorrect. Correct answer: SQL Injection, Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF)</span></p>`;
    }

    // Question 3 (fill-in-the-blank) successfuly tested! 
    const q3Answer = document.getElementById('q3').value.trim().toLowerCase();
    if (q3Answer === "authentication and authorization") {
        score++;
        answerFeedback += `<p>3. The process of ensuring that only authenticated and authorized users can access a web application is called ____________. <br><b>Your answer: ${q3Answer}</b> <span style="color: green;">Correct!</span></p>`;
    } else {
        answerFeedback += `<p>3. The process of ensuring that only authenticated and authorized users can access a web application is called ____________. <br><b>Your answer: ${q3Answer}</b> <span style="color: red;">Incorrect. Correct answer: Authentication and Authorization</span></p>`;
    }
// each answer has a feedback per user input as the code demonstrates above
    // Question 4 Succesfuly tested !
    const q4Answer = document.querySelector('input[name="q4"]:checked');
    if (q4Answer) {
        if (q4Answer.value === "1") {
            score++;
            answerFeedback += `<p>4. What is SQL Injection? <br><b>Your answer: ${q4Answer.nextSibling.textContent.trim()}</b> <span style="color: green;">Correct!</span></p>`;
        } else {
            answerFeedback += `<p>4. What is SQL Injection? <br><b>Your answer: ${q4Answer.nextSibling.textContent.trim()}</b> <span style="color: red;">Incorrect. Correct answer: A type of attack that exploits a vulnerability in a web application's database query mechanism.</span></p>`;
        }
    }
// Each answer is carefully examined per answer feedback
    // Question 5 it works well thanks to w3Schools
    const q5Answer = document.querySelector('input[name="q5"]:checked');
    if (q5Answer) {
        if (q5Answer.value === "1") {
            score++;
            answerFeedback += `<p>5. Which of the following is the most secure way to store user passwords in a web application? <br><b>Your answer: ${q5Answer.nextSibling.textContent.trim()}</b> <span style="color: green;">Correct!</span></p>`;
        } else {
            answerFeedback += `<p>5. Which of the following is the most secure way to store user passwords in a web application? <br><b>Your answer: ${q5Answer.nextSibling.textContent.trim()}</b> <span style="color: red;">Incorrect. Correct answer: Storing passwords using bcrypt with salt.</span></p>`;
        }
    }
// This part deals with the full results of the user input
    // Calculate the result this was difficult but it shows calculates 
    if (score === totalQuestions) {
        resultText = `Congratulations! You passed with a perfect score and I am so proud of you of ${score}/${totalQuestions}.`;
        feedbackText = "Excellent work! You're a Web Security pro!";
    } else if (score >= totalQuestions / 2) {
        resultText = `Well done! you are really smart and cool ! You scored ${score}/${totalQuestions}.`;
        feedbackText = "Great job! that is impressive my guy!";
    } else {
        resultText = `Oops! You scored ${score}/${totalQuestions}.`;
        feedbackText = "no problem, keep trying and remember to review the website!";
    }

    // This will display the feedback to the users, it works well 
    document.getElementById('result').innerHTML = `<h2>${resultText}</h2><p>${feedbackText}</p><hr>${answerFeedback}`;
}
// the reset function is very important for user feedback as they restart the quiz 
function resetQuiz() {
    // Reset operation is really good and it should take the user to reset
    document.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(input => input.checked = false);
// the getters are essential for user input
    // Reset text input
    document.getElementById('q3').value = '';
// this function below clears the results which helps with operations 
    // Clear the result
    document.getElementById('result').innerHTML = '';
}
