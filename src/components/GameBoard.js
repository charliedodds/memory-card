import React, { useState, useEffect } from 'react';

import Card from './Card';

import '../styles/GameBoard.css';

const getChar = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const generateRandomCharArray = (firstArr, secondArr) => {
  let array = [getChar(firstArr), getChar(secondArr), getChar(secondArr)];
  while (
    array[0] &&
    array[1] &&
    array[2] &&
    (array[0] === array[1] || array[0] === array[2] || array[1] === array[2])
  ) {
    console.log('DUPLICATION');
    console.log(array);
    array = generateRandomCharArray(firstArr, secondArr);
  }
  return array;
};

const GameBoard = ({ score, setScore, highscore, setHighscore }) => {
  const [allChars, setAllChars] = useState([]);
  const [unpicked, setUnpicked] = useState([]);
  const [displayChars, setDisplayChars] = useState([]);

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
    console.log('end of mount');
  }, []);

  useEffect(() => {
    setDisplayChars(generateRandomCharArray(unpicked, allChars));
    console.log(unpicked);
  }, [unpicked]);

  // unpicked character array (UCA)
  // all characters array (ACA)
  // select 1 from UCA
  // select 2 from ACA
  // if any picked from ACA are duplicates, repeat pick from ACA
  // create cards from selected characters
  // on card click =>
  //   if clicked NOT in UCA => GAMEOVER (reset score, if score > highscore, highscore = score)
  //   else remove clicked from UCA
  //        score++
  //        repick 3 characters

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
      console.log(`${clicked} has been clicked before!`);
      resetGame();
    }
    // if clicked is in unpicked
    //    score++
    //    filter unpicked to remove clicked
    // else gameover
  };

  return (
    <main className='GameBoard'>
      {displayChars[2] === undefined ? (
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
