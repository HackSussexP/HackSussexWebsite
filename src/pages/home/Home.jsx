import React, { useState, useEffect } from 'react';

import HomeCarousel from './home-components/Carousel';
import SocialMediaBanner from './home-components/SocialMediaBanner';
import AboutHeader from './home-components/AboutHeader';
import HomeEvents from './home-components/HomeEvents';
import UpcomingEvents from './home-components/UpcomingEvents';

const Home = () => {
  const [loading, setLoading] = useState(true);

  const waitForLoad = () => {
    if (document.readyState === "complete") {
      setLoading(false);
    }
  };

  useEffect(() => {
    waitForLoad();
  }, []);

  return (
    <>
      <HomeCarousel />
      {/* <UpcomingEvents /> */}
      <AboutHeader />
      <SocialMediaBanner />
      <HomeEvents />
    </>
  );
}

export default Home;
