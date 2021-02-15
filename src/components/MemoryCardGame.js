import React, { useState } from 'react';

import Header from './Header';
import GameBoard from './GameBoard';
import Instructions from './Instructions';

const MemoryCardGame = () => {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  return (
    <>
      <Header score={score} highscore={highscore} />
      <GameBoard
        score={score}
        setScore={setScore}
        highscore={highscore}
        setHighscore={setHighscore}
      />
      <Instructions />
    </>
  );
};

export default MemoryCardGame;
