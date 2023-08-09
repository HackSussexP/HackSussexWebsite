import React from 'react';
import human from './../assets/index-carousel/image1.png'

//To change
// - add actual people's photos, names and descriptions
// - fill in 'the rest of the page' once we know what is going there

const About = () => {
  return(
    <div>
      <div className='container-fluid'>
        <h1 className='text-lg-center p-5'>MEET US</h1>
        <div className='d-flex justify-content-around'>
          <div className="card text-center p-3" style={{"width": 18+"rem", "background-color": "var(--light-blue)"}}>
            <img src={human} alt='hooman #1'></img>
            <div className="card-body">
              <h5 className="card-title">Hooman #1</h5>
              <p className="card-text">This is human #1</p>
            </div>
          </div>
          <div className="card text-center p-3" style={{"width": 18+"rem", "background-color": "var(--light-blue)"}}>
            <img src={human} alt='hooman #2'></img>
            <div className="card-body">
              <h5 className="card-title">Hooman #2</h5>
              <p className="card-text">This is human #2</p>
            </div>
          </div>
          <div className="card text-center p-3" style={{"width": 18+"rem", "background-color": "var(--light-blue)"}}>
            <img src={human} alt='hooman #3'></img>
            <div className="card-body">
              <h5 className="card-title">Hooman #3</h5>
              <p className="card-text">This is human #3</p>
            </div>
          </div>
          <div className="card text-center p-3" style={{"width": 18+"rem", "background-color": "var(--light-blue)"}}>
            <img src={human} alt='hooman #4'></img>
            <div className="card-body">
              <h5 className="card-title">Hooman #4</h5>
              <p className="card-text">This is human #4</p>
            </div>
          </div>
          <div className="card text-center p-3" style={{"width": 18+"rem", "background-color": "var(--light-blue)"}}>
            <img src={human} alt='hooman #5'></img>
            <div className="card-body">
              <h5 className="card-title">Hooman #5</h5>
              <p className="card-text">This is human #5</p>
            </div>
          </div>
        </div>
        <div className='container-fluid text-center p-3 mt-5' style={{"background-color": "var(--green)"}}>the rest of the page</div>
      </div>
    </div>
  );
}

export default About;