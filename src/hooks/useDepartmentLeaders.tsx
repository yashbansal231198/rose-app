import React, { useState } from "react";
import RankProps from "../types/RankProps";

const useDepartmentLeaders = (): RankProps[] => {
  const [departmentLeaders, setDepartmentLeaders] = useState([]);

  try {
    fetch("http://localhost:8000/departmentleaders")
      .then((resp) => resp.json())
      .then((data) => setDepartmentLeaders(data));
  } catch (error) {
    console.log(error);
  }

  return departmentLeaders;
};

export default useDepartmentLeaders;
