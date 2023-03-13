import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render('what to show as a single html element ,where to show')
//the first render argument can only take 1 HTML argument.
ReactDOM.render(
  <div>
    <h1>Hello World</h1>
    <p>Its a good day!!!</p>{" "}
  </div>,
  document.getElementById("root")
);
