import { LuShoppingCart } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice.js';

export default function ProductCard({ product }) {

    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
            <div className="relative w-full">
                <Link to={`/products/${product.id}`}>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="transition-transform duration-300 hover:scale-105"
                    />
                </Link>
            </div>
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 truncate hover:underline">
                    <Link to={`/products/${product.id}`}>
                        {product.name}
                    </Link>
                </h2>
                <p className="text-gray-600 text-sm mb-2 font-semibold">{product.brand}</p>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">₹{parseFloat(product.price).toFixed(2)}</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center hover:bg-blue-700 transition duration-300" onClick={addToCartHandler}>
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
    )
}