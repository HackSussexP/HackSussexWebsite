import React from 'react';

const AboutHeader = () => {
    return (
        <>
            <div className='container-fluid pt-5 pb-3'>
                <p className='text-center lh-1 align-middle' style={{fontSize: "20px"}}>THE HOME OF INFORMATICS AT THE UNIVERSITY OF SUSSEX</p>
                <p className='text-center lh-base align-middle' style={{fontSize: "36px"}}>WELCOME TO HACKSUSSEX</p>
                <div className='container d-flex justify-content-center'>
                    <p className='text-center lh-1 w-50' style={{fontSize: "16px"}}>Lorem ipsum dolorLsit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                </div>
                <div className='container d-flex justify-content-center p-4'>
                    <button type='button' className='btn btn-light text-center align-middle w-25' style={{fontSize: "24px"}}>About</button>
                </div>
            </div>
        </>
    )
}

export default AboutHeader;