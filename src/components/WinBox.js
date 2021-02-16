import '../styles/WinBox.css';

const WinBox = ({ handleResetClick }) => {
  return (
    <section className='WinBox'>
      <h3 className='WinBox-win'>You win!</h3>
      <button className='WinBox-btn' onClick={handleResetClick}>
        Play again
      </button>
      <p className='WinBox-para'>Or maybe it's time to go outside...</p>
    </section>
  );
};

export default WinBox;
