import React from 'react';
import Timer from './../../components/Timer'; //weird error here, but you damned if you and damned if you don't
import RotatingSponsorBanner from './../../components/RotatingSponsorBanner';

//once the timer starts it'll run forever so if you leave the page you'll get errors cause it'll try change things that aren't there
//couldn't get any sort of unload function to work to make it stop but if you have nay ideas please try

const Hackathon = () => {
  return(
    <>
      <Timer date={"May 1, 2024, 0:0:0"} />
      <RotatingSponsorBanner />
    </>
  );
}

export default Hackathon;