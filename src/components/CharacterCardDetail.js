import { useParams } from "react-router-dom";
import useCharacterDetail from "../utils/useCharacterDetail";

const CharacterCardDetail = () =>{
    const params = useParams();
    const charInfo = useCharacterDetail(params.charId);

    return (
        <div className="character-container">
            <div className="outer">
                <img src={charInfo?.image} />
                <p>
                    <span>{charInfo?.name}</span>
                    <span>{charInfo?.status} - {charInfo?.species}</span>
                    <span>Gender :- {charInfo?.gender}</span>
                    <span>Location :- {charInfo?.location.name}</span>
                    <span>Episode Numbers:- {charInfo?.episode.length}</span>
                </p>
            </div>
        </div>
    )
}

export default CharacterCardDetail;