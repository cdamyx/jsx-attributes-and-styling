import React from "react";
import ReactDOM from "react-dom";

const newImg = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img
        className="img-square"
        src="https://www.icenews.is/wp-content/uploads/2008/05/plane1.jpg"
      ></img>
      <img
        className="img-square"
        src="https://explorebiotech.com/wp-content/uploads/2017/03/young-giraffe.jpg"
      ></img>
      <img
        className="img-square"
        src="https://cbsnews1.cbsistatic.com/hub/i/2017/07/17/99104db6-901b-4fd2-8d8f-ac633a2d9f4c/hot-dogs.jpg"
      ></img>
      <img src={newImg} />
    </div>
  </div>,
  document.getElementById("root")
);
