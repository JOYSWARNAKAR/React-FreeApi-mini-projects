import { useEffect, useState } from "react";

const App = () => {
  const [cat, setCat] = useState(null);

  async function getCat() {
    try {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/public/cats/cat/random"
      );

      const result = await response.json();

      console.log(result);

      if (result.success) {
        setCat(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCat();
  }, []);

  return (
    <div className="container">
      <h1>🐱 Random Cat Viewer</h1>

      <button onClick={getCat}>
        New Cat
      </button>

      {cat && (
        <div className="card">
          <img
            src={cat.image}
            alt={cat.name}
          />
        </div>
      )}
    </div>
  );
};

export default App;