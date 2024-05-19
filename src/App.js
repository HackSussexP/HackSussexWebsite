import './App.css';

import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import { Link } from 'react-router-dom';

import Navbar from "./components/NewNavbar.js"; // what is this error for 
import Footer from "./components/Footer.js";

const Home = lazy(() => import("./views/Home.js"));
const About = lazy(() => import("./views/About.js"));
const Hackathon = lazy(() => import("./views/events/Hackathon.js"));
const CodersCup = lazy(() => import("./views/events/CodersCup.js"));
const CodeSocials = lazy(() => import("./views/events/CodeSocials.js"));
const PwnSussex = lazy(() => import("./views/events/PwnSussex.js"));
const GameJam = lazy(() => import("./views/events/GameJam.js"));
const Leetcoding = lazy(() => import("./views/events/Leetcoding.js"));
const AllEvents = lazy(() => import("./views/events/AllEvents.js"));
const EventPage = lazy(() => import("./views/events/EventPage.js"));
const Gallery = lazy(() => import("./views/Gallery.js"));
const FAQ = lazy(() => import("./views/FAQ.js"));
const Robotics = lazy(() => import("./views/events/Robotics"));
const Testing = lazy(() => import("./views/testing.js"));
const CompetitiveProgramming = lazy(() => import("./views/events/CompetitiveProgramming.js"));

function NoMatch() {
  return (
    <div className="container-fluid gradient opacity-75">
      <div className="row align-items-center me-auto ms-auto vh-100">
        <div className="col-12 text-center">
          <h1 className="display-1 text-dark">
            404 Error
           </h1>
          <h2 className="display-6 text-dark row align-items-center text-center justify-content-center">
            <div className="col-auto p-0 m-0 text-end">
              <i className="fas fa-coffee text-dark"> </i>
            </div>
            <div className="col-8 col-md-4 p-0 m-0">
              This page is taking a coffee break.
            </div>
            <div className="col-auto p-0 m-0">
              <i className="fas fa-coffee text-dark"> </i>
            </div>
          </h2>
          <h4 className="text-dark">
            In the meantime, grab your favourite mug and explore our other pages while this one takes a break.
          </h4>
          <Link to="/" type="button" className="btn text-dark fs-3 mt-5">
            <i className="fas fa-arrow-left"></i> Go back
          </Link>
        </div>
      </div>
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
        <RouterReload />
      </BrowserRouter>
    </Suspense>
  );
}

function RouterReload() {
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (window.location.pathname === "/") {
  //     navigate("/events/coderscup");
  //   }
  // }, []); {/* Update for specific events */}
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<AllEvents />} />
        <Route path="/events/:date/:title" element={<EventPage />} />
        <Route path="/events/hackathon" element={<Hackathon />} />
        <Route path="/events/coderscup" element={<CodersCup />} />
        {/* <Route path="/events/codesocials" element={<CodeSocials />} /> */}
        <Route path="/events/pwnsussex" element={<PwnSussex />} />
        <Route path="/events/gamejam" element={<GameJam />} />
        <Route path="/events/leetcoding" element={<Leetcoding />} />
        <Route path="/events/robotics" element={<Robotics />} />
        <Route path="/events/competitiveProgramming" element={<CompetitiveProgramming />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faq" element={<FAQ />} />
        {/* <Route path="/testing" element={<Testing />} /> */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;