import React from "react";
import headerIcon from "../Assets/icon.png";
import { GiRoundShield } from "react-icons/gi";
import { FaArrowDown } from "react-icons/fa";

const Header = ({isActive, setActive}) => {
  return (
    <div className="fixed top-0 left-0 right-0 flex flex-col sm:flex-row w-full  text-white h-28">
   
      <div className="sm:h-full sm:w-56  bg-white flex items-center justify-center h-16 shadow-lg">
        <img
          src={headerIcon}
          className="h-full w-full object-contain"
          alt="Header Icon"
        />
      </div>

     
      <div className="flex flex-col sm:flex-row w-full sm:w-5/6">
       
        <div className="relative bg-custombgBlue h-full w-full sm:w-2/12 ">
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
              backgroundColor: "white",
              clipPath: "polygon(0% 0%, 100% 0%, 0% 100%)",
            
            }}
          ></div>
        </div>

        <div className="sm:bg-custombgBlue hidden md:block md:h-full w-full sm:w-5/6"></div>

        <div className="sm:bg-custombgBlue h-full w-full md:w-3/6 flex items-center  sm:gap-2">
          <button className="flex items-center bg-white text-black p-4 rounded-lg shadow-2xl hover:shadow-xl h-14 sm:h-10 w-full md:w-auto">
            <GiRoundShield size={40} color="brown" className="flex-shrink-0" />
            <span className="ml-2 text-xs sm:text-sm font-bold whitespace-nowrap">
              XYZ Enterprises Pvt.Ltd
            </span>
          </button>

          <button 
          onClick={()=>setActive(!isActive)}
          className="flex items-center bg-white p-4 rounded-lg shadow-2xl hover:shadow-xl h-14 sm:h-10">
            <FaArrowDown size={25} color="black"/>
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
