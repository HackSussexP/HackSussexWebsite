import React, { useEffect, useState } from 'react';
import {Octokit} from 'octokit';

const Testing = () => {
  const [images, setImages] = useState([])

  const getData = async () => {
    const octokit = new Octokit();
    const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
      owner: 'HackSussexP',
      repo: 'public_assets',
      path: 'assets'
    })
    const images = []
    response.data.forEach((image) => {
      images.push(image.download_url)
    })
    return images
  }

  useEffect(() => {
    const res = getData()
    setImages(res)
  }
  , [])

  console.log(images)
  console.log(images.length)
  return (
    <>
      <h1>Testing</h1>
      <img src={images[19]} />
    </>
  );
}

export default Testing;