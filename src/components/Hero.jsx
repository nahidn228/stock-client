import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-gradient-to-r from-blue-500 to-blue-700">
      <div className="hero-content text-white text-center mx-auto max-w-screen-xl flex flex-col">
        <img
          className="w-20 h-20 animate-pulse"
          src="https://img.icons8.com/?size=100&id=A1AC4LBKeWFA&format=png&color=000000"
          alt=""
        />
        <div className="w-full md:w-3/4 mx-auto">
          <h1 className="mb-5 text-5xl font-bold">Welcome to Janata Stocks</h1>
          <p className="mb-5 text-lg">
            Your trusted platform for smart stock investments. Analyze trends,
            manage portfolios, and maximize profits efficiently.
          </p>
          <Link
            to="/stock"
            className="btn btn-white text-blue-900 hover:bg-blue-500 hover:text-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
