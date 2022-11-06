import React from "react";
import { MdChevronRight } from "react-icons/md";

const PendingRequests = () => {
  return (
    <div className="col-span-9 bg-white px-8 py-6">
      <h3 className="AfricarTitle3 mb-4">Pending Requests</h3>

      <div className="flex flex-col gap-y-2">
        <div className="border border-gray-300 w-full p-3">
          <div className="grid grid-cols-12 gap-x-4">
            <div className="rounded-full aspect-square p-8 bg-gray-300"></div>
            <div className="col-span-3 flex flex-col">
              <h5 className="AfricarTitle5 truncate mn-2">
                Saviour Opoku Nyame
              </h5>
              <span className="truncate text-gray-500 font-light">
                30th March 2022
              </span>
            </div>
            <div className="col-span-3 flex flex-col">
              <h5 className="AfricarTitle5 truncate mn-2">2022 Toyota Camry</h5>
              <div className="flex flex-row items-center">
                <span className="truncate text-gray-500 font-light">
                  30th Mar - 4th Apr
                </span>
              </div>
            </div>
            <div className="col-span-2 flex items-center w-full">
              <h3 className="AfricarTitle2 text-primary-color w-full">$180</h3>
            </div>
            <div className="col-span-3 flex items-center justify-end w-full text-4xl text-end text-gray-400">
              <MdChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingRequests;
