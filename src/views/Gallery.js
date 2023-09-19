import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/Committee/adnan.jpg';
import PhotoModal from '../components/PhotoModal';

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
              <PhotoModal img={image} description={"adnan"} />
            </div>
            <div className='col-sm'>
              <PhotoModal img={image} description={"adnan"} />
            </div>
            <div className='col-sm'>
              <PhotoModal img={image} description={"adnan"} />
            </div>
            <div className='col-sm'>
              <PhotoModal img={image} description={"adnan"} />
            </div>
          </div> 
        </div>
      </div>
    </>
  );
}

export default Gallery;