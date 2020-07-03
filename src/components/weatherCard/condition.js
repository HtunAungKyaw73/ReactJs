import React from "react";
import styled from "@emotion/styled";

const Condition = ({ temp, condition }) => {
  const Weather = styled.div`
    text-align: center;
  `;
  const Temp = styled.h1`
    font-family: Fira Sans;
    font-size: 2em;
    font-weight: bold;
  `;
  const State = styled.h3`
    font-family: MerriWeather;
    font-size: 1.2em;
    color: white;
  `;
  return (
    <Weather>
      <Temp>
        {temp} <sup>.</sup>C
      </Temp>
      <State>{condition}</State>
    </Weather>
  );
};

export default Condition;
