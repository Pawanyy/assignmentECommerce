import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12 py-8">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About EcoShop</h3>
            <p className="text-gray-600">
              EcoShop is your one-stop destination for products. We're committed
              to sustainability and providing high-quality, environmentally
              conscious goods.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-blue-600 transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-600 hover:text-blue-600 transition duration-300"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-blue-600 transition duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-blue-600 transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="text-gray-600 not-italic">
              <p>123 Eco Street</p>
              <p>Green City, Earth 12345</p>
              <p className="mt-2">
                <a
                  href="mailto:info@ecoshop.com"
                  className="hover:text-blue-600 transition duration-300"
                >
                  info@ecoshop.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+11234567890"
                  className="hover:text-blue-600 transition duration-300"
                >
                  +1 (123) 456-7890
                </a>
              </p>
            </address>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} EcoShop. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-blue-600 transition duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-600 transition duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
