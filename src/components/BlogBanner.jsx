import React from "react";

const BlogBanner = () => {
  return (
    <div
      className="w-100 mt-4"
      style={{
        height: "120px",
        backgroundColor: "#f8f9fa",
        border: "1px dashed #ccc",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#999",
        fontStyle: "italic"
      }}
    >
      Reklam Alanı
    </div>
  );
};

export default BlogBanner;
