import { useEffect, useState } from 'react';
import { LuShoppingCart } from 'react-icons/lu';
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice.js"


export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://672b72c31600dda5a9f50f4c.mockapi.io/api/Products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <h1 className="text-center text-3xl font-bold text-gray-500 italic">Loading...</h1>;
  }

  return (
    <div className="bg-white mt-10 flex">
      <div className="relative w-1/2 p-4">
        <img
          src={product.image}
          alt={product.name}
          className="transition-transform duration-300 hover:scale-105 rounded shadow-md"
        />
      </div>
      <div className="p-4 w-1/2">
        <h2 className="text-3xl font-semibold mb-2 truncate">
          {product.name}
        </h2>
        <p className="text-gray-600 text-sm mb-2 font-semibold">{product.brand}</p>
        <p className="text-gray-500 text-sm mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">₹{parseFloat(product.price).toFixed(2)}</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center hover:bg-blue-700 transition duration-300"
            onClick={() => dispatch(addToCart(product))}
          >
            <LuShoppingCart className="w-5 h-5 mr-2" />
            Add to Cart
          </button>
        </div>
        <div className="mt-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {product.category}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            {product.stock} in stock
          </span>
        </div>
      </div>
    </div>
  );
}
