document.addEventListener('DOMContentLoaded', function () {
  const randomButton = document.getElementById('randomButton');

  randomButton.addEventListener('click', randomizeAnswers);

  function randomizeAnswers() {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
      const inputs = question.querySelectorAll('input[type="radio"]');
      const randomIndex = Math.floor(Math.random() * inputs.length);

      inputs.forEach((input, index) => {
        if (index === randomIndex) {
          input.checked = true;
        } else {
          input.checked = false;
        }
      });
    });
  }
}
);
