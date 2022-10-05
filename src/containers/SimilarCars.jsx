const CarFeatures = () => {
  return (
    <section>
      <div className="flex flex-row items-center justify-between gap-x-6">
        <h4 className="AfricarTitle4 truncate">Similar cars</h4>
        <button className="btn-sm btn-flat">
          <span className="truncate">View all</span>
        </button>
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-6 pt-6"></div>
    </section>
  );
};

export default CarFeatures;
