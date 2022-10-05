import React from "react";

const FormSection = (props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-8 mt-8 border-t-2 py-8">
      <div className="col-span-1 lg:col-span-2">
        <div className="text-start">
          <h4 className="AfricarTitle4 mb-4">{props.title}</h4>
          <p>{props.description}</p>
        </div>
      </div>
      <div className="col-span-1 lg:col-span-3">{props.inputs}</div>
      <div className="col-span-full">{props.buttons}</div>
    </div>
  );
};

export default FormSection;
