import React, { useEffect, useState } from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogList = ({ showFeatured = true }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      import("../data/blogData").then((module) => {
        setPosts(module.blogPosts);
        setLoading(false);
      });
    } catch (err) {
      console.error("Blog verisi alınırken hata:", err);
      setError("Blog listesi yüklenemedi.");
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div className="text-center text-muted">Yükleniyor...</div>;
  }

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <div className="row">
      {showFeatured && featuredPost && (
        <div className="col-12 mb-4 mt-3 mt-md-0">
          <div className="d-flex flex-column flex-md-row gap-3 p-3 shadow-sm bg-white rounded">
            <div>
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="rounded img-fluid d-none d-md-block"
                style={{ width: "160px", height: "120px", objectFit: "cover" }}
              />
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="rounded img-fluid d-block d-md-none mb-2"
              />
            </div>
            <div className="flex-grow-1">
              <h5>{featuredPost.title}</h5>
              <p className="text-muted small">{featuredPost.description}</p>
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div className="small text-muted d-flex gap-3">
                  <span><FaCalendarAlt className="me-1" />{featuredPost.date}</span>
                  <span><FaClock className="me-1" />{featuredPost.readTime}</span>
                </div>
                <Link to={`/blog/${featuredPost.id}`} className="btn btn-sm btn-outline-success mt-2 mt-md-0">
                  Devamı →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="p-2 rounded">
        <div className="row">
          {otherPosts.map((post) => (
            <div key={post.id} className="col-md-6 col-xl-4 mb-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <img
                  src={post.image}
                  className="card-img-top w-100"
                  alt={post.title}
                  style={{ height: "auto", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h6 className="card-title mt-4">{post.title}</h6>
                  <p className="card-text text-muted small flex-grow-1">{post.description}</p>
                  <div className="d-flex justify-content-between align-items-center mt-2 small text-muted" style={{ fontSize: "0.73rem" }}>
                    <div className="d-flex gap-3 align-items-center">
                      <span><FaCalendarAlt className="me-1" />{post.date}</span>
                      <span><FaClock className="me-1" />{post.readTime}</span>
                    </div>
                    <Link to={`/blog/${post.id}`} className="btn btn-sm btn-outline-success">
                      Devamı →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
