import React from "react";

export default function EducationItem(props) {
  return (
    <div className="school">
      <h4 className="degree">{props.degree}</h4>
      <h5 className="meta">{props.school}</h5>
      <div className="time">
        {props.start} - {props.end}
      </div>
    </div>
  );
}
