import {CDN_URL} from "../utils/constants";

// type RestaurantProps = {
//     resName: string,
//     cuisine: string
// }
interface SLA {
  deliveryTime: number;
}
interface RestaurantData {
  cloudinaryImageId: string;
  name: string;
  avgRating: number;
  cuisines: string[];
  costForTwo: string;
  sla: SLA;
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
    sla,
  } = resData?.info || {};

    return (
        <div className="m-4 p-4 w-90 hover:bg-gray-400"  >
            {/* <img className="res-logo" alt="res-logo" src="https://www.cookingcarnival.com/wp-content/uploads/2025/09/Vegetable-Dum-Biryani-5.jpg"/> */}
            <img className="rounded-lg" alt="res-logo" src={CDN_URL + cloudinaryImageId}/>
            {/* <h3>{props.resName}</h3>
            <p>{props.cuisine}</p> */}
            <h3 className="font-extrabold py-4 text-2xl">{name}</h3>
            <p>{cuisines?.join(", ")}</p>
            <p>{avgRating} stars</p>
            <p> {costForTwo}</p>
            <p>{sla?.deliveryTime} mins</p>
        </div>
    );
};

export const withPromotedLabel = (RestaurantCard: React.ComponentType<RestaurantCardProps>) => {
  return (props: RestaurantCardProps) => {
    return(
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg"> PROMOTED </label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;