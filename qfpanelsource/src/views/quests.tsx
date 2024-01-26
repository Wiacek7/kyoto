import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { classNames } from "../util";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Quests = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="opacity-50">Rounds</h1>
        <p className="opacity-35 text-sm">
          Admin can start a new QF Round here
        </p>
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-2 flex-col sm:flex-row justify-between">
          <Menu
            as="div"
            className="relative inline-block sm:max-w-[220px] w-full text-left"
          >
            <div>
              <Menu.Button className="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-transparent  px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-slate-900">
                All Categories
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-white"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-0 z-10 sm:max-w-[220px] mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <p
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Category 1
                      </p>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <p
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Category 2
                      </p>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <p
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Category 3
                      </p>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <div className="relative rounded-md w-full sm:w-auto shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
              <MagnifyingGlassIcon className="text-[#83899F] w-5 h-5" />
            </div>
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full border-0  py-1.5 pl-8 pr-12 text-gray-900 focus:ring-0 rounded-xl placeholder:text-[#83899F]  sm:text-sm sm:leading-6"
              placeholder="Search rounds."
            />
            <span className="absolute inset-y-0 right-4 flex items-center text-slate-700">
              
            </span>
          </div>
        
          
<form className="max-w-md mx-auto">
  <div className="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
    </div>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

        </div>
      </div>
    </div>
  );
};

export default Quests;

const Card = () => {
  return (
    <div className="rounded-3xl border border-white/15 p-3 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex-1 flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={26}
            height={33}
            fill="none"
          >
            <g fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
              <path
                fill="#02E2AC"
                d="M20.977 13.067a8.516 8.516 0 0 1 1.582 4.99 8.5 8.5 0 0 1-1.582 4.916l2.159 1.644a11.196 11.196 0 0 0 2.13-6.545 11.22 11.22 0 0 0-2.293-6.856l-1.238 1.116-.758.735Z"
              />
              <path
                fill="#fff"
                d="m25.058 26.073-7.262-5.523c.518-.681.814-1.51.858-2.37a4.26 4.26 0 0 0-.65-2.428l3.475-3.14 3.638-3.405a.59.59 0 0 0 .015-.844l-.503-.503a14.353 14.353 0 0 0-9.746-4.265l.015-2c.014-.132 0-.266-.03-.399a1.034 1.034 0 0 0-.192-.355.881.881 0 0 0-.326-.237.862.862 0 0 0-.384-.09.862.862 0 0 0-.385.09c-.118.059-.236.133-.325.237a.877.877 0 0 0-.192.34.74.74 0 0 0-.03.4l-.015 2.058a14.03 14.03 0 0 0-2.588.504l.015-2.562a1.22 1.22 0 0 0-.03-.4 1.036 1.036 0 0 0-.192-.355.882.882 0 0 0-.325-.237A.862.862 0 0 0 9.514.5a.862.862 0 0 0-.385.089c-.118.06-.236.133-.325.237a.877.877 0 0 0-.192.34.74.74 0 0 0-.03.4L8.538 4.84A14.39 14.39 0 0 0 1.6 11.414 14.502 14.502 0 0 0 .285 20.89a14.468 14.468 0 0 0 4.896 8.218 14.375 14.375 0 0 0 8.947 3.347l10.575.044a.594.594 0 0 0 .592-.592v-5.346a.625.625 0 0 0-.237-.489ZM14.335 29.88a11.899 11.899 0 0 1-7.187-2.473 11.917 11.917 0 0 1-4.2-6.353 11.948 11.948 0 0 1 .517-7.596 11.897 11.897 0 0 1 5.028-5.716l-.014 3.895c-.015.133 0 .266.03.4.044.133.103.251.192.355a.882.882 0 0 0 .325.237.863.863 0 0 0 .77 0c.117-.06.236-.134.324-.237a.877.877 0 0 0 .193-.34.74.74 0 0 0 .03-.4l.014-4.784a11.865 11.865 0 0 1 4.067-.696c2.559 0 5.044.845 7.07 2.385a.303.303 0 0 1 .03.459l-5.532 5.079a4.218 4.218 0 0 0-1.597-.326c-.607 0-1.213.118-1.775.37a4.186 4.186 0 0 0-1.45 1.081c-.399.46-.695 1.007-.872 1.585a4.153 4.153 0 0 0-.133 1.806 4.38 4.38 0 0 0 .62 1.703c.326.518.77.948 1.273 1.288a4.394 4.394 0 0 0 1.7.637 4.122 4.122 0 0 0 1.805-.133l7.07 5.375a.31.31 0 0 1 .118.237l-.015 1.895a.297.297 0 0 1-.296.297l-8.105-.03Zm1.73-11.846c0 .325-.103.651-.28.932a1.717 1.717 0 0 1-.754.622c-.311.134-.651.163-.962.09a1.8 1.8 0 0 1-.858-.46 1.643 1.643 0 0 1-.355-1.821c.134-.311.34-.563.622-.755a1.76 1.76 0 0 1 .931-.282c.444 0 .873.178 1.184.504.295.296.473.71.473 1.17Z"
              />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 .5h26v32H0z" />
              </clipPath>
            </defs>
          </svg>
          <h1>Gitcoin Scores</h1>
          <h3
            className={
              classNames(Math.round(Math.random()))
                ? "bg-[#87FFA1] rounded-full px-2 py-1 text-slate-950"
                : "bg-[#8B8C8C] rounded-full px-2 py-1 text-white"
            }
          >
            26
          </h3>
        </div>
        <Link to={"/123"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={19}
            height={18}
            fill="none"
          >
            <path
              fill="#A1A1A1"
              fillRule="evenodd"
              d="M11.373 3c0-.31.252-.563.563-.563h3.378c.311 0 .563.252.563.563v3.375a.563.563 0 0 1-1.126 0V4.358l-3.543 3.54a.563.563 0 0 1-.796-.796l3.543-3.54h-2.019A.563.563 0 0 1 11.373 3Zm-3.168 7.102c.22.22.22.576 0 .796l-3.543 3.54h2.02a.563.563 0 1 1 0 1.124H3.302A.563.563 0 0 1 2.74 15v-3.375a.563.563 0 0 1 1.126 0v2.017l3.543-3.54c.22-.22.577-.22.796 0Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
      <div className="flex items-end justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3>0.0008827</h3>
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={12}
                fill="none"
              >
                <path stroke="#fff" strokeOpacity={0.15} d="M.5.5h11v11H.5z" />
                <path fill="#2DC24E" d="m6 0 5.196 9H.804L6 0Z" />
              </svg>
              <h3 className="text-[#2DC24E]">52% </h3>
            </div>
          </div>
          <p>$POINTS</p>
        </div>
        <button
          type="button"
          className="rounded-full px-4 bg-[#00a4ff] py-1 text-sm font-semibold text-white shadow-sm hover:bg-[#00a4ff]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00a4ff]"
        >
          CLAIM
        </button>
      </div>
    </div>
  );
};
