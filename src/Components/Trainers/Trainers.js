import "./Trainers.css";
import CardTeam from "../Cards/CardTeam";
import TrainersBanner from "./TrainersBanner";
import Teams from "../Homepage/Teams";
import Amanda from "../../assets/Cards/CardTeam/Amanda.png";
import Madison from "../../assets/Cards/CardTeam/Madison.png";
import Joshua from "../../assets/Cards/CardTeam/Joshua.png";
import Jhon from "../../assets/Cards/CardTeam/Jhon.png";
import Steve from "../../assets/Cards/CardTeam/Steve.png";
import Kane from "../../assets/Cards/CardTeam/Kane.png";
import TrainerVideo from "./TrainerVideo";

const Trainers = () => {
  const Cards = [
    {id:1, img:Amanda, name:"Amanda", specialitis:"Crossfit Expoort, Nutrition & Rehab", instagram:"#AmandaSocial", facebook:"#AmandaSocial"},
    {id:2, img:Madison, name:"Madison", specialitis:"Crossfit Expoort, Nutrition & Rehab", instagram:"#MadisonSocial", facebook:"#MadisonSocial", twitter:"#MadisonSocial"},
    {id:3, img:Joshua, name:"Joshua", specialitis:"Crossfit Expoort, Nutrition & Rehab", instagram:"#JoshuaSocial", facebook:"#JoshuaSocial"},
    {id:4, img:Jhon, name:"Jhon Willson", specialitis:"Crossfit Expoort, Nutrition & Rehab", instagram:"#JhonSocial", facebook:"#JhonSocial"},
    {id:5, img:Steve, name:"Steve Smith", specialitis:"Crossfit Expoort, Nutrition & Rehab", instagram:"#SteveSocial", facebook:"#SteveSocial", twitter:"#SteveSocial"},
    {id:6, img:Kane, name:"Kane Lucy", specialitis:"Crossfit Expoort, Nutrition & Rehab", instagram:"#KaneSocial", facebook:"#KaneSocial"},
  ]
  return(
    <div className={"TrainersContainer"}>

      <TrainersBanner/>
      <Teams subTitle={"Our Trainers"} Title={"We Trained You to Gain"} cards={Cards.map((card) => {
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
      <TrainerVideo/>

    </div>
  )
};export default Trainers;