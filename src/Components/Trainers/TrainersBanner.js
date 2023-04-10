import "./TrainersBanner.css"

const TrainersBanner = (props) => {
  const {title} = props;
  return(
    <div className={"TrainersBannerContainer"}>
      <h1 className={"TrainersBannerTitle"}>{title ? title :"Meet our Trainers"}</h1>
    </div>
  )
};export default TrainersBanner