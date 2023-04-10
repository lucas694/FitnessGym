import "./Teams.css";

const Teams = (props) => {
  const {subTitle, Title,cards} = props;

  return(
    <div className={"TeamsContainer"}>
      <h3 className={"TeamsSubTitle"}>{subTitle}</h3>
      <h1 className={"TeamsTitle"}>{Title}</h1>
      <div className={"TeamsCardsContent"}>
        { cards }
      </div>

    </div>
  )
};export default Teams;