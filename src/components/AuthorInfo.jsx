import React from "react";

const AuthorInfo = ({ author, authorImage, authorBio }) => {
  return (
    <>
      <hr className="my-2" />
      <div className="d-flex gap-3 align-items-start mt-4">
        <img
          src={authorImage}
          alt={author}
          className="rounded-circle"
          style={{ width: "64px", height: "64px", objectFit: "cover" }}
        />

        <div>
          <h6 className="mb-1" style={{color: '#0d6b4c'}}>{author}</h6>
          <p className="text-muted small mb-1">306 Yorum – 2012 yılından beri</p>
          <p className="text-muted small">
            {authorBio || "Yazar hakkında kısa tanıtım metni buraya gelebilir..."}
          </p>
        </div>
      </div>
      <hr className="my-2" />

    </>
  );
};

export default AuthorInfo;
