import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import useStore from "../store/useSetting";
import ListBox from "./ListBox";
export default function MyModal() {
  const {
    isSettingModalOpen,
    setIsSettingModalOpen,
    setProductCardVariant,
    setProductCardType,
    setNavbar,
    navbar,
    productCardType,
    productCardVariant,
  } = useStore();

  const [navbarState, setNavbarState] = useState(navbar);
  const [productCardVarientState, setProductCardVarientState] =
    useState(productCardVariant);
  const [productCardTypeState, setProductCardTypeState] =
    useState(productCardType);

  function closeModal() {
    setIsSettingModalOpen(false);
  }

  function openModal() {
    setIsSettingModalOpen(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(
      "setSelectedValues",
      navbarState,
      productCardTypeState,
      productCardVarientState
    );
    // Access all selected values from state
    setNavbar(navbarState);
    setProductCardType(productCardTypeState);
    setProductCardVariant(productCardVarientState);

    closeModal();
    setTimeout(() => {
      console.log("store values:", navbar, productCardType, productCardVariant);
    }, 3000);
  }

  return (
    <>
      <Transition appear show={isSettingModalOpen} as={Fragment}>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-700 flex  justify-between"
                  >
                    <p>Select Settings</p>
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
                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2 h-fit">
                      <div className="mt-2  flex flex-col gap-1 z-30">
                        <p className="text-gray-500">Navbar</p>
                        {/* <ListBox
                          name="navbar"
                          handleValueChange={handleValueChange}
                          options={navbarOptions}
                        /> */}

                        <label
                          htmlFor="navbar"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Select an option
                        </label>
                        <select
                          name="Navbar"
                          id="navbar"
                          value={navbarState}
                          onChange={(e) => {
                            setNavbarState(e.target.value);
                          }}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          {/* <option selected>Select Navbar </option> */}
                          <option value="Navbar1">Navbar 1</option>
                          <option value="Navbar2">Navbar 2</option>
                        </select>
                      </div>

                      <div className="mt-2  flex flex-col gap-1 z-20">
                        <p className="text-gray-500">Product Card Variant </p>
                        {/* <ListBox
                          name="productCardVariant"
                          handleValueChange={handleValueChange}
                          options={productCardVariantOptions}
                        /> */}
                        <label
                          htmlFor="productCardType"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Select an option
                        </label>
                        <select
                          name="Buttons"
                          id="productCardType"
                          value={productCardTypeState}
                          onChange={
                            (e) => {
                              setProductCardTypeState(e.target.value);
                            }
                            // handleValueChange(e.target.name, e.target.value)
                          }
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          {/* <option selected>Select productCardType </option> */}
                          <option value="with_buttons">With Buttons</option>
                          <option value="withaut_buttons">
                            withaut Buttons
                          </option>
                        </select>
                      </div>

                      <div className="mt-2  flex flex-col gap-1">
                        <p className="text-gray-500">Product Card Type</p>
                        {/* <ListBox
                          name="productCardType"
                          handleValueChange={handleValueChange}
                          options={productCardTypeOptions}
                        /> */}
                        <label
                          htmlFor="productCardVariant"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Select an option
                        </label>
                        <select
                          name="View"
                          id="productCardVariant"
                          value={productCardVarientState}
                          onChange={
                            (e) => {
                              setProductCardVarientState(e.target.value);
                            }
                            // handleValueChange(e.target.name, e.target.value)
                          }
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          {/* <option selected>Select productCardVariant </option> */}
                          <option value="view_all">View all </option>
                          <option value="carousel">Carousel </option>
                        </select>
                      </div>

                      <div className="mt-4">
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          // onClick={closeModal}
                        >
                          Save Settings
                        </button>
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
