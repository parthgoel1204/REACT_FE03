import ItemList from "./ItemList";
import { CategoryCardData } from "../types/menu";
import { useState } from "react";

interface RestaurantCategoryProps {
  data?: CategoryCardData;
}
const RestaurantCategory  = ({data} : RestaurantCategoryProps) => {
  const [showItems,setShowItems] = useState(false);

  const handleClick = () => {
    // console.log("clicked");
    setShowItems(!showItems);
  };
    return (
        <>
          <div className="w-4xl mx-auto m-4 bg-gray-50 shadow-lg p-4 ">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
              <span className="font-bold text-lg">{data?.title} ({data?.itemCards?.length})</span>
              <span> ⬇️ </span>
            </div>
            {showItems && <ItemList items={data?.itemCards}/> }
          </div>
          
        </>
    )
}

export default RestaurantCategory;