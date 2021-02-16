import PlayAgain from './PlayAgain';

import '../styles/LoseBox.css';

const LoseBox = ({ clicked, handleResetClick }) => {
  return (
    <section className='LoseBox'>
      <h3 className='LoseBox-clicked'>
        You've already picked {clicked[0].toUpperCase() + clicked.slice(1)}!
      </h3>
      <PlayAgain handleResetClick={handleResetClick} />
    </section>
  );
};

export default LoseBox;
