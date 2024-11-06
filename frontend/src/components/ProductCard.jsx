import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

import { Tooltip } from "@mui/material";
import { IoAddOutline } from "react-icons/io5";
import Fab from "@mui/material/Fab";


const ProductCard = ({ product }) => {
  const { name, description, price, imageUrl, category } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="group relative shadow-lg">
      <div className="aspect-h-1 aspect-w-1  w-full h-72 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
        <img
          src={imageUrl}
          title={name}
          className="w-full h-full object-cover object-center "
        />
      </div>

      <div className="mt-4 flex justify-between p-4 gap-2">
        <div>
          <div className="h-20 flex flex-col">
            <h3 className=" text-sm font-semibold text-gray-700">{name}</h3>
            <p className="text-sm font-semibold text-blue-700">{category}</p>
          </div>

          <p className="h-48 mt-1 text-sm text-gray-500">{description}</p>
          <Tooltip title="Oh gosh, really??" arrow>
            <Fab color="secondary" aria-label="add" onClick={addProductToCart} style={{zIndex:"0"}}>
              <IoAddOutline className="text-xl" />
            </Fab>
          </Tooltip>
        </div>

        <p className="text-sm font-medium text-gray-900">{price.toFixed(2)}€</p>
      </div>
    </div>
  );
};

export default ProductCard;
