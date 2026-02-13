import React from "react";
import {createRoot} from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import logo from "./logo.png";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/premium-vector/minimalist-food-delivery-logo-design-modern-simple-branding-delivery-services_838011-283.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li><FontAwesomeIcon icon={faCartShopping} /></li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = () => {
    return (
        <div className="res-card">
            <h3>Meghana Foods</h3>
        </div>
    );
}
const Body = ()=> {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
            </div>
        </div>
    );
}
const AppLayout = ()=> {
    return (
        <div className="app">
            {/* Hello from AppLayout; */}
            <Header/>
            <Body/>
        </div>
    );
}
const rootContainer = document.getElementById("root");
if(!rootContainer){
    throw new Error("Root not found");
    
}
const root = createRoot(rootContainer);

root.render(<AppLayout/>)