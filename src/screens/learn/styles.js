import styled from "styled-components";
import { TabsList } from "@mui/base/TabsList";
import { TabPanel } from "@mui/base/TabPanel";
import { Tab, tabClasses } from "@mui/base/Tab";
import { buttonClasses } from "@mui/base/Button";
export const CardContainer = styled.div`
  width: 400px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #fefefe;
  width: 100vw;
  min-height: 100vh;
  align-items: center;
`;

export const Image = styled.div`
  width: 25%;
  padding: 10px;
`;
export const StyledTabsList = styled(TabsList)`
  min-width: 400px;
  background-color: blue;
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 30px grey;
`;
export const StyledTabPanel = styled(TabPanel)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  padding: 20px 12px;
  background: "#fff";
  border: 1px solid grey;
  border-radius: 12px;
  opacity: 0.6;
`;

export const StyledTab = styled(Tab)`
  font-family: "IBM Plex Sans", sans-serif;
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 10px 12px;
  margin: 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #106090;
  }

  &:focus {
    color: #fff;
    outline: 3px solid #106090;
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: #004040;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
