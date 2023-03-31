import "./AboutMain.css";
import AboutMainImgLeft from "../../assets/About/AboutMainL.jpg";


const AboutMain = () => {
  return(
    <div className={"AboutMainContainer"}>
      <div className={"AboutMainContent"}>
        <div className={"AboutMainLeft"}>
          <div className={"AboutMainLCard"}>
            <h3 className={"AboutMainContentLSubTitle"}>wellcome</h3>
            <h1 className={"AboutMainContentLTitle"}>The Story Behind Our Gym</h1>
            <p className={"AboutMainContentLDesc"}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. point of using Lorem Ipsum is</p>
          </div>

          <div className={"AboutMainLCard mt-10"}>
            <h1 className={"AboutMainContentLTitle"}>Story</h1>
            <p className={"AboutMainContentLDesc"}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. point of using Lorem Ipsum is</p>
            <img src={AboutMainImgLeft} alt={"AboutMainImgLeft"} className={"AboutMainImgLeft mt-4 rounded-2xl"}/>
          </div>
        </div>
        <div className={"AboutMainRight"}>
          <div className={"AboutMainRightCard1"}>
            <div>
              <h1 className={"AboutMainRightCardTitle"}>Our Mission</h1>
              <p className={"AboutMainRightCardDesc"}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. point of using Lorem Ipsum is</p>
            </div>
          </div>

          <div className={"AboutMainRightCard2"}>
            <div>
              <h1 className={"AboutMainRightCardTitle2"}>Our Mission</h1>
              <p className={"AboutMainRightCardDesc2"}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. point of using Lorem Ipsum is</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
};export default AboutMain;