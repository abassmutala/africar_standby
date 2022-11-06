import React from "react";
import {
  MdOutlineDirectionsCar,
  MdOutlineLogout,
  MdOutlineMessage,
  MdOutlineMoney,
  MdOutlinePerson,
  MdOutlineSettings,
  MdOutlineWidgets,
} from "react-icons/md";
import { Link } from "react-router-dom";

const sidebarData = [
  { icon: <MdOutlineWidgets />, name: "Dashboard", route: "home" },
  { icon: <MdOutlineMessage />, name: "Inbox", route: "inbox" },
  { icon: <MdOutlineDirectionsCar />, name: "My Cars", route: "my-cars" },
  { icon: <MdOutlinePerson />, name: "Profile", route: "profile" },
  { icon: <MdOutlineMoney />, name: "Earnings", route: "earnings" },
  { icon: <MdOutlineSettings />, name: "Settings", route: "settings" },
];

export const DashSidebar = () => {
  return (
    <div className="col-span-3 row-span-full bg-white py-8">
      <ul className="">
        {sidebarData.map((item, index) => (
          <li id={index} className="py-1">
            <Link to={item.route}>
              <div className="p-3 w-5/6 hover:bg-gray-100 hover:rounded-r-xl">
                <div className="flex flex-row justify-start gap-x-8 items-center text-xl">
                  {item.icon}
                  <p className="text-lg">{item.name}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
        <li className="py-1">
          <div className="p-3 w-5/6 hover:bg-gray-100 hover:rounded-r-xl">
            <div className="flex flex-row justify-start gap-x-8 items-center text-xl">
              <MdOutlineLogout />
              <p className="text-xl text-primary-color">Log Out</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
