import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Orange",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Apple",
  "🍏": "Green apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍓": "Strawberry",
  "🍒": "Cherries",
  "🥝": "Kiwi",
  "🍅": "Tomato",
  "🥥": "Coconut",
  "🥑": "Avocado",
  "🍆": "Eggplant",
  "🥔": "Potato",
  "🥕": "Carrot",
  "🌽": "Corn",
  "🌶️": "Hot pepper",
  "🥦": "Broccoli",
  "🍞": "Bread",
  "🥓": "Bacon",
  "🍔": "Burger",
  "🍟": "Fries",
  "🍕": "Pizza",
  "🍰": "Cake"
};

var emojiList = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    // console.log(event.target.value)
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>
        <span style={{ color: "green" }}>Emoji Dictionary</span>
      </h1>

      <input onChange={emojiInputHandler} />
      <h2>Meaning: {meaning}</h2>
      {emojiList.map(function (item, index) {
        return (
          <span
            onClick={() => emojiClickHandler(item)}
            key={item}
            style={{
              fontSize: "2rem",
              padding: "0.5 rem",
              cursor: "pointer"
            }}
          >
            {" "}
            {item}{" "}
          </span>
        );
      })}
    </div>
  );
}
