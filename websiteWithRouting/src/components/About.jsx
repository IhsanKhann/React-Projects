import { useNavigate } from "react-router-dom";

function About() {
  let navigate = useNavigate() ;
  let navigateToContact = () => {
    navigate("/contact") ;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-700 text-center mb-8">
        About Me
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image or illustration */}
        <div className="w-full md:w-1/2">
          <img
            src="https://via.placeholder.com/400x300"
            alt="About Illustration"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Text content */}
        <div className="w-full md:w-1/2 text-gray-700 text-lg space-y-4">
          <p>
            Hello! I'm <span className="font-semibold">Ihsan Khan</span>, a dedicated developer with a passion for building sleek, efficient, and modern web applications. I love solving real-world problems through code.
          </p>
          <p>
            My expertise lies in technologies like React, Tailwind CSS, JavaScript, and more. I'm constantly learning and growing to keep up with the fast-paced world of tech.
          </p>
          <p>
            Outside of coding, I enjoy reading, designing, and exploring the latest in AI and robotics.
          </p>
        </div>
      </div>

      <div>
        <br/>
        <button onClick={navigateToContact} className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition"> 
          Move to Contact Page
        </button>
      </div>

    </div>
  );
}

export default About;
