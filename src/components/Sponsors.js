import React from 'react';

const SponsorSection = ({ title, size, logos }) => (
  <div className="mb-4">
    <h3 className="mb-3">{title}</h3>
    <div className="d-flex justify-content-center flex-wrap">
      {logos.map((logo, index) => (
        <Sponsor key={title + index} size={size} logo={logo} />
      ))}
    </div>
  </div>
);

const Sponsor = ({ size, logo }) => (
  <div className={`m-4 d-flex justify-content-center`} style={{ width: size }}>
    <a href={logo.url} target="_blank" rel="noopener noreferrer" className="bg-white rounded d-flex align-items-center justify-content-center p-4" style={{ width: '100%', height: '100%' }}>
      <img src={logo.src} alt="Sponsor Logo" style={{ maxWidth: '70%', height: 'auto' }} />
    </a>
  </div>
);

const Sponsors = ({ sponsorData }) => {
  return (
    <div className="container-fluid mt-5">
      <h1 className="text-center mb-5 display-4 fw-bold border-bottom pb-3 w-75 ms-auto me-auto">Sponsors</h1>
      <div className="container">
        {sponsorData.map((section, index) => (
          <SponsorSection key={section.title + index} title={section.title} size={section.size} logos={section.logos} />
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
