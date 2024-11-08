import { useState, useEffect } from "react";

import ChatbotIcon from "../components/ChatbotIcon";
import ProductList from "../components/ProductList";

const backendUrl = import.meta.env.VITE_BACKEND_URL;


const Home = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All Absurdities");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    fetch(`${backendUrl}/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products", error));
  }, []);

  useEffect(() => {
    const newFilteredProducts = products.filter((product) => {
      return product.category === category;
    });
    if (category === "All Absurdities") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(newFilteredProducts);
    }
  }, [category, products]);

  return (
    <div className="bg-white px-6 py-4">
      <h3 className="text-xl font-bold mb-4">Sarcastic Products</h3>
      <p className="text-sm font-semibold my-2 border-b-2 border-b-black">
        Sarcastic Categories
      </p>

      <div className="flex flex-col sm:flex-row sm:gap-4">
        <div className="relative flex gap-x-1">
          <div className="flex h-6 items-center">
            <button
              value="All Absurdities"
              autoFocus
              onClick={(e) => setCategory(e.currentTarget.value)}
              className="text-sm font-semibold bg-transparent text-gray-900 cursor-pointer hover:opacity-75 focus:text-blue-700 outline-none"
            >
              All Absurdities
            </button>
          </div>
        </div>
        <div className="relative flex gap-x-1">
          <div className="flex h-6 items-center">
            <button
              value="Luxuriously Useless"
              onClick={(e) => setCategory(e.currentTarget.value)}
              className="text-sm font-semibold bg-transparent text-gray-900 cursor-pointer hover:opacity-75 focus:text-blue-700 outline-none"
            >
              Luxuriously Useless
            </button>
          </div>
        </div>
        <div className="relative flex gap-x-1">
          <div className="flex h-6 items-center">
            <button
              value="Nostalgic Nonsense"
              onClick={(e) => setCategory(e.currentTarget.value)}
              className="text-sm font-semibold bg-transparent text-gray-900 cursor-pointer hover:opacity-75 focus:text-blue-700 outline-none"
            >
              Nostalgic Nonsense
            </button>
          </div>
        </div>
        <div className="relative flex gap-x-1">
          <div className="flex h-6 items-center">
            <button
              value="Quirkily Comforting"
              onClick={(e) => setCategory(e.currentTarget.value)}
              className="text-sm font-semibold bg-transparent text-gray-900 cursor-pointer hover:opacity-75 focus:text-blue-700 outline-none"
            >
              Quirkily Comforting
            </button>
          </div>
        </div>
      </div>
      <div>
        <ProductList products={filteredProducts} />
     
      </div>
      <ChatbotIcon />
    </div>
  );
};

export default Home;
