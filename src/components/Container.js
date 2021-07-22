import React from "react";

export default function Container(props) {
  return (
    <div className="container-block">
      {props.title && <h2 className="container-title">{props.title}</h2>}
      {props.children}
    </div>
  );
}
