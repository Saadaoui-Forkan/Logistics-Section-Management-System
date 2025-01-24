import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="text-9xl font-extrabold text-blue-600 mb-4">404</div>
      <h1 className="text-3xl font-bold mb-6">Page Not Found</h1>
      <Link
        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-all duration-300"
        to="/"
      >
        Go to Home Page
      </Link>
    </section>
  );
};

export default NotFoundPage;
