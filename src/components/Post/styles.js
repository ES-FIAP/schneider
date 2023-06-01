import React from "react";
import styled from "styled-components";

export const PostCreation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  background-color: #fefefe;
  box-shadow: 0 12px 30px -12px rgba(51, 51, 51, 0.36);
`;

export const PostOptions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PostOptionButton = styled.button`
  width: 120px;
  height: 40px;
  margin-bottom: 10px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  background-color: #efefef;
  cursor: pointer;
  justify-content: center;
  display: flex;
  align-items: center;
`;
