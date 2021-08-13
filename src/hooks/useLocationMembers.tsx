import React, { useState } from "react";
import RankProps from "../types/RankProps";

const useLocationLeaders = (): RankProps[] => {
  const [locationLeaders, setLocationLeaders] = useState([]);

  try {
    fetch("http://localhost:8000/locationleaders")
      .then((resp) => resp.json())
      .then((data) => setLocationLeaders(data));
  } catch (error) {
    console.log(error);
  }

  return locationLeaders;
};

export default useLocationLeaders;
