import React from 'react';
import SponsorBanner from './../../components/SponsorBanner.js';
import Timer from './../../components/Timer.js';

const Hackathon = () => {
  return(
    <>
      <Timer date={"May 1, 2024 0:0:0"}/>
      <SponsorBanner />
    </>
  );
}

export default Hackathon;