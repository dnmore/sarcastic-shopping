import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "./contexts/CartContext.jsx";
import { Authprovider } from "./contexts/authContext.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./stripe/stripe.js"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Authprovider>
      <CartProvider>
        <Elements stripe={stripePromise}>
            <App />
        </Elements>
      
      </CartProvider>
    </Authprovider>
      
    </BrowserRouter>
  </StrictMode>
);
