import React from "react";
import Book from "./1-7-pattern/pages/Book";
import Explore from "./1-7-pattern/pages/Explore";
import Home from "./1-7-pattern/pages/Home";
import Tour from "./1-7-pattern/pages/Tour";
const App: React.FC = () => {
  return (
    <>
      <Home />;
      <Tour />;
      <Explore />;
      <Book />;
    </>
  );
};

export default App;
