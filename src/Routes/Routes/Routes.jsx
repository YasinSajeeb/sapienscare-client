import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Products from "../../Pages/Products/Products";
import ProductDetails from "../../Pages/ProductDetails/ProductDetails";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import AdminSignup from "../../Pages/AdminSignup/AdminSignup";
import AdminLogin from "../../Pages/AdminLogin/AdminLogin";
import AboutUs from "../../Pages/AboutUs/AboutUs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/products",
          element: <Products></Products>
        },
        {
          path: "/products/:id",
          element: <ProductDetails></ProductDetails>,
          loader: ({params}) => fetch(`${import.meta.env.VITE_APP_API_URL}/products/${params.id}`)
        },
        {
          path: "/dashboard",
          element: <Dashboard></Dashboard>
        },
        {
          path: "/aboutus",
          element: <AboutUs></AboutUs>
        },
        {
          path: "/adminsignup",
          element: <AdminSignup></AdminSignup>
        },
        {
          path: "/adminlogin",
          element: <AdminLogin></AdminLogin>
        }
      ]
    },
  ]);

  export default router;