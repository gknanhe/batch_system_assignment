import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import useStore from "../store/useSetting";
import ListBox from "./ListBox";
export default function CartModel() {
  const { isCartModalOpen, setIsCartModalOpen, cart, setCart } = useStore();

  function closeModal() {
    setIsCartModalOpen(false);
  }

  function openModal() {
    setIsCartModalOpen(true);
  }

  const handleCart = (itemToRemove) => {
    const updatedCart = cart.filter((item) => item.id !== itemToRemove.id);
    setCart(updatedCart);
  };

  return (
    <>
      <Transition appear show={isCartModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 " />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all ">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-700 flex  justify-between"
                  >
                    <p>Cart</p>
                    <svg
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-6 cursor-pointer text-gray-700"
                      onClick={closeModal}
                    >
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                    </svg>
                    {/* </span> */}
                  </Dialog.Title>
                  <div className="mt-2 max-h-[350px] overflow-y-auto ">
                    <div className="text-sm text-gray-500">
                      {cart.length ? (
                        cart.map((c) => (
                          <div
                            key={c.id}
                            className="mt-4 px-5 pb-5 flex flex-col gap-1"
                          >
                            <div className="mt-2 mb-5 flex items-center justify-center">
                              <div
                                key={c.id}
                                className="flex flex-col justify-center items-center gap-3"
                              >
                                <a href="#">
                                  <h5 className="text-xl tracking-tight text-slate-900">
                                    {c.title}
                                  </h5>
                                </a>
                                <p className="flex gap-2 items-end justify-center">
                                  <span className="text-3xl font-bold text-slate-900">
                                    ${c.price}
                                  </span>
                                  <span className="text-sm text-slate-900 line-through">
                                    ${c.price + 200}
                                  </span>
                                </p>
                                <a
                                  href="#"
                                  className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                                  onClick={() => handleCart(c)}
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
                                  Remove from cart
                                </a>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p>No Items added yet</p>
                      )}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
