import React from "react";

function Loader() {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="ease-linear flex justify-center items-center rounded-full border-8 border-t-8 border-blue-700 h-24 w-24">
          Loading ...
        </div>
      </div>
    </>
  );
}

export default Loader;
