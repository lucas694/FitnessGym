import "./CardClass.css"
import ClassAerobic from "../../assets/Cards/CardClass/ClassPilates.png";

const CardClass = (props) => {
  const {id, img, title, description} = props;
  return(

    <div className={"CardClassContainer"}>
      <img src={img} alt={"ClassAerobic"} className={"CardClassImg"} />
      <div className={"CardClassInf"}>
        <h1 className={"CardClassTitle"}>{title}</h1>
        <p className={"CardClassDesc"}>{description}</p>
        <a href={"#"} className={"CardClassLink"}>Read More</a>
      </div>
    </div>
  )
};export default CardClass;