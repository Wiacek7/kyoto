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
  { name: "Questes", href: "/", Icon: temp() },
  {
    name: "Leaderboard",
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
    name: "Claim POINTS",
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
  {
    name: "Doc",
    href: "https://docs.pointshive.com",
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={25}
        fill="none"
      >
        <g clipPath="url(#a)">
          <path
            fill="#FFA409"
            d="M10.802 18.228a.702.702 0 1 1-.002 1.404.702.702 0 0 1 .002-1.404Zm11.024-4.347a.706.706 0 0 1-.703-.703.703.703 0 1 1 .703.703Zm0-2.876a2.176 2.176 0 0 0-2.174 2.174c0 .233.039.465.115.691l-7.181 3.823a2.164 2.164 0 0 0-1.784-.937c-.83 0-1.584.475-1.95 1.216L2.4 14.57c-.682-.358-1.192-1.48-1.138-2.502.028-.533.212-.947.493-1.107.178-.1.392-.092.62.027l.042.023c1.71.9 7.304 3.847 7.54 3.956.363.17.565.237 1.185-.057l11.564-6.014c.17-.064.368-.227.368-.474 0-.342-.355-.477-.355-.477-.658-.315-1.67-.788-2.655-1.25-2.108-.987-4.497-2.105-5.546-2.655-.906-.474-1.635-.074-1.765.006l-.252.125C7.78 6.506 1.46 9.636 1.1 9.855c-.643.392-1.042 1.173-1.094 2.142-.08 1.537.703 3.14 1.824 3.727l6.822 3.518a2.175 2.175 0 0 0 2.15 1.862 2.177 2.177 0 0 0 2.173-2.14l7.514-4.073a2.171 2.171 0 0 0 3.51-1.713 2.176 2.176 0 0 0-2.173-2.174"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 .458h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
];
const socialLinks = [
  {
    id: 1,
    name: "Twitter",
    href: "https://x.com/Points_Hive",
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
      >
        <path
          fill="#FFA409"
          d="M18.326 1.904H21.7l-7.37 8.423L23 21.79h-6.789l-5.317-6.952L4.81 21.79H1.434l7.883-9.01L1 1.904h6.961l4.806 6.354 5.56-6.354ZM17.142 19.77h1.87L6.945 3.817H4.94l12.203 15.954Z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Discord",
    href: "https://discord.gg/pointshive",
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
      >
        <g clipPath="url(#a)">
          <path
            fill="#FFA409"
            d="M20.317 4.156a19.791 19.791 0 0 0-4.885-1.516.074.074 0 0 0-.079.038c-.21.375-.444.864-.608 1.249a18.271 18.271 0 0 0-5.487 0 12.644 12.644 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.516.07.07 0 0 0-.032.027C.533 8.832-.32 13.366.099 17.843a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.029 14.22 14.22 0 0 0 1.226-1.994c.021-.04.001-.09-.041-.105a13.109 13.109 0 0 1-1.872-.893.077.077 0 0 1-.008-.127c.126-.095.252-.193.372-.292a.074.074 0 0 1 .078-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .079.01c.12.098.245.197.372.292.044.032.04.1-.006.127-.598.35-1.22.645-1.873.892a.077.077 0 0 0-.041.106c.36.698.772 1.363 1.225 1.994a.076.076 0 0 0 .084.028 19.834 19.834 0 0 0 6.002-3.03.077.077 0 0 0 .032-.055c.5-5.176-.838-9.673-3.549-13.66a.06.06 0 0 0-.031-.028ZM8.02 15.117c-1.182 0-2.157-1.086-2.157-2.419S6.82 10.28 8.02 10.28c1.21 0 2.176 1.095 2.157 2.42 0 1.332-.956 2.418-2.157 2.418Zm7.975 0c-1.183 0-2.157-1.086-2.157-2.419s.955-2.419 2.157-2.419c1.21 0 2.176 1.095 2.157 2.42 0 1.332-.946 2.418-2.157 2.418Z"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
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
