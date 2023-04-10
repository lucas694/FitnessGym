import "./About.css";
import AboutBanner from "./AboutBanner";
import AboutMain from "./AboutMain";
import AboutVideoDemo from "./AboutVideoDemo";
import AboutValues from "./AboutValues";
import Teams from "../Homepage/Teams";
import CardTeam from "../Cards/CardTeam";
import {getTrainersData} from "../Utils/Utils";
import {Link} from "react-router-dom";

const About = () => {
  const TrainersData = getTrainersData();

  return(
    <div className={"AboutContainer"}>
      <AboutBanner/>
      <AboutMain/>
      <AboutVideoDemo/>
      <AboutValues/>
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
    </div>
  )
};export default About;