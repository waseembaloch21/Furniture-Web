import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import img25 from "../assets/img25.png";
import Loading from "../loading"; 

function Shop() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = "https://dummyjson.com/products";
        const response = await axios.get(url);
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container mt-20 mx-auto">
      <div className="relative container mx-auto">
        <img
          className="h-60 w-full object-cover"
          src={img25}
          alt="Cart Image"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black bg-white bg-opacity-50">
          <h1 className="text-5xl font-semibold">Shop</h1>
          <h1 className="text-sm text-black">Home › Shop</h1>
        </div>
      </div>

      <div className="container px-5 py-24 mx-auto">
        <div className="font-serif flex flex-wrap -m-4">
          {products.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </div>
      </div>

      <section className="text-gray-600 cartTotal body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                High Quality
              </h2>
              <p className="leading-relaxed">Crafted from top materials</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                Warranty Protection
              </h2>
              <p className="leading-relaxed">Over 2 years</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                Free Shipping
              </h2>
              <p className="leading-relaxed">Order over $150</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                24 / 7 Support
              </h2>
              <p className="leading-relaxed">Dedicated support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Shop;