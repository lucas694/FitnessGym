import "./CardValues.css";
import CardValue from "../../assets/Cards/CardValueIcon1.svg";

const CardValues = (props) =>{
  const {title, desc, img} = props;
  return(
    <div className={"CardValuesContainer"}>
      <img src={img} alt={"CardValue"} className={"CardValuesIcon"}/>
      <h1 className={"CardValueTitle"}>{title}</h1>
      <p className={"CardValueDesc"}>{desc}</p>

    </div>
  )
};export default CardValues;