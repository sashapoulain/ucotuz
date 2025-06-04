import React, { useState } from "react";

const CommentForm = () => {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ comment, name, email });
    alert("Yorum gönderildi!");
    setComment("");
    setName("");
    setEmail("");
  };

  return (
    <div className="bg-light p-4 rounded shadow-sm mt-4">
      <h5 className="mb-3">Yorum Yapın</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="comment" className="form-label">Yorumunuz</label>
          <textarea
            id="comment"
            className="form-control"
            rows="4"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="name" className="form-label">İsim</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <button type="submit" className="btn btn-success">Gönder</button>
      </form>
    </div>
  );
};

export default CommentForm;
