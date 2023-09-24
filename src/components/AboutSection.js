import React from "react";
import { Link } from "react-router-dom";

const AboutSection = (props) => {
    return (
        <>
            <div className='container p-4 pt-5'>
                <div className='row'>
                    <h2 className='display-4 p-3 w-75 border-divider'>About</h2>
                </div>
                <div className='row'>
                    <p>{props.description}</p>
                </div>
                <div className='row'>
                    <div className='col-auto p-2'>
                        <Link type='button' className='btn btn-blue btn-lg' to="/event/hackathon/register">Register</Link>
                    </div>
                    <div className='col-auto p-2'>
                        <Link type='button' className='btn btn-blue btn-lg' to="/event/hackathon/register">FAQ</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection;