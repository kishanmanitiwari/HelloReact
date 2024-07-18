import React from "react";
import ReactDOM from "react-dom/client";

// <div id = parent>
//     <div id = children>
//         <h1>Hello</h1>
//         <h1>World!</h1>
//     </div>
// </div>

// const parent = React.createElement(
//   "div",
//   {id:"parent"},
//   React.createElement("div", {id:"children"},
//  [React.createElement("h1", {}, "Hello"),React.createElement("h1",{},"React! from Kishan")])
// );

// const heading = React.createElement(
//   "h1",
//   { id: "head", class: "heading" },
//   "Hello From React!"
// );

// const parent = (
//   <div>
//     <h1>Hello</h1>
//     {console.log("hello")}
//   </div>
// );

function Parent() {
  

  return (
    <div>
      {console.log("hello")} 
      <h1>Hello</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Parent />);
