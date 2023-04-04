import "./HomepageClasses.css";
import BtnBase from "../Buttons/BtnBase";
import CardClass from "../Cards/CardClass";
import ClassPilates from "../../assets/Cards/CardClass/ClassPilates.png";
import ClassAerobic from "../../assets/Cards/CardClass/ClassAerobic.png";
import CrossFit from "../../assets/Cards/CardClass/ClassCrossFit.png";


const HomepageClasses = () => {
  const ClassData =[
    {id:1, img:ClassPilates, title:"Pilates Training", description:"Containing Lorem Ipsum passagesand more recently with"},
    {id:2, img:ClassAerobic, title:"Aerobic Training", description:"Containing Lorem Ipsum passagesand more recently with"},
    {id:3, img:CrossFit, title:"CrossFit Workout", description:"Containing Lorem Ipsum passagesand more recently with"},

  ]
  return(
    <div className={"HomepageClassContainer"}>
      <div className={"HomepageClassContent"}>
        <div className={"HomepageClassTop"}>
          <div className={"HomepageClassTopLeft"}>
            <h3 className={"HomepageClassSubTitle"}>OUR FITNESS TRAINING</h3>
            <h1 className={"HomepageClassTitle"}>Upcoming Classes</h1>
          </div>
          <BtnBase text={"More Class"} className={"BtnBlack"}/>
        </div>

        <div className={"HomepageClassCardsContent"}>
          {ClassData.map((item) => {
            return(
              <CardClass key={item.id} img={item.img} title={item.title} description={item.description}/>
            )
          })}
        </div>
      </div>
    </div>
  )
};export default HomepageClasses;