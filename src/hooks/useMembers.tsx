import React, { useState } from "react";
import RankProps from "../types/RankProps";

const useMembers = (): RankProps[] => {
  const [topProfiles, setTopProfiles] = useState([]);

  try {
    fetch("http://localhost:8000/members")
      .then((resp) => resp.json())
      .then((data) => setTopProfiles(data));
  } catch (error) {
    console.log(error);
  }

  return topProfiles;
};

export default useMembers;
