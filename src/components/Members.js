import React from "react";
import PhotoCard from "./PhotoCard";

const PreviousMembers = ({ year, committee, index }) => {
  return (
    <div>
      <a
        class="text-center mb-5 text fw-bold display-4 border-bottom w-75 ms-auto me-auto pb-3 text-decoration-none text-light"
        data-bs-toggle="collapse"
        href={"#previousMembers" + year}
        role="button"
        aria-expanded="false"
        aria-controls={"previousMembers" + year}
      >
        <h1 className="text-center mb-5 text fw-bold display-4 border-bottom w-75 ms-auto me-auto pb-3">
          {index === 0 ? "Meet the Committee" : `${year}/${year + 1} Committee`}
        </h1>
      </a>

      <div class="collapse" id={"previousMembers" + year}>
        {Array(Math.ceil(committee.length / 5))
          .fill()
          .map((_, rowIndex) => (
            <div className="row d-flex justify-content-center" key={rowIndex}>
              {committee
                .slice(rowIndex * 5, (rowIndex + 1) * 5)
                .map((member) => (
                  <div
                    className="col-lg-2 col-md-3 col-sm-4 col-12 mb-5"
                    key={member.name}
                  >
                    <PhotoCard {...member} />
                  </div>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default PreviousMembers;
