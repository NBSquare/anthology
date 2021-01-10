import React from "react";
import "./css/Jumbotron.css";

const Jumbotron = ({ text, buttonText, backgroundImage }) => {
  let button;
  if (buttonText) {
    button = <button class="jumboChild btn btn-primary mt-4">{buttonText}</button>;
  }
  return (
    <div
      className="jumboWrapper d-flex flex-column align-items-center justify-content-center"
      style={{
        "background-image": `url(${backgroundImage})`,
      }}
    >
      <h1 className="jumboChild text-center text-light mb-3">{text}</h1>
      {button}
    </div>
  );
};

export default Jumbotron;
