import React from 'react';

import Resources from '../../components/Resources';
import EventWhereWhen from '../../components/EventWhereWhen';
import AboutSection from '../../components/AboutSection';
import roboticsBackground from '../../assets/roboticsBackground.png';

const linksData = [
    // Website - Online Practice
    { name: "LeetCode", url: "https://leetcode.com/" },
    { name: "HackerRank", url: "https://www.hackerrank.com/" },
    { name: "Codeforces", url: "https://codeforces.com/" },
    { name: "AtCoder", url: "https://atcoder.jp/" },
  
    // Website - Misc
    { name: "Visualgo", url: "https://visualgo.net/en" },
    { name: "Tech Interview Handbook", url: "https://www.techinterviewhandbook.org/grind75" },
    { name: "Neetcode", url: "https://neetcode.io/" },
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

const Robotics = () => {
  return (
    <>
        <div className="carousel-inner p-0">
            <img src={roboticsBackground} className="d-block w-100 img-fluid splash" alt='Background' />
            <div className="carousel-caption">
                <p className='display-4' style={{color: "var(--electric-green)"}}>Robotics</p> {/* Get me sized correctly or replaced */}
            </div>
        </div>
        <AboutSection description={`Welcome to HackSussex's Weekly Robotics workshops! Our workshops are open to anyone with an interest and offer the chance to learn the basics of electronics, mechanics, coding and robotics through a hands-on session. These sessions give you a great understanding about how designing, You’ll get a quick introduction to the topic at the start of every session, then in small groups, go through custom worksheets with provided hardware gradually building in difficulty over the year.`} />
        <EventWhereWhen location="JCW, University of Sussex" date="Every Wednesday, 14:30 to 16:00" />
        <Resources links={linksData} />
    </>
  );
}

export default Robotics;