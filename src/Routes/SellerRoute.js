import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import useSeller from "../Hooks/useSeller";
import Spinner from "../Spinner/Spinner";

const SellerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  const location = useLocation();
  if (loading || isSellerLoading) {
    return <Spinner></Spinner>;
  }
  if (isSeller) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;