import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { db } from "../utils/firebase"; 
import { collection, doc, setDoc, getDoc } from "firebase/firestore";

function ProductDetail() {
  const { id } = useParams();
  const { products, setProducts } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleCount = (operation) => {
    if (operation === "increment") {
      setCount(count + 1);
    } else if (operation === "decrement" && count > 1) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    setNotFound(false);
    setLoading(true);

   
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setNotFound(true);
        setLoading(false);
        console.error(err);
      });

    const isItemAddedToCart = async (productId) => {
      try {
        const productRef = doc(db, "cartProducts", productId);
        const productSnap = await getDoc(productRef);
        return productSnap.exists();
      } catch (error) {
        console.error("Error checking cart: ", error);
        return false;
      }
    };
    isItemAddedToCart(id).then((result) => {
      setAddedToCart(result);
    });
  }, [id]);

  const addToCart = async () => {
    if (!addedToCart && product) {
      const cartProduct = { ...product, quantity: count };
      try {
        if (product.id) {
          await setDoc(doc(db, "cartProducts", product.id.toString()), cartProduct);
          setProducts((prevProducts) => [...prevProducts, cartProduct]);
          setAddedToCart(true);
          console.log("Product added to cart successfully!");
        } else {
          console.error("Product ID is invalid");
        }
      } catch (error) {
        console.error("Error adding product to cart: ", error);
      }
    } else {
      console.log("Product already added to cart or product data missing");
    }
  };
  

  return (
    <div className="container mx-auto">
      {loading ? (
        <h1 className="text-center font-serif text-3xl">Loading....</h1>
      ) : notFound ? (
        <h1 className="text-center font-serif text-3xl">Product Not Found</h1>
      ) : (
        
        <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover border cartTotal object-center rounded"
              src={product.thumbnail}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-black font-bold font-serif text-3xl title-font mb-1">
              {product.title}
              </h1>
              <span className="title-font font-serif font-medium text-2xl text-gray-900">
              ${product.price}
              </span>
              <div className="flex mb-4">
                <span className="flex items-center">

                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-orange-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-orange-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-orange-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-orange-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-orange-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <span className="text-gray-600 ml-3 font-serif">
                    5 Customer Reviews
                  </span>
                </span>
              </div>
              <p className="leading-relaxed text-black font-bold font-serif">
              {product.description}
              </p>

              <div className='mt-8'>
                <span className="mr-3 ">Size</span>
              </div>
              <div className="flex mt-3 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <button className='border-1 border-black bg-amber-500 ml-1  w-6 h-6 '>L</button>
                  <button className='border-1 border-black cartTotal ml-1  w-6 h-6 '>XL</button>
                  <button className='border-1 border-black cartTotal ml-1  w-6 h-6 '>XS</button>
                </div>
              </div>

              <div className='mt-8'>
                <span className="mr-3 ">Color</span>
              </div>
              <div className="flex mt-3 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
                  <button className="border-2 border-gray-300 bg-amber-600 rounded-full w-6 h-6 focus:outline-none" />
                </div>
              </div>

              <div className="flex">
                  <div className="flex border border-black items-center">
                    <button
                      onClick={() => handleCount("decrement")}
                      className="ml-1 text-black bg-white  py-2 px-3 rounded"
                    >
                      -
                    </button>
                    <span className="mx-4">{count}</span>
                    <button
                      onClick={() => handleCount("increment")}
                      className="ml-1 text-black bg-white  py-2 px-3 rounded"
                    >
                      +
                    </button>
                  </div>
                <button
                    onClick={addToCart}
                    disabled={addedToCart} 
                    className={`flex ml-auto font-serif text-black border border-black py-2 px-6 rounded ${
                      addedToCart ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {addedToCart ? "Added to Cart" : "Add to Cart"}
                  </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}
    </div>
  );
}

export default ProductDetail;
