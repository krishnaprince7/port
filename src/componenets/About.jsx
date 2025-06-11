import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full h-screen bg-[#0a192f] text-gray-300 ">
      <div className="flex flex-col h-full w-full justify-center items-center">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
          </div>
          <div>
          
          </div>
          </div>
          <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div className=" sm:text-right text-4xl font-bold">
            <p>Hi. I'm Clint, nice to meet you. please take a look around.</p>
          </div>
          <div>
            <p>I am passionate about building excelent software that imporves
             the lives of those around me.I specialize in creating software 
             for client ranging form individuals and small-businesses all the 
             way to large enetrprice corporations. What would do if you had
             a software expert avilable at your fingertips?</p>
          </div>


          </div>
     
      </div>
    </div>
  );
};

export default About;
