

import React from "react";
import { Outlet } from "react-router-dom";
import BlogCategories from "../components/BlogCategories";
import TrendNewsSlider from "../components/TrendNewsSlider";
import BlogTags from "../components/BlogTags";
import BlogBanner from "../components/BlogBanner";
import BlogList from "../components/BlogList";
import blogCats from "../data/blogCategories";

const Blog = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4">
          <BlogCategories categories={blogCats}/>
          <TrendNewsSlider />
          <BlogTags />
          <BlogBanner />
        </div>
        <div className="col-md-8">
          <Outlet /> 

        </div>
      </div>
    </div>
  );
};

export default Blog;
