import "./HeaderMobile.css";
import HeaderLogo from "../assets/HeaderLogo.svg";
import {NavLink} from "react-router-dom";
import {FaBars} from "react-icons/fa";
import {useState} from "react";

const HeaderMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return(
    <div className={"HeaderMobileContainer"}>
      <div className={isMenuOpen ? "hidden":"HeaderMobileIconSec"}>
        <img src={HeaderLogo} alt={"HeaderLogo"} className={"HeaderMobileIcon"}/>
      </div>
      <ul className={isMenuOpen ? "UlHeaderMenu" : "hidden"}>
        <li><NavLink to={"/"} className={"NavLinkMobileHeader"}>Home</NavLink></li>
        <li><NavLink to={"/About"} className={"NavLinkMobileHeader"}>About</NavLink></li>
        <li><NavLink to={"/Class"} className={"NavLinkMobileHeader"}>Class</NavLink></li>
        <li><NavLink to={"/Trainers"} className={"NavLinkMobileHeader"}>Trainers</NavLink></li>
        <li><NavLink to={"/Blog"} className={"NavLinkMobileHeader"}>Blog</NavLink></li>

      </ul>

      <button className={"HeaderMobileMenuBtn"} onClick={toggleMenu}>
        <FaBars className={"BtnMobileIcon"}/>
      </button>




    </div>
  )
};export default HeaderMobile