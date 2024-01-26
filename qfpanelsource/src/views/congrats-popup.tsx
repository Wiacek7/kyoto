import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const CongratsPopup = ({
  open,
  setOpen,
}: {
  open: boolean | undefined;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-slate-950 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-xl bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="mx-auto text-3xl flex h-12 w-12 items-center justify-center rounded-full bg-[#7D7AFF]">
                    🎉
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-semibold leading-6 text-slate-950"
                    >
                      Congratulations!!
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-slate-950">
                        You have disbursed $50,000 Matching funds.
                      </p>
                      <p className="text-sm text-slate-600">
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-center sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex w-auto justify-center rounded-lg bg-[#FFA409] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#FFA409] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFA409]"
                    onClick={() => setOpen(false)}
                  >
                    Back to Projects
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default CongratsPopup;
