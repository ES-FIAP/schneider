import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";

const SignIn = lazy(() => import("./screens/signin"));
const Home = lazy(() => import("./screens/home"));
const About = lazy(() => import("./screens/about"));
const Game = lazy(() => import("./screens/game"));
const Learn = lazy(() => import("./screens/learn"));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/game" element={<Game />} />
        <Route path="/Learn" element={<Learn />} />
      </Routes>
    </Suspense>
  </Router>
);
export default App;
