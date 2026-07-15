import { CDN_URL } from "../utils/constants";

const RestroCard = (props) => {
  const { restroData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    restroData?.info;

  return (
    <div className="restro-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="restro-logo"
        alt="restro-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h3>{[cuisines].join(", ")}</h3>
      <h3>{avgRating}</h3>
      <h3>{costForTwo}</h3>
      <h3>{restroData.info.sla.deliveryTime} minutes</h3>
    </div>
  );
};

export default RestroCard;
