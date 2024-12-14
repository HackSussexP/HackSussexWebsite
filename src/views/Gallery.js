import React, { useEffect, useState, useMemo } from 'react'
import { Octokit } from 'octokit'
import placeholderImage from '../assets/Gallery Placeholder.png'

const Gallery = () => {
  const containerStyle = {
    height: '200px',
    overflow: 'hidden',
  }

  const coverImageStyle = {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    cursor: 'pointer',
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

  const [images, setImages] = useState([])  // image metadata
  const [events, setEvents] = useState([])  // event names
  const [years, setYears] = useState([])  // available years for each event
  const [selectedEvent, setSelectedEvent] = useState("all")
  const [selectedYear, setSelectedYear] = useState(null)
  const [imageCache, setImageCache] = useState({})  // store loaded images
  const [modalImageSrc, setModalImageSrc] = useState('')
  const url = "https://cdn.jsdelivr.net/gh/HackSussexP/public_assets@main/assets/Gallery/"

  const eventDisplayNames = useMemo(() => {
    const defaultNames = { all: "All" }
    const dynamicNames = events.reduce((acc, event) => {
      acc[event] = event.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())
      return acc
    }, {})
    return { ...defaultNames, ...dynamicNames }
  }, [events])

  const shuffleArray = (array) => {
    let shuffledArray = [...array]
    // for (let i = shuffledArray.length - 1; i > 0; i--) {
    //   var j = Math.floor(Math.random() * (i + 1)) ;
    //   [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    // }
    return shuffledArray
  }  

  const getData = async () => {
    const octokit = new Octokit()
    const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
      owner: 'HackSussexP',
      repo: 'public_assets',
      path: 'assets',
    })
  
    // Find the gallery folder
    const res = response.data.filter((item) => item.name === "Gallery")
  
    // Fetch the entire tree structure for the "Gallery" folder (recursive)
    const children = await octokit.request('GET /repos/{owner}/{repo}/git/trees/{tree_sha}?recursive=1', {
      owner: 'HackSussexP',
      repo: 'public_assets',
      tree_sha: res[0].sha,
    })
  
    const pathList = {}
    children.data.tree.forEach((item) => {
      if (item.type === "tree") {
        const paths = item.path.split('/')
        let current = pathList
        paths.forEach((path) => {
          if (!current[path]) current[path] = {}
          current = current[path]
        })
      }
    })
  
    const events = Object.keys(pathList)
    setEvents(events)
  
    const years = events.map((event) => Object.keys(pathList[event]))
    setYears(years)
  
    // Collect image metadata (paths) and filter out non-image files
    const imageUrls = children.data.tree.filter((item) => item.type === "blob" && (item.path.endsWith('.jpg') || item.path.endsWith('.png')))
      .map((image) => image.path)
  
    // Shuffle image metadata (paths) before setting them
    setImages(shuffleArray(imageUrls))
  }
  

  useEffect(() => {
    getData()
  }, [])

  const handleError = (e) => {
    e.target.src = placeholderImage
    e.target.style.cursor = 'default'
    e.target.style.pointerEvents = 'none'
  }

  const handleShowModal = (imageSrc) => {
    setModalImageSrc(imageSrc)
  }

  const handleImageLoad = (imagePath) => {
    if (!imageCache[imagePath]) {
      const image = new Image()
      image.src = `${url}/${imagePath}`
      image.onload = () => {
        setImageCache((prevCache) => ({ ...prevCache, [imagePath]: image.src }))
      }
    }
  }

  return (
    <>
      <div className="container mt-4">
        <div className="row justify-content-center">
          {events.length > 1 && (
            <div className="col-6 col-md-4 col-lg-3 mb-3">
              <button
                className="btn w-100 btn-blue"
                style={selectedEvent === "all" ? activeButtonStyle : largeButtonStyle}
                onClick={() => {
                    setSelectedEvent("all")
                    setSelectedYear(null)
                  }
                }
              >
                All
              </button>
            </div>
          )}
          {events.map((event, index) => (
            event !== "All" && (
              <div key={event} className="col-6 col-md-4 col-lg-3 mb-3">
                <button
                  className="btn w-100 btn-blue"
                  style={selectedEvent === index ? activeButtonStyle : largeButtonStyle}
                  onClick={() => {
                    setSelectedEvent(index)
                    setSelectedYear(null)
                  }}
                >
                  {eventDisplayNames[event] || event}
                </button>
              </div>
            )
          ))}
        </div>

        <hr className="my-4" />

        <div className="row justify-content-end">
          <div className="col-auto mb-3">
            <div className="dropdown">
              <button
                className="btn text-end btn-blue dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Filter
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><button className="dropdown-item" onClick={() => setSelectedYear(null)}>All</button></li>
                {years[selectedEvent]?.map((year) => (
                  <li key={year}><button className="dropdown-item" onClick={() => setSelectedYear(year)}>{year}</button></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          {images.map((image) => {
            const imagePathParts = image.split('/')
            const event = imagePathParts[0]
            const year = imagePathParts[1]

            if ((selectedEvent === "all" || event === events[selectedEvent]) && (selectedYear === null || year === selectedYear)) {
              return (
                <div key={image} className="col-md-4 mb-4" style={containerStyle}>
                  <img
                    src={imageCache[image] || placeholderImage}  // Use cached image or placeholder
                    style={coverImageStyle}
                    alt="Gallery"
                    onError={handleError}
                    onClick={() => handleShowModal(`${url}/${image}`)}
                    onLoad={() => handleImageLoad(image)}  // Trigger loading of image
                    loading='lazy'
                  />
                </div>
              )
            }
            return null
          })}
        </div>
      </div>

      <div className="modal" tabIndex={-1} id="galleryModal">
        <div className="modal-dialog modal-dialog-centered modal-xl custom-modal">
          <div className="modal-content">
            <div className="modal-body rounded">
              <img id="modalImage" className="img-fluid rounded" src={modalImageSrc} alt="Gallery" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Gallery
