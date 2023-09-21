import React from "react";
import PhotoModal from "./PhotoModal";

import cc1 from '../assets/Gallery/cc1.png';
import cc2 from '../assets/Gallery/cc2.png';
import cc3 from '../assets/Gallery/cc3.png';
import cc4 from '../assets/Gallery/cc4.png';
import cc5 from '../assets/Gallery/cc5.png';
import cc6 from '../assets/Gallery/cc6.png';
import cc7 from '../assets/Gallery/cc7.png';
import cc8 from '../assets/Gallery/cc8.png';
import cc9 from '../assets/Gallery/cc9.png';
import cc10 from '../assets/Gallery/cc10.png';
import cc11 from '../assets/Gallery/cc11.png';
import cc12 from '../assets/Gallery/cc12.png';

const CodersCupGallery = () => {
    return (
        <>
            <div className='row jutify-content-between p-3'>
                <div className='col-sm'>
                    <PhotoModal img={cc1} description={"2023 CODERS CUP BTS"} number={1} />
                </div>
                <div className='col-sm'>
                    <PhotoModal img={cc2} description={"AUDIENCE WATCHING 2022 CODERS CUP"} number={2} />
                </div>
                <div className='col-sm'>
                    <PhotoModal img={cc3} description={"2023 CODERS CUP COMPETITORS"} number={3} />
                </div>
                <div className='col-sm'>
                    <PhotoModal img={cc4} description={"hACKSUSSEX TEAM VALIDATING COMPETITORS PROGRAMMING"} number={4} />
                </div>
            </div>
            <div className='row jutify-content-between p-3'>
                <div className='col-sm'>
                    <PhotoModal img={cc5} description={"2023 CODERS CUP WINNER WITH PRIZES"} number={5} />
                </div>
                <div className='col-sm'>
                    <PhotoModal img={cc6} description={"2023 CODERS CUP REHEARSAL"} number={6} />
                </div>
                <div className='col-sm'>
                    <PhotoModal img={cc7} description={"2023 CODERS CUP TV STUDIO BTS"} number={7} />
                </div>
                <div className='col-sm'>
                    <PhotoModal img={cc8} description={"2023 CODERS CUP COMPETITORS BATTLING EACH OTHER"} number={8} />
                </div>
            </div>
            <div className='row jutify-content-between p-3'>
                <div className='col-sm'>
                    <PhotoModal img={cc9} description={"2023 CODERS CUP COMPETITORS BATTLING EACH OTHER"} number={9} />
                </div>
                <div className='col-sm'>
                    <PhotoModal img={cc10} description={"PREPARING TV STUDIO FOR 2023 CODERS CUP"} number={10} />
                </div>
                <div className='col-sm'>
                    <PhotoModal img={cc11} description={"2023 CODERS CUP REHEARSAL"} number={11} />
                </div>
                <div className='col-sm'>
                    <PhotoModal img={cc12} description={"2023 CODERS CUP BEHIND THE CAMERAS"} number={12} />
                </div>
            </div>
        </>
    )
}

export default CodersCupGallery;