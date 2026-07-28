import React from "react";
import RestroCard, { withPromotedLable } from "./RestroCard";
import restroList from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRest, setListOfRest] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RetroCardPromoted = withPromotedLable(RestroCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://namastedev.com/api/v1/listRestaurants",
    );
    const json = await response.json();
    // console.log(json);
    // console.log(
    //   json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
    // );

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
  const { loggedInUser, setUserName } = useContext(UserContext);
  return listOfRest.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg cursor-pointer"
            onClick={() => {
              // setFilteredList([]);
              const filteredList = listOfRest.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );

              setFilteredList(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex search m-4 p-4 items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg cursor-pointer"
            onClick={() => {
              let filterList = listOfRest.filter(
                (res) => res.info.avgRating > 4.5,
              );
              setFilteredList(filterList);
            }}
          >
            Top Rated Restraurants
          </button>
        </div>
        <div className="search m-4 p-4 items-center">
          <label>User Name: </label>
          <input
            className="border border-black"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredList.map((restro) => (
          <Link key={restro.info.id} to={"/restaurants/" + restro.info.id}>
            {restro.info.veg ? (
              <RetroCardPromoted restroData={restro} />
            ) : (
              <RestroCard restroData={restro} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
