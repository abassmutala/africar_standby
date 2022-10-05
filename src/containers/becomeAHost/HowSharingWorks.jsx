const steps = [
  {
    title: "List your car for free",
    description: (
      <>
        <p className="leading-relaxed">
          Share your truck, sports car, or anything in between. Listing takes
          about 10 minutes and is free — no sign-up charges, no monthly fees.
        </p>
      </>
    ),
  },
  {
    title: "Set your own price & rules",
    description: (
      <>
        <p className="leading-relaxed">
          Lay your own ground rules and customize when your car is available.
          Set your own daily price, or let Africar automatically adjust your
          price to maximize your earnings.
        </p>
      </>
    ),
  },
  {
    title: "Welcome your guests",
    description: (
      <>
        <p className="leading-relaxed pb-2">
          When a guest books your car, you’ll confirm where and how to hand over
          the keys before the trip.
        </p>
        <p className="leading-relaxed">
          Check your guest in with the Africar app, then sit back and relax
          until the trip is over.
        </p>
      </>
    ),
  },
  {
    title: "Sit back & earn",
    description: (
      <>
        <p className="leading-relaxed">
          Get paid via direct deposit within three days after each trip. You’ll
          earn 65% – 75% of the trip price, unless you waive Africar protection
          to use your own commercial rental insurance. You'll also get
          reimbursed for things like fuel and any mileage beyond your limit.
        </p>
      </>
    ),
  },
];

const HowSharingWorks = () => {
  return (
    <section className="py-8 lg:lg:py-12">
      <div className="flex flex-col items-center justify-center">
        <div className="content-title flex flex-col items-center">
          <h2 className="text-center text-3xl md:text-4xl pb-4">
            How sharing your car works
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-8 mt-4">
          <div className="md:py-6">
            {steps.map((step, index) => (
              <div id={index} className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-primary-color-light-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-color-light-200 text-primary-color border border-primary-color inline-flex items-center justify-center relative z-10">
                  <h3 className="AfricarTitle4">{index + 1}</h3>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="AfricarTitle4 pb-2 tracking-wider">
                    {step.title}
                  </h2>
                  {step.description}
                </div>
              </div>
            ))}
          </div>
          <div className="w-full h-full overflow-hidden">
            {/* <img
              className="w-full object-cover object-center rounded-lg"
              src="https://unsplash.com/photos/ooQ1GaXrUYM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NXx8dG95b3RhJTIwY2Ftcnl8ZW58MHx8fHwxNjY0ODAwODQ3&force=true&w=1920"
              alt="steps image"
            /> */}
            <div className="bg-car_top-bg bg-center bg-cover w-full h-full rounded-lg" />
          </div>
        </div>
      </div>
    </section>

    // <div className="text-gray-600 body-font">
    //   <div className="container px-5 py-24 mx-auto flex flex-wrap">

    //   </div>
    // </div>
  );
};

export default HowSharingWorks;
