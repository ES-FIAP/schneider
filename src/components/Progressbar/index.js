import React from "react";
import styled from "styled-components";
import Gradient from "../../images/lunada1.jpg";
const ProgressBar = styled.div`
  width: 200px;
  height: 20px;
  background-color: #eee;
  border-radius: 10px;
`;

const Progress = styled.div`
  height: 100%;
  border-radius: 10px;
  /*   background-image: url(${Gradient});
  background-size: cover;
  background-position: center; */
  background: linear-gradient(to right, #00b8ff, #00ff6c);
  width: ${(props) => `${props.percentage}%`};
`;

const ProgressbarComponent = ({ percentage }) => {
  return (
    <ProgressBar>
      <Progress percentage={percentage} />
    </ProgressBar>
  );
};

export default ProgressbarComponent;
