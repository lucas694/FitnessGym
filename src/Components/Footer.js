import "./Footer.css";
import FooterBg from "../assets/FooterBg.jpg"
import FooterLogo from "../assets/FooterLogo.svg"
import {BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs";

const Footer = () => {
  return(
    <div className={"FooterContainer"}>
      <div className={"FooterBg"}>
        <img src={FooterBg} alt={"FooterBg"} className={"FooterBg"}/>
      </div>
      <div className={"FooterContent"}>
        {/*FooterLeft*/}
        <div className={"FooterLeft"}>
          <img src={FooterLogo} alt={"FooterLogo"} className={"FooterLogo"}/>
          <p className={"FooterDesc"}>It is a long established fact that a reader will be distracted by the readable.</p>
          <div className={"FooterLContact"}>
            <div className={"FooterLContactItem"}>
              <h2 className={"FooterContactTitle"}>Call :</h2>
              <p className={"FooterContactText"}>01234 987654</p>
              <p className={"FooterContactText"}>098765 34621</p>
            </div>
            <div className={"FooterLContactItem"}>
              <h2 className={"FooterContactTitle"}>Mail :</h2>
              <p className={"FooterContactText"}>contact@fitnessfit.com</p>
            </div>
          </div>
        </div>
        {/*FooterCenter*/}
        <div className={"FooterCenter"}>
          <h1 className={"FooterTitle"}>Utility Pages</h1>
          <ul className={"FooterList"}>
            <li className={"FooterListItem"}>Style Guide</li>
            <li className={"FooterListItem"}>Changelog</li>
            <li className={"FooterListItem"}>404 Page</li>
            <li className={"FooterListItem"}>Password Protected</li>
            <li className={"FooterListItem"}>Licenses</li>
            <li className={"FooterListItem"}>Contact</li>
          </ul>
        </div>
        {/*Footer Right*/}
        <div className={"FooterRight"}>
          <h1 className={"FooterTitle"}>Newsletter</h1>
          <input type={"text"}
                 className={"FooterInput"}
                 placeholder={"enter your email"}
          />
          <button className={"FooterButton"}>Subscribe</button>
          <div className={"FooterSocial"}>
            <BsInstagram className={"FooterSocialIcon"}/>
            <BsFacebook className={"FooterSocialIcon"}/>
            <BsTwitter className={"FooterSocialIcon"}/>
          </div>
        </div>
      </div>
      <div className={"FooterCopy"}>
        <p>Copyright © <span>FitnessFit</span> | Designed byLucas Cardoso</p>

      </div>
    </div>
  )
};export default Footer;