import "../styles/BlogPage.css";
import menuimg1 from "../assets/images/1.svg";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";






function BlogPage() {
  return (
    <div className="blog">
      <div className="blog_top_desc">
        <h1>Our Blog & Articles</h1>
        <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
      </div>
      <div className="blog_section1">
        <div className="blog_grid">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default BlogPage;