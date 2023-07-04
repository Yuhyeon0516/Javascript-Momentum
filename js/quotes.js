const quotes = [
  {
    quote:
      "My philosophy is that not only are you responsible for your life, but doing the best at this moment puts you in the best place for the next moment.",
    author: "Oprah Winfrey",
  },
  {
    quote: "Our greatest glory is not in never falling, but in rising every time we fall.",
    author: "Confucius",
  },
  {
    quote: "Those who dream by day are cognizant of many things which escape those who dream only by night.",
    author: "Edgar Allan Poe",
  },
  {
    quote: "To accomplish great things, we must dream as well as act.",
    author: "Anatole France",
  },
  {
    quote: "Risk comes from not knowing what you're doing.",
    author: "Warren Buffett",
  },
  {
    quote:
      "Obstacles don't have to stop you. If you run into a wall, don't turn around and give up. Figure out how to climb it, go through it, or work around it.",
    author: "Michael Jordan",
  },
  {
    quote: "He who despises himself, respects himself as one who despises.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "I like to see a man proud of the place in which he lives. I like to see a man live so that his place will be proud of him.",
    author: "Abraham Lincoln",
  },
  {
    quote: "We must use time as a tool, not as a crutch.",
    author: "John F. Kennedy",
  },
  {
    quote: "Why be a man when you can be a success?",
    author: "Bertolt Brecht",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
