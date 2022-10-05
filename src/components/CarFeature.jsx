const CarFeature = (props) => {
  return (
    <div className="w-full flex flex-row gap-x-4">
      <div id={props.index} className="rounded-lg p-4 relative bg-gray-200">
        <div className="relative text-2xl">{props.feature.icon}</div>
      </div>
      <div className="flex flex-col w-full">
        <span className="font-semibold text-gray-500">
          {props.feature.name}
        </span>
        <p className="font-semibold">{props.feature.value}</p>
      </div>
    </div>
  );
};

export default CarFeature;
