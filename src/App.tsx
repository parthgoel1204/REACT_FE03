import React from "react";
import {createRoot} from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
// import logo from "./logo.png";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";

const styleCard = {
    backgroundColor : "#f0f0f0",
};

// const RestaurantCard = (props:RestaurantProps) => {

const AppLayout = ()=> {
    return (
        <div className="app">
            {/* Hello from AppLayout; */}
            <Header/>
            {/* if path = /
            <Body/>
            { if path = /about }
            <About/>
            {/* if path = /contact }
            <Contact/> */}
            <Outlet/>
        </div>
    );
}

// createBrowserRouter takes an array of Objects that tells about path and the component to render
const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<AppLayout/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                index:true,
                element: <Body/>
            },
            {
                path: "/about",
                element:<About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            }
        ]
    },
]);

const rootContainer = document.getElementById("root");
if(!rootContainer){
    throw new Error("Root not found");
    
}
const root = createRoot(rootContainer);

root.render(<RouterProvider router={appRouter}/>)