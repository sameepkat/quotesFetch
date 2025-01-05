import * as dotenv from 'dotenv';
dotenv.config();

interface Quote {
  q: string,
  a: string,
  c?: number,
  h?: string,
}

(async function () {
  try {
    const api = process.env.API_URL;

    if (!api) {
      throw new Error("API_URL is not defined in the environment variables");
    }

    const result = await fetch(api);

    if (!result.ok) {
      throw new Error(`Failed to fetch data: ${result.status} ${result.statusText}`);
    }
    const response: Quote[] = await result.json();

    if (!Array.isArray(response) || response.length === 0) {
      throw new Error("The response is not a valid array or is empty");
    }

    const randomNo: number = Math.floor(Math.random() * response.length);

    const quoteAndAuthor: Quote = {
      q: response[randomNo]['q'],
      a: response[randomNo]['a'],
    }

    console.log(`
    Quote: ${quoteAndAuthor.q}\n
    -${quoteAndAuthor.a}
`);
  } catch (error: unknown) {
    console.error("Error: ", error);
  }
})();


