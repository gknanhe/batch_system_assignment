import React, { useEffect, useState } from "react";
import useStore from "../store/useSetting";
import Modal from "../components/Dialog";
import CartModel from "../components/CartModel";

import Card from "./Card";
import Carousel from "./Carousel";

const Home = () => {
  const {
    isSettingModalOpen,
    setIsSettingModalOpen,
    setProductCardVariant,
    setProductCardType,
    setNavbar,
    navbar,
    productCardType,
    productCardVariant,
    products,
    setProducts,
    isCartModalOpen,
    setIsCartModalOpen,
    cart,
  } = useStore();

  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if ((await productCardVariant) === "viewAll") {
          const response = await fetch(
            "https://fakestoreapi.com/products?limit=10"
          );
          const data = await response.json();
          setProducts(data);
          console.log(data);
        } else {
          const response = await fetch(
            "https://fakestoreapi.com/products?limit=20"
          );
          const data = await response.json();
          setProducts(data);
          console.log(data);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
    console.log("use effect triggered", productCardVariant);
  }, [navbar, productCardType, productCardVariant]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }
    // if (productCardVariant === "viewAll" && limit < 21) {
    //   loadMoreProducts();
    //   setLimit((prevLimit) => (prevLimit += 10));
    // } else {
    //   return;
    // }

    if (navbar === "Navbar1" && productCardVariant !== "carousel") {
      // Fetch more products only if the limit is less than 20
      if (limit < 20) {
        loadMoreProducts();
        // Increment the limit by 10 for the next fetch
        setLimit((prevLimit) => prevLimit + 10);
      }
    }
  };

  const loadMoreProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products?limit=20");
    const data = await response.json();
    setProducts(data);
    return;
  };
  function closeModal() {
    setIsSettingModalOpen(false);
  }

  function openModal() {
    console.log("hhhhheee");
    setIsSettingModalOpen(true);
  }

  function closeCartModal() {
    setIsCartModalOpen(false);
  }

  function openCartModal() {
    console.log("hhhhheee");
    setIsCartModalOpen(true);
  }

  function printhello() {
    console.log("hello");
  }

  return (
    <>
      <div className="h-14 flex justify-around items-center text-[#a3b7c2] w-full px-2 bg-[#dce5e4]">
        <div className="font-bold text-2xl text-[#a3b7c2]" onClick={printhello}>
          E Store
        </div>

        <button onClick={openModal} className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-settings"
          >
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        </button>
      </div>
      {isSettingModalOpen ? <Modal /> : ""}
      {isCartModalOpen ? <CartModel /> : ""}

      {/* {navbar === "Navbar1"? (<div>

</div>):(<div className=""></div>)} */}

      {navbar === "Navbar1" ? (
        <div className="flex justify-start items-cenetr flex-col ">
          <div className="w-full h-20 bg-[#f5f5f7] border-b-2 shadow-lg text-gray-600 font-bold text-2xl flex justify-around items-center">
            <div className="">Ecommerse Store</div>
            <button onClick={openCartModal} className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-shopping-cart m-2 cursor-pointer p-3  box-content boxs"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </button>
          </div>
          <div className="flex overflow-y-auto justify-center items-center ">
            {productCardVariant === "viewAll" ? (
              <div className="h-auto w-full bg-[#f7f8fd] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center lg:w-[80%]">
                {products.map((product) => (
                  <Card
                    product={product}
                    key={product.id}
                    productCardType={productCardType}
                  />
                ))}
              </div>
            ) : (
              <div className="h-screen w-full bg-[#f7f8fd]">
                <Carousel />
                {/* <Card /> */}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex justify-start items-start gap-5">
          <div className="h-screen pt-10  w-16 md:w-72 bg-indigo-50 shadow-xl flex flex-col gap-3">
            <div className=" font-bold text-xl text-gray-600 flex justify-center md:justify-start  mx- md:mx-10  gap-3 items-center w-full h-10">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 616 512"
                height="24px"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M602 118.6L537.1 15C531.3 5.7 521 0 510 0H106C95 0 84.7 5.7 78.9 15L14 118.6c-33.5 53.5-3.8 127.9 58.8 136.4 4.5.6 9.1.9 13.7.9 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18.1 20.1 44.3 33.1 73.8 33.1 4.7 0 9.2-.3 13.7-.9 62.8-8.4 92.6-82.8 59-136.4zM529.5 288c-10 0-19.9-1.5-29.5-3.8V384H116v-99.8c-9.6 2.2-19.5 3.8-29.5 3.8-6 0-12.1-.4-18-1.2-5.6-.8-11.1-2.1-16.4-3.6V480c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V283.2c-5.4 1.6-10.8 2.9-16.4 3.6-6.1.8-12.1 1.2-18.2 1.2z"></path>
              </svg>
              <p className="hidden md:block">E Store</p>
            </div>
            <div className="flex justify-center md:justify-start  mx- md:mx-10  gap-3 items-center w-full h-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 50 50"
                className="text-indigo-500"
              >
                <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"></path>
              </svg>
              <p className="text-gray-600 hidden md:block">Home</p>
            </div>
            <button onClick={openCartModal} className="w-full ">
              <div className="flex items-center cursor-pointer justify-center md:justify-start   md:mx-10 h-10 gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-shopping-cart m-2 mx-0 px-0 cursor-pointer p-3  box-content boxs"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>

                <p className="text-gray-700 hidden md:block">Cart</p>
              </div>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            {productCardVariant === "viewAll" ? (
              <div className="h-full w-full bg-[#f7f8fd] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
                {products.map((product) => (
                  <Card
                    product={product}
                    key={product.id}
                    productCardType={productCardType}
                  />
                ))}
              </div>
            ) : (
              <div className="h-screen w-full bg-[#f7f8fd]">
                <Carousel />
                {/* <Card /> */}
              </div>
            )}
          </div>
        </div>
      )}

      {/* <Card /> */}
    </>
  );
};

export default Home;
