import React from "react";

const logoImg = require("../../assets/img/logo-green-1x.png");
// const logoImg2 = "../assets/img/logo-green-1x.png";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer__upper">
        <img src={logoImg} alt="logo" />
      </div>
      <div className="footer__bottom">
        <div className="footer__left">
          <div className="footer__left--inner">
            <h2>COMPANY</h2>
            <h2>CONTACT US</h2>
            <h2>CARRERS</h2>
            <h2>PRIVACY POLICY</h2>
            <h2>TERMS</h2>
          </div>
        </div>
        <div className="footer__right">
          <p>
            Build by <span className="footer__right--span">Hassen Abdela</span>
            from online course
            <br />
            <span className="footer__right--span"> ADVANCED CSS</span> AND{" "}
            <span className="footer__right--span"> SASS </span> and also{" "}
            <span className="footer__right--span"> React js</span>. Some of the
            presented Cs5 feature are highly experimental and may not work in
            all browsers, or may work in a different way at the time of watching
            this video. WEb development chnages quickly, just live with it
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
