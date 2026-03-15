import React,{ lazy , Suspense, useState , useEffect} from "react";
import {createRoot} from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
// import logo from "./logo.png";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Shimmer from "./components/Shimmer";
// import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy( () => import("./components/Grocery"));
const styleCard = {
    backgroundColor : "#f0f0f0",
};

// const RestaurantCard = (props:RestaurantProps) => {

const AppLayout = ()=> {
    const [userInfo,setUserInfo] = useState("");

    useEffect(()=>{
        const data = {
            name : "Parth Goel"
        };
        setUserInfo(data.name);
    },[]);
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userInfo,setUserInfo}}>
        <div className="app">
            {/* Hello from AppLayout; */}
            {/* <UserContext.Provider value={{loggedInUser:"Elon", setUserInfo}}> */}
                <Header/>
            {/* </UserContext.Provider> */}
            {/* if path = /
            <Body/>
            { if path = /about }
            <About/>
            {/* if path = /contact }
            <Contact/> */}
            <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
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
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
            },
            {
                path: "/cart",
                element: <Cart/>
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