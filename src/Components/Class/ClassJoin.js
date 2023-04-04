import "./ClassJoin.css";
import BtnBase from "../Buttons/BtnBase";

const ClassJoin = () => {
  return(
    <div className={"ClassJoinContainer"}>
      <div className={"ClassJoinContent"}>
        <div className={"ClassJoinMain"}>
          <h1 className={"ClassJoinTitle"}>Join Our Club</h1>
          <p className={"ClassJoinDesc"}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. point of using Lorem Ipsum is</p>
          <div className={"ClassJoinBtnControl"}>
            <BtnBase text={"Start Now"} className={"BtnGreen"}/>
          </div>
        </div>
      </div>

    </div>
  )
};export default ClassJoin