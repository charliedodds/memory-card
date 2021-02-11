import '../styles/Header.css';

const Header = ({ score, highscore }) => (
  <header className='Header'>
    <h1 className='Header-title'>Memory Card Game</h1>
    <section className='Header-scores'>
      <h2 className='Header-score'>Score: {score}</h2>
      <h2 className='Header-score'>High score: {highscore}</h2>
    </section>
  </header>
);

export default Header;
