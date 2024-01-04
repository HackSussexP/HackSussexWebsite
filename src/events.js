// format for date is YYYY-MM-DD

const events = [
  {
    "image": require("./assets/events/cc22.jpg"),
    "title": "Coders Cup 2022",
    "description": "Our 2nd Coders Cup! Held due to the pandemic cancelling our in-person events. Who will be crowned the best programmer at Sussex University!\n\nFollowing our online qualifiers, 8 contestants will go head to head in competing live on programming challenges. The winner moves onto the next rounds to decide who will be crowned the Coder's Cup champion!",
    "location": "Hybrid/Sussex Media Technology Lab",
    "date": "2022-06-01",
    "time": "12pm - 2pm",
    "cost": "Free"
  },
  {
    "image": require("./assets/events/hs23.jpg"),
    "title": "Hackathon 2023",
    "description": "Our annual hackathon. Join us for a free weekend of coding, eating and winning prizes!\n\nEvery year, HackSussex hosts its main event, the hackathon!\n\nWe provide a free event for students and graduates to stretch their skills and win prizes across a wide range of technical areas, such as robotics, fintech, artifical intelligence, games development and more.\n\n Meals are provided throughout the event to ensure our hackers are well fed and powered up to produce the best projects over the course of a weekend. \n\nOnce submission close, each team will present their project to our panel of judges to decide who will win each track, along with the grand prize winner of the entire hackathon.",
    "location": "Sussex Campus - Chichester 1 Building",
    "date": "2023-02-18",
    "time": "10am - 6pm",
    "cost": "Free"
  },
  {
    "image": require("./assets/events/hs23.jpg"),
    "title": "Hackathon 2024",
    "description": "Our annual hackathon. Join us for a free weekend of coding, eating and winning prizes!\n\nEvery year, HackSussex hosts its main event, the hackathon!\n\nWe provide a free event for students and graduates to stretch their skills and win prizes across a wide range of technical areas, such as robotics, fintech, artifical intelligence, games development and more.\n\n Meals are provided throughout the event to ensure our hackers are well fed and powered up to produce the best projects over the course of a weekend. \n\nOnce submission close, each team will present their project to our panel of judges to decide who will win each track, along with the grand prize winner of the entire hackathon.",
    "location": "Sussex Campus - Chichester 1 Building",
    "date": "2024-02-17",
    "time": "10am - 6pm",
    "cost": "Free"
  },
  {
    "image": require("./assets/events/cc23.jpg"),
    "title": "Coders Cup 2023",
    "description": "Our 3rd Coders Cup! Held due to the pandemic cancelling our in-person events. Who will be crowned the best programmer at Sussex University!\n\nFollowing our online qualifiers, 8 contestants will go head to head in competing live on programming challenges. The winner moves onto the next rounds to decide who will be crowned the Coder's Cup champion!",
    "location": "Sussex Media Technoloy Lab",
    "date": "2023-05-04",
    "time": "12pm - 2pm",
    "cost": "Free"
  },
  {
    "image": require("./assets/events/code-social.JPEG"),
    "title": "Weekly Code Social",
    "description": "Every week of term, we hold a social to meet and chat with fellow students, no coding, no stress, just free snacks and soft drink provided.\n\nGrab a drink, sit back, play some games and meet new people.",
    "location": "Sussex Campus, Chichester 1 Building, Future Technology Lab (FTL)",
    "date": "2023-09-27",
    "time": "6pm - 8pm",
    "cost": "Free"
  },
  {
    "image": require("./assets/events/dylan-beatie.jpg"),
    "title": "Guest Talk - Dylan Beattie",
    "description": "Join us for our first guest talk, with public speaker and programming enthusiast Dylan Beattie.",
    "location": "Sussex Campus, Chichester 1 Lecture Theatre, Future Technology Lab (FTL)",
    "date": "2023-10-04",
    "time": "5pm - 6pm",
    "cost": "Free"
  },
  {
    "image": require("./assets/events/code-social.JPEG"),
    "title": "Weekly Code Social",
    "description": "Every week of term, we hold a social to meet and chat with fellow students, no coding, no stress, just free snacks and soft drink provided.\n\nGrab a drink, sit back, play some games and meet new people.",
    "location": "Sussex Campus, Chichester 1 Building, Future Technology Lab (FTL)",
    "date": "2023-10-04",
    "time": "7pm - 8pm",
    "cost": "Free"
  },
  {
    "image": require("./assets/events/merch.jpg"),
    "title": "Merch Drop",
    "description": "We are dropping our first hand-crafted merchandise. We will be drawing our raffle for some free items and launching our store.",
    "location": "Sussex Campus, Chichester 1 Building, Future Technology Lab (FTL)",
    "date": "2023-09-27",
    "time": "7pm",
    "cost": "Free"
  },
  {
    "image": require("./assets/events/leetcoding.jpg"),
    "title": "Leetcoding",
    "description": "Each week, join us for programming help sessions focused on leetcoding. Leetcoding questions are simple algorithmic problems to get you using your most efficient and effective programming techniques. Complete the challenge with 10+ IF-statements, lose some marks, complete it in 1 line, you are winning!",
    "location": "Sussex Campus, Chichester 1 Building, Future Technology Lab (FTL)",
    "date": null,
    "time": "TBC",
    "cost": "Free"
  },
  {
    "image": require("./assets/events/cybersec.jpg"),
    "title": "Cyber Security",
    "description": "Our Cyber Security team PwnSussex focus on completing HackTheBox challenges as well as entering competitions throughout the year. These challenges focus on common vulnerabilities and cracking codes within systems in an ethical and legal way. \n\nInterested in joining the team? Join our discord and head to our cyber security channel.",
    "location": "Sussex Campus, Chichester 1 Building, Future Technology Lab (FTL)",
    "date": null,
    "time": "TBC",
    "cost": "Free"
  },
  {
    "image": require("./assets/events/gamejam23.jpg"),
    "title": "Game Jam",
    "description": "Our newest annual event, the HackSussex Gamejam, aims to focus in on the game design, development and publishing scene to allow many of our amazing local studios to share their expertise with our jammers and allow them to flex their skills in game design and development. \n\nMuch like our hackathon, the game jam provides full meals throughout the weekend, allowing teams to focus on their project and produce the best indie games and tools to showcase to the judging panel at the end of the event and take home some amazing prizes.",
    "location": "Sussex Campus - Chichester 1 Building",
    "date": "2023-11-25",
    "time": "10am - 6pm",
    "cost": "Free"
  },
  {
    "image": require("./assets/events/robotics.jpg"),
    "title": "Robotics",
    "description": "New this year! We are hosting weekly robotics sessions, aimed at introducing students to simple robotics projects. Throughout which you will learn many of the basics of electronic signalling and control. This will cover motors, sensors, micro controller circuitry and more! \n\n Interested in giving it a try? Check out our discord section on robotics and turn up to the weekly sessions to get stuck in!",
    "location": "Sussex Campus, Chichester 1 Building, Future Technology Lab (FTL)",
    "date": null,
    "time": "2.30pm - 4:00pm",
    "cost": "Free"
  }
]

export default events