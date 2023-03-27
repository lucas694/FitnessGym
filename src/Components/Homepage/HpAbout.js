import "./HpAbout.css";
import AboutHp from "../../assets/Homepage/AboutHp.png";
import AboutHpCard1 from "../../assets/Homepage/HpAboutCard1.png"
import AboutHpCard2 from "../../assets/Homepage/HpAboutCard2.png"

const HpAbout = () => {
  return(
    <div className={"HpAboutContainer"}>
      <div className={"HpAboutContent"}>
        <div className={"HpAboutLeft"}>
          <div className={"HpAboutLeftMain"}>
            <h3 className={"HpAboutSubtitle"}>About</h3>
            <h1 className={"HpAboutTitle"}>Respect Your Body, It’s the Only One You Get</h1>
            <p className={"HpAboutDesc"}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. point of using Lorem Ipsum is</p>
            {/*Card*/}
            <div className={"HpAboutCard"}>
              <div className={"HpAboutCardLeft"}>
                <h1 className={"AboutHpCardTitle"}>Motivation</h1>
                <p className={"AboutHpCardDesc"}>It is a long established fact that a reader will be distracted </p>
              </div>
              <div className={"HpAboutCardRight"}>
                <img src={AboutHpCard1} alt={"AboutHpCard1"} className={"AboutHpCard1Img"}/>
              </div>
            </div>
            {/*Card*/}
            <div className={"HpAboutCard "}>
              <div className={"HpAboutCardLeft"}>
                <img src={AboutHpCard2} alt={"AboutHpCard1"} className={"AboutHpCard1Img"}/>
              </div>
              <div className={"HpAboutCardRight"}>
                <h1 className={"AboutHpCardTitle"}>Inspire</h1>
                <p className={"AboutHpCardDesc"}>Will Be Distracted By Readable Content Using Lorem Ipsum</p>
              </div>
            </div>
            {/**/}
          </div>
        </div>
        <div className={"HpAboutRight"}>
          <img src={AboutHp} alt={"AboutHp"} className={"AboutHpImg"}/>
        </div>
      </div>
    </div>
  )
};export default HpAbout;