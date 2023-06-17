import React from "react";
import { range } from "../../utils";

function Guess({ guess, statusList }) {
  const placeholder = range(5).map(() => undefined);
  const cells = guess != null && guess.length ? guess : placeholder;
  return (
    <p className="guess">
      <span className={getClassName(cells[0])}>{cells[0]}</span>
      <span className={getClassName(cells[1])}>{cells[1]}</span>
      <span className={getClassName(cells[2])}>{cells[2]}</span>
      <span className={getClassName(cells[3])}>{cells[3]}</span>
      <span className={getClassName(cells[4])}>{cells[4]}</span>
    </p>
  );

  function getClassName(char) {
    if (char === undefined) {
      return "cell";
    }
    const status = statusList.find((item) => item.letter === char).status;
    return `cell ${status}`;
  }
}

export default Guess;
