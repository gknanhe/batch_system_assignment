import React from "react";
import useStore from "../store/useSetting";

const Card = ({ product, productCardType }) => {
  const { cart, setCart, produts, setProducts } = useStore();

  const { title, price, description, category, image, rating } = product; // Destructure product properties

  const handleCart = (e) => {
    e.preventDefault();
    console.log("add cart started");
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex === -1) {
      updatedCart.push({ ...product });

      setCart(updatedCart);
    }
  };

  const ratings = (stars) => {
    // console.log("stars", stars);
    const roundedStars = Math.min(5, Math.max(0, Math.floor(stars)));
    // console.log("roundestars", roundedStars);
    const filledStars = new Array(roundedStars).fill(null).map((_, index) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
        key={index}
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
          clipRule="evenodd"
        />
      </svg>
    ));

    const emptyStars = new Array(5 - roundedStars)
      .fill(null)
      .map((_, index) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          key={index}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
      ));

    return [...filledStars, ...emptyStars];
  };

  return (
    <>
      <div className="group my-10 flex h-fit  w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-indigo-50 shadow-md">
        <a
          className="relative mx-3 mt-3 flex h-60 bg-white p-3 box-border overflow-hidden rounded-xl"
          href="#"
        >
          <img
            className="peer  absolute top-0 right-0 h-full w-full object-contain"
            src={image}
            alt="product image"
          />
          <img
            className="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0"
            src={image}
            // src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="product image"
          />
          {/* <!-- <div className="absolute  bottom-0 mb-4 flex space-x-4 w-full justify-center"> */}
          <div className="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
          <div className="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
          <div className="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
          {/* </div> --> */}
          <svg
            className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z"
            />
          </svg>
          {/* <!-- <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span> --> */}
        </a>
        <div className="mt-4 px-5 pb-5 flex flex-col gap-1">
          <a href="#">
            <h5 className="text-xl tracking-tight text-slate-900">{title}</h5>
          </a>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <div className="flex gap-2 items-end justify-start flex-wrap">
              <span className="text-3xl font-bold text-slate-900">
                ${price}
              </span>
              <span className="text-sm text-slate-900 line-through">
                ${price + 200}
              </span>
              <div className="flex ">
                {ratings(rating.rate).map((rating, index) => (
                  <div key={index}>{rating}</div>
                ))}{" "}
              </div>
            </div>
          </div>
          {productCardType === "withButtons" ? (
            <>
              <a
                href="#"
                className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                onClick={handleCart}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Add to cart
              </a>
              <a
                href="#"
                className="flex items-center justify-center  gap-2 rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                Buy Now
              </a>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
