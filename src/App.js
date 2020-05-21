import React from "react";

import { GlobalStyle } from "./styles";

import Home from "./pages/Home";
import Statistics from "./pages/Statistics";

export default function App() {
  return (
    <div className="App">
      <Home />
      {/* <Statistics /> */}
      <GlobalStyle />
    </div>
  );
}
