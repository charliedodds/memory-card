import React, { useState, useEffect } from 'react';

import Card from './Card';
import WinBox from './WinBox';
import LoseBox from './LoseBox';

import '../styles/GameBoard.css';

const getChar = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const shuffleArr = (arr) => {
  let shuffledArr = [...arr];
  for (let i = shuffledArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // pick random array index and swap values
    [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
  }
  return shuffledArr;
};

const generateRandomCharArray = (firstArr, secondArr) => {
  let array = [getChar(firstArr), getChar(secondArr), getChar(secondArr)];
  while (
    array[0] &&
    array[1] &&
    array[2] &&
    (array[0] === array[1] || array[0] === array[2] || array[1] === array[2])
  ) {
    array = generateRandomCharArray(firstArr, secondArr);
  }
  if (firstArr.indexOf(undefined) < 0 && secondArr.indexOf(undefined) < 0) {
    array = shuffleArr(array);
  }
  return array;
};

const GameBoard = ({ score, setScore, highscore, setHighscore }) => {
  const [allChars, setAllChars] = useState([]);
  const [unpicked, setUnpicked] = useState([]);
  const [displayChars, setDisplayChars] = useState([]);
  const [alreadyClicked, setAlreadyClicked] = useState('');

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => response.json())
      .then((data) =>
        data.results.map((char, idx) => ({
          name: char.name,
          imgURL: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            idx + 1
          }.png`,
        }))
      )
      .then((data) => {
        setAllChars([...data]);
        setUnpicked([...data]);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    setDisplayChars(generateRandomCharArray(unpicked, allChars));
  }, [unpicked]);

  const resetGame = () => {
    if (score > highscore) {
      setHighscore(score);
    }
    setScore(0);
    setUnpicked([...allChars]);
  };

  const handleClick = (e) => {
    const clicked = e.target.closest('section').id;
    if (unpicked.some((char) => char.name === clicked)) {
      setScore(score + 1);
      setUnpicked(unpicked.filter((char) => char.name !== clicked));
    } else {
      setAlreadyClicked(clicked);
      resetGame();
    }
  };

  const handleResetClick = () => {
    resetGame();
    setAlreadyClicked('');
  };

  return (
    <main className='GameBoard'>
      {alreadyClicked ? (
        <LoseBox clicked={alreadyClicked} handleResetClick={handleResetClick} />
      ) : unpicked.length === 0 ? (
        <WinBox handleResetClick={handleResetClick} />
      ) : displayChars[0] === undefined ||
        displayChars[1] === undefined ||
        displayChars[2] === undefined ? (
        <p>Loading...</p>
      ) : (
        displayChars.map((char) => (
          <Card
            key={char.name}
            img={char.imgURL}
            name={char.name}
            handleClick={handleClick}
          />
        ))
      )}
    </main>
  );
};

export default GameBoard;
