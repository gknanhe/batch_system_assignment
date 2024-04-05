import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import useStore from "../store/useSetting";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="h-fit w-fit absolute right-[-30px] top-1/2 z-10 flex justify-center items-center  p-2 bg-clip-padding backdrop-filter bg-indigo-500 rounded-full text-blue-900 backdrop-blur-md bg-opacity-40 "
      //   style={{ ...style display: "block", background: "" }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="h-fit w-fit absolute left-[-30px] top-1/2 z-10 flex justify-center items-center  p-2 bg-clip-padding backdrop-filter bg-indigo-500 rounded-full text-blue-900 backdrop-blur-md bg-opacity-40 "
      //   style={{ ...style display: "block", background: "" }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
    </div>
  );
}

function Responsive() {
  const { products, productCardType } = useStore();
  console.log("products", products);
  //   const product = {
  //     id: 1,
  //     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //     price: 109.95,
  //     description:
  //       "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //     category: "men's clothing",
  //     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //     rating: {
  //       rate: 3.9,
  //       count: 120,
  //     },
  //   };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 2160,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="slider-container h-56 mx-8 ">
      <Slider {...settings}>
        {products?.map((product) => (
          <div className="h-[590px] w-full px-3">
            <Card
              product={product}
              key={product.id}
              productCardType={productCardType}
            />
          </div>
        ))}{" "}
      </Slider>
    </div>
  );
}

export default Responsive;
