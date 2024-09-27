import React from "react";
import AboutSection from '../../components/AboutSection';

import MinesocBackground from './../../assets/events/minesoc/minesoc.png';
import MinesocLogo from './../../assets/events/minesoc/minesoclogo.png';

// images
import Amex from './../../assets/events/minesoc/pics/Amex.png';
import EastSlope from './../../assets/events/minesoc/pics/EastSlope_1.png';
import FalmerHouse from './../../assets/events/minesoc/pics/FalmerHouse_2.png';
import Freshers from './../../assets/events/minesoc/pics/Freshers.jpg';
import Jubilee from './../../assets/events/minesoc/pics/Jubilee.png';
import Library from './../../assets/events/minesoc/pics/Library.png';
import survival_1 from './../../assets/events/minesoc/pics/survival_1.png';
import survival_2 from './../../assets/events/minesoc/pics/survival_2.png';
import survival_3 from './../../assets/events/minesoc/pics/survival_3.jpg';
import survival_4 from './../../assets/events/minesoc/pics/survival_4.jpg';
import survival_5 from './../../assets/events/minesoc/pics/survival_5.jpg';
import survival_6 from './../../assets/events/minesoc/pics/survival_6.jpg';

var images = [Amex, EastSlope, FalmerHouse, Freshers, Jubilee, Library, survival_1, survival_2, survival_3, survival_4, survival_5, survival_6];

const Minesoc = () => {
    const containerStyle = {
        height: '200px',
        overflow: 'hidden',
    }

    const coverImageStyle = {
        height: '100%',
        width: '100%',
        objectFit: 'cover',
    }

  return (
    <>
      <div className="carousel-inner p-0">
        <img src={MinesocBackground} className="d-block img-fluid w-100 splash" alt='Background' />
        <div className="carousel-caption">
          <img src={MinesocLogo} alt="Minesoc Logo" className='img-fluid ms-auto me-auto d-block p-3' style={{ width: '40%', height: 'auto' }} />
        </div>
      </div>
      <AboutSection description={[<>
                    <p>
                    Minesoc is a vibrant Minecraft society at the University of Sussex, offering students a space 
                    to connect through their shared love of the game. Collaborating with HackSussex, they run 
                    high-performance servers, including a survival server and various minigames. A unique highlight 
                    is their ambitious recreation of the Sussex campus in Minecraft, which students can help build. 
                    They frequently host events like the Hunger Games and support both Java and Bedrock editions 
                    of Minecraft. With a focus on community engagement, Minesoc aims to provide a fun and creative 
                    environment for all players, encouraging teamwork and exploration.
                    </p>
                    <p>
                        To find out more and how to join, visit their <a href="https://www.instagram.com/minesocsussex/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </p>
                    </>
                    ]} />

      <h2 className="display-4 fw-bold pb-3 mx-auto text-center border-bottom w-75">
        Showcase
      </h2>

      <div className="container mt-4">
        <div className="row">
          {images.map((image) => {
              return (
                <div key={image} className="col-md-4 mb-4" style={containerStyle}>
                  <img
                    src={image}
                    style={coverImageStyle}
                    alt="Minesoc" />
                </div>
              )
            })}
        </div>
      </div>
    </>
  )
}

export default Minesoc;