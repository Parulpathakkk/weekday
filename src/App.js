// App.js
import React from "react";
import ProfileLeft from "./components/ProfileLeft";
// import JobSection from './components/JobSection';
import ProfileRight from "./components/ProfileRight";
import JobSection from "./components/JobSection";
import { Divider } from "@mui/material";

// import AcUnitIcon from '@mui/icons-material/AcUnit';



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
        <Divider orientation="vertical"/>
        <ProfileRight />
       
      </div>
    </section>
  );
};

export default App;
