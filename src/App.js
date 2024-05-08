// App.js
import React from "react";
import ProfileLeft from "./components/ProfileLeft";
import ProfileRight from "./components/ProfileRight";
import JobSection from "./components/JobSection";
import { Divider } from "@mui/material";




const App = () => {
  return (
    <section className="main-container ">
      <div className="profile">
        <ProfileLeft />
        <Divider orientation="vertical"/>
      </div>
      <div className="jobMain">
        
        <JobSection />
      </div>
      <div className="profile">
        {" "}
        <ProfileRight />
       
      </div>
    </section>
  );
};

export default App;
