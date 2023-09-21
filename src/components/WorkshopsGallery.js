import React from "react";
import PhotoModal from "./PhotoModal";

import w1 from '../assets/Gallery/w1.jpg';
import w3 from '../assets/Gallery/w3.jpg';
import w4 from '../assets/Gallery/w4.jpg';
import w5 from '../assets/Gallery/w5.jpg';
import w6 from '../assets/Gallery/w6.jpg';
import w7 from '../assets/Gallery/w7.jpg';

const WorkshopsGallery = () => {
    return (
        <>
            <div className='row jutify-content-between p-3'>
                <div className='col-sm'>
                    <PhotoModal img={w1} description={"INTRODUCTORY ROBOTICS WORKSHOP"} number={1} />
                </div>
                <div className='col-sm'>
                    <PhotoModal img={w3} description={"2022 CAPTURE THE FLAG TEAM TAKING ON A CHALLENGE"} number={3} />
                </div>
                <div className='col-sm'>
                    <PhotoModal img={w4} description={"2023 LEETCODING WORKSHOP"} number={4} />
                </div>
            </div>
            <div className='row jutify-content-between p-3'>
                <div className='col-sm'>
                    <PhotoModal img={w5} description={"2023 ROBOTICS WORKSHOP"} number={5} />
                </div>
                <div className='col-sm'>
                    <PhotoModal img={w6} description={"INTRODUCTORY ROBOTICS WORKSHOP INSTRUCTIONS TO DEVELOP A CIRCUIT"} number={6} />
                </div>
                <div className='col-sm'>
                    <PhotoModal img={w7} description={"GROUP WORKING WITH SENSORS IN A ROBOTICS WORKSHOP"} number={7} />
                </div>
            </div>
        </>
    )
}

export default WorkshopsGallery;