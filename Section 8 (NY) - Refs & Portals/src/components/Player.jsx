import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState("");

  /*
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (event) => {
    setSubmitted(false);
    setEnteredPlayerName(event.target.value);
  };*/

  const handleClick = () => {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  };

  return (
    <section id="player">
      <h2>{enteredPlayerName ?? "Welcome unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
