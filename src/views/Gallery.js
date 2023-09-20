import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/Committee/adnan.jpg';
import PhotoModal from '../components/PhotoModal';

import img1 from '../assets/Gallery/1.png';
import img2 from '../assets/Gallery/2.png';
import img3 from '../assets/Gallery/3.png';
import img4 from '../assets/Gallery/4.png';
import img5 from '../assets/Gallery/5.png';
import img6 from '../assets/Gallery/6.png';
import img7 from '../assets/Gallery/7.png';
import img8 from '../assets/Gallery/8.png';
import img9 from '../assets/Gallery/9.png';
import img10 from '../assets/Gallery/10.png';
import img11 from '../assets/Gallery/11.png';
import img12 from '../assets/Gallery/12.png';
import img13 from '../assets/Gallery/13.png';
import img14 from '../assets/Gallery/14.png';
import img15 from '../assets/Gallery/15.png';
import img16 from '../assets/Gallery/16.png';
import img17 from '../assets/Gallery/17.png';
import img18 from '../assets/Gallery/18.png';
import img19 from '../assets/Gallery/19.png';
import img20 from '../assets/Gallery/20.png';

{/* Temporary manual photo imports */}

const Gallery = () => {
  return(
    <>
      <div className='container-fluid justify-content-center text-center'>
        <div className='container'>
          <div className='row p-3'>
            <div className='grid'>
              <p style={{fontSize: "72px"}}>Media Gallery</p>
            </div>
          </div>
          <div className='row justify-content-between d-none d-sm-flex p-3'>
            <div className='col-2'>
              <Link type='button' className='btn btn-light btn-lg text-wrap' to='/events/CaptureTheFlag' style={{borderRadius: "10vw", width: "10vw"}}>CTF</Link>
            </div>
            <div className='col-2'>
              <Link type='button' className='btn btn-light btn-lg' to='/events/CodersCup' style={{borderRadius: "10vw", width: "10vw"}}>Coders Cup</Link>
            </div>
            <div className='col-2'>
              <Link type='button' className='btn btn-light btn-lg' to='/events/CodeSocials' style={{borderRadius: "10vw", width: "10vw"}}>Code Socials</Link>
            </div>
            <div className='col-2'>
              <Link type='button' className='btn btn-light btn-lg' to='/events/GameJam' style={{borderRadius: "10vw", width: "10vw"}}>Game Jam</Link>
            </div>
            <div className='col-2'>
              <Link type='button' className='btn btn-light btn-lg' to='/events/Hackathon' style={{borderRadius: "10vw", width: "10vw"}}>Hackthon</Link>
            </div>
          </div>
          <iframe className="embed-responsive-item w-75 m-5" src="https://www.youtube.com/embed/gmKBSb7kbTY" allowFullScreen height="400px" style={{borderRadius: "20px", background:"#ffffff", padding: "5px"}}></iframe>
          <div className='row jutify-content-between p-3'>
            <div className='col-sm'>
              <PhotoModal img={img1} description={"Hackathon 2023 team"} number={1} />
            </div>
            <div className='col-sm'>
              <PhotoModal img={img2} description={"Robotics Workshop"} number={2} />
            </div>
            <div className='col-sm'>
              <PhotoModal img={img3} description={"Hackthon 2023 BTS"} number={3} />
            </div>
            <div className='col-sm'>
              <PhotoModal img={img4} description={"a Hackathon 2023 Team"} number={4} />
            </div>
          </div> 
          <div className='row jutify-content-between p-3'>
            <div className='col-sm'>
              <PhotoModal img={img5} description={"a Hackathon 2023 Team"} number={5} />
            </div>
            <div className='col-sm'>
              <PhotoModal img={img6} description={"Hackathon 2023 Prize Presentation"} number={6} />
            </div>
            <div className='col-sm'>
              <PhotoModal img={img7} description={"Coders Cup 2023 BTS"} number={7} />
            </div>
            <div className='col-sm'>
              <PhotoModal img={img8} description={"a Hackathon 2022 team"} number={8} />
            </div>
          </div> 
          <div className='row jutify-content-between p-3'>
            <div className='col-sm'>
              <PhotoModal img={img9} description={"a Hackathon 2022 team"} number={9} />
            </div>
            <div className='col-sm'>
              <PhotoModal img={img10} description={"Introducing 2022 Hackthon"} number={10} />
            </div>
            <div className='col-sm'>
              <PhotoModal img={img11} description={"Mizuho Hackthon 2022 Presentation"} number={11} />
            </div>
            <div className='col-sm'>
              <PhotoModal img={img12} description={"Various Hackthon 2022 Sponsors"} number={12} />
            </div>
          </div> 
          <div className='row jutify-content-between p-3'>
            <div className='col-sm'>
              <PhotoModal img={img13} description={"Hackthon 20222 Team working on Project"} number={13} />
            </div>
            <div className='col-sm'>
              <PhotoModal img={img14} description={"Hackthon 2023 LiveStream BTS"} number={14} />
            </div>
            <div className='col-sm'>
              <PhotoModal img={img15} description={"Taking apart robots at a Code Social"} number={15} />
            </div>
            <div className='col-sm'>
              <PhotoModal img={img16} description={"Leetcoding Session"} number={16} />
            </div>
          </div> 
          <div className='row jutify-content-between p-3'>
            <div className='col-sm'>
              <PhotoModal img={img17} description={"Audience watching Coders Cup 2023"} number={17} />
            </div>
            <div className='col-sm'>
              <PhotoModal img={img18} description={"Hackthon 2023 Team working on Project"} number={18} />
            </div>
            <div className='col-sm'>
              <PhotoModal img={img19} description={"Hackathon 2023 BTS"} number={19} />
            </div>
            <div className='col-sm'>
              <PhotoModal img={img20} description={"Hackthon 2023 showing off croqueted creation"} number={20} />
            </div>
          </div> 
        </div>
      </div>
    </>
  );
}

export default Gallery;