import React from "react";
import image01 from "./images/01.jpeg";
import image02 from "./images/02.jpg";
import image03 from "./images/03.png";

const App = () => {
  return (
    <>
        <p><img src={image01} /></p>
        <p><img src={image02} /></p>
        <p><img src={image03} /></p>
    </>
  );
};

export default App;
