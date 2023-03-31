import "./AboutVideoDemo.css";
import VideoDemoImg from "../../assets/About/VideoDemoImg.jpg";
import {motion} from "framer-motion";

// Letters animation
import O from "../../assets/About/o.png"
import U from "../../assets/About/u.png"
import R from "../../assets/About/r.png"
import F from "../../assets/About/f.png"
import A from "../../assets/About/a.png"
import C from "../../assets/About/c.png"
import I from "../../assets/About/i.png"
import L from "../../assets/About/l.png"
import T from "../../assets/About/t.png"
import E from "../../assets/About/e.png"
import S from "../../assets/About/s.png"
import PlayButton from "../../assets/About/PLay Button.png"


const AboutVideoDemo = () => {
  return(
    <div className={"AboutVideoDemoContainer"}>
      <img src={VideoDemoImg} alt={"VideoDemoImg"} className={"VideoDemoImg"}/>
      <div className={"AnimatedTextContainerVideoDemo"}>
        <motion.div
          animate={{ x: ["-100%", "110%"] }}
          transition={{ duration: 10, repeat: Infinity }}
          className={"w-full "}
          style={{ x: "-80%" }}
          initial={{ x: "100%" }}
          offset={-0.1}
        >
          <div className={"AnimatedBoxVideoDemo"}>
            <img src={O} alt={"B"} className={"VideoDemoImgAnimated"}/>
            <img src={U} alt={"B"} className={"VideoDemoImgAnimated"}/>
            <img src={R} alt={"B"} className={"VideoDemoImgAnimated"}/>
            <img src={PlayButton} alt={"B"} className={"VideoDemoImgAnimated"}/>

            <img src={F} alt={"B"} className={"VideoDemoImgAnimated"}/>
            <img src={A} alt={"B"} className={"VideoDemoImgAnimated"}/>
            <img src={C} alt={"B"} className={"VideoDemoImgAnimated"}/>
            <img src={I} alt={"B"} className={"VideoDemoImgAnimated"}/>
            <img src={L} alt={"B"} className={"VideoDemoImgAnimated"}/>
            <img src={I} alt={"B"} className={"VideoDemoImgAnimated"}/>
            <img src={T} alt={"B"} className={"VideoDemoImgAnimated"}/>
            <img src={I} alt={"B"} className={"VideoDemoImgAnimated"}/>
            <img src={E} alt={"B"} className={"VideoDemoImgAnimated"}/>
            <img src={S} alt={"B"} className={"VideoDemoImgAnimated"}/>
          </div>
        </motion.div>
      </div>
    </div>
  )
};export default AboutVideoDemo;
