function MobileProjects() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8 text-center">
        Mobile App Projects
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Project Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 border hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Fitness Tracker
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            A React Native app to track workouts, calories, and steps in real-time.
          </p>
          <a
            href="#"
            className="text-blue-600 hover:underline text-sm"
          >
            View Details
          </a>
        </div>

        {/* Project Card 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 border hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Budget Buddy
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            A cross-platform mobile app for personal finance management and budgeting.
          </p>
          <a
            href="#"
            className="text-blue-600 hover:underline text-sm"
          >
            View Details
          </a>
        </div>

        {/* Project Card 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 border hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            ChatNow
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            A real-time messaging app built with Firebase and React Native.
          </p>
          <a
            href="#"
            className="text-blue-600 hover:underline text-sm"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileProjects;
