import React, { useState } from "react";

function GuessInput({ onSubmit, disabled = false }) {
  const [input, setInput] = useState("");
  const onSubmitHandler = (submitEvent) => {
    submitEvent.preventDefault();
    onSubmit(input);
    setInput("");
  };
  return (
    <form className="guess-input-wrapper" onSubmit={onSubmitHandler}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={disabled}
        id="guess-input"
        type="text"
        pattern={"^.{5}$"}
        value={input}
        onChange={(e) => setInput(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
