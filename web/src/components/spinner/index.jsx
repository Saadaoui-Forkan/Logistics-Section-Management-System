import React from "react";

const Spinner = ({ small }) => {
  return (
    <span
      className={`animate-spin ${
        small
          ? "h-5 w-5 border-white  border-t-2 border-r-2"
          : "h-24 w-24 border-blue-500  border-t-4 border-r-4"
      } rounded-full  inline-block`}
    ></span>
  );
};

export default Spinner;
