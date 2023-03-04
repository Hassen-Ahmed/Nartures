import React from "react";

const Explore: React.FC = () => {
  return (
    <div className="explore__container">
      <div className="explore">
        {/* card-01 */}
        <div className="explore__card explore__card-01">
          {/* <img src="" alt="" /> */}
          <span className="material-symbols-outlined">language</span>
          <h2 className="explore__heading">Explore the world</h2>
          <p className="explore__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, fuga
            eius. Cum asperiores voluptatum consectetur!
          </p>
        </div>
        {/* card-02 */}
        <div className="explore__card explore__card-02">
          {" "}
          {/* <img src="" alt="" /> */}
          <span className="material-symbols-outlined">explore</span>
          <h2 className="explore__heading">Explore the world</h2>
          <p className="explore__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, fuga
            eius. Cum asperiores voluptatum consectetur!
          </p>
        </div>
        {/* card-03 */}
        <div className="explore__card explore__card-03">
          {" "}
          {/* <img src="" alt="" /> */}
          <span className="material-symbols-outlined">map</span>
          <h2 className="explore__heading">Explore the world</h2>
          <p className="explore__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, fuga
            eius. Cum asperiores voluptatum consectetur!
          </p>
        </div>
        {/* card-04 */}
        <div className="explore__card explore__card-04">
          {" "}
          {/* <img src="" alt="" /> */}
          <span className="material-symbols-outlined">favorite</span>
          <h2 className="explore__heading">Explore the world</h2>
          <p className="explore__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, fuga
            eius. Cum asperiores voluptatum
          </p>
        </div>
      </div>
    </div>
  );
};

export default Explore;
