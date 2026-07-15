import RestroCard from "./RestroCard";
import restroList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRest, setListOfRest] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://namastedev.com/api/v1/listRestaurants",
    );
    const json = await response.json();
    // console.log(json);
    console.log(
      json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
    );

    setListOfRest(
      json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
    );
    setFilteredList(
      json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Looks like you are offline! please check your internet connection</h1>
    );

  return listOfRest.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="searchBtn"
            onClick={() => {
              // setFilteredList([]);
              const filteredList = listOfRest.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );

              setFilteredList(filteredList);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let filterList = listOfRest.filter((res) => res.info.avgRating > 4);
            setListOfRest(filterList);
          }}
        >
          Top Rated Restraurants
        </button>
      </div>
      <div className="restro-container">
        {filteredList.map((restro) => (
          <Link key={restro.info.id} to={"/restaurants/" + restro.info.id}>
            <RestroCard restroData={restro} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
