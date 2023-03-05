import React from "react";
import Book from "./1-7-pattern/pages/Book";
import Comment from "./1-7-pattern/pages/Comment";
import Explore from "./1-7-pattern/pages/Explore";
import Form from "./1-7-pattern/pages/Form";
import Home from "./1-7-pattern/pages/Home";
import Tour from "./1-7-pattern/pages/Tour";
const App: React.FC = () => {
  return (
    <>
      <Home />;
      <Tour />;
      <Explore />;
      <Book />;
      <Comment />;
      <Form />;
    </>
  );
};

export default App;
