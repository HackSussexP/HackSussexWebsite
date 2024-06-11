import React, { useEffect, useState } from 'react';
import {Octokit} from 'octokit';

const Testing = () => {

  const containerStyle = {
    height: '200px',
    overflow: 'hidden'
  }

  const coverImageStyle = {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    cursor: 'pointer'
  }

  const largeButtonStyle = {
    border: 'none',
    transition: '0.3s ease',
    textDecoration: 'none !important',
  }

  
  const activeButtonStyle = {
    ...largeButtonStyle,
    backgroundColor: 'var(--electric-green)',
  }

  const filterButtonStyle = {
    backgroundColor: 'var(--light-blue)',
    border: 'none',
    boxShadow: 'none'
  }

  const [images, setImages] = useState([])
  const [events, setEvents] = useState([])
  const [years, setYears] = useState([])
  const [selectedEvent, setSelectedEvent] = useState("all")
  const [selectedYear, setSelectedYear] = useState(null)

  const eventDisplayNames = {
    "all": "All",
    "coderscup": "Coders' Cup",
    "codesocials": "Code Socials",
    "gamejam": "Game Jam",
    "hackathon": "Hackathon",
    "leetcoding": "Leetcoding",
    "misc": "Miscellaneous",
    "pwnsussex": "PwnSussex",
    "robotics": "Robotics"
  }

  const getData = async () => {
    const octokit = new Octokit();
    const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
      owner: 'HackSussexP', 
      repo: 'public',
      path: ''
    })

    // https://api.github.com/repos/HackSussexP/public/git/trees/8e7793404b8be32fc67225618759088457378aa3
    //console.log("SHa: " + response.data[0].sha)

    // get child folders from the response folder
    const children = await octokit.request('GET /repos/{owner}/{repo}/git/trees/{tree_sha}?recursive=1', {
      owner: 'HackSussexP',
      repo: 'public',
      tree_sha: response.data[0].sha
    })

    const path_list = {}
    children.data.tree.forEach(item => {
      if (item.type === "tree") {
        const paths = item.path.split('/'); // Split path into parts
        let current = path_list
  
        paths.forEach(path => {
          if (!current[path]) {
            current[path] = {}; // Create sub-dictionary if it doesn't exist
          }
          current = current[path]; // Move to the next level
        })
      }
    })

    let events = []
    Object.keys(path_list).forEach(key => {
      events.push(key)
    })
    setEvents(events)

    let years = []
    Object.keys(path_list).forEach(key => {
      let year_list = []
      Object.keys(path_list[key]).forEach(year => {
        year_list.push(year)
      })
      years.push(year_list)
    })
    setYears(years)

    const images_list = children.data.tree.filter(item => item.type === "blob")

    const imageUrls = images_list.map(image => {
      if (image.path) {
        return image.path
      }
    })
    setImages(imageUrls)
  }

  useEffect(() => {
    getData();
  }, [])


  //  console.log(images)
  return (
    <>
      <div className="container mt-4">
        {/* Buttons to select event with corresponding years by index */}
        <div className="row justify-content-center">
          {/* Render "All" button only if there are more than one event */}
          {events.length > 1 && (
            <div className="col-6 col-md-4 col-lg-3 mb-3">
              <button className="btn w-100 btn-blue" style={selectedEvent === "all" ? activeButtonStyle : largeButtonStyle} onClick={() => setSelectedEvent("all")}>All</button>
            </div>
          )}
          {events.map((event, index) => (
            // Skip rendering the "All" event button
            event !== "All" && (
              <div key={event} className="col-6 col-md-4 col-lg-3 mb-3">
                <button
                  className="btn w-100 btn-blue"
                  style={selectedEvent === index ? activeButtonStyle : largeButtonStyle}
                  onClick={() => {
                    setSelectedEvent(index);
                    setSelectedYear(null); // Reset selected year when a new event is selected
                  }}
                >
                  {eventDisplayNames[event] || event}
                </button>
              </div>
            )
          ))}
        </div>
        
        <hr className="my-4" />
        
        {/* filter dropdown for years */}
        <div className="row justify-content-end">
          <div className="col-auto mb-3">
            <div className="dropdown">
              <button className="btn text-end btn-blue dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                Filter
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><button className="dropdown-item" onClick={() => setSelectedYear(null)}>All</button></li>
                {years[selectedEvent]?.map(year => (
                  <li key={year}><button className="dropdown-item" onClick={() => setSelectedYear(year)}>{year}</button></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          {images.map(image => {
            // Extract event and year from the image path
            const imagePathParts = image.split('/');
            const event = imagePathParts[0];
            const year = imagePathParts[1];

            // Check if the image matches the selected event and year
            if ((selectedEvent === "all" || event === events[selectedEvent]) && (selectedYear === null || year === selectedYear)) {
              return (
                <div key={image} className="col-md-4 mb-4" style={containerStyle}>
                  <img src={`https://github.com/HackSussexP/public/blob/main/gallery/${image}?raw=true`} style={coverImageStyle} alt="test" />
                </div>
              );
            } else {
              return null; // Render nothing if the image doesn't match the selected event and year
            }
          })}
        </div>
      </div>
    </>
  );
}

export default Testing;