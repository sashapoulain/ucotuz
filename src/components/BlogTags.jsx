import React from "react";

const tags = [
  "Teknoloji", "Moda", "Sağlık",
  "Spor", "Yemek", "Finans",
  "Eğitim", "Seyahat", "Güzellik"
];

const BlogTags = () => {
  return (
    <div className="p-4 shadow-sm rounded bg-white mt-4">
      <h4 className="text-success mb-3">Etiketler</h4>

      <div className="d-flex flex-wrap">
        {tags.map((tag) => (
          <span
            key={tag}
            className="m-1"
            style={{
              padding: "8px 12px",
              fontSize: "0.9rem",
              whiteSpace: "nowrap",
              flex: "0 0 calc(33.333% - 0.5rem)",
              textAlign: "center",
              border: "1px solid #ccc",
              borderRadius: "9px", 
              color: "#333"
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BlogTags;
