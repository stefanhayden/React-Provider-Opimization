import React from "react";
import ReactDOM from "react-dom/client";
import AlwaysRenders from "./AlwaysRenders";
import LessRenders from "./LessRenders";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <div style={{ display: 'flex', gap: 20 }}>
    <AlwaysRenders />
    <LessRenders />
  </div>
);
