import React, { useState } from "react";

const tags = [
  "Teknoloji", "Moda", "Sağlık",
  "Spor", "Yemek", "Finans",
  "Eğitim", "Seyahat", "Güzellik"
];

const BlogTags = ({ onTagSelect }) => {
  const [selectedTag, setSelectedTag] = useState(null);

  const handleTagClick = (tag) => {
    const newTag = tag === selectedTag ? null : tag;
    setSelectedTag(newTag);
    onTagSelect?.(newTag); // Parent'e bildir
  };

  return (
    <div className="p-4 shadow-sm rounded bg-white mt-4">
      <h4 className="text-success mb-3">Etiketler</h4>

      <div className="d-flex flex-wrap">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`m-1 btn btn-sm ${tag === selectedTag ? 'btn-success text-white' : 'btn-outline-success'}`}
            style={{
              whiteSpace: "nowrap",
              flex: "0 0 calc(33.333% - 0.5rem)",
              textAlign: "center",
              borderRadius: "9px"
            }}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogTags;
