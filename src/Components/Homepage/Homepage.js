import "./Homepage.css";
import HomepageBanner from "./HomepageBanner";
import HomepageClasses from "./HomepageClasses";
import AnimatedText from "./AnimatedText";
import HpAbout from "./HpAbout";
import Teams from "./Teams";
import Benefits from "./Benefits";
import Pricing from "./Pricing";
import BlogHp from "./BlogHp";
import Amanda from "../../assets/Cards/CardTeam/Amanda.png";
import Madison from "../../assets/Cards/CardTeam/Madison.png";
import Joshua from "../../assets/Cards/CardTeam/Joshua.png";
import CardTeam from "../Cards/CardTeam";

const Homepage = () => {
  const Cards = [
    {id:1, img:Amanda, name:"Amanda", specialitis:"Crossfit Expoort, Nutrition & Rehab", instagram:"#AmandaSocial", facebook:"#AmandaSocial"},
    {id:2, img:Madison, name:"Madison", specialitis:"Crossfit Expoort, Nutrition & Rehab", instagram:"#MadisonSocial", facebook:"#MadisonSocial", twitter:"#MadisonSocial"},
    {id:3, img:Joshua, name:"Joshua", specialitis:"Crossfit Expoort, Nutrition & Rehab", instagram:"#JoshuaSocial", facebook:"#JoshuaSocial"},
  ]
  return(
    <div className={"HomepageContainer"}>
      <HomepageBanner/>
      <HomepageClasses/>
      <AnimatedText/>
      <HpAbout/>
      <Teams subTitle={"Our Trainers"} Title={"We Trained You to Gain"}
             cards={Cards.map((card) => {
            return(
              <CardTeam key={card.id}
                        img={card.img}
                        name={card.name}
                        specialitis={card.specialitis}
                        instagram={card.instagram}
                        facebook={card.facebook}
                        twitter={card.twitter}
              />
            )})}
      />
      <Benefits/>
      <Pricing/>
      <BlogHp/>
    </div>
  )
};export default Homepage;