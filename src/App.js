import React, { useState } from "react";
import "./styles.css";

var HeadingText = "Welcome";
var headerColor = "blue";
// var username = prompt("what is your name")

var emojiDictionary = {
  "🐕": "Dog",
  "🐈": "Cat",
  "🐪": "Camel",
  "🦄": "Unicorn",
  "🐖": "Pig",
  "🦏": "Rhinocerous",
  "🐍": "Snake",
  "🕷️": "Spider",
  "🐧": "Penguin",
  "🦍": "Gorrila"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function changeHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      setMeaning("Sorry we don't have this in our database");
    } else {
      setMeaning(meaning);
    }
  }

  function clickHandler(emojis) {
    console.log(emojis);
    var output = emojiDictionary[emojis];
    setMeaning(output);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: headerColor }}> {HeadingText} </h1>
      <input onChange={changeHandler}></input>
      <h2>{meaning}</h2>
      <h3> Emojis We Know </h3>

      {emojisWeKnow.map(function (emojis) {
        return (
          <span
            onClick={() => clickHandler(emojis)}
            style={{ cursor: "Pointer", fontSize: "2rem", padding: "0.5rem" }}
          >
            {emojis}
          </span>
        );
      })}
    </div>
  );
}

/**
 * Things to notice
 * class-->className
 * style--> takes an object instead of string("") we don't use - in key of css key value pair for example we use backgroundColor instead of background-color
 VISER-> View, Interact, State in event handler, Render
 */
