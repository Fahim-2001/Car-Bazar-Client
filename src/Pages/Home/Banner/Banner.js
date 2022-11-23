import React from "react";
import BannerCarOne from "../../../assets/images/BannerCarOne.jpg";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${BannerCarOne})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Welcome to <br />
            Car Bazar!
          </h1>
          <p className="mb-5">
            The biggest reconditioned car market in the country. See ,Meet and
            Buy cars from here. Have a car have fun !
          </p>
          <button className="btn btn-outline">See Cars</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
