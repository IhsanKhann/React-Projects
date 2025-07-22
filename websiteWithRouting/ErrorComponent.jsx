import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-lg text-gray-700 mb-6">Something went wrong...</p>

        <div className="text-left bg-red-50 border border-red-200 p-4 rounded-md mb-4">
          <p className="text-sm text-red-800">
            <span className="font-semibold">Status:</span> {error?.status || "N/A"}
          </p>
          <p className="text-sm text-red-800">
            <span className="font-semibold">Message:</span> {error?.statusText || error?.message || "Unknown error"}
          </p>
        </div>

        <a
          href="/"
          className="inline-block mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm font-medium transition duration-200"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}