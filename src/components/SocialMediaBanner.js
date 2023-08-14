import React from 'react';
import background from './../assets/SocialMediaSectionBackground.png'
import discord from './../assets/SocialMediaIcons/discord.png'
import insta from './../assets/SocialMediaIcons/instagram.png'
import linkedin from './../assets/SocialMediaIcons/linkedin.png'
import twitter from './../assets/SocialMediaIcons/twitter.png'

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
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley')
  }

  return (
    <>
      <div class="container-fluid social-media-banner p-3" style={sectionStyle}>
        <div class="row text-center">
          <h2 class="col-12">Find us on Social Media</h2>
        </div>
        <div class="row justify-content-center">
          <div class="col-2">
            <button class="btn" onClick={openLink}>
              <img src={discord} class="img-fluid" alt="discord logo" />
            </button>
          </div>
          <div class="col-2">
            <button class="btn" onClick={openLink}>
              <img src={insta} class="img-fluid" alt="instagram logo" />
            </button>
          </div>
          <div class="col-2">
            <button class="btn" onClick={openLink}>
              <img src={linkedin} class="img-fluid" alt="linkedin logo" />
            </button>
          </div>
          <div class="col-2">
            <button class="btn" onClick={openLink}>
              <img src={twitter} class="img-fluid" alt="twitter logo" />
            </button>
          </div>
        </div>
    </div>
    </>
  )
}

export default SocialMediaBanner;