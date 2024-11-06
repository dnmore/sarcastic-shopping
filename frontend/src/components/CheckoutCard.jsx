import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

import { TiTrash, TiChevronLeft, TiChevronRight } from "react-icons/ti";

export default function CheckoutCard({ cartItem }) {
  const { name, quantity, price } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);
  return (
    <li className="grid grid-cols-5 gap-4 my-4 items-center justify-center text-center">
      <p className="text-sm text-gray-700 font-semibold col-span-2 text-left">
        {name}
      </p>

      <span className="text-sm text-gray-700">€{price.toFixed(2)}</span>
<div className="flex justify-center items-center gap-2 ">
    <button onClick={() => removeItemFromCart(cartItem)} className="text-xl text-gray-700 hover:opacity-75">
          <TiChevronLeft />
        </button>
         <p className="text-sm  text-gray-700">{quantity}</p> 
         <button onClick={() => addItemToCart(cartItem)} className="text-xl text-gray-700 hover:opacity-75">
          <TiChevronRight />
        </button>
</div>
     

      <div className="flex flex-col sm:flex-row sm:justify-center">
        
       
        <button onClick={() => clearItemFromCart(cartItem)} className="text-xl hover:opacity-75">
          <TiTrash />
        </button>
      </div>
    </li>
  );
}
