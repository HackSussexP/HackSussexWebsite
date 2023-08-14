import React from 'react';
import background from './../assets/SocialMediaSectionBackground.png'
import discord from './../assets/SocialMediaIcons/discord.png'
import insta from './../assets/SocialMediaIcons/instagram.png'
import linkedin from './../assets/SocialMediaIcons/linkedin.png'
import twitter from './../assets/SocialMediaIcons/twitter.png'

const SocialMediaSection = () => {
    return (
        <>
            <div class="card text-center" style={{borderRadius: "0px"}}>
                <img src={background} class="card-img"/>
                <div class="card-img-overlay">
                    <h5 class="card-title">Find us on Social Media</h5>
                    <button className='p-3' style={{border: "none", background: "none"}}>
                        <img src={discord}></img>
                    </button>
                    <button className='p-3' style={{border: "none", background: "none"}}>
                        <img src={insta}></img>
                    </button>
                    <button className='p-3' style={{border: "none", background: "none"}}>
                        <img src={linkedin}></img>
                    </button>
                    <button className='p-3' style={{border: "none", background: "none"}}>
                        <img src={twitter}></img>
                    </button>
                </div>
            </div>
        </>
    )
}

export default SocialMediaSection;