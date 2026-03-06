import RestaurantCard from "./RestaurantCard";
import {useState , useEffect} from "react";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";

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
    // CONDITIONAL RENDERING
    if(listOfRestaurants.length === 0){
        return <Shimmer/>
    }
    return(
        <div className="body">
            {/* <div className="search">Search</div> */}
            <div className="filter">
                <div className="search">
                    <input 
                        type="text" 
                        className="search-box" 
                        value={searchText}
                        onChange={(e) => {
                        setSearchText(e.target.value)
                        // console.log(e.target);
                    }}/>
                    <button 
                    onClick={() => {
                        // console.log(searchText);x
                        const filteredRestaurants = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                        setFilteredRestaurants(filteredRestaurants);
                    }}>
                        Search
                    </button>
                </div>
                <button 
                    className="filter-btn" 
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
            <div className="res-container">
                {filteredRestaurants.map((res) => (
                    <Link  key={res.info.id} to={"/restaurants/" + res.info.id}>
                        <RestaurantCard resData={res}/>
                    </Link>
                ))}
                {/* <RestaurantCard resName="Meghana Foods" cuisine="Continental , Veg & Non-Veg" />
                <RestaurantCard resName="Balwinder DI Hatti" cuisine="Desi , Punjabi , Indian"/> */}
            </div>
        </div>
    );
}

export default Body;