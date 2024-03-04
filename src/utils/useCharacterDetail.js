import { useEffect, useState } from "react";
import { ITEM_API } from "../utils/constants"

const useCharacterDetail = (charId) => {


    const [charInfo , setCharInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        const data = await fetch(ITEM_API + charId);
        const json = await data.json();
        setCharInfo(json);
    }
    return charInfo;
}
export default useCharacterDetail;