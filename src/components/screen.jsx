import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Screen = ({ data: { covidData }, data }) => {
  return data.loading ? (
    <span>Loading...</span>
  ) : (
    <ul>
      {covidData.map((item, index) => (
        <li key={index}>
          <FontAwesomeIcon icon={faCheck} />
          <span>{item.gubun}</span>
        </li>
      ))}
    </ul>
  );
};

export default Screen;
