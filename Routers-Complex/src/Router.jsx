import Home from "./components/Home";
import About from "./components/AboutUs/About";
import Contact from "./components/ContactUs/ContactUs";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Address from "./components/AboutUs/Address"
import Teams from "./components/AboutUs/Teams"
import Owner from "./components/ContactUs/Owner";
import Helpline from "./components/ContactUs/Helpline";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // This should be a layout with <Outlet />
    children: [
      {
        path: "", // Renders Home at "/"
        element: <Home />,
      },
      {
        path: "about", // No need for leading /
        element: <About />,
        children: [
          {path:"about/address",
            element: <Address />
          },
          {
            path: "about/teams",
            element: <Teams />
          }
        ]
      },
      {
        path: "contactus",
        element: <Contact />,
        children:[
          {
            path:"contact/owner",
            element:<Owner/>
          },{
            path:"contact/helpline",
            element:<Helpline/>
          }
        ]
      },
    ],
  },
]);


