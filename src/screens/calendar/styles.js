import styled from "styled-components";

export const ContainerPage = styled.div`
  background: #f1f5f9;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  width: 80vw;
  height: 80vh;
  background-color: #ffffff;
  left: 10%;
  border-radius: 20px;
  padding: 20px;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 5px 15px 0px #606090;
`;

export const Title = styled.h1`
  font-size: 1.8vw;
  margin-bottom: 3vh;
`;

export const CalendarContainer = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  width: 80%;
  height: 80%;
`;

export const CalendarHeader = styled.div`
  background-color: #007bff;
  color: white;
  padding: 10px;
  font-weight: bold;
  border-radius: 12px 12px 0px 0px;
`;

export const CalendarBody = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const DayCell = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const EventMarker = styled.div`
  font-size: 10px;
  background-color: rgb(0, 145, 0);
  color: white;
  padding: 2px;
  border-radius: 3px;
  position: absolute;
  width: auto;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
`;
