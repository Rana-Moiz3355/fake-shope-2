import React from "react";

function Cart() {
  return (
    <div>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>

        <div className="bg-white p-4 rounded-md shadow-md mb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <img
                src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Item 1"
                className="w-16 h-16 object-cover rounded-md mr-4"
              />
              <div>
                <h2 className="text-lg font-semibold">Product 1</h2>
                <p className="text-gray-600">Price: $19.99</p>
              </div>
            </div>
            <div className="flex items-center">
              <input
                type="number"
                className="w-12 h-8 border border-gray-300 rounded-md text-center mr-2"
              />
              <button className="text-red-500">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-2">Cart Summary</h2>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Subtotal:</span>
            <span className="font-semibold">$44.98</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Shipping:</span>
            <span className="font-semibold">$5.00</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl font-semibold">Total:</span>
            <span className="text-xl font-semibold">$49.98</span>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
