import React from 'react';
import styles from './About.module.css';

import PhotoCard from './../components/PhotoCard'

import jack from '../assets/Committee/jack.png'
import adnan from '../assets/Committee/adnan.png'
import amy from '../assets/Committee/amy.jpg'
import tori from '../assets/Committee/tori.png'
import anton from '../assets/Committee/anton.png'
import ryu from '../assets/Committee/ryu.png'
import josh from '../assets/Committee/josh.png'
import tom from '../assets/Committee/tom.png'
import jude from '../assets/Committee/jude.png'
import charlotte from '../assets/Committee/charlotte.png'
import henry from '../assets/Committee/henry.png'
import patrick from '../assets/Committee/patrick.jpg'
import lukas from '../assets/Committee/lukas.jpg'
import richerd from '../assets/Committee/richerd.jpg'
import david from '../assets/Committee/david.png'
import emily from '../assets/Committee/emily.jpg'
import jamie from '../assets/Committee/jamie.png'
import elias from '../assets/Committee/elias.png'
import amyS from '../assets/Committee/amyS.png'
import keagan from '../assets/Committee/keagan.png'

const About = () => {

  const committeeMembers = [
    {
      imageUrl: jack,
      name: "Jack Speat",
      role: "President",
      email: "jack@hacksussex.com",
      githubLink: "https://github.com/Speaty",
      linkedinLink: "https://www.linkedin.com/in/jack-speat-7333491b3/"
    },
    {
      imageUrl: tom,
      name: "Tom Harwood",
      role: "Manager",
      email: "tom@hacksussex.com",
      githubLink: "https://github.com/tomtehtom",
      linkedinLink: "https://www.linkedin.com/in/teharwood/"
    },
    {
      imageUrl: charlotte,
      name: "Charlotte Richardson",
      role: "Welfare Officer & Web Development",
      email: "charlotte@hacksussex.com",
      githubLink: "https://github.com/Charlotte-R-01134",
      linkedinLink: "https://www.linkedin.com/in/charlotte-richardson-7673a11a2/"
    },
    {
      imageUrl: adnan,
      name: "Adnan Quisar",
      role: "Competitive Coding",
      email: "adnan@hacksussex.com",
      githubLink: "https://github.com/adnantech",
      linkedinLink: "https://linkedin.com/in/adnanquisar"
    },
    {
      imageUrl: henry,
      name: "Henry Williams",
      role: "Cyber Security & Secretary",
      email: "henry@hacksussex.com",
      githubLink: "https://github.com/Henry-Ash-Williams",
      linkedinLink: "https://www.linkedin.com/in/henry-williams-49b7ab226/"
    },
    {
      imageUrl: amy,
      name: "Amy Cho",
      role: "Social Media",
      email: "amy@hacksussex.com",
      githubLink: "https://github.com/kittyeartales",
      linkedinLink: "https://www.linkedin.com/in/amy-cho-029989173/"
    },
    {
      imageUrl: tori,
      name: "Tori Nevins",
      role: "Social Media",
      email: "tori@hacksussex.com",
      githubLink: "",
      linkedinLink: "https://www.linkedin.com/in/tori-nevins-686069197/"
    },
    {
      imageUrl: anton,
      name: "Anton Vasiljevs",
      role: "Competitive Programming",
      email: "anton@hacksussex.com",
      githubLink: "https://github.com/TonyRikun",
      linkedinLink: "https://www.linkedin.com/in/antons-vasiljevs/"
    },
    {
      imageUrl: ryu,
      name: "Ryu Wong",
      role: "Competitive Programming",
      email: "ryu@hacksussex.com",
      githubLink: "https://github.com/SkollRyu",
      linkedinLink: "https://www.linkedin.com/in/ryu-wong/"
    },
    {
      imageUrl: jude,
      name: "Jude Birch",
      role: "Game Development",
      email: "jude@hacksussex.com",
      githubLink: "https://github.com/judebirch",
      linkedinLink: "https://www.linkedin.com/in/jude-birch-1288a0193/"
    },
    {
      imageUrl: patrick,
      name: "Patrick Culmer",
      role: "Robotics",
      email: "patrick@hacksussex.com",
      githubLink: "https://github.com/VeryCoolPatrick",
      linkedinLink: "https://www.linkedin.com/in/patrick-culmer-982628195/"
    },
    {
      imageUrl: lukas,
      name: "Lukas Hastings",
      role: "Robotics",
      email: "lukas@hacksussex.com",
      githubLink: "",
      linkedinLink: "https://www.linkedin.com/in/lukas-hastings-a9a055255/"
    },
    {
      imageUrl: richerd,
      name: "Richerd Joseph",
      role: "Events Management",
      email: "richerd@hacksussex.com",
      githubLink: "",
      linkedinLink: "https://www.linkedin.com/in/richerd-joseph-479492223/"
    },
    {
      imageUrl: josh,
      name: "Josh Kybett",
      role: "Odd Jobsman",
      email: "josh@hacksussex.com",
      githubLink: "https://github.com/JKybett",
      linkedinLink: "https://www.linkedin.com/in/jkybett/"
    },
    {
      imageUrl: david,
      name: "David Frommont",
      role: "Web Development",
      email: "david@hacksussex.com",
      githubLink: "https://github.com/davidfrommont",
      linkedinLink: "https://www.linkedin.com/in/david-frommont/"
    },
    {
      imageUrl: emily,
      name: "Emily-mae Neame",
      role: "General Committee",
      email: "emily@hacksussex.com",
      githubLink: "",
      linkedinLink: ""
    },
    {
      imageUrl: elias,
      name: "Elias Lasselle",
      role: "General Committee",
      email: "elias@hacksussex.com",
      githubLink: "",
      linkedinLink: "https://www.linkedin.com/in/eliaslassalle/"
    },
    {
      imageUrl: jamie,
      name: "Jamie Sage",
      role: "Social Media",
      email: "jamie@hacksussex.com",
      githubLink: "",
      linkedinLink: "https://www.linkedin.com/in/jamie-sage/"
    },
    {
      imageUrl: amyS,
      name: "Amy Scott",
      role: "Social Media",
      email: "",
      githubLink: "",
      linkedinLink: "https://www.linkedin.com/in/amy-scott-ba6038221/"
    },
    {
      imageUrl: keagan,
      name: "Keagan Kozlowski",
      role: "Sponsors",
      email: "keagan@hacksussex.com",
      githubLink: "https://github.com/KeaganKozlowski",
      linkedinLink: "https://www.linkedin.com/in/keagankozlowski/"
    },
    //amy, eddie, fin, john, keagan
  ];

  return (
    <>
    <div className="container mt-5">
      <div className="row">
        <div className="col text-center">
          <h1 className="display-3 fw-bold">Hi, we are HackSussex</h1>
        </div>
      </div>
      <div className="row mt-4">
          <div className="col px-4">
            <p className={styles.responsiveText}>We’ve been the University of Sussex’s Society for all things computer science since 2012. Our mission is to foster a dynamic and collaborative environment where students passionate about computer science can come together to learn, create, and innovate. </p>
            <p className={styles.responsiveText}>We organise various events, workshops, hackathons, and networking sessions that provide our members with opportunities to enhance their skills, connect with industry professionals, and work on real-world projects. Over the years, we have forged strong collaborations with many organisations in order to bring these events to life and to help deliver on our mission by providing valuable opportunities to our student members. </p>
            <p className={styles.responsiveText}>We’d encourage everyone to get stuck into our online community and in-person events. Whether you’re a programming prodigy or just dipping your toes into tech, HackSussex has time, space and resources to learn and grow! </p>
            <p className={styles.responsiveText}>If you’d like to collaborate with us then please do not hesitate to get in touch <a href="mailto:contact@hacksussex.com">contact@hacksussex.com</a></p>
          </div>
      </div>
    </div>
    
    <div className={styles.meetCommitteeSection}>
        <div className="container mt-5">
          <h1 className="text-center mb-5 text fw-bold display-4 border-bottom w-75 ms-auto me-auto pb-3">Meet the Committee</h1>
          {Array(Math.ceil(committeeMembers.length / 5)).fill().map((_, rowIndex) => (
            <div className="row d-flex justify-content-center"  key={rowIndex}>
              {committeeMembers.slice(rowIndex * 5, (rowIndex + 1) * 5).map(member => (
                <div className="col-lg-2 col-md-3 col-sm-4 col-12 mb-5" key={member.name}>
                  <PhotoCard {...member} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;