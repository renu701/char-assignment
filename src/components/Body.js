import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import CharacterCard from "./CharacterCard";
const Body = () => {

    const [charLists,setCharLists] = useState([]);


    useEffect(()=>{
        fetchData();
    },[])


    const fetchData = async() =>{
        const data = await fetch('https://rickandmortyapi.com/api/character');
        const json = await data.json();
        setCharLists(json?.results)
        console.log(json);
    }

    console.log("charList",charLists);

    return charLists.length === 0 ? <Shimmer /> : (
        <div className="list-container">
            {charLists.map((char)=>{
                return <CharacterCard key={char.id} charObj={char} />
            })}
        </div>
    )
}
export default Body;