import { Link } from "react-router-dom"
export default function NotFound() {
  return <>
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-6xl font-bold">404</h1>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Oops! Page not found
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            The page you're looking for doesn't exist.
          </p>
        </div>
        <div className="mt-8 space-y-4">
          <Link
            to="/"
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Go back
          </Link>
          <Link
            to="/products"
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
          >
            Browse our Products
          </Link>
        </div>
        <div className="mt-6">
          <p className="text-sm text-gray-500">
            Need help? <Link href="/contact" className="font-medium text-blue-600 hover:text-blue-500">Contact our support team</Link>
          </p>
        </div>
      </div>
    </div>
  </>;
}
