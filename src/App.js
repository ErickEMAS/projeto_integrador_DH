import React from "react";

import { GlobalStyle } from "./styles";

// import Home from "./pages/Home";
// import Statistics from "./pages/Statistics";
import Versus from "./pages/Versus";

export default function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Statistics /> */}
      <Versus />
      <GlobalStyle />
    </div>
  );
}
