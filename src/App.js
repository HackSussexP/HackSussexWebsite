import './App.css';

import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';

import Navbar from "./components/Navbar.js"; // what is this error for 

import Home from "./views/Home.js";
import About from "./views/About.js";
import Hackathon from "./views/events/Hackathon.js";
import CodersCup from "./views/events/CodersCup.js";
import CodeSocials from "./views/events/CodeSocials.js";
import CaptureTheFlag from "./views/events/CaptureTheFlag.js";
import GameJam from "./views/events/GameJam.js";
import Calendar from "./views/Calendar.js";
import Gallery from "./views/Gallery.js";

function NoMatch() {
  return (
    <div>
      <h1>404</h1>
    </div>
  );
}


export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
