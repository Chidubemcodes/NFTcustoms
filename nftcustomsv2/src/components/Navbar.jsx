import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 flex w-full h-20 drop-shadow-2xl">
      {/* <img className="h-16 w-16 mt-2 ml-5 animate-spin" /> */}
      <div className="flex space-x-14">
        {" "}
        <div>
          <h3 className="text-cyan-300 mt-4 text-4xl ">ReactFacts</h3>
        </div>
        <div>
          <h3 className="text-white mt-7 text-center">ReactCourse-Project 1</h3>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
