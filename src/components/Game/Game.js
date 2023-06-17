import React from "react";

import {sample} from "../../utils";
import {WORDS} from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../Guesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const addGuess = (guess) => {
    setGuesses((guesses) => [...guesses, guess]);
  };

  const hasWon = guesses.includes(answer);
  const hasLost = guesses.length >= 5 && !hasWon;

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      {!hasWon && !hasLost && (
        <GuessInput onSubmit={addGuess} disabled={guesses.length >= 5} />
      )}
      {hasWon && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{guesses.length} guesses</strong>.
          </p>
        </div>
      )}
      {hasLost && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Game;
