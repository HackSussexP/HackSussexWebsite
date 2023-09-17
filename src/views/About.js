import React from 'react';
import styles from './About.module.css';

import PhotoCard from './../components/PhotoCard'

import adnan from '../assets/Committee/adnan.jpg'

const About = () => {

  const committeeMembers = [
    {
      imageUrl: adnan,
      name: "Adnan Quisar",
      role: "Vice President",
      email: "adnan@hacksussex.co.uk",
      githubLink: "https://github.com/adnantech",
      linkedinLink: "https://linkedin.com/in/adnanquisar"
    },
    {
      imageUrl: adnan,
      name: "Adnan Quisar",
      role: "Vice President",
      email: "adnan@hacksussex.co.uk",
      githubLink: "https://github.com/adnantech",
      linkedinLink: "https://linkedin.com/in/adnanquisar"
    },
    {
      imageUrl: adnan,
      name: "Adnan Quisar",
      role: "Vice President",
      email: "adnan@hacksussex.co.uk",
      githubLink: "https://github.com/adnantech",
      linkedinLink: "https://linkedin.com/in/adnanquisar"
    },
    {
      imageUrl: adnan,
      name: "Adnan Quisar",
      role: "Vice President",
      email: "adnan@hacksussex.co.uk",
      githubLink: "https://github.com/adnantech",
      linkedinLink: "https://linkedin.com/in/adnanquisar"
    },
    {
      imageUrl: adnan,
      name: "Adnan Quisar",
      role: "Vice President",
      email: "adnan@hacksussex.co.uk",
      githubLink: "https://github.com/adnantech",
      linkedinLink: "https://linkedin.com/in/adnanquisar"
    },
    {
      imageUrl: adnan,
      name: "Adnan Quisar",
      role: "Vice President",
      email: "adnan@hacksussex.co.uk",
      githubLink: "https://github.com/adnantech",
      linkedinLink: "https://linkedin.com/in/adnanquisar"
    },
    {
      imageUrl: adnan,
      name: "Adnan Quisar",
      role: "Vice President",
      email: "adnan@hacksussex.co.uk",
      githubLink: "https://github.com/adnantech",
      linkedinLink: "https://linkedin.com/in/adnanquisar"
    },
    {
      imageUrl: adnan,
      name: "Adnan Quisar",
      role: "Vice President",
      email: "adnan@hacksussex.co.uk",
      githubLink: "https://github.com/adnantech",
      linkedinLink: "https://linkedin.com/in/adnanquisar"
    },
  ];

  return (
    <>
    <div className="container mt-5">
      <div className="row">
        <div className="col text-center">
          <h1 className="display-3 font-weight-bold">Hi, we are HackSussex</h1>
        </div>
      </div>
      <div className="row mt-4">
          <div className="col px-4">
            <p className={styles.responsiveText}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <p className={styles.responsiveText}>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
          </div>
      </div>
    </div>
    
    <div className={styles.meetCommitteeSection}>
        <div className="container mt-5">
          <h1 className={styles.titleSpacing + " text-center mb-5"}>Meet the Committee</h1>
          {Array(Math.ceil(committeeMembers.length / 5)).fill().map((_, rowIndex) => (
            <div className="row d-flex justify-content-center"  key={rowIndex}>
              {committeeMembers.slice(rowIndex * 5, (rowIndex + 1) * 5).map(member => (
                <div className="col-lg-2 col-md-3 col-sm-4 col-12 mb-5" key={member.name}>
                  <PhotoCard {...member} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;