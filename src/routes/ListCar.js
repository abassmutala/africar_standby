import React, { Component } from 'react'
import Footer from '../components/Footer'
import CarInfo from '../containers/listCar/CarInfo'
import Navbar from "./../components/Navbar"

export default class ListCar extends Component {
    render() {
        return (
            <div className="bg-white">
                <Navbar />
                <CarInfo />
                <Footer />
            </div>
        )
    }
}
