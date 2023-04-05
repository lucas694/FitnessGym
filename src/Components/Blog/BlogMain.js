import "./BlogMain.css";
import CardsBlog from "../Cards/CardsBlog";
import CardPost1 from "../../assets/Cards/CardBlog/BlogPost1.png"
import CardPost2 from "../../assets/Cards/CardBlog/BlogPost2.png"
import CardPost3 from "../../assets/Cards/CardBlog/BlogPost3.png"
import CardPost4 from "../../assets/Cards/CardBlog/BlogPost4.png"
import CardPost5 from "../../assets/Cards/CardBlog/BlogPost5.png"
import CardPost6 from "../../assets/Cards/CardBlog/BlogPost6.png"
import CardPoster1 from "../../assets/Cards/CardBlog/BlogPoster1.png"
import CardPoster2 from "../../assets/Cards/CardBlog/BlogPoster2.png"
import CardPoster3 from "../../assets/Cards/CardBlog/BlogPoster3.png"
import CardPoster4 from "../../assets/Cards/CardBlog/BlogPoster4.png"
import CardPoster5 from "../../assets/Cards/CardBlog/BlogPoster5.png"
import CardPoster6 from "../../assets/Cards/CardBlog/BlogPoster6.png"

const BlogMain = () => {
  const CardBlogData = [
    {id:1, img:CardPost1, date:"March 22, 2022", data1:"Fitness", data2:"Health", title:"The 10 best exercises to do in your park", posterImg:CardPoster1, posterName:"Jacob Cornish"},
    {id:2, img:CardPost2, date:"March 22, 2022", data1:"Fitness", data2:"Health", title:"How to Choose The Right Equipment For You", posterImg:CardPoster2, posterName:"Benjamin Gray"},
    {id:3, img:CardPost3, date:"March 22, 2022", data1:"Fitness", data2:"Health", title:"How to Maximum Time Spent at the Gym", posterImg:CardPoster3, posterName:"David Ferguson"},
    {id:4, img:CardPost4, date:"March 22, 2022", data1:"Fitness", data2:"Health", title:"Simple Condition for all Around Fitness.", posterImg:CardPoster4, posterName:"William Wilkins"},
    {id:5, img:CardPost5, date:"March 22, 2022", data1:"Fitness", data2:"Health", title:"How to Modify any Program to Improve Your Weakness", posterImg:CardPoster5, posterName:"Floyid Miles"},
    {id:6, img:CardPost6, date:"March 22, 2022", data1:"Fitness", data2:"Health", title:"The Beginner's Guide to Weight Lifting", posterImg:CardPoster6, posterName:"Bernadette"},
  ]
  return(
    <div className={"BlogMainContainer"}>
      <div className={"BlogMainContent"}>
        <div className={"BlogMainTop"}>
          <h3 className={"BlogMainSubTitle"}>Blog</h3>
          <h1 className={"BlogMainTitle"}>Articles & News</h1>
        </div>
        <div className={"BlogMainCardsContent"}>
          {CardBlogData.map((item) => {
            return(
              <CardsBlog key={item.id} img={item.img} date={item.date} data1={item.data1} data2={item.data2} title={item.title} posterImg={item.posterImg} posterName={item.posterName}/>
            )})
          }

        </div>

      </div>

    </div>
  )
};export default BlogMain;
