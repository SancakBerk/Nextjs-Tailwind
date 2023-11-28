import React from "react";

function Aboutme() {
  return (
    <div
      className="w-screen h-auto  bg-[#212121] flex flex-col items-center pt-20 "
      id="aboutid"
    >
      {/* FİRST ABOUT ME PİECE */}
      <div className="w-3/4 h-[406px] flex ">
        <div className=" AboutMeBackgroundImage centerbackground  w-1/2 h-96  "></div>
        <div className="flex flex-col p-6 w-1/2">
          <h3 className="text-[#4C70EF] text-2xl m-2 font-semibold">
            About Me
          </h3>
          <h1 className="font-semibold text-4xl text-white m-2 ">
            I'm Berk Sancak
          </h1>
          <p className="text-[#B0ADAD] text-base m-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum quod
            nihil eum harum nobis a dignissimos alias earum velit et, aut iusto
            ut id quasi odio laborum esse nemo architecto neque aliquid ratione
            distinctio delectus! Quibusdam molestias repudiandae soluta ratione?
          </p>
          <p className="text-[#B0ADAD] text-base m-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum quod
            nihil eum harum nobis a dignissimos alias earum velit et, aut iusto
            ut id quasi odio laborum esse nemo architecto neque aliquid ratione
            distinctio delectus! Quibusdam molestias repudiandae soluta ratione?
          </p>
        </div>
      </div>
      <div
        className="w-3/4 h-auto p-10 flex flex-col items-center justify-center my-8"
        id="whatido"
      >
        <h3 className="text-[#4C70EF] text-2xl font-semibold  tracking-wider p-5 ">
          What I do
        </h3>
        <h1 className="text-4xl font-semibold p-5 ">SPECIALIZING IN</h1>
        <div className="flex flex-row w-full p-5 ">
          <div className="w-1/2 flex flex-col bg-[#292C36] p-8 m-2 rounded-xl ">
            {/*specializingın each box */}
            <div className="flex flex-row items-center ">
              <div className="WhatIdofirst  w-[42px] h-[42px] p-4  m-2  bg-[#38405A] rounded-lg" />
              <h3 className="text-2xl w-[220px] m-2">Front-End Development</h3>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
              est, incidunt laborum natus voluptatibus rerum porro
            </p>
          </div>

          <div className="w-1/2 flex flex-col bg-[#292C36] p-8 m-2 rounded-xl ">
            {/*specializingın each box */}
            <div className="flex flex-row items-center  ">
              <div className="WhatIdosecond  w-[42px] h-[42px] p-3 m-3   bg-[#38405A] rounded-lg" />
              <h3 className="text-2xl w-[220px] m-2 ">Back-End Development</h3>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
              est, incidunt laborum natus voluptatibus rerum porro
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-full" id="Portfolioid">
        <h3 className="text-[#4C70EF] text-2xl m-2 font-semibold">Portfolio</h3>
        <h1 className="font-semibold text-4xl text-white m-2 ">
          Latest Projects
        </h1>
        <div className="flex flex-row ">
          <div className="w-9/12 flex m-4  ">
            <div className="bg-[#292C36] w-[380px] h-[406px] rounded-s-md flex flex-col items-start">
              <div className=" LatestPojects1 bg-contain h-[300px] w-full bg-no-repeat  " />
              <h3 className="m-3 ">Need Food App Develope</h3>
              <button className="bg-[#558FFF] px-4 py-2 rounded-md mx-3 ">
                View Demo
              </button>
            </div>
          </div>

          <div className="w-9/12 flex  m-4 ">
            <div className="bg-[#292C36] w-[380px] h-[406px] rounded-s-md flex flex-col items-start">
              <div className=" LatestProjects2 bg-contain h-[300px] w-full bg-no-repeat  " />
              <h3 className="m-3 ">Cafe Street Web Develope</h3>
              <button className="bg-[#558FFF] px-4 py-2 rounded-md mx-3 ">
                View Demo
              </button>
            </div>
          </div>

          <div className="w-9/12 flex  m-4 ">
            <div className="bg-[#292C36] w-[380px] h-[406px] rounded-s-md flex flex-col items-start">
              <div className=" LatestProjects3 bg-contain h-[300px] w-full bg-no-repeat  " />
              <h3 className="m-3 ">Travel App Develope</h3>
              <button className="bg-[#558FFF] px-4 py-2 rounded-md mx-3 ">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-[#292C36]   w-2/3  h-[280px] my-10 rounded-xl flex justify-center items-center flex-col  "
        id="contactme"
      >
        <h1 className="text-2xl my-4">Have any project in mind?</h1>
        <button className="bg-[#558FFF] px-4 py-2 rounded-md mx-3 my-4">
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default Aboutme;
