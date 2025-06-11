import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import BlogList from "./BlogList";
import twitterIcon from '../assets/images/socialmedia/x.png'
import linkedinIcon from '../assets/images/socialmedia/linkedin-logo.png'
import facebookIcon from '../assets/images/socialmedia/facebook.png'
import AuthorInfo from "./AuthorInfo";
import CommentForm from "./CommentForm";

const BlogDetail = () => {
   const { id } = useParams();
   const [blog, setBlog] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      setLoading(true);
      setError(null);

      try {
         const foundBlog = blogPosts.find((item) => item.id === parseInt(id));

         if (!foundBlog) {
            setError("Blog bulunamadı.");
         } else {
            setBlog(foundBlog);
         }
      } catch (err) {
         console.error(err); 
         setError("Bir hata oluştu.");
      } finally {
         setLoading(false);
      }
   }, [id]);

   if (loading) return <div>Yükleniyor...</div>;

   if (error) return <div className="text-danger">{error}</div>;

   if (!blog) return null;

   return (
      <div>
         <div className="bg-white shadow-sm rounded p-4 mb-4">
            <h2 className="mb-3">{blog.title}</h2>
            <div className="d-flex align-items-center gap-3 mb-3 flex-wrap">
               <img
                  src={blog.authorImage}
                  alt={blog.author}
                  className="rounded-circle"
                  width="40"
                  height="40"
               />
               <span className="fw-semibold">{blog.author}</span>
               <span className="text-muted small d-flex align-items-center">
                  <FaCalendarAlt className="me-1" /> {blog.date}
               </span>
               <span className="text-muted small d-flex align-items-center">
                  <FaClock className="me-1" /> {blog.readTime}
               </span>
            </div>

            <img
               src={blog.image}
               alt={blog.title}
               className="img-fluid rounded mb-3"
            />

            <p className="text-muted">
               {blog.description} <br /><br />
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
               doloremque inventore quas? Quo placeat sequi fugit beatae
               reprehenderit tempora.
            </p>

            <hr />
            <div className="d-flex justify-content-between align-items-center flex-wrap">
               <span className="badge bg-success text-white">{blog.tag}</span>
               <div className="d-flex align-items-center gap-2 mt-2 mt-md-0">
                  <span className="me-2 text-muted small fw-semibold">Paylaş:</span>
                  <a href="#"><img src={facebookIcon} alt="Facebook" style={{ width: "24px" }} /></a>
                  <a href="#"><img src={twitterIcon} alt="Twitter" style={{ width: "24px" }} /></a>
                  <a href="#"><img src={linkedinIcon} alt="LinkedIn" style={{ width: "24px" }} /></a>
               </div>
            </div>
         </div>

         <div className="bg-white shadow-sm rounded p-4">
            <AuthorInfo
               author={blog.author}
               authorImage={blog.authorImage}
               authorBio={blog.authorBio}
            />
         </div>

         <div className="bg-white shadow-sm rounded p-4">
            <CommentForm />
         </div>

         <div className="mt-4">
            <h5 className="mb-3">Diğer Yazılar</h5>
            <BlogList showFeatured={false} />
         </div>
      </div>
   );
};

export default BlogDetail;
