import React from 'react';
import human from './../assets/index-carousel/image1.png'
import PhotoCard from './../components/PhotoCard'

//To change
// - add actual people's photos, names and descriptions
// - fill in 'the rest of the page' once we know what is going there
// - sort out display for wide (horizontal) and thin (vertical) mode

const About = () => {
  return(
    <>
      <div>
        <div className='container-fluid'>
          <h1 className='row text-lg-center p-5'>MEET US</h1>
          <div className="row d-block d-sm-none">
            <PhotoCard photo={human} title={"hooman #1"} text={"This is hooman #1"}/>
            <PhotoCard photo={human} title={"hooman #2"} text={"This is hooman #2"}/>
            <PhotoCard photo={human} title={"hooman #3"} text={"This is hooman #3"}/>
            <PhotoCard photo={human} title={"hooman #4"} text={"This is hooman #4"}/>
            <PhotoCard photo={human} title={"hooman #5"} text={"This is hooman #5"}/>
          </div>
          <div className="row d-none d-sm-block">
            <div className='d-flex justify-content-around'>
              <PhotoCard photo={human} title={"hooman #1"} text={"This is hooman #1"}/>
              <PhotoCard photo={human} title={"hooman #2"} text={"This is hooman #2"}/>
              <PhotoCard photo={human} title={"hooman #3"} text={"This is hooman #3"}/>
              <PhotoCard photo={human} title={"hooman #4"} text={"This is hooman #4"}/>
              <PhotoCard photo={human} title={"hooman #5"} text={"This is hooman #5"}/>
            </div>
          </div>
          <div className='container-fluid text-center p-3 mt-5' style={{"backgroundColor": "var(--green)"}}>the rest of the page</div>
        </div>
      </div>
    </>
  );
}

export default About;