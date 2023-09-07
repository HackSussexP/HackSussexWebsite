import React from 'react';
import { Link } from 'react-router-dom';

const AboutHeader = () => {
    return (
        <>
            <div className='container py-2 px-3'>
                <div class='row align-items-center px-4 mx-4 py-4 text-center'>
                <div class='col'>
                    <h1 class='lead fs-2 mb-3 text-uppercase'>The Home of informatics at the University of Sussex</h1>
                    <h2 class='mb-3 fs-3 text-uppercase'>Welcome to HackSussex</h2>
                    <p className='fs-5 mb-4 fw-light'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ante eget tellus vulputate facilisis id ac diam. Pellentesque nec pretium leo. In non imperdiet purus. Phasellus arcu sem, volutpat non neque ut, mattis pretium nisi. Etiam dapibus convallis ligula vel molestie. Donec maximus magna id condimentum sodales. In orci ipsum, commodo vel mi ut, tincidunt malesuada dolor. Nunc gravida est in ante sagittis porta. Maecenas ullamcorper odio eu magna accumsan, non vestibulum nibh malesuada. Aenean sollicitudin ex eu ante pharetra, non tempus ex tempus. Nam ultrices metus dui, id imperdiet nisl pulvinar vel. Cras efficitur magna a dapibus tempor.
                    </p>
                    <Link type="button" class="btn btn-blue btn-lg" to='/about'>Learn More</Link>
                </div>
                </div>        
            </div>
        </>
    )
}

export default AboutHeader;