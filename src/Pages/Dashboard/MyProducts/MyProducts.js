import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/myproducts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [user?.email]);
  return (
    <div>
      <h1>show products</h1>
    </div>
  );
};

export default MyProducts;
