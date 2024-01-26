import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { classNames } from "../util";
import { FunnelIcon } from "@heroicons/react/20/solid";

const tabs = [
  { name: "All", href: "#", current: true },

];

const ClaimedPoints = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="opacity-50">Add projects to QF Round</h1>
        <p className="opacity-35 text-sm">
          Search for a porject and add it to QF Round.
        </p>
      </div>
      <div className="flex sm:items-center flex-col-reverse sm:flex-row   sm:border-b border-white/70">
        <div className="flex-1 block mt-2 sm:mt-0 border-b border-white/70">
          <nav className="-mb-px flex space-x-4 sm:space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <p
                key={tab.name}
                className={classNames(
                  tab.current
                    ? " text-white"
                    : "border-transparent text-white/60 hover:text-white/50",
                  "whitespace-nowrap py-2 px-1 text-sm font-medium"
                )}
                aria-current={tab.current ? "page" : undefined}
              >
                {tab.name}
              </p>
            ))}
          </nav>
        </div>
        <h3 className="hidden sm:block text-md">
          Total Projects:{" "}
          <span className="text-[##00a4ff] font-semibold">2,000</span></h3>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-slate-950 shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <FunnelIcon
            className="-ml-0.5 text-slate-950 h-5 w-5"
            aria-hidden="true"
          />
          Filter
        </button>
        <div className="relative rounded-md w-full flex-1 max-w-md  shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
            <MagnifyingGlassIcon className="text-white/80 w-5 h-5" />
          </div>
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full border border-white/15 py-1.5 pl-8 pr-2 bg-transparent text-white/80 focus:ring-0 focus:outline-none rounded-md placeholder:text-[#83899F]  sm:text-sm sm:leading-6"
            placeholder="Search projects, address..."
          />
        </div>
      </div>
      <TableData />

      <div className="flex items-center justify-center">
        <button
          type="button"
          className="rounded-md bg-transparent px-10 py-2 border border-white/15 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
        >
          Explore More
        </button>
      </div>
    </div>
  );
};

export default ClaimedPoints;

