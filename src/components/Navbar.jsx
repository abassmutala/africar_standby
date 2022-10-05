import { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";

const navigation = {
  pages: [
    { name: "Explore", href: "/" },
    { name: "How it works", href: "/" },
  ],
};

export default function ProductDetails() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 flex z-40">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 pt-5 pb-2 flex">
                  <button
                    type="button"
                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <MdOutlineClose className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <Link
                        to={page.href}
                        className="-m-2 p-2 block font-medium text-gray-900"
                      >
                        {page.name}
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  <div className="flow-root">
                    <Link
                      to="/sign-in"
                      className="-m-2 p-2 block font-medium text-gray-900"
                    >
                      Sign in
                    </Link>
                  </div>
                  <div className="flow-root">
                    <Link
                      to="/"
                      className="-m-2 p-2 block font-medium text-gray-900"
                    >
                      Help
                    </Link>
                  </div>
                </div>

                <div className="border-t border-gray-200 py-6 px-4">
                  <div className="flow-root">
                    <Link
                      to="/become-a-host"
                      className="-m-2 p-2 block font-medium text-gray-900"
                    >
                      Join
                    </Link>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="sticky top-0 bg-white border-b border-gray-200">
        <nav
          aria-label="Top"
          className="px-4 mx-auto max-w-[1440px] sm:px-6 lg:px-8"
        >
          <div className="h-16 flex items-center">
            <button
              type="button"
              className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <MdOutlineMenu className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              <a href="/">
                <span className="sr-only">Logo</span>
                <div class="block">
                  <div className="flex flex-row">
                    <h6 className="text-3xl font-bold">africar</h6>
                    <span class="flex mt-5">
                      <span class="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-primary-color opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-2 w-2 bg-primary-color"></span>
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* Flyout menus */}
            <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch lg:z-10">
              <div className="h-full flex space-x-2">
                {navigation.pages.map((page) => (
                  <Link
                    key={page.name}
                    href={page.href}
                    className="text-gray-700 px-4 py-6 hover:bg-button-hover whitespace-nowrap"
                  >
                    <span>{page.name}</span>
                  </Link>
                ))}
              </div>
            </Popover.Group>

            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end space-x-2">
                <Link
                  to="/sign-in"
                  className="text-gray-700 px-4 py-6 hover:bg-button-hover whitespace-nowrap"
                >
                  <span>Sign in</span>
                </Link>
                <span className="h-6 w-px bg-gray-300" aria-hidden="true" />
                <Link
                  to="/"
                  className="text-gray-700 px-4 py-6 hover:bg-button-hover whitespace-nowrap"
                >
                  <span>Help</span>
                </Link>
                <Link
                  type="button"
                  className="text-gray-700 px-4 py-6 hover:bg-button-hover whitespace-nowrap"
                  to="/become-a-host"
                >
                  <span class="whitespace-nowrap px-4 py-[2px] rounded-full border-2 border-primary-color">
                    Join
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
