// Quiz App Logic with Categories
let username = "";
let selectedCategory = "";
let current = 0;
let score = 0;
let currentQuestions = [];

function goToCategoryScreen() {
  const input = document.getElementById("username");
  if (input.value.trim() === "") {
    alert("Please enter your name!");
    return;
  }
  username = input.value.trim();
  document.getElementById("name-screen").style.display = "none";
  document.getElementById("category-screen").style.display = "block";
}

function startCategory(cat) {
  selectedCategory = cat;
  currentQuestions = questions[cat];
  current = 0;
  score = 0;
  document.getElementById("category-screen").style.display = "none";
  document.getElementById("quiz-screen").style.display = "block";
  showQuestion();
}

function showQuestion() {
  const q = currentQuestions[current];
  const container = document.getElementById("quiz-container");

  let content = `<h2>Q${current + 1}: ${q.question}</h2>`;
  if (q.image) {
    content += `<img class='logo-img' src="${q.image}" alt="Question Image">`;
  }
  content += q.options.map(opt => `<button onclick=\"checkAnswer(this, '${opt}')\">${opt}</button>`).join("<br>");
  container.innerHTML = content;
}

function checkAnswer(button, selected) {
  const correct = currentQuestions[current].answer;
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
  if (current < currentQuestions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  const container = document.getElementById('quiz-container');
  const percentage = Math.round((score / currentQuestions.length) * 100);
  let emoji = "😐";
  if (percentage === 100) emoji = "🏆";
  else if (percentage >= 80) emoji = "🎉";
  else if (percentage >= 60) emoji = "🙂";
  else emoji = "😬";

  container.innerHTML = `
    <div class="result-card">
      <h2>${emoji} Quiz Completed!</h2>
      <p class="result-name">Well done, <strong>${username}</strong>!</p>
      <div class="score-circle">
        <span>${score}/${currentQuestions.length}</span>
      </div>
      <p class="percentage">You got <strong>${percentage}%</strong> right.</p>
      <button onclick="restartQuiz()">🔁 Try Another</button>
    </div>`;

  document.getElementById("next-btn").style.display = "none";
}

function restartQuiz() {
  document.getElementById("quiz-screen").style.display = "none";
  document.getElementById("category-screen").style.display = "block";
  document.getElementById("next-btn").style.display = "inline-block";
}

// Questions Data
const questions = {
  movies: [
    { question: "Which classic Telugu movie featured the first-ever visual effect of a character flying in the air and changing forms?", options: ["Pathala Bhairavi", "Jagadeka Veerudu Atiloka Sundari", "Maya Bazaar", "Anji"], answer: "Maya Bazaar" },
    { question: "Which movie has a scene where the hero sets a goal to make 100 crores in 6 months, and the journey becomes emotional?", options: ["Businessman", "Maharshi", "Dookudu", "Temper"], answer: "Temper" },
    { question: "Which Indian film gained massive global recognition?", options: ["Baahubali 2", "RRR", "Pushpa 2", "Dangal"], answer: "RRR" },
    { question: "Who is the first Indian hero to enter the 1000 crore club with a single film?", options: ["Shah Rukh Khan", "Yash", "Prabhas", "Aamir Khan"], answer: "Prabhas" },
    { question: "In which movie does a powerful police officer go undercover as a drunkard?", options: ["Pokiri", "Vikramarkudu", "Gabbar Singh", "Krack"], answer: "Vikramarkudu" },
    { question: "Who among the following started her Bollywood career at the youngest age in recent generation?", options: ["Alia Bhatt", "Ananya Panday", "Sara Ali Khan", "Kriti Sanon"], answer: "Alia Bhatt" },
    { question: "Which hero has never acted in a double role in his entire career (as of now)?", options: ["Mahesh Babu", "Jr. NTR", "Ram Charan", "Chiranjeevi"], answer: "Mahesh Babu" },
    { question: "Which Bollywood movie holds the highest IMDb rating?", options: ["Gully Boy", "3 Idiots", "Shershaah", "Dangal"], answer: "Shershaah" },
    { question: "Which Indian music video has the highest views on YouTube?", options: ["Vaaste", "Lehanga", "Hanuman Chalisa", "Rowdy Baby"], answer: "Hanuman Chalisa" },
    { question: "Which non-English series became a global hit and is Netflix’s most-watched of all time?", options: ["Money Heist", "Dark", "Squid Game", "Stranger Things"], answer: "Squid Game" }
  ],
  logos: [
    { question: "Which brand uses this logo?", image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", options: ["Samsung", "Apple", "Nokia", "HTC"], answer: "Apple" },
    { question: "Which company owns this logo?", image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", options: ["Apple", "Google", "Microsoft", "Meta"], answer: "Microsoft" },
    { question: "Guess the brand from the logo.", image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", options: ["Flipkart", "Amazon", "eBay", "Snapdeal"], answer: "Amazon" },
    { question: "This logo belongs to?", image: "https://upload.wikimedia.org/wikipedia/commons/5/51/YouTube_dark_icon_%282017%29.svg", options: ["YouTube", "Vimeo", "TikTok", "Netflix"], answer: "YouTube" },
    { question: "Which social media app is this?", image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Instagram.svg", options: ["Facebook", "Instagram", "Snapchat", "Twitter"], answer: "Instagram" },
    { question: "Identify the logo shown.", image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Spotify_logo_with_text.svg", options: ["Wynk", "Spotify", "JioSaavn", "Amazon Music"], answer: "Spotify" },
    { question: "This logo is of?", image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", options: ["Bing", "Yahoo", "Google", "Opera"], answer: "Google" },
    { question: "Which brand uses this icon?", image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Twitter_new_X_logo.png", options: ["Facebook", "X (Twitter)", "Instagram", "Threads"], answer: "X (Twitter)" },
    { question: "Name the car company with this logo.", image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Tesla_Motors.svg", options: ["Tesla", "Tata", "Toyota", "Ford"], answer: "Tesla" },
    { question: "Which messenger app logo is shown?", image: "https://upload.wikimedia.org/wikipedia/commons/8/82/WhatsApp_icon.svg", options: ["Telegram", "WhatsApp", "Signal", "Messenger"], answer: "WhatsApp" }
  ],
  sports: [
    { question: "Which country won the FIFA World Cup in 2022?", options: ["France", "Argentina", "Brazil", "Germany"], answer: "Argentina" },
    { question: "In cricket, how many players are there in a team?", options: ["9", "10", "11", "12"], answer: "11" },
    { question: "Who has the most Olympic gold medals?", options: ["Usain Bolt", "Michael Phelps", "Carl Lewis", "Simone Biles"], answer: "Michael Phelps" },
    { question: "Which sport uses a puck?", options: ["Hockey", "Tennis", "Golf", "Baseball"], answer: "Hockey" },
    { question: "Where did the Olympics originate?", options: ["Italy", "Greece", "France", "USA"], answer: "Greece" },
    { question: "Which sport is known as the ‘king of sports’?", options: ["Football", "Cricket", "Basketball", "Tennis"], answer: "Football" },
    { question: "Who is known as the ‘God of Cricket’ in India?", options: ["Virat Kohli", "MS Dhoni", "Sachin Tendulkar", "Rohit Sharma"], answer: "Sachin Tendulkar" },
    { question: "Which country hosts Wimbledon?", options: ["Australia", "France", "UK", "USA"], answer: "UK" },
    { question: "What is the national sport of Japan?", options: ["Karate", "Sumo Wrestling", "Judo", "Kendo"], answer: "Sumo Wrestling" },
    { question: "How many rings are there on the Olympic flag?", options: ["4", "5", "6", "7"], answer: "5" }
  ],
  aptitude: [
    { question: "What is the next number in the series: 2, 4, 8, 16, ?", options: ["20", "24", "30", "32"], answer: "32" },
    { question: "If 5x = 20, what is x?", options: ["2", "3", "4", "5"], answer: "4" },
    { question: "What is 15% of 200?", options: ["25", "30", "35", "40"], answer: "30" },
    { question: "Which number is the smallest: 0.2, 0.02, 0.222, 0.12?", options: ["0.2", "0.02", "0.222", "0.12"], answer: "0.02" },
    { question: "A train runs 60km in 1 hour. How far in 30 minutes?", options: ["20km", "25km", "30km", "40km"], answer: "30km" },
    { question: "What is the square root of 144?", options: ["10", "12", "14", "16"], answer: "12" },
    { question: "Which shape has 6 faces?", options: ["Cube", "Sphere", "Cone", "Pyramid"], answer: "Cube" },
    { question: "Solve: 8 × 9 - 6 ÷ 2", options: ["70", "72", "75", "78"], answer: "72" },
    { question: "What is the value of π (approx)?", options: ["3.14", "2.14", "4.13", "3.41"], answer: "3.14" },
    { question: "If 3 pens cost ₹30, what is the cost of 1 pen?", options: ["₹5", "₹10", "₹15", "₹20"], answer: "₹10" }
  ],
  tech: [
    { question: "What does CPU stand for?", options: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Central Processor Utility"], answer: "Central Processing Unit" },
    { question: "Which language is used for web apps?", options: ["PHP", "Python", "JavaScript", "All of the above"], answer: "All of the above" },
    { question: "HTML is used to __?", options: ["Style pages", "Structure content", "Store data", "Run logic"], answer: "Structure content" },
    { question: "What does RAM stand for?", options: ["Random Access Memory", "Read And Modify", "Run Access Mode", "Random Application Memory"], answer: "Random Access Memory" },
    { question: "Which of these is a database?", options: ["MongoDB", "HTML", "CSS", "React"], answer: "MongoDB" },
    { question: "Who invented the World Wide Web?", options: ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Elon Musk"], answer: "Tim Berners-Lee" },
    { question: "Which of the following is a front-end library?", options: ["Node.js", "Django", "React", "MongoDB"], answer: "React" },
    { question: "Which company created the iPhone?", options: ["Samsung", "Microsoft", "Apple", "Google"], answer: "Apple" },
    { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Syntax", "Coded Style Sheets"], answer: "Cascading Style Sheets" },
    { question: "Which tag is used for inserting a line break in HTML?", options: ["<break>", "<lb>", "<br>", "<line>"], answer: "<br>" }
  ],
  history: [
    { question: "Who was the first Prime Minister of India?", options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Sardar Patel"], answer: "Jawaharlal Nehru" },
    { question: "When did India gain independence?", options: ["1945", "1947", "1950", "1952"], answer: "1947" },
    { question: "Who built the Taj Mahal?", options: ["Akbar", "Shah Jahan", "Aurangzeb", "Babur"], answer: "Shah Jahan" },
    { question: "Which leader is called the ‘Father of the Nation’?", options: ["Nehru", "Gandhi", "Ambedkar", "Tilak"], answer: "Gandhi" },
    { question: "What is the capital of ancient Maurya empire?", options: ["Pataliputra", "Delhi", "Ujjain", "Kalinga"], answer: "Pataliputra" },
    { question: "Which movement did Gandhi start in 1942?", options: ["Dandi March", "Quit India Movement", "Non-Cooperation", "Civil Disobedience"], answer: "Quit India Movement" },
    { question: "Who was the first woman ruler of India?", options: ["Rani Lakshmi Bai", "Indira Gandhi", "Raziyya Sultana", "Jhalkari Bai"], answer: "Raziyya Sultana" },
    { question: "Who wrote the Indian National Anthem?", options: ["Rabindranath Tagore", "Bankim Chandra", "Sarojini Naidu", "Aurobindo Ghosh"], answer: "Rabindranath Tagore" },
    { question: "Which empire was ruled by Ashoka?", options: ["Mughal", "Maurya", "Gupta", "Delhi Sultanate"], answer: "Maurya" },
    { question: "What was the symbol of Gandhi’s economic movement?", options: ["Charkha", "Plough", "Cotton", "Wheel"], answer: "Charkha" }
  ],
  facts: [
    { question: "Which animal can sleep for three years?", options: ["Frog", "Snail", "Bear", "Turtle"], answer: "Snail" },
    { question: "How many hearts does an octopus have?", options: ["1", "2", "3", "4"], answer: "3" },
    { question: "What is the tallest mountain on Earth?", options: ["K2", "Everest", "Kilimanjaro", "Makalu"], answer: "Everest" },
    { question: "Which planet has the most moons?", options: ["Mars", "Earth", "Saturn", "Jupiter"], answer: "Saturn" },
    { question: "What’s the smallest country in the world?", options: ["Monaco", "Vatican City", "Nauru", "San Marino"], answer: "Vatican City" },
    { question: "Which bird is known to mimic human speech?", options: ["Eagle", "Parrot", "Crow", "Sparrow"], answer: "Parrot" },
    { question: "How many bones are in the human body?", options: ["206", "210", "205", "212"], answer: "206" },
    { question: "Which is the fastest land animal?", options: ["Tiger", "Cheetah", "Lion", "Horse"], answer: "Cheetah" },
    { question: "Which element has the chemical symbol ‘O’?", options: ["Osmium", "Oxygen", "Oxide", "Ozone"], answer: "Oxygen" },
    { question: "What color are aircraft black boxes?", options: ["Black", "Orange", "Red", "Yellow"], answer: "Orange" }
  ],
  nature: [
    { question: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Carbon Dioxide" },
    { question: "What is the main source of energy for the Earth?", options: ["Moon", "Stars", "Sun", "Wind"], answer: "Sun" },
    { question: "Which is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific" },
    { question: "Which layer protects Earth from harmful sun rays?", options: ["Ozone", "Hydrosphere", "Magnetosphere", "Troposphere"], answer: "Ozone" },
    { question: "Which part of the plant conducts photosynthesis?", options: ["Root", "Stem", "Flower", "Leaf"], answer: "Leaf" },
    { question: "Which animal is known as the ‘ship of the desert’?", options: ["Horse", "Camel", "Elephant", "Donkey"], answer: "Camel" },
    { question: "Which is the longest river in the world?", options: ["Amazon", "Ganges", "Nile", "Yangtze"], answer: "Nile" },
    { question: "Which natural resource is used to make glass?", options: ["Clay", "Sand", "Salt", "Chalk"], answer: "Sand" },
    { question: "How many legs does a butterfly have?", options: ["4", "6", "8", "10"], answer: "6" },
    { question: "Which tree gives us acorns?", options: ["Maple", "Oak", "Pine", "Cedar"], answer: "Oak" }
  ]
};
