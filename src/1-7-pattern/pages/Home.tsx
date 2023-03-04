import React from "react";

const logo = require("../../assets/img/logo-white.png")!;

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="home-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="home__text-box">
        <h1>OUTDOORS</h1>
        <h3>IS WHERE LIFE HAPPENS</h3>
        <div className="home__btn">
          <a href={"4"}>DISCOVER OUR TOURS</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
