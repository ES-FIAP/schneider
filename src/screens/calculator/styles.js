import styled from "styled-components";

export const ContainerPage = styled.div`
  background: #f1f5f9;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const ContainerColums = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
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

export const Title = styled.p`
  color: #515151;
  font-weight: 700;
  font-size: 1.5vw;
  margin-bottom: 80px;
`;

export const TitleResult = styled.text`
  font-weight: 600;
  -webkit-font-smoothing: antialiased;
  font-family: proxima-soft, sans-serif;
  font-size: 1.3vw;
  height: 100%;
`;

export const ResultCard = styled.div`
  color: azure;
  margin: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 8px;
  width: 350px;
  font-size: 20px;
  border-radius: 4px;
  box-shadow: 2px 2px 7px 0 rgb(0, 0, 0, 0.2);
  -webkit-font-smoothing: antialiased;
  font-family: proxima-soft, sans-serif;
  font-weight: 600;
`;
export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 23%;
`;

export const ContainerInput = styled.div`
  font-family: proxima-soft, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #fff;
  display: flex;
  width: 100%;
  height: 56px;
  align-items: center;
  margin-bottom: 12px;
  padding: 12px;
  border: none;
  border-radius: 4px;
  box-shadow: 2px 2px 7px 0 rgb(0, 0, 0, 0.2);
  outline: none;
  color: dimgray;
  position: relative;
`;

export const Input = styled.input`
  -webkit-font-smoothing: antialiased;
  font-family: proxima-soft, sans-serif;
  font-weight: 600;
  font-size: 28px;
  height: 56px;
  width: 150px;
  max-width: 150px;
  overflow-x: hidden;
  padding: 0;
  margin: 0;
  border: none;
  appearance: none;
  outline: none;
  text-align: center;
  transition: 0.3s ease;
  background: 0 0;
  color: #100d1c;
`;
export const Select = styled.select`
  font-family: proxima-soft, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #100d1c;
  display: flex;
  font-size: 28px;
  width: 100%;
  height: 56px;
  align-items: center;
  margin-bottom: 12px;
  padding: 12px;
  border: none;
  border-radius: 4px;
  box-shadow: 2px 2px 7px 0 rgb(0, 0, 0, 0.2);
  outline: none;
  position: relative;
  text-align: center;
  font-weight: 600;
`;

export const Option = styled.option`
  max-width: 190px;
  padding: 12px;
  border: none;
  border-radius: 4px;
  box-shadow: 2px 2px 7px 0 rgb(0, 0, 0, 0.2);
  outline: none;
  color: dimgray;
`;

export const TextInput = styled.text`
  font-family: proxima-soft, sans-serif;
  -webkit-font-smoothing: antialiased;
  flex-grow: 1;
  font-size: 24px;
  color: #100d1c;
  margin-left: 16px;
  font-weight: 600;
`;
