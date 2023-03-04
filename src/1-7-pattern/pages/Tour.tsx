import React from "react";

const imageOne: string = require("../../assets/img/nat-1.jpg");
const imageTwo: string = require("../../assets/img/nat-2.jpg");
const imageThree: string = require("../../assets/img/nat-3.jpg");

const Tour: React.FC = () => {
  return (
    <div className="tour-container">
      <div className="tour">
        <div className="heading tour__heading">
          <h1>EXITING TOURS FOR ADVENTUROUS POEPLE</h1>
        </div>
        <div className="tour__left-right">
          {/* left side */}
          <div className="tour__left">
            <h2 className="tour__left-heading">
              YOU'RE GOING TO FALL IN LOVE WITH NATURE
            </h2>
            <p className="tour__para">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam,
              temporibus! Veritatis dicta aut ex animi minima saepe cumque
              libero labore. temporibus! Veritatis dicta aut ex animi minima
              saepe cumque libero labore. saepe cumque libero labore.
            </p>
            <h2 className="tour__left-heading">
              LIVE ADVENTURES LIKE YOU HAVE NEVER BEFORE
            </h2>
            <p className="tour__para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Aspernatur amet
              dolore asperiores nesciunt necessitatibus. Eaque.
            </p>
            <div className="tour__btn">
              <button>Learn more &rarr;</button>
            </div>
          </div>
          {/* right side  */}
          <div className="tour__right">
            <div className="tour__image-container">
              <div className="tour__image tour__image-01">
                <img src={imageOne} alt="tour" />
              </div>
              <div className="tour__image tour__image-02">
                <img src={imageTwo} alt="tour" />
              </div>
              <div className="tour__image tour__image-03">
                <img src={imageThree} alt="tour" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
