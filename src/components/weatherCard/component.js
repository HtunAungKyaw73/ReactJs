import React from "react";
import styled from "@emotion/styled";
import Location from "./location";
import Icon from "./icon";
import Condition from "./condition";

const WeatherCard = ({ temp, condition, city, country }) => {
  let highColor = 0;
  let lowColor = 0;
  let r = 0;
  let b = 0;
  if (temp > 12) {
    highColor = (1 - (temp - 12) / 28) * 255;
    lowColor = highColor - 150;
    r = 255;
    b = 0;
  } else if (temp <= 12) {
    highColor = (1 - (temp + 12) / 32) * 255;
    lowColor = highColor - 150;
    r = 0;
    b = 255;
  }
  const Card = styled.div`
    margin: auto;
    background: linear-gradient(
      to top,
      rgb(${r}, ${highColor}, ${b}),
      rgb(${r}, ${lowColor}, ${b})
    );
    width: 200px;
    height: 350px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 15px;
    float: left;
    margin-left: 20px;
    margin-bottom: 20px;
  `;
  return (
    <Card>
      <Location city={city} country={country} />
      <Icon condition={condition} />
      <Condition temp={temp} condition={condition} />
    </Card>
  );
};

export default WeatherCard;
