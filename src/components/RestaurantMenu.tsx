
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

interface MenuItemInfo {
  id: string;
  name: string;
  price: number;
  description: string;
}

interface MenuItemCard {
  card: {
    info: MenuItemInfo;
  };
}

interface CategoryCard {
  card?: {
    card?: {
      title?: string;
      itemCards?: MenuItemCard[];
    };
  };
}
const RestaurantMenu: React.FC = () => {
  const {resId} = useParams<{resId : string}>();
  const { resInfo, menuItems } = useRestaurantMenu(resId!);
  
  if(resInfo === null) return <Shimmer/>;
  const { name, cuisines, cloudinaryImageId, costForTwoMessage } = resInfo;
  // const resName = resInfo?.cards?.[2]?.card?.info?.name;
  // const menuItems = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card?.itemCards
  return  (
    <div className="menu">
      <h1>{name}</h1>
      <img alt="res-logo" src={CDN_URL + cloudinaryImageId}/>
      <p>{cuisines?.join(", ")}</p>
      <p> {costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
        {menuItems.map((item,index)=>(
          <li key={`${item.card.info.id} - ${index}`}>
            <h3>{item.card.info.name} - Rs.{(item.card.info.price)/100}</h3>
            {item.card.info.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;