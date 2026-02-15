import {CDN_URL} from "../utils/constants";

// type RestaurantProps = {
//     resName: string,
//     cuisine: string
// }
interface RestaurantData {
  cloudinaryImageId: string;
  name: string;
  avgRating: number;
  cuisines: string[];
  costForTwo: string;
  deliveryTime: number;
}

interface RestaurantCardProps {
  resData?: {
    info: RestaurantData;
  };
}

// const RestaurantCard = ({resName , cuisine} : RestaurantProps) => {
const RestaurantCard = (props : RestaurantCardProps) => {
    const { resData } = props;
    const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.info || {};

    return (
        <div className="res-card"  >
            {/* <img className="res-logo" alt="res-logo" src="https://www.cookingcarnival.com/wp-content/uploads/2025/09/Vegetable-Dum-Biryani-5.jpg"/> */}
            <img className="res-logo" alt="res-logo" src={CDN_URL + cloudinaryImageId}/>
            {/* <h3>{props.resName}</h3>
            <p>{props.cuisine}</p> */}
            <h3>{name}</h3>
            <p>{cuisines?.join(", ")}</p>
            <p>{avgRating} stars</p>
            <p> {costForTwo}</p>
            <p>{deliveryTime} mins</p>
        </div>
    );
}

export default RestaurantCard;