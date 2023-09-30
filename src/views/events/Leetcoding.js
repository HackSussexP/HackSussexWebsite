import React from 'react'

import Resources from '../../components/Resources'
import AboutSection from '../../components/AboutSection';
import EventWhereWhen from '../../components/EventWhereWhen';

import LeetcodingLogo from './../../assets/index-carousel/leetcoding-logo.png'
import LeetcodingBackground from './../../assets/index-carousel/leetcoding-background.png'

const linksData = [
  // Website - Online Practice
  { name: "LeetCode", url: "https://leetcode.com/" },
  { name: "HackerRank", url: "https://www.hackerrank.com/" },
  { name: "Codeforces", url: "https://codeforces.com/" },
  { name: "AtCoder", url: "https://atcoder.jp/" },

  // Website - Misc
  { name: "Visualgo", url: "https://visualgo.net/en" },
  { name: "Tech Interview Handbook", url: "https://www.techinterviewhandbook.org/grind75" },
  { name: "Neeetcode", url: "https://neetcode.io/" },
  { name: "LeetCode The Hard Way", url: "https://leetcodethehardway.com/" },
  { name: "USACO Guide", url: "https://usaco.guide/" },
  { name: "CP Algorithms", url: "https://cp-algorithms.com/index.html" },

  // Books - DSA
  { name: "Introduction to Algorithms", url: "https://www.amazon.co.uk/Introduction-Algorithms-Thomas-H-Cormen/dp/0262033844" },

  // Books - CP
  { name: "Competitive Programming Book", url: "https://cpbook.net/" },
  { name: "CSES Problem Set", url: "https://cses.fi/book/book.pdf" },
  { name: "Competitive Programming Handbook", url: "https://link.springer.com/book/10.1007/978-3-319-72547-5" },
];


const Leetcoding = () => {
  return (
    <>
      <div className="carousel-inner p-0">
        <img src={LeetcodingBackground} className="d-block w-100 img-fluid splash" alt='Background' />
        <div className="carousel-caption">
            <img src={LeetcodingLogo} alt="Leetcoding Logo" className='img-fluid d-block h-100 w-100 p-3' />
        </div>
      </div>
      <AboutSection description={`Welcome to HackSussex's weekly Leetcoding sessions! Our sessions are open to programmers of all levels, and they offer a chance to tackle a variety of engaging coding challenges. After taking a shot at these challenges, participants have the opportunity to discuss their approaches and solutions with fellow coders in a relaxed and friendly atmosphere. These sessions are an excellent way to enhance your problem-solving skills and prepare for technical job interviews in a comfortable and inclusive environment. Feel free to use your preferred programming language, and we look forward to having you join us on this coding journey at HackSussex!`} />
      <EventWhereWhen location="Future Technologies Lab, University of Sussex" date={null} />
      <Resources links={linksData} />
      <div className='mb-5'></div>
    </>
  )
}

export default Leetcoding