import React, { useEffect, useState } from 'react';
import {Octokit} from 'octokit';

const Testing = () => {

  const [images, setImages] = useState([])

  const getData = async () => {
    const octokit = new Octokit();
    const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
      owner: 'HackSussexP',
      repo: 'public',
      path: ''
    })
    console.log(response.data)

    // https://api.github.com/repos/HackSussexP/public/git/trees/8e7793404b8be32fc67225618759088457378aa3
    console.log("SHa: " + response.data[0].sha)

    // get child folders from the response folder
    const children = await octokit.request('GET /repos/{owner}/{repo}/git/trees/{tree_sha}?recursive=1', {
      owner: 'HackSussexP',
      repo: 'public',
      tree_sha: response.data[0].sha
    })
    
    console.log(children.data.tree)

    const data = {}
    children.data.tree.forEach(item => {
      if (item.type === "tree") {
        const paths = item.path.split('/'); // Split path into parts
        let current = data
  
        paths.forEach(path => {
          if (!current[path]) {
            current[path] = {}; // Create sub-dictionary if it doesn't exist
          }
          current = current[path]; // Move to the next level
        })
      }
    })
    console.log(data)

    // remove file elements if there is a nested folder
    // will need to be kept if number of elements is greater than 2
    
  


    console.log(data)
  }

    //   const imageUrls = response.data.map(image => {
  //     if (image.download_url) {
  //       return image.download_url
  //     }
  //   })
  //   setImages(imageUrls)
  // }

  useEffect(() => {
    getData();
  }, [])


  //  console.log(images)
  return (
    <>
      
    </>
  );
}

export default Testing;