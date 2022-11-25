import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleCategoryInfo from "../SingleCategoryInfo/SingleCategoryInfo";

const SingleCategory = () => {
  const singleCategory = useLoaderData();
  console.log(singleCategory);
  return (
    <div>
      <h1>Single Category</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 place-items-center my-20 mx-10">
        {singleCategory.map((category) => (
          <SingleCategoryInfo
            key={category._id}
            category={category}
          ></SingleCategoryInfo>
        ))}
      </div>
    </div>
  );
};

export default SingleCategory;
