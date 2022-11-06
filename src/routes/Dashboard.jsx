import React from "react";
import Navbar from "./../components/Navbar";
import { Outlet } from "react-router-dom";
import { DashSidebar } from "../components/DashSidebar";

const Dashboard = () => {
  return (
    <div className="bg-background-color h-screen">
      <Navbar />
      <div className="absolute inset-0 bg-white lg:bg-background-color mt-16">
        <section className="bg-white lg:bg-background-color py-8 lg:py-12">
          <div className="grid grid-cols-12 gap-8">
            <DashSidebar />
            <div className="col-span-9">
              <Outlet />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;

// import "./chart.css";
// import { IoEllipsisVertical } from "react-icons/io5";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend
// );

// const Chart = () => {
//   const data = {
//     labels: [
//       "Monday",
//       "Tuesday",
//       "Wednesaday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//       "Sunday",
//     ],
//     datasets: [
//       {
//         label: "Weekly bookings",
//         data: [3, 5, 1, 2, 19, 9, 6],
//         backgroundColor: ["rgb(15, 26, 124)"],
//         borderWidth: 1,
//         borderRadius: 4,
//         spacing: 2,
//         hoverOffset: 15,
//       },
//     ],
//   };

//   const options = {
//     plugins: {
//       legend: {
//         position: "bottom",
//       },
//       title: {
//         display: false,
//         text: "Bar chart",
//       },
//     },
//   };

//   return (
//     <div className="chart">
//       <div className="chart-title">
//         <h6 className="title">Occupancy</h6>
//         {/* Day, Week Month */}
//         <IoEllipsisVertical />
//       </div>
//       <div className="overview-bar_chart">
//         <Bar data={data} options={options} />
//       </div>
//     </div>
//   );
// };

// export default Chart;
