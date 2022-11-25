import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllCars from "../Pages/AllCars/AllCars";
import CarDetails from "../Pages/AllCars/CarDetails/CarDetails";
import Blog from "../Pages/Blog/Blog";
import SingleCategory from "../Pages/Categories/SingleCatagory/SingleCategory";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "./ErrorPage";

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

        element: <SingleCategory></SingleCategory>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
  { path: "*", element: <ErrorPage></ErrorPage> },
]);

export default routes;
