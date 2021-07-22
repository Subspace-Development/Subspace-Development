import React from "react";

export default function ResumeSection(props) {
  return (
    <section className="resume-section">
      <h2 className="section-title">{props.title}</h2>
      {props.children}
    </section>
  );
}
