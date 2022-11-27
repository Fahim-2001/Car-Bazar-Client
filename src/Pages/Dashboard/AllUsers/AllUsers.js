import React from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

const AllUsers = () => {
  const url = `http://localhost:5000/accounts`;

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  const handleMakeAdmin = (_id) => {
    fetch(`http://localhost:5000/accounts/admin/${_id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Make Admin Successfully", {
            autoClose: 750,
            position: "top-center",
            theme: "colored",
          });
          refetch();
        }
      });
  };
  return (
    <div>
      <h1 className="text-3xl font-bold mb-10 mt-5 ">All Users</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td className="text-green-700">{user.name}</td>
                <td className="text-green-700">{user.email}</td>
                <td className="text-green-700">
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="rounded px-3 py-1 text-white bg-primary  btn-xs"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  <button className="bg-red-700 px-2 py-1 rounded btn-xs  text-white">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
