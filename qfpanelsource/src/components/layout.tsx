import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Logo as Icon } from "./logo";
import { classNames } from "../util";
import { NavLink, Outlet } from "react-router-dom";

const temp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={23} height={22} fill="none">
    <path
      fill="#FFA409"
      d="M18.51 2.305H4.383A1.154 1.154 0 0 1 3.23 1.152C3.23.517 3.748 0 4.383 0H18.5c.635 0 1.152.517 1.152 1.152a1.14 1.14 0 0 1-1.143 1.153Z"
    />
    <path
      fill="#FFA409"
      d="M18.737 2.305v7.096a7.094 7.094 0 0 1-7.095 7.095h-.354a7.095 7.095 0 0 1-6.778-4.99A6.995 6.995 0 0 1 4.192 9.4V2.305h14.545Z"
    />
    <path
      fill="#FFA409"
      d="M17.356 13.583c0 .01.01.01.01.018 2.703.2 4.1-1.08 4.808-2.295.481-.817.717-1.76.726-2.713V6.914c0-.28-.027-.562-.081-.834-.626-2.95-3.902-2.731-4.092-2.713v1.941l.009-.018s2.286-.19 2.24 2.16c.019.853 0 1.216 0 1.216s.255 2.73-2.54 2.903c-.009-.027-.018-.045-.027-.073a7.172 7.172 0 0 1-1.053 2.087ZM5.544 13.583c0 .01-.01.01-.01.018-2.703.2-4.1-1.08-4.808-2.295C.245 10.489.009 9.546 0 8.593V6.914c0-.28.027-.562.082-.834.626-2.95 3.901-2.731 4.092-2.713v1.941l-.01-.018s-2.286-.19-2.24 2.16c-.019.853 0 1.216 0 1.216s-.254 2.73 2.54 2.903c.01-.027.018-.045.027-.073.245.763.6 1.461 1.053 2.087ZM12.727 16.34h-2.676v3.64h2.676v-3.64ZM14.311 19.98h-5.97c-.1 0-.19.081-.19.19v1.288h6.342V20.17c.009-.1-.082-.19-.182-.19Z"
    />
    <path
      fill="url(#a)"
      d="m11.989 5.054.499 1.007c.081.173.254.29.444.318l1.116.163c.481.073.672.663.327.998l-.808.79a.608.608 0 0 0-.172.517l.19 1.107a.586.586 0 0 1-.852.617l-.998-.526a.578.578 0 0 0-.545 0l-.998.526a.587.587 0 0 1-.853-.617l.19-1.107a.559.559 0 0 0-.172-.517l-.807-.79c-.345-.335-.154-.934.326-.998l1.116-.163a.598.598 0 0 0 .445-.318l.5-1.007a.587.587 0 0 1 1.052 0Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={9.027}
        x2={14.309}
        y1={6.714}
        y2={9.799}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFF8CE" />
        <stop offset={0.494} stopColor="#FFF3C0" />
        <stop offset={1} stopColor="#FFE9A0" />
      </linearGradient>
    </defs>
  </svg>
);
const navigation = [
  { name: "QF Rounds", href: "/", Icon: temp() },
  {
    name: "Add Projects to QF",
    href: "/leaderboard",
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={23}
        height={22}
        fill="none"
      >
        <path
          fill="#FFA409"
          d="M18.51 2.305H4.383A1.154 1.154 0 0 1 3.23 1.152C3.23.517 3.748 0 4.383 0H18.5c.635 0 1.152.517 1.152 1.152a1.14 1.14 0 0 1-1.143 1.153Z"
        />
        <path
          fill="#FFA409"
          d="M18.737 2.305v7.096a7.094 7.094 0 0 1-7.095 7.095h-.354a7.095 7.095 0 0 1-6.778-4.99A6.995 6.995 0 0 1 4.192 9.4V2.305h14.545Z"
        />
        <path
          fill="#FFA409"
          d="M17.356 13.583c0 .01.01.01.01.018 2.703.2 4.1-1.08 4.808-2.295.481-.817.717-1.76.726-2.713V6.914c0-.28-.027-.562-.081-.834-.626-2.95-3.902-2.731-4.092-2.713v1.941l.009-.018s2.286-.19 2.24 2.16c.019.853 0 1.216 0 1.216s.255 2.73-2.54 2.903c-.009-.027-.018-.045-.027-.073a7.172 7.172 0 0 1-1.053 2.087ZM5.544 13.583c0 .01-.01.01-.01.018-2.703.2-4.1-1.08-4.808-2.295C.245 10.489.009 9.546 0 8.593V6.914c0-.28.027-.562.082-.834.626-2.95 3.901-2.731 4.092-2.713v1.941l-.01-.018s-2.286-.19-2.24 2.16c-.019.853 0 1.216 0 1.216s-.254 2.73 2.54 2.903c.01-.027.018-.045.027-.073.245.763.6 1.461 1.053 2.087ZM12.727 16.34h-2.676v3.64h2.676v-3.64ZM14.311 19.98h-5.97c-.1 0-.19.081-.19.19v1.288h6.342V20.17c.009-.1-.082-.19-.182-.19Z"
        />
        <path
          fill="url(#a)"
          d="m11.989 5.054.499 1.007c.081.173.254.29.444.318l1.116.163c.481.073.672.663.327.998l-.808.79a.608.608 0 0 0-.172.517l.19 1.107a.586.586 0 0 1-.852.617l-.998-.526a.578.578 0 0 0-.545 0l-.998.526a.587.587 0 0 1-.853-.617l.19-1.107a.559.559 0 0 0-.172-.517l-.807-.79c-.345-.335-.154-.934.326-.998l1.116-.163a.598.598 0 0 0 .445-.318l.5-1.007a.587.587 0 0 1 1.052 0Z"
        />
        <defs>
          <linearGradient
            id="a"
            x1={9.027}
            x2={14.309}
            y1={6.714}
            y2={9.799}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFF8CE" />
            <stop offset={0.494} stopColor="#FFF3C0" />
            <stop offset={1} stopColor="#FFE9A0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "Release QF Payments",
    href: "/claimed-points",
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={22}
        height={24}
        fill="none"
      >
        <path
          fill="#FFA409"
          d="M1.512 12.053C8.355 10.62 10.742 8.335 11.807.988c1.459 7.653 3.652 10.092 10.195 11.065-7.413 1.581-9.144 4.472-10.195 11.316-1.346-7.845-3.73-10.16-10.295-11.316Z"
        />
        <path
          fill="#fff"
          d="M15.736 5.417c1.393-.291 1.88-.756 2.096-2.25.297 1.556.744 2.052 2.075 2.25-1.509.322-1.861.91-2.075 2.3-.274-1.594-.759-2.065-2.096-2.3ZM-.002 19.28c2.818-.59 3.8-1.528 4.24-4.546.6 3.144 1.503 4.146 4.197 4.546-3.052.65-3.765 1.837-4.198 4.649-.554-3.223-1.535-4.174-4.239-4.65Z"
        />
      </svg>
    ),
  },
];
const socialLinks: any[] = [
 
];

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 " />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5 bg-white z-10 rounded-full"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-slate-950"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 bg-slate-950 overflow-y-auto overflow-x-hidden  border-r border-white/15 py-4">
                  <Logo />
                  <Nav />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto overflow-x-hidden border-r border-white/15 py-4">
          <Logo />
          <Nav />
        </div>
      </div>
      <div className="lg:pl-72">
        <div className="h-16 px-3 lg:px-8  flex items-center justify-between  lg:justify-end">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon
                className="h-6 w-6 text-[#FFA409]"
                aria-hidden="true"
              />
            </button>
            <div className="lg:hidden">
              <Icon />
            </div>
          </div>
          <div className="flex gap-x-4 items-center lg:gap-x-6 text-white">
            <div className="relative hover:bg-[#21262D] p-1.5 rounded-full cursor-pointer">
              <BellIcon className="h-6 w-6" aria-hidden="true" />
              <span className="absolute top-1 right-2 bg-[#FF0000] rounded-full w-2 h-2"></span>
            </div>
            <button
              type="button"
              className="rounded-md bg-[#FFFFFF]/10 border border-[#FFFFFF]/10 px-8 py-1.5 text-md font-medium text-white shadow-sm"
            >
              Connect
            </button>
          </div>
        </div>

        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8 text-white relative">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;

