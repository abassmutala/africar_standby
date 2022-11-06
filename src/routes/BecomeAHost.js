import React, { Component } from "react";
import Footer from "../components/Footer";
import HostsHeader from "../containers/becomeAHost/HostsHeader";
import Navbar from "./../components/Navbar";

export default class BecomeAHost extends Component {
  render() {
    return (
      <div className="bg-white">
        <Navbar />
        <HostsHeader />
        <Footer />
      </div>
    );
  }
}
