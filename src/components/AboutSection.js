import React from "react";
import { Link } from "react-router-dom";

const AboutSection = (props) => {
    return (
        <>
            <div className='container p-4 pt-5'>
                <div className='row'>
                    <div className='col'>
                    <p className='display-1'>About</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <p className='h6'>{props.description}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm p-2'>
                        <Link type='button' className='btn btn-light btn-lg rounded-5' style={{width: "10vw"}}>Register</Link>
                        <Link type='button pl-3' className='btn btn-light btn-lg rounded-5' style={{width: "10vw"}}>FAQ</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection;