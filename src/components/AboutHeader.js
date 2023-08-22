import React from 'react';

const AboutHeader = () => {
    return (
        <>
            <div className='container-fluid pt-5 pb-3'>
                <p className='h3 text-center lh-1 align-middle'>THE HOME OF INFORMATICS AT THE UNIVERSITY OF SUSSEX</p>
                <p className='h1 text-center lh-base align-middle'>WELCOME TO HACKSUSSEX</p>
                <div className='container d-flex justify-content-center'>
                    <p className='h4 text-center lh-1 w-75'>Lorem ipsum dolorLsit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                </div>
                <div className='container d-flex justify-content-center p-4'>
                    <button type='button' className='h2 btn btn-light text-center align-middle w-25'>About</button>
                </div>
            </div>
        </>
    )
}

export default AboutHeader;