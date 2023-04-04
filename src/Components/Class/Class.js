import "./Class.css"
import ClassBanner from "./ClassBanner";
import ClassMain from "./ClassMain";
import ClassJoin from "./ClassJoin";

const Class = () => {
  return(
    <div className={"ClassContainer"}>
      <ClassBanner/>
      <ClassMain/>
      <ClassJoin/>

    </div>
  )
};export default Class