import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FaCloudArrowDown } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

const Card = ({ width,aboveButton,buttonColor,title ,about}) => {

  return (
    <>
     <div className="max-w-4xl px-3 bg-white rounded-md overflow-hidden shadow-xl">
      <div className={`p-2 w-96  ${ width&&"lg:flex  justify-between "}` }>
          <div className="space-y-2 w-2/4">
         { aboveButton&&<button className={`${buttonColor} hover:bg-yellow-600  font-semibold text-xs py-1 px-2  flex items-center rounded-full`}>
              Get started
            
            </button>}
          {  about?<p className="text-gray-700  text-xs">{about}</p>:<><h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700 line-through text-red-500">$ 189.49</p>
          <h1 className="text-black font-semibold text-3xl">$99.9</h1>
           
          </>}
            
            <button className={`${buttonColor} hover:bg-yellow-600  font-semibold text-xs py-1 px-4 rounded flex items-center`}>
              Get started
              <FaLongArrowAltRight size={20} className="ml-4" />
            </button>
            <hr className="border-t border-gray-300 " />
          </div>
          <div className="space-y-2">
            <p className="text-gray-700  text-xs ">What you will get :</p>

            <div className="flex items-center  gap-2">
              <MdOutlinePeopleAlt />
              <span className="text-xs font-semibold">Up to 25 users</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCloudArrowDown />{" "}
              <span className="text-xs font-semibold">Up to 25GB storage</span>
            </div>
            <div className="flex items-center  gap-2">
              <MdOutlineMail />{" "}
              <span className="text-xs font-semibold">Email Support</span>
            </div>
          { width?<></>:<div className="font-semibold gap-2 text-sm underline">
              Explore Features
            </div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
