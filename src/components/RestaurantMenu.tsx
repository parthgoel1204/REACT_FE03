import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";

interface RestaurantInfo {
  name: string;
  costForTwoMessage: string;
  cuisines: string[];
  cloudinaryImageId: string;
}

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
  const [resInfo,setResInfo] = useState<RestaurantInfo | null>(null);
  const [menuItems,setMenuItems] = useState<MenuItemCard[]>([]);
  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async ()=> {
    const data = await fetch(
      "https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&submitAction=ENTER&restaurantId=" + resId
    )
    const json = await data.json();
    console.log(json);
    setResInfo(json?.data?.cards[2]?.card?.card?.info);

    const regularCards =json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    const items = regularCards
      ?.filter((c: CategoryCard) => c?.card?.card?.itemCards)
      .flatMap((c: CategoryCard) => c?.card?.card?.itemCards ?? []);
    setMenuItems(items);
  };
  const resName = resInfo?.name;
  const cuisines = resInfo?.cuisines;
  const image = resInfo?.cloudinaryImageId;
  const price = resInfo?.costForTwoMessage;
  // const resName = resInfo?.cards?.[2]?.card?.info?.name;
  // const menuItems = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card?.itemCards
  
  if(resInfo === null) return <Shimmer/>;
  return  (
    <div className="menu">
      <h1>{resName}</h1>
      <img alt="res-logo" src={CDN_URL + image}/>
      <p>{cuisines?.join(", ")}</p>
      <p> {price}</p>
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