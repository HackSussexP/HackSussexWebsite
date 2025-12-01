import React from 'react';

const Sponsors = ({ sponsorData }) => {
  return (
    <div className="container-fluid p-5 text-center mt-3">
      <div className='row'>
          <h2 className='display-4 fw-bold text-center'>Sponsors</h2>
      </div>
      <div className="row justify-content-center">
        {sponsorData.map((sponsor, i) => {
          return (
          <div key={i} className="container col-12 col-md-6 col-lg-4 m-3 d-flex flex-column bg-light">
            <div className="title-row">
              {/* <h3 className="display-6 text-light pt-3">{sponsor.name}</h3> */}
            </div>
            <div className="image-row flex-grow-1 h-100 justify-content-center align-items-center">
              <a href={sponsor.url} target="_blank" rel="noopener noreferrer" className="d-flex w-100 h-100 p-5 justify-content-center align-items-center">
                <img 
                  src={sponsor.img} 
                  alt="Sponsor Logo" 
                  className="img-fluid img-sponsors h-100 w-100 object-fit-contain align-item-center"
                />
              </a>
            </div>
          </div>
          )
        })}
      </div>
    </div>
  );
};

export default Sponsors;
