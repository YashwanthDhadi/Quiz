let questions = [
  { question: "2 + 2 = ?", options: ["3", "4", "5"], answer: "4" },
  { question: "Capital of India?", options: ["Delhi", "Mumbai", "Kolkata"], answer: "Delhi" },
  { question: "Color of sky?", options: ["Green", "Blue", "Red"], answer: "Blue" },
  { question: "5 * 2 = ?", options: ["10", "15", "5"], answer: "10" },
  { question: "Largest planet?", options: ["Earth", "Jupiter", "Mars"], answer: "Jupiter" }

  
];

let current = 0;
let score = 0;

function startQuiz() {
  document.getElementById('welcome-screen').style.display = 'none';
  document.getElementById('quiz-screen').style.display = 'flex';
  showQuestion();
}

function showQuestion() {
  const q = questions[current];
  const container = document.getElementById('quiz-container');
  container.innerHTML = `<h2>Q${current + 1}: ${q.question}</h2>` +
    q.options.map(opt =>
      `<button onclick="checkAnswer(this, '${opt}')">${opt}</button>`
    ).join("<br>");
}

function checkAnswer(button, selected) {
  const correct = questions[current].answer;
  const buttons = document.querySelectorAll('#quiz-container button');

  buttons.forEach(btn => btn.disabled = true);

  if (selected === correct) {
    score++;
    button.style.backgroundColor = 'green';
  } else {
    button.style.backgroundColor = 'red';
    buttons.forEach(btn => {
      if (btn.innerText === correct) btn.style.backgroundColor = 'green';
    });
  }
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  const container = document.getElementById('quiz-container');
  container.innerHTML = `<h2>🎉 Quiz Completed!</h2>
    <p>Your Score: <strong>${score}/${questions.length}</strong></p>
    <button onclick="restartQuiz()">Restart 🔁</button>`;
  document.getElementById('next-btn').style.display = 'none';
}

function restartQuiz() {
  current = 0;
  score = 0;
  document.getElementById('next-btn').style.display = 'inline-block';
  showQuestion();
}
