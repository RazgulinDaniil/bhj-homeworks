class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = document.querySelector('.word');
    this.winsElement = document.querySelector('.status__wins');
    this.lossElement = document.querySelector('.status__loss');
    this.timer = document.querySelector('.timer');
    this.timerID = null;

    this.reset();
    this.eventRegistration();
  }

  reset() {
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
    clearInterval(this.timerID);
    this.setNewWord();
  }
  
  eventRegistration() {
    const onKey = (e) => {
      if(e.key === "Shift" || e.key === "Alt") {
        return;
      }
      e.key.toLowerCase() === this.currentSymbol.textContent.toLowerCase()? this.success() : this.fail();
    };
    document.addEventListener('keyup', onKey);
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if(this.currentSymbol !== null) {
      return;
    }
    if(++this.winsElement.textContent === 10) {
      alert("Победа!");
      this.reset();
    }
    clearInterval(this.timerID);
    this.setNewWord();
  }

  fail() {
    if(++this.lossElement.textContent === 5) {
      alert('Проигрыш!');
      this.reset();
    }
    clearInterval(this.timerID);
    this.setNewWord();
  }

  setTimer(word) {
    let i = word.length;
    this.timer.textContent = i;
    this.timerID = setInterval(()=> {
      this.timer.textContent--;
      if(this.timer.textContent < 1) {
        this.fail();
      }
    }, 1000);
  }

  setNewWord() {
    const word = this.getWord();
    this.setTimer(word);
    this.parseWord(word);
  }

  getWord() {
    const words = [
      'bob',
      'awesome',
      'netology',
      'hello',
      'kitty',
      'rock',
      'youtube',
      'popcorn',
      'пицца',
      'love',
      'javascript',
      'петя'
    ],
    index = Math.floor(Math.random() * words.length);
    return words[index];
  }

  parseWord(word) {
    const html = [...word]
    .map(
    (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
    .join('');
    this.wordElement.innerHTML = html;
    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}
new Game(document.getElementById('game'))