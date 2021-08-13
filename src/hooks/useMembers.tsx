import React, { useState } from "react";
import RankProps from "../types/RankProps";

const useMembers = (): RankProps[] => {
  const [members, setMembers] = useState([]);

  try {
    fetch("http://localhost:8000/members")
      .then((resp) => resp.json())
      .then((data) => setMembers(data));
  } catch (error) {
    console.log(error);
  }

  return members;
};

export default useMembers;
