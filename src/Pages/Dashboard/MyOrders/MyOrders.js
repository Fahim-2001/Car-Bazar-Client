import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const url = `https://resale-shop-server-side.vercel.app/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  //   console.log(bookings);
  return (
    <div className="font-poppins">
      <h1 className="text-3xl text-primary font-bold mt-10 mb-4 ml-3 ">
        Selected Bookings
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="text-primary">
              <th></th>
              <th>Email</th>
              <th>Model</th>
              <th>Price</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
                <th>{booking.email}</th>
                <td>{booking.model}</td>
                <td>{booking.resalePrice} BDT</td>
                <td>{booking.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
