import "./Teams.css";
import CardTeam from "../Cards/CardTeam";
import Amanda from "../../assets/Cards/CardTeam/Amanda.png"
import Madison from "../../assets/Cards/CardTeam/Madison.png"
import Joshua from "../../assets/Cards/CardTeam/Joshua.png"


const Teams = (props) => {
  const {subTitle, Title,} = props;
  const Cards = [
    {id:1, img:Amanda, name:"Amanda", specialitis:"Crossfit Expoort, Nutrition & Rehab", instagram:"#AmandaSocial", facebook:"#AmandaSocial"},
    {id:2, img:Madison, name:"Madison", specialitis:"Crossfit Expoort, Nutrition & Rehab", instagram:"#MadisonSocial", facebook:"#MadisonSocial", twitter:"#MadisonSocial"},
    {id:3, img:Joshua, name:"Joshua", specialitis:"Crossfit Expoort, Nutrition & Rehab", instagram:"#JoshuaSocial", facebook:"#JoshuaSocial"},
  ]
  return(
    <div className={"TeamsContainer"}>
      <h3 className={"TeamsSubTitle"}>{subTitle}</h3>
      <h1 className={"TeamsTitle"}>{Title}</h1>
      <div className={"TeamsCardsContent"}>
        {Cards.map((card) => {
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
      </div>

    </div>
  )
};export default Teams;