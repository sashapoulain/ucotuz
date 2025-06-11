import React, { useState } from "react";

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const CommentForm = () => {
  const [form, setForm] = useState({ comment: "", name: "", email: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!form.comment.trim() || form.comment.length < 10) {
      newErrors.comment = "Yorum en az 10 karakter olmalı.";
    }
    if (!form.name.trim() || form.name.length < 2) {
      newErrors.name = "İsim en az 2 karakter olmalı.";
    }
    if (!validateEmail(form.email)) {
      newErrors.email = "Geçerli bir email giriniz.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: null });
    setErrorMessage("");
  };

  const sendCommentToBackend = async (data) => {
      console.log("Gönderilen veri:", data);

    return new Promise((resolve) => setTimeout(() => resolve({ success: true }), 1500));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    if (!validate()) return;

    setLoading(true);
    try {
      const result = await sendCommentToBackend(form);
      if (result.success) {
        setSuccessMessage("Yorumunuz başarıyla gönderildi!");
        setForm({ comment: "", name: "", email: "" });
      } else {
        setErrorMessage("Yorum gönderilirken bir sorun oluştu.");
      }
    } catch (error) {
      setErrorMessage(error.message || "Sunucu ile bağlantı kurulamadı.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-light p-4 rounded shadow-sm mt-4">
      <h5 className="mb-3">Yorum Yapın</h5>

      {errorMessage && (
        <div className="alert alert-danger" role="alert" aria-live="assertive">
          {errorMessage}
        </div>
      )}

      {successMessage && (
        <div className="alert alert-success" role="alert" aria-live="polite">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="comment" className="form-label">Yorumunuz</label>
          <textarea
            id="comment"
            name="comment"
            className={`form-control ${errors.comment ? "is-invalid" : ""}`}
            rows="4"
            value={form.comment}
            onChange={handleChange}
            aria-describedby="commentHelp"
            disabled={loading}
          ></textarea>
          {errors.comment && <div className="invalid-feedback">{errors.comment}</div>}
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="name" className="form-label">İsim</label>
            <input
              type="text"
              id="name"
              name="name"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              value={form.name}
              onChange={handleChange}
              disabled={loading}
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              value={form.email}
              onChange={handleChange}
              disabled={loading}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
        </div>

        <button type="submit" className="btn btn-success" disabled={loading}>
          {loading ? "Gönderiliyor..." : "Gönder"}
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
