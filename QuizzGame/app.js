const quizConainer = document.getElementById('quiz');
const resultContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz() {
  const output = [];

  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answers = [];

    for (const letter in currentQuestion.answers) {
      if (
        Object.prototype.hasOwnProperty.call(currentQuestion.answers, letter)
      ) {
        answers.push(`<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter}: 
              ${currentQuestion.answers[letter]}
          </label>`);
      }
    }
    output.push(`
     <div class="question">${currentQuestion.question}</div>
     <div class="answers">${answers.join('')}</div>
    `);
  });
  quizConainer.innerHTML = output.join('');
}

function showResults() {
  const answerContainers = quizConainer.querySelectorAll('.answers');
  console.log(answerContainers);

  let numCorrect = 0;

  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    console.log(answerContainer, selector, userAnswer);

    if (userAnswer === currentQuestion.correctAnswer) {
      numCorrect++;
      answerContainers[questionNumber].style.color = 'lightgreen';
    } else {
      answerContainers[questionNumber].style.color = 'red';
    }
  });
}

buildQuiz();

submitButton.addEventListener('click', showResults);
