const title = document.getElementById('title');
const advice = document.getElementById('advice');
const diceBtn = document.getElementById('dice-btn');

const API_URL = 'https://api.adviceslip.com/advice';

diceBtn.addEventListener('click', fetchQuote);

async function fetchQuote() {
  const response = await fetch(API_URL, { cache: 'no-store' });
  const {
    slip: { id, advice },
  } = await response.json();

  updateTitleId(id);
  updateAdvice(advice);
}

function updateTitleId(id) {
  title.innerText = `ADVICE ${id}`;
}

function updateAdvice(newAdvice) {
  advice.innerHTML = `“${newAdvice}”`;
}
