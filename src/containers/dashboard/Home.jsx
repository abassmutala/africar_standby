import React from "react";
import { Bar } from "react-chartjs-2";
import { MdOutlineMoreVert } from "react-icons/md";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Link } from "react-router-dom";

const Home = () => {
  ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
  );

  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Weekly earnings($)",
        data: [500, 200, 190, 600],
        backgroundColor: ["rgb(15, 26, 124)"],
        borderWidth: 1,
        borderRadius: 4,
        spacing: 2,
        hoverOffset: 15,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: false,
        text: "Bar chart",
      },
    },
  };

  return (
    <div className="col-span-9 bg-white lg:bg-background-color">
      <div className="bg-white lg:bg-background-color">
        <div className="col-span-9 bg-white p-8">
          <Link to="/home">
            <h4 className="AfricarTitle4 mb-8 text-secondary-color">Rentals</h4>
          </Link>
          <div className="grid grid-cols-9 grid-rows-3 border-y-2 border-gray-300">
            <div className="col-span-4 border-l-2 border-gray-300"></div>
            <div className="col-span-1 p-4 border-l-2 border-gray-300 text-primary-color">
              <h6 className="mb-2 font-bold text-lg">Mon</h6>
              <h1 className="AfricarTitle1">10</h1>
            </div>
            <div className="col-span-1 p-4 border-l-2 border-gray-300 text-primary-color">
              <h6 className="mb-2 font-bold text-lg">Tue</h6>
              <h1 className="AfricarTitle1">11</h1>
            </div>
            <div className="col-span-1 p-4 border-l-2 border-gray-300 text-primary-color">
              <h6 className="mb-2 font-bold text-lg">Wed</h6>
              <h1 className="AfricarTitle1">12</h1>
            </div>
            <div className="col-span-1 p-4 border-l-2 border-gray-300 text-primary-color">
              <h6 className="mb-2 font-bold text-lg">Thu</h6>
              <h1 className="AfricarTitle1">13</h1>
            </div>
            <div className="col-span-1 p-4 border-x-2 border-gray-300 text-primary-color">
              <h6 className="mb-2 font-bold text-lg">Fri</h6>
              <h1 className="AfricarTitle1">14</h1>
            </div>
            <div className="col-span-4 border-t-2 border-l-2 border-gray-300"></div>
            <div className="border-l-2 border-gray-300"></div>
            <div className="border-l-2 border-gray-300"></div>
            <div className="border-l-2 border-gray-300"></div>
            <div className="border-l-2 border-gray-300"></div>
            <div className="border-l-2 border-gray-300"></div>
            <div className="col-span-4 border-t-2 border-l-2 border-gray-300"></div>
            <div className="border-l-2 border-gray-300"></div>
            <div className="border-l-2 border-gray-300"></div>
            <div className="border-l-2 border-gray-300"></div>
            <div className="border-l-2 border-gray-300"></div>
            <div className="border-l-2 border-gray-300"></div>
          </div>
          {/* <div className="border-2 border-gray-300">
            <h6 className="mb-2 font-bold text-lg">Thu</h6>
            <h1 className="AfricarTitle1">13</h1>
          </div> */}
        </div>
        {/* <div className="col-span-2 bg-white p-8">
            <h4 className="AfricarTitle4 mb-8">Some other info</h4>
          </div> */}
        <div className="grid grid-cols-9 mt-8 gap-x-8">
          <div className="col-span-4 bg-white p-8">
            <div className="flex justify-between align-center">
              <Link to="">
                <h4 className="AfricarTitle4 mb-8 text-secondary-color">
                  Your Income
                </h4>
              </Link>
              <span className="truncate">October 2022</span>
            </div>
            <div className="">
              <div className="">
                {/* <div className="flex flex-row justify-between items-center py-4">
                  <h6 className="title">Occupancy</h6>
                  <MdOutlineMoreVert />
                </div> */}
                <div className="overview-bar_chart">
                  <Bar data={data} options={options} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-5 bg-white p-8">
            <Link to="pending-requests" replace={true}>
              <h4 className="AfricarTitle4 mb-8 text-secondary-color">
                Pending Requests
              </h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
