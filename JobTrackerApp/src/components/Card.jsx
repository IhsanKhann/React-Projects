import '../styles/Card.css';

function Card({ img, title, description }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt="Logo" />
      </div>
      <div className="card-content">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
