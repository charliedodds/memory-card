const GameBoard = ({ setScore, setHighscore }) => {
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
  return <main className='GameBoard'></main>;
};

export default GameBoard;
