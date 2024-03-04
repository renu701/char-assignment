import { Link } from "react-router-dom";

const CharacterCard = (charObj) =>{
    console.log("asdfg",charObj);
    const data = charObj?.charObj;
    return(
        <div className="card-container">
            <div className="card">
                <div className="card-first-section">
                    <img src={data.image} alt="image" />
                </div>
                <div className="card-second-section">
                    <div className="info-detail">
                        <div className="name-detail">
                        <Link key={data.id} to={"/character/" + data.id}><h1>{data.name}</h1></Link>
                            <div className="name-status">{data.species}</div>
                        </div>
                        <div className="location-detail">
                            <div className="title">Last known location:</div>
                            <div className="value">{data.location.name}</div>
                        </div>
                        <div className="seen-detail">
                            <div className="title">First seen in:</div>
                            <div className="value">{data.origin.name}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CharacterCard;