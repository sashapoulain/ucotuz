import React from "react";

const PlanForm = ({ planId, formData, handleInputChange, handleSubmit }) => {
  return (
    <form className="mt-3 text-start" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor={`name-${planId}`} className="form-label">
          İsim
        </label>
        <input
          type="text"
          className="form-control"
          id={`name-${planId}`}
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor={`email-${planId}`} className="form-label">
          E-posta
        </label>
        <input
          type="email"
          className="form-control"
          id={`email-${planId}`}
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-success">
        Gönder
      </button>
    </form>
  );
};

export default PlanForm;
