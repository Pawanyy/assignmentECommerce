import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";

export default function Products() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://672b72c31600dda5a9f50f4c.mockapi.io/api/Products");
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();

        console.log("Products: ", data)

        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [])

  return <>
    <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>


    <section className="py-12">
      <div className="container mx-auto px-4">
        {products.length <= 0 && <h1 className="text-center text-3xl font-bold text-gray-500 italic">Loading...</h1>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  </>;
}
