import React from 'react';

const PhotoCard = (props) => {
    return (
        <>
            <div className="card text-center p-3" style={{width: 18+"rem", backgroundColor: "var(--light-blue)"}}>
                <img className='card-img-top' src={props.photo} alt='hooman #5'></img>
                <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                </div>
            </div>
        </>
    )
}

export default PhotoCard;