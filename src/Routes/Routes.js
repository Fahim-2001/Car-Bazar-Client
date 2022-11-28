import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllCars from "../Pages/AllCars/AllCars";
import CarDetails from "../Pages/AllCars/CarDetails/CarDetails";
import Blog from "../Pages/Blog/Blog";
import SingleCategory from "../Pages/Categories/SingleCatagory/SingleCategory";
import AddProducts from "../Pages/Dashboard/AddProducts/AddProducts";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import DashboardLayout from "../Pages/Dashboard/DashboardLayout/DashboardLayout";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import SignUp from "../Pages/SignUp/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import ErrorPage from "./ErrorPage";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/cars",
        element: <AllCars></AllCars>,
      },
      {
        path: "/cars/:id",
        loader: ({ params }) =>
          fetch(`https://resale-shop-server-side.vercel.app/cars/${params.id}`),
        element: <CarDetails></CarDetails>,
      },
      {
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(
            `https://resale-shop-server-side.vercel.app/category/${params.id}`
          ),

        element: (
          <PrivateRoute>
            <SingleCategory></SingleCategory>
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  { path: "*", element: <ErrorPage></ErrorPage> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addproducts",
        element: (
          <AdminRoute>
            <AddProducts></AddProducts>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addproducts",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/dashboard/myproducts",
        element: (
          <AdminRoute>
            <MyProducts></MyProducts>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/myproducts",
        element: <MyProducts></MyProducts>,
      },
    ],
  },
]);

export default routes;
