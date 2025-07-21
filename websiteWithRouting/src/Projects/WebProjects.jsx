function WebProjects() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center">
        Web Development Projects
      </h1>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Project 1 */}
        <div className="bg-white shadow-md rounded-xl p-6 border hover:shadow-xl transition-all">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Portfolio Website
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            A responsive personal portfolio built with React and Tailwind CSS to showcase skills and projects.
          </p>
          <a href="#" className="text-blue-600 hover:underline text-sm">
            View Project
          </a>
        </div>

        {/* Project 2 */}
        <div className="bg-white shadow-md rounded-xl p-6 border hover:shadow-xl transition-all">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            E-Commerce Store
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            A fully functional online store with cart, checkout, and product filtering built using React, Redux, and Firebase.
          </p>
          <a href="#" className="text-blue-600 hover:underline text-sm">
            View Project
          </a>
        </div>

        {/* Project 3 */}
        <div className="bg-white shadow-md rounded-xl p-6 border hover:shadow-xl transition-all">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Blog Platform
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            A dynamic blog website with markdown support, authentication, and comment system built using MERN stack.
          </p>
          <a href="#" className="text-blue-600 hover:underline text-sm">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default WebProjects;
