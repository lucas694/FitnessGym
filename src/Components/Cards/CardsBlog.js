import "./CardsBlog.css";
import CardBlog from "../../assets/Cards/CardBlog/BlogPost1.png"
import CardImg from "../../assets/Cards/CardBlog/BlogPoster1.png"

const CardsBlog = (props) => {
  const {img, date, data1, data2, title, posterImg, posterName} = props;
  return(
    <div className={"CardBlogContainer"}>
      <img src={img} alt={""} className={"CardBlogImg"} />
      <div className={"CardBlogData"}>
        <p className={"CardBlogDate"}>{date}</p>
        <p className={"CardBlogDataText"}>{data1}</p>
        <p className={"CardBlogDataText"}>{data2}</p>
      </div>
      <h1 className={"CardBlogTitle"}>{title}</h1>
      <div className={"CardBlogPoster"}>
        <img src={posterImg} alt={""} className={"CardBlogPosterImg"} />
        <p className={"CardBlogPosterName"}>{posterName}</p>

      </div>

    </div>
  )
};export default CardsBlog;