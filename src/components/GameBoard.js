import React, { useState, useEffect } from 'react';

import '../styles/GameBoard.css';

const getChar = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const GameBoard = ({ setScore, setHighscore }) => {
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
    setDisplayChars([getChar(unpicked), getChar(allChars), getChar(allChars)]);
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

  return (
    <main className='GameBoard'>
      {displayChars[2] === undefined ? (
        <p>Loading...</p>
      ) : (
        displayChars.map((char) => (
          <div key={char.name}>
            <img src={char.imgURL} alt={char.name} />
            <p>{char.name}</p>
          </div>
        ))
      )}
    </main>
  );
};

export default GameBoard;
