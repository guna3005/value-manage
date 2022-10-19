import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DisplayFlex from "../Display/DisplayFlex";
import TableList from "./TableList";
const AllDistributors = () => {
  const token = useSelector((state) => state.users.token);
  const [distributors, setDistributors] = useState([]);
  useEffect(() => {
    return () => {
      async function fetchDistributors() {
        const response = await fetch(
          "https://valuemanage.herokuapp.com/api/v1/manager/distributors",
          {
            method: "GET",
            headers: {
              accessToken: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setDistributors(data.content);
      }
      fetchDistributors();
    };
  }, [token]);

  return (
    <DisplayFlex>
      <TableList dist={0} data={distributors} />
    </DisplayFlex>
  );
};

export default AllDistributors;
