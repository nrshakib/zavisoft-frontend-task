"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { CartProvider } from "@/context/CartContext";

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <CartProvider>{children}</CartProvider>
    </Provider>
  );
};

export default Providers;
