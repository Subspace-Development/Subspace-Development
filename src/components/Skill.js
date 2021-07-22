import React from "react";
import ProgressBar from "./ProgressBar";

export default function Skill(props) {
  return (
    <div className="skill">
      <strong className="skill-name">{props.name}</strong>{" "}
      <ProgressBar value={props.confidence}></ProgressBar>
    </div>
  );
}
