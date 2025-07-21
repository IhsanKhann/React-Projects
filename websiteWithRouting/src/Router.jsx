import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/Contact";
import Projects from "./Projects/Projects";
import ProjectTypeHandler from "./Projects/ProjectTypeHandler";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "projects",
        element: <Projects />,
        children: [
          {
            path: ":type",
            element: <ProjectTypeHandler />,
          },
        ],
      },
    ],
  },
]);

export default router;
