import React from 'react';

const Sponsors = ({ sponsorData }) => {
  return (
    <div className="container-fluid p-5 text-center mt-3">
      <div className='row'>
          <h2 className='display-4 fw-bold text-center'>Sponsors</h2>
      </div>
      <div className="row justify-content-center">
        {sponsorData.map((sponsor, i) => {
          const tierClass =
            sponsor.title.includes('Gold')
            ? 'gold-sponsor'
            : sponsor.title.includes('Silver')
            ? 'silver-sponsor'
            : sponsor.title.includes('Bronze')
            ? 'bronze-sponsor'
            : 'partner-sponsor';
          return (
            <div key={i} className={`col-12 col-md-6 col-lg-4 m-3 ${tierClass}`}>
              {/* 2 rows, one for title which is smaller, another for logo which is larger */}
              <div className="row">
                <h3 className="display-6 text-dark">{sponsor.title}</h3>
              </div>
              <div className="row">
                <div className="col-8 col-md-6 col-lg-auto text-center py-5 mx-auto my-auto">
                  <a
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={sponsor.logo}
                      alt="Sponsor Logo"
                      className="img-fluid img-sponsors"
                    />
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Sponsors;
