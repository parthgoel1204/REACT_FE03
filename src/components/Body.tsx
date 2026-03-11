import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import {useState , useEffect} from "react";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

interface RestaurantInfo {
  id: string;
  name: string;
  cloudinaryImageId: string;
  costForTwo: string;
  cuisines: string[];
  avgRating: number;
  sla: {
    deliveryTime: number;
  };
  veg: string;
}

interface Restaurant {
  info: RestaurantInfo;
}

const Body = ()=> {
    // let [listOfRestaurants, setListOfRestaurants] = useState([
    //     {
    //         "info": {
    //             "id": "605415",
    //             "name": "Dum Safar Biryani",
    //             "cloudinaryImageId": "l9pbure8tbootzc7utmn",
    //              "costForTwo": "₹500 for two",
    //             "cuisines": [
    //                 "Biryani",
    //                 "Kebabs",
    //                 "North Indian",
    //                 "Barbecue"
    //             ],
    //             "avgRating": 4,
    //             "deliveryTime": 43,
            
    //         }
    //     },
    //     {
    //         "info": {
    //             "id": "605416",
    //             "name": "Dum Safar Biryani",
    //             "cloudinaryImageId": "l9pbure8tbootzc7utmn",
    //              "costForTwo": "₹500 for two",
    //             "cuisines": [
    //                 "Biryani",
    //                 "Kebabs",
    //                 "North Indian",
    //                 "Barbecue"
    //             ],
    //             "avgRating": 3.9,
    //             "deliveryTime": 43,
            
    //         }
    //     },
    //     {
    //         "info": {
    //             "id": "605417",
    //             "name": "Dum Safar Biryani",
    //             "cloudinaryImageId": "l9pbure8tbootzc7utmn",
    //              "costForTwo": "₹500 for two",
    //             "cuisines": [
    //                 "Biryani",
    //                 "Kebabs",
    //                 "North Indian",
    //                 "Barbecue"
    //             ],
    //             "avgRating": 4.6,
    //             "deliveryTime": 43,
            
    //         }
    //     }
    // ]);

    const [listOfRestaurants,setListOfRestaurants] = useState<Restaurant[]>([]);

    const [filteredRestaurants,setFilteredRestaurants] = useState<Restaurant[]>([]);

    const [searchText,setSearchText] = useState<string>("");
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    console.log(listOfRestaurants);
    
    const onlineStatus = useOnlineStatus();
    useEffect(()=> {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(
            "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        console.log(json);
        // OPTIONAL CHAINING
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    }

    if(onlineStatus === false){
        return (
        <h1>Looks Like You're Offline! Please Check Your Connection!!</h1>
        )
    };
    // CONDITIONAL RENDERING
    if(listOfRestaurants.length === 0){
        return <Shimmer/>
    };
    return(
        <div className="body">
            {/* <div className="search">Search</div> */}
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input 
                        type="text" 
                        className="border border-solid border-black" 
                        value={searchText}
                        onChange={(e) => {
                        setSearchText(e.target.value)
                        // console.log(e.target);
                    }}/>
                    <button className="px-4 py-2 m-4 bg-green-200 rounded-lg"
                    onClick={() => {
                        // console.log(searchText);x
                        const filteredRestaurants = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                        setFilteredRestaurants(filteredRestaurants);
                    }}>
                        Search
                    </button>
                </div>
                <div className="search m-4 p-4 items-center">
                    <button 
                    className="px-4 py-2 m-4 bg-gray-200 rounded-lg" 
                    onClick={() => {
                        const filteredLists = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setListOfRestaurants(filteredLists)
                    }}
                >
                    TOP RATED RESTAURENTS
                </button>
                </div>
            </div>
            <div className="res-container flex flex-wrap">
                {filteredRestaurants.map((res) => (
                    <Link  
                    key={res.info.id} to={"/restaurants/" + res.info.id}>
                        {res.info.veg ? (
                            <RestaurantCardPromoted resData={res}/>
                        ) : (<RestaurantCard resData={res}/>)}
                    </Link>
                ))}
                {/* <RestaurantCard resName="Meghana Foods" cuisine="Continental , Veg & Non-Veg" />
                <RestaurantCard resName="Balwinder DI Hatti" cuisine="Desi , Punjabi , Indian"/> */}
            </div>
        </div>
    );
}

export default Body;