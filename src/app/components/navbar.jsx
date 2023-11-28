import React from "react";

function navbar() {
  return (
    <div className="w-full h-20 p-4 flex flex-row  items-center justify-between  ">
      <div className="flex flex-row p-2 items-start justify-center z-20 ">
        <a href="/">
          <h1 className="text-xl text-white p-2 font-semibold  ">Berk</h1>
        </a>
      </div>
      <div className=" w-auto h-auto flex flex-row p-2 items-start justify-center z-20 ">
        <a href="#aboutid">
          <h1 className="text-xl text-white p-2 m-2 font-semibold ">About</h1>
        </a>
        <a href="#whatido">
          <h1 className="text-xl text-white p-2 m-2 font-semibold">
            What I Do
          </h1>
        </a>
        <a href="#Portfolioid">
          <h1 className="text-xl text-white p-2 m-2 font-semibold">Work</h1>
        </a>
        <a href="#contactme">
          <h1 className="text-xl text-white p-2 m-2 font-semibold">Contact</h1>
        </a>
      </div>
    </div>
  );
}

export default navbar;
