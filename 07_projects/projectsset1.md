# Projects related to DOM

## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```Javascript
    console.log("Dushyant")
    const buttons = document.querySelectorAll('.button');
    const body = document.querySelector('body');

    buttons.forEach((button) => {
        console.log(button);
        button.addEventListener('click', (e) => {
            console.log(e);
            console.log(e.target.id);
            const color = e.target.id;

            switch (color) {
            case 'grey':
                body.style.backgroundColor = color;
                break;
            case 'white':
                body.style.backgroundColor = color;
                break;
            case 'blue':
                body.style.backgroundColor = color;
                break;
            case 'yellow':
                body.style.backgroundColor = color;
                break;
            default:
                console.log(' Match not found ');
                break;
            }
        });
    });
```

## Project 2 Solution

```JavaScript
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    console.log(bmi);
    if (bmi < 18.6) {
      results.innerHTML = `<span>Under Weight</span>`;
    } else if (bmi <= 24.9 && bmi >= 18.6) {
      results.innerHTML = `<span>Normal Range</span>`;
    } else {
      results.innerHTML = `<span>Over Weight</span>`;
    }
  }
});
```

## Project 3 Solution

```JavaScript
  const clock = document.querySelector('#clock');
  // const clock = document.getElementById('clock');

  setInterval(() => {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
  }, 1000);
```

## Project 4 Solution

```JavaScript
  let randomNumber = parseInt(Math.random() * 100 + 1);
  const submit = document.querySelector('#subt');
  const userInput = document.querySelector('#guessField');
  const guessSlot = document.querySelector('.guesses');
  const remaining = document.querySelector('.lastResult');
  const lowOrHi = document.querySelector('.lowOrHi');
  const startOver = document.querySelector('.resultParas');

  const p = document.createElement('p');

  let prevGuess = [];
  let numGuess = 1;

  let playGame = true;

  if (playGame) {
    submit.addEventListener('click', function (e) {
      e.preventDefault();
      const guess = parseInt(userInput.value);
      console.log(guess);
      validateGuess(guess);
    });
  }

  function validateGuess(guess) {
    if (isNaN(guess)) {
      alert('Please enter a valid number');
    } else if (guess < 1) {
      alert('Please enter a number greater than 0');
    } else if (guess > 100) {
      alert('Please enter a number less than 100');
    } else {
      prevGuess.push(guess);
      if (numGuess === 11) {
        displayGuess(guess);
        displayMessage(`Game Over. Random Number was ${randomNumber}`);
        endGame();
      } else {
        checkGuess(guess);
        displayGuess(guess);
      }
    }
  }

  function checkGuess(guess) {
    if (randomNumber === guess) {
      displayMessage(`You guessed it right`);
      endGame();
    } else if (randomNumber > guess) {
      displayMessage(`Number is TOOO low`);
    } else if (randomNumber < guess) {
      displayMessage(`Number is TOOO high`);
    }
  }

  function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess},  `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
  }

  function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
  }

  function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id='newGame'> Start New Game </h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
  }

  function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNumber = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${11 - numGuess}`;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);
      playGame = true;
    });
  }

```
