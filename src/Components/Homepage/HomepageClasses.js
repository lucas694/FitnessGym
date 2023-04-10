import "./HomepageClasses.css";
import BtnBase from "../Buttons/BtnBase";
import CardClass from "../Cards/CardClass";
import {getClassData} from "../Utils/Utils";

const HomepageClasses = () => {
  const ClassData = getClassData();
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
          {ClassData.slice(0, 3).map((item) => {
            return(
              <CardClass key={item.id} img={item.img} title={item.title} description={item.description}/>
            )
          })}
        </div>
      </div>
    </div>
  )
};export default HomepageClasses;