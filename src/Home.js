import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import headerImage from './Images/coins.png';
import refImage from './Images/ref.png';
import BarChart from './Graphs/Barchart';


const Home = () => {
    return (
        <div className="container-fluid">
            <div className="row" style={{ height: '60vh' }}>
                <div id="welcome-text" className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="text-left" style={{ marginLeft: '5vh' }}>
                        <h1 id="title-text">Comparing crypto has <br /> never been this easy.</h1>
                        <p>Welcome to Crypto Compare where you can compare the data of various <br />
                            cryptocurrencies in real-time! Our site uses Chart.js and data from an API to provide <br />
                            you with accurate and up-to-date information on your favorite cryptocurrencies. <br />
                            With our easy-to-use interface, you can compare historical data, view live charts, <br />
                            and get valuable insights into the performance of different cryptocurrencies. </p>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <img src={headerImage} alt="Header" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-1">
                </div>
                <div className="col-md-11">
                    <img src={refImage} alt="Header" />
                </div>
            </div>
            <div className="row" id="row2">
                <div className="col-md-5"></div>
                <div className="col-md-2">
                    <h1 className="chart-h1">See live crypto data with ChartJs</h1>
                </div>
                <div className="col-md-5"></div>
            </div>
            <div className="row" id="row3">
                <div className="col-md-4">
                    <BarChart />
                </div>
                <div className="col-md-4">


                </div>
                <div className="col-md-4">

                </div>
            </div>
        </div>
    )
}

export default Home;




