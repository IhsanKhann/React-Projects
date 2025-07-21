import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { NavLink, Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="bg-blue-600 text-white px-6 py-4 shadow-md flex items-center justify-between">
        <h1 className="text-2xl font-bold">My Portfolio</h1>

        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-yellow-300 transition font-medium ${isActive ? "text-yellow-300 underline" : ""}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-yellow-300 transition font-medium ${isActive ? "text-yellow-300 underline" : ""}`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `hover:text-yellow-300 transition font-medium ${isActive ? "text-yellow-300 underline" : ""}`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-yellow-300 transition font-medium ${isActive ? "text-yellow-300 underline" : ""}`
            }
          >
            Contact
          </NavLink>
        </div>
      </nav>

      <main className="p-6">
        <Outlet />
      </main>
    </>
  );
}

export default Header;
