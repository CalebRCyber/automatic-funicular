<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Quiz: Web Application Security</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <h1>Examination: Web Application Security Assessment</h1>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="topic1.html">Topic 1: API Examination</a></li>
        <li><a href="topic2.html">Topic 2: Firewalls</a></li>
        <li><a href="topic3.html">Topic 3: Secure Dev Practices</a></li>
        <li><a href="quiz.html">Quiz</a></li>
        <li><a href="resources.html">References</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <h2>Quiz - Test Your Knowledge!</h2>

    <form id="quiz-form">
      <!-- Question 1 -->
      <section>
        <fieldset>
          <legend>1. What is the primary purpose of a web application firewall?</legend>
          <label><input type="radio" name="q1" value="0" /> To encrypt user data</label><br />
          <label><input type="radio" name="q1" value="1" id="q1b" /> To prevent unauthorized access to web applications</label><br />
          <label><input type="radio" name="q1" value="0" /> To detect malware in web applications</label><br />
          <label><input type="radio" name="q1" value="0" /> To monitor server performance</label><br />
        </fieldset>
      </section>

      <!-- Question 2 -->
      <section>
        <fieldset>
          <legend>2. Which of the following are types of attacks that web applications are vulnerable to?</legend>
          <label><input type="checkbox" id="q2a" value="1" /> SQL Injection</label><br />
          <label><input type="checkbox" id="q2b" value="0" /> Man-in-the-middle attack</label><br />
          <label><input type="checkbox" id="q2c" value="1" /> Cross-Site Scripting (XSS)</label><br />
          <label><input type="checkbox" id="q2d" value="1" /> Cross-Site Request Forgery (CSRF)</label><br />
        </fieldset>
      </section>

      <!-- Question 3 -->
      <section>
        <fieldset>
          <legend>3. The process of ensuring that only authenticated and authorized users can access a web application is called ____________.</legend>
          <input type="text" id="q3" placeholder="Type your answer here" />
        </fieldset>
      </section>

      <!-- New Question 4 -->
      <section>
        <fieldset>
          <legend>4. Which protocol is recommended for secure communication in web applications?</legend>
          <label><input type="radio" name="q4" value="1" id="q4a" /> HTTPS</label><br />
          <label><input type="radio" name="q4" value="0" /> FTP</label><br />
          <label><input type="radio" name="q4" value="0" /> HTTP</label><br />
          <label><input type="radio" name="q4" value="0" /> Telnet</label><br />
        </fieldset>
      </section>

      <!-- New Question 5 -->
      <section>
        <fieldset>
          <legend>5. What is the main purpose of input validation in web development?</legend>
          <label><input type="radio" name="q5" value="0" /> To store data efficiently</label><br />
          <label><input type="radio" name="q5" value="1" id="q5b" /> To prevent malicious input and attacks</label><br />
          <label><input type="radio" name="q5" value="0" /> To make websites load faster</label><br />
          <label><input type="radio" name="q5" value="0" /> To enhance SEO rankings</label><br />
        </fieldset>
      </section>

      <!-- New Question 6 -->
      <section>
        <fieldset>
          <legend>6. Which of the following is an example of secure development practice?</legend>
          <label><input type="radio" name="q6" value="0" /> Using default passwords</label><br />
          <label><input type="radio" name="q6" value="0" /> Displaying detailed error messages</label><br />
          <label><input type="radio" name="q6" value="1" id="q6c" /> Implementing input sanitization</label><br />
          <label><input type="radio" name="q6" value="0" /> Disabling logs</label><br />
        </fieldset>
      </section>

      <br />
      <button type="button" onclick="checkAnswers()">Submit Quiz</button>
    </form>

    <div id="result"></div>
    <button onclick="resetQuiz()">Restart Quiz</button>
  </main>

  <script src="quiz.js"></script>
</body>
</html>
