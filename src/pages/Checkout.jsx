import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { emptyCart } from '../store/cartSlice.js';

export default function Checkout() {

  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const [paymentResult, setPaymentResult] = useState(null);
  const [message, setMessage] = useState(null);

  const handlePayment = async (paymentOutcome) => {
    setPaymentResult(null);
    setMessage(null);

    setPaymentResult(paymentOutcome);

    if (paymentOutcome === 'success') {
      setMessage("Payment Successful: Your order has been processed successfully.");
    } else {
      setMessage("Payment Failed: There was an error processing your payment. Please try again.");
    }
    dispatch(emptyCart());
  };
  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-2">Checkout</h1>
      {!paymentResult ? (<div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-gray-600 mb-2">Complete your purchase</p>
        <h2 className="text-xl font-bold mb-4">Total Amount: {cartItems.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0)}</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="card" className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
            <input
              id="card"
              name="card"
              placeholder="1234 5678 9012 3456"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={() => handlePayment('success')}
              className='flex-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'

            >
              Test Successful Payment
            </button>
            <button
              type="button"
              onClick={() => handlePayment('failure')}
              className='flex-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
            >
              Test Failed Payment
            </button>
          </div>
        </form>
      </div>)
        : (
          <div className={`mt-4 p-4 rounded-md ${paymentResult === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {paymentResult === 'success' ? 'Payment was successful!' : 'Payment failed. Please try again.'}
          </div>
        )}
    </div >
  );
}
