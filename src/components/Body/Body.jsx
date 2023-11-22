import React from "react";
import Card from "./Card";
import "./Body.css";

let arr = [{
    color:"bg-orange-300",
    aboveButton:false,
    title:"Basic"
    

},{
    color:"bg-rose-400",
    aboveButton:false,
    title:"Standard"

},
{
    color:"bg-violet-500",
    aboveButton:false,
    title:"Premium"

},{
    color:"bg-green-300",
    aboveButton:true,
    title:"Free Starter",
    about:"Lorem ipsum is a placeholder text commonly used in the design and printing industry"

},{
    color:"bg-blue-300",
    aboveButton:true,
    title:"Enter Prise Plan",
    about:" text commonly used in the design and printing industry"

}];

const Body = () => {
  return (
    <div>
      <div className="py-6">
        <h1 className="text-lg font-bold">
          Choose a plan thats just right for you !
        </h1>
      </div>
      <div className="flex items-end justify-end">
        <div className="p-1 flex  border-2 border-black h-10 w-56 rounded-full justify-between text-blue-300">
          <button className="bg-custombgBlue rounded-full text-center text-sm font-semibold px-6 shadow-lg">
            Monthly
          </button>

          <button className="bg-transparent rounded-full text-center text-sm font-semibold px-6">
            Annually
          </button>
        </div>
      </div>

  
      <div className="p-12 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:p-4">

  {arr.slice(0, 3).map((item, index) => (
    <Card key={index} width={false} buttonColor={item.color} aboveButton={item.aboveButton} title={item.title} />
  ))}

</div>


<div className="p-4 grid grid-cols-1 lg:grid-cols-2  gap-4">

  
 {arr.slice(3,5).map((item,index)=>(
     <Card  key={index} className="w-full " width={true} buttonColor={item.color} aboveButton={item.aboveButton} title={item.title} about={item.about}/>

    
 ))}
</div>

      
   


    </div>
  );
};

export default Body;
