import phrases from "./assets/quotes.json";
import { useState } from "react";
import getRandomInt from "./utils/getRandomInt";
import "./App.css";

function App() {
  let randomLength = getRandomInt(phrases.length);

  const [randomPhrase, setRandomPhrase] = useState(randomLength);
  const [isSearching, setIsSearching] = useState(false);

  const icons = ["🤪", "🤑", "😶", "🫡", "🤐", "😏", "😴", "😵‍💫", "🥳"];
  const colors = ["black", "white", "blue", "red", "green", "yellow"];

  let randomIcon = getRandomInt(icons.length);
  let randomColor = getRandomInt(colors.length);

  const handleClick = () => {
    setRandomPhrase(randomPhrase + 1);
    setIsSearching(!isSearching);
  };

  return (
    <>
      <div className="quote__card">
        <h2>{phrases[randomLength].quote}</h2>
        <h5>{phrases[randomLength].author}</h5>
      </div>
      <div className="change__button">
        <button onClick={handleClick}>{isSearching ? "💡" : "🔎"}</button>
        <div
          style={{
            backgroundColor: `${colors[randomColor]}`,
            border: `${colors[randomColor]}`,
          }}
          className="random__icon"
        >
          {icons[randomIcon]}
        </div>
      </div>
    </>
  );
}

export default App;
