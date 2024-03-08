import { useEffect } from "react";
import Shimmer from "./Shimmer";
import CharacterCard from "./CharacterCard";
import { ITEM_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_CHARACTERS_LIST } from "../store/slice/charSlice";
import { Link } from "react-router-dom";

const Body = () => {
  const dispatch = useDispatch();
  const charData = useSelector((state) => state.list);
  useEffect(() => {
    fetchData((url = `${ITEM_API}?page=1`));
  }, []);

  const fetchData = async (url) => {
    const data = await fetch(url);
    const json = await data.json();
    dispatch(UPDATE_CHARACTERS_LIST(json));
  };

  return charData?.results?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="button-container">
        <button
          className="btn"
          disabled={!charData?.info?.prev}
          onClick={() => fetchData(charData.info.prev)}
        >
          Previous
        </button>
        <button
          className="btn"
          disabled={!charData?.info?.next}
          onClick={() => fetchData(charData.info.next)}
        >
          Next
        </button>
      </div>
      <div className="list-container">
        {charData?.results?.map((char) => {
          return (
            <Link key={char.id} to={"/character/" + char.id}>
              <CharacterCard key={char.id} charObj={char} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
