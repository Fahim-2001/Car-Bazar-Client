import React from "react";
// import BookingModal from "../BookingModal/BookingModal";

const SingleCategoryInfo = ({ category }) => {
  console.log(category);
  return (
    <div className=" p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
      <div className="flex justify-center">
        <img
          src={category.picture}
          alt=""
          className="object-cover object-center w-4/5 rounded-md h-full dark:bg-gray-500"
        />
      </div>
      <div className="mt-6 mb-2">
        <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
          {category.category}
        </span>
        <h2 className="text-2xl text-primary font-semibold tracking-wide">
          {category.model}
        </h2>
        <p className="text-xl">
          <span className=" font-medium">Original Price:</span>{" "}
          {category.original_price} BDT
        </p>
        <p className="text-xl">
          <span className=" font-medium">Resale Price:</span>{" "}
          {category.resale_price} BDT
        </p>
        <p className="text-xl">
          <span className=" font-medium">Milage:</span> {category.travelled}
        </p>
        <p className="text-xl">
          <span className=" font-medium">Used:</span> {category.years_of_use}
        </p>

        <p className="text-xl">
          <span className=" font-medium">Seller's Name:</span>{" "}
          {category.sellers_name}
        </p>
        <p className="text-xl">
          <span className=" font-medium">Seller's Phone Number:</span>{" "}
          {category.sellers_phone}
        </p>
        <p className="text-xl">
          <span className=" font-medium">Location:</span> {category.location}
        </p>
        <p className="text-xl">
          <span className=" font-medium">Posted On:</span> {category.posted_on}
        </p>
      </div>
      <label htmlFor="my-modal-3" className="btn btn-primary my-10">
        Book Now
      </label>
      {/* <BookingModal></BookingModal> */}
    </div>
  );
};

export default SingleCategoryInfo;
