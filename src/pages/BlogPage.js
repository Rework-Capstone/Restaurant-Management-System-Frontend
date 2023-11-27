import "../styles/BlogPage.css";
import menuimg1 from "../assets/images/1.svg";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";
import cardImg1 from "../assets/images/pexels-daniela-constantini-5591664 1.png"
import axios from "axios";


function BlogPage() {
  const blogcarditems = [
    {
      image: cardImg1,
      date: "18 Dec, 2023",
      title: " How to prepare a delicious gluten free sushi"
    },
    {
      image: cardImg1,
      date: "18 Dec, 2023",
      title: " How to prepare a delicious gluten free sushi"
    },
    {
      image: cardImg1,
      date: "18 Dec, 2023",
      title: " How to prepare a delicious gluten free sushi"
    },
    {
      image: cardImg1,
      date: "18 Dec, 2023",
      title: " How to prepare a delicious gluten free sushi"
    },
    {
      image: cardImg1,
      date: "18 Dec, 2023",
      title: " How to prepare a delicious gluten free sushi"
    },
    {
      image: cardImg1,
      date: "18 Dec, 2023",
      title: " How to prepare a delicious gluten free sushi"
    },
    {
      image: cardImg1,
      date: "18 Dec, 2023",
      title: " How to prepare a delicious gluten free sushi"
    },
    {
      image: cardImg1,
      date: "18 Dec, 2023",
      title: " How to prepare a delicious gluten free sushi"
    }
  ]

  const endpointUrl = 'http://localhost:4300/api/v1/food';

  axios.get(endpointUrl)
    .then(response => {
      const data = response.data;
      console.log('Data:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  

  return (
    <div className="blog">
      <div className="blog_top_desc">
        <h1>Our Blog & Articles</h1>
        <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
      </div>
      <div className="blog_section1">
        <div className="blog_grid">
          {blogcarditems.map((item, index) => (
            <BlogCard
              key={index} 
              image={item.image}
              date={item.date}
              title={item.title}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BlogPage;