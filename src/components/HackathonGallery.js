import React from "react";
import PhotoModal from "./PhotoModal";

import h1 from '../assets/Gallery/h1.jpg';
import h2 from '../assets/Gallery/h2.jpg';
import h3 from '../assets/Gallery/h3.jpg';
import h4 from '../assets/Gallery/h4.jpg';
import h5 from '../assets/Gallery/h5.jpg';
import h6 from '../assets/Gallery/h6.jpg';
import h7 from '../assets/Gallery/h7.jpg';
import h8 from '../assets/Gallery/h8.jpg';
import h9 from '../assets/Gallery/h9.jpg';
import h10 from '../assets/Gallery/h10.jpg';
import h11 from '../assets/Gallery/h11.jpg';
import h12 from '../assets/Gallery/h12.jpg';
import h13 from '../assets/Gallery/h13.jpg';
import h14 from '../assets/Gallery/h14.jpg';
import h15 from '../assets/Gallery/h15.jpg';
import h16 from '../assets/Gallery/h16.jpg';

const HackthonGallery = () => {
    return (
        <>
            <div className='row jutify-content-between p-3'>
                <div className='col-sm'>
                <PhotoModal img={h1} description={"HACKSUSSEX TEAM BEHIND 2023 HACKATHON"} number={1} />
                </div>
                <div className='col-sm'>
                <PhotoModal img={h2} description={"2023 HACKATHON BTS"} number={2} />
                </div>
                <div className='col-sm'>
                <PhotoModal img={h3} description={"2023 HACKATHON TEAM DISCUSSING PROJECT"} number={3} />
                </div>
                <div className='col-sm'>
                <PhotoModal img={h4} description={"2023 HACKATHON TEAM WORKING ON PROJECT"} number={4} />
                </div>
            </div>
            <div className='row jutify-content-between p-3'>
                <div className='col-sm'>
                <PhotoModal img={h5} description={"INTRODUCING PRIZES TO 2023 HACKATHON ATTENDEES"} number={5} />
                </div>
                <div className='col-sm'>
                <PhotoModal img={h6} description={"2022 HACKATHON AUDIENCE"} number={6} />
                </div>
                <div className='col-sm'>
                <PhotoModal img={h7} description={"2022 HACKATHON AUDIENCE"} number={7} />
                </div>
                <div className='col-sm'>
                <PhotoModal img={h8} description={"INTRODUCING HACKTHON TO 2021 ATTENDEES"} number={8} />
                </div>
            </div>
            <div className='row jutify-content-between p-3'>
                <div className='col-sm'>
                <PhotoModal img={h9} description={"2022 HACKATHON SPONSORS MIZUHO INTRODUCING THEMSELVES"} number={9} />
                </div>
                <div className='col-sm'>
                <PhotoModal img={h10} description={"VARIOUS 2022 HACKATHON SPONSORS"} number={10} />
                </div>
                <div className='col-sm'>
                <PhotoModal img={h11} description={"2021 HACKATHON TEAM WORKING ON PROJECT"} number={11} />
                </div>
                <div className='col-sm'>
                <PhotoModal img={h12} description={"2023 HACKATHON LIVESTREAM BTS"} number={12} />
                </div>
            </div>
            <div className='row jutify-content-between p-3'>
                <div className='col-sm'>
                <PhotoModal img={h13} description={"2023 HACKATHON TEAM WORKING ON PROJECT"} number={13} />
                </div>
                <div className='col-sm'>
                <PhotoModal img={h14} description={"TESTING SPEAKERS BEFORE 2023 HACKATHON"} number={14} />
                </div>
                <div className='col-sm'>
                <PhotoModal img={h15} description={"2023 HACKATHON TEAM SHOWING OFF CROQUETED CREATION"} number={15} />
                </div>
                <div className='col-sm'>
                <PhotoModal img={h16} description={"2022 HACKATHON TEAM AT START OF EVENT"} number={16} />
                </div>
            </div> 
        </>
    )
}

export default HackthonGallery;