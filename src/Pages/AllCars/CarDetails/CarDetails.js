import React from "react";
import { useLoaderData } from "react-router-dom";

const CarDetails = () => {
  const carDetails = useLoaderData();

  const {
    category,
    picture,
    model,
    location,
    original_price,
    resale_price,
    years_of_use,
    travelled,
    posted_on,
    sellers_name,
    sellers_phone,
  } = carDetails[0];
  return (
    <div>
      <h1 className="text-4xl text-primary font-semibold">{model}</h1>
      <div className="flex justify-center items-center my-20 ">
        <img src={picture} alt="" className="w-1/3" />
        <div className="text-left mx-20">
          <p className="text-2xl">
            <span className="text-primary font-medium">Original Price:</span>{" "}
            {original_price} BDT
          </p>
          <p className="text-2xl ">
            <span className="text-primary font-medium">Resale Price:</span>{" "}
            {resale_price} BDT
          </p>
          <p className="text-2xl ">
            <span className="text-primary font-medium">Milage:</span>{" "}
            {travelled}
          </p>
          <p className="text-2xl ">
            <span className="text-primary font-medium">Used:</span>{" "}
            {years_of_use}
          </p>
          <p className="text-2xl ">
            <span className="text-primary font-medium">Category:</span>{" "}
            {category}
          </p>
          <p className="text-2xl ">
            <span className="text-primary font-medium">Seller's Name:</span>{" "}
            {sellers_name}
          </p>
          <p className="text-2xl ">
            <span className="text-primary font-medium">
              Seller's Phone Number:
            </span>{" "}
            {sellers_phone}
          </p>
          <p className="text-2xl ">
            <span className="text-primary font-medium">Location:</span>{" "}
            {location}
          </p>
          <p className="text-2xl ">
            <span className="text-primary font-medium">Posted On:</span>{" "}
            {posted_on}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
