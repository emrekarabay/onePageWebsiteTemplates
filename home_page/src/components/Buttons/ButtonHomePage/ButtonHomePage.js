import React from "react";
import "./ButtonHomePage.scss";
function ButtonHomePage(props) {
  console.log(props);
  return (
    <>
      <button className={`${props.buttonType} ${props.buttonWitdh}`}>
        {props.buttonTitle}
      </button>
    </>
  );
}

export default ButtonHomePage;
