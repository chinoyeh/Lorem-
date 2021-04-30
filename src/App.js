import React, { useState } from "react";
import { Script } from "./Script";
import "./App.css";
const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const [error, setError] = useState("");
  const handleGenerate = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (!error && count <= 0) {
      amount = 0;
      setError("Please select a number between 1-8");
    }
    if (!error && count > 8) {
      amount = 9;
      setError("Please select a number between 1-8");
      setText([]);
    } else {
      setText(Script.slice(0, amount));
      setError("");
    }
  };
  return (
    <>
      <header>
        <h1>TIRED OF BORING LOREM IPSUM?</h1>
      </header>

      <form>
        <label htmlFor="paragraph">Paragraph: </label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button onClick={handleGenerate}>Generate</button>
      </form>
      <p className="error">{error}</p>
      <article>
        {text.map((texts, index) => {
          return (
            <p className="lorem" key={index}>
              {texts}
            </p>
          );
        })}
      </article>
    </>
  );
};

export default App;
