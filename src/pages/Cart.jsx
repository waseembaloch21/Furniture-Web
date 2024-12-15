import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { AiFillDelete } from "react-icons/ai";
import { db } from "../utils/firebase";
import { collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { IoTrophyOutline } from "react-icons/io5";
import { IoShieldCheckmark } from "react-icons/io5";
import { GiCargoShip } from "react-icons/gi";
import { GrSupport } from "react-icons/gr";
import { Link } from "react-router-dom";

function Cart() {
  const { products, setProducts } = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  const saveProduct = async (product) => {
    try {
      const productRef = doc(db, "cartProducts", product.id);
      await setDoc(productRef, product);
      console.log("Product saved successfully!");
    } catch (error) {
      console.error("Error saving product: ", error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      const productRef = doc(db, "cartProducts", productId);
      const docSnapshot = await getDoc(productRef);

      if (!docSnapshot.exists()) {
        console.error("Product does not exist.");
        return;
      }
      await deleteDoc(productRef);
      console.log("Product deleted successfully!");
      console.log("Current products: ", products);
      const updatedProducts = products.filter((item) => item.id !== productId);
      console.log("Updated products: ", updatedProducts);

      setProducts(updatedProducts);
    } catch (error) {
      console.error("Error deleting product: ", error.message);
    }
  };

  useEffect(() => {
    const fetchProductsFromFirestore = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "cartProducts"));
        const fetchedProducts = [];
        querySnapshot.forEach((doc) => {
          fetchedProducts.push({ id: doc.id, ...doc.data() });
        });
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductsFromFirestore();
  }, [setProducts]);

  const handleCheckout = () => {
    alert("Your Payment is Successfully Done");
  };

  return (
    <div className="container mx-auto mt-20">
      <div className="relative">
        <img
          className="h-60 w-full object-cover"
          src="https://s3-alpha-sig.figma.com/img/1461/f3d6/ff74c027a1888544144abe4be6e02cbf?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V1k2~TI16jFkGQLu1hF6zQaqAEqLkM3RKvTzXNQj5UqhnvHscTHf6GDmGoXWpZzl4JMbzFpXs3ko8v-e-YGmNjoNamMKFBehhdv7Q2njuPu1YZnAp6e6bR4inQ~N0drYhkEnzHsdPoc3T2tvkoIfZs1cZ~r2mjdDh~ElcH~OwwLVmu7JukfTfoOkJdhn9X0RMMg0v36R6-DYy988H9z84fPkhVyFi1uCyZiK8g7dLPilqt1t3im8IzPyfTbCf8NUPCQE1nKe-EZ1SWkWdFMl~iYPkrjv2pj~YMKVWfI0FMX~dELlL2NEUjpWnn3xh9veXbX1fSiVQiVLbaqNBrqYNA__"
          alt="Cart Image"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black bg-white bg-opacity-50">
          <img
            className="h-10 w-10"
            src="https://s3-alpha-sig.figma.com/img/2727/769b/a74736d502746301ed573ed8940fc322?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hKnHcKE5Lsm6d2ptkIrFTsXl5CDDRDCTdEU5xdqmFImz0-sCLxyoqPhICQ8Oxefj~FrXi8llAFo-u4yDPUXQe72Ubf1AUxxC8q8HZfywaWMrMuc3TgaAzxjPSiFEP92NAnSDfgcWorcLC~jE4deZJGwOmnUU-2BLEGOehDWjZROZBA4-iARULPUGeOg4yeuDv3QmIQjY68ifPHBp7maePBiMHihaadPI~7d7QmB6yaXaNoiCe~ur4Z4q4SWHQt9mW8Pn3l-Tb38K~KhIeirqDum3UZ6dPLRblfza-VkLkB~3GwX32LXYuIAmBPoYdj7lSDjnuvqAkxCi2IVomV2zpQ__"
            alt="Cart Icon"
          />
          <h1 className="text-3xl font-semibold">Cart</h1>
          <h1 className="text-sm text-black">Home › Cart</h1>
        </div>
      </div>

      <div className="container mx-auto mt-16 mb-16 px-4 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-3/4 overflow-x-auto">
            <table className="min-w-full text-sm text-left  text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="cartTotal px-3 py-3"></th>
                  <th scope="col" className="cartTotal px-3 py-3">Product</th>
                  <th scope="col" className="cartTotal px-3 py-3">Price</th>
                  <th scope="col" className="cartTotal px-3 py-3">Quantity</th>
                  <th scope="col" className="cartTotal px-3 py-3">Subtotal</th>
                  <th scope="col" className="cartTotal px-3 py-3 "></th>
                </tr>
              </thead>
              <tbody>
                {products.map((data) => (
                  <tr key={data.id} className="bg-white border border-white">
                    <td className="px-6 py-12">
                      <img
                        src={data.thumbnail}
                        className="h-32 w-32 cartTotal rounded-md"
                        alt={data.title}
                      />
                    </td>
                    <td className="px-6 py-4">{data.title}</td>
                    <td className="px-6 py-4">Rs. {data.price}</td>
                    <td className="px-6 py-4">{data.quantity}</td>
                    <td className="px-6 py-4">Rs. {Math.ceil(data.price * data.quantity)}</td>
                    <td>
                      <button
                        onClick={() => deleteProduct(data.id)}
                        className="mt-3 flex font-serif justify-center rounded-md total px-3 py-1.5 text-2xl font-semibold text-white"
                      >
                        <AiFillDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="cartTotal w-full lg:w-1/4 mt-8 lg:mt-0">
            <h1 className="text-center font-bold text-xl sm:text-2xl mb-8">Cart Totals</h1>
            <div className="flex flex-col sm:flex-row justify-between mb-4">
              <h1 className="font-medium text-center sm:text-left">Subtotal</h1>
              <h1 className="font-medium text-xl text-center sm:text-right">
                Rs. {Math.ceil(products.reduce((acc, product) => acc + product.price * product.quantity, 0))}
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row justify-between mb-4">
              <h1 className="font-medium text-center sm:text-left">Total</h1>
              <h1 className="font-medium text-xl text-center sm:text-right">
                Rs. {Math.ceil(products.reduce((acc, product) => acc + product.price * product.quantity, 0))}
              </h1>
            </div>

            <div className="flex justify-center">
              <Link
                to="/checkOut"
                onClick={handleCheckout}
                className="mt-3 font-serif border-black border rounded-xl px-3 py-1.5 text-2xl font-semibold text-black shadow-sm"
              >
                Check Out
              </Link>
            </div>
          </div>

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

export default Cart;
