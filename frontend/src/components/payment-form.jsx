import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { CartContext } from "../contexts/CartContext";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

import Fab from "@mui/material/Fab";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      iconColor: "#050505",
      color: "#050505",
      fontWeight: "500",
      fontFamily: "Montserrat, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": {
        color: "#050505",
      },
      "::placeholder": {
        color: "#050505",
      },
    },
    invalid: {
      iconColor: "#DC2626",
      color: "#DC2626",
    },
  },
};

const PaymentForm = ({ finalPrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { clearCart } = useContext(CartContext);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    // Call the backend to create a PaymentIntent
    try {
      const response = await fetch(`${backendUrl}/create-payment-intent`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: Math.round(finalPrice * 100) }),
      });

      const data = await response.json();

      const { clientSecret } = data;

      // Confirm the payment with the client secret
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        setError(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          navigate("/success");
          clearCart();
        }
      }
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-80 ">
      <div className="p-4 bg-slate-200 ">
        <CardElement options={CARD_ELEMENT_OPTIONS} />
      </div>

      <Fab
        type="submit"
        color="primary"
        aria-label="pay"
        variant="extended"
        disabled={!stripe || isLoading}
      >
        {isLoading ? "Processing..." : "Pay Now"}
      </Fab>

      {error && <div style={{ color: "red" }}>{error}</div>}
    </form>
  );
};

export default PaymentForm;
