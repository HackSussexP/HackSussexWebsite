import React from "react";
import PhotoModal from "./PhotoModal";

import cs1 from '../assets/Gallery/cs1.png';
import cs2 from '../assets/Gallery/cs2.png';
import cs3 from '../assets/Gallery/cs3.png';
import cs4 from '../assets/Gallery/cs4.png';
import cs5 from '../assets/Gallery/cs5.png';

const CodeSocialGallery = () => {
    return (
        <>
            <div className='row jutify-content-between p-3'>
                <div className='col-sm'>
                    <PhotoModal img={cs1} description={"2021 CODE SOCIAL ENJOYING PIZZA"} number={1} />
                </div>
                <div className='col-sm'>
                    <PhotoModal img={cs2} description={"2022 CODE SOCIAL"} number={2} />
                </div>
                <div className='col-sm'>
                    <PhotoModal img={cs3} description={"HACKSUSSEX LOVE PIZZA"} number={3} />
                </div>
            </div>
            <div className='row jutify-content-between p-3'>
                <div className='col-sm'>
                    <PhotoModal img={cs4} description={"2022 CODE SOCIAL GROUP ENJOYING A GAME"} number={4} />
                </div>
                <div className='col-sm'>
                    <PhotoModal img={cs5} description={"2022 CODE SOCIAL GROUP LOOKING A RC CARS"} number={5} />
                </div>
            </div>
        </>
    )
}

export default CodeSocialGallery;