import React, { useState } from "react";
import Meals from "./components/Menu/Meals";
import Cart from "./components/Food Cart/Cart";

import Header from "./components/Layers/Header";
import CartProvider from "./store/CartProvider";

function App() {
  const [CartisVisible, setCartisVisible] = useState(false);
  const isClickHandler = (event) => {
    setCartisVisible(true);
    console.log(CartisVisible);
  };

  const HideCartHandler = () => {
    setCartisVisible(false);
  };

  return (
    <CartProvider>
      {CartisVisible && <Cart onClose={HideCartHandler}></Cart>}

      <Header onShowCart={isClickHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
