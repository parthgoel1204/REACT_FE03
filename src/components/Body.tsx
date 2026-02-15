import RestaurantCard from "./RestaurantCard";
import {useState} from "react";
import resList from "../utils/mockData";
const Body = ()=> {
    let [listOfRestaurants, setListOfRestaurants] = useState([
        {
            "info": {
                "id": "605415",
                "name": "Dum Safar Biryani",
                "cloudinaryImageId": "l9pbure8tbootzc7utmn",
                 "costForTwo": "₹500 for two",
                "cuisines": [
                    "Biryani",
                    "Kebabs",
                    "North Indian",
                    "Barbecue"
                ],
                "avgRating": 4,
                "deliveryTime": 43,
            
            }
        },
        {
            "info": {
                "id": "605416",
                "name": "Dum Safar Biryani",
                "cloudinaryImageId": "l9pbure8tbootzc7utmn",
                 "costForTwo": "₹500 for two",
                "cuisines": [
                    "Biryani",
                    "Kebabs",
                    "North Indian",
                    "Barbecue"
                ],
                "avgRating": 3.9,
                "deliveryTime": 43,
            
            }
        },
        {
            "info": {
                "id": "605417",
                "name": "Dum Safar Biryani",
                "cloudinaryImageId": "l9pbure8tbootzc7utmn",
                 "costForTwo": "₹500 for two",
                "cuisines": [
                    "Biryani",
                    "Kebabs",
                    "North Indian",
                    "Barbecue"
                ],
                "avgRating": 4.6,
                "deliveryTime": 43,
            
            }
        }
    ]);
    // let [listOfRestaurants,setListOfRestaurants] = useState([resList]);

    return(
        <div className="body">
            {/* <div className="search">Search</div> */}
            <div className="filter-btn" 
            onClick={() => {
                const filteredLists = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                setListOfRestaurants(filteredLists)
            }}>
                <button>TOP RATED RESTAURENTS</button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((res) => (
                    <RestaurantCard key={res.info.id} resData={res} />
                ))}
                {/* <RestaurantCard resName="Meghana Foods" cuisine="Continental , Veg & Non-Veg" />
                <RestaurantCard resName="Balwinder DI Hatti" cuisine="Desi , Punjabi , Indian"/> */}
            </div>
        </div>
    );
}

export default Body;