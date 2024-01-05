import React, { useState } from "react";

const CodesOfConduct = ({ links }) => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const defaultStyle = {
    textDecoration: "none",
    color: "white"
  };

  const hoverStyle = {
    textDecoration: "none",
    color: "#34d2c8"
  };

  return (
    <div className="container-fluid justify-content-center text-center text-white" style={{backgroundColor: "var(--darker-blue)"}}>
        <div className="row p-2">
            <h1 className="pb-1 text fw-bold display-6 border-bottom w-50 ms-auto me-auto">This event is run is accordance with the following codes of conduct</h1>
        </div>
        <div className="col pb-3">
            {links.map((link, index) => (
                <div key={index} className="row">
                    <a
                        style={hoveredLink === index ? hoverStyle : defaultStyle}
                        onMouseEnter={() => setHoveredLink(index)}
                        onMouseLeave={() => setHoveredLink(null)}
                        className="fs-4"
                        href={link.url}
                    >
                        {link.name}
                    </a>
                </div>
            ))}
        </div>
    </div>
  );
}

export default CodesOfConduct;