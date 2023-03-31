import "./AboutValues.css";
import BtnBase from "../Buttons/BtnBase";
import CardValues from "../Cards/CardValues";
import CardValue from "../../assets/Cards/CardValueIcon1.svg";
import CardValue2 from "../../assets/Cards/CardValueIcon2.svg";
import CardValue3 from "../../assets/Cards/CardValueIcon3.svg";


const AboutValues = () => {
  const CardsData = [
    {id:1, title:"Certified trainer", desc:"Bring to the table win survival strategies ensure proactive new domination.", img:CardValue},
    {id:2, title:"Nutrition & diet", desc:"Bring to the table win survival strategies ensure proactive new domination.", img:CardValue2},
    {id:3, title:"Years of experience", desc:"Bring to the table win survival strategies ensure proactive new domination.", img:CardValue3},
  ]
  return(
    <div className={"AboutValuesContainer"}>
      <div className={"AboutValuesContent"}>
        <section className={"AboutValuesSec"}>
          <div className={"AboutValuesSecLeft"}>
            <h3 className={"AboutValuesSubTitle"}>Values</h3>
            <h1 className={"AboutValuesTitle"}>My core work values</h1>
          </div>
          <div className={"AboutValuesSecRight"}>
            <BtnBase text={"Book a Class"} className={"BtnGreen w-auto"}/>
          </div>
        </section>

        <div className={"AboutValuesCardsContent"}>
          {CardsData.map((item) => {
            return(
              <CardValues title={item.title} desc={item.desc} img={item.img}/>
            )
          })}
        </div>
      </div>

    </div>
  )
};export default AboutValues;