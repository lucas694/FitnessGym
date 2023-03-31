import "./Header.css";
import HeaderLogo from "../assets/HeaderLogo.svg";
import {NavLink} from "react-router-dom";

const Header = () => {
  return(
    <div className={"HeaderContainer"}>
      <div className={"HeaderIconSec"}>
        <img src={HeaderLogo} alt={"HeaderLogo"} className={"HeaderIcon"}/>
      </div>

      <div className={"HeaderMenuSec"}>
        <ul className={"UlHeader"}>
          <li><NavLink to={"/"} className={"NavLinkHeader"}>Home</NavLink></li>
          <li><NavLink to={"/About"} className={"NavLinkHeader"}>About</NavLink></li>
          <li><NavLink to={"/Class"} className={"NavLinkHeader"}>Class</NavLink></li>
          <li><NavLink to={"/Trainers"} className={"NavLinkHeader"}>Trainers</NavLink></li>
          <li><NavLink to={"/Blog"} className={"NavLinkHeader"}>Blog</NavLink></li>
        </ul>
      </div>
    </div>
  )
};export default Header;