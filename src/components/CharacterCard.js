const CharacterCard = (charObj) => {
  const data = charObj?.charObj;
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-first-section">
          <img src={data.image} alt="image" />
          <div className="name-detail">
            <h1>{data.name}</h1>
            <div className="name-status">
              {data.status} - {data.species}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CharacterCard;
