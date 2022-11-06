const Benefit = ({ benefit }) => {
  return (
    <div className="grid grid-cols-5 lg:grid-cols-6 gap-4 lg:gap-8">
      <div
        id={benefit.index}
        className="rounded-lg p-4 bg-gray-100 flex items-center justify-center aspect-square"
      >
        <div className="relative text-4xl text-primary-color">
          {benefit.icon}
        </div>
      </div>
      <div className="col-span-4 lg:col-span-5">
        <h5 className="AfricarTitle5">{benefit.title}</h5>
        <p className="">{benefit.description}</p>
      </div>
    </div>
  );
};

export default Benefit;
