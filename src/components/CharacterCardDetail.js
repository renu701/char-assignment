import { useParams } from "react-router-dom";
import useCharacterDetail from "../utils/useCharacterDetail";
import { Link } from "react-router-dom";

const CharacterCardDetail = () => {
  const params = useParams();
  const charInfo = useCharacterDetail(params.charId);

  return (
    <div>
      <div className="button-container">
        <Link to="/">
          <button className="btn">Back to List</button>
        </Link>
      </div>

      <div className="character-container">
        <div className="outer">
          <img src={charInfo?.image} />
          <p>
            <span>{charInfo?.name}</span>
            <span>
              {charInfo?.status} - {charInfo?.species}
            </span>
            <span>Gender :- {charInfo?.gender}</span>
            <span>Location :- {charInfo?.location.name}</span>
            <span>Episode Numbers:- {charInfo?.episode.length}</span>
            <span className="location-detail">
              <span className="title">Last known location:</span>
              <span className="value">{charInfo?.location?.name}</span>
            </span>
            <span className="seen-detail">
              <span className="title">First seen in:</span>
              <span className="value">{charInfo?.origin?.name}</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCardDetail;
