import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/Contact";
import Github from "./components/Github.jsx";
import Projects from "./Projects/Projects";
import ProjectTypeHandler from "./Projects/ProjectTypeHandler";
import ErrorPage from "../ErrorComponent.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorPage/>,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <ErrorPage/>,
      },
      {
        path: "contact",
        element: <ContactUs />,
        errorElement: <ErrorPage/>,
      },
      {
        path: "github",
        element: <Github />,
        errorElement: <ErrorPage/>,
        loader: async () => {
             const response = await fetch("https://api.github.com/users/IhsanKhann/repos");
              const data = await response.json()
              return data ;
            }
      },
      {
        path: "projects",
        element: <Projects />,
        children: [
          {
            path: ":type",
            element: <ProjectTypeHandler />,
            errorElement: <ErrorPage/>,
          },
        ],
      },
      {
        path: "*",
        errorElement: <ErrorPage/>
      },
    ],
  },
]);

export default router;
