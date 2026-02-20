import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
const Header = () => {
    const [btnNameReact,setbtnNameReact] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li><FontAwesomeIcon icon={faCartShopping} /></li>
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