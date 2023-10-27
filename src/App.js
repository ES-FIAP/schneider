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

const App = () => (
  <Router>
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
  </Router>
);
export default App;
