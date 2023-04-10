import "./Homepage.css";
import HomepageBanner from "./HomepageBanner";
import HomepageClasses from "./HomepageClasses";
import AnimatedText from "./AnimatedText";
import HpAbout from "./HpAbout";
import Teams from "./Teams";
import Benefits from "./Benefits";
import Pricing from "./Pricing";
import BlogHp from "./BlogHp";
import CardTeam from "../Cards/CardTeam";
import {getTrainersData} from "../Utils/Utils";
import {Link} from "react-router-dom";


const Homepage = () => {
  const TrainersData = getTrainersData();

  return(
    <div className={"HomepageContainer"}>
      <HomepageBanner/>
      <HomepageClasses/>
      <AnimatedText/>
      <HpAbout/>
      <Teams
        subTitle={"Our Trainers"}
        Title={"We Trained You to Gain"}
        cards={TrainersData.slice(0, 3).map((card) => {
          return (
            <Link to={`/Trainers/${card.id}`} key={card.id}>
              <CardTeam
                key={card.id}
                img={card.img}
                name={card.name}
                specialitis={card.specialitis}
                instagram={card.instagram}
                facebook={card.facebook}
                twitter={card.twitter}
              />
            </Link>
          );
        })}
      />
      <Benefits/>
      <Pricing/>
      <BlogHp/>
    </div>
  )
};export default Homepage;