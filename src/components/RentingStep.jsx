import React from "react";

export default function RentingStep({step}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="aspect-square p-4 bg-gray-100 rounded-lg shadow-lg shadow-primary-color-light-100 text-5xl text-primary-color">
        {step.icon}
      </div>
      <div className="mt-8">
        <h5 className="AfricarTitle5">{step.title}</h5>
        <p className="mt-4 text-lg">{step.description}</p>
      </div>
    </div>
  );
}
