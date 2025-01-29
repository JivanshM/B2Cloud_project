import React from "react";
import "./ProcessSection.css"; // Ensure your CSS file matches this name

const ProcessSection = () => {
  const steps = [
    {
      icon: "💡",
      title: "Ideate",
      description:
        "The ideation process is a crucial phase in the design process where creative thinking and brainstorming occur.",
    },
    {
      icon: "✉️",
      title: "Research",
      description:
        "Research is a critical component of the design process, helping designers understand the problem.",
    },
    {
      icon: "⚙️",
      title: "Create",
      description:
        "Designing a process involves several key steps to ensure clarity, efficiency, and successful implementation.",
    },
    {
      icon: "✔️",
      title: "Testing",
      description:
        "Testing is a crucial phase in the design process to ensure that the product or system meets the specified requirements.",
    },
  ];

  return (
    <section className="process-section">
      <h2 className="process-title">Process</h2>
      <h3 className="process-subtitle">
        Process that moves <br /> things forward
      </h3>
      <div className="process-steps">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <div className="icon">{step.icon}</div>
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
