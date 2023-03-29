import "./Homepage.css";
import HomepageBanner from "./HomepageBanner";
import HomepageClasses from "./HomepageClasses";
import AnimatedText from "./AnimatedText";
import HpAbout from "./HpAbout";
import Teams from "./Teams";
import Benefits from "./Benefits";
import Pricing from "./Pricing";
import BlogHp from "./BlogHp";

const Homepage = () => {
  return(
    <div className={"HomepageContainer"}>
      <HomepageBanner/>
      <HomepageClasses/>
      <AnimatedText/>
      <HpAbout/>
      <Teams subTitle={"Our Trainers"} Title={"We Trained You to Gain"}/>
      <Benefits/>
      <Pricing/>
      <BlogHp/>
    </div>
  )
};export default Homepage;