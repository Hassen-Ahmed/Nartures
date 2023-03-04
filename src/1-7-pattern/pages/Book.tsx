import React from "react";

const Book = () => {
  return (
    <div className="book">
      <div className="heading tour__heading">
        <h1>MOST POPULAR TOURS</h1>
      </div>
      <div className="book__cards">
        {/* orange__card */}
        <div className="book__card ">
          {/* orange__front */}
          <div className="book__front book__orange--front">
            <div className="book__front-img book__front-img-orange"></div>
            <h1 className="book__card--heading">
              <span className="heading-span-01--orange">THE SEA</span> <br />
              <span className="heading-span-02--orange"> EXPLORE</span>
            </h1>
            <ul className="book__list">
              <li>3 day tour</li>
              <li>Up to 30 people</li>
              <li>2 tour guides</li>
              <li>Sleep in cozy hotels</li>
              <li>Difficulty: very easy</li>
            </ul>
          </div>
          {/* orange--back */}
          <div className="book__back book__orange--back">
            <h3 className="book__price-label">ONLY</h3>
            <h1 className="book__price">$140</h1>
            <div className="book__card-btn">
              <a href={"$"}>BOOK NOW!</a>
            </div>
          </div>
        </div>
        {/* green__card */}
        <div className="book__card ">
          {/* green__front */}
          <div className="book__front book__green--front">
            <div className="book__front-img book__front-img-green"></div>
            <h1 className="book__card--heading">
              <span className="heading-span-01--green">THE FOREST</span> <br />
              <span className="heading-span-02--green"> HIKER</span>
            </h1>
            <ul className="book__list">
              <li>7 day tour</li>
              <li>Up to 40 people</li>
              <li>6 tour guides</li>
              <li>Sleep in provided tents</li>
              <li>Difficulty: medium</li>
            </ul>
          </div>
          {/* green--back */}
          <div className="book__back book__green--back">
            <h3 className="book__price-label">ONLY</h3>
            <h1 className="book__price">$497</h1>
            <div className="book__card-btn">
              <a href={"$"}>BOOK NOW!</a>
            </div>
          </div>
        </div>
        {/* blue__card */}
        <div className="book__card ">
          {/* blue__front */}
          <div className="book__front book__blue--front">
            <div className="book__front-img book__front-img-blue"></div>
            <h1 className="book__card--heading">
              <span className="heading-span-01--blue">THE SNOW</span> <br />
              <span className="heading-span-02--blue"> ADVENTURE</span>
            </h1>
            <ul className="book__list">
              <li>5 day tour</li>
              <li>Up to 15 people</li>
              <li>3 tour guides</li>
              <li>Sleep in provided tents</li>
              <li>Difficulty: hard</li>
            </ul>
          </div>
          {/* blue--back */}
          <div className="book__back book__blue--back">
            <h3 className="book__price-label">ONLY</h3>
            <h1 className="book__price">$140</h1>
            <div className="book__card-btn">
              <a href={"$"}>BOOK NOW!</a>
            </div>
          </div>
        </div>
      </div>

      <div className="book__btn">
        <a href={"$"}>DISCOVER ALL TOURS</a>
      </div>
    </div>
  );
};
export default Book;
