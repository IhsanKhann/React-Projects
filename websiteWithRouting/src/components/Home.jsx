import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate() ;

  let navigateToAbout = () => {
    navigate("/about") ;
  }

  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[80vh] px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-blue-700 mb-4">
        Welcome to My Portfolio
      </h1>

      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-6">
        Hi, I’m a passionate developer building beautiful and functional websites using modern technologies like React, Tailwind, and more.
      </p>

      <div className="flex gap-4">
        <a
          href="/projects"
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
        >
          View Projects
        </a>

        <a
          href="/contact"
          className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition"
        >
          Contact Me
        </a>
      </div>

      <div>
        <br/>
        <button onClick={navigateToAbout}className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition"> 
          Move to About Page
        </button>
      </div>

    </div>
  );
}

export default Home;
