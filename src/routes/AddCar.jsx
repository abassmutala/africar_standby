import { setDoc, doc } from "firebase/firestore";
import React from "react";
import { LoadingSpinner } from "../components/LoadingSpinner";
import Navbar from "../components/Navbar";
import { db } from "../firebase";

const AddCar = () => {
  const [make, setMake] = React.useState("");
//   const [makeValue, setMakeValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const add = async (make) => {
    try {
      const data = { name: make, value: make.toLowerCase()};
      const makesDoc = doc(db, "makes", make.toLowerCase());
      setIsLoading(true);
      await setDoc(makesDoc, data);
      setIsLoading(false);
      alert("Car added successfully!!");
      return;
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <section className="px-8 lg:px-12 mt-16">
        <form class="grid grid-cols-6 gap-6 mt-8 py-8">
          <div className="col-span-6">
            <label htmlFor="Make" class="block">
              Make
            </label>

            <input
              required
              type="text"
              id="Make"
              name="make"
              class="w-full mt-1 bg-white rounded-md shadow-sm"
              onChange={(e) => setMake(e.target.value)}
              disabled={isLoading}
            />
          </div>
          {/* <div className="col-span-6">
            <label htmlFor="Value" class="block">
              Value
            </label>

            <input
              required
              type="text"
              id="Value"
              name="value"
              class="w-full mt-1 bg-white rounded-md shadow-sm"
              onChange={(e) => setMakeValue(e.target.value)}
              disabled={isLoading}
            />
          </div> */}

          <div className="col-span-6">
            <div className="flex justify-center w-full">
              <button
                class="btn-elevated btn-med w-full max-w-md"
                onClick={() => add(make)}
                disabled={isLoading}
              >
                {isLoading ? <LoadingSpinner /> : <span>Add Car</span>}
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddCar;
