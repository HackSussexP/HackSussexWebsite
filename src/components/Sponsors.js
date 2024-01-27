import React from 'react';

const SponsorSection = ({ title, size, logos }) => (
  <div className="mb-4 bg-transparent-white p-3 rounded">
    <h3 className="mb-5 text-dark text-center display-6 text-decoration-underline fw-bold">{title}</h3>
    <div className="row justify-content-center align-items-center">
      {logos.map((logo, index) => (
        <Sponsor key={title + index} size={size} logo={logo} />
      ))}
    </div>
  </div>
);

const Sponsor = ({ size, logo }) => {
  return (
    <div className="col-8 col-md-6 col-lg-auto text-center p-4 mx-3 mb-4">
      <a href={logo.url} target="_blank" rel="noopener noreferrer" className="p-2">
        <img src={logo.src} alt="Sponsor Logo"  className="img-fluid img-sponsors p-2" style={{height: size}}  />
      </a>
    </div>
  );
};

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
