import '../styles/Card.css';

const Card = ({ name, img, handleClick }) => {
  return (
    <section className='Card' onClick={handleClick} id={name}>
      <img className='Card-img' src={img} alt={name} />
      <h2 className='Card-name'>{name[0].toUpperCase() + name.slice(1)}</h2>
    </section>
  );
};

export default Card;
