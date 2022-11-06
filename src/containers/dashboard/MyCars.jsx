import React from "react";
import l200 from "./../../assets/l200.jpeg";

const MyCars = () => {
  return (
    <div className="col-span-9 bg-white px-8 py-6">
      <h3 className="AfricarTitle3 mb-4">My Cars</h3>
      <div className="flex justify-end w-full mb-8">
        <button className="btn-med btn-elevated">
          <span className="truncate uppercase">Add Car</span>
        </button>
      </div>
      <div className="flex flex-col p-4 border border-gray-200 hover:shadow-lg hover:rounded-lg">
        <div className="grid grid-cols-6 grid-rows-2 gap-x-4 gap-y-8">
          <div className="row-span-2 flex items-center -ml-4 -my-4">
            <div className="w-full object-cover object-center">
              <img
                className="object-cover object-center w-full"
                src={l200}
                alt="Mitsubishi L200"
              />
            </div>
          </div>
          <div className="col-span-2 row-span-2">
            <h3 className="AfricarTitle3 truncate mb-2">Mitsubishi L200</h3>
            <h5 className="AfricarTitle5 truncate">2021</h5>
          </div>
          <div className="col-span-2 row-span-2 grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-8">
            <div className="">
              <label htmlFor="transmission" className="block truncate">
                Transmission
              </label>
              <span className="text-secondary-color font-bold text-lg">
                Automatic
              </span>
            </div>
            <div className="">
              <label htmlFor="transmission" className="block truncate">
                Engine capacity
              </label>
              <span className="text-secondary-color font-bold text-lg">4L</span>
            </div>
            <div className="">
              <label htmlFor="transmission" className="block truncate">
                Exterior colour
              </label>
              <span className="text-secondary-color font-bold text-lg">
                Black
              </span>
            </div>
            <div className="">
              <label htmlFor="transmission" className="block truncate">
                Interior colour
              </label>
              <span className="text-secondary-color font-bold text-lg">
                Grey
              </span>
            </div>
          </div>

          <div className="col-span-1 row-span-2 flex flex-col items-end justify-center">
            <h3 className="AfricarTitle3 text-secondary-color">$275</h3>
            <h5 className="AfricarTitle5 truncate text-gray-400">per day</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCars;
