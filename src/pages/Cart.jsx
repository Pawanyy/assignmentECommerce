import { LuArrowLeft, LuMinus, LuPlus, LuTrash2 } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, deleteFromCart } from '../store/cartSlice.js';

export default function Cart() {

  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-8">Shopping Cart</h1>
    {cartItems.length === 0 ? (
      <div className="text-center py-12">
        <p className="text-xl text-gray-500 mb-4">Your cart is empty</p>
        <Link to="/" className="text-indigo-600 hover:text-indigo-500 font-medium flex items-center justify-center">
          <LuArrowLeft className="mr-2 h-5 w-5" />
          Continue Shopping
        </Link>
      </div>
    ) : (
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
        <section aria-labelledby="cart-heading" className="lg:col-span-7">
          <h2 id="cart-heading" className="sr-only">Items in your shopping cart</h2>

          <ul role="list" className="border-t border-b border-gray-200 divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li key={item.id} className="flex py-6 sm:py-10">
                <div className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
                    width={200}
                    height={200}
                  />
                </div>

                <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                  <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="text-sm">
                          <Link href={`/product/₹{item.id}`} className="font-medium text-gray-700 hover:text-gray-800">
                            {item.name}
                          </Link>
                        </h3>
                      </div>
                      <p className="mt-1 text-sm font-medium text-gray-900">₹{parseFloat(item.price).toFixed(2)}</p>
                      <p className="mt-1 text-sm font-medium text-gray-900">Total: ₹{(parseFloat(item.price) * item.quantity).toFixed(2)}</p>
                    </div>

                    <div className="mt-4 sm:mt-0 sm:pr-9">
                      <label htmlFor={`quantity-₹{item.id}`} className="sr-only">
                        Quantity, {item.name}
                      </label>
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="p-1 text-gray-400 hover:text-gray-500"
                          onClick={() => dispatch(removeFromCart(item))}
                        >
                          <LuMinus className="h-5 w-5" aria-hidden="true" />
                        </button>
                        <input
                          id={`quantity-₹{item.id}`}
                          name={`quantity-₹{item.id}`}
                          value={item.quantity}
                          className="max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-center shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-12"
                          readOnly={true}
                        />
                        <button
                          type="button"
                          className="p-1 text-gray-400 hover:text-gray-500"
                          onClick={() => dispatch(addToCart(item))}
                        >
                          <LuPlus className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </div>

                      <div className="absolute top-0 right-0">
                        <button
                          type="button"
                          className="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500"
                          onClick={() => dispatch(deleteFromCart(item))}
                        >
                          <span className="sr-only">Remove</span>
                          <LuTrash2 className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
        >
          <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
            Order summary
          </h2>

          <dl className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <dt className="text-sm text-gray-600">Subtotal</dt>
              <dd className="text-sm font-medium text-gray-900">₹{cartItems.reduce((sum, item) =>
                sum + (parseFloat(item.price) * item.quantity)
                , 0)}</dd>
            </div>
            <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
              <dt className="text-base font-medium text-gray-900">Order total</dt>
              <dd className="text-base font-medium text-gray-900">₹{cartItems.reduce((sum, item) =>
                sum + (parseFloat(item.price) * item.quantity)
                , 0)}</dd>
            </div>
          </dl>

          <div className="mt-6">
            <Link to="/checkout">
              <button
                type="submit"
                className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
              >
                Checkout
              </button>
            </Link>
          </div>
        </section>
      </div>
    )}
  </div>;
}
