import PlayAgain from './PlayAgain';

import '../styles/WinBox.css';

const WinBox = ({ handleResetClick }) => {
  return (
    <section className='WinBox'>
      <h3 className='WinBox-win'>You win!</h3>
      <PlayAgain handleResetClick={handleResetClick} />
      <p className='WinBox-para'>Or maybe it's time to go outside...</p>
    </section>
  );
};

export default WinBox;
