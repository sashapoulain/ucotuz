

import React, { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

import plans from "../data/plans";
import allFeatures from "../data/features";
import FeatureList from "../components/FeautureList";
import PlanForm from "../components/PlanForm";

const Pricing = () => {
  const [activeTabId, setActiveTabId] = useState(plans[0].id);
  const [selectedPlanId, setSelectedPlanId] = useState(plans[0].id);

  const activePlan = plans.find((plan) => plan.id === activeTabId);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Seçilen Paket: ${selectedPlanId}\nİsim: ${formData.name}\nEmail: ${formData.email}`);
  };

  return (
    <div className="container pt-3 pb-5">
      {/* <h2 className="text-center mb-4" style={{ fontSize: "3rem" }}>
        Lorem Ipsum Dolor
      </h2> */}

      <div className="d-md-none d-flex mb-3 gap-2">
        {plans.map((plan) => (
          <button
            key={plan.id}
            className={`btn btn-outline-success flex-fill ${
              activeTabId === plan.id ? "active" : ""
            }`}
            onClick={() => setActiveTabId(plan.id)}
            type="button"
          >
            {plan.name}
          </button>
        ))}
      </div>

      <div className="d-md-none row">
        <div className="col-5 border-end">
          <FeatureList features={allFeatures} className="mobile-features" />
        </div>

        <div className="col-7">
          <div className="card border h-100">
            <div className="card-body d-flex flex-column text-center p-2">
              <div className="mb-3 pb-2 border-bottom">
                <h5 className="text-success mb-2">{activePlan.name}</h5>
                <p className="fw-semibold mb-1">{activePlan.price}</p>
              </div>

              <div style={{ flexGrow: 1 }}>
                {allFeatures.map((feature, i) => {
                  const item = activePlan.features.find((f) => f.label === feature);
                  if (item?.included === true) {
                    return (
                      <div
                        key={i}
                        className="py-2 border-bottom d-flex justify-content-center align-items-center"
                      >
                        <FaCheck color="green" size={18} />
                      </div>
                    );
                  } else if (item?.included === false || item === undefined) {
                    return (
                      <div
                        key={i}
                        className="py-2 border-bottom d-flex justify-content-center align-items-center"
                      >
                        <FaTimes color="red" size={18} />
                      </div>
                    );
                  } else if (item?.included === "select") {
                    return (
                      <div key={i} className="py-2 border-bottom">
                        <select className="form-select form-select-sm">
                          {item.options.map((opt, j) => (
                            <option key={j}>{opt}</option>
                          ))}
                        </select>
                      </div>
                    );
                  }
                  return (
                    <div
                      key={i}
                      className="py-2 border-bottom d-flex justify-content-center align-items-center"
                    >
                      <FaTimes color="red" size={18} />
                    </div>
                  );
                })}
              </div>

              <button
                className={`btn mt-3 rounded-pill ${
                  selectedPlanId === activePlan.id ? "btn-outline-success" : "btn-success"
                }`}
                onClick={() => setSelectedPlanId(activePlan.id)}
                type="button"
              >
                {selectedPlanId === activePlan.id ? (
                  <>
                    <FaCheck className="me-2" /> Seçildi
                  </>
                ) : (
                  "Paket Seç"
                )}
              </button>

              {selectedPlanId === activePlan.id && (
                <PlanForm
                  planId={activePlan.id}
                  formData={formData}
                  handleInputChange={handleInputChange}
                  handleSubmit={handleSubmit}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="d-none d-md-flex row mt-4">
        <div className="col-md-3 border-end mt-3">
          <FeatureList features={allFeatures} className="p-3" />
        </div>

        <div className="col-md-9 d-flex">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`card flex-grow-1 mx-2 ${
                selectedPlanId === plan.id ? "border border-success shadow" : "border"
              }`}
              style={{
                cursor: "pointer",
                minWidth: 0,
                height: selectedPlanId === plan.id ? "800px" : "570px",
                display: "flex",
                flexDirection: "column",
              }}
              onClick={() => setSelectedPlanId(plan.id)}
            >
              <div className="card-body d-flex flex-column text-center flex-grow-1 p-3">
                <div className="mb-3 pb-2 border-bottom">
                  <h3 className="text-success mb-3">{plan.name}</h3>
                  <p className="fw-semibold mb-2">{plan.price}</p>
                </div>

                <div style={{ flexGrow: 1 }}>
                  {allFeatures.map((feature, i) => {
                    const item = plan.features.find((f) => f.label === feature);
                    if (item?.included === true) {
                      return (
                        <div
                          key={i}
                          className="py-2 border-bottom d-flex justify-content-center align-items-center"
                        >
                          <FaCheck color="green" size={20} />
                        </div>
                      );
                    } else if (item?.included === false || item === undefined) {
                      return (
                        <div
                          key={i}
                          className="py-2 border-bottom d-flex justify-content-center align-items-center"
                        >
                          <FaTimes color="red" size={20} />
                        </div>
                      );
                    } else if (item?.included === "select") {
                      return (
                        <div key={i} className="py-2 border-bottom">
                          <select className="form-select form-select-sm">
                            {item.options.map((opt, j) => (
                              <option key={j}>{opt}</option>
                            ))}
                          </select>
                        </div>
                      );
                    }
                    return (
                      <div
                        key={i}
                        className="py-2 border-bottom d-flex justify-content-center align-items-center"
                      >
                        <FaTimes color="red" size={20} />
                      </div>
                    );
                  })}
                </div>

                <button
                  className={`btn mt-3 rounded-pill ${
                    selectedPlanId === plan.id ? "btn-outline-success" : "btn-success"
                  }`}
                  onClick={() => setSelectedPlanId(plan.id)}
                >
                  {selectedPlanId === plan.id ? (
                    <>
                      <FaCheck className="me-2" /> Seçildi
                    </>
                  ) : (
                    "Paket Seç"
                  )}
                </button>

                {selectedPlanId === plan.id && (
                  <PlanForm
                    planId={plan.id}
                    formData={formData}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
