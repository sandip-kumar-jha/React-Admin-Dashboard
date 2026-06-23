const Card = ({ title, value, icon }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h4>{title}</h4>
        <span>{icon}</span>
      </div>

      <h2>{value}</h2>
    </div>
  );
};

export default Card;