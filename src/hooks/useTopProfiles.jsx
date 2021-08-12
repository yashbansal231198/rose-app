import vansh from "../assets/vansh.jpeg";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";
import profile4 from "../assets/profile4.png";
import profile5 from "../assets/profile5.png";
import React, { useState, useEffect } from "react";
import axios from "axios";

const useTopProfiles =() => {
  const [topProfiles, setTopProfiles] = useState([]);
  
      try {
       fetch("http://localhost:8000/toprankingprofiles").then((resp)=> resp.json()).then((data)=>setTopProfiles(data));
       
      } catch (error) {
          console.log(error);
      }
  

  return topProfiles;
};

export default useTopProfiles;
