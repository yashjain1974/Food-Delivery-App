import React from "react";
import Meals from "./components/Menu/Meals";
import Cart from "./components/Food Cart/Cart";

import Header from "./components/Layers/Header";
function App() {
  return (
    <React.Fragment>
      <Cart></Cart>
      <Header></Header>
      <main>
        <Meals></Meals>
      </main>
    </React.Fragment>
     
  );
}

export default App;
