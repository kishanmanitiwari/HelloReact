import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

//JSX

// const jsxHeading = (<h1>Hello React</h1>)

// const jsxParent = (
//   <div id="parent">
//     <div className="children"  >
//       <h1 fontSize="50">Parent</h1>
//       <h1>React!</h1>
//     </div>
//   </div>
// );

const jsxHead = <h1>Hello</h1>;

const name = "Hassan"; //JS Code

//JSX-JS Samjhne - JS Mode Lana

const cssObject = {
  color: "blue",
  fontSize: 150,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Parent />);
