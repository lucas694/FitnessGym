import "./Blog.css";
import BlogBanner from "./BlogBanner";
import BlogMain from "./BlogMain";

const Blog = () => {
  return(
    <div className={"BlogContainer"}>
      <BlogBanner/>
      <BlogMain/>

    </div>
  )
};export default Blog;