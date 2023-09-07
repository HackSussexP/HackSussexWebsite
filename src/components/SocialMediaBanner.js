import React from 'react';
import background from './../assets/SocialMediaSectionBackground.png'
import discord from './../assets/SocialMediaIcons/discord.png'
import insta from './../assets/SocialMediaIcons/instagram.png'
import linkedin from './../assets/SocialMediaIcons/linkedin.png'
import twitter from './../assets/SocialMediaIcons/twitter.png'

//put actual social media links

var sectionStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100%',
  width: '100%',
};

const SocialMediaBanner = () => {
  function openLink() {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  }

  return (
    <>
      <div class="container-fluid social-media-banner p-3 text-center" style={sectionStyle}>
        <div class="row text-center">
          <h2 class="col-12">Find us on Social Media</h2>
        </div>
        <div class="row justify-content-center p-2">
          <div class="col col-sm-2 col-lg-1">
            <button class="btn p-0" onClick={openLink}>
              <img src={discord} class="img-fluid w-100" alt="discord logo" />
            </button>
          </div>
          <div class="col col-sm-2 col-lg-1">
            <button class="btn p-0" onClick={openLink}>
              <img src={insta} class="img-fluid" alt="instagram logo" />
            </button>
          </div>
          <div class="col col-sm-2 col-lg-1">
            <button class="btn p-0" onClick={openLink}>
              <img src={linkedin} class="img-fluid" alt="linkedin logo" />
            </button>
          </div>
          <div class="col col-sm-2 col-lg-1">
            <button class="btn p-0" onClick={openLink}>
              <img src={twitter} class="img-fluid" alt="twitter logo" />
            </button>
          </div>
        </div>
    </div>
    </>
  )
}

export default SocialMediaBanner;