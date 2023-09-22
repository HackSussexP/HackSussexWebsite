import React from 'react';

import { FaDiscord, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaTiktok } from 'react-icons/fa';

const sectionStyle = {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100%',
  width: '100%',
};

const SocialMediaBanner = () => {

  function openLink(url) {
    window.open(url, '_blank');
  }

  return (
    <>
      <div className="container-fluid social-media-banner p-3 text-center" style={sectionStyle}>
        <div className="row text-center">
          <h2 className="col-12">Find us on Social Media</h2>
        </div>
        <div className="row justify-content-center p-2">
          <div className="col col-sm-2 col-lg-1">
            <button className="btn p-0 icon-button" onClick={() => openLink('https://discord.gg/Uwsbxy8Bqf')}>
              <FaDiscord className="social-icon discord-icon display-2" />
            </button>
          </div>
          <div className="col col-sm-2 col-lg-1">
            <button className="btn p-0 icon-button" onClick={() => openLink('https://www.instagram.com/hacksussex')}>
              <FaInstagram className="social-icon instagram-icon display-2" />
            </button>
          </div>
          <div className="col col-sm-2 col-lg-1">
            <button className="btn p-0 icon-button" onClick={() => openLink('https://uk.linkedin.com/company/hacksussex')}>
              <FaLinkedin className="social-icon linkedin-icon display-2" />
            </button>
          </div>
          {/* <div className="col col-sm-2 col-lg-1">
            <button className="btn p-0 icon-button" onClick={() => openLink('https://twitter.com/HackSussex')}>
              <FaTwitter className="social-icon twitter-icon display-2" />
            </button>
          </div> */}
          <div className="col col-sm-2 col-lg-1">
            <button className="btn p-0 icon-button" onClick={() => openLink('https://www.youtube.com/@HackSussex')}>
              <FaYoutube className="social-icon youtube-icon display-2" />
            </button>
          </div>
          <div className="col col-sm-2 col-lg-1">
            <button className="btn p-0 icon-button" onClick={() => openLink('https://www.tiktok.com/@hacksussex')}>
              <FaTiktok className="social-icon tiktok-icon display-2" />
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .social-icon {
          color: #3498db;
          transition: color 0.5s;
          margin-left: 24px;
          margin-right: 24px;
        }
        .discord-icon:hover,
        .instagram-icon:hover,
        .linkedin-icon:hover,
        .twitter-icon:hover,
        .youtube-icon:hover,
        .tiktok-icon:hover {
          color: #34d2c8;
        }
      `}</style>

    </>
  )
}

export default SocialMediaBanner;