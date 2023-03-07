import React from "react";

const Menu = () => {
  return (
    <div className="menu">
      <input type="checkbox" id="radio" />
      <label htmlFor="radio">
        <div className="menu__btn">
          <span></span>
        </div>
      </label>
      {/* <div className="menu__corner-container"> */}
      {/* <div className="menu__btn-container"> */}
      {/* <input className="menu__input" type="checkbox" id="radio" />
          <label htmlFor="radio">
            <div className="menu__btn">
              <span></span>
            </div>
          </label> */}
      {/* </div> */}
      {/* </div> */}
      <div className="menu__bg"></div>
      <div className="menu__lists">
        {/* 01 */}
        <div className="menu__list ">
          <div className="menu__list-bg"></div>
          <h1>
            01<span></span>ABOUT NATURES
          </h1>
        </div>
        {/* 02 */}
        <div className="menu__list ">
          <div className="menu__list-bg"></div>
          <h1>
            02<span></span>YOUR BENEFITS
          </h1>
        </div>
        {/* 03 */}
        <div className="menu__list ">
          <div className="menu__list-bg"></div>
          <h1>
            03<span></span>POPULAR TOURS
          </h1>
        </div>
        {/* 04 */}
        <div className="menu__list ">
          <div className="menu__list-bg"></div>
          <h1>
            04<span></span>STORIES
          </h1>
        </div>
        {/* 05 */}
        <div className="menu__list ">
          <div className="menu__list-bg"></div>
          <h1>
            05<span></span>BOOK NOW
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Menu;
