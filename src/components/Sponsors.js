import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Assuming global Bootstrap CSS

const SponsorSection = ({ title, size, logos }) => (
  <div className="mb-4">
    <h3 className="mb-3">{title}</h3>
    <div className="d-flex justify-content-center flex-wrap">
      {logos.map(logo => <Sponsor key={logo} size={size} logo={logo} />)}
    </div>
  </div>
);

const Sponsor = ({ size, logo }) => (
  <div className={`m-4 d-flex justify-content-center`} style={{ width: size }}>
    <div className="bg-white rounded d-flex align-items-center justify-content-center p-3">
      <img src={logo} alt="Sponsor Logo" className="w-50" />
    </div>
  </div>
);

const Sponsors = ({ sponsorData }) => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5 display-3">Sponsors</h1>
      {sponsorData.map(section => (
        <SponsorSection key={section.title} title={section.title} size={section.size} logos={section.logos} />
      ))}
    </div>
  );
};

export default Sponsors;
