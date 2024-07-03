import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="bg-blue-950 h-screen">
      <p className="text-gray-50 font-extrabold text-4xl text-center py-10">
        {error.status} {error.statusText}
      </p>
    </div>
  );
};

export default ErrorPage;
