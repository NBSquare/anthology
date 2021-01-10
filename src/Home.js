import React from "react";
import Jumbotron from "./Jumbotron";
import backgroundImage from './placeholder.jpg';

const Home = () => {
  return (
    <Jumbotron
      text="Welcome to the Future of Entertainment"
      buttonText="Start Now"
      backgroundImage={backgroundImage}
    />
  );
};

export default Home;
