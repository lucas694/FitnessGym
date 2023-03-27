import "./HomepageBanner.css";
import BtnBase from "../Buttons/BtnBase";

const HomepageBanner = () => {
  return(
    <div className={"HomepageBannerContainer"}>
      <div className={"HomepageBannerContent"}>
        <h1 className={"HomepageBannerTitle"}>Keep Your Body Fit & Strong</h1>
        <div className={"HomepageBannerBtnSec"}>
          <BtnBase className={"BtnGreen"} text={"Start Today"}/>
          <BtnBase className={"BtnTransparent"} text={"About Me"}/>
        </div>
      </div>
    </div>
  )
};export default HomepageBanner;