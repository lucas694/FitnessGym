import "./BlogHp.css";
import BtnBase from "../Buttons/BtnBase";

const BlogHp = () => {
  return(
    <div className={"BlogHpContainer"}>
      <div className={"BlogHpTitleControl"}>
        <h1 className={"BlogHpTitle"}>Articles & News</h1>
      </div>
      <div className={"BlogHpContent"}>
        <div className={"BlogHpPost"}>
          <div className={"BlogHpPostDateControl"}>
            <h3 className={"BlogHpPostDate"}>March 23, 2022</h3>
            <p className={"BlogHpPostTag"}>Fitness</p>
          </div>
          <h1 className={"BlogHpPostTitle"}>The 10 best exercises to do in your park</h1>
          <p className={"BlogHpPostDesc"}>There are many variations of passages of Lorem Ipsum available, but the majority have alterationLorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse .</p>
          <div className={"BlogHpPostBtnControl"}>
            <BtnBase text={"Read More"} className={"BtnWhite"}/>
          </div>
        </div>
        <div className={"BlogHpPost"}>
          <div className={"BlogHpPostDateControl"}>
            <h3 className={"BlogHpPostDate"}>March 23, 2022</h3>
            <p className={"BlogHpPostTag"}>Fitness</p>
          </div>
          <h1 className={"BlogHpPostTitle"}>The 10 best exercises to do in your park</h1>
          <p className={"BlogHpPostDesc"}>There are many variations of passages of Lorem Ipsum available, but the majority have alterationLorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse .</p>
          <div className={"BlogHpPostBtnControl"}>
            <BtnBase text={"Read More"} className={"BtnWhite"}/>
          </div>
        </div>
        <div className={"BlogHpPostAlternative"}>
          <div className={"BlogHpPostDateControl"}>
            <h3 className={"BlogHpPostDateAlternative"}>March 23, 2022</h3>
            <p className={"BlogHpPostTagAlternative"}>Fitness</p>
          </div>
          <h1 className={"BlogHpPostTitleAlternative"}>The 10 best exercises to do in your park</h1>
          <p className={"BlogHpPostDescAlternative"}>There are many variations of passages of Lorem Ipsum available, but the majority have alterationLorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse .</p>
          <div className={"BlogHpPostBtnControl"}>
            <BtnBase text={"Read More"} className={"BtnGreen"}/>
          </div>
        </div>
      </div>


    </div>
  )
};export default BlogHp;