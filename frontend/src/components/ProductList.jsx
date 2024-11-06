import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 py-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    
      
    
  );
};

export default ProductList;
