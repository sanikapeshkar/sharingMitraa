import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import "./stylepage.scss";
import blog1 from "../images/thankyou.jpg";
import blog2 from "../images/blog2.jpg";
import blog3 from "../images/blog3.jpg";
import supabase from "../supabase";
import { useEffect } from "react";

function Blogs() {
  const [posts, setPost] = useState([]);
  async function Fetchblog() {
    let { data: posts, error } = await supabase.from("Blog_posts").select("*");
    console.log(posts);
    setPost(posts);
  }
  useEffect(() => {
    Fetchblog();
  }, []);

  if (!posts.length) {
    return (
      <img
        src={blog1}
        alt="Sunset in the mountains"
        style={{ height: "400px", width: "100%" }}
      />
    );
  }
  return (
    <>
      <Navbar />
       <h1>BLOGS</h1>
      <div className="blog-main">
        {posts.map((blog,key) => (
          <div className="blog">
            <img
              src={blog2}
              alt="Sunset in the mountains"
              style={{ height: "400px", width: "100%" }}
            />

            <div className="blog-content">
              <div className="title">
                {blog.title}
              </div>
              <p className="desc1">
              {blog.content}
              </p>

              <a
                href={blog.links}
                target="_blank"
              >
                Read More...
              </a>
            </div>
          </div>
        ))}

      </div>
      <Footer />
    </>
  );
}

export default Blogs;
