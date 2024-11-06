import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function Home() {

  const [featuredProducts, setFeaturedProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://672b72c31600dda5a9f50f4c.mockapi.io/api/Products?featured=true&page=1&limit=8");
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();

        console.log("Products: ", data)

        setFeaturedProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [])

  return (
    <>
      <section className="bg-blue-600 text-white py-12 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Summer Sale</h2>
          <p className="text-xl mb-8">Up to 50% off on selected items</p>
          <Link
            to="/products"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Featured Products</h2>
          {featuredProducts.length <= 0 && <h1 className="text-center text-3xl font-bold text-gray-500 italic">Loading...</h1>}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
