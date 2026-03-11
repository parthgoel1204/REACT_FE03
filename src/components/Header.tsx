import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const [btnNameReact,setbtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();
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
                    <li className="px-4">
                        <FontAwesomeIcon icon={faCartShopping} /></li>
                    <button 
                    className="login-btn"
                    onClick={() => {
                        btnNameReact === "Login"
                        ? setbtnNameReact("Logout")
                        : setbtnNameReact("Login");
                        // console.log(btnNameReact);
                        
                    }}> {btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;