import { LuShoppingCart, LuUser, LuSearch } from "react-icons/lu";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {

  const cartItems = useSelector(state => state.cart.items);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto max-w-screen-xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-blue-600">
            <Link to="/">EcoShop</Link>
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/products" className="hover:text-blue-600">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-600">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="search"
              placeholder="Search..."
              className="pl-8 pr-2 py-1 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <LuSearch className="h-5 w-5 absolute left-2 top-1.5 text-gray-400" />
          </div>
          <Link to="/user" className="p-1 rounded-full hover:bg-gray-100">
            <LuUser className="h-6 w-6" />
          </Link>
          <Link to="/cart" className="p-1 rounded-full hover:bg-gray-100 flex relative">
            <LuShoppingCart className="h-6 w-6" />
            <span className="bg-blue-500 rounded-full h-4 w-4 text-xs text-center text-white absolute opacity-75 font-bold top-0 left-2.5">{cartItems.length}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
