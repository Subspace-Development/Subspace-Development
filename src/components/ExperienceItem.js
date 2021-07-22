import React from "react";

export default function ExperienceItem(props) {
  return (
    <div className="experience-item">
      <div className="experience-item-top">
        <span className="experience-item-position">{props.position}</span>
        <span className="experience-item-time muted">
          {props.start} - {props.end}
        </span>
      </div>
      <span className="experience-item-location muted">{props.location}</span>
      <div className="experience-item-details">{props.children}</div>
    </div>
  );
}
