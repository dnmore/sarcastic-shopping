import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

import Badge from "@mui/joy/Badge";
import { IoCart } from "react-icons/io5";
import { Tooltip } from "@mui/material";
import Zoom from '@mui/material/Zoom';






const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  let cartComment;

  if(cartCount === 0){
    cartComment = "Your future purchases are waiting... don’t disappoint them!"
  } else if(cartCount === 1){
    cartComment = "Look at you, pretending you’re just browsing!"
  }
  else {
    cartComment = "This cart’s getting heavy. Ready to lighten your wallet?"
  }


  return (
    <div className="cursor-pointer" onClick={toggleIsCartOpen}>

      <Tooltip TransitionComponent={Zoom} title={cartComment}>
<Badge badgeContent={cartCount}>
      <IoCart className="text-2xl hover:opacity-75" />
  </Badge>
      </Tooltip>
      
    </div>
   
  );
};

export default CartIcon;


