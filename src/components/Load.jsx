import React from "react";

export const Load = ({ isVisible, ...props }) => {
  console.log(isVisible);
  if (isVisible) {
    return (
      <div
        // {...props}
        className="animate-spin w-10 h-10 rounded-full border-r-4 border-b-4 border-t-4 border-r-yellow-800 border-b-gray-800 border-t-gray-800 border-l-gray-800 border-l-4"
      ></div>
    );
  }
  return null;
};
