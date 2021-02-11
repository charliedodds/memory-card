import '../styles/Instructions.css';

const Instructions = () => (
  <footer className='Instructions'>
    <h2 className='Instructions-title'>How to play</h2>
    <p className='Instructions-para'>
      Click a card that you haven't already clicked to score a point.
    </p>
    <p className='Instructions-para'>
      If you click a card you've already clicked - it's game over!
    </p>
  </footer>
);

export default Instructions;
