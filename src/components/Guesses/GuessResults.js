import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function GuessResults({ guesses, answer }) {
  const rows = range(5).map(() => undefined);
  return (
    <div className="guess-results">
      {rows.map((_, index) => (
        <Guess
          key={index}
          guess={guesses[index]}
          statusList={checkGuess(guesses[index], answer)}
        />
      ))}
    </div>
  );
}

export default GuessResults;
