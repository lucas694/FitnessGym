import "./Trainers.css";
import CardTeam from "../Cards/CardTeam";
import TrainersBanner from "./TrainersBanner";
import Teams from "../Homepage/Teams";
import TrainerVideo from "./TrainerVideo";
import {getTrainersData} from "../Utils/Utils";
import {Link} from "react-router-dom";

const Trainers = () => {
  const Cards = getTrainersData();
  return(
    <div className={"TrainersContainer"}>

      <TrainersBanner/>
      <Teams subTitle={"Our Trainers"} Title={"We Trained You to Gain"} cards={Cards.map((card) => {
        return(
          <Link to={`/Trainers/${card.id}`} key={card.id}>
            <CardTeam key={card.id}
                      img={card.img}
                      name={card.name}
                      specialitis={card.specialitis}
                      instagram={card.instagram}
                      facebook={card.facebook}
                      twitter={card.twitter}
            />
          </Link>
        )})}
      />
      <TrainerVideo/>

    </div>
  )
};export default Trainers;