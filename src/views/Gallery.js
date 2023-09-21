import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HackthonGallery from '../components/HackathonGallery';
import WorkshopsGallery from '../components/WorkshopsGallery';
import CodeSocialGallery from '../components/CodeSocialGallery';
import CodersCupGallery from '../components/CodersCupGallery';

const Gallery = () => {
  const [showHackathon, setShowHackathon] = useState(true);
  const [showWorkshops, setShowWorkshops] = useState(false);
  const [showCodersCup, setShowCodersCup] = useState(false);
  const [showCodeSocials, setShowCodeSocials] = useState(false);
  const [hackathonColour, sethackathonColour] = useState('#5DCAD1');
  const [workshopsColour, setWorkshopsColour] = useState('#FFF');
  const [codersCupColour, setCodersCupColour] = useState('#FFF');
  const [codeSocialsColour, setcodeSocialsColour] = useState('#FFF');

  return(
    <>
      <div className='container-fluid justify-content-center text-center'>
        <div className='container'>
          <div className='row p-3'>
            <div className='grid'>
              <p style={{fontSize: "72px"}}>Media Gallery</p>
            </div>
          </div>
          <div className='row justify-content-between d-none d-sm-flex p-3 text-center'>
            <div className='col-2'>
              <Link type='button' className='btn btn-light btn-lg rounded-5' style={{
                width: "10vw", backgroundColor: codersCupColour, width: "fit-content"
              }} onClick={() => {
                setShowHackathon(false);
                setShowWorkshops(false);
                setShowCodersCup(true);
                setShowCodeSocials(false);
                sethackathonColour('#FFF');
                setWorkshopsColour('#FFF');
                setCodersCupColour('#5DCAD1');
                setcodeSocialsColour('#FFF');
              }}>Coders Cup</Link>
            </div>
            <div className='col-2'>
              <Link type='button' className='btn btn-light btn-lg rounded-5' style={{
                width: "10vw", backgroundColor: codeSocialsColour, width: "fit-content"
              }} onClick={() => {
                setShowHackathon(false);
                setShowWorkshops(false);
                setShowCodersCup(false);
                setShowCodeSocials(true);
                sethackathonColour('#FFF');
                setWorkshopsColour('#FFF');
                setCodersCupColour('#FFF');
                setcodeSocialsColour('#5DCAD1');
              }}>Code Socials</Link>
            </div>
            <div className='col-2'>
              <Link type='button' className='btn btn-light btn-lg rounded-5' style={{
                width: "10vw", backgroundColor: workshopsColour, width: "fit-content"
              }} onClick={() => {
                setShowHackathon(false);
                setShowWorkshops(true);
                setShowCodersCup(false);
                setShowCodeSocials(false);
                sethackathonColour('#FFF');
                setWorkshopsColour('#5DCAD1');
                setCodersCupColour('#FFF');
                setcodeSocialsColour('#FFF');
              }}>Workshops</Link>
            </div>
            <div className='col-2'>
              <Link type='button' className='btn btn-light btn-lg rounded-5' style={{
                width: "10vw", backgroundColor: hackathonColour, width: "fit-content"
              }} onClick={() => {
                setShowHackathon(true);
                setShowWorkshops(false);
                setShowCodersCup(false);
                setShowCodeSocials(false);
                sethackathonColour('#5DCAD1');
                setWorkshopsColour('#FFF');
                setCodersCupColour('#FFF');
                setcodeSocialsColour('#FFF');
              }}>Hackthon</Link>
            </div>
          </div>
          <div className='row justify-content-center d-flex d-sm-none p-3'>
            <Link type='button' className='btn btn-light btn-lg rounded-5' style={{
              width: "10vw", backgroundColor: codersCupColour, width: "fit-content"
            }} onClick={() => {
              setShowHackathon(false);
              setShowWorkshops(false);
              setShowCodersCup(true);
              setShowCodeSocials(false);
              sethackathonColour('#FFF');
              setWorkshopsColour('#FFF');
              setCodersCupColour('#5DCAD1');
              setcodeSocialsColour('#FFF');
            }}>Coders Cup</Link>
            <Link type='button' className='btn btn-light btn-lg rounded-5' style={{
              width: "10vw", backgroundColor: codeSocialsColour, width: "fit-content"
            }} onClick={() => {
              setShowHackathon(false);
              setShowWorkshops(false);
              setShowCodersCup(false);
              setShowCodeSocials(true);
              sethackathonColour('#FFF');
              setWorkshopsColour('#FFF');
              setCodersCupColour('#FFF');
              setcodeSocialsColour('#5DCAD1');
            }}>Code Socials</Link>
            <Link type='button' className='btn btn-light btn-lg rounded-5' style={{
              width: "10vw", backgroundColor: workshopsColour, width: "fit-content"
            }} onClick={() => {
              setShowHackathon(false);
              setShowWorkshops(true);
              setShowCodersCup(false);
              setShowCodeSocials(false);
              sethackathonColour('#FFF');
              setWorkshopsColour('#5DCAD1');
              setCodersCupColour('#FFF');
              setcodeSocialsColour('#FFF');
            }}>Workshops</Link>
            <Link type='button' className='btn btn-light btn-lg rounded-5' style={{
              width: "10vw", backgroundColor: hackathonColour, width: "fit-content"
            }} onClick={() => {
              setShowHackathon(true);
              setShowWorkshops(false);
              setShowCodersCup(false);
              setShowCodeSocials(false);
              sethackathonColour('#5DCAD1');
              setWorkshopsColour('#FFF');
              setCodersCupColour('#FFF');
              setcodeSocialsColour('#FFF');
            }}>Hackthon</Link>
          </div>
          <iframe className="embed-responsive-item w-75 m-5 rounded-5" src="https://www.youtube.com/embed/gmKBSb7kbTY" allowFullScreen height="400px" style={{background:"#ffffff", padding: "5px"}}></iframe>
          <div className='container-fluid'>
            { showHackathon && <HackthonGallery />}
          </div>
          <div className='container-fluid'>
            { showWorkshops && <WorkshopsGallery />}
          </div>
          <div className='container-fluid'>
            { showCodeSocials && <CodeSocialGallery />}
          </div>
          <div className='container-fluid'>
            { showCodersCup && <CodersCupGallery />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;