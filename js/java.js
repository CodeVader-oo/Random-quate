const quotes = [
  "The best way to predict the future is to create it. — Peter Drucker",
  "Do what you can, with what you have, where you are. — Theodore Roosevelt",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
  "Be yourself; everyone else is already taken. — Oscar Wilde",
  "In the middle of every difficulty lies opportunity. — Albert Einstein"
];

let lastIndex = -1;

function getRandomQuote() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === lastIndex && quotes.length > 1);

  lastIndex = randomIndex;
  document.getElementById("quote").textContent = quotes[randomIndex];
}

document.getElementById("newQuote").addEventListener("click", getRandomQuote);
