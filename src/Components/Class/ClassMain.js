import "./ClassMain.css";
import CardClass from "../Cards/CardClass";
import {Link} from "react-router-dom";
import {getClassData} from "../Utils/Utils";

const ClassMain = () => {
  const ClassData = getClassData();
  return(
    <div className={"ClassMainContainer"}>
      <div className={"ClassMainContent"}>
        <h3 className={"ClassMainSubTitle"}>Our Trainers</h3>
        <h1 className={"ClassMainTitle"}>Upcoming Classes</h1>

        <div className={"ClassMainCardsContent"}>
          {ClassData.map((item) => {
            return(
              <Link to={`/class/${item.id}`} key={item.id}>
                <CardClass key={item.id} img={item.img} title={item.title} description={item.description}/>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
};export default ClassMain