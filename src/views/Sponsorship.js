import sponsorsLogos from "../components/helpers/SponsorsHelper";

const Sponsorship = () => {
  // change this link to sponsor video when ready, then uncomment i-frame
  const videoLink =
    "https://www.youtube.com/embed/t4C3swUo0AA?si=PIXr2hwe3q7ghHEk";
  // REMINDER: update link to prospectus download
  const prospectusLink = "#";

  return (
    <div className="container mt-5">
      <h1 className="display-3 fw-bold text-center mb-2">Sponsor Us</h1>
      {/* 
      <iframe
        className="w-100 rounded p-2 mx-auto d-block"
        src={videoLink}
        style={{
          aspectRatio: "16/9",
          maxWidth: "720px",
          borderRadius: "15px",
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Hackathon Video"
      ></iframe> 
      */}
      <section className="p-4">
        {/* // REMINDER: replace placeholder text */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          accumsan ac neque sit amet dignissim. Curabitur aliquet, est fringilla
          ultricies placerat, urna orci auctor nunc, vel iaculis justo tortor
          non orci. Pellentesque id viverra enim, quis ullamcorper magna.
          Vivamus sed imperdiet erat, mollis bibendum velit. Suspendisse
          elementum sapien et dui fringilla interdum. Donec non magna in ipsum
          pretium feugiat. In quis leo at erat gravida fermentum.
        </p>
        <p>
          Want to know more? Click{" "}
          <a href={prospectusLink} target="_blank" rel="noreferrer">
            here
          </a>{" "}
          to download our prospectus, or email{" "}
          <a href="mailto:contact@hacksussex.com">contact@hacksussex.com</a> if
          you have any questions!
        </p>
      </section>
      <h2 className="display-4 fw-bold pb-3 mx-auto text-center border-bottom w-75">
        Hall of Fame
      </h2>
      <section className="row px-5 my-5 justify-content-around align-items-center">
        {sponsorsLogos.map((company) => {
          return (
            <div className="col-sm-auto px-sm-4 px-0 my-4">
              <a href={company.link} target="_blank" rel="noreferrer">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="old-sponsors-logo d-block mx-auto"
                ></img>
              </a>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Sponsorship;
