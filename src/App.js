import React from "react";
import Meals from "./components/Menu/Meals";

import Header from "./components/Layers/Header";
function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <main>
        <Meals></Meals>
      </main>
    </React.Fragment>
     
  );
}

export default App;
