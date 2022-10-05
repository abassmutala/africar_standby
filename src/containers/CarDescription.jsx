import {
  MdOutlineAirlineSeatReclineNormal,
  MdOutlineDoorBack,
  MdOutlineLocalGasStation,
  MdOutlineSettings,
} from "react-icons/md";
import { Marker, GoogleMap, useLoadScript } from "@react-google-maps/api";
import { MdLocationPin } from "react-icons/md";
import mapStyle from "../assets/GoogleMapStyle.json";
import CarFeature from "./../components/CarFeature";

const features = [
  {
    icon: <MdOutlineAirlineSeatReclineNormal />,
    name: "Seats",
    value: "5 Seats",
  },
  {
    icon: <MdOutlineDoorBack />,
    name: "Doors",
    value: "4 Doors",
  },
  {
    icon: <MdOutlineSettings />,
    name: "Transmission",
    value: "Automatic",
  },
  {
    icon: <MdOutlineLocalGasStation />,
    name: "Fuel type",
    value: "Petrol",
  },
];

const CarDescription = () => {
  const containerStyle = {
    width: "100%",
    // height: "360px",
    aspectRatio: 1 / 1,
  };

  const center = {
    lat: 5.6066048,
    lng: -0.2064384,
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return (
      <div className="py-8 lg:py-12 bg-footer-bg aspect-square">
        <div className="flex items-center justify-center h-full w-full">
          <h4 className="AfricarTitle4">Loading map...</h4>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section>
        <div className="pb-6 flex flex-row justify-between items-center gap-x-4 border-b border-gray-300">
          <h3 className="AfricarTitle4 lg:AfricarTitle2 flex-grow truncate">
            Honda CR-V 2021
          </h3>
          <div className="flex flex-row items-end">
            <h2 className="AfricarTitle4 lg:AfricarTitle2">$200</h2>
            <span className="text-gray-500">/day</span>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-6">
          {features.map((feature, index) => (
            <CarFeature feature={feature} index={index} />
          ))}
        </div>
      </section>
      <section>
        <div className="pb-6 grid grid-cols-1 lg:grid-cols-5 gap-y-8 lg:gap-x-8 border-b border-gray-300">
          <div className="col-span-1 lg:col-span-3">
            <h4 className="AfricarTitle4 truncate">Description</h4>
            <div className="py-6">
              <p className="p-0 lg:pb-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
                tempore consequatur beatae reiciendis atque dolorem ducimus eum
                ad eaque eveniet molestias aliquid odio quam modi saepe
                reprehenderit, autem corporis neque!. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quia esse doloremque, expedita,
                enim illum sapiente eligendi vero natus deserunt, sequi soluta
                modi deleniti. Voluptates reiciendis, labore cumque aliquid
                sequi voluptatem. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Autem ab quo maiores, unde ratione laudantium
                itaque sunt iusto minus asperiores voluptatum, soluta eligendi
                quidem rerum amet esse. Consectetur, maxime? Suscipit. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
            <h4 className="AfricarTitle4 truncate">Features</h4>
            <div className="pt-6">{/* Features */}</div>
          </div>
          <div
            id="location"
            className="col-span-2 flex flex-col lg:mt-14 -mx-4 sm:mx-0 w-full bg-white"
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={12}
              options={{ disableDefaultUI: true, styles: mapStyle }}
            >
              <>
                <Marker position={center} />
              </>
            </GoogleMap>
            <div className="py-6">
              <div className="pb-4">
                <p className="truncate text-gray-500">Car location</p>
              </div>
              <div className="flex flex-row items-center gap-x-4 truncate">
                <MdLocationPin size={24} />
                <p className="AfricarTitle5">
                  Kotaka International Airport, Greater Accra Region
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="col-span-2 flex flex-col -mx-4 sm:mx-0">
            <CarLocationMap />
          </div> */}
      </section>
    </div>
  );
  // <div className="mt-2">
  //               <button className="btn-sm btn-outlined">
  //                 <span className="truncate">More</span>
  //               </button>
  //             </div>

  //           <div className="pt-6">
  //             <h4 className="AfricarTitle4 truncate">Features</h4>
  //             <div className="pt-6 grid grid-cols-1 md:grid-cols-2">
  //               <span className="pb-2 flex flex-row gap-x-2">
  //                 <MdAirlineSeatReclineNormal size={24} />5 Seats
  //               </span>
  //             </div>
  //             <div className="mt-2">
  //               <button className="btn-sm btn-outlined">
  //                 <span className="truncate">More</span>
  //               </button>
  //             </div>
  //           </div>
};

export default CarDescription;
