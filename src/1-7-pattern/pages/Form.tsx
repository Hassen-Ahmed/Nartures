import React from "react";

const bgPic: string = require("../../assets/img/nat-10.jpg");

const Form: React.FC = () => {
  return (
    <div className="form">
      <div className="form__big-container">
        <img src={bgPic} alt="pic" />
        <div className="form__container">
          <div className="form__left">
            <div className="heading form__heading">
              <h1>START BOOKING NOW!</h1>
            </div>
            <div className="form__inputs">
              <div className="form__input form__input-01">
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  id="fullname"
                />
                <label htmlFor="fullname">Full Name</label>
              </div>
              <div className="form__input form__input-01">
                <input
                  type="email"
                  required
                  placeholder="Email"
                  id="fullname"
                />
                <label htmlFor="fullname">Email</label>
              </div>
            </div>
            {/* radio form */}
            <div className="form__radio-box">
              <div className="form__radio form__radio-02">
                <input type="radio" id="radio" name="radio" />
                <label htmlFor="radio">
                  <span className="form__span form__span-01"></span>Small tour
                  group
                </label>
              </div>
              <div className="form__radio form__radio-02">
                <input type="radio" id="radio2" name="radio" />
                <label htmlFor="radio2">
                  <span className="form__span form__span-01"></span>Large tour
                  group
                </label>
              </div>
            </div>
            <div className="form__btn">
              <a href={"4"}>NEXT STEP &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Form;
