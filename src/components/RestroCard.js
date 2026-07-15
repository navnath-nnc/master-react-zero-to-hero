import { CDN_URL } from "../utils/constants";

const RestroCard = (props) => {
  const { restroData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    restroData?.info;

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
    </div>
  );
};

export default RestroCard;
