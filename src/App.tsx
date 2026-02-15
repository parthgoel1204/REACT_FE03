import React from "react";
import {createRoot} from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import logo from "./logo.png";

const styleCard = {
    backgroundColor : "#f0f0f0",
};

// const RestaurantCard = (props:RestaurantProps) => {


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