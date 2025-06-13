import React from "react";

const FeatureList = ({ features, title = "Özellikler", className = "" }) => {
  return (
    <div className={`p-2 ${className}`}>
      <h5 className="text-success mb-3">{title}</h5>
      {features.map((feature, idx) => (
        <div
          key={idx}
          className="py-2 border-bottom"
          style={{ fontWeight: "500", fontSize: "0.95rem" }}
        >
          {feature}
        </div>
      ))}
    </div>
  );
};

export default FeatureList;
