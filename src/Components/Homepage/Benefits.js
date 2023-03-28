import "./Benefits.css";
import BenefitsImg from "../../assets/Homepage/BenefitsImg.png"
import {BsFillCheckCircleFill} from "react-icons/bs";
import { motion } from "framer-motion";
//Letters animation
import B from "../../assets/Homepage/B.png";
import E from "../../assets/Homepage/E.png";
import N from "../../assets/Homepage/N.png";
import F from "../../assets/Homepage/F.png";
import I from "../../assets/Homepage/I.png";
import T from "../../assets/Homepage/T.png";


const Benefits = () => {
  const BenefitsData = [
    {id:1, title:"lockers", text:"Secure lockers that work by you choosing a four digit code."},
    {id:2, title:"changing rooms", text:"Delicious, protein-packed gourmet shakes that come in chocolate, fruit, vanilla and more. Water and snacks too."},
    {id:3, title:"fuel bar", text:"Mini towels for class and lovely big towels for showers after class. *Amenities may not be available at all studios"},
    {id:4, title:"complimentary towels", text:"Secure lockers that work by you choosing a four digit code."},
    {id:5, title:"wifi & restrooms", text:"Secure lockers that work by you choosing a four digit code."},
    {id:6, title:"hot showers & hair care", text:"what your body craves in the morning, you're not alone. The majority of people crank the handle all the way up."},
  ]
  return(
    <div className={"BenefitsContainer"}>
      <div className={"BenefitsContent"}>
        <div className={"BenefitsLeft"}>
          <div>
            <h3 className={"BenefitsLSubTitle"}>Gym AMENITIES</h3>
            <h1 className={"BenefitsLTitle"}>The Unique Standard</h1>
            <p className={"BenefitsLDesc"}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. point of using Lorem Ipsum is</p>
          </div>
          <div className={"BenefitsImgControl"}>
            <img src={BenefitsImg} alt={"BenefitsImg"} className={"BenefitsImg"}/>
          </div>
        </div>
        <div className={"BenefitsRight"}>
          <hr className={"BenefitsItemLine"}/>
          {BenefitsData.map((item) => {
          return(
            <div className={"BenefitsRItem"}>
              <div className={"BenefitsItemBtn"}>
                <BsFillCheckCircleFill className={"BenefitsItemIcon"}/>
                <p>{item.title}</p>
              </div>
              <p className={"BenefitsItemText"}>{item.text}</p>
              <hr className={"BenefitsItemLine"}/>
            </div>
          )})
          }
        </div>
      </div>
      <div className={"AnimatedTextContainerBenefits"}>
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 10, repeat: Infinity }}
          className={"w-full "}
          style={{ x: "-80%" }}
          initial={{ x: "100%" }}
          offset={-0.1}
        >
          <div className={"AnimatedBoxBenfText"}>
            <img src={B} alt={"B"} className={"TextAnimateBenefitImg"}/>
            <img src={E} alt={"B"} className={"TextAnimateBenefitImg"}/>
            <img src={N} alt={"B"} className={"TextAnimateBenefitImg"}/>
            <img src={E} alt={"B"} className={"TextAnimateBenefitImg"}/>
            <img src={F} alt={"B"} className={"TextAnimateBenefitImg"}/>
            <img src={I} alt={"B"} className={"TextAnimateBenefitImg"}/>
            <img src={T} alt={"B"} className={"TextAnimateBenefitImg"}/>
          </div>
        </motion.div>
      </div>

    </div>
  )
};export default Benefits;