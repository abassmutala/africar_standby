import React, { Component } from "react";
import CarDescription from "../containers/CarDescription";
import SimilarCars from "../containers/SimilarCars";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default class CarDetails extends Component {
  render() {
    return (
      <div className="bg-white">
        <Navbar />
        <CarDescription />
        <SimilarCars />
        <Footer />
      </div>
    );
  }
}
