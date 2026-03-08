import { useEffect,useState } from "react";

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

const useRestaurantMenu = (resId: string) => {
    const [resInfo,setResInfo] = useState<RestaurantInfo | null>(null);
    const [menuItems,setMenuItems] = useState<MenuItemCard[]>([]);

    useEffect(() => {
        fetchData();
    }, [resId]);

    const fetchData = async ()=> {
    const data = await fetch(
      "https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&submitAction=ENTER&restaurantId=" + resId
    )
    const json = await data.json();
    console.log(json);

    setResInfo(json?.data?.cards[2]?.card?.card?.info);
 
    const regularCards: CategoryCard[] =json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards ?? [];

    const items = regularCards
      ?.filter((c: CategoryCard) => c?.card?.card?.itemCards)
      .flatMap((c: CategoryCard) => c?.card?.card?.itemCards ?? []);
    setMenuItems(items);
  };

    return { resInfo, menuItems };
}

export default useRestaurantMenu;