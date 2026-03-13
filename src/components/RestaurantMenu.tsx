
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { MenuItemCard } from "../types/menu";
import { useState } from "react";

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
  const { resInfo, menuItems, categories } = useRestaurantMenu(resId!);
  const [showIndex,setShowIndex] = useState(0);
  
  if(resInfo === null) return <Shimmer/>;
  const { name, cuisines, cloudinaryImageId, costForTwoMessage } = resInfo;
  // const resName = resInfo?.cards?.[2]?.card?.info?.name;
  // const menuItems = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card?.itemCards
  return (
  <div className="text-center max-w-6xl mx-auto p-6 bg-gray-100 ">

    <h1 className="font-extrabold my-6 text-4xl text-gray-800">
      {name}
    </h1>

    <img
      className="mx-auto w-48 h-48 object-cover rounded-xl shadow-md mb-4"
      alt="res-logo"
      src={CDN_URL + cloudinaryImageId}
    />

    <p className="font-semibold text-lg text-gray-700">
      {cuisines?.join(", ")}
    </p>

    <p className="text-gray-600 mt-1">
      {costForTwoMessage}
    </p>

    <h2 className="mt-6 text-2xl font-bold text-gray-800 border-b pb-2">
      Menu
    </h2>
    <div>
      {categories.map((category,index)=> (
        <RestaurantCategory 
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems = {index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)} 
          />
        ))}
    </div>
    {/* <ul className="mt-4 space-y-3 text-left">
      {menuItems.map((item,index)=>(
        <li 
          key={`${item.card.info.id}-${index}`} 
          className="p-3 bg-white rounded-lg shadow-sm hover:bg-gray-50"
        >
          <h3 className="font-semibold">
            {item.card.info.name} - ₹{item.card.info.price / 100}
          </h3>
          <p className="text-sm text-gray-600">
            {item.card.info.description}
          </p>
        </li>
      ))}
    </ul> */}
  </div>
);
};

export default RestaurantMenu;