import "../styles/App.css"

import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from '../util/ScrollToTop.js';

import Navbar from './navbar/Navbar.jsx';
import Footer from './footer/Footer.jsx';
import Signup from '../pages/sign-up/SignUp.jsx';
import NotFound from "../pages/other/NotFound.jsx";

const Home = lazy(() => import('../pages/home/Home.jsx'));
const Gallery = lazy(() => import('../pages/gallery/Gallery.jsx'));
const FAQ = lazy(() => import('../pages/faq/FAQ.jsx'));
const Sponsorship = lazy(() => import('../pages/sponsorship/Sponsorship.jsx'));
const AllEvents = lazy(() => import('../pages/events/AllEvents.jsx'));
const EventPage = lazy(() => import("../pages/events/Events.jsx"));
const About = lazy(() => import("../pages/about/About.jsx"));

// Individual events inside events-components
const Hackathon = lazy(() => import('../pages/events/events-components/hackathon/Hackathon.jsx'));
const CodersCup = lazy(() => import('../pages/events/events-components/coders-cup/CodersCup.jsx'));
const CodeSocials = lazy(() => import('../pages/events/events-components/code-socials/CodeSocials.jsx'));
const MineSoc = lazy(() => import('../pages/events/events-components/mine-soc/MineSoc.jsx'));
const PwnSussex = lazy(() => import('../pages/events/events-components/pwn-sussex/PwnSussex.jsx'));
const GameJam = lazy(() => import('../pages/events/events-components/game-jam/GameJam.jsx'));
const Leetcoding = lazy(() => import('../pages/events/events-components/leet-coding/LeetCoding.jsx'));
const Robotics = lazy(() => import('../pages/events/events-components/robotics/Robotics.jsx'));
const CompetitiveProgramming = lazy(() => import('../pages/events/events-components/competitive-programming/CompetitiveProgramming.jsx'));

const App = () => {
  return (
    <Suspense
      fallback={
        <div
          className="d-flex justify-content-center align-items-center me-auto"
          style={{ height: '100vh' }}
        >
          <div
            className="spinner-border text-primary"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      }
    >
      <BrowserRouter>
        <RouterReload />
      </BrowserRouter>
    </Suspense>
  );
};

function RouterReload() {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (window.location.pathname === "/") {
  //     navigate("/Events/hackathon");
  //   }
  // }, []); {/* Update for specific events */}
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/sponsorship"
          element={<Sponsorship />}
        />
        <Route
          path="/events"
          element={<AllEvents />}
        />
        <Route
          path="/Events/:date/:title"
          element={<EventPage />}
        />
        <Route
          path="/Events/hackathon"
          element={<Hackathon />}
        />
        <Route
          path="/Events/coderscup"
          element={<CodersCup />}
        />
        {/* <Route path="/Events/codesocials" element={<CodeSocials />} /> */}
        <Route
          path="/Events/MineSoc"
          element={<MineSoc />}
        />
        <Route
          path="/Events/pwnsussex"
          element={<PwnSussex />}
        />
        <Route
          path="/Events/gamejam"
          element={<GameJam />}
        />
        <Route
          path="/Events/leetcoding"
          element={<Leetcoding />}
        />
        <Route
          path="/Events/robotics"
          element={<Robotics />}
        />
        <Route
          path="/Events/competitiveProgramming"
          element={<CompetitiveProgramming />}
        />
        <Route
          path="/gallery"
          element={<Gallery />}
        />
        <Route
          path="/faq"
          element={<FAQ />}
        />
        <Route
          path="/signup"
          element={<Signup />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
