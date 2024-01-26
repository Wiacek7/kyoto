import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import CongratsPopup from "./congrats-popup";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue"],
  datasets: [
    {
      label: "",
      data: [70, 30],
      backgroundColor: ["##00a4ff", "#D8D8FF"],
      borderColor: ["##00a4ff", "#D8D8FF"],
      borderWidth: 1,
    },
  ],
};
const sliceThickness = {
  id: "sliceThickness",
  beforeDraw(chart: any, plugins: any) {
    let sliceThicknessPixel = [300, 350];
    sliceThicknessPixel.forEach((thickness, index) => {
      chart.getDatasetMeta(0).data[index].outerRadius =
        (chart.chartArea.width / thickness) * 100;
    });
  },
};

const ClaimPoints = () => {
  const [open, setOpen] = useState(false);
  const options = {
    plugins: {
      legend: {
        display: false, // Hide legend (labels)
      },
    },
  };
  return (
    <>
      <CongratsPopup open={open} setOpen={setOpen} />
      <div className="space-y-6">
        <div>
          <h1 className="opacity-50">Release QF matching pool payments.</h1>
          <p className="opacity-35 text-sm">
            
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={51}
            height={55}
            fill="none"
          >
            <path
              fill="##00a4ff"
              d="M50.455 25.18c0-.12 0-.24-.02-.36C50.035 11.06 38.895 0 25.235 0S.435 11.06.035 24.82c-.02.14-.02.26-.02.38a1.34 1.34 0 0 0 0 .4c.06 1.16.58 2.26 1.56 3.18l18.38 15.3h-3.14a1.43 1.43 0 0 0-1.42 1.44v7.28a1.425 1.425 0 0 0 1.42 1.42h16.16a1.425 1.425 0 0 0 1.42-1.42v-7.28a1.431 1.431 0 0 0-1.42-1.44h-3.06l19.04-15.38c.9-.84 1.44-1.94 1.5-3.1.02-.06.02-.1.02-.16 0-.08 0-.16-.02-.26ZM25.235 5c7.92 0 14.78 4.64 18.1 11.4-.946-.29-1.93-.438-2.92-.44-2.48 0-4.78.94-6.58 2.6a10.356 10.356 0 0 0-8.6-4.6c-3.58 0-6.76 1.86-8.64 4.66a9.343 9.343 0 0 0-6.56-2.66c-1 0-1.98.16-2.9.44C10.455 9.64 17.315 5 25.235 5Zm-20.2 20.16c.48-2.42 2.56-4.2 5-4.2 3.4 0 4.76 3.52 5.1 4.6l4.2 11.5-14.3-11.9Zm19.94 12.74-5.08-13.88s-.02-.06-.04-.1c.28-2.78 2.58-4.96 5.38-4.96s4.96 2.06 5.34 4.74l-5.6 14.2Zm5.72-.86 4.74-12.06c.04-.14.12-.3.2-.5.58-1.24 2-3.52 4.78-3.52 2.44 0 4.54 1.78 5 4.18l-14.72 11.9Z"
            />
          </svg>
          <h1 className="font-semibold flex-1 sm:flex-none text-md sm:text-xl">
            Release QF Matching payment to all projects
          </h1>
        </div>
        <div className="flex items-center flex-col overflow-wrap xl:flex-row gap-4 sm:gap-8">
          <div className="flex flex-1 items-center gap-4 md:gap-8 flex-col sm:flex-row w-full">
            <div className="w-full min-w-fit 2xl:min-w-96 space-y-4">
              <div className="rounded-3xl  border border-white/15 p-5 pb-20 space-y-4">
                <h3 className="text-white text-lg">Total Projects | 120 </h3>
                <div className="space-y-0.5">
                  <h1 className="text-white font-bold text-2xl">
                    USDT $3,325
                  </h1>
                  <div className="flex items-center gap-1.5">
                    <div className="w-8 h-8 flex justify-center items-center rounded-full bg-[#34C759]/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={19}
                        fill="none"
                      >
                        <path
                          stroke="#34C759"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit={10}
                          strokeWidth={1.5}
                          d="M10 1.667A8.336 8.336 0 0 0 1.667 10c0 4.6 3.733 8.333 8.333 8.333S18.334 14.6 18.334 10"
                        />
                        <path
                          stroke="#34C759"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="m10.833 9.167 6.833-6.834M18.334 5.692V1.667h-4.025"
                        />
                      </svg>
                    </div>
                    <p className="text-[#34C759] text-sm">$40,000</p>
                    <p className="text-[#8E8E93] text-xs">|</p>
                    <p className="text-[#8E8E93] text-xs">Total Contributions</p>
                  </div>
                </div>
              </div>
              <div className="w-full px-4">
                
              </div>
            </div>
            <div className="w-full min-w-fit 2xl:min-w-96 space-y-4">
              <div className="rounded-3xl   border border-white/15 p-5 pb-20 space-y-4">
                <h3 className="text-white text-lg">Matching Pool Balance</h3>
                <div className="space-y-0.5">
                  <h1 className="text-white font-bold text-2xl">$50,000</h1>
                  <div className="flex items-center gap-1.5">
                    <div className="w-8 h-8 flex justify-center items-center rounded-full bg-[#34C759]/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={19}
                        fill="none"
                      >
                        <path
                          stroke="#34C759"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit={10}
                          strokeWidth={1.5}
                          d="M10 1.667A8.336 8.336 0 0 0 1.667 10c0 4.6 3.733 8.333 8.333 8.333S18.334 14.6 18.334 10"
                        />
                        <path
                          stroke="#34C759"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="m10.833 9.167 6.833-6.834M18.334 5.692V1.667h-4.025"
                        />
                      </svg>
                      </div>
                    <p className="text-[#34C759] text-sm">$40,000</p>
                    <p className="text-[#8E8E93] text-xs">|</p>
                    <p className="text-[#8E8E93] text-xs">Total Matched</p>
                  </div>
                </div>
              </div>

              <div className="w-full px-4">
              <button
                  onClick={() => setOpen(true)}
                  type="button"
                  className="rounded-xl bg-[##00a4ff] w-full px-10 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[##00a4ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[##00a4ff]"
                >
                  Disburse Payment
                </button>
              </div>
            </div>
          </div>
          <div className="w-72 h-72 sm:w-96 sm:h-96 relative">
            <div className="bg-white flex items-center justify-center w-36 h-36 sm:w-48 sm:h-48 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-full shadow">
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClaimPoints;
