import './App.css';

import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';

import Navbar from "./components/NewNavbar.js"; // what is this error for 

const Home = lazy(() => import("./views/Home.js"));
const About = lazy(() => import("./views/About.js"));
const Hackathon = lazy(() => import("./views/events/Hackathon.js"));
const CodersCup = lazy(() => import("./views/events/CodersCup.js"));
const CodeSocials = lazy(() => import("./views/events/CodeSocials.js"));
const CaptureTheFlag = lazy(() => import("./views/events/CaptureTheFlag.js"));
const GameJam = lazy(() => import("./views/events/GameJam.js"));
const Calendar = lazy(() => import("./views/Calendar.js"));
const Gallery = lazy(() => import("./views/Gallery.js"));
const Test = lazy(() => import("./views/Test.js"));

function NoMatch() {
  return (
    <div>
      <h1>404</h1>
    </div>
  );
}

const App = () => {
  return (
    <Suspense fallback={
      <div className="d-flex justify-content-center align-items-center me-auto" style={{height: "100vh"}}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      }>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events/hackathon" element={<Hackathon />} />
          <Route path="/events/coderscup" element={<CodersCup />} />
          <Route path="/events/codesocials" element={<CodeSocials />} />
          <Route path="/events/capturetheflag" element={<CaptureTheFlag />} />
          <Route path="/events/gamejam" element={<GameJam />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;