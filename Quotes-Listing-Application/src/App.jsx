import { useEffect, useState } from "react"
import QuoteCard from "./components/QuoteCard.jsx";


const App = () => {

  const [quotes, setQuotes] = useState([]);

  const getQuotes = async () => {
    try {
      const response  = await fetch (
           "https://api.freeapi.app/api/v1/public/quotes?page=1&limit=10"
      );
     const result = await response.json();

      console.log(result);

      if (result.success) {
        setQuotes(result.data.data);
      }

    } catch (error) {
      console.log(error);
    }
  };

  // useEffect( () => {
  //   getQuotes();
  // }, []);

  useEffect(() => {
  async function fetchData() {
    await getQuotes();
  }

  fetchData();
}, []);

  return (
    <div className="container">
      <h1> Quotes App</h1>
      <div className="quotes">
        {quotes.map((quote, index) => (
          <QuoteCard key = {quote._id || index}
           quote={quote} />
        ))}
      </div>
    </div>
  )
}

export default App