import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {LOGO_URL} from "../utils/constants";
const Header = () => {
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
                </ul>
            </div>
        </div>
    )
}

export default Header;