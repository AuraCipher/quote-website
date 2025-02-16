const quotes = [
    "Believe you can and you're halfway there.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "Do what you can, with what you have, where you are.",
    "The secret of getting ahead is getting started."
];

function getQuote() {
    const today = new Date();
    const index = today.getDate() % quotes.length;
    document.getElementById("quote").innerText = quotes[index];
}

getQuote();