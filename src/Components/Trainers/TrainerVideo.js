import "./TrainerVideo.css"
import VideoImg from "../../assets/Trainers/Video.png";
import BtnBase from "../Buttons/BtnBase";

const TrainerVideo = () => {
  return(
    <div className={"TrainerVideoContainer"}>
      <div className={"TrainerVideoText"}>
        <h3 className={"TrainerSubTitle"}>welcome</h3>
        <h1 className={"TrainerTitle"}>Take a look at my routines</h1>
        <p className={"TrainerDesc"}>It is a long established and fact that a reader will be distracted by the readabled content of a pages when looking at its layout.</p>
      </div>
      <div className={"TrainerVideoContent"}>
        <img src={VideoImg} alt={"Video"} className={"TrainerVideoImg"}/>
        <div className={"TrainerVideoBtnControl"}>
          <BtnBase text={"Book a Class"} className={"BtnGreen"}/>
          <BtnBase text={"More Class"} className={"BtnTransparent"}/>

        </div>

      </div>

    </div>
  )
};export default TrainerVideo