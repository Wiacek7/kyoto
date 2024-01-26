import { classNames } from "../util";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import CongratsPopup from "./congrats-popup";

const QuestDetails = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="opacity-50">Quests</h1>
        <p className="opacity-35 text-sm">Gitcoin Passport</p>
      </div>
      <div className="max-w-lg mx-auto space-y-4">
        <div className="border border-white/15 rounded-3xl p-5 space-y-20">
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
                    <path
                      stroke="#fff"
                      strokeOpacity={0.15}
                      d="M.5.5h11v11H.5z"
                    />
                    <path fill="#2DC24E" d="m6 0 5.196 9H.804L6 0Z" />
                  </svg>
                  <h3 className="text-[#2DC24E]">52% </h3>
                </div>
              </div>
              <p>$POINTS</p>
            </div>
            <button
              onClick={() => setOpen(true)}
              type="button"
              className="rounded-full px-4 sm:px-8 bg-[##00a4ff] py-1 sm:py-3 text-sm font-semibold text-white shadow-sm hover:bg-[##00a4ff]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[##00a4ff]"
            >
              CLAIM
            </button>
          </div>
        </div>

        <div className="border border-white/15 rounded-3xl ">
          <Disclosure as="div">
            {({ open }) => (
              <>
                <dt>
                  <Disclosure.Button
                    className={`flex w-full items-start justify-between pt-5 px-5 text-left text-white ${
                      open && "border-b border-white/15 pb-2.5"
                    }
                    ${!open && "pb-5"}`}
                  >
                    <span className="text-base font-semibold ">
                      How to earn Points with your Gitcoin Passport Scrores
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      {!open ? (
                        <ChevronDownIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <ChevronUpIcon className="h-6 w-6" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </dt>
                <Disclosure.Panel as="dd" className=" pt-2.5 pb-5 px-5">
                  <p className="text-sm font-light text-white opacity-80">
                    10,000 Unique AlphaBot PFPs with over 120 hand crafted
                    traits. Community Driven "Choose Your Own Adventure" PFP
                    Project. Join the Discord and follow us on Twitter to be
                    notified as more details are released.
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>

      <CongratsPopup open={open} setOpen={setOpen} />
    </div>
  );
};

export default QuestDetails;
