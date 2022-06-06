const quotes = [
  {
    quote: "The real world is much smaller than the imaginary.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "The policy of being too cautious is the greatest risk of all.",
    author: "awaharlal Nehru",
  },
  {
    quote:
      "But thus do I counsel you, my friends: distrust all in whom the impulse to punish is powerful!",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "Lord, grant that I may always desire more than I accomplish.",
    author: "Michelangelo",
  },
  {
    quote: "If you don't risk anything you risk even more.",
    author: "Erica Jong",
  },
  {
    quote: "Blaze with the fire that is never extinguished.",
    author: "Luisa Sigea",
  },
  {
    quote: "Everything that one thinks about a lot becomes problematic.",
    author: "Friedrich Nietzsche",
  },
  {
    quote:
      "All truths, not merely ideas, but truthful faces, truthful pictures or songs, are highly beautiful.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "It is our choices...that show what we truly are, far more than our abilities.",
    author: "J. K. Rowling",
  },
  {
    quote: "There are no facts, only interpretations.",
    author: "Friedrich Nietzsche",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
