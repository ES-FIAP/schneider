import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import styled from "styled-components";
import gif from "./images/gifSustentabilidade.gif";
const SignIn = lazy(() => import("./screens/signin"));
const Home = lazy(() => import("./screens/home"));
const About = lazy(() => import("./screens/about"));
const Game = lazy(() => import("./screens/game"));
const Learn = lazy(() => import("./screens/learn"));
const Profile = lazy(() => import("./screens/Profile"));
const Image = styled.img`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  display: flex;
`;
const Title = styled.div`
  font-size: 4vw;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: #3f964f;
  letter-spacing: 2px;
  margin-top: 10vh;
  text-align: center;
  padding: 100px;
`;

const App = () => (
  <Router>
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <style>
            {`
            @keyframes spin {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }
            `}
          </style>
          <Title>Schneider Social</Title>
          <i
            class="bi bi-arrow-clockwise"
            style={{
              animation: "spin 1s linear infinite",
              color: "#d3d3d3",
              fontSize: "150px",
            }}
          ></i>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/game" element={<Game />} />
        <Route path="/Learn" element={<Learn />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </Suspense>
  </Router>
);
export default App;
