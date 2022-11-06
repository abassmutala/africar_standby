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
import HostInfo from "./containers/listCar/HostInfo";
import CarInfo from "./containers/listCar/CarInfo";
import Security from "./containers/listCar/Security";
import VerifyCode from "./containers/listCar/VerifyCode";
import ListingSummary from "./containers/listCar/ListingSummary";
import Dashboard from "./routes/Dashboard";
import PendingRequests from "./routes/PendingRequests";
import Inbox from "./containers/dashboard/Inbox";
import Home from "./containers/dashboard/Home";
import MyCars from "./containers/dashboard/MyCars";
import Earnings from "./containers/dashboard/Earnings";
import Settings from "./containers/dashboard/Settings";
import HostProfile from "./containers/dashboard/HostProfile";
import AddCar from "./routes/AddCar";
import Profile from "./routes/Profile";
import SearchCar from "./routes/SearchCar";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NoPage />} />
        <Route path="/" element={<App />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<CreateAccount />} />
        <Route path="search" element={<SearchCar />} />
        <Route path="cars" element={<SearchResults />} />
        <Route path="host" element={<BecomeAHost />} />
        <Route path="register-car" element={<CarInfo />} />
        <Route path="register-host" element={<HostInfo />} />
        <Route path="host-security" element={<Security />} />
        <Route path="verify-code" element={<VerifyCode />} />
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="pending-requests" element={<PendingRequests />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="my-cars" element={<MyCars />} />
          <Route path="host-profile" element={<HostProfile />} />
          <Route path="earnings" element={<Earnings />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="car/:make/:model/:id" element={<CarDetails />} />
        {/* <Route path="/car/:make/:model/:id" element={<SearchResults />} /> */}
        {/* https://www.govirtuo.com/us/booking/options?from=2022-09-22T02%3A00&to=2022-09-28T02%3A00&location_id=5cdacbbc266c540030531813 */}
        {/* https://www.govirtuo.com/us/booking?address_line1=&address_line2=Chicago&city=Chicago&country=US&zip_code=&region=IL&street_number=&street=&latitude=41.8781136&longitude=-87.6297982&deliveryzone_id=&location_id=&from=2022-09-22T02%3A00&to=2022-09-28T02%3A00 */}
        {/* <Route index element={<BecomeAHost />} /> */}
        {/* <Route path="host/list-car" element={<ListCar />} /> */}
        {/* 
        <Route path="listing-summary" element={<ListingSummary />} /> */}
        <Route path="add-car" element={<AddCar />} />
        <Route
          path="profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);
