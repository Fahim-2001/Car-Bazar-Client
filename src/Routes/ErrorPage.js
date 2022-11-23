import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="my-44">
      <img
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--upMfnEaM--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/7aqcppklh6bexoa70320.jpg"
        alt=""
        className="mx-auto "
        style={{ width: "500px" }}
      />
      <h1 className="text-6xl font-semibold text-primary">
        Sorry Page Not Found
      </h1>
      <button className="btn btn-outline btn-primary my-10">
        <Link to="/home">Go back to home</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
