// <div id = parent>
//     <div id = children>
//         <h1>Hello</h1>
//         <h1>World!</h1>
//     </div>
// </div>

const parent = React.createElement(
  "div",
  {id:"parent"},
  React.createElement("div", {id:"children"},
 [React.createElement("h1", {}, "Hello"),React.createElement("h1",{},"World")])
);

const heading = React.createElement(
  "h1",
  { id: "head", class: "heading" },
  "Hello From React!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
