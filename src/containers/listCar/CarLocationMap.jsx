import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const CarLocationMap = () => {
  const containerStyle = {
    width: "100%",
    aspectRatio: 3 / 2,
    borderRadius: "12px",
  };

  const center = {
    lat: 5.6066048,
    lng: -0.2064384,
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded)
    return (
      <div
        className="col-span-full bg-gray-200 flex justify-center items-center"
        style={containerStyle}
      >
        <h3 className="AfricarTitle3">Loading map...</h3>
      </div>
    );
  return (
    <div className="col-span-full">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        options={{}}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default CarLocationMap;
