import "./About.css";
import AboutBanner from "./AboutBanner";
import AboutMain from "./AboutMain";
import AboutVideoDemo from "./AboutVideoDemo";
import AboutValues from "./AboutValues";

const About = () => {
  return(
    <div className={"AboutContainer"}>
      <AboutBanner/>
      <AboutMain/>
      <AboutVideoDemo/>
      <AboutValues/>

    </div>
  )
};export default About;