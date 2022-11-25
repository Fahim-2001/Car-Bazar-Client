import React from "react";

const Car = ({ car }) => {
  const { picture, model, original_price, resale_price } = car;

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
            <button className="btn btn-primary">See Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
