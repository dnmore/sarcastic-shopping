import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "./contexts/CartContext.jsx";
import { Authprovider } from "./contexts/authContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Authprovider>
      <CartProvider>
        <App />
      </CartProvider>
    </Authprovider>
      
    </BrowserRouter>
  </StrictMode>
);
