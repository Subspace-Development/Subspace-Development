import React from "react";

export default function Project(props) {
  return (
    <p className="project">
      {props.url && (
        <span>
          <a className="project-name" href={props.url}>
            {props.name}
          </a>{" "}
          - <span>{props.children}</span>
        </span>
      )}
      {!props.url && (
        <span>
          <span className="project-name">{props.name}</span> -{" "}
          <span>{String(props.children)}</span>
        </span>
      )}
    </p>
  );
}
