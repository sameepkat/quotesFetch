require('dotenv').config();
const api = process.env.API_URL;

const fetchQuote = async () => {
  const result = await fetch(api);
  const response = await result.json();
  const randomNo = Math.floor(Math.random() * 128);
  const quote = `quote: "${response[randomNo]['quote']}"`;
  const author = `author: ${response[randomNo]['source']}`;
  console.log(quote);
  console.log(author);
}

fetchQuote();

