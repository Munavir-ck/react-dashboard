import React, { useState } from "react";
import Header from "../components/Header/Header";
import SideBar from "../components/sidebar/SideBar";

import Body from "../components/Body/Body";


const Dashboard = () => {
  const [isActive, setActive] = useState(false);
  return (
    <div className="flex flex-col h-screen">
      <div className="h-1/6">
        <Header setActive={setActive} isActive={isActive} />
      </div>

      <div className="h-5/6 flex flex-grow">
        <SideBar setActive={setActive} isActive={isActive} />
        <div className="p-4 sm:pl-80 " ><Body/></div>
        {/* Add your main content or other components here */}
      </div>
    </div>
  );
};

export default Dashboard;
