const Header = ({ score, highscore }) => (
  <header className='Header'>
    <h1>Memory Card Game</h1>
    <section className='Header-scores'>
      <h2>Score: {score}</h2>
      <h2>High score: {highscore}</h2>
    </section>
  </header>
);

export default Header;
