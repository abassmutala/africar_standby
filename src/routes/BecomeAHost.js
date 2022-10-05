import React, { Component } from "react";
import Footer from "../components/Footer";
import HostBenefits from "../containers/becomeAHost/HostBenefits";
import HostsCTA from "../containers/becomeAHost/HostsCTA";
import HostsHeader from "../containers/becomeAHost/HostsHeader";
import HostTestimonials from "../containers/becomeAHost/HostTestimonials";
import HowSharingWorks from "../containers/becomeAHost/HowSharingWorks";
import Navbar from "./../components/Navbar";

export default class BecomeAHost extends Component {
  render() {
    return (
      <div className="bg-white">
        <Navbar />
        <HostsHeader />
        <HostBenefits />
        <HowSharingWorks />
        <HostTestimonials />
        <HostsCTA />
        <Footer />
      </div>
    );
  }
}
