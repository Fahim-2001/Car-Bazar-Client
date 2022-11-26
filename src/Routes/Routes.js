import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllCars from "../Pages/AllCars/AllCars";
import CarDetails from "../Pages/AllCars/CarDetails/CarDetails";
import Blog from "../Pages/Blog/Blog";
import SingleCategory from "../Pages/Categories/SingleCatagory/SingleCategory";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import SignUp from "../Pages/SignUp/SignUp/SignUp";
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
          fetch(`http://localhost:5000/cars/${params.id}`),
        element: <CarDetails></CarDetails>,
      },
      {
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),

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
]);

export default routes;
