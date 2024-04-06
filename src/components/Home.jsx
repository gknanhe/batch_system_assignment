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
        <div className="font-bold text-2xl text-[#5d717b]" onClick={printhello}>
          E Store
        </div>

        <button onClick={openModal} className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-[#5d717b]"
          >
            <path d="M17.004 10.407c.138.435-.216.842-.672.842h-3.465a.75.75 0 0 1-.65-.375l-1.732-3c-.229-.396-.053-.907.393-1.004a5.252 5.252 0 0 1 6.126 3.537ZM8.12 8.464c.307-.338.838-.235 1.066.16l1.732 3a.75.75 0 0 1 0 .75l-1.732 3c-.229.397-.76.5-1.067.161A5.23 5.23 0 0 1 6.75 12a5.23 5.23 0 0 1 1.37-3.536ZM10.878 17.13c-.447-.098-.623-.608-.394-1.004l1.733-3.002a.75.75 0 0 1 .65-.375h3.465c.457 0 .81.407.672.842a5.252 5.252 0 0 1-6.126 3.539Z" />
            <path
              fillRule="evenodd"
              d="M21 12.75a.75.75 0 1 0 0-1.5h-.783a8.22 8.22 0 0 0-.237-1.357l.734-.267a.75.75 0 1 0-.513-1.41l-.735.268a8.24 8.24 0 0 0-.689-1.192l.6-.503a.75.75 0 1 0-.964-1.149l-.6.504a8.3 8.3 0 0 0-1.054-.885l.391-.678a.75.75 0 1 0-1.299-.75l-.39.676a8.188 8.188 0 0 0-1.295-.47l.136-.77a.75.75 0 0 0-1.477-.26l-.136.77a8.36 8.36 0 0 0-1.377 0l-.136-.77a.75.75 0 1 0-1.477.26l.136.77c-.448.121-.88.28-1.294.47l-.39-.676a.75.75 0 0 0-1.3.75l.392.678a8.29 8.29 0 0 0-1.054.885l-.6-.504a.75.75 0 1 0-.965 1.149l.6.503a8.243 8.243 0 0 0-.689 1.192L3.8 8.216a.75.75 0 1 0-.513 1.41l.735.267a8.222 8.222 0 0 0-.238 1.356h-.783a.75.75 0 0 0 0 1.5h.783c.042.464.122.917.238 1.356l-.735.268a.75.75 0 0 0 .513 1.41l.735-.268c.197.417.428.816.69 1.191l-.6.504a.75.75 0 0 0 .963 1.15l.601-.505c.326.323.679.62 1.054.885l-.392.68a.75.75 0 0 0 1.3.75l.39-.679c.414.192.847.35 1.294.471l-.136.77a.75.75 0 0 0 1.477.261l.137-.772a8.332 8.332 0 0 0 1.376 0l.136.772a.75.75 0 1 0 1.477-.26l-.136-.771a8.19 8.19 0 0 0 1.294-.47l.391.677a.75.75 0 0 0 1.3-.75l-.393-.679a8.29 8.29 0 0 0 1.054-.885l.601.504a.75.75 0 0 0 .964-1.15l-.6-.503c.261-.375.492-.774.69-1.191l.735.267a.75.75 0 1 0 .512-1.41l-.734-.267c.115-.439.195-.892.237-1.356h.784Zm-2.657-3.06a6.744 6.744 0 0 0-1.19-2.053 6.784 6.784 0 0 0-1.82-1.51A6.705 6.705 0 0 0 12 5.25a6.8 6.8 0 0 0-1.225.11 6.7 6.7 0 0 0-2.15.793 6.784 6.784 0 0 0-2.952 3.489.76.76 0 0 1-.036.098A6.74 6.74 0 0 0 5.251 12a6.74 6.74 0 0 0 3.366 5.842l.009.005a6.704 6.704 0 0 0 2.18.798l.022.003a6.792 6.792 0 0 0 2.368-.004 6.704 6.704 0 0 0 2.205-.811 6.785 6.785 0 0 0 1.762-1.484l.009-.01.009-.01a6.743 6.743 0 0 0 1.18-2.066c.253-.707.39-1.469.39-2.263a6.74 6.74 0 0 0-.408-2.309Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isSettingModalOpen ? <Modal /> : ""}
      {isCartModalOpen ? <CartModel /> : ""}

      {/* {navbar === "Navbar1"? (<div>

</div>):(<div className=""></div>)} */}

      {navbar === "Navbar1" ? (
        <div className="flex justify-start items-cenetr flex-col ">
          <div className="w-full h-20 bg-[#dcdcff] border-b-2 shadow-lg text-indigo-400 font-bold text-2xl flex justify-around items-center">
            <div className="">E Store</div>
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
            <div className=" font-bold text-xl text-indigo-500 flex justify-center md:justify-start  mx- md:mx-10  gap-3 items-center w-full h-10">
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
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 50 50"
                className="text-indigo-500"
              >
                <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"></path>
              </svg> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7 text-indigo-500"
              >
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>

              <p className="text-indigo-500 font-bold hidden md:block">Home</p>
            </div>
            <button onClick={openCartModal} className="w-full ">
              <div className="flex items-center cursor-pointer justify-center md:justify-start   md:mx-10 h-10 gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7 text-indigo-500"
                >
                  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                </svg>

                <p className="text-indigo-500 font-bold hidden md:block">
                  Cart
                </p>
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
