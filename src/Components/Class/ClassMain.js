import "./ClassMain.css";
import ClassPilates from "../../assets/Cards/CardClass/ClassPilates.png";
import ClassAerobic from "../../assets/Cards/CardClass/ClassAerobic.png";
import CrossFit from "../../assets/Cards/CardClass/ClassCrossFit.png";
import ClassYoga from "../../assets/Cards/CardClass/ClassYoga.png";
import ClassBox from "../../assets/Cards/CardClass/ClassBox.png";
import ClassDance from "../../assets/Cards/CardClass/ClassDance.png";
import CardClass from "../Cards/CardClass";

const ClassMain = () => {
  const ClassData =[
    {id:1, img:ClassPilates, title:"Pilates Training", description:"Containing Lorem Ipsum passagesand more recently with"},
    {id:2, img:ClassAerobic, title:"Aerobic Training", description:"Containing Lorem Ipsum passagesand more recently with"},
    {id:3, img:CrossFit, title:"CrossFit Workout", description:"Containing Lorem Ipsum passagesand more recently with"},
    {id:4, img:ClassYoga, title:"Yoga As Therapy", description:"Containing Lorem Ipsum passagesand more recently with"},
    {id:5, img:ClassBox, title:"Boxing", description:"Containing Lorem Ipsum passagesand more recently with"},
    {id:6, img:ClassDance, title:"Energy Dance", description:"Containing Lorem Ipsum passagesand more recently with"},
  ]
  return(
    <div className={"ClassMainContainer"}>
      <div className={"ClassMainContent"}>
        <h3 className={"ClassMainSubTitle"}>Our Trainers</h3>
        <h1 className={"ClassMainTitle"}>Upcoming Classes</h1>

        <div className={"ClassMainCardsContent"}>
          {ClassData.map((item) => {
            return(
              <CardClass key={item.id} img={item.img} title={item.title} description={item.description}/>
            )
          })}
        </div>
      </div>
    </div>
  )
};export default ClassMain