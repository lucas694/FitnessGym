import "./TrainerDetails.css";
import { useParams } from "react-router-dom";
import { getTrainersData} from "../Utils/Utils";
import TrainersBanner from "./TrainersBanner";
import {BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs";
import HomepageClasses from "../Homepage/HomepageClasses";
import {useEffect} from "react";

function TrainerDetails() {
  const { id } = useParams();
  const TrainersData = getTrainersData();
  const card = TrainersData.find(item => item.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={"TrainersDetailsContainer"}>
      <TrainersBanner title={card.name}/>
      <div className={"TrainersDetailsContent"}>
        <div className={"TrainersDetLeft"}>
          <img src={card.img} alt={card.name} className={""}/>
          <h1 className={"TrainersDetName"}>{card.name}</h1>
          <p className={"TrainersDetSpec"}>{card.specialitis}</p>
          <p className={"TrainersDetInfs"}>Phone:<span>{card.phone}</span></p>
          <p className={"TrainersDetInfs"}>Email:<span>{card.email}</span></p>
          <p className={"TrainersDetInfs"}>Location:<span>Adams St.Westford, MA 01886</span></p>
          <div className={"TrainersDetSocial"}>
            {card.instagram ? <a href={card.instagram} target={"_blank"}><BsInstagram className={"TrainerSocialIcon"}/> </a>: null}
            {card.facebook ? <a href={card.facebook} target={"_blank"}><BsFacebook className={"TrainerSocialIcon"}/> </a>: null}
            {card.twitter ? <a href={card.twitter} target={"_blank"}><BsTwitter className={"TrainerSocialIcon"}/> </a>: null}
          </div>
        </div>
        <div className={"TrainersDetRight"}>
          <h1 className={"TrainersDetTitle"}>Personal Details</h1>
          <p className={"TrainersDetText"}>Far far away, behinds the words mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they lived in Book marks grove rights at the coasts of the Semantics, a large language ocean. A small river named Duden flows by the their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted.</p>

          <h2>The Healthy Life Style For All</h2>
          <p>There are many variations of passangers of Lorem Ipsum availables but on the majority have suffered alteration Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse .</p>

          <ul>
            <li>Dynamically target high-payoff intellectual capital for customized</li>
            <li>Interactively procrastinate high-payoff content</li>
            <li>Credibly reinter mediate backend ideas for cross-platform models</li>
          </ul>

          <h2>Make real time a health improvements</h2>
          <p>Proactively envisioned multimedia based expertise crosses media growth strategies. Seamlessly visualize quality intelectual captal without superor collaboration idea sharing Holistically pontficate installed based portals after maintainabled products. engaged world wide methodologies with enabled Completely pursue scalable customer service through sustainable potentialities</p>
          <ul>
            <li>It brings the right people together with all the right information and tools to get work done</li>
            <li>We provide operational efficiency, data security, and flexible scale</li>
            <li>Your best work, together in one package that works seamlessly from your computer</li>
          </ul>
          <p>User generated content in real-time will have multiple touchpoints for offshoring. Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthrough's from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
        </div>
      </div>
      <HomepageClasses/>
    </div>
  );
}

export default TrainerDetails;