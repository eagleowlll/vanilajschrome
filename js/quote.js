const quotes = [
  {
    quote:
      "Your beginnings will seem humble, so prosperous will your future be",
    author: "Book of Job",
  },

  {
    quote: "Superbio in proelio",
    author: "Manchester City",
  },

  {
    quote: "Seize the day",
    author: "chris",
  },

  {
    quote: "Life is for one generation; a good name is forever",
    author: "KDB",
  },

  {
    quote: "Drill Baby Drill",
    author: "TRUMP",
  },

  {
    quote: "You're Fired",
    author: "Elon Musk",
  },
  {
    quote: "AMERICA Is Back",
    author: "TRUMP",
  },

  {
    quote: "Mars",
    author: "Elon Musk",
  },

  {
    quote: "Make America Great Again",
    author: "Trump",
  },

  {
    quote: "Drill Baby Drill",
    author: "TRUMP",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
