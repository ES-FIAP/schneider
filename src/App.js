import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";

import styled from "styled-components";

const SignIn = lazy(() => import("./screens/signin"));
const Feed = lazy(() => import("./screens/feed"));
const About = lazy(() => import("./screens/about"));
const Game = lazy(() => import("./screens/game"));
const Learn = lazy(() => import("./screens/learn"));
const Profile = lazy(() => import("./screens/Profile"));
const Calculator = lazy(() => import("./screens/calculator"));
const Calendar = lazy(() => import("./screens/calendar"));
const Register = lazy(() => import("./screens/register"));
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
          <Title>GreenHub</Title>
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
        <Route path="/feed" element={<Feed />} />
        <Route path="/about" element={<About />} />
        <Route path="/game" element={<Game />} />
        <Route path="/Learn" element={<Learn />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Calendar" element={<Calendar />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Suspense>
  </Router>
);
export default App;
