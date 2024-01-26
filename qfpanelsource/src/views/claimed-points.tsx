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
               
<label className="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer" />
  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
</label>

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
              <label className="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer" />
  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
</label>

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
              <label className="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer" />
  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
</label>
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
              <label className="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer" />
  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
</label>
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
