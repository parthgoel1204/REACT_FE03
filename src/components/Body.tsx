import RestaurantCard from "./RestaurantCard";
import {useState , useEffect} from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
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

    let [listOfRestaurants,setListOfRestaurants] = useState([]);

    useEffect(()=> {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.719028&lng=77.077506&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        console.log(json);
        // OPTIONAL CHAINING
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    // CONDITIONAL RENDERING
    if(listOfRestaurants.length === 0){
        return <Shimmer/>
    }
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