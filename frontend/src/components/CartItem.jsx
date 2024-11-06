const CartItem = ({ cartItem }) => {
    const { name, quantity, price } = cartItem;
    return (
      <div className="my-2 text-sm">
        <h3 className="font-semibold">{name}</h3>
        <span className="text-gray-800 text-xs">
          {quantity} x €{price}
        </span>
      </div>
    );
  };
  
  export default CartItem;