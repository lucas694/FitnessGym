import "./CardTeam.css"
import Star from "../../assets/Cards/CardTeam/Star.svg"
import {BsInstagram, BsFacebook, BsTwitter} from "react-icons/bs"
import img from "../../assets/Cards/CardTeam/Amanda.png"

const CardTeam = (props) => {
  const {img, name, specialitis, instagram, facebook, twitter} = props;
  return(
    <div className={"CardTeamContainer"}>
      <img src={img} alt={"Amanda"} className={"CardTeamImg"}/>
      <div className={"CardTeamInfs"}>
        <section>
          <h1 className={"CardTeamTitle"}>{name}</h1>
          <img src={Star} alt={"Star"} className={"Stars"}/>
        </section>
        <hr className={"CardTeamHr"}/>
        <div className={"CardTeamSpec"}>
          <h1 className={"CardTeamTitle "}>Specilitis:</h1>
          <p className={"CardTeamDesc"}>{specialitis}</p>
        </div>
        <div className={"CardTeamSocial"}>
          {instagram ? <a href={instagram} target={"_blank"}><BsInstagram className={"CardTeamIcon"}/> </a>: null}
          {facebook ? <a href={facebook} target={"_blank"}><BsFacebook className={"CardTeamIcon"}/> </a>: null}
          {twitter ? <a href={twitter} target={"_blank"}><BsTwitter className={"CardTeamIcon"}/> </a>: null}
        </div>

      </div>
    </div>
  )
};export default CardTeam;