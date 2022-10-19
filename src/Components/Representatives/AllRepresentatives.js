import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DisplayFlex from "../Display/DisplayFlex";
import TableList from "./TableList";

const AllRepresentatives = () => {
  const token = useSelector((state) => state.users.token);
  const [reps, setReps] = useState([]);
  useEffect(() => {
    return () => {
      async function fetchReps() {
        const response = await fetch(
          "https://valuemanage.herokuapp.com/api/v1/manager/representatives",
          {
            method: "GET",
            headers: {
              accessToken: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setReps(data.content);
      }
      fetchReps();
    };
  }, [token]);
  return (
    <DisplayFlex>
      <TableList from_rep={true} data={reps} />
    </DisplayFlex>
  );
};

export default AllRepresentatives;
