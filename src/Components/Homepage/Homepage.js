import "./Homepage.css";
import HomepageBanner from "./HomepageBanner";
import HomepageClasses from "./HomepageClasses";
import AnimatedText from "./AnimatedText";

const Homepage = () => {
  return(
    <div className={"HomepageContainer"}>
      <HomepageBanner/>
      <HomepageClasses/>
      <AnimatedText/>
    </div>
  )
};export default Homepage;