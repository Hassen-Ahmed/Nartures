import React from "react";

const videoFile: string = require("../../assets/vidoes/video.mp4");
const videoFile2: string = require("../../assets/vidoes/video.webm");
const profileImageOne = require("../../assets/img/nat-8.jpg");
const profileImageOne2 = require("../../assets/img/nat-9.jpg");

const Comment: React.FC = () => {
  return (
    <div className="comment">
      {/* video-section  */}
      <video autoPlay muted loop className="comment__video">
        <source src={videoFile} type="video/mp4" />
        <source src={videoFile2} type="video/webm" />
      </video>
      {/* comments-section  */}
      <div className="comment__container">
        <div className="heading comment__heading">
          <h1>WE MAKE PEOPLE GENUINELY HAPPY</h1>
        </div>
        <div className="comment__boxs">
          {/* box-01  */}
          <div className="comment__box-wrapper">
            <div className="comment__box">
              <div className="comment__profile-pic">
                <h2>MARY SMITH</h2>
                <img src={profileImageOne} alt="img" />
              </div>
              <div className="comment__profile-texts">
                <h2>I HAD BEST WEEK EVER WITH MY FAMILY</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ducimus cum optio dignissimos et! Consequatur cum ut a
                  voluptatibus quam. Illum! Ducimus cum optio dignissimos et!
                  cum ut a voluptatibus quam. Illum! Consequatur cum ut a ut a
                  voluptatibus quam. Illum! Consequatur cum ut a voluptatibus
                  quam.
                </p>
              </div>
            </div>
          </div>
          {/* box-02 */}
          <div className="comment__box-wrapper">
            <div className="comment__box ">
              <div className="comment__profile-pic">
                <h2>MOHAMMED YUSUF</h2>
                <img src={profileImageOne2} alt="img" />
              </div>
              <div className="comment__profile-texts">
                <h2>WOW! MY LIFE COMPLETELY DIFFERENT NOW</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ducimus cum optio dignissimos et! Consequatur cum ut a
                  voluptatibus quam. Illum! Ducimus cum optio dignissimos et!
                  cum ut a voluptatibus quam. Illum! Consequatur cum ut a ut a
                  voluptatibus quam. Illum! Consequatur cum ut a voluptatibus
                  quam. Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
          {/* comment-btn  */}
          <div className="comment__btn">
            <button>Read all stories &rarr;</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Comment;
