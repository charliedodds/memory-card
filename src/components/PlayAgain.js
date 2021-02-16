import '../styles/PlayAgain.css';

const PlayAgain = ({ handleResetClick }) => {
  return (
    <button className='PlayAgain' onClick={handleResetClick}>
      Play again
    </button>
  );
};

export default PlayAgain;
