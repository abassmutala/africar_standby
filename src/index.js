import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./routes/SignIn";
import CreateAccount from "./routes/CreateAccount";
import CarDetails from "./routes/CarDetails";
import NoPage from "./routes/NoPage";
import SearchResults from "./routes/SearchResults";
import BecomeAHost from "./routes/BecomeAHost";
import ListCar from "./routes/ListCar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<NoPage />} />
      <Route path="/" element={<App />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<CreateAccount />} />
      <Route path="/cars" element={<SearchResults />} />
      <Route path="/car/:make/:model/:id" element={<CarDetails />} />
      {/* <Route path="/car/:make/:model/:id" element={<SearchResults />} /> */}
      {/* https://www.govirtuo.com/us/booking/options?from=2022-09-22T02%3A00&to=2022-09-28T02%3A00&location_id=5cdacbbc266c540030531813 */}
      {/* https://www.govirtuo.com/us/booking?address_line1=&address_line2=Chicago&city=Chicago&country=US&zip_code=&region=IL&street_number=&street=&latitude=41.8781136&longitude=-87.6297982&deliveryzone_id=&location_id=&from=2022-09-22T02%3A00&to=2022-09-28T02%3A00 */}
      <Route path="/become-a-host" element={<BecomeAHost />} />
      <Route path="/become-a-host/list" element={<ListCar />} />
    </Routes>
  </BrowserRouter>
);
