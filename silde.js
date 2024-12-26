
let currentQuoteIndex = 0;
let quotes = document.querySelectorAll('.quote');
let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');

function Quote(index) {
    quotes.forEach((quote, i) => {
        quote.classList.toggle('active', i === index);
    });
}

prevBtn.addEventListener('click', () => {
    currentQuoteIndex = (currentQuoteIndex - 1 + quotes.length) % quotes.length;
    Quote(currentQuoteIndex);
});

nextBtn.addEventListener('click', () => {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    Quote(currentQuoteIndex);
});

Quote(currentQuoteIndex);