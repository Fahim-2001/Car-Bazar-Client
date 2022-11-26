import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../../BookingModal/BookingModal";
import SingleCategoryInfo from "../SingleCategoryInfo/SingleCategoryInfo";

const SingleCategory = () => {
  const singleCategory = useLoaderData();

  const [carInfo, setCarInfo] = useState({});
  return (
    <div>
      <h1 className="text-4xl text-primary font-semibold">
        We have {singleCategory.length} cars in this category
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 place-items-center my-20 mx-10">
        {singleCategory.map((category) => (
          <SingleCategoryInfo
            key={category._id}
            category={category}
            setCarInfo={setCarInfo}
          ></SingleCategoryInfo>
        ))}
      </div>
      <div>
        <BookingModal carInfo={carInfo}></BookingModal>
      </div>
    </div>
  );
};

export default SingleCategory;
