import React from "../../../node_modules/react";
import "./style.css";

function CardBtn(props) {
  return (
    <button onClick={props.onClick} className={`card-btn ${props["data-value"]}`} {...props} />
  );
}

export default CardBtn;
