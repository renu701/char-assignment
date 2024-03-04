import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import CharacterCard from "./CharacterCard";
import { ITEM_API } from "../utils/constants"
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_CHARACTERS_LIST } from "../store/slice/charSlice";
const Body = () => {
    const dispatch = useDispatch();
    const charLists = useSelector((state) => state.list)
    useEffect(()=>{
        fetchData();
    },[])


    const fetchData = async() =>{
        const data = await fetch(ITEM_API);
        const json = await data.json();
        console.log('json',json);
        dispatch(UPDATE_CHARACTERS_LIST(json.results))
    }


    return charLists.length === 0 ? <Shimmer /> : (
        <div className="list-container">
            {charLists.map((char)=>{
                return <CharacterCard key={char.id} charObj={char} />
            })}
        </div>
    )
}
export default Body;