const Logo = () => (
  <div className="flex mx-4  h-16 gap-4 bg-[#21262D] rounded-2xl px-4 py-1.5 border border-[#313843] shrink-0 items-center">
    <Icon />
    <h1 className="text-white font-bold text-3xl">PointsHive</h1>
  </div>
);

const Nav = () => (
  <nav className="flex flex-1 flex-col">
    <ul className="flex flex-1 flex-col">
      <li className="px-6 py-5">
        <ul className="-mx-2 space-y-1">
          {navigation.map((item) => (
            <li key={item.name}>
              {item.name === "Doc" ? (
                <a
                  target="_blank"
                  rel="noreferrer"
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    "text-white hover:bg-[#21262D] ",
                    "group flex gap-x-3 rounded-xl py-2 px-4 text-sm leading-6 font-semibold "
                  )}
                >
                  {item.Icon}
                  {item.name}
                </a>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive, isPending }) =>
                    classNames(
                      isActive
                        ? " text-slate-950 bg-white"
                        : "text-white hover:bg-[#21262D] ",
                      "group flex gap-x-3 rounded-xl py-2 px-4 text-sm leading-6 font-semibold "
                    )
                  }
                >
                  {item.Icon}
                  {item.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </li>
      <li className="px-6 border-t border-white/15 py-5">
        <div className="text-xs font-semibold leading-6 text-[#83899F]">
          Follow us
        </div>
        <ul className="-mx-2 mt-2 space-y-1">
          {socialLinks.map((team) => (
            <li key={team.name}>
              <a
                rel="noreferrer"
                target={"_blank"}
                href={team.href}
                className={classNames(
                  "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-white"
                )}
              >
                {team.Icon}
                <span className="truncate">{team.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  </nav>
);
