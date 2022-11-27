import { useQuery } from "@tanstack/react-query";
import React from "react";
import Car from "./Car/Car";

const AllCars = () => {
  const { data: cars = [] } = useQuery({
    queryKey: ["cars"],
    queryFn: async () => {
      const data = await (
        await fetch(`https://resale-shop-server-side.vercel.app/cars`)
      ).json();
      return data;
    },
  });

  return (
    <div>
      <h1 className="text-5xl text-primary font-semibold my-8">
        See your desired car here
      </h1>
      <div className="mb-5">We have {cars.length} cars for you.</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 my-20">
        {cars.map((car) => (
          <Car key={car._id} car={car}></Car>
        ))}
      </div>
    </div>
  );
};

export default AllCars;
