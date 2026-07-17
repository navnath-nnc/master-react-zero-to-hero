import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestroCard = (props) => {
  const { restroData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    restroData?.info;
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="m-4 p-4 w-[250] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="restro-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-xl">{name}</h3>
      <h3>{[cuisines].join(", ")}</h3>
      <h3>{avgRating}</h3>
      <h3>{costForTwo}</h3>
      <h3>{restroData.info.sla.deliveryTime} minutes</h3>
      <h3>{loggedInUser} </h3>
    </div>
  );
};

// Higher order component
// input - RestroCard - RetroCardPromoted

export const withPromotedLable = (RestroCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Veg🟢
        </label>
        <RestroCard {...props} />
      </div>
    );
  };
};
export default RestroCard;
