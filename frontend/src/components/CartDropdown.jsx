import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

import CartItem from "./CartItem";
import Toast from "../components/Toast";

import Fab from "@mui/material/Fab";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastSeverity, setToastSeverity] = useState("success");

  const handleToastClose = () => {
    setToastOpen(false);
  };

  const handleAccess = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setToastSeverity("error");
      setToastMessage("You are not signed in!");
      setToastOpen(true);
      navigate("/sign-in");
      return;
    }
    try {
      const response = await fetch(`${backendUrl}/checkout`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      await response.json();

      if (response.ok) {
        navigate("/checkout");
      } else {
        setToastSeverity("error");
        setToastMessage("You are not signed in!");
        setToastOpen(true);
      }
    } catch (error) {
      console.error("Error:", error);

      setToastSeverity("error");
      setToastMessage("Something went wrong. Please try again.");
      setToastOpen(true);
    }
  };
  return (
    <div className="absolute w-60 h-80 flex flex-col p-5 border border-gray-300 rounded-md bg-white top-16 right-5 z-10">
      <div className="h-60 flex flex-col overflow-y-scroll">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <p className="text-xs">
            So empty, it echoes. Start shopping already!
          </p>
        )}
      </div>
      <div className="mb-2 mt-4 mx-auto">
        <Fab
          color="secondary"
          aria-label="checkout"
          variant="extended"
          onClick={handleAccess}
        >
          Checkout
        </Fab>
      </div>
      <Toast
        open={toastOpen}
        message={toastMessage}
        severity={toastSeverity}
        onClose={handleToastClose}
      />
    </div>
  );
};

export default CartDropdown;
