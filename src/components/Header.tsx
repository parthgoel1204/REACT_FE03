import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {LOGO_URL} from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore";

const Header = () => {
    const [btnNameReact,setbtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const data = useContext(UserContext);
    console.log(data);
    // Subscribing to the store using a selector
    const cartItems = useSelector((store:RootState) => store.cart.items);

    return (
        <div className="flex justify-between bg-pink-100 shadow-xl">
            <div className="logo-container">
                <img className="w-45" src={LOGO_URL}/>
            </div>
            <div className=" flex items-center">
                <ul className="flex m-4 p-4 ">
                    <li className="px-4">
                        Online Status: {onlineStatus?  "✅" : "❌"  }</li>
                    <li className="px-4">
                        <Link to={"/"}>Home</Link></li>
                    <li className="px-4">
                        <Link to={"/about"}>About Us</Link></li>
                    <li className="px-4">
                        <Link to={"/contact"}>Contact Us</Link></li>
                    <li className="px-4">
                        <Link to={"/grocery"}>Grocery</Link></li>
                    <li className="px-4 font-bold">
                        <Link to={"/cart"}>
                        <FontAwesomeIcon icon={faCartShopping} /> {cartItems.length} </Link></li>
                    <button 
                    className="login-btn"
                    onClick={() => {
                        btnNameReact === "Login"
                        ? setbtnNameReact("Logout")
                        : setbtnNameReact("Login");
                        // console.log(btnNameReact);
                        
                    }}> {btnNameReact}</button>
                    <li className="px-4">{data.loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;