const TableData = () => (
  <div className="mt-8 flow-root">
    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0"
              >
                PROJECT
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-white"
              >
                QF ROUND
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-white"
              >
                ADD/REMOVE
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-white"
              >
                CHAIN
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/50">
            <tr>
              <td className="whitespace-nowrap py-4 flex items-center gap-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                <div className="w-10 h-10 flex relative items-center justify-center rounded-2xl bg-green-400">
                  <h1 className="font-bold text-xl">U</h1>
                  <svg
                    className="absolute -bottom-0.5 -right-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={21}
                    fill="none"
                  >
                    <g clipPath="url(#a)">
                      <path
                        fill="#FEDA03"
                        d="M7.836 2.074c.836-1.631 3.158-1.631 3.995 0a2.243 2.243 0 0 0 2.682 1.117c1.74-.56 3.381 1.09 2.825 2.838a2.262 2.262 0 0 0 1.11 2.696c1.625.84 1.625 3.173 0 4.014a2.262 2.262 0 0 0-1.11 2.695c.556 1.749-1.085 3.398-2.825 2.839a2.243 2.243 0 0 0-2.682 1.116c-.837 1.632-3.159 1.632-3.995 0a2.243 2.243 0 0 0-2.682-1.116c-1.74.56-3.382-1.09-2.825-2.839a2.262 2.262 0 0 0-1.111-2.695c-1.624-.84-1.624-3.174 0-4.014a2.262 2.262 0 0 0 1.11-2.696c-.556-1.748 1.086-3.398 2.826-2.838a2.243 2.243 0 0 0 2.682-1.117Z"
                      />
                      <path
                        fill="#000"
                        fillRule="evenodd"
                        d="M13.832 7.833c.338.328.348.87.021 1.21L8.86 14.248l-3.047-3.175a.859.859 0 0 1 .022-1.21.849.849 0 0 1 1.204.022l1.82 1.897 3.768-3.926a.849.849 0 0 1 1.204-.022Z"
                        clipRule="evenodd"
                      />
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path fill="#fff" d="M0 .85h19.667v19.764H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <h1 className="text-white">DEFI GAME</h1>
                  <h4 className="text-cyan-500">0XGRTR42D36H...</h4>
                </div>
              </td>
              <td className="whitespace-nowrap px-3 py-4 space-y-1">
                <span className="inline-flex items-center gap-x-1.5 rounded-full bg-blue-100 px-2 py-0.5 text-sm font-medium text-blue-700">
                  <svg
                    className="h-1.5 w-1.5 fill-blue-500"
                    viewBox="0 0 6 6"
                    aria-hidden="true"
                  >
                    <circle cx={3} cy={3} r={3} />
                  </svg>
                  Round 1
                </span>
              </td>
              <td className="whitespace-nowrap px-3 py-4 flex items-center text-sm gap-2 text-white/80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={26}
                  height={33}
                  fill="none"
                >
                  <g clipPath="url(#a)">
                    <rect
                      width={26}
                      height={32}
                      y={0.329}
                      fill="#04020F"
                      fillOpacity={0.91}
                      rx={3}
                    />
                    <path
                      fill="#02E2AC"
                      fillRule="evenodd"
                      d="M20.976 12.895a8.516 8.516 0 0 1 1.583 4.99 8.5 8.5 0 0 1-1.583 4.917l2.16 1.644a11.196 11.196 0 0 0 2.13-6.546 11.22 11.22 0 0 0-2.293-6.856l-1.239 1.117-.758.734Z"
                      clipRule="evenodd"
                    />
                    <path
                      fill="#F2F8FD"
                      fillRule="evenodd"
                      d="m25.058 25.902-7.262-5.523c.518-.682.814-1.51.858-2.37a4.26 4.26 0 0 0-.65-2.428l3.475-3.14 3.638-3.405a.59.59 0 0 0 .015-.844l-.503-.504a14.353 14.353 0 0 0-9.746-4.265l.015-1.999c.014-.133 0-.266-.03-.4a1.034 1.034 0 0 0-.192-.355.881.881 0 0 0-.326-.237.862.862 0 0 0-.384-.089.862.862 0 0 0-.385.09c-.118.059-.236.133-.325.236a.877.877 0 0 0-.192.34.74.74 0 0 0-.03.4l-.015 2.059a14.03 14.03 0 0 0-2.588.503l.015-2.561a1.22 1.22 0 0 0-.03-.4 1.036 1.036 0 0 0-.192-.356.882.882 0 0 0-.325-.237.862.862 0 0 0-.385-.088.862.862 0 0 0-.385.088c-.118.06-.236.134-.325.237a.877.877 0 0 0-.192.341.74.74 0 0 0-.03.4l-.044 3.272A14.39 14.39 0 0 0 1.6 11.242 14.502 14.502 0 0 0 .285 20.72a14.468 14.468 0 0 0 4.896 8.219 14.375 14.375 0 0 0 8.947 3.346l10.575.045a.594.594 0 0 0 .592-.593v-5.345a.625.625 0 0 0-.237-.49Zm-10.723 3.806a11.899 11.899 0 0 1-7.187-2.473 11.917 11.917 0 0 1-4.2-6.353 11.948 11.948 0 0 1 .517-7.596A11.897 11.897 0 0 1 8.493 7.57l-.014 3.894c-.015.133 0 .267.03.4.044.133.103.252.192.355a.882.882 0 0 0 .325.237.863.863 0 0 0 .77 0c.117-.059.236-.133.324-.237a.877.877 0 0 0 .193-.34.74.74 0 0 0 .03-.4l.014-4.783A11.865 11.865 0 0 1 14.424 6c2.559 0 5.044.844 7.07 2.384a.303.303 0 0 1 .03.46l-5.532 5.078a4.218 4.218 0 0 0-1.597-.325c-.607 0-1.213.118-1.775.37a4.186 4.186 0 0 0-1.45 1.08c-.399.46-.695 1.008-.872 1.585a4.153 4.153 0 0 0-.133 1.807 4.38 4.38 0 0 0 .62 1.703c.326.518.77.947 1.273 1.288a4.394 4.394 0 0 0 1.7.637 4.122 4.122 0 0 0 1.805-.134l7.07 5.376a.31.31 0 0 1 .118.237l-.015 1.895a.297.297 0 0 1-.296.296l-8.105-.03Zm1.73-11.847c0 .326-.103.652-.28.933a1.717 1.717 0 0 1-.754.622c-.311.133-.651.163-.962.089a1.8 1.8 0 0 1-.858-.46 1.643 1.643 0 0 1-.355-1.821c.134-.31.34-.562.622-.755a1.76 1.76 0 0 1 .931-.281c.444 0 .873.178 1.184.503.295.297.473.711.473 1.17Z"
                      clipRule="evenodd"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <rect
                        width={26}
                        height={32}
                        y={0.329}
                        fill="#fff"
                        rx={3}
                      />
                    </clipPath>
                  </defs>
                </svg>
                Gitcoin Passport
              </td>
              <td className="whitespace-nowrap px-3 py-4 space-y-1">
                <span className="inline-flex items-center gap-x-1.5 rounded-full bg-green-100 px-2 py-0.5 text-sm font-medium text-green-700">
                  <svg
                    className="h-1.5 w-1.5 fill-green-500"
                    viewBox="0 0 6 6"
                    aria-hidden="true"
                  >
                    <circle cx={3} cy={3} r={3} />
                  </svg>
                  Polygon
                </span>
              </td>
  
            </tr>
            <tr>
              <td className="whitespace-nowrap py-4 flex items-center gap-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                <div className="w-10 h-10 flex relative items-center justify-center rounded-2xl bg-green-400">
                  <h1 className="font-bold text-xl">U</h1>
                  <svg
                    className="absolute -bottom-0.5 -right-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={21}
                    fill="none"
                  >
                    <g clipPath="url(#a)">
                      <path
                        fill="#FEDA03"
                        d="M7.836 2.074c.836-1.631 3.158-1.631 3.995 0a2.243 2.243 0 0 0 2.682 1.117c1.74-.56 3.381 1.09 2.825 2.838a2.262 2.262 0 0 0 1.11 2.696c1.625.84 1.625 3.173 0 4.014a2.262 2.262 0 0 0-1.11 2.695c.556 1.749-1.085 3.398-2.825 2.839a2.243 2.243 0 0 0-2.682 1.116c-.837 1.632-3.159 1.632-3.995 0a2.243 2.243 0 0 0-2.682-1.116c-1.74.56-3.382-1.09-2.825-2.839a2.262 2.262 0 0 0-1.111-2.695c-1.624-.84-1.624-3.174 0-4.014a2.262 2.262 0 0 0 1.11-2.696c-.556-1.748 1.086-3.398 2.826-2.838a2.243 2.243 0 0 0 2.682-1.117Z"
                      />
                      <path
                        fill="#000"
                        fillRule="evenodd"
                        d="M13.832 7.833c.338.328.348.87.021 1.21L8.86 14.248l-3.047-3.175a.859.859 0 0 1 .022-1.21.849.849 0 0 1 1.204.022l1.82 1.897 3.768-3.926a.849.849 0 0 1 1.204-.022Z"
                        clipRule="evenodd"
                      />
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path fill="#fff" d="M0 .85h19.667v19.764H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <h1 className="text-white">0xXDGET46RG37FD....</h1>
                  <h4 className="text-cyan-500">@degen_rebel</h4>
                </div>
              </td>
              <td className="whitespace-nowrap px-3 py-4 space-y-1">
                <span className="inline-flex items-center gap-x-1.5 rounded-full bg-blue-100 px-2 py-0.5 text-sm font-medium text-blue-700">
                  <svg
                    className="h-1.5 w-1.5 fill-blue-500"
                    viewBox="0 0 6 6"
                    aria-hidden="true"
                  >
                    <circle cx={3} cy={3} r={3} />
                  </svg>
                  Round 1
                </span>
              </td>
              <td className="whitespace-nowrap px-3 py-4 flex items-center text-sm gap-2 text-white/80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={26}
                  height={33}
                  fill="none"
                >
                  <g clipPath="url(#a)">
                    <rect
                      width={26}
                      height={32}
                      y={0.329}
                      fill="#04020F"
                      fillOpacity={0.91}
                      rx={3}
                    />
                    <path
                      fill="#02E2AC"
                      fillRule="evenodd"
                      d="M20.976 12.895a8.516 8.516 0 0 1 1.583 4.99 8.5 8.5 0 0 1-1.583 4.917l2.16 1.644a11.196 11.196 0 0 0 2.13-6.546 11.22 11.22 0 0 0-2.293-6.856l-1.239 1.117-.758.734Z"
                      clipRule="evenodd"
                    />
                    <path
                      fill="#F2F8FD"
                      fillRule="evenodd"
                      d="m25.058 25.902-7.262-5.523c.518-.682.814-1.51.858-2.37a4.26 4.26 0 0 0-.65-2.428l3.475-3.14 3.638-3.405a.59.59 0 0 0 .015-.844l-.503-.504a14.353 14.353 0 0 0-9.746-4.265l.015-1.999c.014-.133 0-.266-.03-.4a1.034 1.034 0 0 0-.192-.355.881.881 0 0 0-.326-.237.862.862 0 0 0-.384-.089.862.862 0 0 0-.385.09c-.118.059-.236.133-.325.236a.877.877 0 0 0-.192.34.74.74 0 0 0-.03.4l-.015 2.059a14.03 14.03 0 0 0-2.588.503l.015-2.561a1.22 1.22 0 0 0-.03-.4 1.036 1.036 0 0 0-.192-.356.882.882 0 0 0-.325-.237.862.862 0 0 0-.385-.088.862.862 0 0 0-.385.088c-.118.06-.236.134-.325.237a.877.877 0 0 0-.192.341.74.74 0 0 0-.03.4l-.044 3.272A14.39 14.39 0 0 0 1.6 11.242 14.502 14.502 0 0 0 .285 20.72a14.468 14.468 0 0 0 4.896 8.219 14.375 14.375 0 0 0 8.947 3.346l10.575.045a.594.594 0 0 0 .592-.593v-5.345a.625.625 0 0 0-.237-.49Zm-10.723 3.806a11.899 11.899 0 0 1-7.187-2.473 11.917 11.917 0 0 1-4.2-6.353 11.948 11.948 0 0 1 .517-7.596A11.897 11.897 0 0 1 8.493 7.57l-.014 3.894c-.015.133 0 .267.03.4.044.133.103.252.192.355a.882.882 0 0 0 .325.237.863.863 0 0 0 .77 0c.117-.059.236-.133.324-.237a.877.877 0 0 0 .193-.34.74.74 0 0 0 .03-.4l.014-4.783A11.865 11.865 0 0 1 14.424 6c2.559 0 5.044.844 7.07 2.384a.303.303 0 0 1 .03.46l-5.532 5.078a4.218 4.218 0 0 0-1.597-.325c-.607 0-1.213.118-1.775.37a4.186 4.186 0 0 0-1.45 1.08c-.399.46-.695 1.008-.872 1.585a4.153 4.153 0 0 0-.133 1.807 4.38 4.38 0 0 0 .62 1.703c.326.518.77.947 1.273 1.288a4.394 4.394 0 0 0 1.7.637 4.122 4.122 0 0 0 1.805-.134l7.07 5.376a.31.31 0 0 1 .118.237l-.015 1.895a.297.297 0 0 1-.296.296l-8.105-.03Zm1.73-11.847c0 .326-.103.652-.28.933a1.717 1.717 0 0 1-.754.622c-.311.133-.651.163-.962.089a1.8 1.8 0 0 1-.858-.46 1.643 1.643 0 0 1-.355-1.821c.134-.31.34-.562.622-.755a1.76 1.76 0 0 1 .931-.281c.444 0 .873.178 1.184.503.295.297.473.711.473 1.17Z"
                      clipRule="evenodd"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <rect
                        width={26}
                        height={32}
                        y={0.329}
                        fill="#fff"
                        rx={3}
                      />
                    </clipPath>
                  </defs>
                </svg>
                Gitcoin Passport
              </td>
              <td className="whitespace-nowrap px-3 py-4 space-y-1">
                <span className="inline-flex items-center gap-x-1.5 rounded-full bg-green-100 px-2 py-0.5 text-sm font-medium text-green-700">
                  <svg
                    className="h-1.5 w-1.5 fill-green-500"
                    viewBox="0 0 6 6"
                    aria-hidden="true"
                  >
                    <circle cx={3} cy={3} r={3} />
                  </svg>
                  Optimism
                </span>
              </td>
            
            </tr>
            <tr>
              <td className="whitespace-nowrap py-4 flex items-center gap-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                <div className="w-10 h-10 flex relative items-center justify-center rounded-2xl bg-green-400">
                  <h1 className="font-bold text-xl">U</h1>
                  <svg
                    className="absolute -bottom-0.5 -right-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={21}
                    fill="none"
                  >
                    <g clipPath="url(#a)">
                      <path
                        fill="#FEDA03"
                        d="M7.836 2.074c.836-1.631 3.158-1.631 3.995 0a2.243 2.243 0 0 0 2.682 1.117c1.74-.56 3.381 1.09 2.825 2.838a2.262 2.262 0 0 0 1.11 2.696c1.625.84 1.625 3.173 0 4.014a2.262 2.262 0 0 0-1.11 2.695c.556 1.749-1.085 3.398-2.825 2.839a2.243 2.243 0 0 0-2.682 1.116c-.837 1.632-3.159 1.632-3.995 0a2.243 2.243 0 0 0-2.682-1.116c-1.74.56-3.382-1.09-2.825-2.839a2.262 2.262 0 0 0-1.111-2.695c-1.624-.84-1.624-3.174 0-4.014a2.262 2.262 0 0 0 1.11-2.696c-.556-1.748 1.086-3.398 2.826-2.838a2.243 2.243 0 0 0 2.682-1.117Z"
                      />
                      <path
                        fill="#000"
                        fillRule="evenodd"
                        d="M13.832 7.833c.338.328.348.87.021 1.21L8.86 14.248l-3.047-3.175a.859.859 0 0 1 .022-1.21.849.849 0 0 1 1.204.022l1.82 1.897 3.768-3.926a.849.849 0 0 1 1.204-.022Z"
                        clipRule="evenodd"
                      />
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path fill="#fff" d="M0 .85h19.667v19.764H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <h1 className="text-white">0xXDGET46RG37FD....</h1>
                  <h4 className="text-cyan-500">@degen_rebel</h4>
                </div>
              </td>
              <td className="whitespace-nowrap px-3 py-4 space-y-1">
                <span className="inline-flex items-center gap-x-1.5 rounded-full bg-blue-100 px-2 py-0.5 text-sm font-medium text-blue-700">
                  <svg
                    className="h-1.5 w-1.5 fill-blue-500"
                    viewBox="0 0 6 6"
                    aria-hidden="true"
                  >
                    <circle cx={3} cy={3} r={3} />
                  </svg>
                  Round 1
                </span>
              </td>
              <td className="whitespace-nowrap px-3 py-4 flex items-center text-sm gap-2 text-white/80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={26}
                  height={33}
                  fill="none"
                >
                  <g clipPath="url(#a)">
                    <rect
                      width={26}
                      height={32}
                      y={0.329}
                      fill="#04020F"
                      fillOpacity={0.91}
                      rx={3}
                    />
                    <path
                      fill="#02E2AC"
                      fillRule="evenodd"
                      d="M20.976 12.895a8.516 8.516 0 0 1 1.583 4.99 8.5 8.5 0 0 1-1.583 4.917l2.16 1.644a11.196 11.196 0 0 0 2.13-6.546 11.22 11.22 0 0 0-2.293-6.856l-1.239 1.117-.758.734Z"
                      clipRule="evenodd"
                    />
                    <path
                      fill="#F2F8FD"
                      fillRule="evenodd"
                      d="m25.058 25.902-7.262-5.523c.518-.682.814-1.51.858-2.37a4.26 4.26 0 0 0-.65-2.428l3.475-3.14 3.638-3.405a.59.59 0 0 0 .015-.844l-.503-.504a14.353 14.353 0 0 0-9.746-4.265l.015-1.999c.014-.133 0-.266-.03-.4a1.034 1.034 0 0 0-.192-.355.881.881 0 0 0-.326-.237.862.862 0 0 0-.384-.089.862.862 0 0 0-.385.09c-.118.059-.236.133-.325.236a.877.877 0 0 0-.192.34.74.74 0 0 0-.03.4l-.015 2.059a14.03 14.03 0 0 0-2.588.503l.015-2.561a1.22 1.22 0 0 0-.03-.4 1.036 1.036 0 0 0-.192-.356.882.882 0 0 0-.325-.237.862.862 0 0 0-.385-.088.862.862 0 0 0-.385.088c-.118.06-.236.134-.325.237a.877.877 0 0 0-.192.341.74.74 0 0 0-.03.4l-.044 3.272A14.39 14.39 0 0 0 1.6 11.242 14.502 14.502 0 0 0 .285 20.72a14.468 14.468 0 0 0 4.896 8.219 14.375 14.375 0 0 0 8.947 3.346l10.575.045a.594.594 0 0 0 .592-.593v-5.345a.625.625 0 0 0-.237-.49Zm-10.723 3.806a11.899 11.899 0 0 1-7.187-2.473 11.917 11.917 0 0 1-4.2-6.353 11.948 11.948 0 0 1 .517-7.596A11.897 11.897 0 0 1 8.493 7.57l-.014 3.894c-.015.133 0 .267.03.4.044.133.103.252.192.355a.882.882 0 0 0 .325.237.863.863 0 0 0 .77 0c.117-.059.236-.133.324-.237a.877.877 0 0 0 .193-.34.74.74 0 0 0 .03-.4l.014-4.783A11.865 11.865 0 0 1 14.424 6c2.559 0 5.044.844 7.07 2.384a.303.303 0 0 1 .03.46l-5.532 5.078a4.218 4.218 0 0 0-1.597-.325c-.607 0-1.213.118-1.775.37a4.186 4.186 0 0 0-1.45 1.08c-.399.46-.695 1.008-.872 1.585a4.153 4.153 0 0 0-.133 1.807 4.38 4.38 0 0 0 .62 1.703c.326.518.77.947 1.273 1.288a4.394 4.394 0 0 0 1.7.637 4.122 4.122 0 0 0 1.805-.134l7.07 5.376a.31.31 0 0 1 .118.237l-.015 1.895a.297.297 0 0 1-.296.296l-8.105-.03Zm1.73-11.847c0 .326-.103.652-.28.933a1.717 1.717 0 0 1-.754.622c-.311.133-.651.163-.962.089a1.8 1.8 0 0 1-.858-.46 1.643 1.643 0 0 1-.355-1.821c.134-.31.34-.562.622-.755a1.76 1.76 0 0 1 .931-.281c.444 0 .873.178 1.184.503.295.297.473.711.473 1.17Z"
                      clipRule="evenodd"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <rect
                        width={26}
                        height={32}
                        y={0.329}
                        fill="#fff"
                        rx={3}
                      />
                    </clipPath>
                  </defs>
                </svg>
                Gitcoin Passport
              </td>
              <td className="whitespace-nowrap px-3 py-4 space-y-1">
                <span className="inline-flex items-center gap-x-1.5 rounded-full bg-green-100 px-2 py-0.5 text-sm font-medium text-green-700">
                  <svg
                    className="h-1.5 w-1.5 fill-green-500"
                    viewBox="0 0 6 6"
                    aria-hidden="true"
                  >
                    <circle cx={3} cy={3} r={3} />
                  </svg>
                  Ethereum
                </span>
              </td>

            </tr>
            <tr>
              <td className="whitespace-nowrap py-4 flex items-center gap-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                <div className="w-10 h-10 flex relative items-center justify-center rounded-2xl bg-green-400">
                  <h1 className="font-bold text-xl">U</h1>
                  <svg
                    className="absolute -bottom-0.5 -right-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={21}
                    fill="none"
                  >
                    <g clipPath="url(#a)">
                      <path
                        fill="#FEDA03"
                        d="M7.836 2.074c.836-1.631 3.158-1.631 3.995 0a2.243 2.243 0 0 0 2.682 1.117c1.74-.56 3.381 1.09 2.825 2.838a2.262 2.262 0 0 0 1.11 2.696c1.625.84 1.625 3.173 0 4.014a2.262 2.262 0 0 0-1.11 2.695c.556 1.749-1.085 3.398-2.825 2.839a2.243 2.243 0 0 0-2.682 1.116c-.837 1.632-3.159 1.632-3.995 0a2.243 2.243 0 0 0-2.682-1.116c-1.74.56-3.382-1.09-2.825-2.839a2.262 2.262 0 0 0-1.111-2.695c-1.624-.84-1.624-3.174 0-4.014a2.262 2.262 0 0 0 1.11-2.696c-.556-1.748 1.086-3.398 2.826-2.838a2.243 2.243 0 0 0 2.682-1.117Z"
                      />
                      <path
                        fill="#000"
                        fillRule="evenodd"
                        d="M13.832 7.833c.338.328.348.87.021 1.21L8.86 14.248l-3.047-3.175a.859.859 0 0 1 .022-1.21.849.849 0 0 1 1.204.022l1.82 1.897 3.768-3.926a.849.849 0 0 1 1.204-.022Z"
                        clipRule="evenodd"
                      />
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path fill="#fff" d="M0 .85h19.667v19.764H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <h1 className="text-white">0xXDGET46RG37FD....</h1>
                  <h4 className="text-cyan-500">@degen_rebel</h4>
                </div>
              </td>
              <td className="whitespace-nowrap px-3 py-4 space-y-1">
                <span className="inline-flex items-center gap-x-1.5 rounded-full bg-blue-100 px-2 py-0.5 text-sm font-medium text-blue-700">
                  <svg
                    className="h-1.5 w-1.5 fill-blue-500"
                    viewBox="0 0 6 6"
                    aria-hidden="true"
                  >
                    <circle cx={3} cy={3} r={3} />
                  </svg>
                  Round 1
                </span>
              </td>
              <td className="whitespace-nowrap px-3 py-4 flex items-center text-sm gap-2 text-white/80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={26}
                  height={33}
                  fill="none"
                >
                  <g clipPath="url(#a)">
                    <rect
                      width={26}
                      height={32}
                      y={0.329}
                      fill="#04020F"
                      fillOpacity={0.91}
                      rx={3}
                    />
                    <path
                      fill="#02E2AC"
                      fillRule="evenodd"
                      d="M20.976 12.895a8.516 8.516 0 0 1 1.583 4.99 8.5 8.5 0 0 1-1.583 4.917l2.16 1.644a11.196 11.196 0 0 0 2.13-6.546 11.22 11.22 0 0 0-2.293-6.856l-1.239 1.117-.758.734Z"
                      clipRule="evenodd"
                    />
                    <path
                      fill="#F2F8FD"
                      fillRule="evenodd"
                      d="m25.058 25.902-7.262-5.523c.518-.682.814-1.51.858-2.37a4.26 4.26 0 0 0-.65-2.428l3.475-3.14 3.638-3.405a.59.59 0 0 0 .015-.844l-.503-.504a14.353 14.353 0 0 0-9.746-4.265l.015-1.999c.014-.133 0-.266-.03-.4a1.034 1.034 0 0 0-.192-.355.881.881 0 0 0-.326-.237.862.862 0 0 0-.384-.089.862.862 0 0 0-.385.09c-.118.059-.236.133-.325.236a.877.877 0 0 0-.192.34.74.74 0 0 0-.03.4l-.015 2.059a14.03 14.03 0 0 0-2.588.503l.015-2.561a1.22 1.22 0 0 0-.03-.4 1.036 1.036 0 0 0-.192-.356.882.882 0 0 0-.325-.237.862.862 0 0 0-.385-.088.862.862 0 0 0-.385.088c-.118.06-.236.134-.325.237a.877.877 0 0 0-.192.341.74.74 0 0 0-.03.4l-.044 3.272A14.39 14.39 0 0 0 1.6 11.242 14.502 14.502 0 0 0 .285 20.72a14.468 14.468 0 0 0 4.896 8.219 14.375 14.375 0 0 0 8.947 3.346l10.575.045a.594.594 0 0 0 .592-.593v-5.345a.625.625 0 0 0-.237-.49Zm-10.723 3.806a11.899 11.899 0 0 1-7.187-2.473 11.917 11.917 0 0 1-4.2-6.353 11.948 11.948 0 0 1 .517-7.596A11.897 11.897 0 0 1 8.493 7.57l-.014 3.894c-.015.133 0 .267.03.4.044.133.103.252.192.355a.882.882 0 0 0 .325.237.863.863 0 0 0 .77 0c.117-.059.236-.133.324-.237a.877.877 0 0 0 .193-.34.74.74 0 0 0 .03-.4l.014-4.783A11.865 11.865 0 0 1 14.424 6c2.559 0 5.044.844 7.07 2.384a.303.303 0 0 1 .03.46l-5.532 5.078a4.218 4.218 0 0 0-1.597-.325c-.607 0-1.213.118-1.775.37a4.186 4.186 0 0 0-1.45 1.08c-.399.46-.695 1.008-.872 1.585a4.153 4.153 0 0 0-.133 1.807 4.38 4.38 0 0 0 .62 1.703c.326.518.77.947 1.273 1.288a4.394 4.394 0 0 0 1.7.637 4.122 4.122 0 0 0 1.805-.134l7.07 5.376a.31.31 0 0 1 .118.237l-.015 1.895a.297.297 0 0 1-.296.296l-8.105-.03Zm1.73-11.847c0 .326-.103.652-.28.933a1.717 1.717 0 0 1-.754.622c-.311.133-.651.163-.962.089a1.8 1.8 0 0 1-.858-.46 1.643 1.643 0 0 1-.355-1.821c.134-.31.34-.562.622-.755a1.76 1.76 0 0 1 .931-.281c.444 0 .873.178 1.184.503.295.297.473.711.473 1.17Z"
                      clipRule="evenodd"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <rect
                        width={26}
                        height={32}
                        y={0.329}
                        fill="#fff"
                        rx={3}
                      />
                    </clipPath>
                  </defs>
                </svg>
                Gitcoin Passport
              </td>
              <td className="whitespace-nowrap px-3 py-4 space-y-1">
                <span className="inline-flex items-center gap-x-1.5 rounded-full bg-green-100 px-2 py-0.5 text-sm font-medium text-green-700">
                  <svg
                    className="h-1.5 w-1.5 fill-green-500"
                    viewBox="0 0 6 6"
                    aria-hidden="true"
                  >
                    <circle cx={3} cy={3} r={3} />
                  </svg>
                  Arbitrum
                </span>
              </td>
   
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
