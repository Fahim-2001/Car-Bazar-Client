import React from "react";
import { useNavigate } from "react-router-dom";

const Car = ({ car }) => {
  const { _id, picture, model, original_price, resale_price } = car;
  const navigate = useNavigate();
  const handleSeeDetails = (id) => {
    navigate(`/cars/${id}`);
  };

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{model}</h2>
          <div className="text-left">
            <p>Original Price : {original_price} BDT</p>
            <p>Resale Price : {resale_price} BDT</p>
          </div>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => handleSeeDetails(_id)}
            >
              See Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
